!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{p28f:function(e,n,o){"use strict";o.r(n),o.d(n,"OrganisationModule",function(){return W});var i=o("ofXK"),c=o("3Pt+"),r=o("tyNb"),s=o("mrSG"),f=o("fXoL"),l=o("Gl80"),b=o("SF6U");function d(t,e){if(1&t&&(f.Qb(0,"span"),f.wc(1),f.dc(2,"date"),f.Pb()),2&t){var a=f.cc(2);f.yb(1),f.xc(f.fc(2,1,a.iatiDatasetData.received,"yyyy-MM-dd HH:mm (z)"))}}function u(t,e){1&t&&(f.Qb(0,"span"),f.wc(1,"Received before mid-January 2021"),f.Pb())}function p(t,e){if(1&t&&(f.Qb(0,"span",8),f.Qb(1,"button",9),f.wc(2),f.Pb(),f.Pb()),2&t){var a=f.cc(2);f.yb(2),f.xc(a.reportType())}}function g(t,e){if(1&t&&(f.Qb(0,"span"),f.wc(1),f.Pb()),2&t){var a=f.cc(2);f.yb(1),f.xc(a.reportType())}}var v=function(t){return{dqf:t}};function m(t,e){if(1&t){var a=f.Rb();f.Qb(0,"div",1),f.Qb(1,"div",2),f.ac("click",function(){return f.qc(a),f.cc().rowClick()}),f.Qb(2,"div",3),f.wc(3),f.Pb(),f.Qb(4,"div",3),f.uc(5,d,3,4,"span",4),f.uc(6,u,2,0,"span",4),f.Pb(),f.Qb(7,"div",3),f.wc(8),f.dc(9,"date"),f.Pb(),f.Qb(10,"div",3),f.uc(11,p,3,1,"span",5),f.uc(12,g,2,1,"ng-template",null,6,f.vc),f.Pb(),f.Qb(14,"div",7),f.Mb(15,"hr"),f.Pb(),f.Pb(),f.Pb()}if(2&t){var n=f.pc(13),o=f.cc();f.yb(1),f.ic("ngClass",f.lc(10,v,o.jsonUpdated())),f.yb(2),f.yc(" ",null==o.iatiDatasetData?null:o.iatiDatasetData.filename," "),f.yb(2),f.ic("ngIf",o.iatiDatasetData.received),f.yb(1),f.ic("ngIf",!o.iatiDatasetData.received),f.yb(2),f.yc(" ",f.fc(9,7,o.iatiDatasetData?o.iatiDatasetData["json-updated"]:"","yyyy-MM-dd HH:mm (z)")," "),f.yb(3),f.ic("ngIf",o.jsonUpdated())("ngIfElse",n)}}var w,h=((w=function(){function e(a,n,o){t(this,e),this.organisationService=a,this.logger=n,this.router=o,this.selectedMd5=new f.n}return a(e,[{key:"jsonUpdated",value:function(){return!!this.iatiDatasetData["json-updated"]}},{key:"reportType",value:function(){return this.jsonUpdated()?"File Validation report (click to view)":"-"}},{key:"rowClick",value:function(){this.jsonUpdated()?this.router.navigate(["view","dqf","files",this.iatiDatasetData.id]):this.selectedMd5.emit(this.iatiDatasetData.md5)}}]),e}()).\u0275fac=function(t){return new(t||w)(f.Lb(l.a),f.Lb(b.a),f.Lb(r.d))},w.\u0275cmp=f.Fb({type:w,selectors:[["app-workspace-view-item-file"]],inputs:{iatiDatasetData:"iatiDatasetData"},outputs:{selectedMd5:"selectedMd5"},decls:1,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"row",3,"ngClass","click"],[1,"col-12","col-md"],[4,"ngIf"],["class","button-report-wrapper",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"col-12","d-md-none"],[1,"button-report-wrapper"],["type","button",1,"btn","btn-link","dqf-button"]],template:function(t,e){1&t&&f.uc(0,m,16,12,"div",0),2&t&&f.ic("ngIf",e.iatiDatasetData)},directives:[i.l,i.j],pipes:[i.d],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.row[_ngcontent-%COMP%]{padding:3px 0;margin-right:0;margin-left:0}.row.dqf[_ngcontent-%COMP%]{cursor:pointer;color:#00c497;font-weight:700}.row.dqf[_ngcontent-%COMP%]:hover{background-color:#ffffe0}.dqf-button[_ngcontent-%COMP%]{padding:0}.button-report-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1em}']}),w);function y(t,e){1&t&&(f.Qb(0,"div"),f.Qb(1,"p"),f.wc(2,"No files found."),f.Pb(),f.Pb())}function k(t,e){if(1&t){var a=f.Rb();f.Qb(0,"app-workspace-view-item-file",8),f.ac("selectedMd5",function(t){return f.qc(a),f.cc(2).md5Selected(t)}),f.Pb()}2&t&&f.ic("iatiDatasetData",e.$implicit)}function U(t,e){if(1&t&&(f.Qb(0,"div",2),f.Qb(1,"div",3),f.Qb(2,"div",4),f.Qb(3,"div",5),f.wc(4," File name "),f.Pb(),f.Qb(5,"div",6),f.wc(6," Received From Datastore "),f.Pb(),f.Qb(7,"div",6),f.wc(8," Report generated "),f.Pb(),f.Qb(9,"div",6),f.wc(10," Validation report available "),f.Pb(),f.Pb(),f.uc(11,k,1,1,"app-workspace-view-item-file",7),f.Pb(),f.Pb()),2&t){var a=f.cc();f.yb(11),f.ic("ngForOf",a.files)}}var P,D=((P=function(){function e(a,n,o,i){t(this,e),this.router=a,this.organisationService=n,this.logger=o,this.activatedRoute=i,this.workspaceId="",this.versionSlug="",this.files=[],this.publisher=null,this.viewData=[],this.previousViewType="",this.publisher=i.snapshot.url[0].path}return a(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(t){this.logger.debug("ngOnChanges",t),this.getFileData()}},{key:"getFileData",value:function(){var t=this;this.organisationService.getFileDataForPublisher(this.publisher).subscribe(function(e){t.files=e},function(e){return t.error=e})}},{key:"rowClick",value:function(t,e){this.router.navigate(["view",t,e])}},{key:"md5Selected",value:function(t){this.logger.debug("Selected md5: ",t)}}]),e}()).\u0275fac=function(t){return new(t||P)(f.Lb(r.d),f.Lb(l.a),f.Lb(b.a),f.Lb(r.a))},P.\u0275cmp=f.Fb({type:P,selectors:[["app-workspace-view-item"]],inputs:{workspaceId:"workspaceId",versionSlug:"versionSlug"},features:[f.wb],decls:2,vars:2,consts:[[4,"ngIf"],["class","result-validation-table",4,"ngIf"],[1,"result-validation-table"],[1,"files"],[1,"row","heading"],[1,"col-12","col-md"],[1,"col-12","col-md","d-none","d-md-block"],[3,"iatiDatasetData","selectedMd5",4,"ngFor","ngForOf"],[3,"iatiDatasetData","selectedMd5"]],template:function(t,e){1&t&&(f.uc(0,y,3,0,"div",0),f.uc(1,U,12,1,"div",1)),2&t&&(f.ic("ngIf",void 0===e.files),f.yb(1),f.ic("ngIf",void 0!==e.files))},directives:[i.l,i.k,h],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.version-info[_ngcontent-%COMP%]{text-align:right}.files[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:.15rem;font-size:1.5em}.files[_ngcontent-%COMP%] > .heading[_ngcontent-%COMP%]{background-color:#ecf0f1;padding:6px 0;font-weight:700}.row[_ngcontent-%COMP%]{margin-right:0;margin-left:0}']}),P);function Q(t,e){if(1&t&&(f.Qb(0,"span"),f.wc(1),f.dc(2,"date"),f.Pb()),2&t){var a=f.cc();f.yb(1),f.Ac("The next file in the queue to be validated was received from the Datastore at ",f.fc(2,3,a.queueNextDate,"yyyy-MM-dd HH:mm (z)"),". The queue length is presently ",a.queueLength.count," files and the last report took ",a.queueLength.time," to be produced.")}}function M(t,e){1&t&&(f.Qb(0,"span"),f.wc(1,"The queue is presently empty and all validation reports have been generated."),f.Pb())}var O,S=((O=function(){function e(a){t(this,e),this.organisationService=a,this.queueNextDate=null,this.queueLength=null}return a(e,[{key:"ngOnInit",value:function(){var t=this;this.organisationService.getNextInQueue().subscribe(function(e){e&&(void 0!==e.received?t.queueNextDate=e.received:void 0!==e.downloaded&&(t.queueNextDate=e.downloaded))}),this.organisationService.getQueueLength().subscribe(function(e){t.queueLength=e})}}]),e}()).\u0275fac=function(t){return new(t||O)(f.Lb(l.a))},O.\u0275cmp=f.Fb({type:O,selectors:[["app-workspace-list-item"]],inputs:{workspace:"workspace"},decls:14,vars:6,consts:[[1,"mycard"],[1,"mycard-title"],[1,"mycard-body"],[1,"card-text"],[4,"ngIf"],[3,"workspaceId","versionSlug"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"div",1),f.wc(2),f.Pb(),f.Qb(3,"div",2),f.Mb(4,"p"),f.Qb(5,"p",3),f.Qb(6,"b"),f.wc(7),f.Pb(),f.Pb(),f.Qb(8,"p"),f.uc(9,Q,3,6,"span",4),f.uc(10,M,2,0,"span",4),f.Pb(),f.Qb(11,"p"),f.wc(12,"Please note that files received before mid January 2021 do not have a recieved date available. If exactly the same file was received and validated in the past the report will have that date and so may predate the Received From Datastore date."),f.Pb(),f.Mb(13,"app-workspace-view-item",5),f.Pb(),f.Pb()),2&t&&(f.yb(2),f.yc(" ",e.workspace.title," "),f.yb(5),f.xc(e.workspace.description),f.yb(2),f.ic("ngIf",null!=e.queueNextDate),f.yb(1),f.ic("ngIf",null===e.queueNextDate),f.yb(3),f.ic("workspaceId",e.workspace.id)("versionSlug","current"))},directives:[i.l,D],pipes:[i.d],styles:['@font-face{font-family:chalet-london-sixty;src:url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?fvd=n4&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:400;font-display:auto}@font-face{font-family:pragmatica;src:url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff2"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("woff"),url(https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?fvd=n7&primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&v=3) format("opentype");font-style:normal;font-weight:700;font-display:auto}@font-face{font-family:Roboto;src:local("Roboto Regular"),local("Roboto-Regular"),url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");font-style:normal;font-weight:400;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Roboto;src:local("Roboto Medium"),local("Roboto-Medium"),url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format("woff2");font-style:normal;font-weight:500;unicode-range:U+0-ff,U+131,U+152-153,U+2bb-2bc,U+2c6,U+2da,U+2dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.mycard[_ngcontent-%COMP%]{margin:10px;border:1px solid #d3d3d3;border-radius:.15rem;font-family:Lato}.mycard-title[_ngcontent-%COMP%]{font-weight:700;font-size:18px;padding:14px;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.mycard-body[_ngcontent-%COMP%]{padding:14px}.workspace-link[_ngcontent-%COMP%]{text-decoration:none;color:inherit}']}),O);function C(t,e){if(1&t&&(f.Qb(0,"div",7),f.Mb(1,"img",8),f.Pb()),2&t){var a=f.cc();f.yb(1),f.jc("alt",null==a.organisationData?null:a.organisationData.slug),f.ic("src",null==a.organisationData?null:a.organisationData.logo,f.rc)}}var I=function(t){return{"col-md-9":t}};function x(t,e){if(1&t&&(f.Qb(0,"div",9),f.Qb(1,"h3"),f.wc(2,"Description"),f.Pb(),f.Qb(3,"p"),f.wc(4),f.Pb(),f.Pb()),2&t){var a=f.cc();f.ic("ngClass",f.lc(2,I,a.hasValidLogo())),f.yb(4),f.xc(null==a.organisationData?null:a.organisationData.description)}}function F(t,e){1&t&&f.Mb(0,"app-workspace-list-item",10),2&t&&f.ic("workspace",e.$implicit)}var R,q=((R=function(){function e(a,n){var o=this;t(this,e),this.organisationService=a,this.activateRoute=n,this.workspaces=[],this.name="",this.activateRoute.params.subscribe(function(t){o.name=t.name})}return a(e,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loadOrganisation(this.name);case 1:case"end":return t.stop()}},t,this)}))}},{key:"loadOrganisation",value:function(t){var e=this;this.organisationService.getOrganisation(t).subscribe(function(t){e.organisationData=t,e.workspaces=e.organisationData?e.organisationData.workspaces:[]},function(t){return e.error=t})}},{key:"hasValidLogo",value:function(){return void 0!==this.organisationData&&"logo"in this.organisationData&&""!==this.organisationData.logo}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||R)(f.Lb(l.a),f.Lb(r.a))},R.\u0275cmp=f.Fb({type:R,selectors:[["app-organisation"]],decls:9,vars:4,consts:[[1,"container"],[1,"organisation-name"],[1,"row","about-organisation"],["class","col-md-3 h-100",4,"ngIf"],["class","col",3,"ngClass",4,"ngIf"],[1,"workspaces"],["class","card-item",3,"workspace",4,"ngFor","ngForOf"],[1,"col-md-3","h-100"],[1,"organisation-logo","img-fluid",3,"src","alt"],[1,"col",3,"ngClass"],[1,"card-item",3,"workspace"]],template:function(t,e){1&t&&(f.Qb(0,"div",0),f.Qb(1,"div",1),f.Qb(2,"h1"),f.wc(3),f.Pb(),f.Pb(),f.Qb(4,"div",2),f.uc(5,C,2,2,"div",3),f.uc(6,x,5,4,"div",4),f.Pb(),f.Qb(7,"div",5),f.uc(8,F,1,1,"app-workspace-list-item",6),f.Pb(),f.Pb()),2&t&&(f.yb(3),f.xc(null==e.organisationData?null:e.organisationData.name),f.yb(2),f.ic("ngIf",e.hasValidLogo()),f.yb(1),f.ic("ngIf",null==e.organisationData?null:e.organisationData.description),f.yb(2),f.ic("ngForOf",e.workspaces))},directives:[i.l,i.k,i.j,S],styles:[".organisation-name[_ngcontent-%COMP%]{margin-bottom:24px}.about-organisation[_ngcontent-%COMP%]{margin-bottom:20px}.workspaces[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -22px}.card-item[_ngcontent-%COMP%]{width:100%}"]}),R);function L(t,e){1&t&&(f.Qb(0,"option",14),f.wc(1,"Select a version..."),f.Pb())}function _(t,e){if(1&t&&(f.Qb(0,"option",15),f.wc(1),f.Pb()),2&t){var a=e.$implicit;f.jc("value",a.slug),f.yb(1),f.xc(a.title)}}function j(t,e){1&t&&(f.Qb(0,"div",16),f.Qb(1,"h4"),f.wc(2,"No workspace found."),f.Pb(),f.Pb())}function E(t,e){1&t&&(f.Qb(0,"div",16),f.Qb(1,"h4"),f.wc(2,"No versions found."),f.Pb(),f.Pb())}var N=function(t){return[t]};function K(t,e){if(1&t&&(f.Qb(0,"a",19),f.wc(1),f.Pb()),2&t){var a=e.$implicit;f.ic("routerLink",f.lc(2,N,a.slug)),f.yb(1),f.yc(" ",a.title," ")}}function T(t,e){if(1&t&&(f.Qb(0,"div",16),f.Qb(1,"h4"),f.wc(2,"Please select a version."),f.Pb(),f.Qb(3,"div",17),f.uc(4,K,2,4,"a",18),f.Pb(),f.Pb()),2&t){var a=f.cc();f.yb(4),f.ic("ngForOf",a.workspaceData.versions)}}function V(t,e){if(1&t&&f.Mb(0,"app-workspace-view-item",20),2&t){var a=f.cc();f.ic("workspaceId",a.workspaceId)("versionSlug",a.versionSlug)}}var B,z,H=((B=function(){function e(a,n,o){var i=this;t(this,e),this.organisationService=a,this.router=n,this.activateRoute=o,this.organisationSlug="",this.workspaceSlug="",this.versionSlug="",this.workspaceId="",this.workspaceData=this.organisationService.getEmptyWorkspace(),this.activateRoute.params.subscribe(function(t){i.organisationSlug=t.organisation,i.workspaceSlug=t.workspace,i.versionSlug=t.version||""})}return a(e,[{key:"ngOnInit",value:function(){this.loadWorkspace(this.organisationSlug,this.workspaceSlug)}},{key:"loadWorkspace",value:function(t,e){var a=this;this.organisationService.getWorkspace(t,e).subscribe(function(t){return a.workspaceData=t},function(t){return a.error=t},function(){a.versions=a.workspaceData.versions?a.workspaceData.versions:[],a.workspaceId=a.workspaceData.id,a.versions.length>0&&"latest"===a.versionSlug&&(a.versionSlug=a.versions[0].slug,a.router.navigate(["organisation",a.organisationSlug,"ws",a.workspaceSlug,a.versionSlug],{skipLocationChange:!1,replaceUrl:!0}))})}},{key:"selectedVersion",value:function(t){this.versionSlug!==t&&(this.versionSlug=t),this.router.navigate(["organisation",this.organisationSlug,"ws",this.workspaceSlug,this.versionSlug],{skipLocationChange:!1})}}]),e}()).\u0275fac=function(t){return new(t||B)(f.Lb(l.a),f.Lb(r.d),f.Lb(r.a))},B.\u0275cmp=f.Fb({type:B,selectors:[["app-workspace"]],decls:21,vars:10,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"organisation-name"],[1,"workspace-name"],[1,"col-md-auto","version-col"],[1,"version-wrapper"],["for","versionSelect"],[1,"version-select","custom-select",3,"ngModel","ngModelChange","change"],["versionSelect",""],["selected","","value","",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["class","no-version-selected",4,"ngIf"],[3,"workspaceId","versionSlug",4,"ngIf"],["selected","","value",""],[3,"value"],[1,"no-version-selected"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"workspaceId","versionSlug"]],template:function(t,e){if(1&t){var a=f.Rb();f.Qb(0,"div",0),f.Qb(1,"div",1),f.Qb(2,"div",2),f.Qb(3,"h1",3),f.wc(4),f.Pb(),f.Qb(5,"h2",4),f.wc(6),f.Pb(),f.Qb(7,"p"),f.wc(8),f.Pb(),f.Pb(),f.Qb(9,"div",5),f.Qb(10,"div",6),f.Qb(11,"label",7),f.wc(12,"Version"),f.Pb(),f.Qb(13,"select",8,9),f.ac("ngModelChange",function(t){return e.versionSlug=t})("change",function(){f.qc(a);var t=f.pc(14);return e.selectedVersion(t.value)}),f.uc(15,L,2,0,"option",10),f.uc(16,_,2,2,"option",11),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.uc(17,j,3,0,"div",12),f.uc(18,E,3,0,"div",12),f.uc(19,T,5,1,"div",12),f.uc(20,V,1,2,"app-workspace-view-item",13),f.Pb()}2&t&&(f.yb(4),f.xc(null==e.organisationData?null:e.organisationData.name),f.yb(2),f.yc(" ",e.workspaceData.title," "),f.yb(2),f.xc(e.workspaceData.description),f.yb(5),f.ic("ngModel",e.versionSlug),f.yb(2),f.ic("ngIf",""===e.versionSlug),f.yb(1),f.ic("ngForOf",e.workspaceData.versions),f.yb(1),f.ic("ngIf",""===e.workspaceData.id),f.yb(1),f.ic("ngIf",0===(null==e.versions?null:e.versions.length)),f.yb(1),f.ic("ngIf",""===e.versionSlug&&0!==(null==e.versions?null:e.versions.length)),f.yb(1),f.ic("ngIf",""!==e.versionSlug))},directives:[c.o,c.j,c.l,i.l,i.k,c.m,c.q,r.f,D],styles:[".version-wrapper[_ngcontent-%COMP%]{display:inline-block}.version-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px}.version-select[_ngcontent-%COMP%]{width:auto}.no-version-selected[_ngcontent-%COMP%]{margin-top:20px}"]}),B),J=[{path:"",component:q},{path:":name",component:q},{path:":organisation/ws/:workspace",component:H},{path:":organisation/ws/:workspace/:version",component:H},{path:"",redirectTo:"/404dqf",pathMatch:"full"}],W=((z=function e(){t(this,e)}).\u0275mod=f.Jb({type:z}),z.\u0275inj=f.Ib({factory:function(t){return new(t||z)},providers:[l.a],imports:[[i.b,r.g.forChild(J),c.g],r.g]}),z)}}])}();