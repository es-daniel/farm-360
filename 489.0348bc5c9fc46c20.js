"use strict";(self.webpackChunkfarm_360=self.webpackChunkfarm_360||[]).push([[489],{5489:(C,i,n)=>{n.r(i),n.d(i,{EditFarmComponent:()=>M});var p=n(5861),a=n(5879),s=n(6814),d=n(3861),f=n(3403),E=n(9882),l=n(5940),c=n(2939);function u(r,_){if(1&r){const m=a.EpF();a.TgZ(0,"app-farm-form",2),a.NdJ("submitFarm",function(e){a.CHM(m);const o=a.oxw();return a.KtG(o.saveFarmChanges(e))}),a.qZA()}2&r&&a.Q6J("farm",_.ngIf)}function g(r,_){1&r&&a._UZ(0,"mat-spinner",3)}let M=(()=>{var r;class _{constructor(){this._route=(0,a.f3M)(f.gz),this._router=(0,a.f3M)(f.F0),this._snackBar=(0,a.f3M)(c.ux),this._farmsService=(0,a.f3M)(E.i)}ngOnInit(){const t=this._route.snapshot.paramMap.get("id");t&&(this.farm$=this._farmsService.getFarm(t))}saveFarmChanges(t){var e=this;return(0,p.Z)(function*(){yield e._farmsService.updateFarm(t),e._snackBar.open("Finca actualizada","",{duration:1e3}),e._router.navigateByUrl("/farms")})()}}return(r=_).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-edit-farm"]],standalone:!0,features:[a.jDz],decls:4,vars:4,consts:[["formTitle","Editar Finca",3,"farm","submitFarm",4,"ngIf","ngIfElse"],["loading",""],["formTitle","Editar Finca",3,"farm","submitFarm"],["diameter","100",1,"loading-farm-spinner"]],template:function(t,e){if(1&t&&(a.YNc(0,u,1,1,"app-farm-form",0),a.ALo(1,"async"),a.YNc(2,g,1,0,"ng-template",null,1,a.W1O)),2&t){const o=a.MAs(3);a.Q6J("ngIf",a.lcZ(1,2,e.farm$))("ngIfElse",o)}},dependencies:[s.ez,s.O5,s.Ov,d.G,l.Cq,l.Ou,c.ZX],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.loading-farm-spinner[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}@media (min-width: 960px){.loading-farm-spinner[_ngcontent-%COMP%]{transform:translate(calc(-50% + 6.25rem),-50%)}}"]}),_})()}}]);