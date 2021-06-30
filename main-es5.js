(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Lhg":
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Lhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "/bvK");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.activeTab = 'feedback';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.activeTab = window.location.pathname.substr(1);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 5,
        vars: 1,
        consts: [["id", "header", 1, "header"], [3, "activeTab"], [1, "container", "main-title-container"], [1, "main-title"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IATI Validator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeTab", ctx.activeTab);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]],
        styles: ["#header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, #124555 4%, #155366 20%);\n  margin-bottom: 5em;\n  padding-top: 15em;\n  padding-bottom: 2.5em;\n  \n  margin-top: -12.5em;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-image: url('marque-white.png');\n  background-size: 70%;\n  background-repeat: no-repeat;\n  background-position: top right;\n  opacity: 0.25;\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  border-left: 5px solid #06dbe4;\n  font-size: 60px;\n  color: #fff;\n  padding-left: 20px;\n}\n\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n\n.submenu[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 1em;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  margin-bottom: 25px;\n}\n\n@media (max-width: 600px) {\n  .submenu[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.submenu__item[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.submenu__separate[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.submenu__link--active[_ngcontent-%COMP%] {\n  color: #0f7864;\n  text-decoration: underline;\n}\n\n.iBXooL[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #c74239;\n  z-index: 99;\n}\n\n.iLlyNt[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  color: #c74239;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  margin-right: 5px;\n  flex-shrink: 0;\n  border-radius: 50%;\n}\n\n.iUzJmb[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.6em;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.iUzJmb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRSwwREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVJO0VBUkY7SUFTSSxlQUFBO0VBQ0o7QUFDRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUU7RUFQRjtJQVFJLHNCQUFBO0VBQ0Y7QUFDRjs7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJSTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQUZOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCg0JSwgIzEyNDU1NSksIGNvbG9yLXN0b3AoMjAlLCAjMTU1MzY2KSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTI0NTU1IDQlLCAjMTU1MzY2IDIwJSk7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgcGFkZGluZy10b3A6IDE1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAyLjVlbTtcbiAgLyogbWFyZ2luLXRvcCBmcm9tIC0xNS41ZW0gdG8gYWRkIHNwYWNpbmcgZm9yIHRlc3RpbmcgaGVhZGVyICovXG4gIG1hcmdpbi10b3A6IC0xMi41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJxdWUtd2hpdGUucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYWluLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwNmRiZTQ7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc3VibWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG5cbiAgJl9fc2VwYXJhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gICZfX2xpbmstLWFjdGl2ZSB7XG4gICAgY29sb3I6ICMwZjc4NjQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmlCWG9vTCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCA2NiwgNTcpO1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4uaUxseU50IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYigxOTksIDY2LCA1Nyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmlVekptYiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "/bvK":
    /*!***************************************************!*\
      !*** ./src/app/layout/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function bvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "submenu__link--active": a0
        };
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);

          this.activeTab = 'feedback';
          this.isCollapsed = true;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        inputs: {
          activeTab: "activeTab"
        },
        decls: 15,
        vars: 11,
        consts: [[1, "navbar", "navbar-light"], [1, "navbar__header"], ["href", "https://iatistandard.org", "title", "To the main IATI Standard website", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-menu"], ["routerLink", "/", 1, "navbar-menu__item", "nav-link", 3, "ngClass", "click"], ["routerLink", "/about", 1, "navbar-menu__item", "nav-link"], ["routerLink", "/validate", 1, "navbar-menu__item", "nav-link", 3, "ngClass", "click"], ["routerLink", "/organisations", 1, "navbar-menu__item", "nav-link", 3, "ngClass", "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() {
              return ctx.activeTab = "feedback";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " About Validator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
              return ctx.activeTab = "validate";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Check data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() {
              return ctx.activeTab = "organisations";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Public data viewer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.activeTab === "feedback"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.activeTab === "validate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.activeTab === "organisations"));
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 5;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4em;\n  margin-bottom: 4em;\n  background-color: #fff;\n  padding: 2em 3em;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);\n  flex-wrap: nowrap;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    margin-right: 2em;\n    margin-left: 2em;\n  }\n}\n@media (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar__header[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 3.9rem;\n  transition: 2s ease;\n  justify-content: flex-end;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  color: #121212;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 1.4rem;\n  margin-left: 20px;\n  padding: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 3px;\n  bottom: -20px;\n  left: 0;\n  background-color: #06dbe4;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item--active[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item--active[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu__item[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu__item[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url('logo-colour.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 60px;\n  width: 260px;\n  display: block;\n  margin-bottom: auto;\n}\n@media (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    width: 171px;\n    height: 40px;\n    margin: 0;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: inherit;\n    border: none;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse.collapse[_ngcontent-%COMP%] {\n  display: block;\n  transition: 2s ease;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse.collapse[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse.collapse.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-submenu[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  padding: 1em 3em 1em 2em;\n  top: 0;\n  right: 0;\n  background-color: #E3E3E3;\n}\n@media (max-width: 1150px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-submenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-sudmenu__item[_ngcontent-%COMP%] {\n  position: relative;\n  color: #121212;\n  margin-left: 25px;\n  text-decoration: none;\n  font-size: 1.4rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-sudmenu__item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-sudmenu__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  background-color: #06dbe4;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-sudmenu__item[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLDBDQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBZkY7SUFnQkksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFBRjtBQUNGO0FBRUU7RUFyQkY7SUFzQkksWUFBQTtFQUNGO0FBQ0Y7QUFFSTtFQURGO0lBRUksYUFBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVJO0VBTkY7SUFPSSxzQkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0FBQU47QUFHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUROO0FBSUk7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FBRk47QUFJTTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQU9NO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQUxSO0FBU0k7RUE3Q0Y7SUE4Q0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFOSjtBQUNGO0FBU0U7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQVZGO0lBV0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VBTko7QUFDRjtBQVNFO0VBQ0UsYUFBQTtBQVBKO0FBU0k7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsWUFBQTtFQU5KO0FBQ0Y7QUFTRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFKRjtJQUtJLGFBQUE7RUFOSjtBQUNGO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFVRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQVJKO0FBVUk7RUFSRjtJQVNJLGFBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVVJO0VBQ0UsY0FBQTtBQVJOO0FBV0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUFUTjtBQWFNO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQVhSIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtbDogMTE1MHB4O1xuXG4ubmF2YmFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJlbSAzZW07XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwIDAgNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbWwpIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuXG4gIC5uYXZiYXJfX2hlYWRlciB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtbCkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgXG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDMuOXJlbTtcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1sKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItbWVudV9faXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBib3R0b206IC0yMHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmRiZTQ7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJi0tYWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtbCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3N2Zy9sb2dvLWNvbG91ci5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDE3MXB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWwpIHtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWwpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItc3VibWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMWVtIDNlbSAxZW0gMmVtO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtbCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLXN1ZG1lbnVfX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogIzEyMTIxMjtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmRiZTQ7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/IATI-Validator-Web/IATI-Validator-Web/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var password, getPass;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(window.__env.stagePass === null)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      console.log(document.cookie);

                      if (!document.cookie.includes('whynot')) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 5:
                      password = null;

                      getPass = function getPass() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  password = window.prompt('Please enter the passphrase to enter the staging site.', '');

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      };

                    case 7:
                      if (!(password !== window.__env.stagePass)) {
                        _context2.next = 12;
                        break;
                      }

                      _context2.next = 10;
                      return getPass();

                    case 10:
                      _context2.next = 7;
                      break;

                    case 12:
                      document.cookie = 'pass=whynot';

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 37,
        vars: 0,
        consts: [[1, "container", "home-container"], [1, "lead"], ["href", "https://iatistandard.org/documents/10454/IATI_Validator_QA_September_2020.pdf"], [1, "options"], [1, "validate", "border"], [1, "validate__title"], ["routerLink", "/validate", "role", "button", 1, "btn", "btn-primary", "btn-lg", "optionbutton", "iati-button"], [1, "browse", "border"], [1, "browse__title"], ["routerLink", "/organisations", "role", "button", 1, "btn", "btn-primary", "btn-lg", "optionbutton", "iati-button"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The IATI Validator is an online tool for checking if data aligns with the rules and guidance of IATI Standard. It allows users to check and improve the quality of IATI data to ensure it is accessible and useful to anyone working with data on development and humanitarian resources and results.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "For more information, see ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "IATI Validator Q&A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Check data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Check your IATI data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Select and upload your IATI files OR add URL to files");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Get validation results");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Check data");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Public data viewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Check all files published on the IATI Registry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Find an organisation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "See the IATI files published by the organisation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Get validation results of an IATI file");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Public data viewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".home-container[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 50px;\n}\n@media (max-width: 768px) {\n  .home-container[_ngcontent-%COMP%]   .iati-data-title[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -10px;\n}\n@media (max-width: 768px) {\n  .options[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.validate[_ngcontent-%COMP%], .browse[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin: 10px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.15);\n  background-color: #fff;\n  border-top: 5px solid #06dbe4 !important;\n}\n.validate__title[_ngcontent-%COMP%], .browse__title[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: bold;\n}\n.optionbutton[_ngcontent-%COMP%] {\n  margin-top: auto;\n  white-space: normal;\n  border-radius: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.jumbotron[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.lead[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFFSTtFQURGO0lBRUksZUFBQTtFQUNKO0FBQ0Y7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtBQURGO0FBR0U7RUFORjtJQU9JLFNBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7QUFBRjtBQUdBOztFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBSUU7RUFDRSxnQkFBQTtBQURKO0FBSUE7RUFDRSxjQUFBO0FBREYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAuaWF0aS1kYXRhLXRpdGxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gIH1cbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vY29tcGVuc2F0ZSBmb3IgdGhlIG1hcmdpbiBvZiB0aGUgYm94ZXNcbiAgbWFyZ2luOiAtMTBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnZhbGlkYXRlLCAuYnJvd3NlIHtcbiAgZmxleDogMSAxIGF1dG8gO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwNmRiZTQhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdGVfX3RpdGxlLFxuLmJyb3dzZV9fdGl0bGUge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcHRpb25idXR0b24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uanVtYm90cm9uIHtcbiAgLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Gl80":
    /*!*************************************************************!*\
      !*** ./src/app/organisation/shared/organisation.service.ts ***!
      \*************************************************************/

    /*! exports provided: OrganisationService */

    /***/
    function Gl80(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationService", function () {
        return OrganisationService;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../core/logging/log.service */
      "SF6U");
      /* harmony import */


      var _organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../organisations/shared/organisations.service */
      "iSyK");

      var OrganisationService = /*#__PURE__*/function () {
        function OrganisationService(http, logger, allOrganisations) {
          _classCallCheck(this, OrganisationService);

          this.http = http;
          this.logger = logger;
          this.allOrganisations = allOrganisations;
          this.urlApiIatiDataset = window.__env.apiDataworkBench + '/iati-datasets';
          this.urlApiIatiFile = window.__env.apiDataworkBench + '/iati-files';
          this.urlApiOrganisationVS = window.__env.validatorServicesUrl + '/pvt/publishers';
          this.urlApiDocumentVS = window.__env.validatorServicesUrl + '/pvt/documents';
        }

        _createClass(OrganisationService, [{
          key: "getOrganisationAndDocuments",
          value: function getOrganisationAndDocuments(name) {
            var _this2 = this;

            return this.getOrganisationByName(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (data) {
              var org = data[0];
              var workspaces = [{
                slug: 'public',
                'owner-slug': name,
                title: 'Public data',
                description: 'IATI files published in the IATI Registry',
                id: org.iati_id,
                'iati-publisherId': org.iati_id,
                versions: null
              }];
              return _this2.getOrganisationDocuments(org.org_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (documents) {
                return Object.assign(Object.assign({}, org), {
                  workspaces: workspaces,
                  documents: documents
                });
              }));
            }));
          }
        }, {
          key: "getOrganisationByName",
          value: function getOrganisationByName(name) {
            var _this3 = this;

            var url = this.urlApiOrganisationVS + '/' + name + '?lookupKey=name';
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this3.log("fetched organisation");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getOrganisationByName', undefined)));
          }
        }, {
          key: "getOrganisationById",
          value: function getOrganisationById(id) {
            var _this4 = this;

            var url = this.urlApiOrganisationVS + '/' + id + '?lookupKey=id';
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this4.log("fetched organisation");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getOrganisationById', undefined)));
          }
        }, {
          key: "getDocument",
          value: function getDocument(documentId) {
            var _this5 = this;

            var url = this.urlApiDocumentVS + '/' + documentId;
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this5.log("fetched document");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getDocumentInfo', undefined)));
          }
        }, {
          key: "getOrganisationDocuments",
          value: function getOrganisationDocuments(organisationId) {
            var _this6 = this;

            var url = this.urlApiOrganisationVS + '/' + organisationId + '/documents';
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this6.log("fetched documents");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getOrganisationDocuments', [])));
          }
        }, {
          key: "getIatiDataset",
          value: function getIatiDataset(md5) {
            var _this7 = this;

            var url = this.urlApiIatiDataset + '/?filter[where][md5]=' + md5;
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this7.log("fetched iati dataset");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiDataset', undefined)));
          }
        }, {
          key: "getIatiDatasetById",
          value: function getIatiDatasetById(id) {
            var _this8 = this;

            var url = this.urlApiIatiDataset + '/?filter[where][id]=' + id;
            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this8.log("fetched iati dataset");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiDataset', undefined)));
          }
        }, {
          key: "getNextInQueue",
          value: function getNextInQueue() {
            var _this9 = this;

            var url = window.__env.apiDataworkBench + '/queue/next';
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this9.log("fetched iati dataset");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiDataset', undefined)));
          }
        }, {
          key: "getQueueLength",
          value: function getQueueLength() {
            var _this10 = this;

            var url = window.__env.apiDataworkBench + '/queue/length';
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this10.log("fetched queue length");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getQueueLength', undefined)));
          }
        }, {
          key: "getIatiFile",
          value: function getIatiFile(md5) {
            var _this11 = this;

            var url = this.urlApiIatiFile + '/file/json/' + md5 + '.json'; //   /iati-files/{container}/download/{file}

            this.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
              return _this11.log("fetched iati file");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getIatiFile', undefined)));
          }
        }, {
          key: "getEmptyWorkspace",
          value: function getEmptyWorkspace() {
            var ws = {
              id: '',
              description: '',
              // organisation_id: '',
              // organisation_name: '',
              slug: '',
              title: '',
              'owner-slug': '',
              'iati-publisherId': '',
              versions: []
            };
            return ws;
          }
        }, {
          key: "getEmptyVersion",
          value: function getEmptyVersion() {
            var _vs;

            var vs = (_vs = {
              id: '',
              slug: ''
            }, _defineProperty(_vs, 'owner-slug', ''), _defineProperty(_vs, 'workspace-slug', ''), _defineProperty(_vs, "title", ''), _defineProperty(_vs, "description", ''), _defineProperty(_vs, "md5", []), _defineProperty(_vs, "workspaceId", ''), _vs);
            return vs;
          }
        }, {
          key: "log",
          value: function log(message) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
              this.logger.debug(message);
            }
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
            var _this12 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging
              _this12.logger.error(error); // console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption
              // this.log(`${operation} failed: ${error.message}`);
              // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
            };
          }
        }]);

        return OrganisationService;
      }();

      OrganisationService.ɵfac = function OrganisationService_Factory(t) {
        return new (t || OrganisationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationsService"]));
      };

      OrganisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: OrganisationService,
        factory: OrganisationService.ɵfac
      });
      /***/
    },

    /***/
    "J0Fc":
    /*!***********************************************!*\
      !*** ./src/app/shared/autofocus.directive.ts ***!
      \***********************************************/

    /*! exports provided: AutofocusDirective */

    /***/
    function J0Fc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
        return AutofocusDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutofocusDirective = function AutofocusDirective(elementRef) {
        _classCallCheck(this, AutofocusDirective);

        elementRef.nativeElement.focus();
      };

      AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) {
        return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AutofocusDirective,
        selectors: [["", "appAutofocus", ""]]
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _spinner_circle_spinner_circle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner-circle/spinner-circle.component */
      "xMwM");
      /* harmony import */


      var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spinner/spinner.component */
      "f3yp");
      /* harmony import */


      var _autofocus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./autofocus.directive */
      "J0Fc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*
        Do declare components, directives, and pipes in a shared module when those items will be
        re-used and referenced by the components declared in other feature modules.
        Avoid providing services in shared modules. Services are usually singletons that are
        provided once for the entire application or in a particular feature module.
        https://angular.io/guide/styleguide#shared-feature-module
       */


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _spinner_circle_spinner_circle_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerCircleComponent"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _spinner_circle_spinner_circle_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerCircleComponent"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"]]
        });
      })();
      /***/

    },

    /***/
    "SF6U":
    /*!*********************************************!*\
      !*** ./src/app/core/logging/log.service.ts ***!
      \*********************************************/

    /*! exports provided: LogLevel, LogEntry, LogService */

    /***/
    function SF6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
        return LogLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogEntry", function () {
        return LogEntry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogService", function () {
        return LogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _log_publishers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./log-publishers.service */
      "UBye"); // Source: http://www.codemag.com/article/1711021
      // ****************************************************
      // Log Level Enumeration
      // ****************************************************


      var LogLevel;

      (function (LogLevel) {
        LogLevel[LogLevel["All"] = 0] = "All";
        LogLevel[LogLevel["Debug"] = 1] = "Debug";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Warn"] = 3] = "Warn";
        LogLevel[LogLevel["Error"] = 4] = "Error";
        LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
        LogLevel[LogLevel["Off"] = 6] = "Off";
      })(LogLevel || (LogLevel = {})); // ****************************************************
      // Log Entry Class
      // ****************************************************


      var LogEntry = /*#__PURE__*/function () {
        function LogEntry() {
          _classCallCheck(this, LogEntry);

          // Public Properties
          this.entryDate = new Date();
          this.message = '';
          this.level = LogLevel.Debug;
          this.extraInfo = [];
          this.logWithDate = true;
        } // **************
        // Public Methods
        // **************


        _createClass(LogEntry, [{
          key: "buildLogString",
          value: function buildLogString() {
            var value = '';

            if (this.logWithDate) {
              value = new Date() + ' - ';
            }

            value += 'Type: ' + LogLevel[this.level];
            value += ' - Message: ' + this.message;

            if (this.extraInfo.length) {
              value += ' - Extra Info: ' + this.formatParams(this.extraInfo);
            }

            return value;
          } // ***************
          // Private Methods
          // ***************

        }, {
          key: "formatParams",
          value: function formatParams(params) {
            var ret = params.join(','); // Is there at least one object in the array?

            if (params.some(function (p) {
              return typeof p === 'object';
            })) {
              ret = ''; // Build comma-delimited string

              var _iterator = _createForOfIteratorHelper(params),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  ret += JSON.stringify(item) + ',';
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return ret;
          }
        }]);

        return LogEntry;
      }(); // ****************************************************
      // Log Service Class
      // ****************************************************


      var LogService = /*#__PURE__*/function () {
        function LogService(publishersService) {
          _classCallCheck(this, LogService);

          this.publishersService = publishersService;
          this.level = LogLevel.All;
          this.logWithDate = true; // Set publishers

          this.publishers = this.publishersService.publishers;
        } // *************************
        // Public methods
        // *************************


        _createClass(LogService, [{
          key: "debug",
          value: function debug(msg) {
            for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              optionalParams[_key - 1] = arguments[_key];
            }

            this.writeToLog(msg, LogLevel.Debug, optionalParams);
          }
        }, {
          key: "info",
          value: function info(msg) {
            for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              optionalParams[_key2 - 1] = arguments[_key2];
            }

            this.writeToLog(msg, LogLevel.Info, optionalParams);
          }
        }, {
          key: "warn",
          value: function warn(msg) {
            for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              optionalParams[_key3 - 1] = arguments[_key3];
            }

            this.writeToLog(msg, LogLevel.Warn, optionalParams);
          }
        }, {
          key: "error",
          value: function error(msg) {
            for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              optionalParams[_key4 - 1] = arguments[_key4];
            }

            this.writeToLog(msg, LogLevel.Error, optionalParams);
          }
        }, {
          key: "fatal",
          value: function fatal(msg) {
            for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              optionalParams[_key5 - 1] = arguments[_key5];
            }

            this.writeToLog(msg, LogLevel.Fatal, optionalParams);
          }
        }, {
          key: "log",
          value: function log(msg) {
            for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              optionalParams[_key6 - 1] = arguments[_key6];
            }

            this.writeToLog(msg, LogLevel.All, optionalParams);
          }
        }, {
          key: "clear",
          value: function clear() {
            var _iterator2 = _createForOfIteratorHelper(this.publishers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var logger = _step2.value;
                logger.clear().subscribe(function (response) {
                  return console.log(response);
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // *************************
          // Private methods
          // *************************

        }, {
          key: "shouldLog",
          value: function shouldLog(level) {
            var ret = false;

            if (level >= this.level && level !== LogLevel.Off || this.level === LogLevel.All) {
              ret = true;
            }

            return ret;
          }
        }, {
          key: "writeToLog",
          value: function writeToLog(msg, level, params) {
            if (this.shouldLog(level)) {
              // Declare variables
              var entry = new LogEntry(); // Build Log Entry

              entry.message = msg;
              entry.level = level;
              entry.extraInfo = params;
              entry.logWithDate = this.logWithDate;

              var _iterator3 = _createForOfIteratorHelper(this.publishers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var logger = _step3.value;
                  logger.log(entry).subscribe(function (response) {
                    return '';
                  }); // .subscribe(response => console.log(response));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }]);

        return LogService;
      }();

      LogService.ɵfac = function LogService_Factory(t) {
        return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_publishers_service__WEBPACK_IMPORTED_MODULE_1__["LogPublishersService"]));
      };

      LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LogService,
        factory: LogService.ɵfac
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-gtag */
      "e/9f");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "/Lhg");
      /* harmony import */


      var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/loader/loader.component */
      "aPAT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "kVkw");

      var AppComponent = function AppComponent(gtag) {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_gtag__WEBPACK_IMPORTED_MODULE_1__["Gtag"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [[1, "page-wrap"], [1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Tx//":
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /*! exports provided: LayoutModule */

    /***/
    function Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-gtag */
      "e/9f");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "kVkw");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "/Lhg");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "/bvK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: LayoutModule
      });
      LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function LayoutModule_Factory(t) {
          return new (t || LayoutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_3__["GtagModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LayoutModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_3__["GtagModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
        });
      })();
      /***/

    },

    /***/
    "TxT8":
    /*!************************************************!*\
      !*** ./src/app/core/logging/log-publishers.ts ***!
      \************************************************/

    /*! exports provided: LogPublisher, LogConsole, LogLocalStorage, LogWebApi */

    /***/
    function TxT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogPublisher", function () {
        return LogPublisher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogConsole", function () {
        return LogConsole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogLocalStorage", function () {
        return LogLocalStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogWebApi", function () {
        return LogWebApi;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* eslint-disable max-classes-per-file,no-shadow,@typescript-eslint/naming-convention */
      // ****************************************************
      // Log Publisher Abstract Class
      // NOTE: This class must be located BEFORE
      //       all those that extend this class
      // ****************************************************


      var LogPublisher = function LogPublisher() {
        _classCallCheck(this, LogPublisher);
      }; // ****************************************************
      // Console Logging Class
      // ****************************************************


      var LogConsole = /*#__PURE__*/function (_LogPublisher) {
        _inherits(LogConsole, _LogPublisher);

        var _super = _createSuper(LogConsole);

        function LogConsole() {
          _classCallCheck(this, LogConsole);

          return _super.apply(this, arguments);
        }

        _createClass(LogConsole, [{
          key: "log",
          value: function log(entry) {
            // Log to console
            console.log(entry.buildLogString());
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          }
        }, {
          key: "clear",
          value: function clear() {
            console.clear();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          }
        }]);

        return LogConsole;
      }(LogPublisher); // ****************************************************
      // Local Storage Logging Class
      // ****************************************************


      var LogLocalStorage = /*#__PURE__*/function (_LogPublisher2) {
        _inherits(LogLocalStorage, _LogPublisher2);

        var _super2 = _createSuper(LogLocalStorage);

        function LogLocalStorage() {
          var _this13;

          _classCallCheck(this, LogLocalStorage);

          // Must call super() from derived classes
          _this13 = _super2.call(this); // Set location

          _this13.location = 'logging';
          return _this13;
        } // Append log entry to local storage


        _createClass(LogLocalStorage, [{
          key: "log",
          value: function log(entry) {
            var ret = false;
            var values;

            try {
              // Retrieve previous values from local storage
              values = JSON.parse(localStorage.getItem(this.location)) || []; // Add new log entry to array

              values.push(entry); // Store array into local storage

              localStorage.setItem(this.location, JSON.stringify(values)); // Set return value

              ret = true;
            } catch (ex) {
              // Display error in console
              console.log(ex);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(ret);
          } // Clear all log entries from local storage

        }, {
          key: "clear",
          value: function clear() {
            localStorage.removeItem(this.location);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          }
        }]);

        return LogLocalStorage;
      }(LogPublisher); // ****************************************************
      // Logging Web API Class
      // ****************************************************


      var LogWebApi = /*#__PURE__*/function (_LogPublisher3) {
        _inherits(LogWebApi, _LogPublisher3);

        var _super3 = _createSuper(LogWebApi);

        function LogWebApi(http) {
          var _this14;

          _classCallCheck(this, LogWebApi);

          // Must call super() from derived classes
          _this14 = _super3.call(this);
          _this14.http = http; // Set location

          _this14.location = '/api/logging';
          return _this14;
        } // **************
        // Public Methods
        // **************
        // Add log entry to back end data store


        _createClass(LogWebApi, [{
          key: "log",
          value: function log(entry) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.post(this.location, entry, {
              headers: headers
            }).pipe(this.handleErrors);
          } // Clear all log entries from local storage

        }, {
          key: "clear",
          value: function clear() {
            // TODO: Call Web API to clear all values
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          } // ***************
          // Private Methods
          // ***************

        }, {
          key: "handleErrors",
          value: function handleErrors(error) {
            var errors = [];
            var msg = '';
            msg = 'Status: ' + error.status;
            msg += ' - Status Text: ' + error.statusText;

            if (error.json()) {
              msg += ' - Exception Message: ' + error.json().exceptionMessage;
            }

            errors.push(msg);
            console.error('An error occurred', errors);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errors);
          }
        }]);

        return LogWebApi;
      }(LogPublisher);
      /***/

    },

    /***/
    "UBye":
    /*!********************************************************!*\
      !*** ./src/app/core/logging/log-publishers.service.ts ***!
      \********************************************************/

    /*! exports provided: LogPublishersService */

    /***/
    function UBye(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogPublishersService", function () {
        return LogPublishersService;
      });
      /* harmony import */


      var _log_publishers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./log-publishers */
      "TxT8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/http */
      "qlzE"); // import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi } from './log-publishers';
      // ****************************************************
      // Logging Publishers Service Class
      // ****************************************************


      var LogPublishersService = /*#__PURE__*/function () {
        function LogPublishersService(http) {
          _classCallCheck(this, LogPublishersService);

          this.http = http; // Public properties

          this.publishers = []; // Build publishers arrays

          this.buildPublishers();
        } // *************************
        // Public methods
        // *************************
        // Build publishers array


        _createClass(LogPublishersService, [{
          key: "buildPublishers",
          value: function buildPublishers() {
            // Create instance of LogConsole Class
            this.publishers.push(new _log_publishers__WEBPACK_IMPORTED_MODULE_0__["LogConsole"]()); // Create instance of LogLocalStorage Class
            // this.publishers.push(new LogLocalStorage());
            // Create instance of LogWebApi Class
            // this.publishers.push(new LogWebApi(this.http));
          }
        }]);

        return LogPublishersService;
      }();

      LogPublishersService.ɵfac = function LogPublishersService_Factory(t) {
        return new (t || LogPublishersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]));
      };

      LogPublishersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LogPublishersService,
        factory: LogPublishersService.ɵfac
      });
      /***/
    },

    /***/
    "Wf50":
    /*!*********************************************!*\
      !*** ./src/app/core/module-import-guard.ts ***!
      \*********************************************/

    /*! exports provided: throwIfAlreadyLoaded */

    /***/
    function Wf50(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
        return throwIfAlreadyLoaded;
      }); // Prevent re-import of the core module
      // https://angular.io/guide/styleguide#prevent-re-import-of-the-core-module


      var throwIfAlreadyLoaded = function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
        }
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/layout.module */
      "Tx//");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _views_data_quality_feedback_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/data-quality-feedback/about/about.component */
      "goxy");
      /* harmony import */


      var angular_gtag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-gtag */
      "e/9f");
      /* harmony import */


      var _organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./organisation/shared/organisation.service */
      "Gl80");
      /* harmony import */


      var _organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./organisations/shared/organisations.service */
      "iSyK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_organisation_shared_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"], _organisations_shared_organisations_service__WEBPACK_IMPORTED_MODULE_13__["OrganisationsService"]],
        imports: [[angular_gtag__WEBPACK_IMPORTED_MODULE_11__["GtagModule"].forRoot({
          trackingId: 'UA-110230511-9',
          trackPageviews: true
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _views_data_quality_feedback_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]],
          imports: [angular_gtag__WEBPACK_IMPORTED_MODULE_11__["GtagModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
          exports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]
        });
      })();
      /***/

    },

    /***/
    "aPAT":
    /*!*************************************************!*\
      !*** ./src/app/core/loader/loader.component.ts ***!
      \*************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function aPAT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loader.service */
      "b6Gx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoaderComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
        }
      }

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent(loaderService) {
          _classCallCheck(this, LoaderComponent);

          this.loaderService = loaderService;
          this.show = false;
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.subscription = this.loaderService.loaderState.subscribe(function (state) {
              _this15.show = state.show;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 1,
        vars: 1,
        consts: [["class", "loader", 4, "ngIf"], [1, "loader"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.loader[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  \n  z-index: 500000;\n}\n.loader[_ngcontent-%COMP%]:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #E74C3C;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite;\n}\n@-webkit-keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEwQkY7QUF4QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJEeUNRO0VDeENSLDZDQUFBO1VBQUEscUNBQUE7QUEyQkY7QUF4QkE7RUFDSTtJQUFNLFlBQUE7SUFBYyxVQUFBO0VBNkJ0QjtFQTVCRTtJQUFLLFVBQUE7RUErQlA7RUE5QkU7SUFBSyxVQUFBO0VBaUNQO0VBaENFO0lBQU0sU0FBQTtFQW1DUjtFQWxDRTtJQUFLLFVBQUE7RUFxQ1A7RUFwQ0U7SUFBSSxVQUFBO0VBdUNOO0FBQ0Y7QUE5Q0E7RUFDSTtJQUFNLFlBQUE7SUFBYyxVQUFBO0VBNkJ0QjtFQTVCRTtJQUFLLFVBQUE7RUErQlA7RUE5QkU7SUFBSyxVQUFBO0VBaUNQO0VBaENFO0lBQU0sU0FBQTtFQW1DUjtFQWxDRTtJQUFLLFVBQUE7RUFxQ1A7RUFwQ0U7SUFBSSxVQUFBO0VBdUNOO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxhdGx5IDQuMC4wXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbi8vIElBVElcbiRpYXRpX29jZWFuOiAgICMxNTUzMzYgIWRlZmF1bHQ7XG4kaWF0aV9haXI6ICAgICAjMDZkYmU0ICFkZWZhdWx0O1xuJGlhdGlfd2luZDogICAgI2E2NmVlOSAhZGVmYXVsdDtcbiRpYXRpLXN1bnJpc2U6ICNmZjcyNjQgIWRlZmF1bHQ7XG4kaWF0aS1sYW5kOiAgICAjMDBjNDk3ICFkZWZhdWx0O1xuJGlhdGktc3Vuc2V0OiAgI2Y3MzM1NyAhZGVmYXVsdDtcbiRpYXRpLWFzaDogICAgICNlM2UzZTMgIWRlZmF1bHQ7ICAgIFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiY2hhbGV0LWxvbmRvbi1zaXh0eVwiO1xuICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iMjBlZDQvMDAwMDAwMDAwMDAwMDAwMDAwMDE1NGQ1LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IGF1dG87XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJwcmFnbWF0aWNhXCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk4Mzg3Mi8wMDAwMDAwMDAwMDAwMDAwMDAwMTAwY2MvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvLVJlZ3VsYXJcIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT21DbnFFdTkyRnIxTXU0bXhLLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMC1GRiwgVSsxMzEsIFUrMTUyLTE1MywgVSsyQkItMkJDLCBVKzJDNiwgVSsyREEsIFUrMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8tTWVkaXVtXCIpLCB1cmwoXCIvL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkJCYzQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlY2YwZjEgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNiNGJjYzIgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM5NWE1YTYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM3YjhhOGIgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAgICAjMkMzRTUwICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNFNzRDM0MgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjRjM5QzEyICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOEJDOUMgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMzQ5OERCICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgICAgJGlhdGktb2NlYW4gIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRpYXRpLWxhbmQgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGlhdGktYWlyICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICRpYXRpLXN1bnJpc2UgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJGlhdGktc3Vuc2V0ICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcblxuLy8gRm9udHNcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiICFkZWZhdWx0O1xuICBcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgM3JlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdCAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICRzdWNjZXNzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MsIDE1JSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBDbG9zZVxuXG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmxvYWRlciB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgdG9wOjA7XG4gIGxlZnQ6IDA7XG4gIC8qIG9wYWNpdHk6IDE7ICovXG4gIHotaW5kZXg6IDUwMDAwMDtcbn1cbi5sb2FkZXI6YmVmb3Jle1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAtMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gICAgZnJvbSB7bGVmdDogLTIwMHB4OyB3aWR0aDogMzAlO31cbiAgICA1MCUge3dpZHRoOiAzMCU7fVxuICAgIDcwJSB7d2lkdGg6IDcwJTt9XG4gICAgODAlIHsgbGVmdDogNTAlO31cbiAgICA5NSUge2xlZnQ6IDEyMCU7fVxuICAgIHRvIHtsZWZ0OiAxMDAlO31cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "b6Gx":
    /*!***********************************************!*\
      !*** ./src/app/core/loader/loader.service.ts ***!
      \***********************************************/

    /*! exports provided: LoaderService */

    /***/
    function b6Gx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService() {
          _classCallCheck(this, LoaderService);

          this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.loaderState = this.loaderSubject.asObservable();
        }

        _createClass(LoaderService, [{
          key: "show",
          value: function show() {
            this.loaderSubject.next({
              show: true
            });
          }
        }, {
          key: "hide",
          value: function hide() {
            this.loaderSubject.next({
              show: false
            });
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || LoaderService)();
      };

      LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoaderService,
        factory: LoaderService.ɵfac
      });
      /***/
    },

    /***/
    "f3yp":
    /*!*****************************************************!*\
      !*** ./src/app/shared/spinner/spinner.component.ts ***!
      \*****************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function f3yp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent() {
          _classCallCheck(this, SpinnerComponent);

          this.backColor = '#3498db';
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)();
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backColor: "backColor"
        },
        decls: 4,
        vars: 9,
        consts: [[1, "spinner"], [1, "bounce1", 3, "ngStyle"], [1, "bounce2", 3, "ngStyle"], [1, "bounce3", 3, "ngStyle"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.backColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.backColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.backColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".spinner[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: #3498db;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHRSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3REFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFBZ0IsMkJBQUE7RUFIaEI7RUFJQTtJQUFNLDJCQUFBO0VBRE47QUFDRjs7QUFHQTtFQUNFO0lBRUUsbUJBQUE7RUFERjtFQUVFO0lBRUEsbUJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTb3VyY2U6IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC9cbi5zcGlubmVyIHtcbiAgLy8gbWFyZ2luOiAwIGF1dG8gMDtcbiAgLy8gd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG5cbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XG4gIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9IDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "goxy":
    /*!**********************************************************************!*\
      !*** ./src/app/views/data-quality-feedback/about/about.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function goxy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 91,
        vars: 0,
        consts: [[1, "about-container"], [1, "about-content"], [1, "about-content__description"], [1, "about-content__title"], [1, "about-content__description", "list-item"], [1, "list-item-style"], ["href", "mailto:support@iatistandard.org"], ["href", "https://iatistandard.org/en/events/"], ["href", "https://discuss.iatistandard.org/c/community-zone/data-quality"], [1, "about-content__description", "set-title"], ["href", "http://reference.iatistandard.org/203/schema/"], ["href", "https://github.com/IATI/IATI-Rulesets", "target", "_blank"], ["href", "https://iatistandard.org/documents/10454/IATI_Validator_QA_September_2020.pdf", "target", "_blank"], ["href", "https://iatistandard.org/en/guidance/preparing-data/donors-reporting-requirements/"], ["href", "https://github.com/IATI"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " The IATI Validator checks if IATI data complies with the rules and guidance in the IATI Standard. Find information on how to improve the quality of development and humanitarian IATI data on resources and results to ensure it is accessible and useful. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "How does the IATI Validator work?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "There are two ways to use the IATI Validator.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Anyone can upload their IATI data files to be checked before publishing them.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Anyone can check all IATI data files that have been published.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "The IATI Validator undertakes multiple layers of checks to identify where data does not comply with the IATI Standard. The Validator provides messages to indicate where errors have occurred and what needs to be changed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "What happens when the IATI Validator identifies invalid data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "An error or a warning message is displayed for each occurrence of an error, identifying what data needs to be corrected and where it occurs in the data file. A count of errors is also displayed which shows how many times an error is repeated throughout a file. For example, if all activities in a dataset have omitted activity dates, then the user will see a count of this repeated error as well as the location of each error.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "What help and support can publishers access to correct their data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "When data requires correcting, an actionable error or warning message will be displayed. In the near future, the IATI Validator will be updated to provide specific instructions on how to correct data. For additional support using the IATI Validator, please refer to:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " IATI Technical Team helpdesk: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "support@iatistandard.org");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Sign-up to webinars held by the IATI Technical Team on how to use the IATI Validator. Details of upcoming webinars can be found at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "IATI Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Post questions to IATI\u2019s community on the forum: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "IATI Discuss");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Specifically what checks will be made to IATI datafiles?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "The IATI Validator run checks on datafiles against version 2 of the IATI Standard Schema and Rulesets.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Check 1: Schema Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "The IATI Validator checks if data adheres to the format set out in the IATI XML Schema. The IATI Schema provides the exact order and structure that organisations should provide their XML in. Full information about the IATI Schema can be found on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "IATI\u2019s Reference site");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Check 2: Rulesets Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "The IATI Validator also checks if the data follows IATI\u2019s Rulesets. These checks provide a more detailed review of the quality of data. To view the most up-to-date information about IATI\u2019s Rulesets please refer to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " IATI Ruleset repository");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "For more information, please see ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Q&A: New IATI Validator");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Does the IATI Validator check if datasets have complied with a donor\u2019s requirement to publish data to the IATI Standard?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "No. Different donors have their own specific set of data requirements for their grantees that are additional to the IATI Standard rules. Organisations need to refer to their donor\u2019s guidance and more information can be found on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "IATI Guidance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "What is the tech stack powering the service?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "All application code can be found in the IATI-Validator repositories in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["@font-face {\n  font-family: \"chalet-london-sixty\";\n  src: url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/b20ed4/0000000000000000000154d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 400;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"pragmatica\";\n  src: url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"), url(\"https://use.typekit.net/af/983872/0000000000000000000100cc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");\n  font-style: normal;\n  font-weight: 700;\n  font-display: auto;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Regular\"), local(\"Roboto-Regular\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 500;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.about-container[_ngcontent-%COMP%] {\n  max-width: 1088px;\n  margin: 0 auto;\n}\n.about-container[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%] {\n  margin: 45px 0;\n  padding: 0 30px;\n}\n.about-container[_ngcontent-%COMP%]   .about-content__title[_ngcontent-%COMP%] {\n  font-size: 1.640625rem;\n  font-weight: bold;\n  margin: 20px 0;\n}\n.about-container[_ngcontent-%COMP%]   .about-content__description[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .list-item-style[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n.about-container[_ngcontent-%COMP%]   .about-content__description.set-title[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzX2lhdGkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQ0FBQTtFQUNBLHNnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxzZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLHlJQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRKQUFBO0FDakJGO0FEb0JBO0VBQ0UscUJBQUE7RUFDQSwySUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBQ2xCRjtBQXpCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQTJCSjtBQTFCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBNEJSO0FBMUJJO0VBQ0ksc0JDTnNCO0VET3RCLGlCQUFBO0VBQ0EsY0FBQTtBQTRCUjtBQXhCWTtFQUNJLGNBQUE7QUEwQmhCO0FBdkJRO0VBQ0ksMEJBQUE7QUF5QloiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGbGF0bHkgNC4wLjBcbi8vIEJvb3Rzd2F0Y2hcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuLy8gSUFUSVxuJGlhdGlfb2NlYW46ICAgIzE1NTMzNiAhZGVmYXVsdDtcbiRpYXRpX2FpcjogICAgICMwNmRiZTQgIWRlZmF1bHQ7XG4kaWF0aV93aW5kOiAgICAjYTY2ZWU5ICFkZWZhdWx0O1xuJGlhdGktc3VucmlzZTogI2ZmNzI2NCAhZGVmYXVsdDtcbiRpYXRpLWxhbmQ6ICAgICMwMGM0OTcgIWRlZmF1bHQ7XG4kaWF0aS1zdW5zZXQ6ICAjZjczMzU3ICFkZWZhdWx0O1xuJGlhdGktYXNoOiAgICAgI2UzZTNlMyAhZGVmYXVsdDsgICAgXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJjaGFsZXQtbG9uZG9uLXNpeHR5XCI7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjIwZWQ0LzAwMDAwMDAwMDAwMDAwMDAwMDAxNTRkNS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2IyMGVkNC8wMDAwMDAwMDAwMDAwMDAwMDAwMTU0ZDUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInByYWdtYXRpY2FcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85ODM4NzIvMDAwMDAwMDAwMDAwMDAwMDAwMDEwMGNjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTgzODcyLzAwMDAwMDAwMDAwMDAwMDAwMDAxMDBjYy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBhdXRvO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gUmVndWxhclwiKSwgbG9jYWwoXCJSb2JvdG8tUmVndWxhclwiKSwgdXJsKFwiLy9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTgvS0ZPbUNucUV1OTJGcjFNdTRteEsud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdW5pY29kZS1yYW5nZTogVSswLUZGLCBVKzEzMSwgVSsxNTItMTUzLCBVKzJCQi0yQkMsIFUrMkM2LCBVKzJEQSwgVSsyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gTWVkaXVtXCIpLCBsb2NhbChcIlJvYm90by1NZWRpdW1cIiksIHVybChcIi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE4L0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICB1bmljb2RlLXJhbmdlOiBVKzAtRkYsIFUrMTMxLCBVKzE1Mi0xNTMsIFUrMkJCLTJCQywgVSsyQzYsIFUrMkRBLCBVKzJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2VjZjBmMSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2I0YmNjMiAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzk1YTVhNiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzdiOGE4YiAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICAgICMyQzNFNTAgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI0U3NEMzQyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNGMzlDMTIgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE4QkM5QyAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMzNDk4REIgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAgICAkaWF0aS1vY2VhbiAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGlhdGktbGFuZCAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkaWF0aS1haXIgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJGlhdGktc3VucmlzZSAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkaWF0aS1zdW5zZXQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuLy8gTGlua3NcblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRpYXRpLW9jZWFuICFkZWZhdWx0O1xuXG4vLyBGb250c1xuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcImNoYWxldC1sb25kb24tc2l4dHlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIgIWRlZmF1bHQ7XG4gIFxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMC45Mzc1cmVtICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMi41cmVtICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0ICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgIGRhcmtlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIENsb3NlXG5cbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAuYWJvdXQtY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogNDVweCAwO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgfVxuICAgIC5hYm91dC1jb250ZW50X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGgzLWZvbnQtc2l6ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgICAuYWJvdXQtY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIC5saXN0LWl0ZW0tc3R5bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuc2V0LXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzX2lhdGknO1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgO1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiA7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1IDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSA7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1IDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSA7XG5cbiRiYWNrZ3JvdW5kLXRpdGxlOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuJHNldmVyaXR5LW5vdGlmaWNhdGlvbnM6ICMxOEJDOUM7XG5cbi8vIEZvciB0aGUgRFFGIHJlcG9ydHMgc2V2ZXJpdHkgbGV2ZWxcbiRzZXZlcml0eS1jcml0aWNhbDogICAgICAgJGlhdGktd2luZDtcbiRzZXZlcml0eS1lcnJvcjogICAgICAgICAgJGlhdGktc3Vuc2V0O1xuJHNldmVyaXR5LXdhcm5pbmc6ICAgICAgICAkaWF0aS1zdW5yaXNlO1xuJHNldmVyaXR5LWltcHJvdmVtZW50OiAgICAkaWF0aS1haXI7XG4kc2V2ZXJpdHktb3B0aW1pc2F0aW9uczogICRpYXRpLWxhbmQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4xNXJlbSA7XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "iSyK":
    /*!***************************************************************!*\
      !*** ./src/app/organisations/shared/organisations.service.ts ***!
      \***************************************************************/

    /*! exports provided: OrganisationsService */

    /***/
    function iSyK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganisationsService", function () {
        return OrganisationsService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/logging/log.service */
      "SF6U");

      var OrganisationsService = /*#__PURE__*/function () {
        function OrganisationsService(http, logger) {
          _classCallCheck(this, OrganisationsService);

          this.http = http;
          this.logger = logger;
          this.organisationsUrl = window.__env.validatorServicesUrl;
        }

        _createClass(OrganisationsService, [{
          key: "getOrganisations",
          value: function getOrganisations() {
            var _this16 = this;

            var url = this.organisationsUrl + '/pvt/publishers';
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this16.log("fetched organisations");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getOrganisations', [])));
          }
        }, {
          key: "log",
          value: function log(message) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
              console.log(message);
            }
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
            var _this17 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging
              _this17.logger.error(error); // console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption
              // this.log(`${operation} failed: ${error.message}`);
              // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
            };
          }
        }]);

        return OrganisationsService;
      }();

      OrganisationsService.ɵfac = function OrganisationsService_Factory(t) {
        return new (t || OrganisationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_logging_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]));
      };

      OrganisationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: OrganisationsService,
        factory: OrganisationsService.ɵfac
      });
      /***/
    },

    /***/
    "kVkw":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function kVkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.webVersion = window.__env.valWebVersion;
            this.serverVersion = window.__env.valServerVersion;
            this.actualVersion = window.__env.valActualVersion;
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 37,
        vars: 3,
        consts: [[1, "footer"], [1, "footer-content", "container"], [1, "footer-content__block"], ["href", "https://iatistandard.org", 1, "footer-content__brand"], [1, "footer-content__title"], [1, "footer-content__list", "useful-list"], [1, "useful-list__link-block"], ["href", "https://iatistandard.org/en/contact/", 1, "useful-list__link"], ["href", "https://iatistandard.org/en/privacy-policy/", 1, "useful-list__link"], [1, "footer-content__block", "logo-block"], [1, "footer-content_logo-desctiption"], [1, "footer-content__text"], ["href", "https://www.gnu.org/licenses/agpl-3.0.en.html", 1, "description-link"], ["href", "https://creativecommons.org/licenses/by/4.0/", 1, "description-link"], [1, "footer-meta"], [1, "container"], [1, "footer-meta__copyright"], [1, "meta-social"], ["href", "https://twitter.com/IATI_aid", 1, "meta-social__link", "meta-social__link--twitter"], ["href", "https://www.youtube.com/channel/UCAVH1gcgJXElsj8ENC-bDQQ", 1, "meta-social__link", "meta-social__link--youtube"], ["href", "https://www.linkedin.com/company/international-aid-transparency-initiative/", 1, "meta-social__link", "meta-social__link--linkedin"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Useful links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Code licensed under the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GNU AGPL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Documentation licensed under ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CC BY 3.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Copyright IATI 2020. All rights reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Web v.", ctx.webVersion, " Server v.", ctx.serverVersion, " Actual v.", ctx.actualVersion, "");
          }
        },
        styles: [".clearfix[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #155366;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 40px 10px;\n}\n\n@media (max-width: 1150px) {\n  .footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__brand[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 70px;\n  background-image: url('logo-white.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n@media (max-width: 1150px) {\n  .footer[_ngcontent-%COMP%]   .footer-content__brand[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__poweredby[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 50px;\n  background-image: url('data4development-white.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0;\n}\n\n.footer[_ngcontent-%COMP%]   .useful-list__link-block[_ngcontent-%COMP%]    > .useful-list__link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 0.75em;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #fff;\n  font-weight: 800;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__title.title-logo[_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n  letter-spacing: 0;\n  font-size: 1.5em;\n  font-weight: 400;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content_logo-container[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 1150px) {\n  .footer[_ngcontent-%COMP%]   .footer-content_logo-container[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content_logo-desctiption[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content_logo-desctiption[_ngcontent-%COMP%]   .description-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content_logo-desctiption[_ngcontent-%COMP%]   .footer-content__text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 1150px) {\n  .footer[_ngcontent-%COMP%]   .footer-content_logo-desctiption[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content__sign-up[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.footer[_ngcontent-%COMP%]   .sign-up-email__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\n.footer[_ngcontent-%COMP%]   .sign-up-email__form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .sign-up-email__input[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 44px;\n  font-size: 16px;\n  padding: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .sign-up-email__button[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-meta[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n  overflow: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border-top: 1px solid #1e7590;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-meta__copyright[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  font-size: 1.4rem;\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  margin-left: 10px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social__link--twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter-icon.svg');\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social__link--facebook[_ngcontent-%COMP%] {\n  background-image: url('facebook-icon.svg');\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social__link--linkedin[_ngcontent-%COMP%] {\n  background-image: url('linkedin-icon.svg');\n}\n\n.footer[_ngcontent-%COMP%]   .meta-social__link--youtube[_ngcontent-%COMP%] {\n  background-image: url('youtube-icon.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFJO0VBTEY7SUFNSSxzQkFBQTtFQUdKO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFJO0VBUEY7SUFRSSxXQUFBO0VBR0o7QUFDRjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQUZOOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRk47O0FBTUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBS0k7RUFMRjtJQU1JLDJCQUFBO0VBRko7QUFDRjs7QUFLRTtFQUNFLGtCQUFBO0FBSEo7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUFGTjs7QUFJSTtFQUNFLFNBQUE7QUFGTjs7QUFJSTtFQVRGO0lBVUksZ0JBQUE7RUFESjtBQUNGOztBQUdFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQUZKOztBQUtFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUpKOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFVRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVdFO0VBQ0UsWUFBQTtBQVRKOztBQVlFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBVko7O0FBYUk7RUFDRSx5Q0FBQTtBQVhOOztBQWFJO0VBQ0UsMENBQUE7QUFYTjs7QUFhSTtFQUNFLDBDQUFBO0FBWE47O0FBYUk7RUFDRSx5Q0FBQTtBQVhOIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcmZpeCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTUzNjY7XG5cbiAgLmZvb3Rlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA0MHB4IDEwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItY29udGVudF9fYnJhbmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2xvZ28td2hpdGUuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWNvbnRlbnRfX3Bvd2VyZWRieSB7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvZGF0YTRkZXZlbG9wbWVudC13aGl0ZS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5mb290ZXItY29udGVudF9fYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmZvb3Rlci1jb250ZW50X19saXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLnVzZWZ1bC1saXN0X19saW5rLWJsb2NrIHtcbiAgICAmPiAudXNlZnVsLWxpc3RfX2xpbmsge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbiAgLmZvb3Rlci1jb250ZW50X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgICYudGl0bGUtbG9nbyB7XG4gICAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItY29udGVudF9sb2dvLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItY29udGVudF9sb2dvLWRlc2N0aXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmRlc2NyaXB0aW9uLWxpbmsge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLmZvb3Rlci1jb250ZW50X190ZXh0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgLmZvb3Rlci1jb250ZW50X190ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5mb290ZXItY29udGVudF9fc2lnbi11cCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnNpZ24tdXAtZW1haWxfX3RpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLnNpZ24tdXAtZW1haWxfX2Zvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXhcbiAgfVxuXG4gIC5zaWduLXVwLWVtYWlsX19pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnNpZ24tdXAtZW1haWxfX2J1dHRvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5mb290ZXItbWV0YSB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzFlNzU5MDtcbiAgfVxuXG4gIC5mb290ZXItbWV0YV9fY29weXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAubWV0YS1zb2NpYWwge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5tZXRhLXNvY2lhbF9fbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcblxuXG4gICAgJi0tdHdpdHRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvdHdpdHRlci1pY29uLnN2ZycpO1xuICAgIH1cbiAgICAmLS1mYWNlYm9vayB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvZmFjZWJvb2staWNvbi5zdmcnKTtcbiAgICB9XG4gICAgJi0tbGlua2VkaW4ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2xpbmtlZGluLWljb24uc3ZnJyk7XG4gICAgfVxuICAgICYtLXlvdXR1YmUge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL3lvdXR1YmUtaWNvbi5zdmcnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/http */
      "qlzE");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var angular_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-gtag */
      "e/9f");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./loader/loader.component */
      "aPAT");
      /* harmony import */


      var _loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loader/loader.service */
      "b6Gx");
      /* harmony import */


      var _logging_log_publishers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logging/log-publishers.service */
      "UBye");
      /* harmony import */


      var _logging_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./logging/log.service */
      "SF6U");
      /* harmony import */


      var _module_import_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./module-import-guard */
      "Wf50");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_8__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](CoreModule, 12));
        },
        providers: [_logging_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"], _logging_log_publishers_service__WEBPACK_IMPORTED_MODULE_6__["LogPublishersService"], _loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_3__["GtagModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], angular_gtag__WEBPACK_IMPORTED_MODULE_3__["GtagModule"]],
          exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "rQPh":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function rQPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 5,
        vars: 0,
        consts: [[1, "container"], [1, "display-4"], [1, "lead"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, we could't find that page.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".list-group[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIG1hcmdpbjogNHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _views_data_quality_feedback_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/data-quality-feedback/about/about.component */
      "goxy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { OrganisationsComponent } from './organisations/organisations/organisations.component';
      // import { OrganisationComponent } from './organisation/organisation/organisation.component';


      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        pathMatch: 'full'
      }, // Lazy loading feature moduels
      {
        path: 'organisations',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | organisations-organisations-module */
          "organisations-organisations-module").then(__webpack_require__.bind(null,
          /*! ./organisations/organisations.module */
          "V8Rk")).then(function (m) {
            return m.OrganisationsModule;
          });
        }
      }, {
        path: 'organisation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | organisation-organisation-module */
          "organisation-organisation-module").then(__webpack_require__.bind(null,
          /*! ./organisation/organisation.module */
          "p28f")).then(function (m) {
            return m.OrganisationModule;
          });
        }
      }, {
        path: 'view/dqf',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-data-quality-feedback-data-quality-feedback-module */
          [__webpack_require__.e("default~validate-iati-validate-iati-module~views-data-quality-feedback-data-quality-feedback-module"), __webpack_require__.e("views-data-quality-feedback-data-quality-feedback-module")]).then(__webpack_require__.bind(null,
          /*! ./views/data-quality-feedback/data-quality-feedback.module */
          "cGZY")).then(function (m) {
            return m.DataQualityFeedbackModule;
          });
        }
      }, {
        path: 'validate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | validate-iati-validate-iati-module */
          "default~validate-iati-validate-iati-module~views-data-quality-feedback-data-quality-feedback-module").then(__webpack_require__.bind(null,
          /*! ./validate-iati/validate-iati.module */
          "oE6s")).then(function (m) {
            return m.ValidateIatiModule;
          });
        }
      }, {
        path: 'about',
        component: _views_data_quality_feedback_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, // Catch all route
      {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xMwM":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/spinner-circle/spinner-circle.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SpinnerCircleComponent */

    /***/
    function xMwM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerCircleComponent", function () {
        return SpinnerCircleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerCircleComponent = /*#__PURE__*/function () {
        function SpinnerCircleComponent() {
          _classCallCheck(this, SpinnerCircleComponent);
        }

        _createClass(SpinnerCircleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerCircleComponent;
      }();

      SpinnerCircleComponent.ɵfac = function SpinnerCircleComponent_Factory(t) {
        return new (t || SpinnerCircleComponent)();
      };

      SpinnerCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerCircleComponent,
        selectors: [["app-spinner-circle"]],
        decls: 13,
        vars: 0,
        consts: [[1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"]],
        template: function SpinnerCircleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".sk-fading-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  display: inline-block;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #3498db;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%] {\n  transform: rotate(60deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%] {\n  transform: rotate(120deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%] {\n  transform: rotate(150deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%] {\n  transform: rotate(210deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%] {\n  transform: rotate(240deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%] {\n  transform: rotate(300deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%] {\n  transform: rotate(330deg);\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXItY2lyY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9FQUFBO0VBQ1EsNERBQUE7QUFGVjs7QUFJQTtFQUdVLHdCQUFBO0FBRFY7O0FBR0E7RUFHVSx3QkFBQTtBQUFWOztBQUVBO0VBR1Usd0JBQUE7QUFDVjs7QUFDQTtFQUdVLHlCQUFBO0FBRVY7O0FBQUE7RUFHVSx5QkFBQTtBQUdWOztBQURBO0VBR1UseUJBQUE7QUFJVjs7QUFGQTtFQUdVLHlCQUFBO0FBS1Y7O0FBSEE7RUFHVSx5QkFBQTtBQU1WOztBQUpBO0VBR1UseUJBQUE7QUFPVjs7QUFMQTtFQUdVLHlCQUFBO0FBUVY7O0FBTkE7RUFHVSx5QkFBQTtBQVNWOztBQVBBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQVVWOztBQVJBO0VBQ0UsNEJBQUE7RUFDUSxvQkFBQTtBQVdWOztBQVRBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQVlWOztBQVZBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQWFWOztBQVhBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQWNWOztBQVpBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQWVWOztBQWJBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQWdCVjs7QUFkQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUFpQlY7O0FBZkE7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FBa0JWOztBQWhCQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUFtQlY7O0FBakJBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQW9CVjs7QUFqQkE7RUFDRTtJQUFnQixVQUFBO0VBcUJoQjtFQXBCQTtJQUFNLFVBQUE7RUF1Qk47QUFDRjs7QUFyQkE7RUFDRTtJQUFnQixVQUFBO0VBd0JoQjtFQXZCQTtJQUFNLFVBQUE7RUEwQk47QUFDRiIsImZpbGUiOiJzcGlubmVyLWNpcmNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNvdXJjZTogaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0L1xuLnNrLWZhZGluZy1jaXJjbGUge1xuICAvLyBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxNSU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVGYWRlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlRmFkZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU1IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU2IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU4IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU5IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlMTEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xufVxuLnNrLWZhZGluZy1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG4uc2stZmFkaW5nLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cbi5zay1mYWRpbmctY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUZhZGVEZWxheSB7XG4gIDAlLCAzOSUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzay1jaXJjbGVGYWRlRGVsYXkge1xuICAwJSwgMzklLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map