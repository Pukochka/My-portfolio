"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[830],{6648:(e,t,s)=>{s.r(t),s.d(t,{default:()=>q});var l=s(3673),n=s(2323),a=s(8880);const u=e=>((0,l.dD)("data-v-c17d2584"),e=e(),(0,l.Cn)(),e),i={class:"header q-px-xl q-pt-lg"},r=u((()=>(0,l._)("div",{class:"flex justify-center",style:{width:"100%"}},[(0,l._)("div",{class:"text-h4"},"График случайных чисел")],-1))),c={class:"flex justify-center q-ma-lg"},o={class:"flex justify-center q-ma-lg"},m={class:"flex justify-center q-pa-lg"},d={class:"graph"},h=u((()=>(0,l._)("div",{class:"picker"},null,-1))),v=u((()=>(0,l._)("div",{class:"trangle"},null,-1))),p={class:"info_tracker_x"};function f(e,t,s,u,f,y){const g=(0,l.up)("q-btn"),_=(0,l.up)("q-separator"),k=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(k,{class:""},{default:(0,l.w5)((()=>[(0,l._)("div",i,[r,(0,l._)("div",c,[(0,l.Wm)(g,{class:"q-ma-md",label:"+",onClick:t[0]||(t[0]=e=>u.mainNum+=100)}),(0,l.Wm)(g,{class:"q-ma-md",label:"-",onClick:t[1]||(t[1]=e=>u.mainNum-=100)})]),(0,l._)("div",o,(0,n.zw)(),1)]),(0,l._)("div",m,[(0,l._)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.maxMinMiddle(),((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"info_tracker_y",key:t,style:(0,n.j5)({left:"-4%",top:100-e.pos+"%"})},(0,n.zw)(e.num),5)),[[a.F8,"Infinity"!=e.num]]))),128)),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(26,((e,t)=>(0,l.wy)((0,l.Wm)(_,{class:"separator_v",vertical:"",key:t,style:(0,n.j5)({left:100/26*t+"%"})},null,8,["style"]),[[a.F8,t>0]]))),64)),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(13,((e,t)=>(0,l.wy)((0,l.Wm)(_,{class:"separator_h",vertical:"",key:t,style:(0,n.j5)({top:100/13*t+"%"})},null,8,["style"]),[[a.F8,t>0]]))),64)),h,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.numsToPercent(),((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"candle",key:t},[(0,l._)("div",{class:"info flex justify-center",style:(0,n.j5)({top:e>y.numsToPercent()[t-1]?100-e+"%":100-y.numsToPercent()[t-1]+"%"})},[v,(0,l.Uk)(" "+(0,n.zw)(u.valutes[t].num),1)],4),(0,l._)("div",{class:"vis",style:(0,n.j5)({height:e>y.numsToPercent()[t-1]?100-e+"%":100-y.numsToPercent()[t-1]+"%"})},null,4),(0,l._)("div",{class:"hid",style:(0,n.j5)({background:`${u.valutes[t].background}`,height:e>y.numsToPercent()[t-1]?e-y.numsToPercent()[t-1]+"%":y.numsToPercent()[t-1]-e+"%"})},null,4),(0,l._)("div",{class:"vis",style:(0,n.j5)({height:e>y.numsToPercent()[t-1]?`${y.numsToPercent()[t-1]}%`:`${e}%`})},null,4),(0,l._)("div",p,(0,n.zw)(u.valutes[t].index),1)])),[[a.F8,t>0]]))),128))])])])),_:1})}s(71);var y=s(1959);s(5474);const g={setup(){return{valutes:(0,y.iH)([]),mainNum:(0,y.iH)(500)}},mounted(){this.getMoney()},methods:{picker(e){document.querySelector(".picker").style.left=`${e.layerX}px`},getMoney(){let e,t=0;setInterval((()=>{let s,l=Math.floor(Math.random()*this.mainNum);for(let e=0;e<this.valutes.length;e++)s=this.valutes[this.valutes.length-1].num;e=l>s?"green":"red",this.valutes.push({num:l,background:e,index:t++}),this.valutes.length>50&&this.valutes.shift()}),1e3)},maxMinMiddle(){let e=[];for(let r of this.valutes)e.push(r.num);let t=Math.min(...e),s=Math.max(...e),l=s/2,n=1+99*(Math.min(...e)-t)/(s-t),a=1+99*(Math.max(...e)-t)/(s-t),u=1+99*(l-t)/(s-t),i=[{num:t,pos:n},{num:s,pos:a},{num:l,pos:u}];return console.log(Object.values(i)),i},numsToPercent(){let e=[];for(let l of this.valutes)e.push(l.num);let t=Math.min(...e),s=Math.max(...e);return e.map((e=>1+99*(e-t)/(s-t)))}}};var _=s(4260),k=s(4379),w=s(8240),x=s(5869),j=s(7518),M=s.n(j);const P=(0,_.Z)(g,[["render",f],["__scopeId","data-v-c17d2584"]]),q=P;M()(g,"components",{QPage:k.Z,QBtn:w.Z,QSeparator:x.Z})}}]);