(this["webpackJsonpnews-viewer-react"]=this["webpackJsonpnews-viewer-react"]||[]).push([[0],{102:function(e,t){},104:function(e,t){},144:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(22),r=n.n(o),i=(n(94),n(35)),s=(n(95),n(81)),l=n.n(s),u=(n(144),n(179)),m=n(174),p=n(175),d=n(176),f=n(177),w=n(178),k=n(85),b=n.n(k),v=n(84),E=n.n(v),g=n(57),h=n.n(g);h.a.initializeApp({apiKey:"AIzaSyDCoD2HrdDqUwnYPwv1dPuyLNrmy1zAsOU",authDomain:"news-viewer-9c5e5.firebaseapp.com",databaseURL:"https://news-viewer-9c5e5.firebaseio.com",projectId:"news-viewer-9c5e5",storageBucket:"news-viewer-9c5e5.appspot.com",messagingSenderId:"845065741149",appId:"1:845065741149:web:a0d740586ccca8ada5feb4",measurementId:"G-8XT6P50Q05"});var y=h.a,L=function(e){var t=e.story,n=c.a.useState(!1),o=Object(i.a)(n,2),r=o[0],s=o[1];Object(a.useEffect)((function(){var e=t.link.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-");y.firestore().collection("liked-stories").doc(e).get().then((function(e){var t=e.data();t&&s(t.isLiked)}))}),[t.link]);return c.a.createElement(u.a,{className:"story-card"},c.a.createElement(m.a,null,c.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},t.pubDate),c.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),c.a.createElement(p.a,{color:"textSecondary"},t.content)),c.a.createElement(d.a,null,c.a.createElement(f.a,{className:"read-more-button",size:"small",color:"primary",onClick:function(){window.open(t.link,"_blank").focus()}},"Read more"),c.a.createElement(w.a,{onClick:function(){var e=t.link.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-");y.firestore().collection("liked-stories").doc(e).set({isLiked:!r}),s(!r)}},r?c.a.createElement(E.a,null):c.a.createElement(b.a,null))))},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){(new l.a).parseURL("https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml?edition=uk").then((function(e){console.log(e),o(e.items)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"stories-column"},n.map((function(e){return c.a.createElement(L,{key:e.guid,story:e})})))};r.a.render(c.a.createElement(j,null),document.getElementById("root"))},89:function(e,t,n){e.exports=n(160)},94:function(e,t,n){},95:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.35524d00.chunk.js.map