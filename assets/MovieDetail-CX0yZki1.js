import{_ as p,j as v,c as i,a as s,t as a,F as d,g as h,b as g,r as x,o as l,p as b,e as w}from"./index-D4uiWlSC.js";import{A as y}from"./swal-DRI1t08D.js";import{_ as I,a as k}from"./star_empty-B9KiXxT8.js";import"./sweetalert2.all-DszIlZRT.js";const D=""+new URL("../icons/masonry.svg",import.meta.url).href,S={data(){return{vt_url:"https://www.youtube.com/watch?v=cnc8mDAB7QI",videoID:"",ytlink:"",imgs:[],visible:!1,index:0,movieId:"",movieInfo:{}}},mounted(){this.change_yt(),this.getMovie()},watch:{"$route.params":{immediate:!0,handler(){this.$route.params.id&&this.getMovie()}}},methods:{getMovie(){this.movieId=this.$route.params.id;const t=`http://localhost:3001/movies/${this.movieId}`;v.get(t).then(c=>{console.log(c),this.movieInfo=c.data,this.vt_url=`https://www.youtube.com/watch?v=${c.data.videoId}`,this.imgs=c.data.images}).catch(()=>{y.toastTop("err","載入失敗")})},showImg(t){this.index=t,this.visible=!0},change_yt(){let t=this.vt_url;const m=new URLSearchParams(t.split("?")[1]).get("v");if(m!=null)this.videoID=m;else{t.indexOf("?")!==-1&&(t=t.split("?")[0]);const e=t.indexOf("youtu.be"),r=t.indexOf("embed");e!==-1?this.videoID=t.split("youtu.be/")[1]:r!==-1?this.videoID=t.split("embed/")[1]:this.videoID=""}this.ytlink="https://www.youtube.com/embed/"+this.videoID},handleHide(){this.visible=!1}}},o=t=>(b("data-v-c5a0d684"),t=t(),w(),t),j={class:"d-flex flex-column flex-lg-row py-8"},L={class:"col-12 col-lg-5 justify-content-center me-lg-5 mb-5 mb-lg-0"},B={class:"d-flex justify-content-center"},H=["src"],M={class:"col-12 col-lg-6"},V={class:"d-flex flex-column text-white"},A={class:"d-flex flex-column align-items-center align-items-lg-start"},C={class:"mb-2"},E={class:"text-uppercase"},N={class:"d-flex justify-content-start my-4"},O=o(()=>s("img",{src:I,alt:"star-full",class:"star"},null,-1)),P=[O],F=o(()=>s("img",{src:k,alt:"star-empty",class:"star"},null,-1)),R=[F],U=o(()=>s("button",{class:"btn-view mb-8"},[s("div",{class:"text-view"},"查看影評")],-1)),Q=o(()=>s("p",{class:"fw-bold"},"電影簡介:",-1)),T={class:"movie-intro"},q=o(()=>s("hr",null,null,-1)),z={class:"d-flex flex-row mb-2"},G=o(()=>s("span",{class:"fw-bold"},"導演：",-1)),J={class:"d-flex flex-row"},K=o(()=>s("span",{class:"fw-bold"},"主演：",-1)),W={class:"trailer-container text-white my-4 px-4 py-4"},X=o(()=>s("div",{class:"d-flex flex-row mb-3"},[s("i",{class:"bi bi-play-fill fs-3 me-2"}),s("h3",{class:"pt-1"},"預告片")],-1)),Y={class:"d-flex justify-content-center mb-3"},Z=["src"],$={class:"text-white my-14"},ss={class:"still-container px-4 py-5"},ts=o(()=>s("div",{class:"d-flex flex-row"},[s("img",{src:D,alt:"masonry",width:"25",height:"25",class:"pt-1"}),s("h3",{class:"ms-2 mb-5"},"劇照")],-1)),es={class:"d-flex flex-column flex-lg-row justufy-content-center"},os=["onClick"],is=["src"];function ls(t,c,m,f,e,r){const u=x("VueEasyLightbox");return l(),i(d,null,[s("section",j,[s("div",L,[s("div",B,[s("img",{src:e.movieInfo.image,alt:"電影海報",class:"poster"},null,8,H)])]),s("div",M,[s("div",V,[s("div",A,[s("h2",C,a(e.movieInfo.name),1),s("h2",E,a(e.movieInfo.englishName),1),s("div",N,[(l(!0),i(d,null,h(e.movieInfo.ratingStars,n=>(l(),i("span",{key:n+123,class:"me-lg-1"},P))),128)),(l(!0),i(d,null,h(5-e.movieInfo.ratingStars,n=>(l(),i("span",{key:n+123,class:"me-lg-1"},R))),128))]),U]),Q,s("p",T,a(e.movieInfo.intro),1),q,s("div",z,[G,s("span",null,a(e.movieInfo.staff.director),1)]),s("div",J,[K,s("span",null,a(e.movieInfo.staff.actor),1)])])])]),s("section",W,[X,s("div",Y,[s("iframe",{src:e.ytlink,title:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:"",class:"player"},null,8,Z)])]),s("section",$,[s("div",ss,[ts,s("div",null,[g(u,{visible:e.visible,imgs:e.imgs,index:e.index,onHide:r.handleHide},null,8,["visible","imgs","index","onHide"])]),s("div",es,[(l(!0),i(d,null,h(e.imgs,(n,_)=>(l(),i("div",{key:_,class:"mx-auto",onClick:cs=>r.showImg(_)},[s("img",{src:n,class:"still mx-1 mb-3"},null,8,is)],8,os))),128))])])])],64)}const ms=p(S,[["render",ls],["__scopeId","data-v-c5a0d684"]]);export{ms as default};
