(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{7316:function(n,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/TicTacToe/TicTacToe",function(){return r(7605)}])},7605:function(n,o,r){"use strict";r.r(o);var i=r(5893),e=r(7294),l=r(205),t=r.n(l);function u(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,i=new Array(o);r<o;r++)i[r]=n[r];return i}function c(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,o){if(!n)return;if("string"===typeof n)return u(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(n,o)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o.default=function(){var n=function(n,o){var r;a||s||(N[n][o]=null===M||void 0===M||null===(r=M.HUMAN)||void 0===r?void 0:r.SYM,m((function(n){return c(n)})),l(),v(!0))},o=function(){var n;if(!s){!function(n){var o=Date.now(),r=null;do{r=Date.now()}while(r-o<n)}(50);var o=r();N[o.arrayIndex][o.index]=null===M||void 0===M||null===(n=M.CPU)||void 0===n?void 0:n.SYM,m((function(n){return c(n)})),l(),v(!1)}},r=function(){var n=[];N.forEach((function(o,r){o.forEach((function(o,i){""===o&&n.push({arrayIndex:r,index:i})}))}));var o=Math.floor(Math.random()*n.length);return n[o]},l=function(){for(var n,o=function(n){var o,r,i=N.map((function(o){return o[n]}));return i.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.CPU)||void 0===o?void 0:o.SYM)}))?(f(null===M||void 0===M||null===(o=M.CPU)||void 0===o?void 0:o.NAME),{v:void 0}):i.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.HUMAN)||void 0===o?void 0:o.SYM)}))?(f(null===M||void 0===M||null===(r=M.HUMAN)||void 0===r?void 0:r.NAME),{v:void 0}):void 0},r=0;r<N.length;r++){var i,e,l=N[r];if(l.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.CPU)||void 0===o?void 0:o.SYM)})))return void f(null===M||void 0===M||null===(i=M.CPU)||void 0===i?void 0:i.NAME);if(l.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.HUMAN)||void 0===o?void 0:o.SYM)})))return void f(null===M||void 0===M||null===(e=M.HUMAN)||void 0===e?void 0:e.NAME)}for(var t=0;t<3;t++){var u=o(t);if("object"===((n=u)&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return u.v}var c,a,v,d,s=[N[0][0],N[1][1],N[2][2]],h=[N[0][2],N[1][1],N[2][0]];return s.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.CPU)||void 0===o?void 0:o.SYM)}))?void f(null===M||void 0===M||null===(c=M.CPU)||void 0===c?void 0:c.NAME):s.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.HUMAN)||void 0===o?void 0:o.SYM)}))?void f(null===M||void 0===M||null===(a=M.HUMAN)||void 0===a?void 0:a.NAME):h.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.CPU)||void 0===o?void 0:o.SYM)}))?void f(null===M||void 0===M||null===(v=M.CPU)||void 0===v?void 0:v.NAME):h.every((function(n){var o;return n===(null===M||void 0===M||null===(o=M.HUMAN)||void 0===o?void 0:o.SYM)}))?void f(null===M||void 0===M||null===(d=M.HUMAN)||void 0===d?void 0:d.NAME):N.flat().every((function(n){return""!==n}))?void f("draw"):void f("")},u=(0,e.useState)(!1),a=u[0],v=u[1],d=(0,e.useState)(""),s=d[0],f=d[1],h=(0,e.useState)([["","",""],["","",""],["","",""]]),N=h[0],m=h[1],M={CPU:{SYM:"O",NAME:"CPU"},HUMAN:{SYM:"X",NAME:"You"}};return(0,e.useEffect)((function(){s||a&&o()})),(0,i.jsxs)("div",{children:[s&&(0,i.jsx)("button",{className:t().video_game_button,onClick:function(){m([["","",""],["","",""],["","",""]]),f(""),v(!1)},children:"Play Again"}),s&&(0,i.jsx)("h2",{children:"draw"===s?"It's a draw!":""!==s?"".concat(s," won!"):void 0}),(0,i.jsx)("div",{children:!s&&(0,i.jsxs)("h2",{children:[" ",a?"CPU's turn":"Your turn"," "]})}),(0,i.jsxs)("div",{className:t().container,children:[(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(0,0)},className:t().cell,children:N[0][0]}),(0,i.jsx)("span",{onClick:function(){return n(0,1)},className:t().cell,children:N[0][1]}),(0,i.jsx)("span",{onClick:function(){return n(0,2)},className:t().cell,children:N[0][2]})]}),(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(1,0)},className:t().cell,children:N[1][0]}),(0,i.jsx)("span",{onClick:function(){return n(1,1)},className:t().cell,children:N[1][1]}),(0,i.jsx)("span",{onClick:function(){return n(1,2)},className:t().cell,children:N[1][2]})]}),(0,i.jsxs)("div",{className:t().col,children:[(0,i.jsx)("span",{onClick:function(){return n(2,0)},className:t().cell,children:N[2][0]}),(0,i.jsx)("span",{onClick:function(){return n(2,1)},className:t().cell,children:N[2][1]}),(0,i.jsx)("span",{onClick:function(){return n(2,2)},className:t().cell,children:N[2][2]})]})]})]})}},205:function(n){n.exports={container:"TicTacToe_container__W2ysi",col:"TicTacToe_col__hhJDA",cell:"TicTacToe_cell__pm7ii",video_game_button:"TicTacToe_video_game_button__WyDZD"}}},function(n){n.O(0,[774,888,179],(function(){return o=7316,n(n.s=o);var o}));var o=n.O();_N_E=o}]);