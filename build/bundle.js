var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.data!==n&&(t.data=n)}let h;function m(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}const g=[],y=[],v=[],w=[],b=Promise.resolve();let $=!1;function k(t){v.push(t)}let _=!1;const j=new Set;function C(){if(!_){_=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];m(n),P(n.$$)}for(g.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];j.has(n)||(j.add(n),n())}v.length=0}while(g.length);for(;w.length;)w.pop()();$=!1,_=!1,j.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const S=new Set;let z;function A(){z={r:0,c:[],p:z}}function q(){z.r||r(z.c),z=z.p}function E(t,n){t&&t.i&&(S.delete(t),t.i(n))}function M(t,n,e,r){if(t&&t.o){if(S.has(t))return;S.add(t),z.c.push(()=>{S.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function D(t,n){const e=n.token={};function r(t,r,o,u){if(n.token!==e)return;n.resolved=u;let i=n.ctx;void 0!==o&&(i=i.slice(),i[o]=u);const c=t&&(n.current=t)(i);let a=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==r&&t&&(A(),M(t,1,1,()=>{n.blocks[e]=null}),q())}):n.block.d(1),c.c(),E(c,1),c.m(n.mount(),n.anchor),a=!0),n.block=c,n.blocks&&(n.blocks[r]=c),a&&C()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const e=x();if(t.then(t=>{m(e),r(n.then,1,n.value,t),m(null)},t=>{m(e),r(n.catch,2,n.error,t),m(null)}),n.current!==n.pending)return r(n.pending,0),!0}else{if(n.current!==n.then)return r(n.then,1,n.value,t),!0;n.resolved=t}var o}function O(t,e,u){const{fragment:i,on_mount:c,on_destroy:a,after_update:s}=t.$$;i&&i.m(e,u),k(()=>{const e=c.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(k)}function X(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(g.push(t),$||($=!0,b.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(n,o,u,i,c,a,f=[-1]){const l=h;m(n);const d=o.props||{},p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:f};let x=!1;if(p.ctx=u?u(n,d,(t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),x&&N(n,t)),e}):[],p.update(),x=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();o.intro&&E(n.$$.fragment),O(n,o.target,o.anchor),C()}m(l)}class T{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}var U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}var R,V=F((function(t){!function(t,n,e){function r(t){var n,e=this,r=(n=4022871197,function(t){t=String(t);for(var e=0;e<t.length;e++){var r=.02519603282416938*(n+=t.charCodeAt(e));r-=n=r>>>0,n=(r*=n)>>>0,n+=4294967296*(r-=n)}return 2.3283064365386963e-10*(n>>>0)});e.next=function(){var t=2091639*e.s0+2.3283064365386963e-10*e.c;return e.s0=e.s1,e.s1=e.s2,e.s2=t-(e.c=0|t)},e.c=1,e.s0=r(" "),e.s1=r(" "),e.s2=r(" "),e.s0-=r(t),e.s0<0&&(e.s0+=1),e.s1-=r(t),e.s1<0&&(e.s1+=1),e.s2-=r(t),e.s2<0&&(e.s2+=1),r=null}function o(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function u(t,n){var e=new r(t),u=n&&n.state,i=e.next;return i.int32=function(){return 4294967296*e.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,u&&("object"==typeof u&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.alea=u}(0,t,!1)})),G=F((function(t){!function(t,n,e){function r(t){var n=this,e="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function u(t,n){var e=new r(t),u=n&&n.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=e.next,i.quick=i,u&&("object"==typeof u&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.xor128=u}(0,t,!1)})),H=F((function(t){!function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),r==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function u(t,n){var e=new r(t),u=n&&n.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=e.next,i.quick=i,u&&("object"==typeof u&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.xorwow=u}(0,t,!1)})),I=F((function(t){!function(t,n,e){function r(t){var n=this;n.next=function(){var t,e,r=n.x,o=n.i;return t=r[o],e=(t^=t>>>7)^t<<24,e^=(t=r[o+1&7])^t>>>10,e^=(t=r[o+3&7])^t>>>3,e^=(t=r[o+4&7])^t<<7,t=r[o+7&7],e^=(t^=t<<13)^t<<9,r[o]=e,n.i=o+1&7,e},function(t,n){var e,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,e=0;e<n.length;++e)r[7&e]=r[7&e]<<15^n.charCodeAt(e)+r[e+1&7]<<13;for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);for(8==e?r[7]=-1:r[e],t.x=r,t.i=0,e=256;e>0;--e)t.next()}(n,t)}function o(t,n){return n.x=t.x.slice(),n.i=t.i,n}function u(t,n){null==t&&(t=+new Date);var e=new r(t),u=n&&n.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=e.next,i.quick=i,u&&(u.x&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.xorshift7=u}(0,t,!1)})),J=F((function(t){!function(t,n,e){function r(t){var n=this;n.next=function(){var t,e,r=n.w,o=n.X,u=n.i;return n.w=r=r+1640531527|0,e=o[u+34&127],t=o[u=u+1&127],e^=e<<13,t^=t<<17,e^=e>>>15,t^=t>>>12,e=o[u]=e^t,n.i=u,e+(r^r>>>16)|0},function(t,n){var e,r,o,u,i,c=[],a=128;for(n===(0|n)?(r=n,n=null):(n+="\0",r=0,a=Math.max(a,n.length)),o=0,u=-32;u<a;++u)n&&(r^=n.charCodeAt((u+32)%n.length)),0===u&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,u>=0&&(i=i+1640531527|0,o=0==(e=c[127&u]^=r+i)?o+1:0);for(o>=128&&(c[127&(n&&n.length||0)]=-1),o=127,u=512;u>0;--u)r=c[o+34&127],e=c[o=o+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,c[o]=r^e;t.w=i,t.X=c,t.i=o}(n,t)}function o(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function u(t,n){null==t&&(t=+new Date);var e=new r(t),u=n&&n.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=e.next,i.quick=i,u&&(u.X&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.xor4096=u}(0,t,!1)})),K=F((function(t){!function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.b,e=n.c,r=n.d,o=n.a;return t=t<<25^t>>>7^e,e=e-r|0,r=r<<24^r>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-r|0,n.d=r<<16^e>>>16^o,n.a=o-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):e+=t;for(var r=0;r<e.length+20;r++)n.b^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function u(t,n){var e=new r(t),u=n&&n.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},i.int32=e.next,i.quick=i,u&&("object"==typeof u&&o(u,e),i.state=function(){return o(e,{})}),i}n&&n.exports?n.exports=u:e&&e.amd?e((function(){return u})):this.tychei=u}(0,t,!1)})),L=(R=Object.freeze({__proto__:null,default:{}}))&&R.default||R,Q=F((function(t){!function(n,e,r){var o,u=r.pow(256,6),i=r.pow(2,52),c=2*i;function a(t,a,p){var h=[],m=l(function t(n,e){var r,o=[],u=typeof n;if(e&&"object"==u)for(r in n)try{o.push(t(n[r],e-1))}catch(t){}return o.length?o:"string"==u?n:n+"\0"}((a=1==a?{entropy:!0}:a||{}).entropy?[t,d(e)]:null==t?function(){try{var t;return o&&(t=o.randomBytes)?t=t(256):(t=new Uint8Array(256),(n.crypto||n.msCrypto).getRandomValues(t)),d(t)}catch(t){var r=n.navigator,u=r&&r.plugins;return[+new Date,n,u,n.screen,d(e)]}}():t,3),h),x=new s(h),g=function(){for(var t=x.g(6),n=u,e=0;t<i;)t=256*(t+e),n*=256,e=x.g(1);for(;t>=c;)t/=2,n/=2,e>>>=1;return(t+e)/n};return g.int32=function(){return 0|x.g(4)},g.quick=function(){return x.g(4)/4294967296},g.double=g,l(d(x.S),e),(a.pass||p||function(t,n,e,o){return o&&(o.S&&f(o,x),t.state=function(){return f(x,{})}),e?(r.random=t,n):t})(g,m,"global"in a?a.global:this==r,a.state)}function s(t){var n,e=t.length,r=this,o=0,u=r.i=r.j=0,i=r.S=[];for(e||(t=[e++]);o<256;)i[o]=o++;for(o=0;o<256;o++)i[o]=i[u=255&u+t[o%e]+(n=i[o])],i[u]=n;(r.g=function(t){for(var n,e=0,o=r.i,u=r.j,i=r.S;t--;)n=i[o=255&o+1],e=256*e+i[255&(i[o]=i[u=255&u+n])+(i[u]=n)];return r.i=o,r.j=u,e})(256)}function f(t,n){return n.i=t.i,n.j=t.j,n.S=t.S.slice(),n}function l(t,n){for(var e,r=t+"",o=0;o<r.length;)n[255&o]=255&(e^=19*n[255&o])+r.charCodeAt(o++);return d(n)}function d(t){return String.fromCharCode.apply(0,t)}if(l(r.random(),e),t.exports){t.exports=a;try{o=L}catch(t){}}else r.seedrandom=a}("undefined"!=typeof self?self:U,[],Math)}));Q.alea=V,Q.xor128=G,Q.xorwow=H,Q.xorshift7=I,Q.xor4096=J,Q.tychei=K;var W=Q;function Y(n){let e,r,o,u,h,m,x;return{c(){e=f("div"),r=l(n[0]),o=l(" "),u=f("video"),u.muted=h=!!n[1],d(u,"class","svelte-wrasua"),d(e,"id",n[0]),d(e,"class",m=i(n[1]?"me":"")+" svelte-wrasua"),d(e,"style",x=n[2]?"":"display: none")},m(t,i){a(t,e,i),c(e,r),c(e,o),c(e,u),n[4](u)},p(t,[n]){1&n&&p(r,t[0]),2&n&&h!==(h=!!t[1])&&(u.muted=h),1&n&&d(e,"id",t[0]),2&n&&m!==(m=i(t[1]?"me":"")+" svelte-wrasua")&&d(e,"class",m),4&n&&x!==(x=t[2]?"":"display: none")&&d(e,"style",x)},i:t,o:t,d(t){t&&s(e),n[4](null)}}}function Z(t,n,e){let r,{id:o="some-id"}=n,{me:u=!1}=n,{stream:i}=n;var c;return c=()=>{e(3,r.srcObject=i,r),e(3,r.onloadedmetadata=()=>r.play(),r)},x().$$.on_mount.push(c),function(t){x().$$.after_update.push(t)}(()=>{e(3,r.srcObject=i,r),e(3,r.onloadedmetadata=()=>r.play(),r)}),t.$set=t=>{"id"in t&&e(0,o=t.id),"me"in t&&e(1,u=t.me),"stream"in t&&e(2,i=t.stream)},[o,u,i,r,function(t){y[t?"unshift":"push"](()=>{e(3,r=t)})}]}class tt extends T{constructor(t){super(),B(this,t,Z,Y,u,{id:0,me:1,stream:2})}}function nt(t,n,e){const r=t.slice();return r[8]=n[e],r}function et(n){let e,r,o=n[11].message+"";return{c(){e=f("p"),r=l(o)},m(t,n){a(t,e,n),c(e,r)},p(t,n){1&n&&o!==(o=t[11].message+"")&&p(r,o)},i:t,o:t,d(t){t&&s(e)}}}function rt(t){let n,e,r=t[0],o=[];for(let n=0;n<r.length;n+=1)o[n]=ot(nt(t,r,n));const u=t=>M(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=l("")},m(t,r){for(let n=0;n<o.length;n+=1)o[n].m(t,r);a(t,n,r),e=!0},p(t,e){if(1&e){let i;for(r=t[0],i=0;i<r.length;i+=1){const u=nt(t,r,i);o[i]?(o[i].p(u,e),E(o[i],1)):(o[i]=ot(u),o[i].c(),E(o[i],1),o[i].m(n.parentNode,n))}for(A(),i=r.length;i<o.length;i+=1)u(i);q()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)E(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)M(o[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t),t&&s(n)}}}function ot(t){let n;const e=new tt({props:{id:t[8].id,me:t[8].myPeer,stream:t[8].stream}});return{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,r){O(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.id=t[8].id),1&n&&(r.me=t[8].myPeer),1&n&&(r.stream=t[8].stream),e.$set(r)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function ut(n){let e;return{c(){e=f("p"),e.textContent="waiting..."},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}function it(t){let n,e,r,o={ctx:t,current:null,token:null,pending:ut,then:rt,catch:et,value:0,error:11,blocks:[,,,]};return D(e=t[0],o),{c(){n=f("div"),o.block.c(),d(n,"class","svelte-18sk4p0")},m(t,e){a(t,n,e),o.block.m(n,o.anchor=null),o.mount=()=>n,o.anchor=null,r=!0},p(n,[r]){if(t=n,o.ctx=t,1&r&&e!==(e=t[0])&&D(e,o));else{const n=t.slice();n[0]=o.resolved,o.block.p(n,r)}},i(t){r||(E(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){M(o.blocks[t])}r=!1},d(t){t&&s(n),o.block.d(),o.token=null,o=null}}}function ct(t,n,e){const r=(t,n)=>W(n+t)().toString(36).substring(2,12),o=(t,n,e)=>new Promise((o,u)=>{const i=r(t,n),c=new Peer(i,e).on("open",async t=>{o({id:i,myPeer:c})}).on("error",n=>{n.message.includes("is taken")?o({id:i,myPeer:null}):u({message:n+" position: "+t+", id: "+i})})}),u=async t=>{const n=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});return t.on("call",t=>{t.answer(n),t.on("stream",n=>i(t.peer,n))}),n},i=async(t,n)=>{const r=await a,o=r.find(n=>n.id===t);if(o)return o.stream=n,void e(0,a=[...r]);e(0,a=[...r,{id:t,me:!1,stream:n}])};"/"===window.location.pathname&&window.history.pushState("","","/"+Math.random().toString(36).substring(2,12));const c=window.location.pathname;let a=[];return a=(async(t,n)=>{let e=[],c=0,a=!1;for(;c<5;){const u=a?{id:r(c,t),myPeer:null}:await o(c,t,n);u.myPeer&&(a=!0),e.push(u),c+=1}const s=e.find(t=>t.myPeer);console.log(e);let f=await u(s.myPeer);return s.stream=f,e.filter(t=>!t.myPeer).map(t=>{s.myPeer.call(t.id,f).on("stream",n=>i(t.id,n))}),e})(c,{host:"030542a71cf2.ngrok.io",port:"",path:"/myapp"}),[a]}return new class extends T{constructor(t){super(),B(this,t,ct,it,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
