import{g as T,d as D}from"./index-25f910a4.js";import{V as l,H as P,r as y,_,n as $,ah as v,l as M,m as S,P as p,T as b,L as k}from"./vue-2207505e.js";import{H as R,b as w}from"./element-4018b73c.js";import"./index-cacf24a3.js";import"./vxe-791d9ab6.js";const E={default:({row:h,column:s})=>{const i=h[s.field];return[l("span",{class:`el-tag el-tag--${i==="admin"?"":"warning"} el-tag--plain`},[i])]}},U=E,F={default:({row:h,column:s})=>{const i=h[s.field],[c,g]=i?["success","启用"]:["danger","禁用"];return[l("span",{class:`el-tag el-tag--${c} el-tag--plain`},[g])]}},O=F,V={class:"app-container"},G=P({name:"VxeTable",__name:"index",setup(h){const s=y(),i=_({loading:!0,autoResize:!0,pagerConfig:{align:"right"},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"用户名",clearable:!0}}},{field:"phone",itemRender:{name:"$input",props:{placeholder:"手机号",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},columns:[{type:"checkbox",width:"50px"},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:U},{field:"phone",title:"手机号"},{field:"email",title:"邮箱"},{field:"status",title:"状态",slots:O},{field:"createTime",title:"创建时间"},{title:"操作",width:"150px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(i.loading=!0,a.clearTable(),new Promise(o=>{let r=0,u=[];const d=n=>{n!=null&&n.data&&(r=n.data.total,u=n.data.list),i.loading=!1,o({total:r,result:u})},f={username:t.username||void 0,phone:t.phone||void 0,size:e.pageSize,currentPage:e.currentPage};T(f).then(d).catch(d)}))}}}),c=y(),g=_({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return(e=x.value)==null||e.clearValidate(),Promise.resolve()}}),x=y(),m=_({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{username:"",password:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{field:"password",title:"密码",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return(e=c.value)==null?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>a.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}],password:[{required:!0,validator:({itemValue:e})=>{switch(!0){case!e:return new Error("请输入");case!e.trim():return new Error("空格无效")}}}]}}),a=_({isUpdate:!0,commitQuery:()=>{var e;return(e=s.value)==null?void 0:e.commitProxy("query")},clearTable:()=>{var e;return(e=s.value)==null?void 0:e.reloadData([])},onShowModal:e=>{var o,r,u,d;e?(a.isUpdate=!0,g.title="修改用户",m.data.username=e.username):(a.isUpdate=!1,g.title="新增用户");const t=(u=(r=(o=m.items)==null?void 0:o[0])==null?void 0:r.itemRender)==null?void 0:u.props;t&&(t.disabled=a.isUpdate),(d=c.value)==null||d.open(),$(()=>{var f,n;!a.isUpdate&&((f=x.value)==null||f.reset()),(n=x.value)==null||n.clearValidate()})},onSubmitForm:()=>{var e;m.loading||(e=x.value)==null||e.validate(t=>{if(t)return;m.loading=!0;const o=()=>{var r;m.loading=!1,(r=c.value)==null||r.close(),w.success("操作成功"),!a.isUpdate&&a.afterInsert(),a.commitQuery()};a.isUpdate?setTimeout(()=>o(),1e3):setTimeout(()=>o(),1e3)})},afterInsert:()=>{var t,o;const e=(o=(t=s.value)==null?void 0:t.getProxyInfo())==null?void 0:o.pager;e&&e.currentPage*e.pageSize===e.total&&++e.currentPage},onDelete:e=>{const t=`确定 <strong style="color: red"> 删除 </strong> 用户 <strong style="color: #409eff"> ${e.username} </strong> ？`,o={type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0};R.confirm(t,"提示",o).then(()=>{D(e.id).then(()=>{w.success("删除成功"),a.afterDelete(),a.commitQuery()})})},afterDelete:()=>{var o,r;const e=s.value.getData(),t=(r=(o=s.value)==null?void 0:o.getProxyInfo())==null?void 0:r.pager;t&&t.currentPage>1&&e.length===1&&--t.currentPage},moreFn:()=>{}});return(e,t)=>{const o=v("vxe-button"),r=v("el-button"),u=v("vxe-grid"),d=v("vxe-form"),f=v("vxe-modal");return M(),S("div",V,[l(u,k({ref_key:"xGridDom",ref:s},i),{"toolbar-btns":p(()=>[l(o,{status:"primary",icon:"vxe-icon-add",onClick:t[0]||(t[0]=n=>a.onShowModal())},{default:p(()=>[b("新增用户")]),_:1}),l(o,{status:"danger",icon:"vxe-icon-delete"},{default:p(()=>[b("批量删除")]),_:1})]),"row-operate":p(({row:n})=>[l(r,{link:"",type:"primary",onClick:C=>a.onShowModal(n)},{default:p(()=>[b("修改")]),_:2},1032,["onClick"]),l(r,{link:"",type:"danger",onClick:C=>a.onDelete(n)},{default:p(()=>[b("删除")]),_:2},1032,["onClick"])]),_:1},16),l(f,k({ref_key:"xModalDom",ref:c},g),{default:p(()=>[l(d,k({ref_key:"xFormDom",ref:x},m),null,16)]),_:1},16)])}}});export{G as default};
