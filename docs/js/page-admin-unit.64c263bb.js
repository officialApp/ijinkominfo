(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-unit"],{"73e3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"font-times"},[e("div",{staticClass:"tips float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),t.show?e("div",{staticClass:"row"},[e("div",{staticClass:"offset-sm-2 col-sm-8"},[e("form",{attrs:{action:""},on:{submit:function(a){a.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("unit")]),e("div",{staticClass:"card-body"},[e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id_",id:"id",name:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("head_nama_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.head_nama,expression:"vdata.head_nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"head_nama_",id:"head_nama",name:"head_nama"},domProps:{value:t.vdata.head_nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"head_nama",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("nama_unit_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama_unit,expression:"vdata.nama_unit"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nama_unit_",id:"nama_unit",name:"nama_unit"},domProps:{value:t.vdata.nama_unit},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama_unit",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("singkatan_unit_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.singkatan_unit,expression:"vdata.singkatan_unit"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"singkatan_unit_",id:"singkatan_unit",name:"singkatan_unit"},domProps:{value:t.vdata.singkatan_unit},on:{input:function(a){a.target.composing||t.$set(t.vdata,"singkatan_unit",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("bagian_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.bagian,expression:"vdata.bagian"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"bagian_",id:"bagian",name:"bagian"},domProps:{value:t.vdata.bagian},on:{input:function(a){a.target.composing||t.$set(t.vdata,"bagian",a.target.value)}}})])])]),e("br"),e("div",{staticClass:"text-center"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"insert"==t.aksi,expression:"aksi=='insert'"}],staticClass:"btn btn-sm btn-outline-primary ml-2  font-times text-uppercase",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove"))]),e("button",{directives:[{name:"show",rawName:"v-show",value:"insert"!=t.aksi,expression:"aksi!='insert'"}],staticClass:"btn btn-sm btn-outline-success ml-2  font-times text-uppercase",attrs:{type:"submit"},on:{click:function(a){t.aksi="update"}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Update")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"insert"!=t.aksi,expression:"aksi!='insert'"}],staticClass:"btn btn-sm btn-outline-danger ml-2  font-times text-uppercase",attrs:{type:"submit"},on:{click:function(a){t.aksi="remove"}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Delete")])])])])]),e("hr",{staticClass:"style13"})])]):t._e(),e("hr",{staticClass:"style16"}),t.ready?t._e():e("button",{staticClass:"btn btn-sm text-white bg-dark mr-2",staticStyle:{width:"40px",height:"30px"},attrs:{type:"button"},on:{click:function(a){t.show=!t.show}}},[e("span",{staticClass:"typcn typcn-arrow-maximise"})]),t.ready?e("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-sm-4 text-center"},[e("button",{staticClass:"btn btn-sm text-white bg-dark mr-2",staticStyle:{width:"40px",height:"30px"},attrs:{type:"button"},on:{click:function(a){t.show=!t.show}}},[e("span",{staticClass:"typcn typcn-arrow-maximise"})]),e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.aksi="insert",t.clearInput(),t.show=!0}}},[e("span",{staticClass:"typcn typcn-plus"}),t._v("Tambah")])]),e("div",{staticClass:"col-sm-4 row"},[e("div",{staticClass:"col-6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px",height:"30px","font-size":"12px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]}}},[e("option",[t._v("10")]),e("option",[t._v("20")]),e("option",[t._v("50")]),e("option",[t._v("100")]),e("option",{domProps:{value:1e6}},[t._v("Semua")])])]),e("div",{staticClass:"col-3"}),e("div",{staticClass:"col-3"},[e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])])]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"Cari data ..."},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])])])]),e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[e("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[e("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[e("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[e("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,s){return e("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:s+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(e){return t.sort(a)}}},[e("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v(" "+t._s(a)+" "),t.orderWith?[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-down"})])]:[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),e("tbody",t._l(t.td,(function(a,s){return e("tr",{key:s+"td"},[e("td",[t._v(t._s(s+t.temp1+1))]),e("no-ssr",t._l(t.thnya,(function(i,n){return e("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(i),expression:"!less.includes(item2)"}],key:n+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[i])},on:{tap:function(e){t.ambil(a,s),t.modal=!0,t.aksi="update",t.show=!0}}})})),1)],1)})),0)])],e("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[e("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):e("div",[e("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},i=[],n=(e("4de4"),e("7db0"),e("4160"),e("c975"),e("d81d"),e("fb6a"),e("b64b"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("841c"),e("159b"),e("5530")),o=e("1bdd"),r=e("eeb9"),c=(e("bc3a"),e("8aa5")),l=e.n(c),d=e("03a0"),p=l.a.firestore(),u={components:{upload:r["a"],downloadExcel:o["a"]},layout:"admin",data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],order:["id","nama_unit","singkatan_unit","bagian","head_nama"],vdata:{},ready:!1,show:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){delete this.vdata.id,p.collection("unit").doc().set(this.vdata).then((function(t){console.log("berhasil"),alert("simpan data berhasil!")}))},update:function(){p.collection("unit").doc(this.pilih.id).set(this.vdata,{merge:!0}).then((function(t){alert("update data berhasil!")}))},remove:function(){confirm("Apakah yakin menghapus data?")&&p.collection("unit").doc(this.pilih.id).delete().then((function(t){alert("delete data berhasil!")}))},refreshData:function(){var t=this,a=this;p.collection("unit").onSnapshot((function(e){var s=[];e.forEach((function(t){s.push(Object(n["a"])({id:t.id},t.data()))})),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(e){e.style.position="relative";var s=document.createElement("div");s.innerHTML="&nbsp;",s.style.top=0,s.style.right=0,s.style.bottom=0,s.style.width="5px",s.style.position="absolute",s.style.cursor="col-resize",s.addEventListener("mousedown",(function(s){t=e,a=e.offsetWidth-s.pageX})),e.appendChild(s)})),document.addEventListener("mousemove",(function(e){t&&(t.style.width=a+e.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})();var e=[],i={};s.forEach((function(t,n){a.order.forEach((function(t){i[t]=s[n][t]})),e.push(i),i={}})),t.datanya=e;var n=t.order;n=t.$_.difference(n,t.unless),t.thnya=n}),1e3)}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var e=this.$_.clone(t);console.log(e),this.vdata=e,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},
//!==================
//! hapus dari sini
//! =================
checkedAll:function(){console.log(this.checkedItem)},susun:function(t){var a=t,e=["id","head_nama","head_uid","bagian","singkatan_unit","nama_unit"],s=[],i={};return a.forEach((function(t,n){e.forEach((function(t){i[t]=a[n][t]})),s.push(i),i={}})),s},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),this.$store.state.print2=this.susun(this.$store.state.print2),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString()));this.$store.state.print2=this.susun(this.td),alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:d})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:d,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,e=this.datanya;//! order fungsi
if(this.orderBy.length>0){var s=this.orderWith?"asc":"desc";e=this.$_.orderBy(e,[this.orderBy],[s])}//! search fungsi
var i=this.thnya;return e=e.filter((function(a,e,s){var n=!1;if(i.filter((function(e){"string"==typeof a[e]?-1!=a[e].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=a[e]&&-1!=a[e].toString().indexOf(t.search)&&(n=!0)})),n)return a})),//! cari shortcut contoh
e=e.map((function(t){var e={},s=Object.keys(t);return s=a.$_.difference(s,a.unless),s.forEach((function(i,n){s.find((function(t){return t==a.date[n]})),e[i]=t[i]})),e})),e=e.slice(this.temp1,this.temp2),e}},mounted:function(){this.refreshData()}},h=u,m=e("2877"),v=Object(m["a"])(h,s,i,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=page-admin-unit.64c263bb.js.map