(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+aNp":function(e,t,a){"use strict";a.r(t);var o=a("wx14"),r=a("rePB"),n=a("q1tI"),i=a("R/WZ"),c=a("ZBNC"),l=a("kKAo"),s=a("r9w1"),d=a("Z3vd"),p=a("79Xs"),b=a("wb2y"),u=a("FrwU"),f=a.n(u),m=a("Ff2n"),g=a("iuhU"),h=a("H2TA");var v=n.createContext(),O=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,c=void 0===i?"table":i,l=e.padding,s=void 0===l?"default":l,d=e.size,p=void 0===d?"medium":d,b=e.stickyHeader,u=void 0!==b&&b,f=Object(m.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=n.useMemo((function(){return{padding:s,size:p,stickyHeader:u}}),[s,p,u]);return n.createElement(v.Provider,{value:h},n.createElement(c,Object(o.a)({role:"table"===c?null:"table",ref:t,className:Object(g.a)(a.root,r,u&&a.stickyHeader)},f)))})),j=Object(h.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(O);var y=n.createContext(),w={variant:"head"},x=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,c=void 0===i?"thead":i,l=Object(m.a)(e,["classes","className","component"]);return n.createElement(y.Provider,{value:w},n.createElement(c,Object(o.a)({className:Object(g.a)(a.root,r),ref:t,role:"thead"===c?null:"rowgroup"},l)))})),k=Object(h.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(x),N=a("NqtD"),C=a("ye/S"),S=n.forwardRef((function(e,t){var a,r,i=e.align,c=void 0===i?"inherit":i,l=e.classes,s=e.className,d=e.component,p=e.padding,b=e.scope,u=e.size,f=e.sortDirection,h=e.variant,O=Object(m.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=n.useContext(v),w=n.useContext(y),x=w&&"head"===w.variant;d?(r=d,a=x?"columnheader":"cell"):r=x?"th":"td";var k=b;!k&&x&&(k="col");var C=p||(j&&j.padding?j.padding:"default"),S=u||(j&&j.size?j.size:"medium"),M=h||w&&w.variant,D=null;return f&&(D="asc"===f?"ascending":"descending"),n.createElement(r,Object(o.a)({ref:t,className:Object(g.a)(l.root,l[M],s,"inherit"!==c&&l["align".concat(Object(N.a)(c))],"default"!==C&&l["padding".concat(Object(N.a)(C))],"medium"!==S&&l["size".concat(Object(N.a)(S))],"head"===M&&j&&j.stickyHeader&&l.stickyHeader),"aria-sort":D,role:a,scope:k},O))})),M=Object(h.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(C.e)(Object(C.c)(e.palette.divider,1),.88):Object(C.a)(Object(C.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(S),D=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,c=void 0===i?"tr":i,l=e.hover,s=void 0!==l&&l,d=e.selected,p=void 0!==d&&d,b=Object(m.a)(e,["classes","className","component","hover","selected"]),u=n.useContext(y);return n.createElement(c,Object(o.a)({ref:t,className:Object(g.a)(a.root,r,u&&{head:a.head,footer:a.footer}[u.variant],s&&a.hover,p&&a.selected),role:"tr"===c?null:"row"},b))})),z=Object(h.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(C.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(D),R={variant:"body"},P=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.component,c=void 0===i?"tbody":i,l=Object(m.a)(e,["classes","className","component"]);return n.createElement(y.Provider,{value:R},n.createElement(c,Object(o.a)({className:Object(g.a)(a.root,r),ref:t,role:"tbody"===c?null:"rowgroup"},l)))})),A=Object(h.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(P),E=a("5AJ6"),T=Object(E.a)(n.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),H=a("VD++"),L=n.forwardRef((function(e,t){var a=e.active,r=void 0!==a&&a,i=e.children,c=e.classes,l=e.className,s=e.direction,d=void 0===s?"asc":s,p=e.hideSortIcon,b=void 0!==p&&p,u=e.IconComponent,f=void 0===u?T:u,h=Object(m.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return n.createElement(H.a,Object(o.a)({className:Object(g.a)(c.root,l,r&&c.active),component:"span",disableRipple:!0,ref:t},h),i,b&&!r?null:n.createElement(f,{className:Object(g.a)(c.icon,c["iconDirection".concat(Object(N.a)(d))])}))})),I=Object(h.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(L),$=a("ZiQX"),B=a("qKvR");function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=Object(i.a)((function(e){var t,a;return Object(c.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),"& .MuiFormLabel-root":{fontSize:"1.8rem"},"& .MuiInput-root":{width:"12rem",fontSize:"1.8rem"}},"& .MuiAlert-root":{fontSize:"1.4rem"},"& .MuiTableCell-root":{fontSize:"1.6rem"}},paper:{},inputTabel:{display:"flex",flexWrap:"wrap"},button:(t={margin:e.spacing(1),padding:"0px 1.2rem",height:"4rem",width:"9rem"},t[e.breakpoints.up("sm")]={transform:"translate(0, 1rem)"},t),test:(a={overflowX:"auto"},a[e.breakpoints.down("xs")]={width:"calc(100vw - 4vw)"},a),table:{whiteSpace:"nowrap"}})})),W=function(e){var t=l(e.inochi1,e.inochi2),a=J(),o=Object.keys(t[0]),r=Object(n.useState)({rows:t,order:"desc",key:o[0]}),i=r[0],c=r[1];function l(e,t){for(var a,o,r,n,i=[],c=.15;c<.31;c+=.01)o=e+(a=Math.ceil(t*c)),r=t-a,n=" ",Math.floor(.7*o)<r&&(n="返し確定劣勢"),Math.floor(.4*o)>r&&(n="返し確定優勢"),i.push({"%":Math.floor(100*c),"自陣イノチ":o.toLocaleString(),"敵陣イノチ":r.toLocaleString(),"備考":n}),o<r&&"<span class='fontBold'>"+(30-Math.floor(100*c))/16*100+"%("+(30-Math.floor(100*c))+"/16)</span>で勝利！";return i}return Object(n.useEffect)((function(){c((function(t){return F(F({},t),{},{rows:l(e.inochi1,e.inochi2)})}))}),[e.inochi1,e.inochi2]),Object(B.b)(j,{size:"medium",className:a.table},Object(B.b)(k,null,Object(B.b)(z,null,o.map((function(e,t){return Object(B.b)(M,{align:"right",key:"table-header-col-"+t,sortDirection:i.key===e&&i.order},Object(B.b)(I,{active:i.key===e,direction:i.order,onClick:function(){return function(e){var t=e===i.key&&"desc"===i.order?"asc":"desc",a={asc:[1,-1],desc:[-1,1]},o=i.rows.slice().sort((function(o,r){return o[e]>r[e]?a[t][0]:o[e]<r[e]?a[t][1]:0}));c({rows:o,order:t,key:e})}(e)}},e))})))),Object(B.b)(A,null,i.rows.map((function(e,t){return Object(B.b)(z,{hover:!0,key:"table-row-row-"+t},Object.keys(e).map((function(a,o){return Object(B.b)(M,{align:"right",key:"table-row-"+t+"-col-"+o},e[a])})))}))))},Z=function(e){return Object(B.b)($.a,Object(o.a)({elevation:6,variant:"filled"},e))};t.default=function(){var e=J(),t=Object(n.useState)("0"),a=t[0],o=t[1],r=Object(n.useState)("0"),i=r[0],c=r[1],u=Object(n.useState)(!1),m=u[0],g=u[1],h=function(e){"clickaway"!==e&&g(!1)};return Object(B.b)("div",{className:e.root},Object(B.b)(l.a,{className:e.paper},Object(B.b)("div",{className:e.inputTabel},Object(B.b)(s.a,{id:"inochi-first",label:"自陣イノチ",type:"number",value:a,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:0,step:1e4}}),Object(B.b)(s.a,{id:"inochi-second",label:"敵陣イノチ",type:"number",value:i,onChange:function(e){return c(e.target.value)},InputLabelProps:{shrink:!0},inputProps:{min:0,step:1e4},required:!0}),Object(B.b)(d.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(B.b)(f.a,null),onClick:function(){return g(!0),o("0"),void c("0")}},"Delete"),Object(B.b)(p.a,{open:m,autoHideDuration:3e3,onClose:function(){return h()}},Object(B.b)(Z,{onClose:function(){return h()},severity:"success"},"Deleted Successfully"))),Object(B.b)(b.a,null),Object(B.b)("div",{className:e.test},Object(B.b)(W,{inochi1:+a,inochi2:+i}))))}}}]);
//# sourceMappingURL=component---src-pages-calc-ship-ship-table-tsx-03058d146ed0087d011e.js.map