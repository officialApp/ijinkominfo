(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-report_keluar"],{2350:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"font-times"},[s("div",{staticClass:"tips float-right"},[s("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[s("span",{staticClass:"typcn typcn-document-text"})]),s("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"offset-sm-2 col-sm-8"},[s("form",{attrs:{action:""},on:{submit:function(a){a.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("users/${this.$store.state.users.uid}/history-keluar")]),s("div",{staticClass:"card-body"},[s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("id_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id_",id:"id",name:"id",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("nip_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nip_",id:"nip",name:"nip",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("nama_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nama_",id:"nama",name:"nama",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("jam_berangkat_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jam_berangkat,expression:"vdata.jam_berangkat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"jam_berangkat_",id:"jam_berangkat",name:"jam_berangkat",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.jam_berangkat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jam_berangkat",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("keperluan_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keperluan,expression:"vdata.keperluan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"keperluan_",id:"keperluan",name:"keperluan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.keperluan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"keperluan",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("kendaraan_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.kendaraan,expression:"vdata.kendaraan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"kendaraan_",id:"kendaraan",name:"kendaraan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.kendaraan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"kendaraan",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("penumpang_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.penumpang,expression:"vdata.penumpang"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"penumpang_",id:"penumpang",name:"penumpang",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.penumpang},on:{input:function(a){a.target.composing||t.$set(t.vdata,"penumpang",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("lokasi_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lokasi,expression:"vdata.lokasi"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"lokasi_",id:"lokasi",name:"lokasi",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.lokasi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lokasi",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("tujuan_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tujuan,expression:"vdata.tujuan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"tujuan_",id:"tujuan",name:"tujuan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.tujuan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tujuan",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("createAt_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.createAt,expression:"vdata.createAt"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"createAt_",id:"createAt",name:"createAt",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.createAt},on:{input:function(a){a.target.composing||t.$set(t.vdata,"createAt",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("bintang_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.bintang,expression:"vdata.bintang"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"bintang_",id:"bintang",name:"bintang",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.bintang},on:{input:function(a){a.target.composing||t.$set(t.vdata,"bintang",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("pilih_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.pilih,expression:"vdata.pilih"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"pilih_",id:"pilih",name:"pilih",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.pilih},on:{input:function(a){a.target.composing||t.$set(t.vdata,"pilih",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi1_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi1,expression:"vdata.disposisi1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi1_",id:"disposisi1",name:"disposisi1",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi1",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi2_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi2,expression:"vdata.disposisi2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi2_",id:"disposisi2",name:"disposisi2",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi2",a.target.value)}}})])])]),s("tr",[s("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi3_")]),s("td",[t._v(" : ")]),s("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[s("div",{staticClass:"sm-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi3,expression:"vdata.disposisi3"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi3_",id:"disposisi3",name:"disposisi3",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi3},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi3",a.target.value)}}})])])]),s("br"),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-sm btn-outline-primary ml-2  font-times text-uppercase",attrs:{type:"submit"}},[s("span",{staticClass:"typcn typcn-edit"}),t._v(" "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove"))])])])])]),s("hr",{staticClass:"style13"}),s("div",{staticClass:"row"},[s("div",{staticClass:"offset-1 col-3"},[s("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.aksi="insert",t.clearInput()}}},[s("span",{staticClass:"typcn typcn-plus"}),t._v("Insert")])]),s("div",{staticClass:"col-3 text-center"},[s("button",{staticClass:"text-uppercase font-times btn btn-sm btn-warning",attrs:{type:"button"},on:{click:function(a){t.aksi="update"}}},[s("span",{staticClass:"typcn typcn-edit"}),t._v("Update")])]),s("div",{staticClass:"col-3 text-center"},[s("button",{staticClass:"text-uppercase font-times btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.aksi="remove"}}},[s("span",{staticClass:"typcn typcn-delete"}),t._v("Delete")])])])])]),s("hr",{staticClass:"style16"}),t.ready?s("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[s("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[s("div",{staticClass:"w-full sm:w-1/3"},[s("div",{staticClass:"input-group mb-2"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),s("div",{staticClass:"w-full sm:w-1/3"}),s("div",{staticClass:"w-full sm:w-1/3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 order-2"},[s("a",{staticClass:"btn-lg btn-success",attrs:{href:"https://akbarmaliki.github.io/infolayanansjs/#/excel?data="+JSON.stringify(t.td)}},[s("span",{staticClass:"typcn typcn-chart-bar"})])]),s("div",{staticClass:"col-3 order-3"},[s("div",{staticClass:"tips"},[s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[s("span",{staticClass:"typcn typcn-document-text"})]),s("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),s("div",{staticClass:"col-4 order-1"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?s:s[0]}}},[s("option",[t._v("10")]),s("option",[t._v("20")]),s("option",[t._v("50")]),s("option",[t._v("100")]),s("option",{domProps:{value:1e6}},[t._v("Semua")])])])])])]),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[s("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[s("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[s("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[s("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,e){return s("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:e+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(s){return t.sort(a)}}},[s("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v(" "+t._s(a)+" "),t.orderWith?[s("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[s("span",{staticClass:"typcn typcn-arrow-down"})])]:[s("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[s("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),s("tbody",t._l(t.td,(function(a,e){return s("tr",{key:e+"td"},[s("td",[t._v(t._s(e+t.temp1+1))]),s("no-ssr",t._l(t.thnya,(function(i,n){return s("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(i),expression:"!less.includes(item2)"}],key:n+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[i])},on:{tap:function(s){t.ambil(a,e),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],s("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[s("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[s("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):s("div",[s("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("span",{staticClass:"typcn typcn-zoom"})])])}],n=(s("4de4"),s("7db0"),s("4160"),s("c975"),s("d81d"),s("fb6a"),s("b64b"),s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("841c"),s("159b"),s("5530")),o=s("1bdd"),r=s("eeb9"),d=(s("bc3a"),s("8aa5")),l=s.n(d),c=s("03a0"),p=l.a.firestore(),u={layout:"admin",components:{upload:r["a"],downloadExcel:o["a"]},data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],order:["id","nip","nama","jam_berangkat","keperluan","kendaraan","penumpang","lokasi","tujuan","createAt","bintang","pilih","disposisi1","disposisi2","disposisi3","driver","mobil"],vdata:{},ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id","createAt"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){delete this.vdata.id,p.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc().set(this.vdata).then((function(t){console.log("berhasil"),alert("simpan data berhasil!")}))},update:function(){p.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc(this.pilih.id).set(this.vdata,{merge:!0}).then((function(t){alert("update data berhasil!")}))},remove:function(){confirm("Apakah yakin menghapus data?")&&p.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc(this.pilih.id).delete().then((function(t){alert("delete data berhasil!")}))},refreshData:function(){var t=this,a=this;p.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).onSnapshot((function(s){var e=[];s.forEach((function(t){e.push(Object(n["a"])({id:t.id},t.data()))})),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(s){s.style.position="relative";var e=document.createElement("div");e.innerHTML="&nbsp;",e.style.top=0,e.style.right=0,e.style.bottom=0,e.style.width="5px",e.style.position="absolute",e.style.cursor="col-resize",e.addEventListener("mousedown",(function(e){t=s,a=s.offsetWidth-e.pageX})),s.appendChild(e)})),document.addEventListener("mousemove",(function(s){t&&(t.style.width=a+s.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})();var s=[],i={};e.forEach((function(t,n){a.order.forEach((function(t){i[t]="driver"==t?e[n][t].nama:"mobil"==t?e[n][t].nama_mobil:e[n][t]})),s.push(i),i={}})),t.datanya=s;var n=t.order;n=t.$_.difference(n,t.unless),t.thnya=n}),1e3)}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var s=this.$_.clone(t);console.log(s),this.vdata=s,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},
//!==================
//! hapus dari sini
//! =================
checkedAll:function(){console.log(this.checkedItem)},susun:function(t){var a=t,s=["id","nip","nama","jam_berangkat","keperluan","kendaraan","penumpang","lokasi","tujuan","createAt","bintang","pilih","disposisi1","disposisi2","disposisi3"],e=[],i={};return a.forEach((function(t,n){s.forEach((function(t){i[t]=a[n][t]})),e.push(i),i={}})),e},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),this.$store.state.print2=this.susun(this.$store.state.print2),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString()));this.$store.state.print2=this.susun(this.td),alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:c})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:c,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,s=this.datanya;//! order fungsi
if(this.orderBy.length>0){var e=this.orderWith?"asc":"desc";s=this.$_.orderBy(s,[this.orderBy],[e])}//! search fungsi
var i=this.thnya;return s=s.filter((function(a,s,e){var n=!1;if(i.filter((function(s){"string"==typeof a[s]?-1!=a[s].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=a[s]&&-1!=a[s].toString().indexOf(t.search)&&(n=!0)})),n)return a})),//! cari shortcut contoh
s=s.map((function(t){var s={},e=Object.keys(t);return e=a.$_.difference(e,a.unless),e.forEach((function(i,n){e.find((function(t){return t==a.date[n]})),s[i]=t[i]})),s})),s=s.slice(this.temp1,this.temp2),s}},mounted:function(){this.refreshData()}},m=u,v=s("2877"),h=Object(v["a"])(m,e,i,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=page-admin-report_keluar.2bc95ac0.js.map