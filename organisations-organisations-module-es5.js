(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisations-organisations-module"], {
    /***/
    "3BJ3":
    /*!********************************************************************************************!*\
      !*** ./src/app/organisations/organisations-list-item/organisations-list-item.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: OrganisationsListItemComponent */

    /***/
    function BJ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsListItemComponent", function () {
        return OrganisationsListItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/organisation/", a1];
      };

      var OrganisationsListItemComponent = /*#__PURE__*/function () {
        function OrganisationsListItemComponent() {
          _classCallCheck(this, OrganisationsListItemComponent);
        }

        _createClass(OrganisationsListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrganisationsListItemComponent;
      }();

      OrganisationsListItemComponent.ɵfac = function OrganisationsListItemComponent_Factory(t) {
        return new (t || OrganisationsListItemComponent)();
      };

      OrganisationsListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrganisationsListItemComponent,
        selectors: [["app-organisations-list-item"]],
        inputs: {
          organisation: "organisation"
        },
        decls: 4,
        vars: 4,
        consts: [[1, "row", "organisation"], [1, "col"], [3, "routerLink"]],
        template: function OrganisationsListItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.organisation.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.organisation.title, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".organisation[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZ2FuaXNhdGlvbnMtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJvcmdhbmlzYXRpb25zLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmdhbmlzYXRpb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "V8Rk":
    /*!*******************************************************!*\
      !*** ./src/app/organisations/organisations.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrganisationsModule */

    /***/
    function V8Rk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsModule", function () {
        return OrganisationsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./organisations/organisations.component */
      "dR/J");
      /* harmony import */


      var _organisations_list_organisations_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./organisations-list/organisations-list.component */
      "zeog");
      /* harmony import */


      var _organisations_list_item_organisations_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./organisations-list-item/organisations-list-item.component */
      "3BJ3");
      /* harmony import */


      var _organisations_search_organisations_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./organisations-search/organisations-search.component */
      "vcwy");
      /* harmony import */


      var _shared_organisations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/organisations.service */
      "iSyK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _organisations_organisations_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationsComponent"]
      }, {
        path: '',
        redirectTo: '/404dqf',
        pathMatch: 'full'
      }];

      var OrganisationsModule = function OrganisationsModule() {
        _classCallCheck(this, OrganisationsModule);
      };

      OrganisationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: OrganisationsModule
      });
      OrganisationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function OrganisationsModule_Factory(t) {
          return new (t || OrganisationsModule)();
        },
        providers: [_shared_organisations_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OrganisationsModule, {
          declarations: [_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationsComponent"], _organisations_list_organisations_list_component__WEBPACK_IMPORTED_MODULE_4__["OrganisationsListComponent"], _organisations_list_item_organisations_list_item_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationsListItemComponent"], _organisations_search_organisations_search_component__WEBPACK_IMPORTED_MODULE_6__["OrganisationsSearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "dR/J":
    /*!************************************************************************!*\
      !*** ./src/app/organisations/organisations/organisations.component.ts ***!
      \************************************************************************/

    /*! exports provided: OrganisationsComponent */

    /***/
    function dRJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsComponent", function () {
        return OrganisationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_organisations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../shared/organisations.service */
      "iSyK");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../core/loader/loader.service */
      "b6Gx");
      /* harmony import */


      var _organisations_search_organisations_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../organisations-search/organisations-search.component */
      "vcwy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _organisations_list_organisations_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../organisations-list/organisations-list.component */
      "zeog");

      function OrganisationsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Searching ....");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var OrganisationsComponent = /*#__PURE__*/function () {
        function OrganisationsComponent(organisationService, logger, loader) {
          _classCallCheck(this, OrganisationsComponent);

          this.organisationService = organisationService;
          this.logger = logger;
          this.loader = loader;
          this.organisations = [];
          this.filteredOrganisations = [];
          this.isSearching = false;
        }

        _createClass(OrganisationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.searchOrganisation('');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "searchOrganisation",
          value: function searchOrganisation(title) {
            var _this = this;

            // this.logger.debug('Start searching organisations', title);
            this.isSearching = true;
            this.loader.show();

            if (!this.organisations || this.organisations.length === 0) {
              // get organisations from the web api
              this.organisationService.getOrganisations().subscribe(function (org) {
                return _this.organisations = org;
              }, function (error) {
                console.log(error);
                _this.isSearching = false;

                _this.loader.hide();
              }, function () {
                // finished fetching organisations from web api, filter the organisations by title
                _this.filterOrganisations(title);
              });
            } else {
              // organisations already loaded, only apply filter
              this.filterOrganisations(title);
            } // this.logger.debug('End searching organisations', title);

          }
        }, {
          key: "filterOrganisations",
          value: function filterOrganisations(title) {
            if (!title || !title.trim()) {
              // return all organisations
              this.filteredOrganisations = this.organisations.slice(0).sort(function (a, b) {
                return (// eslint-disable-next-line max-len
                  (a.title || '').toString().toLowerCase().localeCompare((b.title || '').toString().toLowerCase())
                );
              });
            } else {
              // filter organisations and save in filteredOrganisations
              this.filteredOrganisations = this.organisations.filter(function (org) {
                return new RegExp(title, 'gi').test(org.title);
              }).sort(function (a, b) {
                return (// eslint-disable-next-line max-len
                  (a.title || '').toString().toLowerCase().localeCompare((b.title || '').toString().toLowerCase())
                );
              });
            }

            this.isSearching = false;
            this.loader.hide();
          }
        }]);

        return OrganisationsComponent;
      }();

      OrganisationsComponent.ɵfac = function OrganisationsComponent_Factory(t) {
        return new (t || OrganisationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_organisations_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]));
      };

      OrganisationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrganisationsComponent,
        selectors: [["app-organisations"]],
        decls: 8,
        vars: 2,
        consts: [[1, "container"], [3, "search"], ["class", "text-info", 4, "ngIf"], [3, "organisations"], [1, "text-info"]],
        template: function OrganisationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Public data viewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Search for an organisation and access the validation results on their public IATI data. The organisation list and the public IATI data is regularly refreshed from the IATI Registry. New organisations and IATI files will not immediately be visible here, but after at most a day. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-organisations-search", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function OrganisationsComponent_Template_app_organisations_search_search_5_listener($event) {
              return ctx.searchOrganisation($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrganisationsComponent_div_6_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-organisations-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearching);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("organisations", ctx.filteredOrganisations);
          }
        },
        directives: [_organisations_search_organisations_search_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationsSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _organisations_list_organisations_list_component__WEBPACK_IMPORTED_MODULE_7__["OrganisationsListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmdhbmlzYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vcwy":
    /*!**************************************************************************************!*\
      !*** ./src/app/organisations/organisations-search/organisations-search.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: OrganisationsSearchComponent */

    /***/
    function vcwy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsSearchComponent", function () {
        return OrganisationsSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _c0 = ["searchInput"];

      var OrganisationsSearchComponent = /*#__PURE__*/function () {
        function OrganisationsSearchComponent() {
          _classCallCheck(this, OrganisationsSearchComponent);

          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.term = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        }

        _createClass(OrganisationsSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // Subscribe to changes in the search field and emit a search after 400 ms.
            this.term.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (searchValue) {
              return _this2.searchOrganisations();
            }); // .subscribe(t => this.search.emit(t));
          }
        }, {
          key: "searchOrganisations",
          value: function searchOrganisations() {
            this.search.emit(this.term.value);
          }
        }]);

        return OrganisationsSearchComponent;
      }();

      OrganisationsSearchComponent.ɵfac = function OrganisationsSearchComponent_Factory(t) {
        return new (t || OrganisationsSearchComponent)();
      };

      OrganisationsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrganisationsSearchComponent,
        selectors: [["app-organisations-search"]],
        viewQuery: function OrganisationsSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        outputs: {
          search: "search"
        },
        decls: 6,
        vars: 1,
        consts: [[1, "search-container"], [1, "organisation-search-form"], ["type", "text", "placeholder", "Organisation name", "appAutofocus", "", 1, "search-input", 3, "formControl"], ["searchInput", ""], [1, "btn", "btn-primary", "iati-button", 3, "click"]],
        template: function OrganisationsSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganisationsSearchComponent_Template_button_click_4_listener() {
              return ctx.searchOrganisations();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.term);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
        styles: [".organisation-search-form[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n@media (max-width: 600px) {\n  .organisation-search-form[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.organisation-search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 350px;\n  font-size: 1.6rem;\n  line-height: 1.25;\n  color: #464a4c;\n  padding: 0.9rem 1.4rem;\n  border: 1px solid rgba(0, 0, 0, 0.14902);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (max-width: 600px) {\n  .organisation-search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.organisation-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 0 !important;\n  text-align: center;\n}\n@media (max-width: 600px) {\n  .organisation-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZ2FuaXNhdGlvbnMtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBTEY7QUFPRTtFQVJGO0lBU0ksV0FBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSx3RUFBQTtBQUpGO0FBTUU7RUFURjtJQVVJLFdBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0U7RUFMRjtJQU1JLFdBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoib3JnYW5pc2F0aW9ucy1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2VhcmNoLWNvbnRhaW5lciB7XG5cbi8vIH1cblxuLm9yZ2FuaXNhdGlvbi1zZWFyY2gtZm9ybSB7XG4gIHdpZHRoOiA1MDBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gIC8vIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLm9yZ2FuaXNhdGlvbi1zZWFyY2gtZm9ybSAuc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiByZ2IoNzAsIDc0LCA3Nik7XG4gIHBhZGRpbmc6IDAuOXJlbSAxLjRyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNDkwMik7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5vcmdhbmlzYXRpb24tc2VhcmNoLWZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zeog":
    /*!**********************************************************************************!*\
      !*** ./src/app/organisations/organisations-list/organisations-list.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: OrganisationsListComponent */

    /***/
    function zeog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsListComponent", function () {
        return OrganisationsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _organisations_list_item_organisations_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../organisations-list-item/organisations-list-item.component */
      "3BJ3");

      function OrganisationsListComponent_app_organisations_list_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-organisations-list-item", 2);
        }

        if (rf & 2) {
          var org_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organisation", org_r1);
        }
      }

      var OrganisationsListComponent = /*#__PURE__*/function () {
        function OrganisationsListComponent() {
          _classCallCheck(this, OrganisationsListComponent);

          this.organisations = [];
        }

        _createClass(OrganisationsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrganisationsListComponent;
      }();

      OrganisationsListComponent.ɵfac = function OrganisationsListComponent_Factory(t) {
        return new (t || OrganisationsListComponent)();
      };

      OrganisationsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrganisationsListComponent,
        selectors: [["app-organisations-list"]],
        inputs: {
          organisations: "organisations"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "found-organization"], [3, "organisation", 4, "ngFor", "ngForOf"], [3, "organisation"]],
        template: function OrganisationsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganisationsListComponent_app_organisations_list_item_3_Template, 1, 1, "app-organisations-list-item", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Found ", ctx.organisations.length, " organisations.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.organisations);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _organisations_list_item_organisations_list_item_component__WEBPACK_IMPORTED_MODULE_2__["OrganisationsListItemComponent"]],
        styles: [".found-organization[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZ2FuaXNhdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoib3JnYW5pc2F0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdW5kLW9yZ2FuaXphdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=organisations-organisations-module-es5.js.map