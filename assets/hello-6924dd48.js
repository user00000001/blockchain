import{c as a,_ as r,p as t,q as s,O as d,P as u,Q as l,v as o}from"./framework-f538f058.js";const i=a({name:"hello111",data(){return{list:[]}},created(){this.list=[{id:1,text:"JavaScript",done:!1},{id:2,text:"HTML",done:!1},{id:3,text:"CSS",done:!0},{id:4,text:"Vue.js",done:!0},{id:5,text:"VuePress",done:!0}]}}),c={class:"hello1"},_=l("h3",null,"todoList:",-1);function p(n,f,h,x,F,B){return t(),s("div",c,[_,(t(!0),s(d,null,u(n.list,e=>(t(),s("div",{key:e.id}," 项目-"+o(e.id)+"："+o(e.text)+"，状态："+o(e.done?"完成":"进行中"),1))),128))])}const C=r(i,[["render",p],["__file","hello.vue"]]);export{C as default};