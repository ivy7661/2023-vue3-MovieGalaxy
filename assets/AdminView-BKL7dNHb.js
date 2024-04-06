import{S as n}from"./sweetalert2.all-aKTOBZEq.js";import{_ as v,i as m,c as $,a as e,b as i,w as a,y as w,d as t,z as g,k as x,r as _,o as h,p as S,e as V}from"./index-BeLo5fqH.js";const I=""+new URL("../images/admin_logo.svg",import.meta.url).href,b={data(){return{token:"",checkSuccess:!1}},mounted(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),m.defaults.headers.common.Authorization=`Bearer ${this.token}`,this.checkAdmin()},methods:{checkAdmin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,"$1"),o=document.cookie.replace(/(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,"$1"),r=`http://localhost:3001/600/users/${s}`;this.token&&o==="user"?(n.fire({icon:"warning",title:"無管理者權限"}),this.$router.push("/")):this.token?m.get(r).then(d=>{d.data.role==="admin"&&(this.checkSuccess=!0)}):(n.fire({icon:"warning",title:"請先登入"}),this.$router.push("/login"))},logout(){document.cookie=`userToken=0; expires=${new Date("2000/1/1 12:00")};path=/`,document.cookie=`userId=0; expires=${new Date("2000/1/1 12:00")};path=/`,document.cookie=`role=''; expires=${new Date("2000/1/1 12:00")};path=/`,n.fire({icon:"success",title:"登出成功"}),this.$router.push("/login")}}},l=s=>(S("data-v-d2d42eba"),s=s(),V(),s),B={class:"mainView container-fluid"},R={class:"row"},A={class:"col-2 pt-5 flex-column side-bar"},C=l(()=>e("h3",{class:"text-center mb-5"},"後台系統",-1)),N={class:"nav flex-column px-2 ms-3"},y={class:"nav-item"},D={class:"nav-item"},L={class:"nav-item"},T={class:"nav-item"},z={class:"nav-item mt-5"},E=l(()=>e("span",{class:"material-icons me-1"}," logout ",-1)),M={class:"col-10 py-3"},U=l(()=>e("div",{class:""},[e("img",{src:I,alt:"logo",class:"img-fluid mb-3 px-2",width:"220"})],-1));function j(s,o,r,d,p,u){const c=_("RouterLink"),k=_("RouterView");return h(),$("div",B,[e("div",R,[e("div",A,[C,e("ul",N,[e("li",y,[i(c,{to:"/admin/accounts",class:"nav-link"},{default:a(()=>[t("帳戶管理")]),_:1})]),e("li",D,[i(c,{to:"/admin/movies",class:"nav-link"},{default:a(()=>[t("電影管理")]),_:1})]),e("li",L,[i(c,{to:"/admin/posts",class:"nav-link"},{default:a(()=>[t("影評管理")]),_:1})]),e("li",T,[i(c,{to:"/",class:"nav-link"},{default:a(()=>[t("回前台首頁")]),_:1})]),e("li",z,[e("a",{href:"#",class:"nav-link d-flex align-items-center",onClick:o[0]||(o[0]=w((...f)=>u.logout&&u.logout(...f),["prevent"]))},[E,t("登出")])])])]),e("div",M,[U,p.checkSuccess?(h(),g(k,{key:0})):x("",!0)])])])}const G=v(b,[["render",j],["__scopeId","data-v-d2d42eba"]]);export{G as default};
