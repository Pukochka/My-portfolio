"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[699],{9699:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var o=t(3673),s=t(2323);const c={class:"select"},n={class:"c_color",ref:"hexcolor"},r={class:"blocks flex"},a={class:"group"},i={class:"btn"},b={class:"c_name"};function h(e,l,t,h,d,u){const k=(0,o.up)("q-item-section"),g=(0,o.up)("q-btn"),x=(0,o.up)("q-item"),$=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)($,null,{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(x,{class:"flex justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,null,512)])),_:1}),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{color:"yellow","text-color":"dark",icon:"update",label:"Обновить цвет",onClick:l[0]||(l[0]=e=>u.writeColorBlock())})])),_:1})])),_:1})]),(0,o._)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.blocks,((e,l)=>((0,o.wg)(),(0,o.iD)("div",{class:"item",key:l,style:(0,s.j5)({background:e.col,width:100/h.blocks.length+"%",transform:` translateX(${100*l}%) `,"box-shadow":`${e.col} 0 0 0 1px`,transition:".3s ease width"})},[(0,o._)("div",a,[h.blocks.length>2?((0,o.wg)(),(0,o.j4)(g,{key:0,round:"",flat:"",color:"main",icon:"clear",onClick:t=>u.deleteColor(e,l)},null,8,["onClick"])):(0,o.kq)("",!0)]),(0,o._)("div",i,[l>0&&h.blocks.length<10?((0,o.wg)(),(0,o.j4)(g,{key:0,class:"btn_b",round:"",color:"white","text-color":"main",icon:"add",size:"16px",onClick:t=>{u.createNewPalet(l),e.btn=!0}},null,8,["onClick"])):(0,o.kq)("",!0)]),(0,o._)("div",b,(0,s.zw)(e.hex),1)],4)))),128))])])),_:1})}t(71);var d=t(1959);const u={setup(){return{blocks:(0,d.iH)([]),length:(0,d.iH)(),defScale:"scaleX(1)",nonScale:"scaleX(0)"}},created(){},mounted(){this.writeColorBlock()},methods:{writeColorBlock(){const e=()=>Math.floor(255*Math.random());let l=e(),t=e(),o=e();this.blocks=[{col:`rgb(${l-90},${t-70},${o-120})`,hex:this.rgbToHex(l-90,t-70,o-20),btn:!1,scale:!1},{col:`rgb(${l-40},${t-30},${o-50})`,hex:this.rgbToHex(l-40,t-30,o-10),scale:!1,btn:!1},{col:`rgb(${l},${t},${o})`,hex:this.rgbToHex(l,t,o),btn:!1},{col:`rgb(${l+40},${t+30},${o+50})`,hex:this.rgbToHex(l+40,t+30,o+10),scale:!1,btn:!1},{col:`rgb(${l+90},${t+70},${o+120})`,hex:this.rgbToHex(l+90,t+70,o+20),scale:!1,btn:!1}],this.$refs.hexcolor.style.background=this.blocks[2].col},deleteColor(e,l){this.blocks=this.blocks.filter((l=>l!==e))},rgbToHex(e,l,t){!(e>255)||(e=255),!(e<0)||(e=0),!(l>255)||(l=255),!(l<0)||(l=0),!(t>255)||(t=255),!(t<0)||(t=0);const o=e=>{let l=e.toString(16).toUpperCase();return 1==l.length?"0"+l:l};return`${o(e)}${o(l)}${o(t)}`},createNewPalet(e){let l;l=this.blocks[e].btn?e-1:e;let t=this.blocks[l],o=[];for(let s=0;s<[...t.hex].length;s+=2)o.push([...t.hex][s]+[...t.hex][s+1]);o=o.map((e=>parseInt(e,16))),t={col:`rgb(${o[0]-30},${o[1]-20},${o[2]-40})`,hex:this.rgbToHex(o[0]-30,o[1]-20,o[2]-40),scale:!1,btn:!1},this.blocks.splice(e,0,t)}}};var k=t(4260),g=t(4379),x=t(3414),$=t(2035),p=t(8240),f=t(7518),w=t.n(f);const m=(0,k.Z)(u,[["render",h],["__scopeId","data-v-353adef4"]]),_=m;w()(u,"components",{QPage:g.Z,QItem:x.Z,QItemSection:$.Z,QBtn:p.Z})}}]);