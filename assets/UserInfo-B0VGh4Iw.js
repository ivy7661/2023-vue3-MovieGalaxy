import{_ as a,i as r,c as i,a as s,t as c,o as d,p as l,e as _}from"./index-CMJ76Owy.js";const p={data(){return{user:{}}},mounted(){this.getUser()},methods:{getUser(){const n=`https://two023-vue3-moviegalaxy.onrender.com/users/${document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1")}`;r.get(n).then(t=>{console.log(t),this.user=t.data}).catch(t=>{console.log(t)})}}},u=e=>(l("data-v-cd836a3d"),e=e(),_(),e),h={class:"row justify-content-center mb-5"},m={class:"col-10 col-md-9"},f=u(()=>s("div",{class:"d-flex justify-content-center align-items-center mb-3"},[s("i",{class:"bi bi-person-fill fs-2"}),s("h2",{class:"pt-2 ms-3"},"會員基本資料")],-1)),x={class:"row justify-content-center"},g={class:"col-12 info-container px-2 px-lg-5 py-6"},v={class:"text-start"},I={class:"text-start"},y={class:"text-start"};function $(e,n,t,b,o,w){return d(),i("div",h,[s("div",m,[f,s("div",x,[s("div",g,[s("h5",v,"會員名稱： "+c(o.user.userName),1),s("h5",I,"帳號： "+c(o.user.email),1),s("h5",y,"手機號碼： "+c(o.user.phone),1)])])])])}const j=a(p,[["render",$],["__scopeId","data-v-cd836a3d"]]);export{j as default};
