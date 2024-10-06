// @ts-nocheck
// @ts-ignore
const { range, cloneDeep, clamp } = _;

const INITIAL_DOC_STATE = {
  text: "Chapter 1\n\nHow to become a millionnaire\n\nFirstly, don't build a text editor. It may seem like fun, but actually ",
  styles: [],
  selectionStart: null,
  selectionEnd: null,
  xs: [],
  ys: [],
};

let isMouseDown = false;

const VIEW_W = 400;
const VIEW_H = 600;

const SF = 2;

const FONT_SIZE = 16;
const LINE_HEIGHT = FONT_SIZE * 2.5;
const PADDING = 10;
const START_X = PADDING;
const START_Y = LINE_HEIGHT + PADDING;
const END_X = (VIEW_W - PADDING) * SF;

const ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

const STYLE_FIELD_TO_VALUE = {
  fontSize: 24,
  fontWeight: "bold",
  bgColor: "yellow",
};

const STYLE_FIELDS = Object.keys(STYLE_FIELD_TO_VALUE);

// STATE WE WILL MUTATE
let docState = { ...INITIAL_DOC_STATE };
let scrollY = 0;

// KEYS
const moveCaret = ({ doc = {}, key = "" }) => {
  let newDoc = { ...doc };
  let caretIndex = newDoc.selectionStart;

  if (key === "ArrowRight") {
    caretIndex++;
  }
  if (key === "ArrowLeft") {
    caretIndex--;
  }
  caretIndex = Math.max(0, Math.min(newDoc.text.length, caretIndex));

  newDoc.selectionStart = caretIndex;
  newDoc.selectionEnd = caretIndex;

  return newDoc;
};

const insertText = ({ doc = {}, textToInsert = "" }) => {
  let newDoc = { ...doc };
  const selSmaller = Math.min(newDoc.selectionStart, newDoc.selectionEnd);
  const selBigger = Math.max(newDoc.selectionStart, newDoc.selectionEnd);

  newDoc.text =
    newDoc.text.slice(0, selSmaller) +
    textToInsert +
    newDoc.text.slice(selBigger);

  const styleAtStart = newDoc.styles[selSmaller];
  newDoc.styles = [
    ...newDoc.styles.slice(0, selSmaller),
    ...Array(textToInsert.length).fill(styleAtStart),
    ...newDoc.styles.slice(selBigger),
  ];

  newDoc.selectionStart += textToInsert.length;
  newDoc.selectionEnd = newDoc.selectionStart;

  return newDoc;
};

const getNearestCharIndex = ({ x, y, docState }) => {
  let i = 0;
  let { xs, ys } = docState;

  let nearestYIndex = getIndexOfClosest(ys, range(ys.length), y + LINE_HEIGHT);
  let lineY = ys?.[nearestYIndex];

  // Subtract until we find the nearest x
  let adjustedIndex = nearestYIndex;
  let adjustedIndexY = ys?.[adjustedIndex];
  let minXDistance = Math.abs(x - xs[adjustedIndex]);
  let minXIndex = adjustedIndex;
  while (true) {
    adjustedIndex--;
    adjustedIndexY = ys?.[adjustedIndex];

    if (adjustedIndexY !== lineY || adjustedIndex < 0) {
      break;
    }

    let xDistance = Math.abs(x - xs[adjustedIndex]);
    if (xDistance < minXDistance) {
      minXDistance = xDistance;
      minXIndex = adjustedIndex;
    }
  }

  return minXIndex;
};

const getIndexOfClosest = (values = [], indices = [], target = 0) => {
  if (!indices.length) {
    return 0;
  }

  if (indices.length === 1) {
    return indices[0];
  }

  let midIndex = Math.floor(values.length / 2);
  let midValue = values[midIndex];

  if (target <= midValue) {
    let leftValues = values.slice(0, midIndex);
    let leftIndices = indices.slice(0, midIndex);
    return getIndexOfClosest(leftValues, leftIndices, target);
  }

  let rightValues = values.slice(midIndex);
  let rightIndices = indices.slice(midIndex);
  return getIndexOfClosest(rightValues, rightIndices, target);
};

