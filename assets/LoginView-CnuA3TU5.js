import{_ as m,m as _,l as h,i as g,c as f,a as s,n as r,v as d,b as x,w,r as v,o as b,p as k,e as y}from"./index-ccKUnt5U.js";import{u as p}from"./userStore-BsxUI-ep.js";import{A as l}from"./swal-Dtq5zYNe.js";import"./sweetalert2.all-DvaChNy_.js";const T=""+new URL("../icons/user.svg",import.meta.url).href,U=""+new URL("../icons/password.svg",import.meta.url).href,S={data(){return{email:"",password:"",userToken:""}},computed:{..._(p,["isLogin"])},methods:{...h(p,["setUser","setUserCookie"]),login(){const o="http://localhost:3001/login",e={email:this.email,password:this.password};g.post(o,e).then(t=>{this.email="",this.password="",t.data.accessToken&&t.data.user.role==="user"&&(this.setUserCookie(t.data.user.id,t.data.accessToken,t.data.user.role),this.$router.replace("/"),l.toastTop("success","登入成功"),this.$bus.emit("login-success")),t.data.accessToken&&t.data.user.role==="admin"&&(this.setUserCookie(t.data.user.id,t.data.accessToken,t.data.user.role),this.$router.replace("/admin/accounts"),l.toastTop("success","歡迎登入後台"))}).catch(t=>{console.log(t),l.toastTop("error",t.response.data)})}}},a=o=>(k("data-v-bc2ecc1d"),o=o(),y(),o),C={class:"row justify-content-center my-6"},L={class:"login-container d-flex flex-column justify-content-center align-items-center py-5"},V=a(()=>s("h2",null,"Login",-1)),I={class:"d-flex flex-row mb-3"},j=a(()=>s("div",{class:"d-flex align-items-center"},[s("img",{src:T,alt:"account",width:"20",class:"me-3"})],-1)),A={class:"d-flex flex-row mb-3"},B=a(()=>s("div",{class:"d-flex align-items-center"},[s("img",{src:U,alt:"password",width:"20",class:"me-3"})],-1)),D=a(()=>s("button",{type:"submit",class:"btn-login"},[s("span",{class:"login-text"},"登入")],-1)),N={class:"d-lg-flex flex-lg-row align-items-center"},R=a(()=>s("div",{class:"text-white mb-2 mb-lg-0 me-lg-2"},"還不是會員嗎？",-1)),$=a(()=>s("button",{type:"button",class:"btn-signup"},[s("span",{class:"signup-text"},"註冊")],-1));function E(o,e,t,M,n,c){const u=v("router-link");return b(),f("div",C,[s("div",L,[V,s("form",{onSubmit:e[2]||(e[2]=(...i)=>c.login&&c.login(...i)),class:"d-flex flex-column justify-content-center align-items-center"},[s("div",I,[j,r(s("input",{type:"text",class:"login-input",placeholder:"帳號","onUpdate:modelValue":e[0]||(e[0]=i=>n.email=i)},null,512),[[d,n.email]])]),s("div",A,[B,r(s("input",{type:"text",class:"login-input",placeholder:"密碼","onUpdate:modelValue":e[1]||(e[1]=i=>n.password=i)},null,512),[[d,n.password]])]),D],32),s("div",N,[R,x(u,{to:"/signup"},{default:w(()=>[$]),_:1})])])])}const H=m(S,[["render",E],["__scopeId","data-v-bc2ecc1d"]]);export{H as default};
