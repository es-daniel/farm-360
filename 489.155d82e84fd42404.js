"use strict";(self.webpackChunkfarm_360=self.webpackChunkfarm_360||[]).push([[489],{5489:(u,f,r)=>{r.r(f),r.d(f,{EditFarmComponent:()=>g});var a=r(5879),o=r(6814),l=r(3861),p=r(7920),c=r(9882),_=r(5940);function d(n,e){if(1&n){const m=a.EpF();a.TgZ(0,"app-farm-form",2),a.NdJ("submitFarm",function(s){a.CHM(m);const i=a.oxw();return a.KtG(i.saveFarmChanges(s))}),a.qZA()}2&n&&a.Q6J("farm",e.ngIf)}function E(n,e){1&n&&a._UZ(0,"mat-spinner",3)}let g=(()=>{var n;class e{constructor(){this.route=(0,a.f3M)(p.gz),this.farmsService=(0,a.f3M)(c.i)}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");t&&(this.farm$=this.farmsService.getFarm(t))}saveFarmChanges(t){console.log("Save Farm: ",t)}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-edit-farm"]],standalone:!0,features:[a.jDz],decls:4,vars:4,consts:[["formTitle","Editar Finca",3,"farm","submitFarm",4,"ngIf","ngIfElse"],["loading",""],["formTitle","Editar Finca",3,"farm","submitFarm"],["diameter","100",1,"loading-farm-spinner"]],template:function(t,s){if(1&t&&(a.YNc(0,d,1,1,"app-farm-form",0),a.ALo(1,"async"),a.YNc(2,E,1,0,"ng-template",null,1,a.W1O)),2&t){const i=a.MAs(3);a.Q6J("ngIf",a.lcZ(1,2,s.farm$))("ngIfElse",i)}},dependencies:[o.ez,o.O5,o.Ov,l.G,_.Cq,_.Ou],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.loading-farm-spinner[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}@media (min-width: 960px){.loading-farm-spinner[_ngcontent-%COMP%]{transform:translate(calc(-50% + 6.25rem),-50%)}}"]}),e})()}}]);