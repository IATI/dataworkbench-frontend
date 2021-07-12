(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-data-quality-feedback-data-quality-feedback-module"], {
    /***/
    "1gXX":
    /*!**************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/feedback-item/feedback-item.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: FeedbackItemComponent */

    /***/
    function gXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackItemComponent", function () {
        return FeedbackItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/data-quality-feedback.service */
      "pqb9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FeedbackItemComponent_li_4_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var con_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r3.text);
        }
      }

      function FeedbackItemComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeedbackItemComponent_li_4_li_6_Template, 2, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mes_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("message ", ctx_r0.getfeedbackColor(mes_r1), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mes_r1.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", mes_r1.context.length === 1 && mes_r1.context[0].text === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mes_r1.context);
        }
      }

      var FeedbackItemComponent = /*#__PURE__*/function () {
        function FeedbackItemComponent(dataQualityFeedbackService) {
          var _this = this;

          _classCallCheck(this, FeedbackItemComponent);

          this.dataQualityFeedbackService = dataQualityFeedbackService;

          this.sortData = function () {
            // Sort the messages based on severity
            _this.feedback.errors.sort(_this.compareSeverity);
          };

          this.compareSeverity = function (a, b) {
            return _this.getSeverity(a) - _this.getSeverity(b);
          };

          this.getSeverity = function (message) {
            if (message.severity === 'critical') {
              return 1;
            } else if (message.severity === 'error') {
              return 2;
            } else if (message.severity === 'warning') {
              return 2;
            } else if (message.severity === 'info') {
              return 3;
            } else if (message.severity === 'success') {
              return 4;
            } else {
              return 9;
            }
          };
        }

        _createClass(FeedbackItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortData();
          }
        }, {
          key: "getfeedbackColor",
          value: function getfeedbackColor(message) {
            if (message.severity === 'error') {
              return 'error';
            } else if (message.severity === 'critical') {
              return 'critical';
            } else if (message.severity === 'warning') {
              return 'warning';
            } else if (message.severity === 'info') {
              return 'improvement';
            } else if (message.severity === 'success') {
              return 'notification';
            } else {
              return 'other';
            }
          }
        }, {
          key: "getCategoryLabel",
          value: function getCategoryLabel(category) {
            return this.dataQualityFeedbackService.getCategoryLabel(category);
          }
        }]);

        return FeedbackItemComponent;
      }();

      FeedbackItemComponent.ɵfac = function FeedbackItemComponent_Factory(t) {
        return new (t || FeedbackItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_1__["DataQualityFeedbackService"]));
      };

      FeedbackItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeedbackItemComponent,
        selectors: [["app-feedback-item"]],
        inputs: {
          feedback: "feedback"
        },
        decls: 5,
        vars: 2,
        consts: [[1, "feedback"], [1, "category-label"], [1, "feedback-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "message-text"], [1, "message-id", "d-inline", "float-right"], [3, "hidden"], ["class", "context", 4, "ngFor", "ngForOf"], [1, "context"]],
        template: function FeedbackItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedbackItemComponent_li_4_Template, 7, 7, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.feedback.category));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feedback.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.category-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.feedback[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 12px;\n  color: black;\n  margin-bottom: 4px;\n  background-color: #ecf0f1;\n}\n.message-text[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.feedback-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.critical[_ngcontent-%COMP%] {\n  border-left: 6px solid #a66ee9;\n}\n.error[_ngcontent-%COMP%] {\n  border-left: 6px solid #f73357;\n}\n.warning[_ngcontent-%COMP%] {\n  border-left: 6px solid #ff7264;\n}\n.improvement[_ngcontent-%COMP%] {\n  border-left: 6px solid #06dbe4;\n}\n.notification[_ngcontent-%COMP%] {\n  border-left: 6px solid #18BC9C;\n}\n.context[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZlZWRiYWNrLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBMkJGO0FBeEJBO0VBQ0UsVUFBQTtBQTJCRjtBQXhCQTtFQUNFLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFHQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkQ4QlM7QUNOWDtBQXJCQTtFQUNFLHFCQUFBO0FBd0JGO0FBckJBO0VBQ0UscUJBQUE7QUF3QkY7QUFyQkE7RUFDRSw4QkFBQTtBQXdCRjtBQXJCQTtFQUVFLDhCQUFBO0FBdUJGO0FBckJBO0VBSUUsOEJBQUE7QUFxQkY7QUFuQkE7RUFHRSw4QkFBQTtBQW9CRjtBQWpCQTtFQUlFLDhCQUFBO0FBaUJGO0FBZEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQkYiLCJmaWxlIjoiZmVlZGJhY2staXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5jYXRlZ29yeS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZmVlZGJhY2sgPiB1bCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBmb250LXdlaWdodDogNzAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxMnB4O1xuXG4gIC8vIE5ld1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMjAwO1xufVxuXG4ubWVzc2FnZS10ZXh0e1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5mZWVkYmFjay1saXN0e1xuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbn1cblxuLmNyaXRpY2Fse1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRzZXZlcml0eS1jcml0aWNhbDtcbn1cblxuLmVycm9yIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM1NztcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjZjczMzU3O1xufVxuLndhcm5pbmcge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktd2FybmluZztcbiAgLy8gY29sb3I6IHdoaXRlO1xuXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJHNldmVyaXR5LXdhcm5pbmc7XG59XG4uaW1wcm92ZW1lbnQge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktaW1wcm92ZW1lbnQ7XG4gIC8vY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRzZXZlcml0eS1pbXByb3ZlbWVudDtcblxufVxuLm5vdGlmaWNhdGlvbiB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcblxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRzZXZlcml0eS1ub3RpZmljYXRpb25zO1xufVxuXG4uY29udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "2Sxr":
    /*!****************************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-severity-item/filter-severity-item.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: FilterSeverityItemComponent */

    /***/
    function Sxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSeverityItemComponent", function () {
        return FilterSeverityItemComponent;
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


      var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/checkbox/checkbox.component */
      "8YuN");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../filter-type-message/filter-type-message.component */
      "rP87");

      function FilterSeverityItemComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", ctx_r0.totalTypesSelected(), " of ", ctx_r0.totalTypes(), " messages selected.) ");
        }
      }

      function FilterSeverityItemComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterSeverityItemComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterSeverityItemComponent_li_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterSeverityItemComponent_li_12_span_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.unSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unselect all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterSeverityItemComponent_li_12_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterSeverityItemComponent_li_12_span_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.selectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterSeverityItemComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterSeverityItemComponent_li_12_span_2_Template, 3, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterSeverityItemComponent_li_12_span_3_Template, 3, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.severity.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.allSelected());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.allSelected());
        }
      }

      function FilterSeverityItemComponent_app_filter_type_message_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-type-message", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function FilterSeverityItemComponent_app_filter_type_message_13_Template_app_filter_type_message_selectedChanged_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mes_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("typeMessage", mes_r11);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "hidden": a0
        };
      };

      var FilterSeverityItemComponent = /*#__PURE__*/function () {
        function FilterSeverityItemComponent() {
          _classCallCheck(this, FilterSeverityItemComponent);

          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isCollapsed = true;
        }

        _createClass(FilterSeverityItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.severity.types.sort( (a, b) =>  b.count - a.count );
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
          }
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.severity.types.every(function (x) {
              return x.show === true;
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.severity.types.forEach(function (x) {
              return x.show = true;
            });
            this.selectionChanged();
          }
        }, {
          key: "unSelectAll",
          value: function unSelectAll() {
            this.severity.types.forEach(function (x) {
              return x.show = false;
            });
            this.selectionChanged();
          }
        }, {
          key: "totalTypes",
          value: function totalTypes() {
            return this.severity.types.length;
          }
        }, {
          key: "totalTypesSelected",
          value: function totalTypesSelected() {
            var count = 0;
            this.severity.types.forEach(function (x) {
              if (x.show === true) {
                count++;
              }
            });
            return count;
          }
        }]);

        return FilterSeverityItemComponent;
      }();

      FilterSeverityItemComponent.ɵfac = function FilterSeverityItemComponent_Factory(t) {
        return new (t || FilterSeverityItemComponent)();
      };

      FilterSeverityItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterSeverityItemComponent,
        selectors: [["app-filter-severity-item"]],
        inputs: {
          severity: "severity"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 14,
        vars: 14,
        consts: [[1, "list-group-item", 3, "className", "ngClass"], [1, "severity-heading", "row"], [1, "col", "title-col", 3, "click"], ["ngClass", "{'unselected':!severity.show}"], ["class", "badge badge-light text-danger float-right messages-selected-count", 4, "ngIf"], [1, "col-auto", "collapse-col"], [3, "checked", "name", "checkedChange"], ["type", "button", 1, "btn", "btn-outline-light", "collapser", 3, "click"], [4, "ngIf"], [1, "type-messages", 3, "ngbCollapse"], ["class", "list-group-item filter-row", 4, "ngIf"], [3, "typeMessage", "selectedChanged", 4, "ngFor", "ngForOf"], [1, "badge", "badge-light", "text-danger", "float-right", "messages-selected-count"], ["src", "assets/icons/arrow_down_24_white.svg", "alt", "icon arrow down"], ["src", "assets/icons/arrow_up_24_white.svg", "alt", "icon arrow up"], [1, "list-group-item", "filter-row"], ["class", "show-label", 4, "ngIf"], [1, "show-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [3, "typeMessage", "selectedChanged"]],
        template: function FilterSeverityItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterSeverityItemComponent_Template_div_click_2_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterSeverityItemComponent_span_5_Template, 2, 2, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function FilterSeverityItemComponent_Template_app_checkbox_checkedChange_7_listener($event) {
              return ctx.severity.show = $event;
            })("checkedChange", function FilterSeverityItemComponent_Template_app_checkbox_checkedChange_7_listener() {
              return ctx.selectionChanged();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterSeverityItemComponent_Template_button_click_8_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterSeverityItemComponent_span_9_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterSeverityItemComponent_span_10_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FilterSeverityItemComponent_li_12_Template, 4, 3, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FilterSeverityItemComponent_app_filter_type_message_13_Template, 1, 1, "app-filter-type-message", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "list-group-item " + ctx.severity.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.severity.types.length === 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.severity.name, ": ", ctx.severity.types.length, " types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.severity.show)("name", "filterSrc" + ctx.severity.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.severity.types.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.severity.types);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_4__["FilterTypeMessageComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.critical[_ngcontent-%COMP%] {\n  background-color: #a66ee9;\n  color: white;\n}\n.error[_ngcontent-%COMP%] {\n  background-color: #f73357;\n  color: white;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #ff7264;\n  color: white;\n}\n.improvement[_ngcontent-%COMP%] {\n  background-color: #06dbe4;\n  color: white;\n}\n.notification[_ngcontent-%COMP%] {\n  background-color: #18BC9C;\n  color: white;\n}\n.severity-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 28px;\n  margin-right: 6px;\n  text-align: right;\n}\n.select[_ngcontent-%COMP%] {\n  margin-right: -10px;\n  float: right;\n}\n.unselected[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.title-col[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.btn.collapser[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 0;\n  line-height: 1;\n  text-shadow: none;\n  opacity: 0.7;\n  border-style: none;\n}\n.btn.collapser[_ngcontent-%COMP%]:hover {\n  background-color: inherit;\n}\n.btn.collapser[_ngcontent-%COMP%]:focus, .btn.collapser.focus[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n.filter-row[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  color: #95a5a6;\n}\n.messages-selected-count[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci1zZXZlcml0eS1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLHlCRE9hO0VDTmIsWUFBQTtBQTJCRjtBQXhCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQTJCRjtBQXpCQTtFQUNFLHlCRERhO0VDRWIsWUFBQTtBQTRCRjtBQTFCQTtFQUNFLHlCRFBhO0VDUWIsWUFBQTtBQTZCRjtBQTNCQTtFQUNFLHlCQ1Z1QjtFRFd2QixZQUFBO0FBOEJGO0FBM0JBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQThCRjtBQTFCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQTZCRjtBQTFCQTtFQUNFLDZCQUFBO0FBNkJGO0FBekJBO0VBQ0UsYUFBQTtBQTRCRjtBQXpCQTtFQUNFLGVBQUE7QUE0QkY7QUF6QkE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFHQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwQkY7QUF2QkE7RUFDRSx5QkFBQTtBQTBCRjtBQXZCQTtFQUNFLGdCQUFBO0FBMEJGO0FBdkJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBMEJGO0FBdkJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUEwQkY7QUF2QkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSxjRDdCUztBQ3VEWDtBQXZCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQTBCRiIsImZpbGUiOiJmaWx0ZXItc2V2ZXJpdHktaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5jcml0aWNhbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldmVyaXR5LWNyaXRpY2FsO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3MzM1NztcbiAgY29sb3I6IHdoaXRlO1xufVxuLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktd2FybmluZztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltcHJvdmVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldmVyaXR5LWltcHJvdmVtZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNldmVyaXR5LWNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuXG4uc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udW5zZWxlY3RlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGl0bGUtY29sIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLmNvbGxhcHNlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nOiAwO1xuICAvLyBmb250LXNpemU6IDEuNDA2MjVyZW07XG4gIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgb3BhY2l0eTogLjc7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmJ0bi5jb2xsYXBzZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uYnRuLmNvbGxhcHNlcjpmb2N1cywgLmJ0bi5jb2xsYXBzZXIuZm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2hvdy1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLnNob3ctbGFiZWwgLmJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLmZpbHRlci1yb3cge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBjb2xvcjogJGdyYXktNjAwO1xufVxuXG4ubWVzc2FnZXMtc2VsZWN0ZWQtY291bnQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogNnB4O1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "6/3i":
    /*!******************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/iati-info/iati-info.component.ts ***!
      \******************************************************************************/

    /*! exports provided: IatiInfoComponent */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IatiInfoComponent", function () {
        return IatiInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function IatiInfoComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("IATI version: ", ctx_r0.validationReport.iatiVersion, "");
        }
      }

      function IatiInfoComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | Type: ", ctx_r1.validationReport.fileType, "");
        }
      }

      function IatiInfoComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | Report Generated: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.documentInfo.validation_created, "yyyy-MM-dd HH:mm (z)"), "");
        }
      }

      var IatiInfoComponent = /*#__PURE__*/function () {
        function IatiInfoComponent() {
          _classCallCheck(this, IatiInfoComponent);

          this.validationReport = {};
          this.documentInfo = {};
        }

        _createClass(IatiInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fileName",
          value: function fileName() {
            if ('url' in this.documentInfo) {
              return this.documentInfo.url.split('/').pop();
            } else {
              return 'No filename available';
            }
          }
        }]);

        return IatiInfoComponent;
      }();

      IatiInfoComponent.ɵfac = function IatiInfoComponent_Factory(t) {
        return new (t || IatiInfoComponent)();
      };

      IatiInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IatiInfoComponent,
        selectors: [["app-iati-info"]],
        inputs: {
          validationReport: "validationReport",
          documentInfo: "documentInfo"
        },
        decls: 4,
        vars: 3,
        consts: [[4, "ngIf"]],
        template: function IatiInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IatiInfoComponent_span_1_Template, 2, 1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IatiInfoComponent_span_2_Template, 2, 1, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IatiInfoComponent_span_3_Template, 3, 4, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationReport.iatiVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationReport.fileType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentInfo.validation_created);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpYXRpLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "8YuN":
    /*!***********************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/shared/checkbox/checkbox.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CheckboxComponent */

    /***/
    function YuN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
        return CheckboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["*"];

      var CheckboxComponent = /*#__PURE__*/function () {
        function CheckboxComponent() {
          _classCallCheck(this, CheckboxComponent);

          this.checked = false;
          this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // unique name is necessary for the input control

          this.name = '';
        }

        _createClass(CheckboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkedChanged",
          value: function checkedChanged() {
            this.checkedChange.emit(this.checked);
          }
        }]);

        return CheckboxComponent;
      }();

      CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
        return new (t || CheckboxComponent)();
      };

      CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxComponent,
        selectors: [["app-checkbox"]],
        inputs: {
          checked: "checked",
          name: "name"
        },
        outputs: {
          checkedChange: "checkedChange"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 4,
        consts: [[1, "custom-control", "custom-checkbox", "d-inline"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], [1, "custom-control-label"]],
        template: function CheckboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.checked = $event;
            })("change", function CheckboxComponent_Template_input_change_1_listener() {
              return ctx.checkedChanged();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.name)("name", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.name);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "BoPX":
    /*!****************************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-type-severity/filter-type-severity.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: FilterTypeSeverityComponent */

    /***/
    function BoPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTypeSeverityComponent", function () {
        return FilterTypeSeverityComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../filter-type-message/filter-type-message.component */
      "rP87");

      function FilterTypeSeverityComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterTypeSeverityComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterTypeSeverityComponent_app_filter_type_message_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-type-message", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function FilterTypeSeverityComponent_app_filter_type_message_12_Template_app_filter_type_message_selectedChanged_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mes_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("typeMessage", mes_r3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "hidden": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "unselected": a0
        };
      };

      var FilterTypeSeverityComponent = /*#__PURE__*/function () {
        function FilterTypeSeverityComponent() {
          _classCallCheck(this, FilterTypeSeverityComponent);

          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isCollapsed = true;
        }

        _createClass(FilterTypeSeverityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.type.types.sort(function (a, b) {
              return b.count - a.count;
            });
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
          }
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.type.types.every(function (x) {
              return x.show === true;
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.type.types.forEach(function (x) {
              return x.show = true;
            });
            this.selectionChanged();
          }
        }]);

        return FilterTypeSeverityComponent;
      }();

      FilterTypeSeverityComponent.ɵfac = function FilterTypeSeverityComponent_Factory(t) {
        return new (t || FilterTypeSeverityComponent)();
      };

      FilterTypeSeverityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterTypeSeverityComponent,
        selectors: [["app-filter-type-severity"]],
        inputs: {
          type: "type"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 13,
        vars: 13,
        consts: [[1, "list-group-item", 3, "className", "ngClass"], [1, "type-heading", "row"], [1, "col", "title-col", 3, "click"], [1, "severity-count"], [3, "ngClass"], [1, "col-auto", "collapse-col"], ["type", "button", 1, "btn", "btn-outline-light", "collapser", 3, "click"], [4, "ngIf"], [1, "type-messages", 3, "ngbCollapse"], [3, "typeMessage", "selectedChanged", 4, "ngFor", "ngForOf"], [3, "typeMessage", "selectedChanged"]],
        template: function FilterTypeSeverityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterTypeSeverityComponent_Template_div_click_2_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterTypeSeverityComponent_Template_button_click_8_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterTypeSeverityComponent_span_9_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterTypeSeverityComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FilterTypeSeverityComponent_app_filter_type_message_12_Template, 1, 1, "app-filter-type-message", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "list-group-item " + ctx.type.severity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.type.types.length === 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type.count);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, !ctx.type.show));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type.severity);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.type.types);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_3__["FilterTypeMessageComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.title-col[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.btn.collapser[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 3px 6px;\n  font-size: 1.40625rem;\n  font-weight: 700;\n  line-height: 1;\n  text-shadow: none;\n  opacity: 0.7;\n}\n.error[_ngcontent-%COMP%] {\n  background-color: #f73357;\n  color: white;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #ff7264;\n  color: white;\n}\n.improvement[_ngcontent-%COMP%] {\n  background-color: #06dbe4;\n  color: white;\n}\n.notification[_ngcontent-%COMP%] {\n  background-color: #18BC9C;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci10eXBlLXNldmVyaXR5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLGFBQUE7QUEyQkY7QUF4QkE7RUFDRSxlQUFBO0FBMkJGO0FBeEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBMkJGO0FBeEJBO0VBQ0UseUJEUmE7RUNTYixZQUFBO0FBMkJGO0FBekJBO0VBQ0UseUJEZGE7RUNlYixZQUFBO0FBNEJGO0FBMUJBO0VBQ0UseUJEcEJhO0VDcUJiLFlBQUE7QUE2QkY7QUEzQkE7RUFDRSx5QkN2QnVCO0VEd0J2QixZQUFBO0FBOEJGIiwiZmlsZSI6ImZpbHRlci10eXBlLXNldmVyaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxhdGx5IDQuMC4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIElBVElcbiRpYXRpX29jZWFuOiAgICMxNTUzMzYgIWRlZmF1bHQ7XG4kaWF0aV9haXI6ICAgICAjMDZkYmU0ICFkZWZhdWx0O1xuJGlhdGlfd2luZDogICAgI2E2NmVlOSAhZGVmYXVsdDtcbiRpYXRpLXN1bnJpc2U6ICNmZjcyNjQgIWRlZmF1bHQ7XG4kaWF0aS1sYW5kOiAgICAjMDBjNDk3ICFkZWZhdWx0O1xuJGlhdGktc3Vuc2V0OiAgI2Y3MzM1NyAhZGVmYXVsdDtcbiRpYXRpLWFzaDogICAgICNlM2UzZTMgIWRlZmF1bHQ7ICAgIFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwcmFnbWF0aWNhXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlY2YwZjEgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNiNGJjYzIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM5NWE1YTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM3YjhhOGIgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMkMzRTUwICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNFNzRDM0MgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjRjM5QzEyICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOEJDOUMgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMzQ5OERCICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRpYXRpLWxhbmQgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGlhdGktYWlyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICRpYXRpLXN1bnJpc2UgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJGlhdGktc3Vuc2V0ICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiICFkZWZhdWx0O1xuICBcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdCAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBDbG9zZVxuXG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZS1jb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4uY29sbGFwc2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIGZvbnQtc2l6ZTogMS40MDYyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAuNztcbn1cblxuLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldmVyaXR5LWVycm9yO1xuICBjb2xvcjogd2hpdGU7XG59XG4ud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZXZlcml0eS13YXJuaW5nO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1wcm92ZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktaW1wcm92ZW1lbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktbm90aWZpY2F0aW9ucztcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Cbwm":
    /*!********************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/main-report-info/main-report-info.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: MainReportInfoComponent */

    /***/
    function Cbwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainReportInfoComponent", function () {
        return MainReportInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MainReportInfoComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.documentInfo.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fileName());
        }
      }

      var _c0 = function _c0(a1) {
        return ["/organisation", a1];
      };

      var MainReportInfoComponent = /*#__PURE__*/function () {
        function MainReportInfoComponent(logger) {
          _classCallCheck(this, MainReportInfoComponent);

          this.logger = logger;
          this.documentInfo = {};
          this.organisationInfo = {};
        }

        _createClass(MainReportInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fileName",
          value: function fileName() {
            if ('url' in this.documentInfo) {
              return this.documentInfo.url.split('/').pop();
            } else {
              return 'No filename available';
            }
          }
        }]);

        return MainReportInfoComponent;
      }();

      MainReportInfoComponent.ɵfac = function MainReportInfoComponent_Factory(t) {
        return new (t || MainReportInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]));
      };

      MainReportInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainReportInfoComponent,
        selectors: [["app-main-report-info"]],
        inputs: {
          documentInfo: "documentInfo",
          organisationInfo: "organisationInfo"
        },
        decls: 5,
        vars: 5,
        consts: [[3, "routerLink"], [3, "href", 4, "ngIf"], [3, "href"]],
        template: function MainReportInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainReportInfoComponent_a_4_Template, 2, 2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.organisationInfo.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.organisationInfo.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentInfo.url);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXJlcG9ydC1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "G1vt":
    /*!********************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/main/main.component.ts ***!
      \********************************************************************/

    /*! exports provided: MainComponent */

    /***/
    function G1vt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/data-quality-feedback.service */
      "pqb9");
      /* harmony import */


      var _validate_iati_shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../validate-iati/shared/validated-iati.service */
      "XQMz");
      /* harmony import */


      var _organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../organisation/shared/organisation.service */
      "Gl80");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/loader/loader.service */
      "b6Gx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_report_info_main_report_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../main-report-info/main-report-info.component */
      "Cbwm");
      /* harmony import */


      var _iati_info_iati_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../iati-info/iati-info.component */
      "6/3i");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/spinner/spinner.component */
      "f3yp");
      /* harmony import */


      var _filter_severity_filter_severity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../filter-severity/filter-severity.component */
      "pMdU");
      /* harmony import */


      var _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../filter-category/filter-category.component */
      "WCvO");
      /* harmony import */


      var _single_feedback_single_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../single-feedback/single-feedback.component */
      "K/cz");
      /* harmony import */


      var _multi_feedback_multi_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../multi-feedback/multi-feedback.component */
      "uWav");

      var _c0 = function _c0(a1) {
        return ["/validate", a1];
      };

      function MainComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<< Return to your workspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.tmpWorkspaceId));
        }
      }

      function MainComponent_app_main_report_info_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-report-info", 11);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentInfo", ctx_r1.documentInfo)("organisationInfo", ctx_r1.organisationInfo);
        }
      }

      function MainComponent_app_iati_info_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-iati-info", 12);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentInfo", ctx_r2.documentInfo)("validationReport", ctx_r2.validationReport);
        }
      }

      function MainComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading report...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backColor", "white");
        }
      }

      function MainComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No data found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "It looks like the url is not valid.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_div_9_Template_li_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go back to the previous page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go to the home page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MainComponent_div_10_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-single-feedback", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-multi-feedback", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedbackData", ctx_r11.fileErrors)("title", "Activity file feedback")("item", "activity")("items", "activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activityData", ctx_r11.activityErrors)("title", "Feedback per activity")("item", "activity")("items", "activities")("dqfs", ctx_r11.data);
        }
      }

      function MainComponent_div_10_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_10_div_9_div_1_Template, 3, 9, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.fileType === "iati-activities");
        }
      }

      function MainComponent_div_10_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-single-feedback", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-multi-feedback", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedbackData", ctx_r9.fileErrors)("title", "Organisation file feedback")("item", "organisation")("items", "organisations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activityData", ctx_r9.activityErrors)("title", "Organisation feedback")("item", "organisation")("items", "organisations")("dqfs", ctx_r9.data);
        }
      }

      function MainComponent_div_10_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-single-feedback", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedbackData", ctx_r10.fileErrors)("title", "Not an IATI file");
        }
      }

      function MainComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-filter-severity", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function MainComponent_div_10_Template_app_filter_severity_selectedChanged_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.severitySelectedChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-filter-category", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function MainComponent_div_10_Template_app_filter_category_selectedChanged_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.categorySelectedChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainComponent_div_10_div_9_Template, 2, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainComponent_div_10_div_10_Template, 3, 9, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainComponent_div_10_div_11_Template, 2, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("severities", ctx_r5.severities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx_r5.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.validationReport);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.fileType === "iati-organisations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.fileType === "");
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(dataQualityFeedbackService, validatedIatiService, organisationService, logger, activateRoute, loader, location) {
          var _this2 = this;

          _classCallCheck(this, MainComponent);

          this.dataQualityFeedbackService = dataQualityFeedbackService;
          this.validatedIatiService = validatedIatiService;
          this.organisationService = organisationService;
          this.logger = logger;
          this.activateRoute = activateRoute;
          this.loader = loader;
          this.location = location;
          this.dataset = null;
          this.isLoading = false;
          this.data = {};
          this.fileName = '';
          this.isTestfiles = false;
          this.tmpWorkspaceId = '';
          this.activityData = [];
          this.activities = [];
          this.companyFeedback = [];
          this.severities = [];
          this.sources = [];
          this.categories = [];
          this.validationReportResponse = {};
          this.validationReport = {};
          this.fileErrors = [];
          this.fileErrorsOriginal = [];
          this.activityErrors = [];
          this.activityErrorsOriginal = [];
          this.fileType = '';

          this.filterSeverity = function (message) {
            return _this2.severities.some(function (sev) {
              return sev.show === true && sev.slug === message.severity;
            });
          };

          this.filterSource = function (ruleset) {
            return _this2.sources.some(function (s) {
              return s.show === true && s.slug === ruleset.src;
            });
          };

          this.filterCategory = function (feedback) {
            return _this2.categories.some(function (c) {
              return c.show === true && c.id === feedback.category;
            });
          };

          this.filterTypeMessage = function (message) {
            return (// return this.typeMessages.some(t => t.types.some(m => m.show === true && m.id === message.id ) );
              _this2.severities.some(function (t) {
                return t.types.some(function (m) {
                  return m.show === true && m.id === message.id;
                });
              })
            );
          };
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.loaderSubscription = this.loader.loaderState.subscribe(function (state) {
              _this3.isLoading = state.show;
            });
            this.severities = this.dataQualityFeedbackService.getSeverities();
            this.sources = this.dataQualityFeedbackService.getSources();
            this.paramsSubscription = this.activateRoute.params.subscribe(function (params) {
              _this3.qParamsSubscription = _this3.activateRoute.queryParams.subscribe(function (qParams) {
                _this3.isTestfiles = qParams.isTestfiles;

                if (qParams.isTestfiles) {
                  _this3.validatedIatiService.getIatiDatasetById(params['id']).subscribe(function (iatiTestDataSet) {
                    var theFileId = iatiTestDataSet.fileid.split('.').shift();
                    _this3.fileName = iatiTestDataSet.filename;
                    _this3.tmpWorkspaceId = iatiTestDataSet.tmpworkspaceId;

                    _this3.loadData(theFileId, qParams.isTestfiles);
                  });
                } else {
                  _this3.loadData(params['id'], qParams.isTestfiles);
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.loaderSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();

            if (this.paramsSubscription) {
              this.paramsSubscription.unsubscribe();
            }

            if (this.qParamsSubscription) {
              this.qParamsSubscription.unsubscribe();
            }
          }
        }, {
          key: "loadData",
          value: function loadData(id, isTestfiles) {
            var _this4 = this;

            this.loader.show();

            if (isTestfiles) {
              this.dataQualityFeedbackService.getTestFilesDataQualityFeedbackById(id).subscribe(function (data) {
                _this4.dataset = data;

                if (_this4.dataset) {
                  _this4.dataset['filename'] = _this4.fileName;
                }

                _this4.setData(data);
              }, function (error) {
                _this4.logger.error('Error loadActivityData', error);

                _this4.loader.hide();
              });
            } else {
              this.organisationService.getDocument(id).subscribe(function (documentInfo) {
                if (length in documentInfo && documentInfo.length === 1) {
                  _this4.documentInfo = documentInfo[0];

                  _this4.organisationService.getOrganisationById(_this4.documentInfo.publisher).subscribe(function (orgInfo) {
                    if (length in orgInfo && orgInfo.length === 1) {
                      _this4.organisationInfo = orgInfo[0];

                      _this4.dataQualityFeedbackService.getValidationReport(id).subscribe(function (validationInfo) {
                        if (validationInfo) {
                          _this4.validationReportResponse = validationInfo;
                          _this4.validationReport = _this4.validationReportResponse.report;

                          _this4.setData(null);
                        } else {
                          _this4.documentInfo = undefined;
                          _this4.validationReportResponse = undefined;

                          _this4.loader.hide();
                        }

                        _this4.loader.hide();
                      });
                    } else {
                      _this4.documentInfo = undefined;
                      _this4.validationReportResponse = undefined;

                      _this4.loader.hide();
                    }
                  });
                } else {
                  _this4.documentInfo = undefined;
                  _this4.validationReportResponse = undefined;

                  _this4.loader.hide();
                }
              });
            }
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.fileType = this.validationReport.fileType;

            if ('url' in this.documentInfo) {
              this.fileName = this.documentInfo.url.split('/').pop();
            } else {
              this.fileName = 'No filename available';
            }

            this.fileErrors = this.validationReport.errors.reduce(function (acc, actOrgFile) {
              if (actOrgFile.identifier === 'file') {
                return actOrgFile.errors;
              }

              return acc;
            }, []);
            this.fileErrorsOriginal = _toConsumableArray(this.fileErrors);
            this.activityErrors = this.validationReport.errors.filter(function (actOrgFile) {
              return actOrgFile.identifier !== 'file';
            });
            this.activityErrorsOriginal = _toConsumableArray(this.activityErrors);
            this.loadCategories();
            this.loadTypeMessages(this.validationReport.errors);
            this.filterActivities();
            this.loader.hide();
          }
        }, {
          key: "loadCategories",
          value: function loadCategories() {
            var _this5 = this;

            var uniqueCat = [];
            this.validationReport.errors.forEach(function (actOrgFile) {
              actOrgFile.errors.forEach(function (error) {
                if (uniqueCat.some(function (u) {
                  return u.id === error.category;
                })) {//nothing
                } else {
                  uniqueCat.push({
                    id: error.category,
                    name: _this5.dataQualityFeedbackService.getCategoryLabel(error.category)
                  });
                }
              });
            });
            uniqueCat.forEach(function (u) {
              _this5.categories.push({
                id: u.id,
                name: u.name,
                count: null,
                order: 0,
                show: true
              });
            });
          }
        }, {
          key: "loadTypeMessages",
          value: function loadTypeMessages(errors) {
            var _this6 = this;

            var types = []; // Get unique messages, with the highest level of severity

            errors.forEach(function (actOrgFile) {
              actOrgFile.errors.forEach(function (errorCat) {
                errorCat.errors.forEach(function (error) {
                  var message = error.message,
                      severity = error.severity,
                      id = error.id;

                  if (!types.some(function (t) {
                    return t.id === id;
                  })) {
                    var newType = {
                      sev: '',
                      id: '',
                      text: ''
                    };
                    newType.sev = severity;
                    newType.id = id;
                    newType.text = message;
                    types.push(newType);
                  }
                });
              });
            }); // push the messages in the severity it belongs to

            types.forEach(function (t) {
              var sev = _this6.severities.find(function (s) {
                return s.id === t.sev;
              });

              if (sev !== undefined) {
                sev.types.push({
                  id: t.id,
                  text: t.text,
                  show: true
                });
              }
            });
          }
        }, {
          key: "filterActivities",
          value: function filterActivities() {
            var _this7 = this;

            this.loader.show();
            var filtered = JSON.parse(JSON.stringify(this.activityErrorsOriginal));
            this.filterCompanyFeedback(); // Filter feedback category

            filtered.forEach(function (act) {
              act.errors = act.errors.filter(_this7.filterCategory);
            }); // Filter messages that are not selected in source
            // filtered.forEach(act => {
            //   act.errors.forEach(fb => {
            //     fb.errors.forEach(mes => {
            //       mes.rulesets = mes.rulesets.filter(this.filterSource);
            //     });
            //   });
            // });
            // Filter type messages selected

            filtered.forEach(function (act) {
              act.errors.forEach(function (fb) {
                fb.errors = fb.errors.filter(_this7.filterTypeMessage);
              });
            }); // Filter messages with severity selected

            filtered.forEach(function (act) {
              act.errors.forEach(function (fb) {
                fb.errors = fb.errors.filter(_this7.filterSeverity);
              });
            }); // Filter feedback whitout messages

            filtered.forEach(function (act) {
              act.errors = act.errors.filter(function (fb) {
                return fb.errors.length > 0;
              });
            }); // Filter activities without feedback

            filtered = filtered.filter(function (act) {
              return act.errors.length > 0;
            });
            this.activityErrors = filtered; // set count on filter items

            this.setSeverityCount();
            this.setCategoryCount();
            this.setTypeMessageCount();
            this.loader.hide();
          }
        }, {
          key: "filterCompanyFeedback",
          value: function filterCompanyFeedback() {
            var _this8 = this;

            var filteredFeedback = JSON.parse(JSON.stringify(this.fileErrorsOriginal)); // Filter feedback category

            filteredFeedback = filteredFeedback.filter(this.filterCategory); // Filter messages that are not selected in source
            // filteredFeedback.forEach(fb => {
            //   fb.errors.forEach(mes => {
            //     mes.rulesets = mes.rulesets.filter(this.filterSource);
            //   });
            // });
            // Filter type messages selected

            filteredFeedback.forEach(function (fb) {
              fb.errors = fb.errors.filter(_this8.filterTypeMessage);
            }); // Filter errors with severity selected

            filteredFeedback.forEach(function (fb) {
              fb.errors = fb.errors.filter(_this8.filterSeverity);
            }); // Filter feedback without errors

            filteredFeedback = filteredFeedback.filter(function (fb) {
              return fb.errors.length > 0;
            }); // Filter activities without feedback

            this.fileErrors = filteredFeedback;
          } // Set the count of messages to the severity

        }, {
          key: "setSeverityCount",
          value: function setSeverityCount() {
            var _this9 = this;

            this.severities.forEach(function (sev) {
              sev.count = sev.show ? _this9.getIssueCount(sev.slug) : null;
            });
          }
        }, {
          key: "getIssueCount",
          value: function getIssueCount(severity) {
            var count = 0;
            this.activityErrors.forEach(function (act) {
              act.errors.forEach(function (fb) {
                fb.errors.forEach(function (mes) {
                  if (mes.severity === severity) {
                    count += mes.context.length;
                  }
                });
              });
            });
            this.fileErrors.forEach(function (fb) {
              fb.errors.forEach(function (mes) {
                if (mes.severity === severity) {
                  count += mes.context.length;
                }
              });
            });
            return count;
          }
        }, {
          key: "setCategoryCount",
          value: function setCategoryCount() {
            var _this10 = this;

            this.categories.forEach(function (cat) {
              cat.count = cat.show ? _this10.getCategoryCount(cat.id) : null;
            });
          }
        }, {
          key: "getCategoryCount",
          value: function getCategoryCount(id) {
            var count = 0;
            this.validationReport.errors.forEach(function (actOrgFile) {
              actOrgFile.errors.forEach(function (errorCatGroup) {
                if (errorCatGroup.category === id) {
                  count += errorCatGroup.errors.length;
                }
              });
            });
            return count;
          } // Set the count of the type-messages and sort types by count desc

        }, {
          key: "setTypeMessageCount",
          value: function setTypeMessageCount() {
            var _this11 = this;

            this.severities.forEach(function (t) {
              t.types.forEach(function (m) {
                m.count = m.show ? _this11.getTypeMessageCount(m.id) : null;
              });
            }); // Sort Type messages inside severity. Type with more messages on top

            this.severities.forEach(function (s) {
              s.types.sort(function (a, b) {
                return b.count - a.count;
              });
            });
          }
        }, {
          key: "getTypeMessageCount",
          value: function getTypeMessageCount(typeId) {
            var count = 0;
            this.validationReport.errors.forEach(function (actOrgFile) {
              actOrgFile.errors.forEach(function (errorCatGroup) {
                errorCatGroup.errors.forEach(function (error) {
                  var id = error.id;

                  if (typeId === id) {
                    count += 1;
                  }
                });
              });
            });
            return count;
          }
        }, {
          key: "severitySelectedChanged",
          value: function severitySelectedChanged() {
            this.filterActivities();
          }
        }, {
          key: "sourceSelectedChanged",
          value: function sourceSelectedChanged() {
            this.filterActivities();
          }
        }, {
          key: "categorySelectedChanged",
          value: function categorySelectedChanged() {
            this.filterActivities();
          }
        }, {
          key: "typesSelectedChanged",
          value: function typesSelectedChanged() {
            this.filterActivities();
          }
        }, {
          key: "getfeedbackSeverity",
          value: function getfeedbackSeverity(message) {
            if (message.severity === 'error') {
              return 'error';
            } else if (message.severity === 'critical') {
              return 'critical';
            } else if (message.severity === 'warning') {
              return 'warning';
            } else if (message.severity === 'info') {
              return 'improvement';
            } else if (message.severity === 'success') {
              return 'notification';
            } else {
              return 'other';
            }
          } // addCountContextFunctions() {
          //   this.dqfs.activities.forEach( act => {
          //     act.feedback.forEach(fb => {
          //       fb.countContext = function () {
          //         let count = 0;
          //         fb.messages.forEach( mes => {
          //           count += mes.countContext();
          //         });
          //         return count;
          //        } ;
          //       fb.messages.forEach(mes => {
          //         mes.countContext = function () { return mes.context.length; };
          //       });
          //     });
          //   });
          // }

        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_1__["DataQualityFeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_validate_iati_shared_validated_iati_service__WEBPACK_IMPORTED_MODULE_2__["ValidatedIatiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 11,
        vars: 6,
        consts: [[1, "container-fluid"], ["class", "content-block", 4, "ngIf"], [1, "row", "alert", "alert-light"], [1, "col"], [3, "documentInfo", "organisationInfo", 4, "ngIf"], [3, "documentInfo", "validationReport", 4, "ngIf"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "content-block"], [3, "routerLink"], [3, "documentInfo", "organisationInfo"], [3, "documentInfo", "validationReport"], ["role", "alert", 1, "alert", "alert-info"], [3, "backColor"], [1, "loading-text"], ["role", "alert", 1, "alert", "alert-warning"], [3, "click"], ["type", "button", 1, "btn", "btn-link"], ["routerLink", "\\", "type", "button", 1, "btn", "btn-link"], [1, "row"], [1, "col-md-4", "filters"], [3, "severities", "selectedChanged"], [3, "categories", "selectedChanged"], [1, "col-md-8", "results"], [4, "ngIf"], [3, "feedbackData", "title", "item", "items"], [3, "activityData", "title", "item", "items", "dqfs"], [3, "feedbackData", "title"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 3, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File validation report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainComponent_app_main_report_info_6_Template, 1, 2, "app-main-report-info", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainComponent_app_iati_info_7_Template, 1, 2, "app-iati-info", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainComponent_div_8_Template, 4, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainComponent_div_9_Template, 12, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainComponent_div_10_Template, 12, 5, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tmpWorkspaceId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentInfo && ctx.organisationInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentInfo && ctx.validationReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentInfo === undefined && ctx.validationReport === undefined && !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.documentInfo !== undefined || ctx.validationReport !== undefined) && !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _main_report_info_main_report_info_component__WEBPACK_IMPORTED_MODULE_8__["MainReportInfoComponent"], _iati_info_iati_info_component__WEBPACK_IMPORTED_MODULE_9__["IatiInfoComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _filter_severity_filter_severity_component__WEBPACK_IMPORTED_MODULE_11__["FilterSeverityComponent"], _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_12__["FilterCategoryComponent"], _single_feedback_single_feedback_component__WEBPACK_IMPORTED_MODULE_13__["SingleFeedbackComponent"], _multi_feedback_multi_feedback_component__WEBPACK_IMPORTED_MODULE_14__["MultiFeedbackComponent"]],
        styles: [".loading-text[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2FkaW5nLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmJ0bi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "K/cz":
    /*!******************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/single-feedback/single-feedback.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SingleFeedbackComponent */

    /***/
    function KCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleFeedbackComponent", function () {
        return SingleFeedbackComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../feedback-item/feedback-item.component */
      "1gXX");

      function SingleFeedbackComponent_div_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getIssueCount("critical"));
        }
      }

      function SingleFeedbackComponent_div_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getIssueCount("error"));
        }
      }

      function SingleFeedbackComponent_div_5_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getIssueCount("warning"));
        }
      }

      function SingleFeedbackComponent_div_5_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getIssueCount("info"));
        }
      }

      function SingleFeedbackComponent_div_5_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getIssueCount("success"));
        }
      }

      function SingleFeedbackComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleFeedbackComponent_div_5_span_1_Template, 2, 1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingleFeedbackComponent_div_5_span_2_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SingleFeedbackComponent_div_5_span_3_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SingleFeedbackComponent_div_5_span_4_Template, 2, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SingleFeedbackComponent_div_5_span_5_Template, 2, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIssueCount("critical") > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIssueCount("error") > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIssueCount("warning") > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIssueCount("info") > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIssueCount("success") > 0);
        }
      }

      function SingleFeedbackComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleFeedbackComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SingleFeedbackComponent_div_10_app_feedback_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feedback-item", 25);
        }

        if (rf & 2) {
          var fb_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedback", fb_r12);
        }
      }

      function SingleFeedbackComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleFeedbackComponent_div_10_app_feedback_item_1_Template, 1, 1, "app-feedback-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r3.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.feedbackData);
        }
      }

      function SingleFeedbackComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("There is no ", ctx_r5.item, " file feedback to display");
        }
      }

      var SingleFeedbackComponent = /*#__PURE__*/function () {
        function SingleFeedbackComponent() {
          _classCallCheck(this, SingleFeedbackComponent);

          this.feedbackData = [];
          this.title = '';
          this.item = 'activity';
          this.items = 'activities';
          this.isCollapsed = false;
        }

        _createClass(SingleFeedbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getIssueCount",
          value: function getIssueCount(type) {
            var count = 0;
            this.feedbackData.forEach(function (catGroup) {
              catGroup.errors.forEach(function (err) {
                if (err.severity === type) {
                  count += err.context.length;
                }
              });
            });
            return count;
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
          }
        }]);

        return SingleFeedbackComponent;
      }();

      SingleFeedbackComponent.ɵfac = function SingleFeedbackComponent_Factory(t) {
        return new (t || SingleFeedbackComponent)();
      };

      SingleFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SingleFeedbackComponent,
        selectors: [["app-single-feedback"]],
        inputs: {
          feedbackData: "feedbackData",
          title: "title",
          item: "item",
          items: "items"
        },
        decls: 13,
        vars: 6,
        consts: [[1, "xml-feedback"], [1, "feedback-heading", "row"], [1, "col", "title-col", 3, "click"], [1, "feedback-single-title", "title", "d-inline"], ["class", "d-inline float-right", 4, "ngIf"], [1, "col-auto", "collapse-col", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "collapser"], [4, "ngIf"], ["class", "feedback-items", 3, "ngbCollapse", 4, "ngIf", "ngIfElse"], ["noFeedbackData", ""], [1, "d-inline", "float-right"], ["class", "badge badge-critical", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], [1, "badge", "badge-critical"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], ["src", "assets/icons/arrow_down_24.svg", "alt", "icon arrow down"], ["src", "assets/icons/arrow_up_24.svg", "alt", "icon arrow up"], [1, "feedback-items", 3, "ngbCollapse"], [3, "feedback", 4, "ngFor", "ngForOf"], [3, "feedback"]],
        template: function SingleFeedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleFeedbackComponent_Template_div_click_2_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SingleFeedbackComponent_div_5_Template, 6, 5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleFeedbackComponent_Template_div_click_6_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SingleFeedbackComponent_span_8_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingleFeedbackComponent_span_9_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SingleFeedbackComponent_div_10_Template, 2, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SingleFeedbackComponent_ng_template_11_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feedbackData.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feedbackData.length > 0)("ngIfElse", _r4);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackItemComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.xml-feedback[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  border: 1px lightgray solid;\n  border-radius: 0.15rem;\n  padding: 10px;\n}\n.feedback-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n.title-col[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  cursor: pointer;\n}\n.identifier-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 8px;\n}\n.feedback-items[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.btn.collapser[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 0;\n  line-height: 1;\n  text-shadow: none;\n  opacity: 0.5;\n  border-style: none;\n}\n.btn.collapser[_ngcontent-%COMP%]:hover {\n  background-color: inherit;\n}\n.btn.collapser[_ngcontent-%COMP%]:focus, .btn.collapser.focus[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.badge-critical[_ngcontent-%COMP%] {\n  background-color: #a66ee9;\n  color: white;\n}\n.feedback-single-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3NpbmdsZS1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JDYzRCO0VEYjVCLGFBQUE7QUEyQkY7QUF4QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFJQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF3Qko7QUFqQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBb0JKO0FBYkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFnQko7QUFiRTtFQUNFLGFBQUE7QUFnQko7QUFiRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUdBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWNKO0FBWEU7RUFDRSx5QkFBQTtBQWNKO0FBWEU7RUFDRSxnQkFBQTtBQWNKO0FBWEU7RUFDRSx5QkRyRFc7RUNzRFgsWUFBQTtBQWNKO0FBWEE7RUFDRSxjQUFBO0FBY0YiLCJmaWxlIjoic2luZ2xlLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxhdGx5IDQuMC4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIElBVElcbiRpYXRpX29jZWFuOiAgICMxNTUzMzYgIWRlZmF1bHQ7XG4kaWF0aV9haXI6ICAgICAjMDZkYmU0ICFkZWZhdWx0O1xuJGlhdGlfd2luZDogICAgI2E2NmVlOSAhZGVmYXVsdDtcbiRpYXRpLXN1bnJpc2U6ICNmZjcyNjQgIWRlZmF1bHQ7XG4kaWF0aS1sYW5kOiAgICAjMDBjNDk3ICFkZWZhdWx0O1xuJGlhdGktc3Vuc2V0OiAgI2Y3MzM1NyAhZGVmYXVsdDtcbiRpYXRpLWFzaDogICAgICNlM2UzZTMgIWRlZmF1bHQ7ICAgIFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwcmFnbWF0aWNhXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlY2YwZjEgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNiNGJjYzIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM5NWE1YTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM3YjhhOGIgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMkMzRTUwICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNFNzRDM0MgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjRjM5QzEyICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOEJDOUMgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMzQ5OERCICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRpYXRpLWxhbmQgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGlhdGktYWlyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICRpYXRpLXN1bnJpc2UgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJGlhdGktc3Vuc2V0ICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiICFkZWZhdWx0O1xuICBcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdCAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBDbG9zZVxuXG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnhtbC1mZWVkYmFja3tcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBib3JkZXI6IDFweCBsaWdodGdyYXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBwYWRkaW5nOjEwcHg7XG59XG5cbi5mZWVkYmFjay1oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAvLyBwYWRkaW5nOiAxNHB4IDA7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gLmZlZWRiYWNrLWhlYWRpbmcgIGg0IHtcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vIH1cblxuICAudGl0bGUtY29sIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDowO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC8vIC5jb2xsYXBzZS1jb2wge1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAwO1xuICAvLyB9XG5cbiAgLmlkZW50aWZpZXItbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgLmZlZWRiYWNrLWl0ZW1zIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG5cbiAgLmJ0bi5jb2xsYXBzZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gZm9udC1zaXplOiAxLjQwNjI1cmVtO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgLmJ0bi5jb2xsYXBzZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAuYnRuLmNvbGxhcHNlcjpmb2N1cywgLmJ0bi5jb2xsYXBzZXIuZm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAuYmFkZ2UtY3JpdGljYWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNldmVyaXR5LWNyaXRpY2FsO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG5cbi5mZWVkYmFjay1zaW5nbGUtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlc19pYXRpJztcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41IDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgO1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSA7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgO1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSA7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgO1xuXG4kYmFja2dyb3VuZC10aXRsZTogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiRzZXZlcml0eS1ub3RpZmljYXRpb25zOiAjMThCQzlDO1xuXG4vLyBGb3IgdGhlIERRRiByZXBvcnRzIHNldmVyaXR5IGxldmVsXG4kc2V2ZXJpdHktY3JpdGljYWw6ICAgICAgICRpYXRpLXdpbmQ7XG4kc2V2ZXJpdHktZXJyb3I6ICAgICAgICAgICRpYXRpLXN1bnNldDtcbiRzZXZlcml0eS13YXJuaW5nOiAgICAgICAgJGlhdGktc3VucmlzZTtcbiRzZXZlcml0eS1pbXByb3ZlbWVudDogICAgJGlhdGktYWlyO1xuJHNldmVyaXR5LW9wdGltaXNhdGlvbnM6ICAkaWF0aS1sYW5kO1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMTVyZW0gO1xuIl19 */"]
      });
      /***/
    },

    /***/
    "Rui4":
    /*!****************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/feedback-group/feedback-group.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: FeedbackGroupComponent */

    /***/
    function Rui4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackGroupComponent", function () {
        return FeedbackGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../feedback-item/feedback-item.component */
      "1gXX");

      function FeedbackGroupComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getIssueCount("critical"));
        }
      }

      function FeedbackGroupComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getIssueCount("error"));
        }
      }

      function FeedbackGroupComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getIssueCount("warning"));
        }
      }

      function FeedbackGroupComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getIssueCount("info"));
        }
      }

      function FeedbackGroupComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getIssueCount("success"));
        }
      }

      function FeedbackGroupComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FeedbackGroupComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FeedbackGroupComponent_app_feedback_item_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feedback-item", 25);
        }

        if (rf & 2) {
          var fb_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedback", fb_r8);
        }
      }

      var FeedbackGroupComponent = /*#__PURE__*/function () {
        function FeedbackGroupComponent(logger) {
          _classCallCheck(this, FeedbackGroupComponent);

          this.logger = logger;
          this.isCollapsed = false;
        }

        _createClass(FeedbackGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
          }
        }, {
          key: "getLinkDportal",
          value: function getLinkDportal(publisher, activity) {
            if (this.dqfs && this.dqfs.filetype === 'iati-organisations') {
              return "http://d-portal.org/ctrack.html?publisher=".concat(encodeURIComponent(publisher));
            } else {
              return "http://d-portal.org/ctrack.html?publisher=".concat(encodeURIComponent(publisher), "#view=act&aid=").concat(encodeURIComponent(activity));
            }
          }
        }, {
          key: "getIssueCount",
          value: function getIssueCount(type) {
            var count = 0;
            this.activity.errors.forEach(function (fb) {
              fb.errors.forEach(function (mes) {
                if (mes.severity === type) {
                  // const override = this.overrideGuidanceLink(mes.id);
                  // if (override != null) {
                  //   mes.rulesets.forEach(ruleset => {
                  //     ruleset['href'] = override;
                  //   });
                  // }
                  count += mes.context.length;
                }
              });
            });
            return count;
          } // clean identiefier that contain new line breaks.
          // Delete the part from and after the line break.

        }, {
          key: "cleanIdentifier",
          value: function cleanIdentifier(identifier) {
            var newLineFound = identifier.indexOf('\n');

            if (newLineFound >= 0) {
              return identifier.substring(0, newLineFound);
            } else {
              return identifier;
            }
          } // This is a hack to overcome the guidance links being hardcoded into the repos
          // and then baked into the thousands of reports. Done properly in V2

        }, {
          key: "overrideGuidanceLink",
          value: function overrideGuidanceLink(code) {
            var overrides = {
              '102.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '103.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '106.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-classifications/',
              '11.1.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '11.1.3': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '11.1.4': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '11.1.5': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '11.2.1': 'https://iatistandard.org/en/guidance/standard-guidance/financial-transactions/',
              '11.2.2': 'https://iatistandard.org/en/guidance/standard-guidance/financial-transactions/',
              '11.3.1': 'https://iatistandard.org/en/guidance/standard-guidance/organisation-budgets-spend/',
              '12.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '12.1.2': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '12.3.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '12.3.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '12.4.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '2.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '2.1.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '2.1.4': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '2.2.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '3.1.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.1.2': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.1.4': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.4.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.4.2': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.4.4': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.6.2': 'https://iatistandard.org/en/guidance/standard-guidance/financial-transactions/',
              '3.7.1': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '3.7.2': 'https://iatistandard.org/en/guidance/standard-guidance/countries-regions/',
              '6.1.5': 'https://iatistandard.org/en/guidance/standard-guidance/related-documents/',
              '6.10.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-participants/',
              '6.11.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '6.13.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-classifications/',
              '6.14.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-classifications/',
              '6.2.1': 'https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/',
              '6.2.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '6.6.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '6.7.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/',
              '7.5.2': 'https://iatistandard.org/en/guidance/standard-guidance/activity-budgets/',
              '7.5.3': 'https://iatistandard.org/en/guidance/standard-guidance/activity-budgets/',
              '8.6.3': 'https://iatistandard.org/en/guidance/standard-guidance/organisation-budgets-spend/'
            };

            if (code in overrides) {
              return overrides[code];
            }

            return null;
          }
        }]);

        return FeedbackGroupComponent;
      }();

      FeedbackGroupComponent.ɵfac = function FeedbackGroupComponent_Factory(t) {
        return new (t || FeedbackGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]));
      };

      FeedbackGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeedbackGroupComponent,
        selectors: [["app-feedback-group"]],
        inputs: {
          activity: "activity",
          item: "item",
          items: "items",
          dqfs: "dqfs"
        },
        decls: 23,
        vars: 16,
        consts: [[1, "feedback-group"], [1, "feedback-heading", "row"], [1, "col", "title-col", 3, "click"], [1, "title-col__title-label"], [1, "feedback-group-title", "title", "d-inline"], [1, "d-inline", "float-right"], [1, "identifier-link"], ["target", "_blank", 3, "href", "title", "click"], ["class", "badge badge-critical", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-success", 4, "ngIf"], [1, "col-auto", "collapse-col", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "collapser"], [4, "ngIf"], [1, "feedback-items", 3, "ngbCollapse"], [3, "feedback", 4, "ngFor", "ngForOf"], [1, "badge", "badge-critical"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], ["src", "assets/icons/arrow_down_24.svg", "alt", "icon arrow down"], ["src", "assets/icons/arrow_up_24.svg", "alt", "icon arrow up"], [3, "feedback"]],
        template: function FeedbackGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackGroupComponent_Template_div_click_2_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackGroupComponent_Template_a_click_10_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FeedbackGroupComponent_span_12_Template, 2, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FeedbackGroupComponent_span_13_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FeedbackGroupComponent_span_14_Template, 2, 1, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FeedbackGroupComponent_span_15_Template, 2, 1, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FeedbackGroupComponent_span_16_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackGroupComponent_Template_div_click_17_listener() {
              return ctx.collapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FeedbackGroupComponent_span_19_Template, 2, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FeedbackGroupComponent_span_20_Template, 2, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FeedbackGroupComponent_app_feedback_item_22_Template, 1, 1, "app-feedback-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx.item), " title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activity.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.getLinkDportal(ctx.activity.publisher, ctx.cleanIdentifier(ctx.activity.identifier)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Open this ", ctx.item, " in d-portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cleanIdentifier(ctx.activity.identifier));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getIssueCount("critical") > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getIssueCount("error") > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getIssueCount("warning") > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getIssueCount("info") > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getIssueCount("success") > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activity.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackItemComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.feedback-group[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  border: 1px lightgray solid;\n  border-radius: 0.15rem;\n}\n.feedback-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  padding: 14px 0;\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n.title-col[_ngcontent-%COMP%] {\n  padding-right: 0;\n  cursor: pointer;\n}\n.title-col[_ngcontent-%COMP%]   .title-col__title-label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.identifier-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 8px;\n}\n.feedback-items[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.btn.collapser[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 0;\n  line-height: 1;\n  text-shadow: none;\n  opacity: 0.5;\n  border-style: none;\n}\n.btn.collapser[_ngcontent-%COMP%]:hover {\n  background-color: inherit;\n}\n.btn.collapser[_ngcontent-%COMP%]:focus, .btn.collapser.focus[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.badge-critical[_ngcontent-%COMP%] {\n  background-color: #a66ee9;\n  color: white;\n}\n.feedback-group-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZlZWRiYWNrLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkNjNEI7QURhOUI7QUF4QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBR0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBeUJGO0FBbEJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBcUJGO0FBcEJFO0VBQ0UsaUJBQUE7QUFzQko7QUFkQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWlCRjtBQWRBO0VBQ0UsYUFBQTtBQWlCRjtBQWRBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBR0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZUY7QUFaQTtFQUNFLHlCQUFBO0FBZUY7QUFaQTtFQUNFLGdCQUFBO0FBZUY7QUFaQTtFQUNFLHlCRHREYTtFQ3VEYixZQUFBO0FBZUY7QUFaQTtFQUNFLGNBQUE7QUFlRiIsImZpbGUiOiJmZWVkYmFjay1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5mZWVkYmFjay1ncm91cCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgYm9yZGVyOiAxcHggbGlnaHRncmF5IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cblxuLmZlZWRiYWNrLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gLmZlZWRiYWNrLWhlYWRpbmcgIGg0IHtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4udGl0bGUtY29sIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAudGl0bGUtY29sX190aXRsZS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cblxuLy8gLmNvbGxhcHNlLWNvbCB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwO1xuLy8gfVxuXG4uaWRlbnRpZmllci1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmZlZWRiYWNrLWl0ZW1zIHtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLmJ0bi5jb2xsYXBzZXIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogMDtcbiAgLy8gZm9udC1zaXplOiAxLjQwNjI1cmVtO1xuICAvLyBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IC41O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5idG4uY29sbGFwc2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmJ0bi5jb2xsYXBzZXI6Zm9jdXMsIC5idG4uY29sbGFwc2VyLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJhZGdlLWNyaXRpY2Fse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2V2ZXJpdHktY3JpdGljYWw7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uZmVlZGJhY2stZ3JvdXAtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlc19pYXRpJztcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41IDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgO1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSA7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgO1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSA7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgO1xuXG4kYmFja2dyb3VuZC10aXRsZTogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiRzZXZlcml0eS1ub3RpZmljYXRpb25zOiAjMThCQzlDO1xuXG4vLyBGb3IgdGhlIERRRiByZXBvcnRzIHNldmVyaXR5IGxldmVsXG4kc2V2ZXJpdHktY3JpdGljYWw6ICAgICAgICRpYXRpLXdpbmQ7XG4kc2V2ZXJpdHktZXJyb3I6ICAgICAgICAgICRpYXRpLXN1bnNldDtcbiRzZXZlcml0eS13YXJuaW5nOiAgICAgICAgJGlhdGktc3VucmlzZTtcbiRzZXZlcml0eS1pbXByb3ZlbWVudDogICAgJGlhdGktYWlyO1xuJHNldmVyaXR5LW9wdGltaXNhdGlvbnM6ICAkaWF0aS1sYW5kO1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMTVyZW0gO1xuIl19 */"]
      });
      /***/
    },

    /***/
    "S59i":
    /*!**********************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-type/filter-type.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: FilterTypeComponent */

    /***/
    function S59i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTypeComponent", function () {
        return FilterTypeComponent;
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


      var _filter_type_severity_filter_type_severity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../filter-type-severity/filter-type-severity.component */
      "BoPX");

      function FilterTypeComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show/hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterTypeComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterTypeComponent_span_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterTypeComponent_app_filter_type_severity_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-type-severity", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function FilterTypeComponent_app_filter_type_severity_7_Template_app_filter_type_severity_selectedChanged_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r5);
        }
      }

      var FilterTypeComponent = /*#__PURE__*/function () {
        function FilterTypeComponent() {
          _classCallCheck(this, FilterTypeComponent);

          this.types = [];
          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.types.every(function (x) {
              return x.types.every(function (y) {
                return y.show === true;
              });
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.types.forEach(function (x) {
              return x.types.forEach(function (t) {
                return t.show = true;
              });
            });
            this.selectionChanged();
          }
        }]);

        return FilterTypeComponent;
      }();

      FilterTypeComponent.ɵfac = function FilterTypeComponent_Factory(t) {
        return new (t || FilterTypeComponent)();
      };

      FilterTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterTypeComponent,
        selectors: [["app-filter-type"]],
        inputs: {
          types: "types"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "filter"], [1, "list-group"], [1, "list-group-item", "caption"], [1, "title"], ["class", "show-label", 4, "ngIf"], [3, "type", "selectedChanged", 4, "ngFor", "ngForOf"], [1, "show-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [3, "type", "selectedChanged"]],
        template: function FilterTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterTypeComponent_span_5_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterTypeComponent_span_6_Template, 3, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilterTypeComponent_app_filter_type_severity_7_Template, 1, 1, "app-filter-type-severity", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _filter_type_severity_filter_type_severity_component__WEBPACK_IMPORTED_MODULE_2__["FilterTypeSeverityComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.severity-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 28px;\n  margin-right: 6px;\n  text-align: right;\n}\n.caption[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: inline;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n.select[_ngcontent-%COMP%] {\n  margin-right: -10px;\n  float: right;\n}\n.unselected[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci10eXBlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7QUEyQkY7QUF4QkE7RUFDRSx5QkFBQTtBQTJCRjtBQXhCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNDWmlCO0FEdUNuQjtBQXhCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTJCRjtBQXhCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTJCRjtBQXhCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBMkJGO0FBeEJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBMkJGO0FBeEJBO0VBQ0UsNkJBQUE7QUEyQkYiLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGbGF0bHkgNC4wLjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuLy8gSUFUSVxuJGlhdGlfb2NlYW46ICAgIzE1NTMzNiAhZGVmYXVsdDtcbiRpYXRpX2FpcjogICAgICMwNmRiZTQgIWRlZmF1bHQ7XG4kaWF0aV93aW5kOiAgICAjYTY2ZWU5ICFkZWZhdWx0O1xuJGlhdGktc3VucmlzZTogI2ZmNzI2NCAhZGVmYXVsdDtcbiRpYXRpLWxhbmQ6ICAgICMwMGM0OTcgIWRlZmF1bHQ7XG4kaWF0aS1zdW5zZXQ6ICAjZjczMzU3ICFkZWZhdWx0O1xuJGlhdGktYXNoOiAgICAgI2UzZTNlMyAhZGVmYXVsdDsgICAgXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInByYWdtYXRpY2FcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gUmVndWxhclwiKSwgbG9jYWwoXCJSb2JvdG8tUmVndWxhclwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTRteEsud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTWVkaXVtXCIpLCBsb2NhbChcIlJvYm90by1NZWRpdW1cIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2VjZjBmMSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2I0YmNjMiAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzk1YTVhNiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzdiOGE4YiAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICAgICMyQzNFNTAgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI0U3NEMzQyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNGMzlDMTIgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE4QkM5QyAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMzNDk4REIgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGlhdGktbGFuZCAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkaWF0aS1haXIgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJGlhdGktc3VucmlzZSAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkaWF0aS1zdW5zZXQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuLy8gTGlua3NcblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuXG4vLyBGb250c1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcImNoYWxldC1sb25kb24tc2l4dHlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIgIWRlZmF1bHQ7XG4gIFxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMC45Mzc1cmVtICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMi41cmVtICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0ICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgIGRhcmtlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIENsb3NlXG5cbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uZmlsdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLnNldmVyaXR5LWNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC10aXRsZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc2hvdy1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLnNob3ctbGFiZWwgLmJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLnNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnVuc2VsZWN0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlc19pYXRpJztcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41IDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgO1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSA7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgO1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSA7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgO1xuXG4kYmFja2dyb3VuZC10aXRsZTogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiRzZXZlcml0eS1ub3RpZmljYXRpb25zOiAjMThCQzlDO1xuXG4vLyBGb3IgdGhlIERRRiByZXBvcnRzIHNldmVyaXR5IGxldmVsXG4kc2V2ZXJpdHktY3JpdGljYWw6ICAgICAgICRpYXRpLXdpbmQ7XG4kc2V2ZXJpdHktZXJyb3I6ICAgICAgICAgICRpYXRpLXN1bnNldDtcbiRzZXZlcml0eS13YXJuaW5nOiAgICAgICAgJGlhdGktc3VucmlzZTtcbiRzZXZlcml0eS1pbXByb3ZlbWVudDogICAgJGlhdGktYWlyO1xuJHNldmVyaXR5LW9wdGltaXNhdGlvbnM6ICAkaWF0aS1sYW5kO1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMTVyZW0gO1xuIl19 */"]
      });
      /***/
    },

    /***/
    "UwMi":
    /*!**************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-source/filter-source.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: FilterSourceComponent */

    /***/
    function UwMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSourceComponent", function () {
        return FilterSourceComponent;
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


      var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/checkbox/checkbox.component */
      "8YuN");

      function FilterSourceComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterSourceComponent_span_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "unselected": a0
        };
      };

      function FilterSourceComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function FilterSourceComponent_li_6_Template_app_checkbox_checkedChange_6_listener($event) {
            var cat_r4 = ctx.$implicit;
            return cat_r4.show = $event;
          })("checkedChange", function FilterSourceComponent_li_6_Template_app_checkbox_checkedChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !cat_r4.show));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", cat_r4.show)("name", "filterSrc" + cat_r4.name);
        }
      }

      var FilterSourceComponent = /*#__PURE__*/function () {
        function FilterSourceComponent() {
          _classCallCheck(this, FilterSourceComponent);

          this.sources = [];
          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterSourceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.sources);
          }
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.sources.every(function (x) {
              return x.show === true;
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.sources.forEach(function (x) {
              return x.show = true;
            });
            this.selectionChanged();
          }
        }]);

        return FilterSourceComponent;
      }();

      FilterSourceComponent.ɵfac = function FilterSourceComponent_Factory(t) {
        return new (t || FilterSourceComponent)();
      };

      FilterSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterSourceComponent,
        selectors: [["app-filter-source"]],
        inputs: {
          sources: "sources"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 7,
        vars: 2,
        consts: [[1, "filter"], [1, "list-group"], [1, "list-group-item", "caption"], [1, "title"], ["class", "show-label", 4, "ngIf"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "show-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "list-group-item"], [1, "severity-count"], [3, "ngClass"], [1, "select"], [3, "checked", "name", "checkedChange"]],
        template: function FilterSourceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Guidelines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterSourceComponent_span_5_Template, 3, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterSourceComponent_li_6_Template, 7, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sources);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.severity-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 28px;\n  margin-right: 6px;\n  text-align: right;\n}\n.caption[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: inline;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n.select[_ngcontent-%COMP%] {\n  margin-right: -10px;\n  float: right;\n}\n.unselected[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci1zb3VyY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNFLGtDQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSx5QkFBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EseUlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNqQkY7QURvQkE7RUFDRSxxQkFBQTtFQUNBLDJJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDbEJGO0FBekJBO0VBQ0UsbUJBQUE7RUFDQSxxQ0FBQTtBQTJCRjtBQXhCQTtFQUNFLHlCQUFBO0FBMkJGO0FBeEJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTJCRjtBQXhCQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0NaaUI7QUR1Q25CO0FBeEJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBMkJGO0FBeEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBMkJGO0FBeEJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUEyQkY7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUEyQkY7QUF4QkE7RUFDRSw2QkFBQTtBQTJCRiIsImZpbGUiOiJmaWx0ZXItc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxhdGx5IDQuMC4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIElBVElcbiRpYXRpX29jZWFuOiAgICMxNTUzMzYgIWRlZmF1bHQ7XG4kaWF0aV9haXI6ICAgICAjMDZkYmU0ICFkZWZhdWx0O1xuJGlhdGlfd2luZDogICAgI2E2NmVlOSAhZGVmYXVsdDtcbiRpYXRpLXN1bnJpc2U6ICNmZjcyNjQgIWRlZmF1bHQ7XG4kaWF0aS1sYW5kOiAgICAjMDBjNDk3ICFkZWZhdWx0O1xuJGlhdGktc3Vuc2V0OiAgI2Y3MzM1NyAhZGVmYXVsdDtcbiRpYXRpLWFzaDogICAgICNlM2UzZTMgIWRlZmF1bHQ7ICAgIFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwcmFnbWF0aWNhXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlY2YwZjEgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNiNGJjYzIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM5NWE1YTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM3YjhhOGIgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMkMzRTUwICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNFNzRDM0MgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjRjM5QzEyICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOEJDOUMgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMzQ5OERCICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRpYXRpLWxhbmQgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGlhdGktYWlyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICRpYXRpLXN1bnJpc2UgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJGlhdGktc3Vuc2V0ICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiICFkZWZhdWx0O1xuICBcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdCAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBDbG9zZVxuXG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmZpbHRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZXZlcml0eS1jb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtdGl0bGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnNob3ctbGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5zaG93LWxhYmVsIC5idG4ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi51bnNlbGVjdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXNfaWF0aSc7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSA7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyIDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgO1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41IDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgO1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlIDtcblxuJGJhY2tncm91bmQtdGl0bGU6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4kc2V2ZXJpdHktbm90aWZpY2F0aW9uczogIzE4QkM5QztcblxuLy8gRm9yIHRoZSBEUUYgcmVwb3J0cyBzZXZlcml0eSBsZXZlbFxuJHNldmVyaXR5LWNyaXRpY2FsOiAgICAgICAkaWF0aS13aW5kO1xuJHNldmVyaXR5LWVycm9yOiAgICAgICAgICAkaWF0aS1zdW5zZXQ7XG4kc2V2ZXJpdHktd2FybmluZzogICAgICAgICRpYXRpLXN1bnJpc2U7XG4kc2V2ZXJpdHktaW1wcm92ZW1lbnQ6ICAgICRpYXRpLWFpcjtcbiRzZXZlcml0eS1vcHRpbWlzYXRpb25zOiAgJGlhdGktbGFuZDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjE1cmVtIDtcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "WCvO":
    /*!******************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-category/filter-category.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: FilterCategoryComponent */

    /***/
    function WCvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterCategoryComponent", function () {
        return FilterCategoryComponent;
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


      var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/checkbox/checkbox.component */
      "8YuN");

      function FilterCategoryComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterCategoryComponent_span_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "unselected": a0
        };
      };

      function FilterCategoryComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function FilterCategoryComponent_li_6_Template_app_checkbox_checkedChange_6_listener($event) {
            var cat_r4 = ctx.$implicit;
            return cat_r4.show = $event;
          })("checkedChange", function FilterCategoryComponent_li_6_Template_app_checkbox_checkedChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cat_r4.count, " x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !cat_r4.show));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", cat_r4.show)("name", "filterCat" + cat_r4.name);
        }
      }

      var FilterCategoryComponent = /*#__PURE__*/function () {
        function FilterCategoryComponent() {
          _classCallCheck(this, FilterCategoryComponent);

          this.categories = [];
          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.categories.every(function (x) {
              return x.show === true;
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.categories.forEach(function (x) {
              return x.show = true;
            });
            this.selectionChanged();
          }
        }]);

        return FilterCategoryComponent;
      }();

      FilterCategoryComponent.ɵfac = function FilterCategoryComponent_Factory(t) {
        return new (t || FilterCategoryComponent)();
      };

      FilterCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterCategoryComponent,
        selectors: [["app-filter-category"]],
        inputs: {
          categories: "categories"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 7,
        vars: 2,
        consts: [[1, "filter"], [1, "list-group"], [1, "list-group-item", "caption"], [1, "title"], ["class", "show-label", 4, "ngIf"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "show-label"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "list-group-item"], [1, "severity-count"], [3, "ngClass"], [1, "select"], [3, "checked", "name", "checkedChange"]],
        template: function FilterCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View by category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterCategoryComponent_span_5_Template, 3, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilterCategoryComponent_li_6_Template, 7, 7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.severity-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 28px;\n  margin-right: 6px;\n  text-align: right;\n}\n.caption[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: inline;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n.select[_ngcontent-%COMP%] {\n  margin-right: -10px;\n  float: right;\n}\n.unselected[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0FBMkJGO0FBeEJBO0VBQ0UseUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBMkJGO0FBeEJBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQ1ppQjtBRHVDbkI7QUF4QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUEyQkY7QUF4QkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQTJCRjtBQXhCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQTJCRjtBQXhCQTtFQUNFLDZCQUFBO0FBMkJGIiwiZmlsZSI6ImZpbHRlci1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uc2V2ZXJpdHktY291bnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXRpdGxlO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zaG93LWxhYmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uc2hvdy1sYWJlbCAuYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udW5zZWxlY3RlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "cGZY":
    /*!*****************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/data-quality-feedback.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: DataQualityFeedbackModule */

    /***/
    function cGZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataQualityFeedbackModule", function () {
        return DataQualityFeedbackModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-gtag */
      "e/9f");
      /* harmony import */


      var _shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/data-quality-feedback.service */
      "pqb9");
      /* harmony import */


      var src_app_organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/organisation/shared/organisation.service */
      "Gl80");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./main/main.component */
      "G1vt");
      /* harmony import */


      var _filter_severity_filter_severity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./filter-severity/filter-severity.component */
      "pMdU");
      /* harmony import */


      var _filter_source_filter_source_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./filter-source/filter-source.component */
      "UwMi");
      /* harmony import */


      var _filter_type_filter_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./filter-type/filter-type.component */
      "S59i");
      /* harmony import */


      var _feedback_group_feedback_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./feedback-group/feedback-group.component */
      "Rui4");
      /* harmony import */


      var _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./feedback-item/feedback-item.component */
      "1gXX");
      /* harmony import */


      var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/checkbox/checkbox.component */
      "8YuN");
      /* harmony import */


      var _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./filter-category/filter-category.component */
      "WCvO");
      /* harmony import */


      var _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./filter-type-message/filter-type-message.component */
      "rP87");
      /* harmony import */


      var _filter_type_severity_filter_type_severity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./filter-type-severity/filter-type-severity.component */
      "BoPX");
      /* harmony import */


      var _filter_severity_item_filter_severity_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./filter-severity-item/filter-severity-item.component */
      "2Sxr");
      /* harmony import */


      var _main_report_info_main_report_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./main-report-info/main-report-info.component */
      "Cbwm");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _single_feedback_single_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./single-feedback/single-feedback.component */
      "K/cz");
      /* harmony import */


      var _iati_info_iati_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./iati-info/iati-info.component */
      "6/3i");
      /* harmony import */


      var _validate_iati_validate_iati_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../validate-iati/validate-iati.module */
      "oE6s");
      /* harmony import */


      var _multi_feedback_multi_feedback_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./multi-feedback/multi-feedback.component */
      "uWav");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'files/:id',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
      }, {
        path: '',
        redirectTo: '/404dqf',
        pathMatch: 'full'
      }];

      var DataQualityFeedbackModule = function DataQualityFeedbackModule() {
        _classCallCheck(this, DataQualityFeedbackModule);
      };

      DataQualityFeedbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: DataQualityFeedbackModule
      });
      DataQualityFeedbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        factory: function DataQualityFeedbackModule_Factory(t) {
          return new (t || DataQualityFeedbackModule)();
        },
        providers: [_shared_data_quality_feedback_service__WEBPACK_IMPORTED_MODULE_5__["DataQualityFeedbackService"], src_app_organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], _validate_iati_validate_iati_module__WEBPACK_IMPORTED_MODULE_22__["ValidateIatiModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_4__["GtagModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](DataQualityFeedbackModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], // AboutComponent,
          _filter_severity_filter_severity_component__WEBPACK_IMPORTED_MODULE_8__["FilterSeverityComponent"], _filter_source_filter_source_component__WEBPACK_IMPORTED_MODULE_9__["FilterSourceComponent"], _filter_type_filter_type_component__WEBPACK_IMPORTED_MODULE_10__["FilterTypeComponent"], _feedback_group_feedback_group_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackGroupComponent"], _feedback_item_feedback_item_component__WEBPACK_IMPORTED_MODULE_12__["FeedbackItemComponent"], _multi_feedback_multi_feedback_component__WEBPACK_IMPORTED_MODULE_23__["MultiFeedbackComponent"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"], _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_14__["FilterCategoryComponent"], _filter_type_message_filter_type_message_component__WEBPACK_IMPORTED_MODULE_15__["FilterTypeMessageComponent"], _filter_type_severity_filter_type_severity_component__WEBPACK_IMPORTED_MODULE_16__["FilterTypeSeverityComponent"], _filter_severity_item_filter_severity_item_component__WEBPACK_IMPORTED_MODULE_17__["FilterSeverityItemComponent"], _main_report_info_main_report_info_component__WEBPACK_IMPORTED_MODULE_18__["MainReportInfoComponent"], _single_feedback_single_feedback_component__WEBPACK_IMPORTED_MODULE_20__["SingleFeedbackComponent"], _iati_info_iati_info_component__WEBPACK_IMPORTED_MODULE_21__["IatiInfoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], _validate_iati_validate_iati_module__WEBPACK_IMPORTED_MODULE_22__["ValidateIatiModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_4__["GtagModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "pMdU":
    /*!******************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-severity/filter-severity.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: FilterSeverityComponent */

    /***/
    function pMdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterSeverityComponent", function () {
        return FilterSeverityComponent;
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


      var _filter_severity_item_filter_severity_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../filter-severity-item/filter-severity-item.component */
      "2Sxr");

      function FilterSeverityComponent_app_filter_severity_item_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-severity-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChanged", function FilterSeverityComponent_app_filter_severity_item_7_Template_app_filter_severity_item_selectedChanged_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sev_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("severity", sev_r1);
        }
      }

      var FilterSeverityComponent = /*#__PURE__*/function () {
        function FilterSeverityComponent() {
          _classCallCheck(this, FilterSeverityComponent);

          this.severities = [];
          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterSeverityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "allSelected",
          value: function allSelected() {
            return this.severities.every(function (x) {
              return x.show === true;
            });
          }
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            this.selectedChanged.emit('');
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.severities.forEach(function (x) {
              return x.show = true;
            });
            this.selectionChanged();
          }
        }]);

        return FilterSeverityComponent;
      }();

      FilterSeverityComponent.ɵfac = function FilterSeverityComponent_Factory(t) {
        return new (t || FilterSeverityComponent)();
      };

      FilterSeverityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterSeverityComponent,
        selectors: [["app-filter-severity"]],
        inputs: {
          severities: "severities"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 8,
        vars: 1,
        consts: [[1, "filter"], [1, "list-group"], [1, "list-group-item", "caption"], [1, "title"], [1, "show-label", "text-muted"], [3, "severity", "selectedChanged", 4, "ngFor", "ngForOf"], [3, "severity", "selectedChanged"]],
        template: function FilterSeverityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View by message type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click to show or hide individual message types.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilterSeverityComponent_app_filter_severity_item_7_Template, 1, 1, "app-filter-severity-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.severities);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _filter_severity_item_filter_severity_item_component__WEBPACK_IMPORTED_MODULE_2__["FilterSeverityItemComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.caption[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: inline;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci1zZXZlcml0eS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0FBMkJGO0FBeEJBO0VBQ0UseUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNDTGlCO0FEZ0NuQjtBQXhCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTJCRjtBQXhCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTJCRjtBQXhCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBMkJGIiwiZmlsZSI6ImZpbHRlci1zZXZlcml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uY2FwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXRpdGxlO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zaG93LWxhYmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uc2hvdy1sYWJlbCAuYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "pqb9":
    /*!*************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/shared/data-quality-feedback.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: DataQualityFeedbackService */

    /***/
    function pqb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataQualityFeedbackService", function () {
        return DataQualityFeedbackService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/logging/log.service */
      "SF6U");

      var DataQualityFeedbackService = /*#__PURE__*/function () {
        function DataQualityFeedbackService(http, logger) {
          _classCallCheck(this, DataQualityFeedbackService);

          this.http = http;
          this.logger = logger;
          this.urlApiIatiFile = window.__env.apiDataworkBench + '/iati-files';
          this.urlApiIatiTestFile = window.__env.apiDataworkBench + '/iati-testfiles';
          this.urlApiIatiDataSet = window.__env.apiDataworkBench + '/iati-datasets';
          this.urlApiOrganisation = window.__env.apiDataworkBench + '/iati-publishers';
          this.urlApiValidationReport = window.__env.validatorServicesUrl + '/pub/validation/existing';
        }

        _createClass(DataQualityFeedbackService, [{
          key: "getValidationReport",
          value: function getValidationReport(documentId) {
            var url = this.urlApiValidationReport + '?id=' + documentId;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getValidationReport', undefined)));
          }
        }, {
          key: "getDataQualityFeedback",
          value: function getDataQualityFeedback(md5) {
            var url = this.urlApiIatiFile + '/file/json/' + md5 + '.json'; //   /iati-files/{container}/download/{file}

            return this.http.get(url).pipe( // tap(_ => this.log(`fetched iati file`)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiFile', undefined)));
          }
        }, {
          key: "getTestFilesDataQualityFeedbackById",
          value: function getTestFilesDataQualityFeedbackById(inId) {
            var url = this.urlApiIatiTestFile + '/file/json/' + inId + '.json'; //   /iati-testfiles/{container}/download/{file}

            return this.http.get(url).pipe( // tap(_ => this.log(`fetched iati file`)),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiFile', undefined)));
          }
        }, {
          key: "getReportInfo",
          value: function getReportInfo(id) {
            var _this12 = this;

            var reportInfo = {
              organisationName: '',
              fileName: '',
              organisationSlug: ''
            };
            var url = this.urlApiIatiDataSet + '/findOne/' + '?filter[where][id]=' + id;
            this.http.get(url).subscribe(function (data) {
              reportInfo.fileName = data.filename;
              reportInfo.organisationSlug = data.publisher;
              var urlPublisher = _this12.urlApiOrganisation + '/findOne/' + '?filter[where][slug]=' + data.publisher;

              _this12.http.get(urlPublisher).subscribe(function (datas) {
                reportInfo.organisationName = datas.name;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(reportInfo);
              });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(reportInfo);
          }
        }, {
          key: "getSeverities",
          value: function getSeverities() {
            return [{
              id: 'critical',
              slug: 'critical',
              name: 'Critical',
              description: 'Files with critical errors will not be processed by the datastore',
              count: null,
              order: 1,
              show: true,
              types: []
            }, {
              id: 'error',
              slug: 'error',
              name: 'Errors',
              description: 'Errors make it hard or impossible to use the data.',
              count: null,
              order: 2,
              show: true,
              types: []
            }, {
              id: 'warning',
              slug: 'warning',
              name: 'Warnings',
              description: 'Warnings indicate where the data can be more valuable.',
              count: null,
              order: 3,
              show: true,
              types: []
            }, {
              id: 'improvement',
              slug: 'info',
              name: 'Improvements',
              description: 'Improvements can make the data more useful.',
              count: null,
              order: 4,
              show: true,
              types: []
            }, {
              id: 'notification',
              slug: 'success',
              name: 'Notifications',
              description: 'Notifications are for your information.',
              count: null,
              order: 5,
              show: true,
              types: []
            }];
          }
        }, {
          key: "getSources",
          value: function getSources() {
            return [{
              id: 'iati',
              slug: 'iati',
              name: 'IATI Standard',
              count: null,
              order: 1,
              show: true
            }, {
              id: 'minbuza',
              slug: 'minbuza',
              name: 'Netherlands: Ministry of Foreign Affairs additional rules',
              count: null,
              order: 2,
              show: true
            }, {
              id: 'dfid',
              slug: 'dfid',
              name: 'UK: Department for International Development (DFID) additional rules',
              count: null,
              order: 3,
              show: true
            }, {
              id: 'practice',
              slug: 'practice',
              name: 'Common practice',
              count: null,
              order: 4,
              show: true
            }, {
              id: 'iati-doc',
              slug: 'iati-doc',
              name: 'IATI Standard (additional)',
              count: null,
              order: 5,
              show: true
            }];
          }
        }, {
          key: "getCategoryLabel",
          value: function getCategoryLabel(category) {
            var categories = {
              schema: 'Schema',
              information: 'Basic activity information',
              financial: 'Financial',
              identifiers: 'Identification',
              organisation: 'Basic organisation information',
              participating: 'Participating organisations',
              geo: 'Geopolitical information',
              classifications: 'Classifications',
              documents: 'Related documents',
              performance: 'Performance',
              iati: 'IATI file'
            };
            return categories[category];
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
            var _this13 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging
              _this13.logger.error(error); // console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption
              // this.log(`${operation} failed: ${error.message}`);
              // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
            };
          }
        }]);

        return DataQualityFeedbackService;
      }();

      DataQualityFeedbackService.ɵfac = function DataQualityFeedbackService_Factory(t) {
        return new (t || DataQualityFeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]));
      };

      DataQualityFeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DataQualityFeedbackService,
        factory: DataQualityFeedbackService.ɵfac
      });
      /***/
    },

    /***/
    "rP87":
    /*!**************************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/filter-type-message/filter-type-message.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: FilterTypeMessageComponent */

    /***/
    function rP87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterTypeMessageComponent", function () {
        return FilterTypeMessageComponent;
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


      var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/checkbox/checkbox.component */
      "8YuN");

      var _c0 = function _c0(a0) {
        return {
          "unselected": a0
        };
      };

      function FilterTypeMessageComponent_li_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-checkbox", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function FilterTypeMessageComponent_li_0_Template_app_checkbox_checkedChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.typeMessage.show = $event;
          })("checkedChange", function FilterTypeMessageComponent_li_0_Template_app_checkbox_checkedChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectionChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.typeMessage.count, " x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !(ctx_r0.typeMessage == null ? null : ctx_r0.typeMessage.show)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.typeMessage.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.typeMessage.show)("name", "filterTypeMsg" + ctx_r0.typeMessage.text + ctx_r0.typeMessage.id);
        }
      }

      var FilterTypeMessageComponent = /*#__PURE__*/function () {
        function FilterTypeMessageComponent() {
          _classCallCheck(this, FilterTypeMessageComponent);

          this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FilterTypeMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectionChanged",
          value: function selectionChanged() {
            console.log('typeMessage: ', this.typeMessage);
            this.selectedChanged.emit('');
          }
        }]);

        return FilterTypeMessageComponent;
      }();

      FilterTypeMessageComponent.ɵfac = function FilterTypeMessageComponent_Factory(t) {
        return new (t || FilterTypeMessageComponent)();
      };

      FilterTypeMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterTypeMessageComponent,
        selectors: [["app-filter-type-message"]],
        inputs: {
          typeMessage: "typeMessage"
        },
        outputs: {
          selectedChanged: "selectedChanged"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "list-group-item", 4, "ngIf"], [1, "list-group-item"], [1, "severity-count"], [3, "ngClass"], [1, "select"], [3, "checked", "name", "checkedChange"]],
        template: function FilterTypeMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterTypeMessageComponent_li_0_Template, 7, 7, "li", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeMessage);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.severity-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 28px;\n  margin-right: 6px;\n  text-align: right;\n}\n.caption[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: inline;\n}\n.show-label[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.show-label[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n}\n.select[_ngcontent-%COMP%] {\n  margin-right: -10px;\n  float: right;\n}\n.unselected[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2ZpbHRlci10eXBlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNFLGtDQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSx5QkFBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EseUlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNqQkY7QURvQkE7RUFDRSxxQkFBQTtFQUNBLDJJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDbEJGO0FBekJBO0VBQ0UsbUJBQUE7QUEyQkY7QUF4QkE7RUFDRSx5QkFBQTtBQTJCRjtBQXhCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNDWGlCO0FEc0NuQjtBQXhCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTJCRjtBQXhCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTJCRjtBQXhCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBMkJGO0FBeEJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBMkJGO0FBeEJBO0VBQ0UsNkJBQUE7QUEyQkYiLCJmaWxlIjoiZmlsdGVyLXR5cGUtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLnNldmVyaXR5LWNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC10aXRsZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc2hvdy1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLnNob3ctbGFiZWwgLmJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLnNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnVuc2VsZWN0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlc19pYXRpJztcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41IDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgO1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSA7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgO1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSA7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgO1xuXG4kYmFja2dyb3VuZC10aXRsZTogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiRzZXZlcml0eS1ub3RpZmljYXRpb25zOiAjMThCQzlDO1xuXG4vLyBGb3IgdGhlIERRRiByZXBvcnRzIHNldmVyaXR5IGxldmVsXG4kc2V2ZXJpdHktY3JpdGljYWw6ICAgICAgICRpYXRpLXdpbmQ7XG4kc2V2ZXJpdHktZXJyb3I6ICAgICAgICAgICRpYXRpLXN1bnNldDtcbiRzZXZlcml0eS13YXJuaW5nOiAgICAgICAgJGlhdGktc3VucmlzZTtcbiRzZXZlcml0eS1pbXByb3ZlbWVudDogICAgJGlhdGktYWlyO1xuJHNldmVyaXR5LW9wdGltaXNhdGlvbnM6ICAkaWF0aS1sYW5kO1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMTVyZW0gO1xuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "uWav":
    /*!****************************************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/multi-feedback/multi-feedback.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: MultiFeedbackComponent */

    /***/
    function uWav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiFeedbackComponent", function () {
        return MultiFeedbackComponent;
      });
      /* harmony import */


      var _feedback_group_feedback_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../feedback-group/feedback-group.component */
      "Rui4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MultiFeedbackComponent_div_6_app_feedback_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-feedback-group", 7);
        }

        if (rf & 2) {
          var act_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activity", act_r4)("item", ctx_r3.item)("items", ctx_r3.items)("dqfs", ctx_r3.dqfs);
        }
      }

      function MultiFeedbackComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MultiFeedbackComponent_div_6_app_feedback_group_1_Template, 1, 4, "app-feedback-group", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.activityData);
        }
      }

      function MultiFeedbackComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There is no feedback to display");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var MultiFeedbackComponent = /*#__PURE__*/function () {
        function MultiFeedbackComponent() {
          _classCallCheck(this, MultiFeedbackComponent);

          this.activityData = [];
          this.title = '';
          this.item = 'activity';
          this.items = 'activities';
          this.isCollapsed = false;
        }

        _createClass(MultiFeedbackComponent, [{
          key: "toggleCollapse",
          value: function toggleCollapse() {
            var _this14 = this;

            var _a;

            this.isCollapsed = !this.isCollapsed;
            (_a = this.groups) === null || _a === void 0 ? void 0 : _a.forEach(function (x) {
              return x.isCollapsed = _this14.isCollapsed;
            });
          }
        }]);

        return MultiFeedbackComponent;
      }();

      MultiFeedbackComponent.ɵfac = function MultiFeedbackComponent_Factory(t) {
        return new (t || MultiFeedbackComponent)();
      };

      MultiFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MultiFeedbackComponent,
        selectors: [["app-multi-feedback"]],
        viewQuery: function MultiFeedbackComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_feedback_group_feedback_group_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackGroupComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.groups = _t);
          }
        },
        inputs: {
          activityData: "activityData",
          title: "title",
          item: "item",
          items: "items",
          dqfs: "dqfs"
        },
        decls: 9,
        vars: 4,
        consts: [[1, "feedback"], [1, "title", "feedback-title"], [1, "toggle-collapse"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [4, "ngIf", "ngIfElse"], ["noActivityData", ""], [3, "activity", "item", "items", "dqfs", 4, "ngFor", "ngForOf"], [3, "activity", "item", "items", "dqfs"]],
        template: function MultiFeedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiFeedbackComponent_Template_button_click_4_listener() {
              return ctx.toggleCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiFeedbackComponent_div_6_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MultiFeedbackComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Collapse/expand all ", ctx.items, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activityData.length > 0)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _feedback_group_feedback_group_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackGroupComponent"]],
        styles: [".toggle-collapse[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -10px;\n}\n.feedback-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.feedback-title[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-top: -10px;\n}\n.feedback[_ngcontent-%COMP%] {\n  border: 1px lightgray solid;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL211bHRpLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEY7QUFVQTtFQUNFLGdCQUFBO0FBUkY7QUFVRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVJKO0FBWUE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFURiIsImZpbGUiOiJtdWx0aS1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC50aXRsZSB7XG4vLyAgIC8vIGRpc3BsYXk6IGlubGluZTtcbi8vIH1cblxuLnRvZ2dsZS1jb2xsYXBzZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcblxuICAuYnRuIHtcblxuICB9XG59XG5cbi5mZWVkYmFjay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgLmJ0bi5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbn1cblxuLmZlZWRiYWNre1xuICBib3JkZXI6IDFweCBsaWdodGdyYXkgc29saWQ7XG4gIHBhZGRpbmc6MTBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-data-quality-feedback-data-quality-feedback-module-es5.js.map