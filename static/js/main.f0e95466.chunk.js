(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,_,t){e.exports=t(20)},16:function(e,_,t){},18:function(e,_,t){},20:function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),r=t(8),o=t.n(r),c=(t(16),t(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){function App(e){var _;return Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,e))).state={cadena:"0",resultado:"0",fin:!1,botones:[{texto:"7",accion:_.addNumero},{texto:"8",accion:_.addNumero},{texto:"9",accion:_.addNumero},{texto:"*",accion:_.operacion,clase:"botonOperacion"},{texto:"4",accion:_.addNumero},{texto:"5",accion:_.addNumero},{texto:"6",accion:_.addNumero},{texto:"-",accion:_.operacion,clase:"botonOperacion"},{texto:"1",accion:_.addNumero},{texto:"2",accion:_.addNumero},{texto:"3",accion:_.addNumero},{texto:"+",accion:_.operacion,clase:"botonOperacion"},{texto:"/",accion:_.operacion,clase:"botonOperacion"},{texto:"0",accion:_.addNumero},{texto:".",accion:_.operacion,clase:"botonOperacion"},{texto:"=",accion:_.igual,clase:"botonIgual"},{texto:"AC",accion:_.limpiar,clase:"botonLimpiar"}]},_.addNumero=_.addNumero.bind(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_))),_.operacion=_.operacion.bind(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_))),_.igual=_.igual.bind(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_))),_.limpiar=_.limpiar.bind(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_))),_}return Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"addNumero",value:function(e){if(this.state.fin)this.limpiar(),this.setState({cadena:e.target.value,resultado:e.target.value});else if("0"===this.state.resultado&&"0"===this.state.cadena)this.setState({cadena:e.target.value,resultado:e.target.value});else if("0"===this.state.resultado&&"0"!==this.state.cadena){if("0"!==e.target.value){var _=this.state.cadena.slice(0,this.state.cadena.length-1);_+=e.target.value,this.setState({cadena:_,resultado:e.target.value})}}else/\d/.test(this.state.resultado)?this.setState({cadena:this.state.cadena.concat(e.target.value),resultado:this.state.resultado.concat(e.target.value)}):this.setState({cadena:this.state.cadena.concat(e.target.value),resultado:e.target.value})}},{key:"operacion",value:function(e){var _=/\d/;if(this.state.fin&&"."!==e.target.value)this.setState({fin:!1,cadena:this.state.resultado+e.target.value,resultado:e.target.value});else if(_.test(this.state.cadena[this.state.cadena.length-1])&&"."!==e.target.value)this.setState({cadena:this.state.cadena.concat(e.target.value),resultado:e.target.value});else if("."===e.target.value&&_.test(this.state.cadena[this.state.cadena.length-1])&&!this.state.resultado.includes("."))this.setState({cadena:this.state.cadena.concat(e.target.value),resultado:this.state.resultado.concat(e.target.value)});else if("."!==e.target.value&&!_.test(this.state.cadena[this.state.cadena.length-1])){var t=this.state.cadena.slice(0,this.state.cadena.length-1);t+=e.target.value,this.setState({cadena:t,resultado:e.target.value})}}},{key:"igual",value:function igual(){if(!this.state.fin){var resultadoFinal=eval(this.state.cadena),cadenaFinal=this.state.cadena+"="+resultadoFinal;this.setState({cadena:cadenaFinal,resultado:resultadoFinal,fin:!0})}}},{key:"limpiar",value:function(){this.setState({cadena:"0",resultado:"0",fin:!1})}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"calculadora"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"display"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",{id:"cadena"},this.state.cadena),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{id:"resultado"},this.state.resultado)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"botones"},this.state.botones.map(function(_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Boton,{key:_.texto,clase:_.clase,texto:_.texto,accion:_.accion.bind(e)})}))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component),Boton=function(e){function _(e){var t;return Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),(t=Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).call(this,e))).state={texto:e.texto,accion:e.accion,clase:e.clase},t}return Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(_,e),Object(C_Users_Daniel_WebstormProjects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:this.state.accion,className:this.state.clase,value:this.state.texto},this.state.texto)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App}},[[10,2,1]]]);
//# sourceMappingURL=main.f0e95466.chunk.js.map