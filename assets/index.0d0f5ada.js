import{e as w,u as P,f as V,g as N,o as u,h as _,i as t,t as $,j as a,w as d,v as h,F as y,k as z,l as A,m as J,p as k,n as E,q as K,s as O,x as Q,y as l,z as T,c as L,A as R}from"./vendor.f4a58804.js";import{_ as g}from"./index.ac7e6902.js";const B=s=>(k("data-v-80647db0"),s=s(),E(),s),X={class:"nowDate"},Y={class:"noteText"},Z=["onDblclick","onContextmenu"],ee=B(()=>t("i",{class:"l"},null,-1)),te=B(()=>t("i",{class:"r"},null,-1)),se=[ee,te],ae={class:"mask"},oe=B(()=>t("br",null,null,-1)),ne={class:"modify"},le=B(()=>t("br",null,null,-1)),ie={class:"detailsShow"},ue={id:"rightMenu"},de=w({setup(s){P(o=>({"18ff291a":a(e).topValue}));let e=V({nowData:"",isshow:!1,textdata:"",noteBooks:[],topValue:"116px",isModifyShow:!1,transferStation:"",modify_num:Number,addshow:!0,ulHidden:!1,localStorage:[],details:"",detailsShow:!1,listHidden:!1,itemTransition:"",indexTransition:Number,rightMenuShow:!1});const f=()=>{setInterval(c,500)},c=()=>{let o=new Date,n=o.getMonth()+1,i=o.getDate(),D=o.getDay(),F=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],m=o.getHours(),G=m<=12?"\u4E0A\u5348":"\u4E0B\u5348";m=m<=12?m:m-12,m=m<10?"0"+m:m;let C=o.getMinutes();C=C<10?"0"+C:C,e.nowData=`${G} ${m}:${C} ${F[D]} ${n}\u6708${i}\u65E5`};N(()=>{f()});const v=()=>{e.isshow=!0,e.textdata=""},b=()=>{e.isshow=!1,e.textdata&&(e.noteBooks.unshift(e.textdata),e.topValue="196px",e.ulHidden=!0)},S=(o,n)=>{e.isModifyShow=!0,e.transferStation=o,e.modify_num=n},p=o=>{e.noteBooks[o]=e.transferStation,e.isModifyShow=!1},I=o=>{e.noteBooks.length!=1?e.noteBooks.splice(o,1):(e.noteBooks.splice(o,1),e.addshow=!0,e.topValue="116px",x(event),e.ulHidden=!1),e.rightMenuShow=!1},x=o=>{o.cancelBubble=!0,e.addshow=!0,e.listHidden=!1},H=o=>{e.detailsShow=!0,e.details=o},W=()=>{e.detailsShow=!1},U=()=>{e.addshow=!1,e.listHidden=!0},q=(o,n,i)=>{e.itemTransition=o,e.indexTransition=n,e.rightMenuShow=!0};return document.addEventListener("click",()=>{e.rightMenuShow=!1},!1),(o,n)=>(u(),_(y,null,[t("div",X,$(a(e).nowData),1),d(t("div",{class:"staticPresentation",onClick:U},$(a(e).noteBooks[0]),513),[[h,a(e).ulHidden]]),d(t("ul",Y,[(u(!0),_(y,null,z(a(e).noteBooks,(i,D)=>(u(),_("li",{onDblclick:F=>H(i),onContextmenu:K(F=>q(i,D,o.event),["prevent"])},$(i),41,Z))),256)),t("li",null,[d(t("button",{class:"cancelBubble-btn",onClick:x},"\u6536\u8D77",512),[[h,!a(e).addshow]])])],512),[[h,a(e).listHidden]]),d(t("div",{id:"add",class:"addNote",onClick:v},se,512),[[h,a(e).addshow]]),d(t("div",ae,[d(t("textarea",{class:"textarea",rows:"4","onUpdate:modelValue":n[0]||(n[0]=i=>a(e).textdata=i),placeholder:"Writing your thoughts."},null,512),[[A,a(e).textdata,void 0,{lazy:!0}]]),oe,t("button",{onClick:b,class:"savebutton"},"\u4FDD\u5B58\u5E76\u9000\u51FA")],512),[[h,a(e).isshow]]),d(t("div",ne,[d(t("textarea",{class:"modify_textarea",rows:"4","onUpdate:modelValue":n[1]||(n[1]=i=>a(e).transferStation=i)},null,512),[[A,a(e).transferStation]]),le,t("button",{class:"modify_button",onClick:n[2]||(n[2]=i=>p(a(e).modify_num))},"\u4FDD\u5B58\u4FEE\u6539")],512),[[h,a(e).isModifyShow]]),d(t("div",ie,[J($(a(e).details)+" ",1),t("button",{onClick:W},"\xD7")],512),[[h,a(e).detailsShow]]),d(t("ul",ue,[t("li",{onClick:n[3]||(n[3]=i=>S(a(e).itemTransition,a(e).indexTransition))},"\u4FEE\u6539"),t("li",{onClick:n[4]||(n[4]=i=>I(a(e).indexTransition))},"\u5220\u9664")],512),[[h,a(e).rightMenuShow]])],64))}});var ce=g(de,[["__scopeId","data-v-80647db0"]]);const re={class:"website-item"},_e=["href"],he=w({props:{name:{type:String,default:""},webpath:{type:String,default:"1"},nameClass:{type:String}},setup(s){return(e,f)=>(u(),_("div",re,[t("a",{href:s.webpath},[t("div",{class:"website-icon",style:O(`background-image:url(${s.webpath}/favicon.ico);`)},null,4),t("div",{class:Q(["website-name",s.nameClass])},$(s.name),3)],8,_e)]))}});var r=g(he,[["__scopeId","data-v-64da6535"]]);const pe={class:"wrapper"},me={class:"frame12"},ve={class:"frame13"},fe={class:"frame10"},ge=w({setup(s){return(e,f)=>(u(),_("div",pe,[t("div",me,[l(r,{name:"\u6398\u91D1",nameClass:"juejin",webpath:"https://juejin.cn"}),l(r,{name:"\u7B80\u4E66",nameClass:"jianshu",webpath:"https://www.jianshu.com/"}),l(r,{name:"\u725B\u5BA2\u7F51",nameClass:"niuke",webpath:"https://www.nowcoder.com/"}),l(r,{name:"Bilibili",nameClass:"bilibili",webpath:"https://www.bilibili.com"})]),t("div",ve,[l(r,{name:"CSDN",nameClass:"csdn",webpath:"https://www.csdn.net/"}),l(r,{name:"Github",nameClass:"github",webpath:"https://github.com/"}),l(r,{name:"\u529B\u6263",nameClass:"leetcode",webpath:"https://leetcode-cn.com/"}),l(r,{name:"\u8C37\u6B4C",nameClass:"goog",webpath:"https://www.google.com/"})]),t("div",fe,[l(r),l(r),l(r),l(r)])]))}});var we=g(ge,[["__scopeId","data-v-7a518d07"]]);const xe=s=>(k("data-v-26aecd53"),s=s(),E(),s),$e={class:"block"},be={class:"up"},Ce=["src"],ye=xe(()=>t("br",null,null,-1)),ke=w({props:{src:{type:String},text:{type:String}},setup(s){return(e,f)=>(u(),_("div",$e,[t("div",be,[t("img",{src:s.src,alt:"\u4E3B\u9898\u7F29\u7565\u56FE",class:"img"},null,8,Ce)]),ye,t("h1",null,$(s.text),1)]))}});var Ee=g(ke,[["__scopeId","data-v-26aecd53"]]);const Be={},M=s=>(k("data-v-456369e1"),s=s(),E(),s),Se={class:"sword"},De=M(()=>t("span",null,null,-1)),Fe=M(()=>t("span",null,null,-1)),Te=M(()=>t("span",null,null,-1)),Me=[De,Fe,Te];function je(s,e){return u(),_("div",Se,Me)}var Ie=g(Be,[["render",je],["__scopeId","data-v-456369e1"]]);const j=s=>(k("data-v-7d995f6c"),s=s(),E(),s),He={class:"Dialog"},Ve=j(()=>t("svg",{x:"1644496080139",class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":"1350",width:"35",height:"35"},[t("path",{d:"M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z","p-id":"1351"}),t("path",{d:"M557.05545 513.376159l138.367639-136.864185c12.576374-12.416396 12.672705-32.671738 0.25631-45.248112s-32.704421-12.672705-45.248112-0.25631l-138.560301 137.024163-136.447897-136.864185c-12.512727-12.512727-32.735385-12.576374-45.248112-0.063647-12.512727 12.480043-12.54369 32.735385-0.063647 45.248112l136.255235 136.671523-137.376804 135.904314c-12.576374 12.447359-12.672705 32.671738-0.25631 45.248112 6.271845 6.335493 14.496116 9.504099 22.751351 9.504099 8.12794 0 16.25588-3.103239 22.496761-9.247789l137.567746-136.064292 138.687596 139.136568c6.240882 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0 16.352211-3.135923 22.591372-9.34412 12.512727-12.480043 12.54369-32.704421 0.063647-45.248112L557.05545 513.376159z","p-id":"1352"})],-1)),Ne=[Ve],ze={class:"BlockWarp",ref:"BlockEle"},Ae={class:"LoadText"},Le=j(()=>t("p",null,"\u4E0B\u6ED1\u52A0\u8F7D\u66F4\u591A\u6570\u636E",-1)),We=[Le],Ue={class:"LoadText"},qe=j(()=>t("p",null,"\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210",-1)),Ge=[qe],Pe=w({props:{flag:{type:Boolean}},emits:["update:flag"],setup(s,{emit:e}){const f=()=>{e("update:flag",!1)};let c=T(!1),v=T(!1),b=V([{id:1,title:"\u57CE\u5E02\u665A\u971E",path:"/src/assets/image/8d92efcdb0007a3af8e277731bcb561b.jpg"},{id:2,title:"\u6175\u61D2\u5C11\u5973",path:"/src/assets/theme/2.jpg"},{id:3,title:"\u6E56\u5149\u5C71\u8272",path:"/src/assets/theme/3.jpg"},{id:4,title:"\u7EFF\u8272\u62A4\u773C",path:"/src/assets/theme/4.jpg"},{id:5,title:"\u5927\u96C4\u548C\u5C0F\u4F19\u4F34",path:"/src/assets/theme/5.jpg"},{id:6,title:"\u864E\u5E74\u5927\u5409",path:"/src/assets/theme/6.jpg"},{id:7,title:"\u5C71\u6D77\u4E0E\u4F60",path:"/src/assets/theme/7.jpg"}]);N(()=>{document.getElementById("page").className="theme";const p=document.getElementsByClassName("BlockWarp")[0];p.addEventListener("scroll",()=>{p.scrollTop+p.clientHeight+1>=p.scrollHeight&&b.length<10&&(v.value=!0,c.value=!0,setTimeout(()=>{b.push({id:8,title:"\u9022\u8003\u5FC5\u8FC7",path:"/src/assets/theme/8.jpg"},{id:9,title:"\u5377\u5F0F\u4ED6\u4EEC",path:"/src/assets/theme/9.jpg"},{id:10,title:"\u864E\u5E74\u5927\u5409",path:"/src/assets/theme/10.jpg"}),v.value=!1,c.value=!1},1500))})});const S=p=>{console.log(p),c.value=!0,setTimeout(()=>{c.value=!1,document.getElementById("page").className=`theme${p}`},2e3)};return(p,I)=>(u(),_(y,null,[d(t("div",He,[t("div",{class:"CloseIcon",onClick:f},Ne),t("div",ze,[(u(!0),_(y,null,z(a(b),x=>(u(),L(Ee,{onClick:H=>S(x.id),src:x.path,text:x.title},null,8,["onClick","src","text"]))),256)),d(t("div",Ae,We,512),[[h,a(v)]]),d(t("div",Ue,Ge,512),[[h,!a(v)]])],512)],512),[[h,s.flag]]),a(c)?(u(),L(Ie,{key:0})):R("",!0)],64))}});var Je=g(Pe,[["__scopeId","data-v-7d995f6c"]]);const Ke=s=>(k("data-v-78ead8b1"),s=s(),E(),s),Oe=Ke(()=>t("svg",{x:"1644493273814",class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":"1358",width:"35",height:"35"},[t("path",{d:"M128 855.04c0-20.48 10.24-35.84 25.6-46.08l225.28-128c25.6-15.36 56.32-15.36 81.92 0l107.52 71.68c46.08 30.72 102.4 25.6 148.48-5.12l256-194.56V870.4c0 30.72-71.68 102.4-102.4 102.4H204.8c-30.72 0-76.8-20.48-76.8-51.2v-66.56z",fill:"#5AC8FA","p-id":"1359"}),t("path",{d:"M102.4 721.92l256-143.36c40.96-20.48 92.16-20.48 133.12 5.12l107.52 71.68c25.6 15.36 61.44 15.36 87.04-5.12L921.6 471.04V153.6c0-30.72-20.48-51.2-51.2-51.2H153.6c-30.72 0-51.2 20.48-51.2 51.2v568.32z m0 61.44V870.4c0 30.72 20.48 51.2 51.2 51.2h716.8c30.72 0 51.2-20.48 51.2-51.2v-337.92l-204.8 158.72c-40.96 30.72-102.4 35.84-148.48 5.12L460.8 629.76c-25.6-15.36-56.32-15.36-76.8 0l-281.6 153.6zM153.6 51.2h716.8c56.32 0 102.4 46.08 102.4 102.4v716.8c0 56.32-46.08 102.4-102.4 102.4H153.6c-56.32 0-102.4-46.08-102.4-102.4V153.6c0-56.32 46.08-102.4 102.4-102.4z m153.6 384C235.52 435.2 179.2 378.88 179.2 307.2S235.52 179.2 307.2 179.2 435.2 235.52 435.2 307.2 378.88 435.2 307.2 435.2z m0-51.2c40.96 0 76.8-35.84 76.8-76.8S348.16 230.4 307.2 230.4 230.4 266.24 230.4 307.2 266.24 384 307.2 384z",fill:"","p-id":"1360"})],-1)),Qe=[Oe],Re=w({setup(s){const e=T(!1);return(f,c)=>(u(),_(y,null,[t("div",{class:"wallpaper",onClick:c[0]||(c[0]=v=>e.value=!e.value)},Qe),l(Je,{flag:e.value,"onUpdate:flag":c[1]||(c[1]=v=>e.value=v)},null,8,["flag"])],64))}});var Xe=g(Re,[["__scopeId","data-v-78ead8b1"]]);const Ye={id:"page"},Ze=w({setup(s){return(e,f)=>(u(),_("div",Ye,[l(ce),l(we),l(Xe)]))}});var st=g(Ze,[["__scopeId","data-v-d27c7a1c"]]);export{st as default};
