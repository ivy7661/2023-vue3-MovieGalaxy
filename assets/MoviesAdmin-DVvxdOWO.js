import{_ as b,o as d,c as a,a as e,n as l,v as n,F as h,j as k,x as u,d as f,t as _,m as C,l as D,i as g,b as y,r as x,p as S,e as I}from"./index-BYRf82TL.js";import{m as w}from"./movieStore-BVuK-z5M.js";import{m as V}from"./modalMixin-CsRdmH4Y.js";import{A as p}from"./swal-BS-0k_ej.js";import"./sweetalert2.all-Gxztc9qn.js";const T={props:["isNew","tempMovie"],mixins:[V],data(){return{editMovie:{images:[],staff:{}}}},watch:{tempMovie(){this.editMovie=this.tempMovie}}},$={class:"modal fade",tabindex:"-1",ref:"modal"},L={class:"modal-dialog modal-xl"},A={class:"modal-content"},B={class:"modal-header bg-dark"},j={class:"modal-title text-light"},F={key:0},E={key:1},q=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1),z={class:"modal-body"},G={class:"row px-3"},H={class:"col-sm-4"},J={class:"mb-5"},K=e("label",{for:"image",class:"form-label"},"電影海報",-1),O=["src"],P=e("h3",{class:"mb-3"},"新增劇照",-1),Q={class:"mb-3"},R=["for"],W=["id","onUpdate:modelValue"],X=["src"],Y={key:0},Z={key:1},ee={class:"col-sm-8"},oe={class:"mb-3"},te=e("label",{for:"name",class:"form-label"},"電影名稱",-1),se={class:"mb-3"},ie=e("label",{for:"englishName",class:"form-label"},"英文名稱",-1),le={class:"row mb-3"},ne={class:"col-md-4"},de=e("label",{for:"language",class:"form-label"},"語言",-1),ae={class:"col-md-4"},ce=e("label",{for:"movieLength",class:"form-label"},"片長",-1),re={class:"col-md-4"},me=e("label",{for:"type",class:"form-label"},"類型",-1),ve={class:"row mb-3"},pe={class:"col-md-4"},_e=e("label",{for:"ratingStars",class:"form-label"},"評分",-1),ue={class:"col-md-4"},he=e("label",{for:"videoId",class:"form-label"},"預告片ID",-1),be={class:"col-md-4"},Me=e("label",{for:"director",class:"form-label"},"導演",-1),fe={class:"mb-3"},ge=e("label",{for:"actor",class:"form-label"},"主演",-1),ye={class:"mb-3"},xe=e("label",{for:"info",class:"form-label"},"電影資訊",-1),we={class:"mb-3"},ke=e("label",{for:"intro",class:"form-label"},"電影簡介",-1),Ve={class:"row mb-3"},Ue={class:"col-sm-4"},Ne=e("label",{for:"is_hot",class:"form-check-label ms-2"}," 是否熱門 ",-1),Ce={class:"col-sm-4"},De=e("label",{for:"is_coming",class:"form-check-label ms-2"},"是否即將上映",-1),Se={class:"col-sm-4"},Ie=e("label",{for:"on_banner",class:"form-check-label ms-2"}," 是否在banner輪播",-1),Te={class:"modal-footer"},$e=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(i,o,v,M,t,r){return d(),a("div",$,[e("div",L,[e("div",A,[e("div",B,[e("h5",j,[v.isNew?(d(),a("span",F,"新增電影")):(d(),a("span",E,"編輯電影資料"))]),q]),e("div",z,[e("div",G,[e("div",H,[e("div",J,[K,l(e("input",{type:"text",id:"image",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>t.editMovie.image=s)},null,512),[[n,t.editMovie.image]]),e("img",{src:t.editMovie.image,class:"img-fluid"},null,8,O)]),P,(d(!0),a(h,null,k(t.editMovie.images,(s,m)=>(d(),a("div",{key:m,class:"mb-4"},[e("div",Q,[e("label",{for:s+m,class:"form-label"},"圖片網址",8,R),l(e("input",{type:"text",id:s+m,class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":c=>t.editMovie.images[m]=c},null,8,W),[[n,t.editMovie.images[m]]])]),e("img",{src:s,class:"img-fluid"},null,8,X)]))),128)),!t.editMovie.images.length||t.editMovie.images[t.editMovie.images.length-1]?(d(),a("div",Y,[e("button",{type:"button",class:"btn btn-outline-success w-100 mt-2",onClick:o[1]||(o[1]=s=>t.editMovie.images.push(""))}," 新增劇照 ")])):(d(),a("div",Z,[e("button",{type:"button",class:"btn btn-danger w-100",onClick:o[2]||(o[2]=s=>t.editMovie.images.pop())}," 刪除劇照 ")]))]),e("div",ee,[e("div",oe,[te,l(e("input",{type:"text",id:"name",class:"form-control",placeholder:"請輸入電影名稱","onUpdate:modelValue":o[3]||(o[3]=s=>t.editMovie.name=s)},null,512),[[n,t.editMovie.name]])]),e("div",se,[ie,l(e("input",{type:"text",id:"englishName",class:"form-control",placeholder:"請輸入英文名稱","onUpdate:modelValue":o[4]||(o[4]=s=>t.editMovie.englishName=s)},null,512),[[n,t.editMovie.englishName]])]),e("div",le,[e("div",ne,[de,l(e("input",{type:"text",id:"language",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=s=>t.editMovie.language=s)},null,512),[[n,t.editMovie.language]])]),e("div",ae,[ce,l(e("input",{type:"text ",id:"movieLength",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>t.editMovie.movieLength=s)},null,512),[[n,t.editMovie.movieLength]])]),e("div",re,[me,l(e("input",{type:"text",id:"type",class:"form-control","onUpdate:modelValue":o[7]||(o[7]=s=>t.editMovie.type=s)},null,512),[[n,t.editMovie.type]])])]),e("div",ve,[e("div",pe,[_e,l(e("input",{type:"number",id:"ratingStars",class:"form-control","onUpdate:modelValue":o[8]||(o[8]=s=>t.editMovie.ratingStars=s)},null,512),[[n,t.editMovie.ratingStars,void 0,{number:!0}]])]),e("div",ue,[he,l(e("input",{type:"text",id:"videoId",class:"form-control","onUpdate:modelValue":o[9]||(o[9]=s=>t.editMovie.videoId=s)},null,512),[[n,t.editMovie.videoId]])]),e("div",be,[Me,l(e("input",{type:"text ",id:"director",class:"form-control","onUpdate:modelValue":o[10]||(o[10]=s=>t.editMovie.staff.director=s)},null,512),[[n,t.editMovie.staff.director]])])]),e("div",fe,[ge,l(e("input",{type:"text",id:"actor",class:"form-control","onUpdate:modelValue":o[11]||(o[11]=s=>t.editMovie.staff.actor=s)},null,512),[[n,t.editMovie.staff.actor]])]),e("div",ye,[xe,l(e("textarea",{type:"text",id:"info",class:"form-control","onUpdate:modelValue":o[12]||(o[12]=s=>t.editMovie.info=s)},null,512),[[n,t.editMovie.info]])]),e("div",we,[ke,l(e("textarea",{type:"text",id:"intro",class:"form-control","onUpdate:modelValue":o[13]||(o[13]=s=>t.editMovie.intro=s)},null,512),[[n,t.editMovie.intro]])]),e("div",Ve,[e("div",Ue,[l(e("input",{type:"checkbox",id:"is_hot",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":o[14]||(o[14]=s=>t.editMovie.is_hot=s)},null,512),[[u,t.editMovie.is_hot]]),Ne]),e("div",Ce,[l(e("input",{type:"checkbox",id:"is_coming",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":o[15]||(o[15]=s=>t.editMovie.is_coming=s)},null,512),[[u,t.editMovie.is_coming]]),De]),e("div",Se,[l(e("input",{type:"checkbox",id:"on_banner",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":o[16]||(o[16]=s=>t.editMovie.on_banner=s)},null,512),[[u,t.editMovie.on_banner]]),Ie])])])])]),e("div",Te,[$e,e("button",{type:"button",class:"btn btn-blue",onClick:o[17]||(o[17]=s=>i.$emit("updateMovie"))},"確認")])])])],512)}const Ae=b(T,[["render",Le]]),Be={props:["tempMovie"],mixins:[V]},je={class:"modal fade",ref:"modal",tabindex:"-1"},Fe={class:"modal-dialog"},Ee={class:"modal-content"},qe=e("div",{class:"modal-header bg-danger text-light"},[e("h5",{class:"modal-title"},"刪除電影"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),ze={class:"modal-body"},Ge={class:"text-danger"},He={class:"modal-footer"},Je=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ke(i,o,v,M,t,r){return d(),a("div",je,[e("div",Fe,[e("div",Ee,[qe,e("div",ze,[e("p",null,[f(" 是否刪除 "),e("strong",Ge,_(v.tempMovie.name),1),f(" (刪除後將無法恢復) ")])]),e("div",He,[Je,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=s=>i.$emit("delMovie"))},"確認刪除")])])])],512)}const Oe=b(Be,[["render",Ke]]),Pe={data(){return{isNew:!1,tempMovie:{}}},components:{MovieModal:Ae,DelMovieModal:Oe},mounted(){this.getMovies()},computed:{...C(w,["movies"])},methods:{...D(w,["getMovies"]),openModal(i,o){i==="new"?(this.tempMovie={images:[],staff:{}},this.isNew=!0,this.$refs.MovieModal.openModal()):i==="edit"?(this.tempMovie={...o},this.isNew=!1,this.$refs.MovieModal.openModal()):i==="delete"&&(this.tempMovie={...o},this.$refs.DelMovieModal.openModal())},updateMovie(){let i="https://two023-vue3-moviegalaxy.onrender.com/movies",o="post";this.isNew||(i=`https://two023-vue3-moviegalaxy.onrender.com/movies/${this.tempMovie.id}`,o="put"),g[o](i,this.tempMovie).then(v=>{this.getMovies(),this.$refs.MovieModal.closeModal(),this.isNew?p.toastTop("success","新增成功"):p.toastTop("success","編輯成功")}).catch(()=>{p.toastTop("error","編輯失敗")})},delMovie(){const i=`https://two023-vue3-moviegalaxy.onrender.com/movies/${this.tempMovie.id}`;g.delete(i).then(o=>{this.$refs.DelMovieModal.closeModal(),this.getMovies(),p.toastTop("success","刪除成功")}).catch(()=>{p.toastTop("error","刪除失敗")})}}},U=i=>(S("data-v-508ad98a"),i=i(),I(),i),Qe={class:"row justify-content-center"},Re={class:"col-md-11"},We=U(()=>e("h2",null,"電影管理",-1)),Xe={class:"text-end"},Ye={class:"row"},Ze={class:"table mt-4 mx-2"},eo=U(()=>e("thead",{class:"table-light"},[e("tr",null,[e("th",{width:"205"},"電影名稱"),e("th",{width:"90"},"類型"),e("th",{width:"90"},"簡介"),e("th",{width:"120",class:"text-center"},"編輯")])],-1)),oo={class:"commentContent"},to={class:"text-center"},so={class:"btn-group"},io=["onClick"],lo=["onClick"];function no(i,o,v,M,t,r){const s=x("Movie-Modal"),m=x("Del-Movie-Modal");return d(),a(h,null,[e("div",Qe,[e("div",Re,[We,e("div",Xe,[e("button",{class:"btn btn-main text-white",onClick:o[0]||(o[0]=c=>r.openModal("new"))},"新增電影")]),e("div",Ye,[e("table",Ze,[eo,e("tbody",null,[(d(!0),a(h,null,k(i.movies,c=>(d(),a("tr",{key:c.id},[e("td",null,_(c.name),1),e("td",null,_(c.type),1),e("td",null,[e("p",oo,_(c.intro),1)]),e("td",to,[e("div",so,[e("button",{type:"button",class:"btn btn-outline-blue btn-sm",onClick:N=>r.openModal("edit",c)}," 編輯 ",8,io),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:N=>r.openModal("delete",c)}," 刪除 ",8,lo)])])]))),128))])])])])]),y(s,{ref:"MovieModal","is-new":t.isNew,"temp-movie":t.tempMovie,onUpdateMovie:r.updateMovie},null,8,["is-new","temp-movie","onUpdateMovie"]),y(m,{ref:"DelMovieModal","temp-movie":t.tempMovie,onDelMovie:r.delMovie},null,8,["temp-movie","onDelMovie"])],64)}const po=b(Pe,[["render",no],["__scopeId","data-v-508ad98a"]]);export{po as default};