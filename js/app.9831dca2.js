(function(t){function e(e){for(var n,c,s=e[0],o=e[1],l=e[2],p=0,u=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-prototype/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=(a("d3b7"),a("bc3a")),i=a.n(r),c={},s=i.a.create(c);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["a"].use(Plugin);Plugin;var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"light-blue",app:"",dark:""}},[a("v-toolbar-title",[t._v("CommonControlPlane")]),a("v-spacer"),a("v-btn",[t._v("TRI_000000_DEV")]),a("v-btn",{attrs:{icon:"",color:"grey darken-4"}},[a("v-icon",[t._v("mdi-refresh")])],1)],1),a("v-main",[a("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[a("router-view",{attrs:{"ccp-service":t.ccpService}})],1)],1),a("v-footer",{attrs:{app:""}},[t._v(" CommonControlPlane v1.2.3 ")])],1)},l=[],d=a("d4ec"),p=a("bee2"),u=function(){function t(){Object(d["a"])(this,t)}return Object(p["a"])(t,[{key:"getApplications",value:function(){var t=[{name:"OSF",id:"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",status:"ACTIVE"},{name:"OSC",id:"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4",status:"CREATING"}];return this.waitPromise(t)}},{key:"getApplication",value:function(t){var e={"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{name:"OSF",id:"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",status:"ACTIVE"},"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4":{name:"OSC",id:"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4",status:"CREATING"}};return this.waitPromise(e[t])}},{key:"getEnvironments",value:function(t){var e={"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{id:"add1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"DEV",status:"ACTIVE",type:"non-prd"},{id:"bdd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"UAT",status:"ACTIVE",type:"non-prd"}],"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4":[{id:"cdd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"DEV",status:"ACTIVE",type:"non-prd"},{id:"ddd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"UAT",status:"ACTIVE",type:"non-prd"},{id:"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"PRD",status:"ACTIVE",type:"prd"}]};return this.waitPromise(e[t])}},{key:"getEnvironment",value:function(t,e){var a={"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{"add1c473-94d3-470f-a5c7-09fa2e8ae5c4":{id:"add1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"DEV",status:"ACTIVE",type:"non-prd"},"bdd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{id:"bdd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"UAT",status:"ACTIVE",type:"non-prd"}},"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4":{"cdd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{id:"cdd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"DEV",status:"ACTIVE",type:"non-prd"},"ddd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{id:"ddd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"UAT",status:"ACTIVE",type:"non-prd"},"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{id:"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"PRD",status:"ACTIVE",type:"prd"}}};return this.waitPromise(a[t][e])}},{key:"getDeployments",value:function(t,e){var a={"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":{"add1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{name:"v1.5.3",status:"ACTIVE"},{name:"v1.5.2",status:"ACTIVE"}],"bdd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{name:"v1.5.2",status:"ACTIVE"},{name:"v1.5.1",status:"ACTIVE"}]},"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4":{"cdd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{name:"v1.5.3",status:"ACTIVE"},{name:"v1.5.2",status:"ACTIVE"}],"ddd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{name:"v1.5.3",status:"ACTIVE"},{name:"v1.5.2",status:"ACTIVE"}],"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{name:"v1.5.3",status:"ACTIVE"},{name:"v1.5.2",status:"ACTIVE"}]}};return this.waitPromise(a[t][e])}},{key:"getArtifacts",value:function(t){var e={"edd1c473-94d3-470f-a5c7-09fa2e8ae5c4":[{id:"aad1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"v1.5.2",status:"ACTIVE"},{id:"bad1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"v1.5.1",status:"ACTIVE"}],"f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4":[{id:"cad1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"v1.6.0",status:"ACTIVE"},{id:"dad1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"v1.5.3",status:"ACTIVE"},{id:"ead1c473-94d3-470f-a5c7-09fa2e8ae5c4",name:"v1.5.2",status:"ACTIVE"}]};return this.waitPromise(e[t])}},{key:"waitPromise",value:function(t){return new Promise((function(e,a){setTimeout((function(){e(t)}),500)}))}}]),t}(),v={data:function(){return{ccpService:new u}}},m=v,f=a("2877"),b=a("6544"),_=a.n(b),C=a("7496"),h=a("40dc"),V=a("8336"),y=a("a523"),A=a("553a"),g=a("132d"),x=a("f6c4"),E=a("2fa4"),I=a("2a7f"),T=Object(f["a"])(m,o,l,!1,null,null,null),k=T.exports;_()(T,{VApp:C["a"],VAppBar:h["a"],VBtn:V["a"],VContainer:y["a"],VFooter:A["a"],VIcon:g["a"],VMain:x["a"],VSpacer:E["a"],VToolbarTitle:I["a"]});var w=a("f309");n["a"].use(w["a"]);var O=new w["a"]({}),S=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"9",xl:"6"}},[a("BreadCrumb"),t.applications?t._e():a("ApplicationCard"),t.applications?a("div",t._l(t.applications,(function(t){return a("ApplicationCard",{key:t.id,attrs:{application:t}})})),1):t._e()],1)],1)},P=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-breadcrumbs",{attrs:{items:t.breadCrumbs},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[a("v-breadcrumbs-item",{staticClass:"text-subtitle-2 crumb-item",attrs:{to:n.to,disabled:n.disabled,exact:""}},[t._v(" "+t._s(n.text)+" ")])]}}])})},$=[],D={computed:{breadCrumbs:function(){return"function"===typeof this.$route.meta.breadCrumb?this.$route.meta.breadCrumb.call(this,this.$route):this.$route.meta.breadCrumb}}},B=D,R=a("2bc5"),M=a("f625"),N=Object(f["a"])(B,L,$,!1,null,null,null),U=N.exports;_()(N,{VBreadcrumbs:R["a"],VBreadcrumbsItem:M["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-6",attrs:{elevation:"2",shaped:""}},[t.application?t._e():a("v-skeleton-loader",{attrs:{type:"article"}}),t.application?a("v-card-text",[a("p",[a("span",{staticClass:"text-h4 text--primary pa-2"},[t._v(t._s(t.application.name))]),a("span",[t._v(t._s(t.application.id))])]),a("p",[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]),a("span",[t._v(" "+t._s(t.application.status))])],1)]):t._e(),t.application?a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"deep-purple accent-3",to:"applications/"+t.application.id,append:""}},[t._v("Manage")]),a("v-btn",{attrs:{text:"",color:"red accent-4"}},[t._v("Delete")])],1):t._e()],1)},F=[],G={name:"ApplicationCard",props:{application:{type:Object,required:!1}}},J=G,z=a("b0af"),H=a("99d9"),K=a("3129"),Q=Object(f["a"])(J,q,F,!1,null,null,null),W=Q.exports;_()(Q,{VBtn:V["a"],VCard:z["a"],VCardActions:H["a"],VCardText:H["b"],VIcon:g["a"],VSkeletonLoader:K["a"]});var X={components:{BreadCrumb:U,ApplicationCard:W},mounted:function(){var t=this;this.ccpService.getApplications().then((function(e){return t.applications=e}))},methods:{color:function(t){return"ACTIVE"==t?"green":"CREATING"==t?"yellow":void 0}},props:["ccpService"],data:function(){return{applications:null}}},Y=X,Z=a("62ad"),tt=a("0fd9"),et=Object(f["a"])(Y,j,P,!1,null,null,null),at=et.exports;_()(et,{VCol:Z["a"],VRow:tt["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"9",xl:"6"}},[a("BreadCrumb"),a("EnvironmentCard",{attrs:{environment:t.environment}}),a("DeploymentsCard",{attrs:{deployments:t.deployments}})],1)],1)},rt=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-6",attrs:{elevation:"2",shaped:""}},[t.environment?t._e():a("v-skeleton-loader",{attrs:{type:"article"}}),t.environment?a("v-card-text",[a("p",[a("span",{staticClass:"text-h4 text--primary pa-2"},[t._v(t._s(t.environment.name))]),a("span",[t._v(t._s(t.environment.id))])]),a("p",[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]),a("span",[t._v(" "+t._s(t.environment.status))])],1)]):t._e(),t.environment?a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"red accent-4"}},[t._v("Delete")])],1):t._e()],1)},ct=[],st={name:"EnvironmentCard",props:{environment:{type:Object,required:!1}}},ot=st,lt=Object(f["a"])(ot,it,ct,!1,null,null,null),dt=lt.exports;_()(lt,{VBtn:V["a"],VCard:z["a"],VCardActions:H["a"],VCardText:H["b"],VIcon:g["a"],VSkeletonLoader:K["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-6",attrs:{elevation:"2",shaped:""}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("span",{staticClass:"text-h5 text--primary"},[t._v("Deployments")])]),a("v-list-item-action",[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"}},[t._v(" Deploy "),a("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-cloud-upload ")])],1)],1)],1)],1),t.deployments?t._e():a("v-skeleton-loader",{attrs:{type:"article"}}),t.deployments?a("v-list",t._l(t.deployments,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-list-item-title",[a("span",{staticClass:"mr-3"},[t._v(t._s(e.name))])]),a("v-list-item-subtitle",[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]),a("span",[t._v(" "+t._s(e.status))])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),1):t._e()],1)},ut=[],vt={name:"DeploymentsCard",props:{deployments:{type:Array}}},mt=vt,ft=a("8860"),bt=a("da13"),_t=a("1800"),Ct=a("5d23"),ht=Object(f["a"])(mt,pt,ut,!1,null,null,null),Vt=ht.exports;_()(ht,{VBtn:V["a"],VCard:z["a"],VIcon:g["a"],VList:ft["a"],VListItem:bt["a"],VListItemAction:_t["a"],VListItemContent:Ct["a"],VListItemSubtitle:Ct["b"],VListItemTitle:Ct["c"],VSkeletonLoader:K["a"]});var yt={name:"ApplicationDetails",components:{BreadCrumb:U,EnvironmentCard:dt,DeploymentsCard:Vt},mounted:function(){var t=this;this.ccpService.getEnvironment(this.$route.params.app_id,this.$route.params.env_id).then((function(e){return t.environment=e})),this.ccpService.getDeployments(this.$route.params.app_id,this.$route.params.env_id).then((function(e){return t.deployments=e}))},props:["ccpService"],data:function(){return{environment:null,deployments:null}}},At=yt,gt=Object(f["a"])(At,nt,rt,!1,null,null,null),xt=gt.exports;_()(gt,{VCol:Z["a"],VRow:tt["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"9",xl:"6"}},[a("BreadCrumb"),a("ApplicationCard",{attrs:{application:t.application}}),a("v-row",[a("v-col",{attrs:{sm:"6",md:"6",xl:"6"}},[a("EnvironmentsCard",{attrs:{environments:t.environments}})],1),a("v-col",{attrs:{sm:"6",md:"6",xl:"6"}},[a("ArtifactsCard",{attrs:{artifacts:t.artifacts}})],1)],1)],1)],1)},It=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-6",attrs:{elevation:"2",shaped:""}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("span",{staticClass:"text-h5 text--primary"},[t._v("Environments")])]),a("v-list-item-action",[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"}},[t._v(" New "),a("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-plus ")])],1)],1)],1)],1),t.environments?t._e():a("v-skeleton-loader",{attrs:{type:"article"}}),t.environments?a("v-list",t._l(t.environments,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-list-item-title",[a("span",{staticClass:"mr-3"},[t._v(t._s(e.name))]),a("v-badge",{attrs:{color:"green",content:e.type}})],1),a("v-list-item-subtitle",[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]),a("span",[t._v(" "+t._s(e.status))])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:"",to:"environments/"+e.id,append:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),1):t._e()],1)},kt=[],wt={name:"EnvironmentsCard",props:{environments:{type:Array}}},Ot=wt,St=a("4ca6"),jt=Object(f["a"])(Ot,Tt,kt,!1,null,null,null),Pt=jt.exports;_()(jt,{VBadge:St["a"],VBtn:V["a"],VCard:z["a"],VIcon:g["a"],VList:ft["a"],VListItem:bt["a"],VListItemAction:_t["a"],VListItemContent:Ct["a"],VListItemSubtitle:Ct["b"],VListItemTitle:Ct["c"],VSkeletonLoader:K["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-6",attrs:{elevation:"2",shaped:""}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("span",{staticClass:"text-h5 text--primary"},[t._v("Artifact")])]),a("v-list-item-action",[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"}},[t._v(" New "),a("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-plus ")])],1)],1)],1)],1),t.artifacts?t._e():a("v-skeleton-loader",{attrs:{type:"article"}}),t.artifacts?a("v-list",t._l(t.artifacts,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-list-item-title",[a("span",{staticClass:"mr-3"},[t._v(t._s(e.name))])]),a("v-list-item-subtitle",[a("v-icon",{attrs:{color:"green"}},[t._v("mdi-checkbox-blank-circle")]),a("span",[t._v(" "+t._s(e.status))])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),1):t._e()],1)},$t=[],Dt={name:"ArtifactsCard",props:{artifacts:{type:Array}}},Bt=Dt,Rt=Object(f["a"])(Bt,Lt,$t,!1,null,null,null),Mt=Rt.exports;_()(Rt,{VBtn:V["a"],VCard:z["a"],VIcon:g["a"],VList:ft["a"],VListItem:bt["a"],VListItemAction:_t["a"],VListItemContent:Ct["a"],VListItemSubtitle:Ct["b"],VListItemTitle:Ct["c"],VSkeletonLoader:K["a"]});var Nt={name:"ApplicationDetails",mounted:function(){var t=this;this.ccpService.getApplication(this.$route.params.app_id).then((function(e){return t.application=e})),this.ccpService.getEnvironments(this.$route.params.app_id).then((function(e){return t.environments=e})),this.ccpService.getArtifacts(this.$route.params.app_id).then((function(e){return t.artifacts=e}))},components:{BreadCrumb:U,ApplicationCard:W,EnvironmentsCard:Pt,ArtifactsCard:Mt},props:["ccpService"],data:function(){return{application:null,environments:null,artifacts:null}}},Ut=Nt,qt=Object(f["a"])(Ut,Et,It,!1,null,null,null),Ft=qt.exports;_()(qt,{VCol:Z["a"],VRow:tt["a"]}),n["a"].config.productionTip=!1,n["a"].use(S["a"]);var Gt=[{path:"/",component:at,meta:{breadCrumb:[{text:"Applications"}]}},{path:"/applications/:app_id",component:Ft,meta:{breadCrumb:function(t){var e=t.params.app_id;return[{text:"Applications",to:{path:"/"}},{text:e}]}}},{path:"/applications/:app_id/environments/:env_id",component:xt,meta:{breadCrumb:function(t){var e=t.params.app_id,a=t.params.env_id;return[{text:"Applications",to:{path:"/"}},{text:e,to:{path:"/applications/"+t.params.app_id}},{text:"Environments"},{text:a,to:{path:"/applications/"+t.params.app_id+"/environments/"+t.params.env_id}}]}}}],Jt=new S["a"]({routes:Gt});new n["a"]({vuetify:O,render:function(t){return t(k)},router:Jt}).$mount("#app")}});
//# sourceMappingURL=app.9831dca2.js.map