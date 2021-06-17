(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~validate-iati-validate-iati-module~views-data-quality-feedback-data-quality-feedback-module"], {
    /***/
    "8CDe":
    /*!****************************************************************************!*\
      !*** ./src/app/validate-iati/validate-result/validate-result.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ValidateResultComponent */

    /***/
    function CDe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateResultComponent", function () {
        return ValidateResultComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../shared/validated-iati.service */
      "XQMz");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ValidateResultComponent_div_15_ng_container_8_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", iatiDatasetData_r5.sourceUrl, " ");
        }
      }

      function ValidateResultComponent_div_15_ng_container_8_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", iatiDatasetData_r5.filename, " ");
        }
      }

      function ValidateResultComponent_div_15_ng_container_8_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.reportType(iatiDatasetData_r5));
        }
      }

      function ValidateResultComponent_div_15_ng_container_8_ng_template_12_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](iatiDatasetData_r5.status);
        }
      }

      function ValidateResultComponent_div_15_ng_container_8_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ValidateResultComponent_div_15_ng_container_8_ng_template_12_span_0_Template, 2, 1, "span", 6);
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", iatiDatasetData_r5);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "dqf": a0
        };
      };

      function ValidateResultComponent_div_15_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_div_15_ng_container_8_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var iatiDatasetData_r5 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r18.rowClick(iatiDatasetData_r5, iatiDatasetData_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ValidateResultComponent_div_15_ng_container_8_span_4_Template, 2, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ValidateResultComponent_div_15_ng_container_8_ng_template_5_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ValidateResultComponent_div_15_ng_container_8_span_11_Template, 3, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ValidateResultComponent_div_15_ng_container_8_ng_template_12_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var iatiDatasetData_r5 = ctx.$implicit;

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r4.jsonUpdated(iatiDatasetData_r5)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.hasSourceUrl(iatiDatasetData_r5))("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 6, iatiDatasetData_r5.uploaded, "yyyy-MM-dd HH:mm (z)"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.jsonUpdated(iatiDatasetData_r5))("ngIfElse", _r10);
        }
      }

      function ValidateResultComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " File name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Uploaded ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Report status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ValidateResultComponent_div_15_ng_container_8_Template, 16, 11, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.iatiDatasetDatas);
        }
      }

      function ValidateResultComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Enter your email below. Your email will not be shared with anyone and will be removed when your personal workspace is deleted. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ValidateResultComponent_ng_container_26_Template_form_submit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.saveEmailAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.form.invalid);
        }
      }

      function ValidateResultComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Send a notification to this address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_ng_container_27_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.editEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Edit email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.email.value);
        }
      }

      function ValidateResultComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Enter your email address to receive a notification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ValidateResultComponent_ng_container_28_Template_form_submit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r24.updateEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_ng_container_28_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r26.returnViewMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_ng_container_28_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r27.removeEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.newForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.newEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.newForm.invalid || !ctx_r3.newForm.touched);
        }
      }

      var _c1 = function _c1(a1) {
        return ["/validate", a1];
      };

      var ValidateResultComponent = /*#__PURE__*/function () {
        function ValidateResultComponent(activateRoute, router, validatedIatiService, logger, fb) {
          var _this = this;

          _classCallCheck(this, ValidateResultComponent);

          this.activateRoute = activateRoute;
          this.router = router;
          this.validatedIatiService = validatedIatiService;
          this.logger = logger;
          this.fb = fb;
          this.workspaceId = '';
          this.uploadId = '';
          this.currentUrl = '';
          this.iatiDatasetDatas = [];
          this.md5 = '';
          this.environmentUrl = window.__env.baseUrl;
          this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(100, 2000);
          this.emailMode = 'draft';
          this.newEmail = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
          this.newForm = this.fb.group({
            email: this.newEmail
          });
          this.email = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
          this.form = this.fb.group({
            email: this.email
          });
          this.activateRoute.params.subscribe(function (params) {
            _this.uploadId = params['id'];
          });
          this.subscribeTimer = this.source.subscribe(function (val) {
            _this.loadData();

            if (_this.allDataHasJsonUpdated()) {
              logger.debug('unsubscribe');

              _this.subscribeTimer.unsubscribe();
            }
          });
        }

        _createClass(ValidateResultComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscribeTimer.unsubscribe();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            this.validatedIatiService.getTmpWorkspace(this.uploadId).subscribe(function (data) {
              if (!_this2.email.value && data.email) {
                _this2.email.setValue(data.email);

                _this2.emailMode = 'saved';
              } // this;


              _this2.iatiDatasetDatas = data.datasets;
            }, function (error) {
              return _this2.logger.error('Faild to load iati data', error);
            });
          }
        }, {
          key: "allDataHasJsonUpdated",
          value: function allDataHasJsonUpdated() {
            var _this3 = this;

            if (!this.iatiDatasetDatas.length) {
              return false;
            } else {
              return this.iatiDatasetDatas.every(function (iatiDatasetData) {
                return _this3.jsonUpdated(iatiDatasetData);
              });
            }
          }
        }, {
          key: "jsonUpdated",
          value: function jsonUpdated(inDataset) {
            return !!inDataset['json-updated'];
          }
        }, {
          key: "hasSourceUrl",
          value: function hasSourceUrl(inDataset) {
            return !!inDataset.sourceUrl;
          }
        }, {
          key: "reportType",
          value: function reportType(dataset) {
            return this.jsonUpdated(dataset) ? 'Validation finished (click to view)' : '-';
          }
        }, {
          key: "rowClick",
          value: function rowClick(dataset, id) {
            if (this.jsonUpdated(dataset)) {
              var navigationExtras = {
                queryParams: {
                  isTestfiles: true
                }
              };
              this.router.navigate(['view', 'dqf', 'files', id], navigationExtras);
            }
          }
        }, {
          key: "copyTextToClipboard",
          value: function copyTextToClipboard(_) {
            var txtArea = document.createElement('textarea');
            var url = this.environmentUrl + '/validate/' + this.uploadId;
            txtArea.id = 'txt';
            txtArea.style.position = 'fixed';
            txtArea.style.top = '0';
            txtArea.style.left = '0';
            txtArea.style.opacity = '0';
            txtArea.value = url;
            document.body.appendChild(txtArea);
            txtArea.select();

            try {
              var successful = document.execCommand('copy');
              console.log('Copying text command was ' + url);

              if (successful) {
                return true;
              }
            } catch (err) {
              console.log('Oops, unable to copy');
            } finally {
              document.body.removeChild(txtArea);
            }

            return false;
          }
        }, {
          key: "saveEmailAddress",
          value: function saveEmailAddress() {
            // TODO: added api call
            if (this.form.valid) {
              this.emailMode = 'saved';
              this.validatedIatiService.sendEmail(this.uploadId, this.email.value).subscribe();
            }
          }
        }, {
          key: "editEmail",
          value: function editEmail() {
            this.newEmail.setValue(this.email.value);
            this.emailMode = 'edit';
          }
        }, {
          key: "updateEmail",
          value: function updateEmail() {
            // TODO: added api call
            if (this.newForm.valid) {
              this.email.setValue(this.newEmail.value);
              this.validatedIatiService.sendEmail(this.uploadId, this.newEmail.value).subscribe();
              this.newEmail.reset();
              this.emailMode = 'saved';
            }
          }
        }, {
          key: "returnViewMode",
          value: function returnViewMode() {
            this.newEmail.reset();
            this.emailMode = 'saved';
          }
        }, {
          key: "addMoreFiles",
          value: function addMoreFiles() {
            this.router.navigate(['/validate'], {
              queryParams: {
                tmpWorkspaceId: this.uploadId
              }
            });
          }
        }, {
          key: "removeEmail",
          value: function removeEmail() {
            var _this4 = this;

            this.validatedIatiService.sendEmail(this.uploadId, null).subscribe(function () {
              _this4.newEmail.reset();

              _this4.email.reset();

              _this4.emailMode = 'draft';
            });
          }
        }]);

        return ValidateResultComponent;
      }();

      ValidateResultComponent.ɵfac = function ValidateResultComponent_Factory(t) {
        return new (t || ValidateResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_4__["ValidatedIatiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      ValidateResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ValidateResultComponent,
        selectors: [["app-validate-result"]],
        decls: 29,
        vars: 9,
        consts: [[1, "container", "result-validation"], [1, "content-block"], [3, "routerLink"], [1, "btn", "btn-outline-primary", "ml-2", 3, "click"], ["class", "files", 4, "ngIf"], [1, "btn", "btn-success", "iati-button", "border-radius-none", 3, "click"], [4, "ngIf"], [1, "files"], [1, "row", "heading"], [1, "col-12", "col-md"], [1, "col-12", "col-md", "d-none", "d-md-block"], [4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "row", 3, "ngClass", "click"], [4, "ngIf", "ngIfElse"], ["elseBlock2", ""], ["elseBlock", ""], [1, "col-12", "d-md-none"], ["type", "button", 1, "btn", "btn-link", "dqf-button"], [1, "row"], [1, "email-form", 3, "formGroup", "submit"], ["type", "email", "placeholder", "your email address", 1, "urls-input", 3, "formControl"], ["type", "submit", 1, "btn", "btn-success", "iati-button", "border-radius-none", 3, "disabled"], [1, "saved-email"]],
        template: function ValidateResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Validation results");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Your personal workspace is here: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_Template_button_click_9_listener() {
              return ctx.copyTextToClipboard("text");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Copy the address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "This is where you can see your \u2018Validation Results\u2019.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "You can \u2018Copy the address\u2019 of your personal workplace and access the results later.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ValidateResultComponent_div_15_Template, 9, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " If you want to validate more files, you have the option to do so by clicking \u201CAdd more files\u201D. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Please note that your personal workspace and the files will be deleted 72 hours after uploading and processing all files.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidateResultComponent_Template_button_click_21_listener() {
              return ctx.addMoreFiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Add more files ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " If you have added multiple files and are processing a large amount of data, this can take some time. You can choose the option below for the validator to send you a notification via email once all the validation reports are ready. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ValidateResultComponent_ng_container_26_Template, 8, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ValidateResultComponent_ng_container_27_Template, 7, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ValidateResultComponent_ng_container_28_Template, 11, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.uploadId));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.environmentUrl, "/iati-feedback/validate/", ctx.uploadId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iatiDatasetDatas.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailMode === "draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailMode === "saved");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailMode === "edit");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.files[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 0.15rem;\n  margin-bottom: 5em;\n}\n.files[_ngcontent-%COMP%]    > .heading[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n  padding: 6px 0;\n  font-weight: 700;\n}\n.row[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  margin-right: 0;\n  margin-left: 0;\n  font-size: 1.5em;\n}\n.row.dqf[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #00c497;\n  font-weight: 700;\n}\n.row.dqf[_ngcontent-%COMP%]:hover {\n  background-color: lightyellow;\n}\n.dqf-button[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1em;\n  height: 1em !important;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.link-paragraph[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.result-validation[_ngcontent-%COMP%] {\n  padding-bottom: 5em;\n}\n.content-block[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n  font-size: 1.5em;\n}\n.content-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  padding: 5px 10px;\n  font-size: 0.75em;\n}\nbutton[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n  height: 40px;\n  max-height: 40px;\n}\nbutton[_ngcontent-%COMP%]:disabled:hover, .btn[_ngcontent-%COMP%]:disabled:hover {\n  color: #fff;\n  background-color: #00c497;\n  border-color: #00c497;\n  cursor: initial;\n}\n.saved-email[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.email-form[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.email-form[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n  color: red;\n}\n.email-form[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%]::-moz-placeholder {\n  color: red;\n}\n.email-form[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: red;\n}\n.email-form[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%]::placeholder {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhbGlkYXRlLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSwyQkFBQTtFQUNBLHNCQ2U0QjtFRGQ1QixrQkFBQTtBQTJCRjtBQXhCQTtFQUNFLHlCRHlDUztFQ3hDVCxjQUFBO0VBQ0EsZ0JBQUE7QUEyQkY7QUF4QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTJCRjtBQXpCQTtFQUNFLGVBQUE7RUFDQSxjRFZhO0VDV2IsZ0JBQUE7QUE0QkY7QUF6QkE7RUFDRSw2QkFBQTtBQTRCRjtBQXpCQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUE0QkY7QUF6QkE7RUFDRSxjQUFBO0FBNEJGO0FBekJBO0VBQ0UsZ0JBQUE7QUE0QkY7QUF6QkE7RUFDRSxtQkFBQTtBQTRCRjtBQXpCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUE0QkY7QUExQkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE0Qko7QUF4QkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUEyQkY7QUF4Qkk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUEwQk47QUFyQkE7RUFDRSxpQkFBQTtBQXdCRjtBQXJCQTtFQUNFLGtCQUFBO0FBd0JGO0FBdkJFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBeUJKO0FBdkJJO0VBQ0UsVUFBQTtBQXlCTjtBQTFCSTtFQUNFLFVBQUE7QUF5Qk47QUExQkk7RUFDRSxVQUFBO0FBeUJOIiwiZmlsZSI6InZhbGlkYXRlLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5maWxlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbn1cblxuLmZpbGVzID4gLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0yMDA7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucm93IHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucm93LmRxZiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRzdWNjZXNzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucm93LmRxZjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4uZHFmLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5saW5rLXBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5yZXN1bHQtdmFsaWRhdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuXG4gIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgfVxufVxuXG5idXR0b24sIC5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM0OTc7XG4gICAgICBib3JkZXItY29sb3I6ICMwMGM0OTc7XG4gICAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG59XG5cbi5zYXZlZC1lbWFpbCB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4uZW1haWwtZm9ybSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHJlZDtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXNfaWF0aSc7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSA7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyIDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgO1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41IDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgO1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlIDtcblxuJGJhY2tncm91bmQtdGl0bGU6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4kc2V2ZXJpdHktbm90aWZpY2F0aW9uczogIzE4QkM5QztcblxuLy8gRm9yIHRoZSBEUUYgcmVwb3J0cyBzZXZlcml0eSBsZXZlbFxuJHNldmVyaXR5LWNyaXRpY2FsOiAgICAgICAkaWF0aS13aW5kO1xuJHNldmVyaXR5LWVycm9yOiAgICAgICAgICAkaWF0aS1zdW5zZXQ7XG4kc2V2ZXJpdHktd2FybmluZzogICAgICAgICRpYXRpLXN1bnJpc2U7XG4kc2V2ZXJpdHktaW1wcm92ZW1lbnQ6ICAgICRpYXRpLWFpcjtcbiRzZXZlcml0eS1vcHRpbWlzYXRpb25zOiAgJGlhdGktbGFuZDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjE1cmVtIDtcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "LDRC":
    /*!********************************************************************!*\
      !*** ./src/app/validate-iati/upload-urls/upload-urls.component.ts ***!
      \********************************************************************/

    /*! exports provided: UploadUrlsComponent */

    /***/
    function LDRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadUrlsComponent", function () {
        return UploadUrlsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _validate_iati__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validate-iati */
      "lUe9");
      /* harmony import */


      var _shared_file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../shared/file-upload.service */
      "QxsC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/spinner/spinner.component */
      "f3yp");

      function UploadUrlsComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have one or more incorrect web addresses: \"", ctx_r0.incorrectUrls, "\"");
        }
      }

      function UploadUrlsComponent_div_11_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File(s) uploading failed. Check your files and try again. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function UploadUrlsComponent_div_11_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File(s) have been uploaded successfully ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function UploadUrlsComponent_div_11_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your files are uploading now. Large files could uploading more than few minutes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backColor", "white");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "alert-danger": a0
        };
      };

      function UploadUrlsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadUrlsComponent_div_11_ng_container_2_Template, 2, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadUrlsComponent_div_11_ng_container_3_Template, 2, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadUrlsComponent_div_11_ng_container_4_Template, 3, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.requestStatus === "error"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.requestStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "disable": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "next": a0
        };
      };

      var UploadUrlsComponent = /*#__PURE__*/function () {
        function UploadUrlsComponent(fileUploadService, router) {
          _classCallCheck(this, UploadUrlsComponent);

          this.fileUploadService = fileUploadService;
          this.router = router;
          this.setActiveMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.urls = '';
          this.incorrectUrls = '';
          this.fileName = '';
          this.tmpWorkspaceId = '';
          this.activeStep = ['1'];
          this.requestStatus = 'draft';
        }

        _createClass(UploadUrlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tmpWorkspaceId = this.router.parseUrl(this.router.url).queryParams.tmpWorkspaceId;
          }
        }, {
          key: "setUrl",
          value: function setUrl($event) {
            if ($event.target.value.length) {
              this.setActiveMode.emit(_validate_iati__WEBPACK_IMPORTED_MODULE_2__["Mode"].urls);
              this.activeStep.push('2');
            } else {
              this.incorrectUrls = '';
              this.clear.emit();
              this.activeStep = ['1'];
            }

            this.urls = $event.target.value;
          }
        }, {
          key: "fetchFiles",
          value: function fetchFiles() {
            var _this5 = this;

            var serializedUrls = this.urls.split('|').map(function (url) {
              return url.trim();
            });
            var correctUrls = serializedUrls.filter(this.validateUrl);
            this.incorrectUrls = serializedUrls.filter(function (url) {
              return !_this5.validateUrl(url);
            }).join(' | ');

            if (correctUrls.length && !this.incorrectUrls.length) {
              var urls = correctUrls.slice();

              var handleError = function handleError(error) {
                console.log('error: ', error);
                _this5.requestStatus = 'error';
              };

              this.requestStatus = 'pending';
              this.fileUploadService.checkWorkspaceId(this.tmpWorkspaceId).subscribe(function (response) {
                var tmpWorkspaceId = response.body.id;

                _this5.parallelUpload(urls, tmpWorkspaceId).subscribe(function () {
                  _this5.tmpWorkspaceId = tmpWorkspaceId;
                  _this5.activeStep = ['3'];
                  _this5.requestStatus = 'success';
                }, handleError);
              }, handleError);
            }
          }
        }, {
          key: "isActiveStep",
          value: function isActiveStep(step) {
            return this.activeStep.includes(step);
          }
        }, {
          key: "validateFile",
          value: function validateFile() {
            this.router.navigate(['validate', this.tmpWorkspaceId]);
          }
        }, {
          key: "validateUrl",
          value: function validateUrl(value) {
            // eslint-disable-next-line
            return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
          }
        }, {
          key: "parallelUpload",
          value: function parallelUpload(urls, tmpWorkspaceId) {
            var _this6 = this;

            if (!urls.length) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('skip');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(urls.map(function (url) {
              return _this6.fileUploadService.fetchFileByUrl(url, tmpWorkspaceId);
            }));
          }
        }]);

        return UploadUrlsComponent;
      }();

      UploadUrlsComponent.ɵfac = function UploadUrlsComponent_Factory(t) {
        return new (t || UploadUrlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["FileUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      UploadUrlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UploadUrlsComponent,
        selectors: [["app-upload-urls"]],
        inputs: {
          mode: "mode"
        },
        outputs: {
          setActiveMode: "setActiveMode",
          clear: "clear"
        },
        decls: 17,
        vars: 17,
        consts: [[1, "urls-upload", 3, "ngClass"], [1, "step", 3, "ngClass"], [1, "step-title"], ["placeholder", "enter web address", 1, "urls-input", 3, "disabled", "change"], ["class", "incorrect-urls-warning", 4, "ngIf"], [1, "btn", "btn-success", "iati-button", "border-radius-none", 3, "disabled", "click"], ["class", "alert alert-info message", 3, "ngClass", 4, "ngIf"], [1, "incorrect-urls-warning"], [1, "alert", "alert-info", "message", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "backColor"]],
        template: function UploadUrlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step 1: Add a web address (URL) of your IATI XMLfile. You can add multiple files by seperating them with |");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadUrlsComponent_Template_input_change_4_listener($event) {
              return ctx.setUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UploadUrlsComponent_p_5_Template, 2, 1, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 2: Fetch the files from the web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadUrlsComponent_Template_button_click_9_listener() {
              return ctx.fetchFiles();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadUrlsComponent_div_11_Template, 5, 6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Step 3: Start validating your files");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadUrlsComponent_Template_button_click_15_listener() {
              return ctx.validateFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Validate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.mode !== "both" && ctx.mode === "local"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.isActiveStep("1")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isActiveStep("1") || ctx.mode !== "both" && ctx.mode === "local");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.incorrectUrls.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.isActiveStep("2")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isActiveStep("2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestStatus !== "draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.isActiveStep("3")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isActiveStep("3"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.urls-upload[_ngcontent-%COMP%] {\n  position: relative;\n  top: 17px;\n}\n.disable[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  color: #95a5a6;\n  box-shadow: initial;\n}\n.disable[_ngcontent-%COMP%]   .iati-file-label[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00c497;\n  border-color: #00c497;\n}\n.step[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 24px;\n  border: 1px solid lightgray;\n  min-height: 101px;\n  max-width: 500px;\n  font-size: 1.5em;\n  color: #95a5a6;\n  border-radius: 0.15rem;\n}\n.step[_ngcontent-%COMP%]:first-child {\n  overflow: auto;\n}\n.step[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.step[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-left: 0.5em;\n  border: 2px solid #06dbe4;\n  border-radius: 6px;\n}\n.step[_ngcontent-%COMP%]   .file-name-p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\n.step[_ngcontent-%COMP%]:not(.next)   h5[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.step[_ngcontent-%COMP%]:not(.next)   .iati-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #00c497;\n  border-color: #00c497;\n  cursor: initial;\n}\n.step[_ngcontent-%COMP%]   .alert-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.next[_ngcontent-%COMP%] {\n  border-color: #ff7264;\n  box-shadow: 3px 3px 4px 0px rgba(242, 113, 96, 0.3);\n  color: inherit;\n}\n.file-name[_ngcontent-%COMP%], .urls-input[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 10px;\n  min-width: 30em;\n}\n.incorrect-urls-warning[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #F39C12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL3VwbG9hZC11cmxzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQTJCRjtBQXZCRTtFQUNFLDJCQUFBO0VBQ0EsY0Q0Q087RUMzQ1AsbUJBQUE7QUEwQko7QUF2QkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXlCSjtBQXJCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRDBCUztFQ3pCVCxzQkNWNEI7QURrQzlCO0FBdEJFO0VBQ0UsY0FBQTtBQXdCSjtBQXJCRTtFQUNFLGVBQUE7QUF1Qko7QUFwQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBc0JKO0FBbkJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXFCSjtBQWpCSTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBbUJOO0FBaEJJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBa0JOO0FBZEU7RUFDRSxnQkFBQTtBQWdCSjtBQVpBO0VBQ0UsY0FBQTtBQWVGO0FBWkE7RUFDRSxxQkQvRGE7RUNtRWIsbURBQUE7RUFFQSxjQUFBO0FBYUY7QUFWQTs7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBYUY7QUFWQTtFQUNFLGNBQUE7RUFDQSxjRDFCUTtBQ3VDViIsImZpbGUiOiJ1cGxvYWQtdXJscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi51cmxzLXVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxN3B4O1xufVxuXG4uZGlzYWJsZSB7XG4gIC5zdGVwIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgY29sb3I6ICRncmF5LTYwMDtcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xuICB9XG5cbiAgLmlhdGktZmlsZS1sYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzQ5NztcbiAgICBib3JkZXItY29sb3I6ICMwMGM0OTc7XG4gIH1cbn1cblxuLnN0ZXAge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWluLWhlaWdodDogMTAxcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAkZ3JheS02MDA7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNlbGVjdGVkLWZpbGVzIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNmRiZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLmZpbGUtbmFtZS1wIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmOm5vdCgubmV4dCkge1xuICAgIGg1IHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5pYXRpLWJ1dHRvbjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM0OTc7XG4gICAgICBib3JkZXItY29sb3I6ICMwMGM0OTc7XG4gICAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG5cbiAgLmFsZXJ0LWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLnN0ZXAtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm5leHQge1xuICBib3JkZXItY29sb3I6ICR3YXJuaW5nO1xuXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA0cHggMHB4IHJnYmEoMjQyLCAxMTMsIDk2LCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNHB4IDBweCByZ2JhKDI0MiwgMTEzLCA5NiwgMC4zKTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMHB4IHJnYmEoMjQyLCAxMTMsIDk2LCAwLjMpO1xuXG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZmlsZS1uYW1lLFxuLnVybHMtaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1pbi13aWR0aDogMzBlbTtcbn1cblxuLmluY29ycmVjdC11cmxzLXdhcm5pbmcge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICR5ZWxsb3c7XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXNfaWF0aSc7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSA7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyIDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgO1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41IDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgO1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlIDtcblxuJGJhY2tncm91bmQtdGl0bGU6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4kc2V2ZXJpdHktbm90aWZpY2F0aW9uczogIzE4QkM5QztcblxuLy8gRm9yIHRoZSBEUUYgcmVwb3J0cyBzZXZlcml0eSBsZXZlbFxuJHNldmVyaXR5LWNyaXRpY2FsOiAgICAgICAkaWF0aS13aW5kO1xuJHNldmVyaXR5LWVycm9yOiAgICAgICAgICAkaWF0aS1zdW5zZXQ7XG4kc2V2ZXJpdHktd2FybmluZzogICAgICAgICRpYXRpLXN1bnJpc2U7XG4kc2V2ZXJpdHktaW1wcm92ZW1lbnQ6ICAgICRpYXRpLWFpcjtcbiRzZXZlcml0eS1vcHRpbWlzYXRpb25zOiAgJGlhdGktbGFuZDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjE1cmVtIDtcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "QDjp":
    /*!**************************************************************!*\
      !*** ./src/app/validate-iati/validate/validate.component.ts ***!
      \**************************************************************/

    /*! exports provided: ValidateComponent */

    /***/
    function QDjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateComponent", function () {
        return ValidateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _validate_iati__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../validate-iati */
      "lUe9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../upload-file/upload-file.component */
      "ShaD");
      /* harmony import */


      var _upload_urls_upload_urls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../upload-urls/upload-urls.component */
      "LDRC");

      var _c0 = function _c0(a1) {
        return ["/validate", a1];
      };

      function ValidateComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "<< Return to your workspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r0.tmpWorkspaceId));
        }
      }

      var ValidateComponent = /*#__PURE__*/function () {
        function ValidateComponent(router) {
          _classCallCheck(this, ValidateComponent);

          this.router = router;
          this.environmentUrl = window.__env.baseUrl;
          this.tmpWorkspaceId = this.router.parseUrl(this.router.url).queryParams.tmpWorkspaceId;
        }

        _createClass(ValidateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "setActiveMode",
          value: function setActiveMode(mode) {
            this.mode = mode;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.mode = _validate_iati__WEBPACK_IMPORTED_MODULE_1__["Mode"].both;
          }
        }]);

        return ValidateComponent;
      }();

      ValidateComponent.ɵfac = function ValidateComponent_Factory(t) {
        return new (t || ValidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ValidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ValidateComponent,
        selectors: [["app-validate"]],
        decls: 11,
        vars: 3,
        consts: [[1, "container"], ["class", "content-block", 4, "ngIf"], [1, "row"], [1, "col"], [3, "mode", "setActiveMode", "clear"], [1, "", 2, "margin-top", "5em"], [1, "content-block"], [3, "routerLink"]],
        template: function ValidateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ValidateComponent_div_1_Template, 3, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Check data");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-upload-file", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("setActiveMode", function ValidateComponent_Template_app_upload_file_setActiveMode_6_listener($event) {
              return ctx.setActiveMode($event);
            })("clear", function ValidateComponent_Template_app_upload_file_clear_6_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "OR");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-upload-urls", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("setActiveMode", function ValidateComponent_Template_app_upload_urls_setActiveMode_10_listener($event) {
              return ctx.setActiveMode($event);
            })("clear", function ValidateComponent_Template_app_upload_urls_clear_10_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tmpWorkspaceId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__["UploadFileComponent"], _upload_urls_upload_urls_component__WEBPACK_IMPORTED_MODULE_6__["UploadUrlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".content-block[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhbGlkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InZhbGlkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "QxsC":
    /*!*************************************************************!*\
      !*** ./src/app/validate-iati/shared/file-upload.service.ts ***!
      \*************************************************************/

    /*! exports provided: FileUploadService */

    /***/
    function QxsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileUploadService = /*#__PURE__*/function () {
        function FileUploadService(http) {
          _classCallCheck(this, FileUploadService);

          this.http = http;
          this.workspaceId = '';
          this.urlApiFileUpUpload = window.__env.apiDataworkBench + '/iati-testfiles/file/source';
          this.urlApiUrlsUpload = window.__env.apiDataworkBench + '/iati-testfiles/url/source';
          this.urlApiTestWorkspace = window.__env.apiDataworkBench + '/iati-testworkspaces';
        }

        _createClass(FileUploadService, [{
          key: "checkWorkspaceId",
          value: function checkWorkspaceId(tmpWorkspaceId) {
            if (!tmpWorkspaceId) {
              // create a new iati-testworkspace
              var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.urlApiTestWorkspace, '{}');
              return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3));
            } else {
              // check existing workspace
              var _req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('GET', this.urlApiTestWorkspace + '/' + tmpWorkspaceId);

              return this.http.request(_req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3));
            }
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file, tmpWorkspaceId) {
            if (!file) {
              return null;
            }

            var url = tmpWorkspaceId ? "".concat(this.urlApiTestWorkspace, "/").concat(tmpWorkspaceId, "/file/source") : this.urlApiFileUpUpload;
            var uploadData = new FormData();
            uploadData.append('file', file, file.name);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', url, uploadData);
            return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3));
          }
        }, {
          key: "fetchFileByUrl",
          value: function fetchFileByUrl(fileUrl, tmpWorkspaceId) {
            var url = tmpWorkspaceId ? "".concat(this.urlApiTestWorkspace, "/").concat(tmpWorkspaceId, "/url/source") : this.urlApiUrlsUpload;
            return this.http.post(url, JSON.stringify({
              url: fileUrl
            }), {
              headers: {
                'Content-Type': 'application/json' // eslint-disable-line @typescript-eslint/naming-convention

              },
              responseType: 'json'
            });
          }
        }, {
          key: "setWorkspaceId",
          value: function setWorkspaceId(id) {
            this.workspaceId = id;
          }
        }]);

        return FileUploadService;
      }();

      FileUploadService.ɵfac = function FileUploadService_Factory(t) {
        return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: FileUploadService,
        factory: FileUploadService.ɵfac
      });
      /***/
    },

    /***/
    "ShaD":
    /*!********************************************************************!*\
      !*** ./src/app/validate-iati/upload-file/upload-file.component.ts ***!
      \********************************************************************/

    /*! exports provided: UploadFileComponent */

    /***/
    function ShaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
        return UploadFileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _validate_iati__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../validate-iati */
      "lUe9");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../shared/file-upload.service */
      "QxsC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/spinner/spinner.component */
      "f3yp");

      function UploadFileComponent_section_7_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r5.name, " ");
        }
      }

      function UploadFileComponent_section_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadFileComponent_section_7_p_1_Template, 2, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedFiles);
        }
      }

      function UploadFileComponent_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Browse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadFileComponent_ng_container_8_ng_container_2_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.isActiveStep("1") || ctx_r6.mode !== "both" && ctx_r6.mode === "urls");
        }
      }

      function UploadFileComponent_ng_container_8_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadFileComponent_ng_container_8_ng_template_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.clearFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isActiveStep("1"));
        }
      }

      function UploadFileComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadFileComponent_ng_container_8_ng_container_2_Template, 4, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadFileComponent_ng_container_8_ng_template_3_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedFiles.length)("ngIfElse", _r7);
        }
      }

      function UploadFileComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadFileComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.uploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.isActiveStep("2"));
        }
      }

      function UploadFileComponent_div_13_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File(s) uploading failed. Check your files and try again. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function UploadFileComponent_div_13_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File(s) have been uploaded successfully ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function UploadFileComponent_div_13_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your files are uploading now. Large files could uploading more than few minutes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backColor", "white");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "alert-danger": a0
        };
      };

      function UploadFileComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadFileComponent_div_13_ng_container_2_Template, 2, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadFileComponent_div_13_ng_container_3_Template, 2, 0, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadFileComponent_div_13_ng_container_4_Template, 3, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.requestStatus === "error"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r3.requestStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "disable": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "next": a0
        };
      };

      var UploadFileComponent = /*#__PURE__*/function () {
        function UploadFileComponent(logger, router, fileUploadService) {
          _classCallCheck(this, UploadFileComponent);

          this.logger = logger;
          this.router = router;
          this.fileUploadService = fileUploadService;
          this.setActiveMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedFiles = [];
          this.workspaceId = '';
          this.tmpWorkspaceId = '';
          this.fileUploaded = false;
          this.requestStatus = 'draft';
          this.fetchUrl = '';
          this.activeStep = ['1'];
        }

        _createClass(UploadFileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tmpWorkspaceId = this.router.parseUrl(this.router.url).queryParams.tmpWorkspaceId;
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            this.requestStatus = 'draft';
            this.setActiveMode.emit(_validate_iati__WEBPACK_IMPORTED_MODULE_2__["Mode"].local);
            this.selectedFiles = event.target.files;
            this.activeStep.push('2');
          }
        }, {
          key: "uploadFile",
          value: function uploadFile() {
            var _this7 = this;

            var files = Array.prototype.slice.call(this.selectedFiles);

            var handleError = function handleError(error) {
              // this.logger.debug('Error message component: ', error);
              _this7.requestStatus = 'error';
            };

            if (files.length) {
              this.requestStatus = 'pending';
              this.fileUploadService.checkWorkspaceId(this.tmpWorkspaceId).subscribe(function (response) {
                var tmpWorkspaceId = response.body.id;

                _this7.parallelUpload(files, tmpWorkspaceId).subscribe(function () {
                  _this7.tmpWorkspaceId = tmpWorkspaceId;
                  _this7.activeStep = ['3'];
                  _this7.requestStatus = 'success';
                }, handleError);
              }, handleError);
            }
          }
        }, {
          key: "validateFile",
          value: function validateFile() {
            this.router.navigate(['validate', this.tmpWorkspaceId]);
          }
        }, {
          key: "clearFiles",
          value: function clearFiles() {
            this.clear.emit();
            this.selectedFiles = [];
            this.activeStep = ['1'];
          }
        }, {
          key: "isActiveStep",
          value: function isActiveStep(step) {
            return this.activeStep.includes(step);
          }
        }, {
          key: "parallelUpload",
          value: function parallelUpload(files, tmpWorkspaceId) {
            var _this8 = this;

            if (!files.length) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('skip');
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(files.map(function (file) {
              return _this8.fileUploadService.uploadFile(file, tmpWorkspaceId);
            }));
          }
        }]);

        return UploadFileComponent;
      }();

      UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) {
        return new (t || UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_file_upload_service__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"]));
      };

      UploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UploadFileComponent,
        selectors: [["app-upload-file"]],
        inputs: {
          mode: "mode"
        },
        outputs: {
          setActiveMode: "setActiveMode",
          clear: "clear"
        },
        decls: 19,
        vars: 17,
        consts: [[3, "ngClass"], [1, "step", 3, "ngClass"], [1, "step-title"], [1, "row"], ["class", "col selected-files", 4, "ngIf"], [4, "ngIf"], ["class", "btn btn-success iati-button border-radius-none", 3, "disabled", "click", 4, "ngIf"], ["class", "alert alert-info message", 3, "ngClass", 4, "ngIf"], [1, "btn", "btn-success", "iati-button", "border-radius-none", 3, "disabled", "click"], [1, "col", "selected-files"], ["class", "file-name-p", 4, "ngFor", "ngForOf"], [1, "file-name-p"], [1, "col"], [4, "ngIf", "ngIfElse"], ["clearState", ""], ["for", "file-upload", 1, "btn", "btn-success", "iati-button", "border-radius-none", "iati-file-label"], ["id", "file-upload", "type", "file", "accept", ".xml", "multiple", "", 3, "disabled", "change"], [1, "alert", "alert-info", "message", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "backColor"]],
        template: function UploadFileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload your IATI file and receive validation feedback.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Step 1: Select your IATI files. You can select multiple files at the same time.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UploadFileComponent_section_7_Template, 2, 1, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadFileComponent_ng_container_8_Template, 5, 2, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Step 2: Upload your IATI files");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UploadFileComponent_button_12_Template, 2, 1, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UploadFileComponent_div_13_Template, 5, 6, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Step 3: Start validating your files");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadFileComponent_Template_button_click_17_listener() {
              return ctx.validateFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Validate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.mode !== "both" && ctx.mode === "urls"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.isActiveStep("1")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFiles.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActiveStep("3"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.isActiveStep("2")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActiveStep("3"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestStatus !== "draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.isActiveStep("3")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isActiveStep("3"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.disable[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  color: #95a5a6;\n  opacity: 0.5;\n  box-shadow: initial;\n}\n.disable[_ngcontent-%COMP%]   .iati-file-label[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00c497;\n  border-color: #00c497;\n}\n.step[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 24px;\n  min-height: 100px;\n  border: 1px solid lightgray;\n  max-width: 500px;\n  font-size: 1.5em;\n  color: #95a5a6;\n  border-radius: 0.15rem;\n}\n.step[_ngcontent-%COMP%]:first-child {\n  overflow: auto;\n}\n.step[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.step[_ngcontent-%COMP%]   .selected-files[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-left: 0.5em;\n  border: 2px solid #06dbe4;\n  border-radius: 6px;\n}\n.step[_ngcontent-%COMP%]   .file-name-p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\n.step[_ngcontent-%COMP%]:not(.next)   h5[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.step[_ngcontent-%COMP%]:not(.next)   .iati-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #00c497;\n  border-color: #00c497;\n  cursor: initial;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.next[_ngcontent-%COMP%] {\n  border-color: #ff7264;\n  box-shadow: 3px 3px 4px 0px rgba(242, 113, 96, 0.3);\n  color: inherit;\n}\n.name-file[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.message[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n#file-upload[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXhCRTtFQUNFLDJCQUFBO0VBQ0EsY0RpRE87RUNoRFAsWUFBQTtFQUNBLG1CQUFBO0FBMEJKO0FBdkJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF5Qko7QUFyQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Q4QlM7RUM3QlQsc0JDTjRCO0FEOEI5QjtBQXRCRTtFQUNFLGNBQUE7QUF3Qko7QUFyQkU7RUFDRSxlQUFBO0FBdUJKO0FBcEJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXNCSjtBQW5CRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxQko7QUFqQkk7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQW1CTjtBQWhCSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWtCTjtBQWJBO0VBQ0UsY0FBQTtBQWdCRjtBQWJBO0VBQ0UscUJEdkRhO0VDMkRiLG1EQUFBO0VBRUEsY0FBQTtBQWNGO0FBWEE7RUFDRSxnQkFBQTtBQWNGO0FBWEE7RUFDRSxjQUFBO0FBY0Y7QUFYQTtFQUNFLGFBQUE7QUFjRiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5kaXNhYmxlIHtcbiAgLnN0ZXAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBjb2xvcjogJGdyYXktNjAwO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbml0aWFsO1xuICB9XG5cbiAgLmlhdGktZmlsZS1sYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzQ5NztcbiAgICBib3JkZXItY29sb3I6ICMwMGM0OTc7XG4gIH1cbn1cblxuLnN0ZXAge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAkZ3JheS02MDA7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNlbGVjdGVkLWZpbGVzIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNmRiZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLmZpbGUtbmFtZS1wIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmOm5vdCgubmV4dCkge1xuICAgIGg1IHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5pYXRpLWJ1dHRvbjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM0OTc7XG4gICAgICBib3JkZXItY29sb3I6ICMwMGM0OTc7XG4gICAgICBjdXJzb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG59XG5cbi5zdGVwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5uZXh0IHtcbiAgYm9yZGVyLWNvbG9yOiAkd2FybmluZztcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNHB4IDBweCByZ2JhKDI0MiwgMTEzLCA5NiwgMC4zKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDRweCAwcHggcmdiYSgyNDIsIDExMywgOTYsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDBweCByZ2JhKDI0MiwgMTEzLCA5NiwgMC4zKTtcblxuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm5hbWUtZmlsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbiNmaWxlLXVwbG9hZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXNfaWF0aSc7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSA7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyIDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgO1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41IDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgO1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlIDtcblxuJGJhY2tncm91bmQtdGl0bGU6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4kc2V2ZXJpdHktbm90aWZpY2F0aW9uczogIzE4QkM5QztcblxuLy8gRm9yIHRoZSBEUUYgcmVwb3J0cyBzZXZlcml0eSBsZXZlbFxuJHNldmVyaXR5LWNyaXRpY2FsOiAgICAgICAkaWF0aS13aW5kO1xuJHNldmVyaXR5LWVycm9yOiAgICAgICAgICAkaWF0aS1zdW5zZXQ7XG4kc2V2ZXJpdHktd2FybmluZzogICAgICAgICRpYXRpLXN1bnJpc2U7XG4kc2V2ZXJpdHktaW1wcm92ZW1lbnQ6ICAgICRpYXRpLWFpcjtcbiRzZXZlcml0eS1vcHRpbWlzYXRpb25zOiAgJGlhdGktbGFuZDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjE1cmVtIDtcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "XQMz":
    /*!****************************************************************!*\
      !*** ./src/app/validate-iati/shared/validated-iati.service.ts ***!
      \****************************************************************/

    /*! exports provided: ValidatedIatiService */

    /***/
    function XQMz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatedIatiService", function () {
        return ValidatedIatiService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ValidatedIatiService = /*#__PURE__*/function () {
        function ValidatedIatiService(logger, http) {
          _classCallCheck(this, ValidatedIatiService);

          this.logger = logger;
          this.http = http;
          this.urlApiIatiDataset = window.__env.apiDataworkBench + '/iati-testdatasets';

          this.urlApiTmpWorkspace = function (id) {
            return "".concat(window.__env.apiDataworkBench, "/iati-testworkspaces/").concat(id);
          };
        }

        _createClass(ValidatedIatiService, [{
          key: "getIatiDataset",
          value: function getIatiDataset(workspaceId) {
            var _this9 = this;

            var url = this.urlApiIatiDataset + '/?filter[where][tmpworkspaceId]=' + workspaceId;
            this.logger.debug(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this9.logger.debug("fetched iati dataset");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiDataset', undefined)));
          }
        }, {
          key: "getIatiDatasetById",
          value: function getIatiDatasetById(inUploadId) {
            var _this10 = this;

            var url = this.urlApiIatiDataset + '/' + inUploadId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this10.logger.debug("fetched iati dataset");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiDataset', undefined)));
          } // TODO: replace any

        }, {
          key: "getTmpWorkspace",
          value: function getTmpWorkspace(workspaceId) {
            var url = this.urlApiTmpWorkspace(workspaceId);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getTmpWorkspace', undefined)));
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(id, email) {
            return this.http.patch(this.urlApiTmpWorkspace(id), {
              email: email
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('sendEmail', undefined)));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           *
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this11 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging
              _this11.logger.error(error); // TODO: better job of transforming error for user consumption
              // this.log(`${operation} failed: ${error.message}`);
              // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
            };
          }
        }]);

        return ValidatedIatiService;
      }();

      ValidatedIatiService.ɵfac = function ValidatedIatiService_Factory(t) {
        return new (t || ValidatedIatiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      ValidatedIatiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ValidatedIatiService,
        factory: ValidatedIatiService.ɵfac
      });
      /***/
    },

    /***/
    "lUe9":
    /*!************************************************!*\
      !*** ./src/app/validate-iati/validate-iati.ts ***!
      \************************************************/

    /*! exports provided: Mode */

    /***/
    function lUe9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mode", function () {
        return Mode;
      });

      var Mode;

      (function (Mode) {
        Mode["local"] = "local";
        Mode["urls"] = "urls";
        Mode["both"] = "both";
      })(Mode || (Mode = {}));
      /***/

    },

    /***/
    "oE6s":
    /*!*******************************************************!*\
      !*** ./src/app/validate-iati/validate-iati.module.ts ***!
      \*******************************************************/

    /*! exports provided: ValidateIatiModule */

    /***/
    function oE6s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateIatiModule", function () {
        return ValidateIatiModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _shared_file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/file-upload.service */
      "QxsC");
      /* harmony import */


      var _shared_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/messages.service */
      "zO0A");
      /* harmony import */


      var _shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/validated-iati.service */
      "XQMz");
      /* harmony import */


      var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./upload-file/upload-file.component */
      "ShaD");
      /* harmony import */


      var _upload_urls_upload_urls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./upload-urls/upload-urls.component */
      "LDRC");
      /* harmony import */


      var _validate_result_validate_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./validate-result/validate-result.component */
      "8CDe");
      /* harmony import */


      var _validate_validate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./validate/validate.component */
      "QDjp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _validate_validate_component__WEBPACK_IMPORTED_MODULE_10__["ValidateComponent"]
      }, {
        path: ':id',
        component: _validate_result_validate_result_component__WEBPACK_IMPORTED_MODULE_9__["ValidateResultComponent"]
      }];

      var ValidateIatiModule = function ValidateIatiModule() {
        _classCallCheck(this, ValidateIatiModule);
      };

      ValidateIatiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: ValidateIatiModule
      });
      ValidateIatiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function ValidateIatiModule_Factory(t) {
          return new (t || ValidateIatiModule)();
        },
        providers: [_shared_file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"], _shared_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"], _shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_6__["ValidatedIatiService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ValidateIatiModule, {
          declarations: [_validate_validate_component__WEBPACK_IMPORTED_MODULE_10__["ValidateComponent"], _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileComponent"], _validate_result_validate_result_component__WEBPACK_IMPORTED_MODULE_9__["ValidateResultComponent"], _upload_urls_upload_urls_component__WEBPACK_IMPORTED_MODULE_8__["UploadUrlsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "zO0A":
    /*!**********************************************************!*\
      !*** ./src/app/validate-iati/shared/messages.service.ts ***!
      \**********************************************************/

    /*! exports provided: MessagesService */

    /***/
    function zO0A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService() {
          _classCallCheck(this, MessagesService);

          this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.messagesLocal = [];
        }

        _createClass(MessagesService, [{
          key: "add",
          value: function add(message) {
            this.messagesLocal.push(message);
            this.messages.next(this.messagesLocal.slice());
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messagesLocal = [];
            this.messages.next(this.messagesLocal.slice());
          }
        }]);

        return MessagesService;
      }();

      MessagesService.ɵfac = function MessagesService_Factory(t) {
        return new (t || MessagesService)();
      };

      MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: MessagesService,
        factory: MessagesService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~validate-iati-validate-iati-module~views-data-quality-feedback-data-quality-feedback-module-es5.js.map