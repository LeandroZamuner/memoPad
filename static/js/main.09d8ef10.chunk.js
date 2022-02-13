(this["webpackJsonpprimer-react"]=this["webpackJsonpprimer-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(13),n(6)),l=n(2);var i=n(0),u=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),i=Object(l.a)(s,2),u=i[0],d=i[1],j=c.a.useState(t),b=Object(l.a)(j,2),x=b[0],h=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),h(n),d(!1)}catch(a){r(a)}}),1e3)})),{item:x,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(a){r(a)}},loading:u,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),b=j[0],x=j[1],h=c.a.useState(!1),O=Object(l.a)(h,2),f=O[0],m=O[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{error:r,loading:a,totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:x,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:f,setOpenModal:m,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)}},children:e.children})}u.Consumer;n(15);function j(){var e=c.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["You have completed ",n," of ",t," task to do"]})}n(16);function b(){var e=c.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return[Object(i.jsx)("input",{className:"TodoSearch","aria-label":"Search",onChange:function(e){console.log(e.target.value),n(e.target.value)},value:t})]}n(17);function x(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(18);var h=function(){return Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(i.jsx)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})]})},O=function(){return Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(i.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(i.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})};function f(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[e.text,Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(i.jsx)(h,{})}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(i.jsx)(O,{})})]})]})}n(19);function m(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(20);function p(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}var v=n(8);n(21);function g(){var e,t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],a=n[1],r=c.a.useContext(u),s=r.addTodo,d=r.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(o),d(!1)},children:[Object(i.jsx)("label",{children:"Write your new task"}),Object(i.jsx)("textarea",{value:o,onChange:function(e){a(e.target.value)},placeholder:"Enter a new task"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",(e={className:"TodoForm-buttonContainer",type:"button",onClick:function(){d(!1)}},Object(v.a)(e,"className","TodoForm-button TodoForm-button--cancel"),Object(v.a)(e,"children","Cancel"),e)),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button--add",type:"submit",children:"Add"})]})]})}function T(e){e.error;return Object(i.jsx)("p",{children:"Desesperate, Hubo un error...;"})}n(22);function C(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function S(){var e=c.a.useContext(u),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(x,{children:[t&&Object(i.jsx)(T,{}),n&&Object(i.jsx)(C,{}),o.map((function(e){return Object(i.jsx)(f,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),s&&Object(i.jsx)(p,{children:Object(i.jsx)(g,{})}),Object(i.jsx)(m,{setOpenModal:l})]})}var w=function(){return[Object(i.jsx)(d,{children:Object(i.jsx)(S,{})})]},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),I()}],[[23,1,2]]]);
//# sourceMappingURL=main.09d8ef10.chunk.js.map