"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[762],{5762:function(e,s,n){n.r(s),n.d(s,{default:function(){return ee}});var t=n(4838),a=n(2791),c=n(9434),i=n(7380),r="ButtonAddTransactions_btnAddTransaction__ES5bt",o="ButtonAddTransactions_iconAddPlus__TZsyd",l=n(4716),d=n(622),_=n(7609),u=n(184),h=function(){var e=(0,c.I0)(),s=(0,c.v9)(i.uG);return(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",className:r,onClick:function(){e((0,l.$e)())},children:(0,u.jsx)("svg",{className:o,children:(0,u.jsx)("use",{href:_.Z+"#icon-plus"})})}),s&&(0,u.jsx)(d.Z,{})]})},m=n(3433),x=n(4805),j={div:"TransactionsDesctopTablet_div__jYOny",table:"TransactionsDesctopTablet_table__KUnoK",headerTable:"TransactionsDesctopTablet_headerTable__4llcD",headerName:"TransactionsDesctopTablet_headerName__suwtt",date:"TransactionsDesctopTablet_date__3YiP7",type:"TransactionsDesctopTablet_type__14U7i",category:"TransactionsDesctopTablet_category__ltpVC",comment:"TransactionsDesctopTablet_comment__9G-lN",sum:"TransactionsDesctopTablet_sum__V5ywL",tbody:"TransactionsDesctopTablet_tbody__JU-cE",overflow:"TransactionsDesctopTablet_overflow__VSjyP",nowOverflow:"TransactionsDesctopTablet_nowOverflow__-eFXT"},b=n(1413),p=n(3553),T="DesktopTableList_income__0NHT1",f="DesktopTableList_expense__NIB8H",N="DesktopTableList_bodyTable__3FaJZ",v="DesktopTableList_buttonDelete__U3bS5",D="DesktopTableList_buttonEdit__KqFqN",y="DesktopTableList_pen__gTa-q",k="DesktopTableList_sectionButton__a+5p-",g="DesktopTableList_date__XwXCn",L="DesktopTableList_type__tUqqI",S="DesktopTableList_category__3sVsD",w="DesktopTableList_comment__jh1uY",E="DesktopTableList_sum__xJzKK",C=n(3255),M=n(8977),I=function(e){if(e)return(0,M.Z)(new Date(e),"dd.MM.yy")},Z=function(e){var s=e.id,n=e.transactionDate,t=e.type,a=e.comment,i=e.amount,r=e.categoryId,o=(0,c.I0)(),d=(0,c.v9)(p.us).find((function(e){return e.id===r})),h=I(n);return(0,u.jsxs)("tr",{className:N,children:[(0,u.jsx)("td",{className:g,children:h}),(0,u.jsx)("td",{className:L,children:"EXPENSE"===t?"-":"+"}),(0,u.jsx)("td",{className:S,children:null===d||void 0===d?void 0:d.name}),(0,u.jsx)("td",{className:w,children:"".concat(""===a?null===d||void 0===d?void 0:d.name:a)}),(0,u.jsx)("td",{className:"".concat(E," ").concat("".concat("EXPENSE"===t?f:T)),children:Math.abs(i)}),(0,u.jsxs)("td",{className:k,children:[(0,u.jsx)("button",{className:D,onClick:function(){return function(e){console.log(e),o((0,l.Kk)(e))}(s)},children:(0,u.jsx)("svg",{className:y,children:(0,u.jsx)("use",{href:_.Z+"#icon-pen"})})}),(0,u.jsx)("button",{className:v,onClick:function(){return e=s,console.log(s),void o((0,C.deleteTransactionThunk)(e));var e},children:"Delete"})]})]})},q="BodyTable_button__sarmv",B="BodyTable_td__HuXbH",F=function(e){var s=e.finanseSort,n=(0,c.I0)(),t=(0,c.v9)(p.tI);return(0,u.jsx)(u.Fragment,{children:0===t.length?(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{className:B,children:[(0,u.jsx)("h1",{children:"add transactions..."}),(0,u.jsx)("button",{className:q,onClick:function(){n((0,l.$e)())},children:(0,u.jsx)("svg",{children:(0,u.jsx)("use",{href:_.Z+"#icon-plus"})})})]})}):(0,u.jsx)(u.Fragment,{children:s.map((function(e){return(0,u.jsx)(Z,(0,b.Z)({},e),e.id)}))})})},P=function(e){var s=e.finanseSort,n=e.Scrol,t=(0,c.v9)(p.NH);return console.log(n()),(0,u.jsxs)("div",{className:"".concat(j.div," "),children:[(0,u.jsx)("table",{className:j.table,children:(0,u.jsx)("thead",{className:j.headerTable,children:(0,u.jsxs)("tr",{className:j.headerName,children:[(0,u.jsx)("th",{className:j.date,children:"Date"}),(0,u.jsx)("th",{className:j.type,children:"Type"}),(0,u.jsx)("th",{className:j.category,children:"Category"}),(0,u.jsx)("th",{className:j.comment,children:"Comment"}),(0,u.jsx)("th",{className:j.sum,children:"Sum"}),(0,u.jsx)("th",{className:j.th})]})})}),(0,u.jsx)("div",{children:(0,u.jsx)("table",{className:"".concat(j.secondTable," ").concat(n()?j.overflow:j.nowOverflow),children:(0,u.jsx)("tbody",{className:j.tbody,children:t?(0,u.jsx)("tr",{children:(0,u.jsx)("td",{children:(0,u.jsx)("h2",{children:"Loading..."})})}):(0,u.jsx)(F,{finanseSort:s})})})})]})},X="MobileList_block__ONcqE",H="MobileList_text__pnbW7",K="MobileList_buttonDelete__BoMJt",J="MobileList_buttonEdit__pEjL2",O="MobileList_income__QbIvN",U="MobileList_expense__Jeotd",V="MobileList_pen__74OCJ",A=function(e){var s=e.id,n=e.transactionDate,t=e.type,a=e.comment,i=e.amount,r=e.categoryId,o=(0,c.I0)(),d=(0,c.v9)(p.us).find((function(e){return e.id===r}));return(0,u.jsx)("li",{children:(0,u.jsxs)("ul",{className:X,children:[(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("p",{children:"Date"}),(0,u.jsx)("p",{children:I(n)})]}),(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("p",{children:"Type"}),(0,u.jsx)("p",{children:"EXPENSE"===t?"-":"+"})]}),(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("p",{children:"Category"}),(0,u.jsx)("p",{children:null===d||void 0===d?void 0:d.name})]}),(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("p",{children:"Comment"}),(0,u.jsx)("p",{children:"".concat(""===a?null===d||void 0===d?void 0:d.name:a)})]}),(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("p",{children:"Sum"}),(0,u.jsx)("p",{className:"".concat("".concat("EXPENSE"===t?U:O)),children:Math.abs(i)})]}),(0,u.jsxs)("li",{className:H,children:[(0,u.jsx)("button",{className:K,onClick:function(){return function(e){o((0,C.deleteTransactionThunk)(e))}(s)},children:"Delete"}),(0,u.jsxs)("button",{className:J,onClick:function(){return function(e){o((0,l.Kk)(e))}(s)},children:[(0,u.jsx)("svg",{className:V,children:(0,u.jsx)("use",{href:_.Z+"#icon-pen"})}),"Edit"]})]})]})})},Q="BodyList_div__qGLRV",G="BodyList_button__lmZbD",Y=function(e){var s=e.finanseSort,n=(0,c.I0)();return(0,u.jsx)("ul",{children:0===s.length?(0,u.jsxs)("div",{className:Q,children:[(0,u.jsx)("h1",{children:"add transactions..."}),(0,u.jsx)("button",{className:G,onClick:function(){n((0,l.$e)())},children:"add"})]}):(0,u.jsx)(u.Fragment,{children:s.map((function(e){return(0,u.jsx)(A,(0,b.Z)({},e),e.id)}))})})},$=function(e){var s=e.finanseSort,n=(0,c.v9)(p.NH);return(0,u.jsx)(u.Fragment,{children:n?(0,u.jsx)("h1",{children:"Loading..."}):(0,u.jsx)(Y,{finanseSort:s})})},W=function(e){var s=e.finanseSort,n=e.Scrol,t=(0,c.I0)();(0,a.useEffect)((function(){t((0,C.getTransactionThunk)()),t((0,C.getCategoriesThunk)())}),[t]);var i=(0,x.useMediaQuery)({query:"(min-width:768px)"}),r=(0,x.useMediaQuery)({query:"(max-width: 767px)"});return(0,u.jsxs)(u.Fragment,{children:[i&&(0,u.jsx)(P,{Scrol:n,finanseSort:s}),r&&(0,u.jsx)($,{finanseSort:s})]})},z=function(){var e=(0,c.v9)(p.tI),s=(0,m.Z)(e).reverse().sort((function(e,s){return new Date(s.transactionDate)-new Date(e.transactionDate)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(W,{Scrol:function(){return s.length>=7},finanseSort:s})})},R="DashboardPage_homeWrapper__LSP7H",ee=function(){var e=(0,x.useMediaQuery)({query:"(max-width: 767px)"});return(0,u.jsxs)("div",{className:R,children:[e&&(0,u.jsx)(t.y,{}),(0,u.jsx)(z,{}),(0,u.jsx)(h,{})]})}}}]);
//# sourceMappingURL=762.30a420b5.chunk.js.map