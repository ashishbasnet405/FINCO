(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[989],{65269:function(){},28376:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var a=t(72791),s=t(1413),i=t(16871),c=a.lazy((function(){return Promise.all([t.e(20),t.e(233)]).then(t.bind(t,36883))})),o=a.lazy((function(){return Promise.all([t.e(254),t.e(381),t.e(241)]).then(t.bind(t,56241))})),r=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:c},{path:"/details",name:"Details",element:o,exact:!0},{path:"/details/offices",name:"Office",element:o},{path:"/details/staff",name:"Staff",element:a.lazy((function(){return Promise.all([t.e(254),t.e(381),t.e(882)]).then(t.bind(t,73882))}))},{path:"/details/centers",name:"Centers",element:a.lazy((function(){return t.e(37).then(t.bind(t,81037))}))},{path:"/details/members",name:"Members",element:a.lazy((function(){return t.e(709).then(t.bind(t,98709))}))}],l=t(78983),m=t(80184),d=function(){var e=(0,i.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,t,a,s){var i="".concat(e,"/").concat(t),c=function(e,n){var t=n.find((function(n){return n.path===e}));return!!t&&t.name}(i,r);return c&&n.push({pathname:i,name:c,active:a+1===s.length}),i})),n}(e);return(0,m.jsxs)(l.fj,{className:"m-0 ms-2",children:[(0,m.jsx)(l.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,a.createElement)(l.Sd,(0,s.Z)((0,s.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},u=a.memo(d),f=function(){return(0,m.jsx)(l.KB,{lg:!0,children:(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)(l.LQ,{color:"primary"}),children:(0,m.jsxs)(i.Z5,{children:[r.map((function(e,n){return e.element&&(0,m.jsx)(i.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,m.jsx)(e.element,{})},n)})),(0,m.jsx)(i.AW,{path:"/",element:(0,m.jsx)(i.Fg,{to:"dashboard",replace:!0})})]})})})},h=a.memo(f),x=function(){return(0,m.jsx)(l.pG,{})},p=a.memo(x),j=t(70885),v=t(43504),b=t(59434),g=t(24846),N=t(31389),Z=t(63232),y=t.p+"static/media/9.0e754dfc3387f2c473fc.jpg",C=function(){var e=(0,i.s0)();return(0,m.jsxs)(l.w5,{variant:"nav-item",children:[(0,m.jsx)(l.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,m.jsx)(l.cU,{src:y,size:"md"})}),(0,m.jsxs)(l.$H,{className:"pt-0",placement:"bottom-end",children:[(0,m.jsx)(l.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,m.jsxs)(l.$f,{href:"#",onClick:function(n){n.preventDefault(),localStorage.removeItem("fincoLoginDetails"),e("/fincolive")},children:[(0,m.jsx)(g.Z,{icon:Z.U,className:"me-2"}),"Logout"]})]})]})},S=function(){var e=(0,a.useState)([]),n=(0,j.Z)(e,2),t=n[0],i=n[1],c=(0,a.useState)({id:"",name:""}),o=(0,j.Z)(c,2),r=o[0],d=o[1],f=(0,b.I0)(),h=(0,b.v9)((function(e){return e.sidebarShow}));(0,b.v9)((function(e){return e}));(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("fincoLoginDetails"));e&&(i((0,s.Z)({},e)),d({id:e.detail.officeList[0].id,name:e.detail.officeList[0].name}))}),[]),(0,a.useEffect)((function(){f({type:"setOfficeDetails",selected:r})}),[r]);return(0,m.jsxs)(l.PO,{position:"sticky",className:"mb-4",children:[(0,m.jsxs)(l.KB,{fluid:!0,children:[(0,m.jsxs)(l.g3,{className:"d-none d-md-flex",children:[(0,m.jsx)(l.X4,{className:"ps-1",onClick:function(){return f({type:"set",sidebarShow:!h})},children:(0,m.jsx)(g.Z,{icon:N.N,size:"lg"})}),(0,m.jsx)(l.AQ,{to:"/dashboard",component:v.OL,children:"Dashboard"}),(0,m.jsx)(l.U6,{})]}),(0,m.jsx)(l.g3,{children:(0,m.jsx)(l.LX,{size:"md",onChange:function(e){var n=e.target.value.split("!!")[0],t=e.target.value.split("!!")[1];d((0,s.Z)((0,s.Z)({},r),{},{id:n,name:t}))},children:t.token&&t.detail.officeList.map((function(e){var n=e.id,t=e.name;return(0,m.jsx)("option",{value:"".concat(n,"!!").concat(t),children:t},n)}))})}),(0,m.jsx)(l.g3,{className:"ms-3",children:(0,m.jsx)(C,{})})]}),(0,m.jsx)(l.rc,{}),(0,m.jsx)(l.KB,{fluid:!0,children:(0,m.jsx)(u,{})})]})},k=t(45987),_=["component","name","badge","icon"],w=["component","name","icon","to"],U=function(e){var n=e.items,t=(0,i.TH)(),c=function(e,n,t){return(0,m.jsxs)(m.Fragment,{children:[n&&n,e&&e,t&&(0,m.jsx)(l.C_,{color:t.color,className:"ms-auto",children:t.text})]})},o=function(e,n){var t=e.component,i=e.name,o=e.badge,r=e.icon,l=(0,k.Z)(e,_),m=t;return(0,a.createElement)(m,(0,s.Z)((0,s.Z)({},l.to&&!l.items&&{component:v.OL}),{},{key:n},l),c(i,r,o))},r=function e(n,a){var i,r=n.component,l=n.name,d=n.icon,u=n.to,f=(0,k.Z)(n,w),h=r;return(0,m.jsx)(h,(0,s.Z)((0,s.Z)({idx:String(a),toggler:c(l,d),visible:t.pathname.startsWith(u)},f),{},{children:null===(i=n.items)||void 0===i?void 0:i.map((function(n,t){return n.items?e(n,t):o(n,t)}))}),a)};return(0,m.jsx)(a.Fragment,{children:n&&n.map((function(e,n){return e.items?r(e,n):o(e,n)}))})},D=t(65269),L=t(34358),z=(t(82454),t(34708)),O=t(53806),E=t(62412),I=t(27028),F=t(75862),H=[{component:l.U6,name:"Dashboard",to:"/dashboard",icon:(0,m.jsx)(g.Z,{icon:z.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:l.fd,name:"Details"},{component:l.U6,name:"Offices",to:"/details/offices",icon:(0,m.jsx)(g.Z,{icon:O.V,customClassName:"nav-icon"})},{component:l.U6,name:"Staff",to:"/details/staff",icon:(0,m.jsx)(g.Z,{icon:E.E,customClassName:"nav-icon"})},{component:l.U6,name:"Centers",to:"/details/centers",icon:(0,m.jsx)(g.Z,{icon:I.v,customClassName:"nav-icon"})},{component:l.U6,name:"Members",to:"/details/members",icon:(0,m.jsx)(g.Z,{icon:F.U,customClassName:"nav-icon"})}],A=function(){var e=(0,b.I0)(),n=(0,b.v9)((function(e){return e.sidebarUnfoldable})),t=(0,b.v9)((function(e){return e.sidebarShow}));return(0,m.jsxs)(l.z3,{position:"fixed",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:[(0,m.jsxs)(l.Dl,{className:"d-none d-md-flex",to:"/",children:[n?(0,m.jsx)("h5",{className:"",children:"FINCO"}):(0,m.jsx)("h1",{children:"FINCO"}),(0,m.jsx)(g.Z,{className:"sidebar-brand-narrow",icon:D.sygnet,height:35})]}),(0,m.jsx)(l.Xk,{children:(0,m.jsx)(L.Z,{children:(0,m.jsx)(U,{items:H})})}),(0,m.jsx)(l.iv,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!n})}})]})},P=a.memo(A),W=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(P,{}),(0,m.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,m.jsx)(S,{}),(0,m.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,m.jsx)(h,{})}),(0,m.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=989.63658367.chunk.js.map