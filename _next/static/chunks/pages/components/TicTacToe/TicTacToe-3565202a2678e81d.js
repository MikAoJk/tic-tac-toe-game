(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{7316:function(n,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/TicTacToe/TicTacToe",function(){return o(7605)}])},7605:function(n,r,o){"use strict";o.r(r);var i=o(5893),e=o(7294),l=o(205),t=o.n(l);function u(n,r){(null==r||r>n.length)&&(r=n.length);for(var o=0,i=new Array(r);o<r;o++)i[o]=n[o];return i}function c(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,r){if(!n)return;if("string"===typeof n)return u(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(n,r)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var n=function(n,r){var o;a||s||(N[n][r]=null===_||void 0===_||null===(o=_.HUMAN)||void 0===o?void 0:o.SYM,m((function(n){return c(n)})),l(),d(!0))},r=function(){var n;if(!s){!function(n){var r=Date.now(),o=null;do{o=Date.now()}while(o-r<n)}(100);var r=o();N[r.arrayIndex][r.index]=null===_||void 0===_||null===(n=_.CPU)||void 0===n?void 0:n.SYM,m((function(n){return c(n)})),l(),d(!1)}},o=function(){var n=[];N.forEach((function(r,o){r.forEach((function(r,i){""===r&&n.push({arrayIndex:o,index:i})}))}));var r=Math.floor(Math.random()*n.length);return n[r]},l=function(){for(var n,r=function(n){var r,o,i=N.map((function(r){return r[n]}));return i.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.CPU)||void 0===r?void 0:r.SYM)}))?(f(null===_||void 0===_||null===(r=_.CPU)||void 0===r?void 0:r.NAME),{v:void 0}):i.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.HUMAN)||void 0===r?void 0:r.SYM)}))?(f(null===_||void 0===_||null===(o=_.HUMAN)||void 0===o?void 0:o.NAME),{v:void 0}):void 0},o=0;o<N.length;o++){var i,e,l=N[o];if(l.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.CPU)||void 0===r?void 0:r.SYM)})))return void f(null===_||void 0===_||null===(i=_.CPU)||void 0===i?void 0:i.NAME);if(l.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.HUMAN)||void 0===r?void 0:r.SYM)})))return void f(null===_||void 0===_||null===(e=_.HUMAN)||void 0===e?void 0:e.NAME)}for(var t=0;t<3;t++){var u=r(t);if("object"===((n=u)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return u.v}var c,a,d,v,s=[N[0][0],N[1][1],N[2][2]],h=[N[0][2],N[1][1],N[2][0]];return s.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.CPU)||void 0===r?void 0:r.SYM)}))?void f(null===_||void 0===_||null===(c=_.CPU)||void 0===c?void 0:c.NAME):s.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.HUMAN)||void 0===r?void 0:r.SYM)}))?void f(null===_||void 0===_||null===(a=_.HUMAN)||void 0===a?void 0:a.NAME):h.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.CPU)||void 0===r?void 0:r.SYM)}))?void f(null===_||void 0===_||null===(d=_.CPU)||void 0===d?void 0:d.NAME):h.every((function(n){var r;return n===(null===_||void 0===_||null===(r=_.HUMAN)||void 0===r?void 0:r.SYM)}))?void f(null===_||void 0===_||null===(v=_.HUMAN)||void 0===v?void 0:v.NAME):N.flat().every((function(n){return""!==n}))?void f("draw"):void f("")},u=(0,e.useState)(!1),a=u[0],d=u[1],v=(0,e.useState)(""),s=v[0],f=v[1],h=(0,e.useState)([["","",""],["","",""],["","",""]]),N=h[0],m=h[1],_={CPU:{SYM:"O",NAME:"CPU"},HUMAN:{SYM:"X",NAME:"You"}};return(0,e.useEffect)((function(){s||a&&r()})),(0,i.jsxs)("div",{children:[s&&(0,i.jsx)("h2",{className:t().h2_center,children:"draw"===s?"It's a draw!":""!==s?"".concat(s," won!"):void 0}),(0,i.jsx)("div",{children:!s&&(0,i.jsxs)("h2",{className:t().h2_center,children:[" ",a?"CPU's turn":"Your turn"," "]})}),(0,i.jsxs)("div",{className:t().container,children:[(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(0,0)},className:t().cell,children:N[0][0]}),(0,i.jsxs)("span",{onClick:function(){return n(0,1)},className:t().cell,children:[" ",N[0][1]]}),(0,i.jsx)("span",{onClick:function(){return n(0,2)},className:t().cell,children:N[0][2]})]}),(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(1,0)},className:t().cell,children:N[1][0]}),(0,i.jsx)("span",{onClick:function(){return n(1,1)},className:t().cell,children:N[1][1]}),(0,i.jsx)("span",{onClick:function(){return n(1,2)},className:t().cell,children:N[1][2]})]}),(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(2,0)},className:t().cell,children:N[2][0]}),(0,i.jsx)("span",{onClick:function(){return n(2,1)},className:t().cell,children:N[2][1]}),(0,i.jsx)("span",{onClick:function(){return n(2,2)},className:t().cell,children:N[2][2]})]})]}),s&&(0,i.jsx)("button",{className:t().video_game_button,onClick:function(){m([["","",""],["","",""],["","",""]]),f(""),d(!1)},children:"Play Again"})]})}},205:function(n){n.exports={container:"TicTacToe_container__W2ysi",col:"TicTacToe_col__hhJDA",cell:"TicTacToe_cell__pm7ii",video_game_button:"TicTacToe_video_game_button__WyDZD",h2_center:"TicTacToe_h2_center__AIEdJ"}}},function(n){n.O(0,[774,888,179],(function(){return r=7316,n(n.s=r);var r}));var r=n.O();_N_E=r}]);