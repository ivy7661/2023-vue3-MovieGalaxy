import{_ as u,h as m,g as _,c as f,a as s,l as c,v as r,b as h,w as g,r as w,o as x,p as v,e as b}from"./index-CseKFBzq.js";import{S as y,u as k}from"./sweetalert2.all-blgPvvo-.js";const d={toastTop(e,t){return y.fire({icon:e,title:t,toast:!0,position:"top",showConfirmButton:!1,timer:1500,width:280})}},S=""+new URL("../icons/user.svg",import.meta.url).href,U=""+new URL("../icons/password.svg",import.meta.url).href,T={data(){return{email:"",password:""}},methods:{...m(k,["setUser","setUserCookie"]),login(){const e="http://localhost:3001/login",t={email:this.email,password:this.password};_.post(e,t).then(o=>{this.email="",this.password="",o.data.accessToken&&o.data.user.role==="user"&&this.setUserCookie(o.data.user.id,o.data.accessToken),d.toastTop("success","登入成功"),this.$router.replace("/")}).catch(o=>{console.log(o),d.toastTop("error",o.response.data)})}}},n=e=>(v("data-v-f77ac0c0"),e=e(),b(),e),C={class:"row justify-content-center my-6"},V={class:"login-container d-flex flex-column justify-content-center align-items-center py-5"},B=n(()=>s("h2",null,"Login",-1)),I={class:"d-flex flex-row mb-3"},L=n(()=>s("div",{class:"d-flex align-items-center"},[s("img",{src:S,alt:"account",width:"20",class:"me-3"})],-1)),j={class:"d-flex flex-row mb-3"},A=n(()=>s("div",{class:"d-flex align-items-center"},[s("img",{src:U,alt:"password",width:"20",class:"me-3"})],-1)),D=n(()=>s("button",{type:"submit",class:"btn-login"},[s("span",{class:"login-text"},"登入")],-1)),N={class:"d-lg-flex flex-lg-row align-items-center"},R=n(()=>s("div",{class:"text-white mb-2 mb-lg-0 me-lg-2"},"還不是會員嗎？",-1)),E=n(()=>s("button",{type:"button",class:"btn-signup"},[s("span",{class:"signup-text"},"註冊")],-1));function M(e,t,o,q,a,l){const p=w("router-link");return x(),f("div",C,[s("div",V,[B,s("form",{onSubmit:t[2]||(t[2]=(...i)=>l.login&&l.login(...i)),class:"d-flex flex-column justify-content-center align-items-center"},[s("div",I,[L,c(s("input",{type:"text",class:"login-input",placeholder:"帳號","onUpdate:modelValue":t[0]||(t[0]=i=>a.email=i)},null,512),[[r,a.email]])]),s("div",j,[A,c(s("input",{type:"text",class:"login-input",placeholder:"密碼","onUpdate:modelValue":t[1]||(t[1]=i=>a.password=i)},null,512),[[r,a.password]])]),D],32),s("div",N,[R,h(p,{to:"/signup"},{default:g(()=>[E]),_:1})])])])}const G=u(T,[["render",M],["__scopeId","data-v-f77ac0c0"]]);export{G as default};
