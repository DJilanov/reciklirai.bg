(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-page-error-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error-page/error-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error-page/error-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"statusCode\">\n\t<main *ngSwitchCase=\"404\" class=\"Page-Not-Found\">\n\n\t\t<img src=\"./assets/images/ErrorPageComponent/404.svg\" alt=\"Error Loading Icon\" draggable=\"false\">\n\n\t\t<h3 class=\"Page-Not-Found__Title\">\n\t\t\tГрешка <span class=\"Page-Not-Found__Title__Status-Code\">404</span> СТРАНИЦАТА НЕ Е НАМЕРЕНА !!!\n\t\t</h3>\n\n\t\t<h4 class=\"Server-Error__Description\">\n\t\t\tСтраницата или линка, който се опитвате да отворите не бе намерен\n\t\t</h4>\n\n\t\t<button (click)=\"goBack()\" type=\"button\" class=\"btn btn-dark\">Връщане на обратно</button>\n\n\t</main>\n\n\n\n\t<main *ngSwitchCase=\"500\" class=\"Server-Error\">\n\n\t\t<img src=\"./assets/images/ErrorPageComponent/500.svg\" alt=\"Error Loading Icon\" draggable=\"false\">\n\n\t\t<h3 class=\"Server-Error__Title\">\n\t\t\tГрешка <span class=\"Server-Error__Title__Status-Code\">500</span> ПРОБЛЕМ СЪС СЪРВЪРА !!!\n\t\t</h3>\n\n\t\t<h4 class=\"Server-Error__Description\">\n\t\t\tИзпитваме технически проблеми\n\t\t</h4>\n\n\t\t<button (click)=\"goBack()\" type=\"button\" class=\"btn btn-dark\">Връщане на обратно</button>\n\n\t</main>\n\n</ng-container>");

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap\");\n.Form-Control:focus {\n  border-color: #12c2e9;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(18, 194, 233, 0.5);\n}\n.Form-Control-Invalid {\n  border-color: #f64f59;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(246, 79, 89, 0.5);\n}\n.Unauthorized, .Page-Not-Found, .Server-Error {\n  width: 75%;\n  max-width: 700px;\n  margin: 0px auto 25px;\n  text-align: center;\n}\n.Unauthorized img, .Page-Not-Found img, .Server-Error img {\n  display: block;\n  width: 128px;\n  height: auto;\n  margin: 0px auto 50px;\n}\n.Unauthorized__Title, .Page-Not-Found__Title, .Server-Error__Title {\n  margin-bottom: 50px;\n  font-size: 32px;\n}\n.Unauthorized__Title__Status-Code, .Page-Not-Found__Title__Status-Code, .Server-Error__Title__Status-Code {\n  padding: 0px 6.25px;\n  border-radius: 3.125px;\n  color: white;\n  background-color: #f64f59;\n}\n.Unauthorized__Description, .Page-Not-Found__Description, .Server-Error__Description {\n  margin-bottom: 50px;\n  font-size: 24px;\n}\n.Unauthorized__Description a, .Page-Not-Found__Description a, .Server-Error__Description a {\n  text-decoration: none;\n  color: #f64f59;\n}\n.Unauthorized button, .Page-Not-Found button, .Server-Error button {\n  width: 150px;\n  margin: 0px 50px 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW1pdGFyamlsYW5vdi93b3JrL2ppbGFub3YvcmVjaWtsaXJhaS5iZy9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kaW1pdGFyamlsYW5vdi93b3JrL2ppbGFub3YvcmVjaWtsaXJhaS5iZy9zcmMvYXBwL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSwrRUFBWTtBQXdGWjtFQUdFLHFCQXJHOEI7RUFzRzlCLGlGQXRHOEI7QUNDaEM7QUR5R0E7RUFDQyxxQkF6RytCO0VBMEcvQixnRkExRytCO0FDSWhDO0FDUEE7RUFDQyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7QURVbkI7QUNkQTtFRndFQyxjQUR3QztFQUV4QyxZRWxFMEI7RUZtRTFCLFlBQVk7RUVsRVgscUJBQXFCO0FEYXZCO0FDVkM7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtBRGFqQjtBQ1hFO0VBQ0MsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZRmJTO0VFY1QseUJGaEI2QjtBQzhCaEM7QUNWQztFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0FEYWpCO0FDZkU7RUFLQyxxQkFBcUI7RUFDckIsY0YxQjZCO0FDd0NoQztBQzNDQTtFQWtDRSxZQUFZO0VBQ1oscUJBQXFCO0FEYXZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09MT1JTXG4kQmxhY2s6ICMwMDA7XG4kRGFyay1XaGl0ZTogI0Q3RDdENztcbiRNYWluLUdyYWRpZW50LTFzdC1QYXJ0OiAjMTJDMkU5O1xuJE1haW4tR3JhZGllbnQtMm5kLVBhcnQ6I0M0NzFFRDtcbiRNYWluLUdyYWRpZW50LTNyZC1QYXJ0OiAjRjY0RjU5O1xuJE1haW4tR3JhZGllbnQtNHJ0aC1QYXJ0OiByZ2IoNjIsIDIzNiwgNjIpO1xuJFdoaXRlOiAjRkZGO1xuJEdyZWVuMTogIzYzOWMwMDtcblxuXG5cbi8vIEZPTlRTXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vJmRpc3BsYXk9c3dhcCcpO1xuXG5cblxuLy8gR1JBRElFTlRTXG4kTWFpbi1HcmFkaWVudDogbGluZWFyLWdyYWRpZW50KCA5MGRlZyxcblx0JE1haW4tR3JhZGllbnQtMXN0LVBhcnQgMCUsXG5cdCRNYWluLUdyYWRpZW50LTJuZC1QYXJ0IDUwJSxcblx0JE1haW4tR3JhZGllbnQtM3JkLVBhcnQgMTAwJVxuKTtcblxuXG5cbi8vIE1JWElOU1xuQG1peGluIEFic29sdXRlLUNlbnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiBCbGluay1BbmltYXRpb24oJER1cmF0aW9uKSB7XG5cdGFuaW1hdGlvbjogQmxpbmsgJER1cmF0aW9uIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cblx0QGtleWZyYW1lcyBCbGluayB7XG5cdFx0MCUge1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHR9XG5cblx0XHQxMDAlIHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBGbGV4KCRBbGlnbi1JdGVtcywgJEp1c3RpZnktQ29udGVudCwgJEZsZXgtRmxvdzogcm93IHdyYXApIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6ICRBbGlnbi1JdGVtcztcblx0anVzdGlmeS1jb250ZW50OiAkSnVzdGlmeS1Db250ZW50O1xuXHRmbGV4LWZsb3c6ICRGbGV4LUZsb3c7XG5cdEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogNjBweDtcblx0fVxufVxuXG5AbWl4aW4gSGlnaGxpZ2h0LVRhYnMge1xuXHQmID4gJl9fTG9nLUluID4gYS5hY3RpdmUsXG5cdCZfX1NpZ24tVXAgPiBhLmFjdGl2ZSxcblx0XHQmLUNvbnRlbnQgPiAmLUNvbnRlbnRfX0xvZy1JbiA+IC5zaG93LFxuXHRcdCYtQ29udGVudCA+ICYtQ29udGVudF9fU2lnbi1VcCA+IC5zaG93IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJFdoaXRlLCAxKTtcblx0XHR9XG59XG5cbkBtaXhpbiBIb3Jpem9udGFsLUNlbnRlciB7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWl4aW4gSW1hZ2UtU2l6ZSgkV2lkdGgsICREaXNwbGF5OiBibG9jaykge1xuXHRkaXNwbGF5OiAkRGlzcGxheTtcblx0d2lkdGg6ICRXaWR0aDtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG5AbWl4aW4gTWVkaWEtVHJhbnNpdGlvbiB7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIFJvYm90by1Nb25vIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubyc7XG59XG5cbkBtaXhpbiBTcGluLUJ1dHRvbi1EaXNhYmxlIHtcblx0aW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5cdGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdH1cblxuXHRpbnB1dFt0eXBlPW51bWJlcl0ge1xuXHRcdC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuXHR9XG59XG5cblxuXG4vLyBVVElMSVRZIENMQVNTRVNcbi5Gb3JtLUNvbnRyb2wge1xuXG5cdCY6Zm9jdXMge1xuXHRcdGJvcmRlci1jb2xvcjogcmdiYSgkTWFpbi1HcmFkaWVudC0xc3QtUGFydCwgMSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoJE1haW4tR3JhZGllbnQtMXN0LVBhcnQsIDAuNSk7XG5cdH1cbn1cblxuLkZvcm0tQ29udHJvbC1JbnZhbGlkIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKCRNYWluLUdyYWRpZW50LTNyZC1QYXJ0LCAxKTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoJE1haW4tR3JhZGllbnQtM3JkLVBhcnQsIDAuNSk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwXCIpO1xuLkZvcm0tQ29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzEyYzJlOTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMTgsIDE5NCwgMjMzLCAwLjUpO1xufVxuXG4uRm9ybS1Db250cm9sLUludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmNjRmNTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDI0NiwgNzksIDg5LCAwLjUpO1xufVxuXG4uVW5hdXRob3JpemVkLCAuUGFnZS1Ob3QtRm91bmQsIC5TZXJ2ZXItRXJyb3Ige1xuICB3aWR0aDogNzUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlVuYXV0aG9yaXplZCBpbWcsIC5QYWdlLU5vdC1Gb3VuZCBpbWcsIC5TZXJ2ZXItRXJyb3IgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDBweCBhdXRvIDUwcHg7XG59XG5cbi5VbmF1dGhvcml6ZWRfX1RpdGxlLCAuUGFnZS1Ob3QtRm91bmRfX1RpdGxlLCAuU2VydmVyLUVycm9yX19UaXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLlVuYXV0aG9yaXplZF9fVGl0bGVfX1N0YXR1cy1Db2RlLCAuUGFnZS1Ob3QtRm91bmRfX1RpdGxlX19TdGF0dXMtQ29kZSwgLlNlcnZlci1FcnJvcl9fVGl0bGVfX1N0YXR1cy1Db2RlIHtcbiAgcGFkZGluZzogMHB4IDYuMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY0ZjU5O1xufVxuXG4uVW5hdXRob3JpemVkX19EZXNjcmlwdGlvbiwgLlBhZ2UtTm90LUZvdW5kX19EZXNjcmlwdGlvbiwgLlNlcnZlci1FcnJvcl9fRGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5VbmF1dGhvcml6ZWRfX0Rlc2NyaXB0aW9uIGEsIC5QYWdlLU5vdC1Gb3VuZF9fRGVzY3JpcHRpb24gYSwgLlNlcnZlci1FcnJvcl9fRGVzY3JpcHRpb24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmNjRmNTk7XG59XG5cbi5VbmF1dGhvcml6ZWQgYnV0dG9uLCAuUGFnZS1Ob3QtRm91bmQgYnV0dG9uLCAuU2VydmVyLUVycm9yIGJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwcHggNTBweCAyNXB4O1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4uVW5hdXRob3JpemVkLCAuUGFnZS1Ob3QtRm91bmQsIC5TZXJ2ZXItRXJyb3Ige1xuXHR3aWR0aDogNzUlO1xuXHRtYXgtd2lkdGg6IDcwMHB4O1xuXHRtYXJnaW46IDBweCBhdXRvIDI1cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRpbWcge1xuXHRcdEBpbmNsdWRlIEltYWdlLVNpemUoMTI4cHgpO1xuXHRcdG1hcmdpbjogMHB4IGF1dG8gNTBweDtcblx0fVxuXG5cdCZfX1RpdGxlIHtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdGZvbnQtc2l6ZTogMzJweDtcblxuXHRcdCZfX1N0YXR1cy1Db2RlIHtcblx0XHRcdHBhZGRpbmc6IDBweCA2LjI1cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzLjEyNXB4O1xuXHRcdFx0Y29sb3I6IHJnYmEoJFdoaXRlLCAxKTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJE1haW4tR3JhZGllbnQtM3JkLVBhcnQsIDEpO1xuXHRcdH1cblx0fVxuXG5cdCZfX0Rlc2NyaXB0aW9uIHtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblxuXHRcdGEge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Y29sb3I6IHJnYmEoJE1haW4tR3JhZGllbnQtM3JkLVBhcnQsIDEpO1xuXHRcdH1cblx0fVxuXG5cdGJ1dHRvbiB7XG5cdFx0d2lkdGg6IDE1MHB4O1xuXHRcdG1hcmdpbjogMHB4IDUwcHggMjVweDtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ErrorPageComponent = class ErrorPageComponent {
    constructor(router) {
        this.router = router;
        this.statusCode = 404;
    }
    goBack() {
        this.router.navigate(['']);
    }
};
ErrorPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ErrorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'Error-Page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error-page/error-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/error-page/error-page.component.scss")).default]
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/pages/error-page/error-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/error-page/error-page.module.ts ***!
  \*******************************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-page.component */ "./src/app/pages/error-page/error-page.component.ts");






const ComponentRoutes = [
    { path: '', component: _error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"] }
];
let ErrorPageModule = class ErrorPageModule {
};
ErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ComponentRoutes)
        ],
        declarations: [
            _error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"]
        ],
        exports: [
            _error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"]
        ]
    })
], ErrorPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-error-page-error-page-module-es2015.js.map