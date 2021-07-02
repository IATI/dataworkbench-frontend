(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisation-organisation-module"], {
    /***/
    "32L7":
    /*!***********************************************************************!*\
      !*** ./src/app/organisation/document-list/document-list.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DocumentListComponent */

    /***/
    function L7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function () {
        return DocumentListComponent;
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


      var _document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../document-list-item/document-list-item.component */
      "mZFe");

      function DocumentListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No files found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentListComponent_div_1_app_document_list_item_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-document-list-item", 8);
        }

        if (rf & 2) {
          var document_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("document", document_r3);
        }
      }

      function DocumentListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " File name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Identified in Registry ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Downloaded ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Validated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Entered in Datastore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DocumentListComponent_div_1_app_document_list_item_13_Template, 1, 1, "app-document-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.documents);
        }
      }

      var DocumentListComponent = /*#__PURE__*/function () {
        function DocumentListComponent() {
          var _this = this;

          _classCallCheck(this, DocumentListComponent);

          this.compareSeverity = function (a, b) {
            return _this.getSeverity(a) - _this.getSeverity(b);
          };

          this.getSeverity = function (document) {
            var error = -1;
            var warning = -1;

            if ('summary' in document && document.summary !== null) {
              var _document$summary = document.summary;
              error = _document$summary.error;
              warning = _document$summary.warning;
            }

            var validation = document.validation,
                valid = document.valid;

            if (validation === null) {
              return 2;
            } else if (valid === true && error === 0 && warning === 0) {
              return 5;
            } else if (valid === true && error === 0) {
              return 4;
            } else if (valid === true) {
              return 3;
            } else if (valid === false) {
              return 1;
            } else {
              return 2;
            }
          };
        }

        _createClass(DocumentListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Sort the documents based on severity
            this.documents.sort(this.compareSeverity);
          }
        }]);

        return DocumentListComponent;
      }();

      DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
        return new (t || DocumentListComponent)();
      };

      DocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentListComponent,
        selectors: [["app-document-list"]],
        inputs: {
          documents: "documents"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "result-validation-table", 4, "ngIf"], [1, "result-validation-table"], [1, "documents"], [1, "row", "heading"], [1, "col-12", "col-md"], [1, "col-12", "col-md", "d-none", "d-md-block"], [3, "document", 4, "ngFor", "ngForOf"], [3, "document"]],
        template: function DocumentListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocumentListComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentListComponent_div_1_Template, 14, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents !== undefined);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_2__["DocumentListItemComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.version-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.documents[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 0.15rem;\n  font-size: 1.5em;\n}\n.documents[_ngcontent-%COMP%]    > .heading[_ngcontent-%COMP%] {\n  background-color: #ecf0f1;\n  padding: 6px 0;\n  font-weight: 700;\n}\n.row[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNFLGtDQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZkY7QURrQkE7RUFDRSx5QkFBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EseUlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNqQkY7QURvQkE7RUFDRSxxQkFBQTtFQUNBLDJJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDbEJGO0FBakJBO0VBQ0UsaUJBQUE7QUFtQkY7QUFoQkE7RUFFRSwyQkFBQTtFQUNBLHNCQ0U0QjtFREQ1QixnQkFBQTtBQWtCRjtBQWZBO0VBQ0UseUJENEJTO0VDM0JULGNBQUE7RUFDQSxnQkFBQTtBQWtCRjtBQWZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFrQkYiLCJmaWxlIjoiZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsYXRseSA0LjAuMFxuLy8gQm9vdHN3YXRjaFxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4vLyBJQVRJXG4kaWF0aV9vY2VhbjogICAjMTU1MzM2ICFkZWZhdWx0O1xuJGlhdGlfYWlyOiAgICAgIzA2ZGJlNCAhZGVmYXVsdDtcbiRpYXRpX3dpbmQ6ICAgICNhNjZlZTkgIWRlZmF1bHQ7XG4kaWF0aS1zdW5yaXNlOiAjZmY3MjY0ICFkZWZhdWx0O1xuJGlhdGktbGFuZDogICAgIzAwYzQ5NyAhZGVmYXVsdDtcbiRpYXRpLXN1bnNldDogICNmNzMzNTcgIWRlZmF1bHQ7XG4kaWF0aS1hc2g6ICAgICAjZTNlM2UzICFkZWZhdWx0OyAgICBcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImNoYWxldC1sb25kb24tc2l4dHlcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicHJhZ21hdGljYVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBSZWd1bGFyXCIpLCBsb2NhbChcIlJvYm90by1SZWd1bGFyXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9tQ25xRXU5MkZyMU11NG14Sy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBNZWRpdW1cIiksIGxvY2FsKFwiUm9ib3RvLU1lZGl1bVwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbENucUV1OTJGcjFNbUVVOWZCQmM0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZWNmMGYxICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYjRiY2MyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjOTVhNWE2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjN2I4YThiICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogICAgIzJDM0U1MCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjRTc0QzNDICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI0YzOUMxMiAhZGVmYXVsdDtcbiRncmVlbjogICAjMThCQzlDICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzM0OThEQiAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkaWF0aS1sYW5kICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRpYXRpLWFpciAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkaWF0aS1zdW5yaXNlICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRpYXRpLXN1bnNldCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcbiAgXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW0gIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQgIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgZGFya2VuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi8vIC52aWV3LXR5cGUgdGJvZHkge1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC52aWV3LXR5cGUge1xuLy8gICBtYXJnaW46IDIwcHggMDtcbi8vIH1cblxuLnZlcnNpb24taW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZG9jdW1lbnRzIHtcbiAgLy8gbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5kb2N1bWVudHMgPiAuaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTIwMDtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "mZFe":
    /*!*********************************************************************************!*\
      !*** ./src/app/organisation/document-list-item/document-list-item.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: DocumentListItemComponent */

    /***/
    function mZFe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListItemComponent", function () {
        return DocumentListItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DocumentListItemComponent_div_0_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.document.first_seen, "yyyy-MM-dd HH:mm (z)"));
        }
      }

      function DocumentListItemComponent_div_0_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.document.downloaded, "yyyy-MM-dd HH:mm (z)"));
        }
      }

      function DocumentListItemComponent_div_0_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.document ? ctx_r3.document.validation_created : "", "yyyy-MM-dd HH:mm (z)"), " ");
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4) {
        return {
          "file-success": a0,
          "file-warning": a1,
          "file-error": a2,
          "file-critical": a3,
          "no-validation": a4
        };
      };

      function DocumentListItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListItemComponent_div_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.rowClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentListItemComponent_div_0_span_5_Template, 3, 4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListItemComponent_div_0_span_7_Template, 3, 4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocumentListItemComponent_div_0_span_9_Template, 3, 4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Datastore Entered Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](5, _c0, ctx_r0.fileStatus() === "success", ctx_r0.fileStatus() === "warning", ctx_r0.fileStatus() === "error", ctx_r0.fileStatus() === "critical", ctx_r0.fileStatus() === "normal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.fileName(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.document.first_seen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.document.downloaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.document.validation_created);
        }
      }

      var DocumentListItemComponent = /*#__PURE__*/function () {
        function DocumentListItemComponent(router) {
          _classCallCheck(this, DocumentListItemComponent);

          this.router = router;
        }

        _createClass(DocumentListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fileName",
          value: function fileName() {
            if ('url' in this.document) {
              return this.document.url.split('/').pop();
            } else {
              return 'No filename available';
            }
          }
        }, {
          key: "hasValidation",
          value: function hasValidation() {
            if (this.document.validation) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "fileStatus",
          value: function fileStatus() {
            var error = -1;
            var warning = -1;

            if ('summary' in this.document && this.document.summary !== null) {
              var _this$document$summar = this.document.summary;
              error = _this$document$summar.error;
              warning = _this$document$summar.warning;
            }

            var _this$document = this.document,
                validation = _this$document.validation,
                valid = _this$document.valid;

            if (validation === null) {
              return 'normal';
            } else if (valid === true && error === 0 && warning === 0) {
              return 'success';
            } else if (valid === true && error === 0) {
              return 'warning';
            } else if (valid === true) {
              return 'error';
            } else if (valid === false) {
              return 'critical';
            } else {
              return 'normal';
            }
          }
        }, {
          key: "isValid",
          value: function isValid() {
            if (this.document.validation && this.document.valid) {
              return true;
            } else if (this.document.validation && this.document.valid === false) {
              return false;
            } else {
              return null;
            }
          }
        }, {
          key: "reportType",
          value: function reportType() {
            if (this.hasValidation()) {
              return 'File Validation report (click to view)';
            } else {
              return '-';
            }
          }
        }, {
          key: "rowClick",
          value: function rowClick() {
            if (this.hasValidation()) {
              // this.router.navigate(['view', 'dqf', 'files', this.iatiDatasetData.id]);
              this.router.navigate(['view', 'dqf', 'files', this.document.id]);
              console.log('Validation Report Link Clicked', this.document.id);
            }
          }
        }]);

        return DocumentListItemComponent;
      }();

      DocumentListItemComponent.ɵfac = function DocumentListItemComponent_Factory(t) {
        return new (t || DocumentListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DocumentListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentListItemComponent,
        selectors: [["app-document-list-item"]],
        inputs: {
          document: "document"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "row", 3, "ngClass", "click"], [1, "col-12", "col-md"], [4, "ngIf"], [1, "col-12", "d-md-none"]],
        template: function DocumentListItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocumentListItemComponent_div_0_Template, 14, 11, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.document);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.row[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  margin-right: 0;\n  margin-left: 0;\n}\n.row.file-success[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #00c497;\n  font-weight: 700;\n}\n.row.file-critical[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #a66ee9;\n  font-weight: 700;\n}\n.row.file-error[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #f73357;\n  font-weight: 700;\n}\n.row.file-warning[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #ff7264;\n  font-weight: 700;\n}\n.row.no-validation[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.row.file-success[_ngcontent-%COMP%]:hover, .row.file-critical[_ngcontent-%COMP%]:hover, .row.file-error[_ngcontent-%COMP%]:hover, .row.file-warning[_ngcontent-%COMP%]:hover {\n  background-color: lightyellow;\n}\n.dqf-button[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.button-report-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL2RvY3VtZW50LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTJCRjtBQXhCQTtFQUNFLGVBQUE7RUFDQSxjREVhO0VDRGIsZ0JBQUE7QUEyQkY7QUF6QkE7RUFDRSxlQUFBO0VBQ0EsY0RMYTtFQ01iLGdCQUFBO0FBNEJGO0FBMUJBO0VBQ0UsZUFBQTtFQUNBLGNEUGE7RUNRYixnQkFBQTtBQTZCRjtBQTNCQTtFQUNFLGVBQUE7RUFDQSxjRGRhO0VDZWIsZ0JBQUE7QUE4QkY7QUEzQkE7RUFDRSxnQkFBQTtBQThCRjtBQTNCQTtFQUNFLDZCQUFBO0FBOEJGO0FBM0JBO0VBQ0UsVUFBQTtBQThCRjtBQTFCRTtFQUNFLGNBQUE7QUE2QkoiLCJmaWxlIjoiZG9jdW1lbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxhdGx5IDQuMC4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIElBVElcbiRpYXRpX29jZWFuOiAgICMxNTUzMzYgIWRlZmF1bHQ7XG4kaWF0aV9haXI6ICAgICAjMDZkYmU0ICFkZWZhdWx0O1xuJGlhdGlfd2luZDogICAgI2E2NmVlOSAhZGVmYXVsdDtcbiRpYXRpLXN1bnJpc2U6ICNmZjcyNjQgIWRlZmF1bHQ7XG4kaWF0aS1sYW5kOiAgICAjMDBjNDk3ICFkZWZhdWx0O1xuJGlhdGktc3Vuc2V0OiAgI2Y3MzM1NyAhZGVmYXVsdDtcbiRpYXRpLWFzaDogICAgICNlM2UzZTMgIWRlZmF1bHQ7ICAgIFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwcmFnbWF0aWNhXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlY2YwZjEgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNiNGJjYzIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM5NWE1YTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM3YjhhOGIgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMkMzRTUwICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNFNzRDM0MgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjRjM5QzEyICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOEJDOUMgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMzQ5OERCICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRpYXRpLWxhbmQgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGlhdGktYWlyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICRpYXRpLXN1bnJpc2UgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJGlhdGktc3Vuc2V0ICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiICFkZWZhdWx0O1xuICBcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdCAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBDbG9zZVxuXG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnJvdyB7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuXG59XG4ucm93LmZpbGUtc3VjY2VzcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICRzdWNjZXNzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnJvdy5maWxlLWNyaXRpY2FsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJHNldmVyaXR5LWNyaXRpY2FsO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnJvdy5maWxlLWVycm9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJHNldmVyaXR5LWVycm9yO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnJvdy5maWxlLXdhcm5pbmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAkc2V2ZXJpdHktd2FybmluZztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnJvdy5uby12YWxpZGF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnJvdy5maWxlLXN1Y2Nlc3M6aG92ZXIsIC5yb3cuZmlsZS1jcml0aWNhbDpob3ZlciwgLnJvdy5maWxlLWVycm9yOmhvdmVyLCAucm93LmZpbGUtd2FybmluZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4uZHFmLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24tcmVwb3J0LXdyYXBwZXIge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "p28f":
    /*!*****************************************************!*\
      !*** ./src/app/organisation/organisation.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrganisationModule */

    /***/
    function p28f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationModule", function () {
        return OrganisationModule;
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


      var _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./organisation/organisation.component */
      "wHl+");
      /* harmony import */


      var _shared_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/organisation.service */
      "Gl80");
      /* harmony import */


      var _organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../organisations/shared/organisations.service */
      "iSyK");
      /* harmony import */


      var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./document-list/document-list.component */
      "32L7");
      /* harmony import */


      var _document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./document-list-item/document-list-item.component */
      "mZFe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationComponent"]
      }, {
        path: ':name',
        component: _organisation_organisation_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationComponent"]
      }, {
        path: '',
        redirectTo: '/404dqf',
        pathMatch: 'full'
      }];

      var OrganisationModule = function OrganisationModule() {
        _classCallCheck(this, OrganisationModule);
      };

      OrganisationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: OrganisationModule
      });
      OrganisationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function OrganisationModule_Factory(t) {
          return new (t || OrganisationModule)();
        },
        providers: [_shared_organisation_service__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"], _organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_5__["OrganisationsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OrganisationModule, {
          declarations: [_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationComponent"], _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"], _document_list_item_document_list_item_component__WEBPACK_IMPORTED_MODULE_7__["DocumentListItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wHl+":
    /*!*********************************************************************!*\
      !*** ./src/app/organisation/organisation/organisation.component.ts ***!
      \*********************************************************************/

    /*! exports provided: OrganisationComponent */

    /***/
    function wHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationComponent", function () {
        return OrganisationComponent;
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


      var _shared_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../shared/organisation.service */
      "Gl80");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../document-list/document-list.component */
      "32L7");

      function OrganisationComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.organisationData == null ? null : ctx_r0.organisationData.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.organisationData == null ? null : ctx_r0.organisationData.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "col-md-9": a0
        };
      };

      function OrganisationComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.hasValidLogo()));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.organisationData == null ? null : ctx_r1.organisationData.description);
        }
      }

      function OrganisationComponent_app_document_list_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-document-list", 14);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documents", ctx_r2.organisationData == null ? null : ctx_r2.organisationData.documents);
        }
      }

      var OrganisationComponent = /*#__PURE__*/function () {
        function OrganisationComponent(organisationService, activateRoute) {
          var _this2 = this;

          _classCallCheck(this, OrganisationComponent);

          this.organisationService = organisationService;
          this.activateRoute = activateRoute;
          this.name = '';
          this.activateRoute.params.subscribe(function (params) {
            _this2.name = params['name'];
          });
        }

        _createClass(OrganisationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loadOrganisation(this.name);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadOrganisation",
          value: function loadOrganisation(name) {
            var _this3 = this;

            this.organisationService.getOrganisationAndDocuments(name).subscribe(function (data) {
              _this3.organisationData = data;
            }, function (error) {
              return _this3.error = error;
            });
          }
        }, {
          key: "hasValidLogo",
          value: function hasValidLogo() {
            if (this.organisationData !== undefined) {
              if ('image_url' in this.organisationData) {
                return this.organisationData.image_url !== '';
              }
            }

            return false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return OrganisationComponent;
      }();

      OrganisationComponent.ɵfac = function OrganisationComponent_Factory(t) {
        return new (t || OrganisationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      OrganisationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrganisationComponent,
        selectors: [["app-organisation"]],
        decls: 17,
        vars: 4,
        consts: [[1, "container"], [1, "organisation-name"], [1, "row", "about-organisation"], ["class", "col-md-3 h-100", 4, "ngIf"], ["class", "col", 3, "ngClass", 4, "ngIf"], [1, "workspaces"], [1, "mycard"], [1, "mycard-title"], [1, "mycard-body"], [1, "card-text"], [3, "documents", 4, "ngIf"], [1, "col-md-3", "h-100"], [1, "organisation-logo", "img-fluid", 3, "src", "alt"], [1, "col", 3, "ngClass"], [3, "documents"]],
        template: function OrganisationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrganisationComponent_div_5_Template, 2, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrganisationComponent_div_6_Template, 5, 4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Public data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "IATI files published in the IATI Registry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrganisationComponent_app_document_list_16_Template, 1, 1, "app-document-list", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.organisationData == null ? null : ctx.organisationData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasValidLogo());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.organisationData == null ? null : ctx.organisationData.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.organisationData == null ? null : ctx.organisationData.documents);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__["DocumentListComponent"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.mycard[_ngcontent-%COMP%] {\n  margin: 10px;\n  border: 1px lightgray solid;\n  border-radius: 0.15rem;\n  font-family: Lato;\n}\n.mycard-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  padding: 14px;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.mycard-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.workspace-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.organisation-name[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.about-organisation[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.workspaces[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -22px;\n}\n.card-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL29yZ2FuaXNhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0NBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNmRjtBRGtCQTtFQUNFLHlCQUFBO0VBQ0Esc2dCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSx5SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHFCQUFBO0VBQ0EsMklBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEpBQUE7QUNsQkY7QUF6QkE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkNjNEI7RURiNUIsaUJBQUE7QUEyQkY7QUF4QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtBQTJCRjtBQXhCQTtFQUNFLGFBQUE7QUEyQkY7QUF4QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUEyQkY7QUF4QkE7RUFDRSxtQkFBQTtBQTJCRjtBQXBCQTtFQUNFLG1CQUFBO0FBdUJGO0FBcEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBc0JGO0FBbkJBO0VBQ0UsV0FBQTtBQXNCRiIsImZpbGUiOiJvcmdhbmlzYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGbGF0bHkgNC4wLjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuLy8gSUFUSVxuJGlhdGlfb2NlYW46ICAgIzE1NTMzNiAhZGVmYXVsdDtcbiRpYXRpX2FpcjogICAgICMwNmRiZTQgIWRlZmF1bHQ7XG4kaWF0aV93aW5kOiAgICAjYTY2ZWU5ICFkZWZhdWx0O1xuJGlhdGktc3VucmlzZTogI2ZmNzI2NCAhZGVmYXVsdDtcbiRpYXRpLWxhbmQ6ICAgICMwMGM0OTcgIWRlZmF1bHQ7XG4kaWF0aS1zdW5zZXQ6ICAjZjczMzU3ICFkZWZhdWx0O1xuJGlhdGktYXNoOiAgICAgI2UzZTNlMyAhZGVmYXVsdDsgICAgXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInByYWdtYXRpY2FcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gUmVndWxhclwiKSwgbG9jYWwoXCJSb2JvdG8tUmVndWxhclwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTRteEsud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTWVkaXVtXCIpLCBsb2NhbChcIlJvYm90by1NZWRpdW1cIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2VjZjBmMSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2I0YmNjMiAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzk1YTVhNiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzdiOGE4YiAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICAgICMyQzNFNTAgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI0U3NEMzQyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNGMzlDMTIgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE4QkM5QyAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMzNDk4REIgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGlhdGktbGFuZCAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkaWF0aS1haXIgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJGlhdGktc3VucmlzZSAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkaWF0aS1zdW5zZXQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuLy8gTGlua3NcblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuXG4vLyBGb250c1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcImNoYWxldC1sb25kb24tc2l4dHlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIgIWRlZmF1bHQ7XG4gIFxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMC45Mzc1cmVtICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMi41cmVtICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0ICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgIGRhcmtlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIENsb3NlXG5cbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4ubXljYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBsaWdodGdyYXkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuLm15Y2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4ubXljYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4ud29ya3NwYWNlLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ub3JnYW5pc2F0aW9uLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4vLyAub3JnYW5pc2F0aW9uLWxvZ28ge1xuLy8gICBtYXgtd2lkdGg6IDI2MHB4O1xuLy8gfVxuXG4uYWJvdXQtb3JnYW5pc2F0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLndvcmtzcGFjZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vY29tcGVuc2F0ZSBmb3IgdGhlIG1hcmdpbiBvZiB0aGUgYm94ZXNcbiAgbWFyZ2luOiAwIC0yMnB4O1xufVxuXG4uY2FyZC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXNfaWF0aSc7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSA7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyIDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgO1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41IDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgO1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlIDtcblxuJGJhY2tncm91bmQtdGl0bGU6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4kc2V2ZXJpdHktbm90aWZpY2F0aW9uczogIzE4QkM5QztcblxuLy8gRm9yIHRoZSBEUUYgcmVwb3J0cyBzZXZlcml0eSBsZXZlbFxuJHNldmVyaXR5LWNyaXRpY2FsOiAgICAgICAkaWF0aS13aW5kO1xuJHNldmVyaXR5LWVycm9yOiAgICAgICAgICAkaWF0aS1zdW5zZXQ7XG4kc2V2ZXJpdHktd2FybmluZzogICAgICAgICRpYXRpLXN1bnJpc2U7XG4kc2V2ZXJpdHktaW1wcm92ZW1lbnQ6ICAgICRpYXRpLWFpcjtcbiRzZXZlcml0eS1vcHRpbWlzYXRpb25zOiAgJGlhdGktbGFuZDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjE1cmVtIDtcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=organisation-organisation-module-es5.js.map