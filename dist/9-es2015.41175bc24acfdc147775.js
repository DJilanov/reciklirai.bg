(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EWb5:function(n,t,e){"use strict";e.r(t),e.d(t,"ContactsModule",(function(){return v}));var o=e("ofXK"),a=e("tyNb"),i=e("3Pt+"),s=e("sYmb"),c=e("mrSG"),r=e("fXoL"),g=e("PSD3"),l=e.n(g),C=e("mliB"),m=e("DS3a"),b=e("1svl");const _=["MAP"];function O(n,t){if(1&n&&(r.Pb(0,"li",40),r.Pb(1,"a",41),r.qc(2),r.bc(3,"uppercase"),r.Ob(),r.Ob()),2&n){const n=t.$implicit,e=t.index;r.zb(1),r.Cb("active",0==e),r.dc("href",n.link,r.kc),r.Ab("aria-controls",n.control),r.zb(1),r.rc(r.cc(3,5,n.label))}}function p(n,t){if(1&n&&(r.Pb(0,"section",42),r.Lb(1,"img",43),r.Pb(2,"h3",44),r.qc(3),r.bc(4,"titlecase"),r.Ob(),r.Ob()),2&n){const n=r.ac();r.zb(3),r.rc(r.cc(4,1,n.importantMessage))}}function d(n,t){if(1&n&&(r.Pb(0,"aside"),r.Lb(1,"img",45),r.qc(2),r.Ob()),2&n){const n=t.$implicit;r.Bb(n.class),r.zb(1),r.dc("src",n.icon,r.kc),r.zb(1),r.sc("",n.label," ")}}function P(n,t){if(1&n&&(r.Pb(0,"aside"),r.qc(1),r.Ob()),2&n){const n=t.$implicit;r.Bb(n.class),r.zb(1),r.tc("",n.start," \u2014 ",n.end," ")}}function f(n,t){if(1&n&&(r.Pb(0,"div",46),r.Pb(1,"a",47),r.Lb(2,"img",48),r.qc(3),r.Ob(),r.Ob()),2&n){const n=t.$implicit;r.zb(1),r.dc("href","tel: contact",r.kc),r.zb(2),r.sc("",n," ")}}function M(n,t){1&n&&(r.Pb(0,"span",49),r.qc(1),r.bc(2,"translate"),r.Ob()),2&n&&(r.zb(1),r.rc(r.cc(2,1,"global:required-field")))}function h(n,t){1&n&&(r.Pb(0,"span",49),r.qc(1),r.bc(2,"translate"),r.Ob()),2&n&&(r.zb(1),r.rc(r.cc(2,1,"global:required-field")))}function u(n,t){1&n&&(r.Pb(0,"span",50),r.qc(1),r.bc(2,"translate"),r.Ob()),2&n&&(r.zb(1),r.rc(r.cc(2,1,"global:required-field")))}function x(n,t){if(1&n&&(r.Pb(0,"article",51),r.Lb(1,"img",9),r.Ob()),2&n){const n=t.$implicit;r.Cb("active",0==t.index),r.zb(1),r.dc("src",n.image,r.kc)}}function w(n,t){if(1&n&&(r.Pb(0,"a",52),r.Lb(1,"img",45),r.Ob()),2&n){const n=t.$implicit;r.Bb(n.class),r.Ab("data-slide",n.slide),r.zb(1),r.dc("src",n.icon,r.kc)}}function I(n,t){if(1&n&&r.Lb(0,"li",53),2&n){const n=t.index;r.Cb("active",0==n),r.Ab("data-slide-to",n)}}const y=[{path:"",component:(()=>{class n{constructor(n,t,e,a){this.messageService=t,this.translate=e,this.metaService=a,this.isImportant=!1,this.latitude=42.710767,this.longitude=23.377591,this.title="",this.importantMessage="this section is reserved for iportant information, such as : address change, working time change, etc.. the available space is 700px or 250 characters.",this.mapOptions={center:null,zoom:15},this.isBrowser=!1,this.arrows=[{slide:"prev",class:"Carousel-Control-Previous carousel-control-prev",icon:"./assets/images/HomeComponent/Previous.svg"},{slide:"next",class:"Carousel-Control-Next carousel-control-next",icon:"./assets/images/HomeComponent/Next.svg"}],this.contacts=["+359 888 28-37-11","+359 888 61-34-00"],this.openSchedule=[{class:"Working-Days-Week",start:"Monday",end:"Friday"},{class:"Working-Time-Week",start:"10:00",end:"18:00"},{class:"Working-Days-Weekend",start:"Saturday",end:"Sunday"},{class:"Working-Time-Weekend",start:"10:00",end:"16:00"}],this.slides=[{image:"./assets/images/ContactsComponent/Shop View 1.jpg"},{image:"./assets/images/ContactsComponent/Shop View 2.jpg"},{image:"./assets/images/ContactsComponent/Shop View 1.jpg"},{image:"./assets/images/ContactsComponent/Shop View 2.jpg"}],this.storeLocation=[{class:"Address",icon:"./assets/images/ContactsComponent/Store Location.svg",label:"\u0422\u044a\u0440\u0433\u043e\u0432\u0441\u043a\u0438 \u0426\u0435\u043d\u0442\u044a\u0440 \u041b\u0435\u0432\u0441\u043a\u0438 \u0413, \u0443\u043b. \u041c\u043e\u0433\u0438\u043b\u0438\u0442\u0435, \u0431\u043b. 2, \u0442\u044f\u043b\u043e \u0412."},{class:"City",icon:"./assets/images/ContactsComponent/Store City.svg",label:"1836 \u0421\u043e\u0444\u0438\u044f, \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"}],this.tabs=[{control:"INFORMATION",link:"#INFORMATION",label:""},{control:"MESSAGE",link:"#MESSAGE",label:""},{control:"MAP",link:"#MAP",label:""},{control:"SHOP-VIEW",link:"#SHOP-VIEW",label:""}],this.profilePicture="./assets/images/ContactsComponent/Profile Picture.png",this.translate.onLangChange().subscribe(()=>{this.translateLabels()}),this.translateLabels(),this.form=new i.e({name:new i.c("",[i.m.required]),email:new i.c("",[i.m.required,i.m.email]),phone:new i.c("",[i.m.required]),message:new i.c("")}),Object(o.s)(n)&&(this.isBrowser=!0),a.setMeta({title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 - \u0412\u0441\u0438\u0447\u043a\u043e \u0437\u0430 \u0432\u0430\u0448\u0438\u044f \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440 \u043d\u0430 \u043d\u0430\u0439-\u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u0438 \u0446\u0435\u043d\u0438!","twitter:title":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 - \u0412\u0441\u0438\u0447\u043a\u043e \u0437\u0430 \u0432\u0430\u0448\u0438\u044f \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440 \u043d\u0430 \u043d\u0430\u0439-\u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u0438 \u0446\u0435\u043d\u0438!","og:title":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 - \u0412\u0441\u0438\u0447\u043a\u043e \u0437\u0430 \u0432\u0430\u0448\u0438\u044f \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440 \u043d\u0430 \u043d\u0430\u0439-\u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u0438 \u0446\u0435\u043d\u0438!"})}translateLabels(){return Object(c.a)(this,void 0,void 0,(function*(){this.title=yield this.translate.getTranslation("global:contacts"),this.tabs[0].label=yield this.translate.getTranslation("global:information"),this.tabs[1].label=yield this.translate.getTranslation("global:message"),this.tabs[2].label=yield this.translate.getTranslation("global:map"),this.tabs[3].label=yield this.translate.getTranslation("global:shop-view")}))}ngAfterViewInit(){this.isBrowser&&this.mapInitializer()}mapInitializer(){google&&(this.coordinates=new google.maps.LatLng(this.latitude,this.longitude),this.mapOptions.center=this.coordinates,this.map=new google.maps.Map(this.googleMap.nativeElement,this.mapOptions),this.marker=new google.maps.Marker({position:this.coordinates,clickable:!0,map:this.map}),this.marker.setMap(this.map))}sendMessage(){return Object(c.a)(this,void 0,void 0,(function*(){if((yield this.messageService.post(this.form.value))._id){let n=yield this.translate.getTranslation("global:message-success");l.a.fire("",n,"success"),this.form.reset()}else{let n=yield this.translate.getTranslation("global:message-failed");l.a.fire("",n,"error")}}))}}return n.\u0275fac=function(t){return new(t||n)(r.Kb(r.B),r.Kb(C.a),r.Kb(m.a),r.Kb(b.a))},n.\u0275cmp=r.Eb({type:n,selectors:[["Contacts"]],viewQuery:function(n,t){var e;1&n&&r.wc(_,!0),2&n&&r.hc(e=r.Yb())&&(t.googleMap=e.first)},decls:70,vars:35,consts:[[1,"Contacts__Tabs","nav","nav-pills"],["class","nav-item",4,"ngFor","ngForOf"],[1,"Contacts__Tabs-Content","tab-content"],["class","Important-Information",4,"ngIf"],["id","INFORMATION",1,"Information-Container","tab-pane","fade","show","active"],[1,"Information-Container__Contacts"],[3,"class",4,"ngFor","ngForOf"],[1,"Owner-Details"],[1,"Owner-Details__Image"],["alt","Error Loading Image","draggable","false",3,"src"],[1,"Owner-Details__Name"],[1,"Owner-Details__Title"],["class","Owner-Details__Contacts",4,"ngFor","ngForOf"],["id","MESSAGE",1,"tab-pane","fade"],["MESSAGE",""],[1,"Contacts-Form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col","no-margin"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fas","fa-signature"],["formControlName","name","type","text",1,"Name_&_Surname","form-control",3,"placeholder"],["class","Error-Name_&_Surname form-text",4,"ngIf"],[1,"col"],["formControlName","email","type","email",1,"Name_&_Surname","form-control",3,"placeholder"],["formControlName","phone","type","tel",1,"Email","form-control",3,"placeholder"],["class","Error-Surname form-text",4,"ngIf"],[1,"margin-top-small"],["formControlName","message","form","Order-Form","rows","5","maxlength","250",3,"placeholder"],["type","submit",1,"btn","btn-success","double-width","margin-top-big"],["id","MAP",1,"Google-Maps-Container","tab-pane","fade"],["MAP",""],["id","SHOP-VIEW",1,"tab-pane","fade"],["data-ride","carousel","id","CAROUSEL",1,"Carousel","carousel","slide","carousel-fade"],[1,"carousel-inner"],["class","carousel-item",3,"active",4,"ngFor","ngForOf"],["href","#CAROUSEL",3,"class",4,"ngFor","ngForOf"],[1,"Carousel-Indicators","carousel-indicators"],["data-target","#CAROUSEL",3,"active",4,"ngFor","ngForOf"],[1,"nav-item"],["data-toggle","pill",1,"btn","btn-outline-dark","nav-link",3,"href"],[1,"Important-Information"],["src","./assets/images/ContactsComponent/Important.svg","alt","Error Loading Icon","draggable","false"],[1,"Important-Message"],["alt","Error Loading Icon","draggable","false",3,"src"],[1,"Owner-Details__Contacts"],[3,"href"],["src","./assets/images/ContactsComponent/Phone.svg","alt","Error Loading Icon","draggable","false"],[1,"Error-Name_&_Surname","form-text"],[1,"Error-Surname","form-text"],[1,"carousel-item"],["href","#CAROUSEL"],["data-target","#CAROUSEL"]],template:function(n,t){1&n&&(r.Pb(0,"h3"),r.qc(1),r.Ob(),r.Lb(2,"hr"),r.Pb(3,"main"),r.Pb(4,"ul",0),r.oc(5,O,4,7,"li",1),r.Ob(),r.Pb(6,"article",2),r.oc(7,p,5,3,"section",3),r.Pb(8,"section",4),r.Pb(9,"div",5),r.oc(10,d,3,4,"aside",6),r.oc(11,P,2,4,"aside",6),r.Pb(12,"aside",7),r.Pb(13,"div",8),r.Lb(14,"img",9),r.Ob(),r.Pb(15,"h3",10),r.qc(16,"Antonio Jilanov"),r.Ob(),r.Pb(17,"h5",11),r.qc(18,"Owner"),r.Ob(),r.oc(19,f,4,2,"div",12),r.Ob(),r.Ob(),r.Ob(),r.Pb(20,"section",13,14),r.Pb(22,"div",5),r.Pb(23,"form",15),r.Xb("ngSubmit",(function(){return t.sendMessage()})),r.Pb(24,"h4"),r.qc(25),r.bc(26,"translate"),r.Ob(),r.Pb(27,"section",16),r.Pb(28,"aside",17),r.Pb(29,"div",18),r.Pb(30,"div",19),r.Pb(31,"span",20),r.Lb(32,"i",21),r.Ob(),r.Ob(),r.Lb(33,"input",22),r.bc(34,"translate"),r.Ob(),r.oc(35,M,3,3,"span",23),r.Ob(),r.Ob(),r.Pb(36,"section",16),r.Pb(37,"aside",24),r.Pb(38,"div",18),r.Pb(39,"div",19),r.Pb(40,"span",20),r.Lb(41,"i",21),r.Ob(),r.Ob(),r.Lb(42,"input",25),r.bc(43,"translate"),r.Ob(),r.oc(44,h,3,3,"span",23),r.Ob(),r.Pb(45,"aside",24),r.Pb(46,"div",18),r.Pb(47,"div",19),r.Pb(48,"span",20),r.Lb(49,"i",21),r.Ob(),r.Ob(),r.Lb(50,"input",26),r.bc(51,"translate"),r.Ob(),r.oc(52,u,3,3,"span",27),r.Ob(),r.Ob(),r.Pb(53,"h4",28),r.qc(54),r.bc(55,"translate"),r.Ob(),r.Lb(56,"textarea",29),r.bc(57,"translate"),r.Pb(58,"button",30),r.qc(59),r.bc(60,"translate"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Lb(61,"section",31,32),r.Pb(63,"section",33),r.Pb(64,"aside",34),r.Pb(65,"div",35),r.oc(66,x,2,3,"article",36),r.Ob(),r.oc(67,w,2,4,"a",37),r.Pb(68,"ul",38),r.oc(69,I,1,3,"li",39),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&n&&(r.zb(1),r.rc(t.title),r.zb(4),r.dc("ngForOf",t.tabs),r.zb(2),r.dc("ngIf",t.isImportant),r.zb(3),r.dc("ngForOf",t.storeLocation),r.zb(1),r.dc("ngForOf",t.openSchedule),r.zb(3),r.dc("src",t.profilePicture,r.kc),r.zb(5),r.dc("ngForOf",t.contacts),r.zb(4),r.dc("formGroup",t.form),r.zb(2),r.rc(r.cc(26,21,"global:delivery-info")),r.zb(8),r.ec("placeholder",r.cc(34,23,"global:name-surname")),r.zb(2),r.dc("ngIf",t.form.get("name").invalid&&(t.form.get("name").dirty||t.form.get("name").touched)),r.zb(7),r.ec("placeholder",r.cc(43,25,"global:email")),r.zb(2),r.dc("ngIf",t.form.get("email").invalid&&(t.form.get("email").dirty||t.form.get("email").touched)),r.zb(6),r.ec("placeholder",r.cc(51,27,"global:phone")),r.zb(2),r.dc("ngIf",t.form.get("phone").invalid&&(t.form.get("phone").dirty||t.form.get("phone").touched)),r.zb(2),r.rc(r.cc(55,29,"global:message")),r.zb(2),r.ec("placeholder",r.cc(57,31,"global:message")),r.zb(3),r.rc(r.cc(60,33,"global:send-message")),r.zb(7),r.dc("ngForOf",t.slides),r.zb(1),r.dc("ngForOf",t.arrows),r.zb(2),r.dc("ngForOf",t.slides))},directives:[o.i,o.j,i.n,i.j,i.f,i.a,i.i,i.d,i.h],pipes:[s.c,o.q,o.p],styles:['@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");.Form-Control[_ngcontent-%COMP%]:focus{border-color:#12c2e9;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(18,194,233,.5)}.Form-Control-Invalid[_ngcontent-%COMP%]{border-color:#f64f59;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(246,79,89,.5)}h3[_ngcontent-%COMP%]{margin-bottom:25px;text-align:center;font-size:24px}hr[_ngcontent-%COMP%]{width:75%;max-width:700px;margin-bottom:50px;background-color:hsla(0,0%,84.3%,.25)}main[_ngcontent-%COMP%]{margin:0 auto 50px}main[_ngcontent-%COMP%]   .Contacts__Tabs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:row wrap;margin-bottom:25px}@supports (-ms-ime-align:auto){main[_ngcontent-%COMP%]   .Contacts__Tabs[_ngcontent-%COMP%]{justify-content:space-between;padding-left:60px;padding-right:60px;padding-left:20%;padding-right:20%}}main[_ngcontent-%COMP%]   .Contacts__Tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:150px;margin:0 12.5px 25px;text-align:center}main[_ngcontent-%COMP%]   .Contacts__Tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:70px;display:flex;justify-content:center;align-items:center}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Important-Information[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:row wrap;width:75%;max-width:700px;margin:0 auto 50px}@supports (-ms-ime-align:auto){main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Important-Information[_ngcontent-%COMP%]{justify-content:space-between;padding-left:60px;padding-right:60px}}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Important-Information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:64px;height:auto;margin-bottom:25px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Important-Information[_ngcontent-%COMP%]   .Important-Message[_ngcontent-%COMP%]{text-align:justify;font-size:16px;color:#f64f59}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]{text-align:center}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Address[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .City[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:row wrap;margin-bottom:25px}@supports (-ms-ime-align:auto){main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Address[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .City[_ngcontent-%COMP%]{justify-content:space-between;padding-left:60px;padding-right:60px;justify-content:center}}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Address[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .City[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:22px;height:auto;margin-right:12.5px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Working-Time-Week[_ngcontent-%COMP%]{margin-bottom:25px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Working-Time-Weekend[_ngcontent-%COMP%]{margin-bottom:50px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details[_ngcontent-%COMP%]{margin:0 auto;text-align:center}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Image[_ngcontent-%COMP%]{width:192px;margin:0 auto 12.5px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;border-radius:6.25px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Name[_ngcontent-%COMP%]{margin-bottom:12.5px;font-size:16px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Title[_ngcontent-%COMP%]{margin-bottom:25px;font-size:16px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Contacts[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:row wrap}@supports (-ms-ime-align:auto){main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Contacts[_ngcontent-%COMP%]{justify-content:space-between;padding-left:60px;padding-right:60px;justify-content:center}}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Contacts[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:12.5px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Information-Container__Contacts[_ngcontent-%COMP%]   .Owner-Details__Contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:"inline";width:22px;height:auto;margin-right:12.5px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Google-Maps-Container[_ngcontent-%COMP%]{height:50vh;margin:0 auto;border-radius:6.25px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]{width:50%;margin:0 auto}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;border-radius:12.5px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]   .Carousel-Control-Next[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]   .Carousel-Control-Previous[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:48px;height:auto}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:25px}main[_ngcontent-%COMP%]   .Contacts__Tabs-Content[_ngcontent-%COMP%]   .Carousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:12.5px;height:12.5px;margin:0 3.125px;border-radius:100%}.Contacts-Form[_ngcontent-%COMP%]{width:75%;max-width:700px;margin:0 auto 100px}.Contacts-Form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:25px;text-align:center;font-size:18px}.Contacts-Form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin-bottom:12.5px}.Contacts-Form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:last-of-type{margin-bottom:50px}.Contacts-Form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   [class^=Error-][_ngcontent-%COMP%]{margin-top:12.5px;color:#f64f59}.Contacts-Form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:16px}.Contacts-Form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:block;width:75%;max-width:700px;margin:0 auto;padding:12.5px;border-radius:12.5px;resize:none;background-color:transparent}.Contacts-Form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none}@media only screen and (max-width:900px){.col[_ngcontent-%COMP%]{flex:0 0 100%}.col[_ngcontent-%COMP%]:first-child{margin-bottom:15px}.col.no-margin[_ngcontent-%COMP%]{margin-bottom:0}}']}),n})()}];let v=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(t){return new(t||n)},imports:[[o.b,i.g,i.l,s.b,a.f.forChild(y)]]}),n})()}}]);