(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{p28f:function(t,e,a){"use strict";a.r(e),a.d(e,"OrganisationModule",function(){return N});var o=a("ofXK"),n=a("3Pt+"),i=a("tyNb"),c=a("mrSG"),s=a("fXoL"),r=a("Gl80"),f=a("SF6U");function l(t,e){if(1&t&&(s.Qb(0,"span"),s.wc(1),s.dc(2,"date"),s.Pb()),2&t){const t=s.cc(2);s.yb(1),s.xc(s.fc(2,1,t.iatiDatasetData.received,"yyyy-MM-dd HH:mm (z)"))}}function b(t,e){1&t&&(s.Qb(0,"span"),s.wc(1,"Received before mid-January 2021"),s.Pb())}function d(t,e){if(1&t&&(s.Qb(0,"span",8),s.Qb(1,"button",9),s.wc(2),s.Pb(),s.Pb()),2&t){const t=s.cc(2);s.yb(2),s.xc(t.reportType())}}function u(t,e){if(1&t&&(s.Qb(0,"span"),s.wc(1),s.Pb()),2&t){const t=s.cc(2);s.yb(1),s.xc(t.reportType())}}const p=function(t){return{dqf:t}};function g(t,e){if(1&t){const t=s.Rb();s.Qb(0,"div",1),s.Qb(1,"div",2),s.ac("click",function(){return s.qc(t),s.cc().rowClick()}),s.Qb(2,"div",3),s.wc(3),s.Pb(),s.Qb(4,"div",3),s.uc(5,l,3,4,"span",4),s.uc(6,b,2,0,"span",4),s.Pb(),s.Qb(7,"div",3),s.wc(8),s.dc(9,"date"),s.Pb(),s.Qb(10,"div",3),s.uc(11,d,3,1,"span",5),s.uc(12,u,2,1,"ng-template",null,6,s.vc),s.Pb(),s.Qb(14,"div",7),s.Mb(15,"hr"),s.Pb(),s.Pb(),s.Pb()}if(2&t){const t=s.pc(13),e=s.cc();s.yb(1),s.ic("ngClass",s.lc(10,p,e.jsonUpdated())),s.yb(2),s.yc(" ",null==e.iatiDatasetData?null:e.iatiDatasetData.filename," "),s.yb(2),s.ic("ngIf",e.iatiDatasetData.received),s.yb(1),s.ic("ngIf",!e.iatiDatasetData.received),s.yb(2),s.yc(" ",s.fc(9,7,e.iatiDatasetData?e.iatiDatasetData["json-updated"]:"","yyyy-MM-dd HH:mm (z)")," "),s.yb(3),s.ic("ngIf",e.jsonUpdated())("ngIfElse",t)}}let v=(()=>{class t{constructor(t,e,a){this.organisationService=t,this.logger=e,this.router=a,this.selectedMd5=new s.n}jsonUpdated(){return!!this.iatiDatasetData["json-updated"]}reportType(){return this.jsonUpdated()?"File Validation report (click to view)":"-"}rowClick(){this.jsonUpdated()?this.router.navigate(["view","dqf","files",this.iatiDatasetData.id]):this.selectedMd5.emit(this.iatiDatasetData.md5)}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(r.a),s.Lb(f.a),s.Lb(i.d))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-workspace-view-item-file"]],inputs:{iatiDatasetData:"iatiDatasetData"},outputs:{selectedMd5:"selectedMd5"},decls:1,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"row",3,"ngClass","click"],[1,"col-12","col-md"],[4,"ngIf"],["class","button-report-wrapper",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"col-12","d-md-none"],[1,"button-report-wrapper"],["type","button",1,"btn","btn-link","dqf-button"]],template:function(t,e){1&t&&s.uc(0,g,16,12,"div",0),2&t&&s.ic("ngIf",e.iatiDatasetData)},directives:[o.l,o.j],pipes:[o.d],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.row[_ngcontent-%COMP%]{padding:3px 0;margin-right:0;margin-left:0}.row.dqf[_ngcontent-%COMP%]{cursor:pointer;color:#00c497;font-weight:700}.row.dqf[_ngcontent-%COMP%]:hover{background-color:#ffffe0}.dqf-button[_ngcontent-%COMP%]{padding:0}.button-report-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1em}']}),t})();function m(t,e){1&t&&(s.Qb(0,"div"),s.Qb(1,"p"),s.wc(2,"No files found."),s.Pb(),s.Pb())}function h(t,e){if(1&t){const t=s.Rb();s.Qb(0,"app-workspace-view-item-file",8),s.ac("selectedMd5",function(e){return s.qc(t),s.cc(2).md5Selected(e)}),s.Pb()}2&t&&s.ic("iatiDatasetData",e.$implicit)}function w(t,e){if(1&t&&(s.Qb(0,"div",2),s.Qb(1,"div",3),s.Qb(2,"div",4),s.Qb(3,"div",5),s.wc(4," File name "),s.Pb(),s.Qb(5,"div",6),s.wc(6," Received From Datastore "),s.Pb(),s.Qb(7,"div",6),s.wc(8," Report generated "),s.Pb(),s.Qb(9,"div",6),s.wc(10," Validation report available "),s.Pb(),s.Pb(),s.uc(11,h,1,1,"app-workspace-view-item-file",7),s.Pb(),s.Pb()),2&t){const t=s.cc();s.yb(11),s.ic("ngForOf",t.files)}}let y=(()=>{class t{constructor(t,e,a,o){this.router=t,this.organisationService=e,this.logger=a,this.activatedRoute=o,this.workspaceId="",this.versionSlug="",this.files=[],this.publisher=null,this.viewData=[],this.previousViewType="",this.publisher=o.snapshot.url[0].path}ngOnInit(){}ngOnChanges(t){this.logger.debug("ngOnChanges",t),this.getFileData()}getFileData(){this.organisationService.getFileDataForPublisher(this.publisher).subscribe(t=>{this.files=t},t=>this.error=t)}rowClick(t,e){this.router.navigate(["view",t,e])}md5Selected(t){this.logger.debug("Selected md5: ",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(i.d),s.Lb(r.a),s.Lb(f.a),s.Lb(i.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-workspace-view-item"]],inputs:{workspaceId:"workspaceId",versionSlug:"versionSlug"},features:[s.wb],decls:2,vars:2,consts:[[4,"ngIf"],["class","result-validation-table",4,"ngIf"],[1,"result-validation-table"],[1,"files"],[1,"row","heading"],[1,"col-12","col-md"],[1,"col-12","col-md","d-none","d-md-block"],[3,"iatiDatasetData","selectedMd5",4,"ngFor","ngForOf"],[3,"iatiDatasetData","selectedMd5"]],template:function(t,e){1&t&&(s.uc(0,m,3,0,"div",0),s.uc(1,w,12,1,"div",1)),2&t&&(s.ic("ngIf",void 0===e.files),s.yb(1),s.ic("ngIf",void 0!==e.files))},directives:[o.l,o.k,v],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.version-info[_ngcontent-%COMP%]{text-align:right}.files[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:.15rem;font-size:1.5em}.files[_ngcontent-%COMP%] > .heading[_ngcontent-%COMP%]{background-color:#ecf0f1;padding:6px 0;font-weight:700}.row[_ngcontent-%COMP%]{margin-right:0;margin-left:0}']}),t})();function U(t,e){if(1&t&&(s.Qb(0,"span"),s.wc(1),s.dc(2,"date"),s.Pb()),2&t){const t=s.cc();s.yb(1),s.Ac("The next file in the queue to be validated was received from the Datastore at ",s.fc(2,3,t.queueNextDate,"yyyy-MM-dd HH:mm (z)"),". The queue length is presently ",t.queueLength.count," files and the last report took ",t.queueLength.time," to be produced.")}}function k(t,e){1&t&&(s.Qb(0,"span"),s.wc(1,"The queue is presently empty and all validation reports have been generated."),s.Pb())}let P=(()=>{class t{constructor(t){this.organisationService=t,this.queueNextDate=null,this.queueLength=null}ngOnInit(){this.organisationService.getNextInQueue().subscribe(t=>{t&&(void 0!==t.received?this.queueNextDate=t.received:void 0!==t.downloaded&&(this.queueNextDate=t.downloaded))}),this.organisationService.getQueueLength().subscribe(t=>{this.queueLength=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(r.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-workspace-list-item"]],inputs:{workspace:"workspace"},decls:14,vars:6,consts:[[1,"mycard"],[1,"mycard-title"],[1,"mycard-body"],[1,"card-text"],[4,"ngIf"],[3,"workspaceId","versionSlug"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.wc(2),s.Pb(),s.Qb(3,"div",2),s.Mb(4,"p"),s.Qb(5,"p",3),s.Qb(6,"b"),s.wc(7),s.Pb(),s.Pb(),s.Qb(8,"p"),s.uc(9,U,3,6,"span",4),s.uc(10,k,2,0,"span",4),s.Pb(),s.Qb(11,"p"),s.wc(12,"Please note that files received before mid January 2021 do not have a recieved date available. If exactly the same file was received and validated in the past the report will have that date and so may predate the Received From Datastore date."),s.Pb(),s.Mb(13,"app-workspace-view-item",5),s.Pb(),s.Pb()),2&t&&(s.yb(2),s.yc(" ",e.workspace.title," "),s.yb(5),s.xc(e.workspace.description),s.yb(2),s.ic("ngIf",null!=e.queueNextDate),s.yb(1),s.ic("ngIf",null===e.queueNextDate),s.yb(3),s.ic("workspaceId",e.workspace.id)("versionSlug","current"))},directives:[o.l,y],pipes:[o.d],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.mycard[_ngcontent-%COMP%]{margin:10px;border:1px solid #d3d3d3;border-radius:.15rem;font-family:Lato}.mycard-title[_ngcontent-%COMP%]{font-weight:700;font-size:18px;padding:14px;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.mycard-body[_ngcontent-%COMP%]{padding:14px}.workspace-link[_ngcontent-%COMP%]{text-decoration:none;color:inherit}']}),t})();function D(t,e){if(1&t&&(s.Qb(0,"div",7),s.Mb(1,"img",8),s.Pb()),2&t){const t=s.cc();s.yb(1),s.jc("alt",null==t.organisationData?null:t.organisationData.slug),s.ic("src",null==t.organisationData?null:t.organisationData.logo,s.rc)}}const Q=function(t){return{"col-md-9":t}};function M(t,e){if(1&t&&(s.Qb(0,"div",9),s.Qb(1,"h3"),s.wc(2,"Description"),s.Pb(),s.Qb(3,"p"),s.wc(4),s.Pb(),s.Pb()),2&t){const t=s.cc();s.ic("ngClass",s.lc(2,Q,t.hasValidLogo())),s.yb(4),s.xc(null==t.organisationData?null:t.organisationData.description)}}function S(t,e){1&t&&s.Mb(0,"app-workspace-list-item",10),2&t&&s.ic("workspace",e.$implicit)}let O=(()=>{class t{constructor(t,e){this.organisationService=t,this.activateRoute=e,this.workspaces=[],this.name="",this.activateRoute.params.subscribe(t=>{this.name=t.name})}ngOnInit(){return Object(c.a)(this,void 0,void 0,function*(){this.loadOrganisation(this.name)})}loadOrganisation(t){this.organisationService.getOrganisation(t).subscribe(t=>{this.organisationData=t,this.workspaces=this.organisationData?this.organisationData.workspaces:[]},t=>this.error=t)}hasValidLogo(){return void 0!==this.organisationData&&"logo"in this.organisationData&&""!==this.organisationData.logo}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(r.a),s.Lb(i.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-organisation"]],decls:9,vars:4,consts:[[1,"container"],[1,"organisation-name"],[1,"row","about-organisation"],["class","col-md-3 h-100",4,"ngIf"],["class","col",3,"ngClass",4,"ngIf"],[1,"workspaces"],["class","card-item",3,"workspace",4,"ngFor","ngForOf"],[1,"col-md-3","h-100"],[1,"organisation-logo","img-fluid",3,"src","alt"],[1,"col",3,"ngClass"],[1,"card-item",3,"workspace"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"h1"),s.wc(3),s.Pb(),s.Pb(),s.Qb(4,"div",2),s.uc(5,D,2,2,"div",3),s.uc(6,M,5,4,"div",4),s.Pb(),s.Qb(7,"div",5),s.uc(8,S,1,1,"app-workspace-list-item",6),s.Pb(),s.Pb()),2&t&&(s.yb(3),s.xc(null==e.organisationData?null:e.organisationData.name),s.yb(2),s.ic("ngIf",e.hasValidLogo()),s.yb(1),s.ic("ngIf",null==e.organisationData?null:e.organisationData.description),s.yb(2),s.ic("ngForOf",e.workspaces))},directives:[o.l,o.k,o.j,P],styles:[".organisation-name[_ngcontent-%COMP%]{margin-bottom:24px}.about-organisation[_ngcontent-%COMP%]{margin-bottom:20px}.workspaces[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -22px}.card-item[_ngcontent-%COMP%]{width:100%}"]}),t})();function I(t,e){1&t&&(s.Qb(0,"option",14),s.wc(1,"Select a version..."),s.Pb())}function C(t,e){if(1&t&&(s.Qb(0,"option",15),s.wc(1),s.Pb()),2&t){const t=e.$implicit;s.jc("value",t.slug),s.yb(1),s.xc(t.title)}}function x(t,e){1&t&&(s.Qb(0,"div",16),s.Qb(1,"h4"),s.wc(2,"No workspace found."),s.Pb(),s.Pb())}function F(t,e){1&t&&(s.Qb(0,"div",16),s.Qb(1,"h4"),s.wc(2,"No versions found."),s.Pb(),s.Pb())}const R=function(t){return[t]};function q(t,e){if(1&t&&(s.Qb(0,"a",19),s.wc(1),s.Pb()),2&t){const t=e.$implicit;s.ic("routerLink",s.lc(2,R,t.slug)),s.yb(1),s.yc(" ",t.title," ")}}function L(t,e){if(1&t&&(s.Qb(0,"div",16),s.Qb(1,"h4"),s.wc(2,"Please select a version."),s.Pb(),s.Qb(3,"div",17),s.uc(4,q,2,4,"a",18),s.Pb(),s.Pb()),2&t){const t=s.cc();s.yb(4),s.ic("ngForOf",t.workspaceData.versions)}}function _(t,e){if(1&t&&s.Mb(0,"app-workspace-view-item",20),2&t){const t=s.cc();s.ic("workspaceId",t.workspaceId)("versionSlug",t.versionSlug)}}let j=(()=>{class t{constructor(t,e,a){this.organisationService=t,this.router=e,this.activateRoute=a,this.organisationSlug="",this.workspaceSlug="",this.versionSlug="",this.workspaceId="",this.workspaceData=this.organisationService.getEmptyWorkspace(),this.activateRoute.params.subscribe(t=>{this.organisationSlug=t.organisation,this.workspaceSlug=t.workspace,this.versionSlug=t.version||""})}ngOnInit(){this.loadWorkspace(this.organisationSlug,this.workspaceSlug)}loadWorkspace(t,e){this.organisationService.getWorkspace(t,e).subscribe(t=>this.workspaceData=t,t=>this.error=t,()=>{this.versions=this.workspaceData.versions?this.workspaceData.versions:[],this.workspaceId=this.workspaceData.id,this.versions.length>0&&"latest"===this.versionSlug&&(this.versionSlug=this.versions[0].slug,this.router.navigate(["organisation",this.organisationSlug,"ws",this.workspaceSlug,this.versionSlug],{skipLocationChange:!1,replaceUrl:!0}))})}selectedVersion(t){this.versionSlug!==t&&(this.versionSlug=t),this.router.navigate(["organisation",this.organisationSlug,"ws",this.workspaceSlug,this.versionSlug],{skipLocationChange:!1})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(r.a),s.Lb(i.d),s.Lb(i.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-workspace"]],decls:21,vars:10,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"organisation-name"],[1,"workspace-name"],[1,"col-md-auto","version-col"],[1,"version-wrapper"],["for","versionSelect"],[1,"version-select","custom-select",3,"ngModel","ngModelChange","change"],["versionSelect",""],["selected","","value","",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["class","no-version-selected",4,"ngIf"],[3,"workspaceId","versionSlug",4,"ngIf"],["selected","","value",""],[3,"value"],[1,"no-version-selected"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"workspaceId","versionSlug"]],template:function(t,e){if(1&t){const t=s.Rb();s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"h1",3),s.wc(4),s.Pb(),s.Qb(5,"h2",4),s.wc(6),s.Pb(),s.Qb(7,"p"),s.wc(8),s.Pb(),s.Pb(),s.Qb(9,"div",5),s.Qb(10,"div",6),s.Qb(11,"label",7),s.wc(12,"Version"),s.Pb(),s.Qb(13,"select",8,9),s.ac("ngModelChange",function(t){return e.versionSlug=t})("change",function(){s.qc(t);const a=s.pc(14);return e.selectedVersion(a.value)}),s.uc(15,I,2,0,"option",10),s.uc(16,C,2,2,"option",11),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.uc(17,x,3,0,"div",12),s.uc(18,F,3,0,"div",12),s.uc(19,L,5,1,"div",12),s.uc(20,_,1,2,"app-workspace-view-item",13),s.Pb()}2&t&&(s.yb(4),s.xc(null==e.organisationData?null:e.organisationData.name),s.yb(2),s.yc(" ",e.workspaceData.title," "),s.yb(2),s.xc(e.workspaceData.description),s.yb(5),s.ic("ngModel",e.versionSlug),s.yb(2),s.ic("ngIf",""===e.versionSlug),s.yb(1),s.ic("ngForOf",e.workspaceData.versions),s.yb(1),s.ic("ngIf",""===e.workspaceData.id),s.yb(1),s.ic("ngIf",0===(null==e.versions?null:e.versions.length)),s.yb(1),s.ic("ngIf",""===e.versionSlug&&0!==(null==e.versions?null:e.versions.length)),s.yb(1),s.ic("ngIf",""!==e.versionSlug))},directives:[n.o,n.j,n.l,o.l,o.k,n.m,n.q,i.f,y],styles:[".version-wrapper[_ngcontent-%COMP%]{display:inline-block}.version-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px}.version-select[_ngcontent-%COMP%]{width:auto}.no-version-selected[_ngcontent-%COMP%]{margin-top:20px}"]}),t})();const E=[{path:"",component:O},{path:":name",component:O},{path:":organisation/ws/:workspace",component:j},{path:":organisation/ws/:workspace/:version",component:j},{path:"",redirectTo:"/404dqf",pathMatch:"full"}];let N=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},providers:[r.a],imports:[[o.b,i.g.forChild(E),n.g],i.g]}),t})()}}]);