const deleteText = ({ doc = {} }) => {
  let newDoc = { ...doc };

  if (newDoc.selectionStart === newDoc.selectionEnd) {
    newDoc.selectionStart--;
  }

  const selSmaller = Math.min(newDoc.selectionStart, newDoc.selectionEnd);
  const selBigger = Math.max(newDoc.selectionStart, newDoc.selectionEnd);

  newDoc.text = newDoc.text.slice(0, selSmaller) + newDoc.text.slice(selBigger);
  newDoc.styles = [
    ...newDoc.styles.slice(0, selSmaller),
    ...newDoc.styles.slice(selBigger),
  ];
  newDoc.xs = [];
  newDoc.ys = [];

  newDoc.selectionStart = selSmaller;
  newDoc.selectionEnd = selSmaller;

  return newDoc;
};

const onWheel = e => {
  const { deltaY } = e;
  scrollY = Math.max(deltaY + scrollY, 0);
  drawDoc({ doc: docState, ctx });
};

// DRAWING

const isWordOverlappingEnd = ({ x, text, i }) => {
  if (text?.[i] !== " ") {
    return false;
  }

  let word = "";
  let j = i + 1;
  while (text[j] !== " " && text[j] !== "\n" && j < text.length) {
    word += text[j];
    j++;
  }

  return x + ctx.measureText(word).width > END_X;
};

const getNextPosition = ({ x, y, text, i }) => {
  const char = text[i];
  const charWidth = ctx.measureText(char).width;

  let shouldStartNewLine =
    char === "\n" || isWordOverlappingEnd({ x, text, i });
  if (shouldStartNewLine) {
    y += LINE_HEIGHT;
    x = START_X;
    return { x, y };
  }

  x += charWidth;
  return { x, y };
};

const drawCaret = ({ x, y, ctx }) => {
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x, y - LINE_HEIGHT);
  ctx.lineTo(x, y);
  ctx.stroke();
};

const drawSelectionBox = ({ x, y, ctx, char }) => {
  const prevFillStyle = ctx.fillStyle;
  ctx.fillStyle = "#0000FF22";
  ctx.fillRect(x, y - LINE_HEIGHT, ctx.measureText(char).width, LINE_HEIGHT);
  ctx.fillStyle = prevFillStyle;
};

const drawBox = ({ x, y, ctx, char, fillStyle }) => {
  const prevFillStyle = ctx.fillStyle;
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x, y - LINE_HEIGHT, ctx.measureText(char).width, LINE_HEIGHT);
  ctx.fillStyle = prevFillStyle;
};

const drawDoc = ({ doc, ctx }) => {
  ctx.clearRect(0, 0, VIEW_W * SF, VIEW_H * SF);
  const { text, selectionStart, selectionEnd, styles } = doc;
  let selSmaller = Math.min(selectionStart, selectionEnd);
  let selBigger = Math.max(selectionStart, selectionEnd);

  ctx.font = `${FONT_SIZE * SF}px Arial`;

  doc.xs[0] = START_X;
  doc.ys[0] = START_Y;

  let i = doc.ys.findIndex(y => y - scrollY > 0);
  i = clamp(i, 0, text.length);
  let x = doc.xs[i];
  let y = doc.ys[i];

  while (i < text.length && i >= 0) {
    ctx.font = `${FONT_SIZE * SF}px Arial`;
    doc.xs[i] = x;
    doc.ys[i] = y;

    if (i === selectionStart && i === selectionEnd) {
      drawCaret({ x, y: y - scrollY, ctx });
    }

    const { fontSize, fontWeight, bgColor } = styles[i] || {};
    if (fontSize) {
      ctx.font = `${fontSize * SF}px Arial`;
    }
    if (fontWeight) {
      ctx.font = `${fontWeight} ${ctx.font}`;
    }
    if (bgColor) {
      drawBox({ x, y: y - scrollY, ctx, char: text[i], fillStyle: bgColor });
    }
    if (i >= selSmaller && i < selBigger) {
      drawSelectionBox({ x, y: y - scrollY, ctx, char: text[i] });
    }

    ctx.fillText(text[i], x, y - scrollY);
    ({ x, y } = getNextPosition({ x, y, text, i }));

    if (y - scrollY > VIEW_H * SF) {
      break;
    }

    i++;
  }

  if (selectionStart === selectionEnd && selectionStart === text.length) {
    drawCaret({ x, y: y - scrollY, ctx });
  }

  // debug
  const debugEl = document.querySelector("#debug");
  debugEl.innerHTML = `numChars: ${doc.text.length}\nnumPages: ${Math.ceil(
    doc.text.length / 1500
  )}`;
};

