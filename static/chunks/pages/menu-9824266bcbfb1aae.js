(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{3023:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return t(665)}])},1084:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var r=t(5893),o=t(1458);function a(){return(0,r.jsx)(o.Z,{sx:{background:"linear-gradient(to right, #6fcbb6, #9c64f4)","> span":{backgroundColor:"primary"}}})}},665:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(5893),o=t(2280),a=t(8895),i=t(5861),s=t(2797),l=t(3508),u=t(7294);let c=["COFFEE","NON-COFFEE","TEA","ADE & JUICE","FLATCCINO","BOTTLE","SNACK","S / W"];var d=t(7837),p=t(8704),x=t(8433),h=t(7357),j=t(629),m=t(4682);let E={isDrawerOpen:!1,menu:{},order:{}},f=(e,n)=>{switch(n.type){case"SET_DRAWER_OPEN":return{...e,isDrawerOpen:n.isDrawerOpen};case"SET_MENU":return{...e,menu:n.menu};case"SET_ORDER":return{...e,order:n.order};default:throw Error("unknown action type")}},Z=()=>(0,u.useReducer)(f,E),g=(0,m.kr)([E,()=>null]);function _(e){let{data:n}=e,t=(0,m.Sz)(g,e=>e[1]),o=e=>{t({type:"SET_DRAWER_OPEN",isDrawerOpen:!0}),t({type:"SET_MENU",menu:e})};return(0,r.jsx)(h.Z,{children:null==n?void 0:n.map(e=>(0,r.jsx)(j.Z,{elevation:3,onClick:()=>o(e),sx:[{p:1},e=>({"&:hover":{color:e.palette.primary.main,backgroundColor:e.palette.primary.contrastText,cursor:"pointer"}})],children:(0,r.jsx)(i.Z,{children:e.name})}))})}var v=t(1084);function C(){let e=(0,u.useId)(),{data:n,isLoading:t}=(0,d.a)(p.a.menu.all,async()=>{let{data:e}=await x.Z.get("https://mcafe-api.onrender.com/menu");return e});return t?(0,r.jsx)(v.g,{}):(0,r.jsx)(r.Fragment,{children:n?(n=>{let t=e=>n.filter(n=>n.type===e);return c.map((n,u)=>(0,r.jsxs)(o.Z,{defaultExpanded:!0,children:[(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(l.Z,{}),children:(0,r.jsx)(i.Z,{children:n})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(_,{data:t(u)},"".concat(e+u,"d"))})]},e+u))})(n):(0,r.jsx)(v.g,{})})}var R=t(7533),T=t(3946),O=t(4974),w=t(3321),b=t(594),y=t(4054),S=t(480),D=t(9368),L=t(2890),N=t(6872),k=t(6486),P=t.n(k);function V(e){let{idx:n,data:t}=e,{order:o}=(0,m.Sz)(g,e=>e[0]),a=(0,m.Sz)(g,e=>e[1]),i=(e,t)=>{a({type:"SET_ORDER",order:{...o,optionValueList:P().defaults({[n]:t},{...o.optionValueList})}})},s=e=>{let{value:t,checked:r}=e.target;a({type:"SET_ORDER",order:{...o,optionValueList:P().defaults({[n]:r?t:null},{...o.optionValueList})}})};return(0,r.jsx)(h.Z,{children:(0,r.jsx)(y.Z,{children:(null==t?void 0:t.length)===1?(0,r.jsx)(S.Z,{value:t[0].code,control:(0,r.jsx)(D.Z,{onChange:s}),label:t[0].name}):(0,r.jsx)(L.Z,{onChange:i,children:null==t?void 0:t.map(e=>(0,r.jsx)(S.Z,{value:e.code,control:(0,r.jsx)(N.Z,{}),label:e.name}))})})})}function A(){var e,n;let{menu:t,order:u,isDrawerOpen:c}=(0,m.Sz)(g,e=>e[0]),j=(0,m.Sz)(g,e=>e[1]),{data:E,isLoading:f}=(e=t.code,n=void 0!==t.code,(0,d.a)(p.a.menu.option(e),async()=>{let{data:n}=await x.Z.get("https://mcafe-api.onrender.com/menu/".concat(e));return n},{enabled:n})),Z=async()=>{console.log({...u,menuCode:t.code,optionValueList:P().values(u.optionValueList)});let e=await x.Z.post("https://mcafe-api.onrender.com/order",{...u,menuCode:t.code,optionValueList:P().compact(P().values(u.optionValueList)),setDefault:!1});return console.log(e),null},_=e=>{j({type:"SET_ORDER",order:{...u,phone:e.target.value}})},C=()=>{j({type:"SET_DRAWER_OPEN",isDrawerOpen:!1})};return(0,r.jsx)(R.ZP,{anchor:"bottom",open:c,onClose:C,ModalProps:{sx:{alignContent:"center",borderTopLeftRadius:3,borderTopRightRadius:3,height:"80vh"}},SlideProps:{},PaperProps:{sx:{width:500,alignContent:"center",m:"auto",p:2,borderTopLeftRadius:16,borderTopRightRadius:16}},children:f?(0,r.jsx)(v.g,{}):(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(T.Z,{onClick:C,sx:{float:"right"},children:(0,r.jsx)(b.Z,{})}),(0,r.jsx)(i.Z,{variant:"h6",component:"h2",sx:{mt:1,mb:1,pl:1},children:t.name}),!!E&&E.optionGroupList.map((e,n)=>(0,r.jsxs)(o.Z,{sx:{mt:2},defaultExpanded:!0,children:[(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(l.Z,{}),children:e.name}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(V,{idx:n,data:e.optionValueList})})]})),(0,r.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-around"},children:[(0,r.jsx)(O.Z,{label:"핸드폰 번호",variant:"outlined",onChange:_}),(0,r.jsx)(w.Z,{variant:"contained",onClick:Z,children:"장바구니"})]})]})})}function F(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(A,{})]})}function z(){return(0,r.jsx)(g.Provider,{value:Z(),children:(0,r.jsx)(F,{})})}}},function(e){e.O(0,[662,177,694,774,888,179],function(){return e(e.s=3023)}),_N_E=e.O()}]);