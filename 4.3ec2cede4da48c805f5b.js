(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cRhG:function(n,e,t){"use strict";t.r(e),t.d(e,"ProfileModule",(function(){return x}));var i=t("ofXK"),r=t("tyNb"),o=t("fXoL");let c=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Db({type:n,selectors:[["app-profile"]],decls:8,vars:0,consts:[[1,"list-group","list-group-horizontal"],["routerLink","character",1,"list-group-item"],["routerLink","gifts",1,"list-group-item"],["routerLink","ranking",1,"list-group-item"]],template:function(n,e){1&n&&(o.Mb(0,"ul",0),o.Mb(1,"li",1),o.lc(2,"Personagem"),o.Lb(),o.Mb(3,"li",2),o.lc(4,"Presentes"),o.Lb(),o.Mb(5,"li",3),o.lc(6,"Ranking"),o.Lb(),o.Lb(),o.Kb(7,"router-outlet"))},directives:[r.b,r.e],styles:[".list-group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:10px;cursor:pointer}.list-group-item[_ngcontent-%COMP%]{position:unset}"]}),n})();var s=t("XNiG"),l=t("6rCG");function a(n,e){if(1&n&&(o.Mb(0,"div",3),o.Kb(1,"img",4),o.Mb(2,"header",5),o.Mb(3,"p"),o.lc(4,"Nome: "),o.Mb(5,"span",6),o.lc(6),o.Lb(),o.Lb(),o.Mb(7,"p"),o.lc(8,"Level: "),o.Mb(9,"span",6),o.lc(10),o.Lb(),o.Lb(),o.Mb(11,"p"),o.lc(12,"N\xedvel de conhecimento: "),o.Mb(13,"span",6),o.lc(14),o.Lb(),o.Lb(),o.Mb(15,"p"),o.lc(16,"N\xedvel de popularidade: "),o.Mb(17,"span",6),o.lc(18),o.Lb(),o.Lb(),o.Mb(19,"p"),o.lc(20,"Energia atual:"),o.Mb(21,"span",6),o.lc(22),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&n){const n=o.Vb();o.xb(6),o.nc(" ",null==n.profile?null:n.profile.name," "),o.xb(4),o.nc(" ",null==n.profile?null:n.profile.level," "),o.xb(4),o.nc(" ",null==n.profile?null:n.profile.knowledge," "),o.xb(4),o.nc(" ",null==n.profile?null:n.profile.popularity," "),o.xb(4),o.nc(" ",null==n.profile?null:n.profile.energy," ")}}function b(n,e){1&n&&(o.Mb(0,"div"),o.lc(1," Erro ao carregar informa\xe7\xf5es, tente novamente! "),o.Lb())}function p(n,e){1&n&&(o.Mb(0,"span"),o.lc(1,"Loading stuff..."),o.Lb())}function u(n,e){if(1&n&&(o.jc(0,b,2,0,"div",7),o.Wb(1,"async"),o.jc(2,p,2,0,"ng-template",null,8,o.kc)),2&n){const n=o.Vb();o.ac("ngIf",o.Xb(1,1,n.error$))}}let f=(()=>{class n{constructor(n){this.service=n,this.error$=new s.a}ngOnInit(){this.service.getCharInfo(),this.sub=this.service.getAsObservable().subscribe(n=>{this.profile=n})}ngOnDestroy(){this.sub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(o.Jb(l.a))},n.\u0275cmp=o.Db({type:n,selectors:[["app-character"]],decls:4,vars:2,consts:[[1,"d-flex","justify-content-center"],["class","shadow p-3 mb-5 bg-white rounded d-flex flex-column\n  flex-md-row flex-sm-column\n  align-items-center",4,"ngIf","ngIfElse"],["loadingError",""],[1,"shadow","p-3","mb-5","bg-white","rounded","d-flex","flex-column","flex-md-row","flex-sm-column","align-items-center"],["src","assets/char.jpg","alt","Foto do seu Personagem"],[1,"d-flex","flex-column","align-items-center"],[1,"text-primary"],[4,"ngIfLoading","ngIf"],["loading",""]],template:function(n,e){if(1&n&&(o.Mb(0,"section",0),o.jc(1,a,23,5,"div",1),o.Lb(),o.jc(2,u,4,3,"ng-template",null,2,o.kc)),2&n){const n=o.dc(3);o.xb(1),o.ac("ngIf",e.profile)("ngIfElse",n)}},directives:[i.k],pipes:[i.b],styles:["img[_ngcontent-%COMP%]{width:100%}header[_ngcontent-%COMP%]{text-align:center}"]}),n})();var g=t("wHSu"),d=t("6NWb");function m(n,e){if(1&n&&(o.Mb(0,"a",3),o.lc(1),o.Lb()),2&n){const n=e.$implicit;o.xb(1),o.oc(" Nome: ",n.name," | Level: ",n.level," ")}}const h=[{path:"",component:c,children:[{path:"character",component:f},{path:"gifts",component:(()=>{class n{constructor(){this.faGift=g.e}ngOnInit(){this.giftNumber=Math.floor(100*Math.random()+0)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Db({type:n,selectors:[["app-gifts"]],decls:11,vars:3,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"text-danger","d-flex","flex-column","align-items-center"],[3,"icon"],[1,"card-back"]],template:function(n,e){1&n&&(o.Mb(0,"section",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Mb(3,"span",3),o.lc(4," Clique para Abrir "),o.Kb(5,"fa-icon",4),o.Lb(),o.Lb(),o.Mb(6,"div",5),o.Mb(7,"span",3),o.lc(8),o.Kb(9,"fa-icon",4),o.lc(10," Quem sabe na pr\xf3xima vers\xe3o. "),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&n&&(o.xb(5),o.ac("icon",e.faGift),o.xb(3),o.nc(" Voc\xe2 ganhou o presente n\xfamero: ",e.giftNumber," "),o.xb(1),o.ac("icon",e.faGift))},directives:[d.a],styles:["section[_ngcontent-%COMP%]{margin-top:10%}.ng-fa-icon[_ngcontent-%COMP%]{font-size:90px}.card[_ngcontent-%COMP%]{width:200px;height:200px;text-align:center;transition:transform .6s;transform-style:preserve-3d;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.card-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}.card-back[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{background-color:#fff;background-clip:initial;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.card[_ngcontent-%COMP%]:hover{transform:rotateY(180deg)}"]}),n})()},{path:"ranking",component:(()=>{class n{constructor(n){this.service=n}ngOnInit(){this.service.getRanking().subscribe(n=>this.ranking=n)}}return n.\u0275fac=function(e){return new(e||n)(o.Jb(l.a))},n.\u0275cmp=o.Db({type:n,selectors:[["app-ranking"]],decls:4,vars:1,consts:[[1,"list-group"],[1,"list-group-item","list-group-item-action","active"],["class","list-group-item list-group-item-action",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"]],template:function(n,e){1&n&&(o.Mb(0,"div",0),o.Mb(1,"a",1),o.lc(2," Ranking "),o.Lb(),o.jc(3,m,2,2,"a",2),o.Lb()),2&n&&(o.xb(3),o.ac("ngForOf",e.ranking))},directives:[i.j],styles:[".list-group-item[_ngcontent-%COMP%]{position:unset}"]}),n})()}]}];let M=(()=>{class n{}return n.\u0275mod=o.Hb({type:n}),n.\u0275inj=o.Gb({factory:function(e){return new(e||n)},imports:[[r.d.forChild(h)],r.d]}),n})();var v=t("PCNd");let x=(()=>{class n{}return n.\u0275mod=o.Hb({type:n}),n.\u0275inj=o.Gb({factory:function(e){return new(e||n)},providers:[],imports:[[i.c,v.a,d.b,M]]}),n})()}}]);