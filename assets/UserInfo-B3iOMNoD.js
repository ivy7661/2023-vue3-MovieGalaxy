import{_ as n,i as r,c as i,a as s,t as c,o as d,p as l,e as _}from"./index-Dqc_nomj.js";const p={data(){return{user:{}}},mounted(){this.getUser()},methods:{getUser(){const a=`http://localhost:3001/users/${document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1")}`;r.get(a).then(e=>{console.log(e),this.user=e.data}).catch(e=>{console.log(e)})}}},h=t=>(l("data-v-cd836a3d"),t=t(),_(),t),u={class:"row justify-content-center mb-5"},f={class:"col-10 col-md-9"},m=h(()=>s("div",{class:"d-flex justify-content-center align-items-center mb-3"},[s("i",{class:"bi bi-person-fill fs-2"}),s("h2",{class:"pt-2 ms-3"},"會員基本資料")],-1)),x={class:"row justify-content-center"},g={class:"col-12 info-container px-2 px-lg-5 py-6"},I={class:"text-start"},v={class:"text-start"},$={class:"text-start"};function y(t,a,e,b,o,S){return d(),i("div",u,[s("div",f,[m,s("div",x,[s("div",g,[s("h5",I,"會員名稱： "+c(o.user.userName),1),s("h5",v,"帳號： "+c(o.user.email),1),s("h5",$,"手機號碼： "+c(o.user.phone),1)])])])])}const k=n(p,[["render",y],["__scopeId","data-v-cd836a3d"]]);export{k as default};
