(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{31:function(e,t,n){e.exports=n(70)},36:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(25),c=n.n(r),l=(n(36),n(9)),i=n(10),u=n(5),s=n(26),m=n.n(s),d=(n(39),n(40),m.a.initializeApp({apiKey:"AIzaSyD2VKw7XF3b2vRFzhUXBLCrQ8HInxwv1Ww",authDomain:"todo-hooks-53a9a.firebaseapp.com",databaseURL:"https://todo-hooks-53a9a.firebaseio.com",projectId:"todo-hooks-53a9a",storageBucket:"todo-hooks-53a9a.appspot.com",messagingSenderId:"646656220454",appId:"1:646656220454:web:cae34273193cd37b5875e7",measurementId:"G-8NJGJ76DFD"})),p=d.firestore(),E=d.auth(),f=Object(a.createContext)(),g=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(null),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),g=p[0],b=p[1];Object(a.useEffect)((function(){E.onAuthStateChanged((function(e){e?(c(e),v()):c(null)}))}),[]);var v=function(){return m(null),b(null)};return o.a.createElement(f.Provider,{value:{currentUser:r,login:function(e,t){E.signInWithEmailAndPassword(e,t).catch((function(e){return m(e.message)}))},logout:function(){E.signOut().then((function(){return c(null)}))},signup:function(e,t,n){E.createUserWithEmailAndPassword(t,n).then((function(t){t.user.updateProfile({displayName:e})})).catch((function(e){return b(e.message)}))},loginErrorMessage:s,signupErrorMessage:g,setLoginErrorMessage:m,setSignupErrorMessage:b}},e.children)},b=n(30),v=Object(a.createContext)(),h=function(e){var t=Object(a.useContext)(f).currentUser,n=Object(a.useState)(!0),r=Object(u.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)([]),s=Object(u.a)(i,2),m=s[0],d=s[1];Object(a.useEffect)((function(){if(t){var e=t.uid;return p.collectionGroup("todos").where("user","==",e).orderBy("timeStamp").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=e.data(),a=n.content,o=n.isCompleted,r=n.isEditing,c=n.timeStamp;t.push({id:e.id,content:a,isCompleted:o,isEditing:r,timeStamp:c})})),d(t),c&&l(!1)}))}}),[t,c]);return o.a.createElement(v.Provider,{value:{todos:m,addTodo:function(e,t){p.collection("todos").add({content:e,isCompleted:!1,isEditing:!1,timeStamp:Date.now(),user:t})},deleteTodo:function(e){p.collection("todos").doc(e).delete()},toggleTodoStatus:function(e){var t=m.find((function(t){return t.id===e})),n=t.isCompleted=!t.isCompleted;p.collection("todos").doc(e).update({isCompleted:n})},toggleEdit:function(e){var t=m.find((function(t){return t.id===e}));d(Object(b.a)(m),t.isEditing=!t.isEditing)},editTodo:function(e,t){p.collection("todos").doc(t).update({content:e,isEditing:!1})},loadingList:c}},e.children)},j=n(13),O=n(15),C=function(){var e=Object(a.useContext)(f),t=e.currentUser,n=e.logout,r=Object(a.useContext)(v).todos;return o.a.createElement("nav",null,o.a.createElement("div",{className:"hook__left"}),o.a.createElement("div",{className:"hook__right"}),o.a.createElement("div",{className:"hook__left-dot"}),o.a.createElement("div",{className:"hook__right-dot"}),o.a.createElement("div",{className:"hook__mask"}),o.a.createElement("h1",null,"Todo-app with React Hooks"),t?o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){return n()}},o.a.createElement(l.b,{to:"/"},o.a.createElement(j.a,{icon:O.b,className:"log-out",title:"log out"})))),o.a.createElement("p",{className:"info-bar"},"Hi, ",t.displayName," you have ",r.length," tasks on your list")):null)},_=function(){var e=Object(a.useContext)(f),t=e.login,n=e.loginErrorMessage,r=e.setLoginErrorMessage,c=e.currentUser,s=Object(a.useState)(""),m=Object(u.a)(s,2),d=m[0],p=m[1],E=Object(a.useState)(""),g=Object(u.a)(E,2),b=g[0],v=g[1];return Object(a.useEffect)((function(){r(null)}),[r]),c?o.a.createElement(i.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Sign in"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(d,b)}},o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{required:!0,className:"input",type:"text",value:d,autoComplete:"username",placeholder:"email",onChange:function(e){return p(e.target.value)}})),o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{required:!0,className:"input",type:"password",autoComplete:"current-password",value:b,placeholder:"password",onChange:function(e){return v(e.target.value)}}),o.a.createElement("div",{className:"input__error"},n)),o.a.createElement("input",{type:"submit",value:"Login"})),o.a.createElement("p",{className:"notification-bar"},"Don't have an account, yet? ",o.a.createElement(l.b,{to:"signup"},"Sign up")))},N=n(21),S=function(e){var t=e.id,n=e.prevContent,r=Object(a.useContext)(v).editTodo,c=Object(a.useState)(n),l=Object(u.a)(c,2),i=l[0],s=l[1],m=function(e){e.preventDefault(),""!==i.trim()&&(r(i,t),s(""))};return o.a.createElement("form",{className:"todo__edit-form",onSubmit:m,onBlur:m},o.a.createElement("input",{className:"input",type:"text",value:i,onChange:function(e){return s(e.target.value)}}))},k=function(e){var t=e.todo,n=Object(a.useContext)(v),r=n.deleteTodo,c=n.toggleTodoStatus,l=n.toggleEdit;return t.isCompleted?o.a.createElement("li",null,o.a.createElement("span",{className:"todo__checkbox",onClick:function(){return c(t.id)}},o.a.createElement(j.a,{icon:O.a,className:"icon"})),o.a.createElement("p",{className:"todo__content-completed"},t.content),o.a.createElement("span",{className:"todo__option-box"},o.a.createElement(j.a,{icon:N.b,className:"icon",onClick:function(){return r(t.id)}}))):o.a.createElement("li",null,o.a.createElement("span",{className:"todo__checkbox",onClick:function(){return c(t.id)}}),o.a.createElement("span",{className:"todo__content"},t.isEditing?o.a.createElement(S,{id:t.id,prevContent:t.content}):o.a.createElement("p",null,t.content)),o.a.createElement("span",{className:"todo__option-box"},o.a.createElement(j.a,{icon:N.a,className:"icon",onClick:function(){return l(t.id)}})))},x=function(){var e=Object(a.useContext)(f).currentUser,t=Object(a.useContext)(v).addTodo,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],l=r[1];return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),""!==c.trim()&&(t(c,e.uid),l(""))}},o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{className:"input",type:"text",placeholder:"todo",value:c,onChange:function(e){return l(e.target.value)}})),o.a.createElement("input",{type:"submit",value:"Add todo"})))},w=n(29),y=function(){var e=Object(a.useContext)(f).currentUser,t=Object(a.useContext)(v),n=t.todos,r=t.loadingList;return e?o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),r?o.a.createElement(w.BeatLoader,null):o.a.createElement("div",null,o.a.createElement("ul",{className:"todo-list"},n.map((function(e){return o.a.createElement(k,{todo:e,key:e.id})}))))):o.a.createElement(_,null)},D=function(){var e=Object(a.useContext)(f),t=e.signup,n=e.currentUser,r=e.setSignupErrorMessage,c=e.signupErrorMessage,l=Object(a.useState)(""),s=Object(u.a)(l,2),m=s[0],d=s[1],p=Object(a.useState)(""),E=Object(u.a)(p,2),g=E[0],b=E[1],v=Object(a.useState)(""),h=Object(u.a)(v,2),j=h[0],O=h[1];return Object(a.useEffect)((function(){r(null)}),[r]),n?o.a.createElement(i.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Sign up"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(j,m,g)}},o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{required:!0,className:"input",type:"text",value:j,placeholder:"name",onChange:function(e){return O(e.target.value)}})),o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{required:!0,className:"input",type:"text",value:m,autoComplete:"username",placeholder:"email",onChange:function(e){return d(e.target.value)}})),o.a.createElement("div",{className:"input__container"},o.a.createElement("input",{required:!0,className:"input",type:"password",autoComplete:"current-password",value:g,placeholder:"password",onChange:function(e){return b(e.target.value)}}),o.a.createElement("div",{className:"input__error"},c)),o.a.createElement("input",{type:"submit",value:"Sign up"})))};var U=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(l.a,null,o.a.createElement(g,null,o.a.createElement(h,null,o.a.createElement(C,null),o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",component:y}),o.a.createElement(i.b,{path:"/signup",component:D}),o.a.createElement(i.b,{path:"/login",component:_}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.700aa3ff.chunk.js.map