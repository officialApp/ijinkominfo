(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-pertama"],{d81d:function(t,a,e){"use strict";var s=e("23e7"),n=e("b727").map,i=e("1dde"),o=e("ae40"),r=i("map"),l=o("map");s({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e7af:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-danger  ",staticStyle:{position:"absolute",right:"10px",top:"20px"},attrs:{type:"button"},on:{click:function(a){return t.$store.dispatch("logout")}}},[e("span",{staticClass:"typcn typcn-delete"})]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"}})]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("Setting Profile :")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-business-card text-lg"}),t._v(" "),e("label",{attrs:{for:"nip"}},[t._v("nip")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control",attrs:{type:"text",id:"nip",name:"nip",required:""},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-user-add text-lg"}),t._v(" "),e("label",{attrs:{for:"nama"}},[t._v("Nama")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama",name:"nama",required:""},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-group text-lg"}),t._v(" "),e("label",{attrs:{for:"unit"}},[t._v("Unit")]),e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.unit_kerja,expression:"vdata.unit_kerja"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"unit_kerja",name:"unit_kerja",placeholder:"unit_kerja"},domProps:{value:t.vdata.unit_kerja},on:{input:function(a){a.target.composing||t.$set(t.vdata,"unit_kerja",a.target.value)}}})])]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-phone text-lg"}),t._v(" "),e("label",{attrs:{for:"nohp"}},[t._v("NO WA (optional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nohp,expression:"vdata.nohp"}],staticClass:"form-control",attrs:{type:"text",id:"nohp",name:"nohp"},domProps:{value:t.vdata.nohp},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nohp",a.target.value)}}})]),e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-image text-lg"}),t._v(" "),e("label",{attrs:{for:"gambar"}},[t._v("Gambar (optional)")]),e("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.previewImage}})]),t.email?e("div",{staticClass:"md-form form-sm"},[e("span",{staticClass:"typcn typcn-mail text-lg"}),t._v(" "),e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.emailnotif,expression:"vdata.emailnotif"}],staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",required:""},domProps:{value:t.vdata.emailnotif},on:{input:function(a){a.target.composing||t.$set(t.vdata,"emailnotif",a.target.value)}}})]):t._e(),e("br"),e("p",{staticClass:"text-red text-sm font-bold"},[t._v("Untuk atasan pada user ini minta set ke Admin !")]),t.vdata.nama.length>0?e("button",{staticClass:"btn btn-sm btn-style9 float-right ",attrs:{type:"button"},on:{click:function(a){return t.next()}}},[t._v("Next "),e("span",{staticClass:"typcn typcn-arrow-right"})]):t._e()])]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,224L30,213.3C60,203,120,181,180,170.7C240,160,300,160,360,170.7C420,181,480,203,540,181.3C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,96C1140,107,1200,181,1260,213.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"}})])])},n=[],i=(e("d81d"),e("b0c0"),e("5530")),o=e("bc3a"),r=e.n(o),l=e("8aa5"),u=e.n(l),m=u.a.firestore(),p={data:function(){return{vdata:{nama:"",unit:"",nohp:"-",gambar:""},units:[],imageData:null,units2:[],email:!1,picture:null,uploadValue:0}},beforeMount:function(){"true"==this.$store.state.users.pertama&&this.$router.push("/lembur")},methods:{next:function(){var t=this;console.log(this.vdata),m.collection("users").doc(this.$store.state.users.uid).set(Object(i["a"])(Object(i["a"])({},this.vdata),{},{pertama:"true"}),{merge:!0}).then((function(a){t.$router.push("/kedua")}))},previewImage:function(t){var a=this,e=t.target.files[0],s=[];this.$daycaca.compress(e,.5,(function(t){a.$urltofile(t,e.name,e.type).then((function(t){s.push(t),a.$nuxt.$emit("busy",!0),setTimeout((function(){a.$nuxt.$emit("busy",!1);var t=new FormData;t.append("file",s[0]),confirm("Apakah yakin proses upload photo ?")&&r.a.post("https://akbarmaliki.website/upload.php",t,{headers:{"content-type":"multipart/form-data"}}).then((function(t){a.$forceUpdate(),console.log(t.data),a.$store.state.users.gambar="https://akbarmaliki.website"+t.data,a.vdata.gambar="https://akbarmaliki.website"+t.data,m.collection("users").doc(a.$store.state.users.uid).set({gambar:"https://akbarmaliki.website"+t.data},{merge:!0}).then((function(t){alert("Berhasil di upload ! klik simpan untuk menyimpan gambar")}))}))}),2e3)}))}))},onUpload:function(){var t=this;this.picture=null;var a=u.a.storage().ref("".concat(this.imageData.name)).put(this.imageData);a.on("state_changed",(function(a){t.uploadValue=a.bytesTransferred/a.totalBytes*100}),(function(t){console.log(t.message)}),(function(){t.uploadValue=100,a.snapshot.ref.getDownloadURL().then((function(a){t.picture=a,console.log("url",a),t.vdata.gambar=a}))}))}},mounted:function(){var t=this;m.collection("users").where("bagian","==","deputy").get().then((function(a){var e=a.docs.map((function(t){return Object(i["a"])({uid:t.id},t.data())}));t.units2=e})),this.vdata.nip=this.$store.state.users.nip,this.vdata.nama=this.$store.state.users.nama,this.vdata.unit=this.$store.state.users.unit,this.vdata.emails=!!this.$store.state.users.emails,this.email=this.$store.state.users.emails,this.vdata.emailnotif=this.$store.state.users.emailnotif?this.$store.state.users.emailnotif:"-",this.vdata.nohp=this.$store.state.users.nohp?this.$store.state.users.nohp:"-",this.vdata.gambar=this.$store.state.users.gambar?this.$store.state.users.gambar:"-",this.$forceUpdate(),m.collection("unit").get().then((function(a){var e=a.docs.map((function(t){return Object(i["a"])({id:t.id},t.data())}));e=_.orderBy(e,["nama_unit"],["asc"]),t.units=e,console.log(t.units)}))}},c=p,d=e("2877"),v=Object(d["a"])(c,s,n,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=page-pertama.3a9d73cc.js.map