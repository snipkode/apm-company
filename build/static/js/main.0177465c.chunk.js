(window["webpackJsonpreact-starter"]=window["webpackJsonpreact-starter"]||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(32),a(8)),s=a(9),i=a(12),d=a(11),m=a(17);var u=a(16),h=a(20),p=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeHandle=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)(Object(h.a)({},n.state),{},Object(u.a)({},a,r)))},n.onSubmit=function(){n.props.AddUpdate(n.state)},console.log(e),n.state={fullname:"",mobile:"",email:"",address:""},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){console.log("prev:",e.id,"new",this.props.id),e.id!==this.props.id&&(""!==this.props.id?this.setState(this.props.data):this.setState({fullname:"",mobile:"",email:"",address:""}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card bg-primary"},r.a.createElement("div",{className:"card-header text-white text-uppercase text-center"},r.a.createElement("h6",null,"Contact Form")),r.a.createElement("div",{className:"card-body bg-white"},r.a.createElement("form",{onSubmit:function(){return e.onSubmit()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"fullname",placeholder:"Full Name",className:"form-control",value:this.state.fullname,onChange:this.onChangeHandle,type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"mobile",placeholder:"Mobile Phone",className:"form-control",value:this.state.mobile,onChange:this.onChangeHandle,type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"email",placeholder:"E-mail",className:"form-control",value:this.state.email,onChange:this.onChangeHandle,type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"address",placeholder:"Home address",rows:"6",className:"form-control",value:this.state.address,onChange:this.onChangeHandle})),r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("input",{value:"Save Data",name:"submit",className:"btn btn-outline-primary",onClick:this.onSubmit,type:"button"}))))))}}]),a}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).TakeData=function(e,t){n.setState({id:e,data:t})},n.AddUpdate=function(e){""!==n.state.id?(console.log("update"),n.props.UpdateContact(n.state.id,e),n.setState({id:""})):(n.props.CreateContact(e),n.setState({id:""}))},n.state={contact:[],id:"",data:{}},e.store.subscribe((function(){n.setState({contact:n.props.store.getState().ContactReducers})})),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.contact),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 mt-3 mb-3"},r.a.createElement("div",{className:"card bg-success"},r.a.createElement("div",{className:"card-header text-white text-uppercase text-center"},r.a.createElement("h6",null,"Contact Table")),r.a.createElement("div",{className:"card-body bg-white table-responsive"},r.a.createElement("table",{className:"table table-borderless table-striped table-hover"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Full Name"),r.a.createElement("th",null,"Mobile"),r.a.createElement("th",null,"E-mail"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,0!==this.state.contact.length?this.state.contact.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.fullname),r.a.createElement("td",null,t.mobile),r.a.createElement("td",null,t.email),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.TakeData(a,t)},className:"btn-sm btn-warning"},"Edit"),r.a.createElement("button",{onClick:function(){return e.props.DeleteContact(a,t)},className:"btn-sm btn-danger"},"Del")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4,className:"text-center text-success"},"Loading..."))))))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(p,Object.assign({},this.props,{id:this.state.id,data:this.state.data,AddUpdate:this.AddUpdate})),"}")))}}]),a}(r.a.Component),b=Object(m.b)((function(e){return{ContactReducers:e.ContactReducers}}),{CreateContact:function(e){return{type:"CREATE_CONTACT",payload:e}},DeleteContact:function(e){return{type:"DELETE_CONTACT",id:e}},UpdateContact:function(e,t){return{type:"UPDATE_CONTACT",payload:{id:e,data:t}}}})(E),f=a(10);var v=Object(f.b)({ContactReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CONTACT":return e.push(t.payload),e;case"UPDATE_CONTACT":return e[t.payload.id]=t.payload.data,e;case"DELETE_CONTACT":return e.splice(t.id,1),e;default:return e}}}),g=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).store=Object(f.c)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{store:this.store},r.a.createElement("div",{className:"mt-3 mb-3 ml-3 mr-3"},r.a.createElement(b,{store:this.store}))))}}]),a}(r.a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=a(26),O=a(1);c.a.render(r.a.createElement(N.a,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:g}),r.a.createElement(O.a,{path:"*",render:function(){return r.a.createElement(r.a.Fragment,null,"Nothing")}}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.0177465c.chunk.js.map