"use strict";(globalThis["webpackChunkiess_admin_gui"]=globalThis["webpackChunkiess_admin_gui"]||[]).push([[240],{9240:(o,s,e)=>{e.r(s),e.d(s,{default:()=>V});var l=e(1758),a=e(8734),i=e(9731),n=e(1658),t=e(2449),r=e(5949),m=e(3971),u=e(3857);const c={class:"col-12 col-sm-11"},d={class:"row justify-between items-center q-mb-md"},g=(0,l.Lk)("div",{class:"text-h3"},"前台系統",-1),f={class:"row"},b={__name:"sites-system",setup(o){const s=(0,a.Kh)({searchValue:"",isShowFormDialog:!1,formDialogTitle:"",formValues:{},formList:[],columns:[{name:"actions",align:"center",label:"操作"}],rows:[]});(0,l.sV)((()=>{s.formList=JSON.parse(JSON.stringify(m.M)),s.columns=[...s.columns,...u.Z],s.rows=JSON.parse(JSON.stringify(r.kA))}));const e=()=>{console.log("searchValue:",s.searchValue)},b=()=>{s.isShowFormDialog=!0,s.formDialogTitle="新增平台功能"},h=o=>{s.isShowFormDialog=!0,s.formDialogTitle="編輯平台功能",s.formValues={...o}},p=()=>{s.formValues={},s.isShowFormDialog=!1},w=o=>{s.isShowFormDialog=!1,s.rows=s.rows.map((s=>(s.id===o.id&&(s={...o}),s))),s.formValues={}};return(o,a)=>{const r=(0,l.g2)("q-input"),m=(0,l.g2)("q-page");return(0,l.uX)(),(0,l.Wv)(m,{class:"row justify-center q-py-sm"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",c,[(0,l.Lk)("div",d,[g,(0,l.Lk)("div",f,[(0,l.bF)(r,{modelValue:s.searchValue,"onUpdate:modelValue":a[1]||(a[1]=o=>s.searchValue=o),class:"q-mr-sm",color:"main-blue",placeholder:"搜尋",outlined:"",dense:""},{append:(0,l.k6)((()=>[(0,l.bF)(t.A,{flat:"",round:"",dense:"","prepend-icon":{name:"mdi-magnify",color:"main-blue"},onClick:a[0]||(a[0]=o=>e())})])),_:1},8,["modelValue"]),(0,l.bF)(t.A,{class:"custom-button-round",outline:"",round:"","tooltip-txt":"新增","prepend-icon":{name:"mdi-plus",color:"main-blue"},onClick:a[2]||(a[2]=o=>b())})])]),(0,l.bF)(i.A,{"table-columns":s.columns,"table-row":s.rows,"table-sets":{actionsType:["edit"],cellColor:"#EDEDED",blankColumns:["subMainFeat","subFeat"]},onOnEdit:h},null,8,["table-columns","table-row"])]),s.isShowFormDialog?((0,l.uX)(),(0,l.Wv)(n.A,{key:0,"is-show-dialog":s.isShowFormDialog,"is-show-action-section":!0,title:s.formDialogTitle,"form-list":s.formList,"form-values":s.formValues,onOnClose:p,onOnSave:w},null,8,["is-show-dialog","title","form-list","form-values"])):(0,l.Q3)("",!0)])),_:1})}}};var h=e(7716),p=e(7837),w=e(8582),k=e.n(w);const D=b,V=D;k()(b,"components",{QPage:h.A,QInput:p.A})}}]);