const onClickToggleStyle = (e, styleField = "") => {
  const isActive = e.target.getAttribute("data-active") === "true";

  const selSmaller = Math.min(docState.selectionStart, docState.selectionEnd);
  const selBigger = Math.max(docState.selectionStart, docState.selectionEnd);

  // insert style
  range(selSmaller, selBigger).forEach(i => {
    let style = docState.styles[i] || {};
    if (isActive) {
      delete style[styleField];
    } else {
      style[styleField] = STYLE_FIELD_TO_VALUE[styleField];
    }

    docState.styles[i] = style;
  });

  drawDoc({ doc: docState, ctx });
  activateToolbarButtons(docState);
};

const onClickClearStyle = () => {
  docState.styles = [];
  drawDoc({ doc: docState, ctx });
};

const onKeyDown = e => {
  if (e.metaKey || e.ctrlKey) {
    return;
  }

  if (ARROW_KEYS.includes(e.key)) {
    docState = moveCaret({ doc: docState, key: e.key });
    drawDoc({ doc: docState, ctx });
    return;
  }

  // if character key
  if (e.key.length === 1 || e.key === "Enter") {
    let charToInsert = e.key === "Enter" ? "\n" : e.key;
    docState = insertText({ doc: docState, textToInsert: charToInsert });
    drawDoc({ doc: docState, ctx });
    return;
  }

  if (e.key === "Backspace") {
    docState = deleteText({ doc: docState });
    drawDoc({ doc: docState, ctx });
    return;
  }
};

const onPaste = e => {
  e.preventDefault();
  const textToInsert = e.clipboardData.getData("text");
  docState = insertText({ doc: docState, textToInsert });
  drawDoc({ doc: docState, ctx });
};

const onMouseDown = e => {
  isMouseDown = true;
  const { offsetX, offsetY } = e;
  const x = offsetX * SF;
  const y = offsetY * SF;
  let nearestIndex = getNearestCharIndex({
    x,
    y: y + scrollY,
    docState,
  });

  docState.selectionStart = nearestIndex;
  docState.selectionEnd = nearestIndex;
  drawDoc({ doc: docState, ctx });
};

const onMouseUp = e => {
  isMouseDown = false;
};

const activateToolbarButtons = doc => {
  const selectionStyle = doc.styles
    .slice(doc.selectionStart, doc.selectionEnd)
    .reduce((acc, s) => ({ ...acc, ...s }), {});

  const isSelectionTitle = selectionStyle?.fontSize === 24;
  const isSelectionBold = selectionStyle?.fontWeight === "bold";
  const isSelectionHighlight = selectionStyle?.bgColor === "yellow";

  const btnTitle = document.querySelector("#btn-title");
  btnTitle.setAttribute("data-active", isSelectionTitle ? "true" : "false");

  const btnBold = document.querySelector("#btn-bold");
  btnBold.setAttribute("data-active", isSelectionBold ? "true" : "false");

  const btnHighlight = document.querySelector("#btn-highlight");
  btnHighlight.setAttribute(
    "data-active",
    isSelectionHighlight ? "true" : "false"
  );
};

const onMouseMove = e => {
  if (!isMouseDown) {
    return;
  }

  const { offsetX, offsetY } = e;
  const x = offsetX * SF;
  const y = offsetY * SF;

  const nearestIndex = getNearestCharIndex({
    x,
    y: y + scrollY,
    docState,
  });

  docState.selectionEnd = nearestIndex;
  drawDoc({ doc: docState, ctx });
  activateToolbarButtons(docState);
};

// SETUP
const canvas = document.querySelector("#canvas");
canvas.setAttribute("width", VIEW_W * SF);
canvas.setAttribute("height", VIEW_H * SF);

const ctx = canvas.getContext("2d");

drawDoc({ doc: docState, ctx });

document.addEventListener("keydown", onKeyDown);
document.addEventListener("paste", onPaste);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("wheel", onWheel);

const btnTitle = document.querySelector("#btn-title");
btnTitle.addEventListener("click", e => onClickToggleStyle(e, "fontSize"));

const btnBold = document.querySelector("#btn-bold");
btnBold.addEventListener("click", e => onClickToggleStyle(e, "fontWeight"));

const btnHighlight = document.querySelector("#btn-highlight");
btnHighlight.addEventListener("click", e => onClickToggleStyle(e, "bgColor"));
