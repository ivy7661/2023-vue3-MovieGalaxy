import{_ as v,m as x,l as y,c as o,a as t,n as p,v as w,u as k,F as d,j as h,o as l,b as S,w as M,t as i,p as W,e as b,r as j}from"./index-ccKUnt5U.js";import{m}from"./movieStore--Ice9BB9.js";import{_ as I,a as N}from"./star_empty-B9KiXxT8.js";const V=""+new URL("../icons/search.svg",import.meta.url).href,B={data(){return{keyWord:"",selected:""}},mounted(){this.getMovies()},computed:{...x(m,["movies"]),filterMovies(){if(!this.keyWord&&!this.selected)return[];const r=this.keyWord.split(" "),s=[];return r.forEach(u=>{this.movies.forEach(a=>{(a.name.includes(u)||a.englishName.includes(u))&&(this.selected===""||this.selected===a.type)&&s.push(a)})}),[...new Set(s)]}},methods:{...y(m,["getMovies"])}},n=r=>(W("data-v-477d16f0"),r=r(),b(),r),E={class:"row justify-content-center mx-2 mx-lg-0 my-3"},L={class:"col-md-6 d-flex flex-row align-items-center"},U=n(()=>t("img",{src:V,alt:"search",height:"25",class:""},null,-1)),A=n(()=>t("option",{value:""},"全部",-1)),C=n(()=>t("option",{value:"劇情片"},"劇情片",-1)),D=n(()=>t("option",{value:"動作片"},"動作片",-1)),F=n(()=>t("option",{value:"愛情片"},"愛情片",-1)),z=[A,C,D,F],R={class:"row justify-content-center align-items-center my-5"},T={class:"col-11 col-md-8"},$={class:"movie-card d-flex flex-column flex-lg-row text-white px-4 py-5"},q={class:"d-flex justify-content-center mb-3 mb-lg-0 me-lg-5"},G=["src"],H={class:"d-flex flex-column align-items-center align-items-lg-start"},J={class:"wrap-star mb-3"},K=n(()=>t("img",{src:I,alt:"star-full",width:"30",height:"30"},null,-1)),O=[K],P=n(()=>t("img",{src:N,alt:"star-empty",width:"30",height:"30"},null,-1)),Q=[P];function X(r,s,u,a,c,f){const g=j("router-link");return l(),o(d,null,[t("div",E,[t("div",L,[U,p(t("input",{class:"form-control mx-3 text-white search-input",type:"search","onUpdate:modelValue":s[0]||(s[0]=e=>c.keyWord=e)},null,512),[[w,c.keyWord,void 0,{lazy:!0,trim:!0}]]),p(t("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>c.selected=e),class:"dropdown text-white px-3 py-2 fs-6"},z,512),[[k,c.selected]])])]),(l(!0),o(d,null,h(f.filterMovies,e=>(l(),o("div",{key:e.id},[t("div",R,[t("div",T,[S(g,{to:`movies/${e.id}`},{default:M(()=>[t("div",$,[t("div",q,[t("img",{src:e.image,alt:"電影海報",class:"poster"},null,8,G)]),t("div",null,[t("div",H,[t("h3",null,i(e.name),1),t("h4",null,i(e.englishName),1),t("div",J,[(l(!0),o(d,null,h(e.ratingStars,_=>(l(),o("span",{key:_+123,class:"mx-1"},O))),128)),(l(!0),o(d,null,h(5-e.ratingStars,_=>(l(),o("span",{key:_+123,class:"mx-1"},Q))),128))])]),t("p",null,"語言："+i(e.language),1),t("p",null,"片長："+i(e.movieLength),1),t("p",null,"導演："+i(e.staff.director),1),t("p",null,"主演："+i(e.staff.actor),1)])])]),_:2},1032,["to"])])])]))),128))],64)}const et=v(B,[["render",X],["__scopeId","data-v-477d16f0"]]);export{et as default};
