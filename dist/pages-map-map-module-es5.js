function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"], {
  /***/
  "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
    \******************************************************************/

  /*! exports provided: DEFAULT_ID, Loader */

  /***/
  function node_modulesGooglemapsJsApiLoaderDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_ID", function () {
      return DEFAULT_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Loader", function () {
      return Loader;
    }); // do not edit .js files directly - edit src/index.jst


    var fastDeepEqual = function equal(a, b) {
      if (a === b) return true;

      if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;

        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;

          for (i = length; i-- !== 0;) {
            if (!equal(a[i], b[i])) return false;
          }

          return true;
        }

        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }

        for (i = length; i-- !== 0;) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }

        return true;
      } // true if both NaN, false otherwise


      return a !== a && b !== b;
    };
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at.
     *
     *      Http://www.apache.org/licenses/LICENSE-2.0.
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_ID = "__googleMapsScriptId";
    /**
     * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
     * dynamically using
     * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * It works by dynamically creating and appending a script node to the the
     * document head and wrapping the callback function so as to return a promise.
     *
     * ```
     * const loader = new Loader({
     *   apiKey: "",
     *   version: "weekly",
     *   libraries: ["places"]
     * });
     *
     * loader.load().then(() => {
     *   const map = new google.maps.Map(...)
     * })
     * ```
     */

    var Loader = /*#__PURE__*/function () {
      /**
       * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
       * using this library, instead the defaults are set by the Google Maps
       * JavaScript API server.
       *
       * ```
       * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
       * ```
       */
      function Loader(_ref) {
        var apiKey = _ref.apiKey,
            channel = _ref.channel,
            client = _ref.client,
            _ref$id = _ref.id,
            id = _ref$id === void 0 ? DEFAULT_ID : _ref$id,
            _ref$libraries = _ref.libraries,
            libraries = _ref$libraries === void 0 ? [] : _ref$libraries,
            language = _ref.language,
            region = _ref.region,
            version = _ref.version,
            mapIds = _ref.mapIds,
            nonce = _ref.nonce,
            _ref$retries = _ref.retries,
            retries = _ref$retries === void 0 ? 3 : _ref$retries,
            _ref$url = _ref.url,
            url = _ref$url === void 0 ? "https://maps.googleapis.com/maps/api/js" : _ref$url;

        _classCallCheck(this, Loader);

        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.version = version;
        this.apiKey = apiKey;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string

        this.libraries = libraries;
        this.language = language;
        this.region = region;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.retries = retries;
        this.url = url;

        if (Loader.instance) {
          if (!fastDeepEqual(this.options, Loader.instance.options)) {
            throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options), " !== ").concat(JSON.stringify(Loader.instance.options)));
          }

          return Loader.instance;
        }

        Loader.instance = this;
      }

      _createClass(Loader, [{
        key: "createUrl",

        /**
         * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
         *
         * @ignore
         */
        value: function createUrl() {
          var url = this.url;
          url += "?callback=".concat(this.CALLBACK);

          if (this.apiKey) {
            url += "&key=".concat(this.apiKey);
          }

          if (this.channel) {
            url += "&channel=".concat(this.channel);
          }

          if (this.client) {
            url += "&client=".concat(this.client);
          }

          if (this.libraries.length > 0) {
            url += "&libraries=".concat(this.libraries.join(","));
          }

          if (this.language) {
            url += "&language=".concat(this.language);
          }

          if (this.region) {
            url += "&region=".concat(this.region);
          }

          if (this.version) {
            url += "&v=".concat(this.version);
          }

          if (this.mapIds) {
            url += "&map_ids=".concat(this.mapIds.join(","));
          }

          return url;
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         */

      }, {
        key: "load",
        value: function load() {
          return this.loadPromise();
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         *
         * @ignore
         */

      }, {
        key: "loadPromise",
        value: function loadPromise() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.loadCallback(function (err) {
              if (!err) {
                resolve();
              } else {
                reject(err);
              }
            });
          });
        }
        /**
         * Load the Google Maps JavaScript API script with a callback.
         */

      }, {
        key: "loadCallback",
        value: function loadCallback(fn) {
          this.callbacks.push(fn);
          this.execute();
        }
        /**
         * Set the script on document.
         */

      }, {
        key: "setScript",
        value: function setScript() {
          if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
          }

          var url = this.createUrl();
          var script = document.createElement("script");
          script.id = this.id;
          script.type = "text/javascript";
          script.src = url;
          script.onerror = this.loadErrorCallback.bind(this);
          script.defer = true;
          script.async = true;

          if (this.nonce) {
            script.nonce = this.nonce;
          }

          document.head.appendChild(script);
        }
      }, {
        key: "deleteScript",
        value: function deleteScript() {
          var script = document.getElementById(this.id);

          if (script) {
            script.remove();
          }
        }
      }, {
        key: "resetIfRetryingFailed",
        value: function resetIfRetryingFailed() {
          var possibleAttempts = this.retries + 1;

          if (this.done && !this.loading && this.errors.length >= possibleAttempts) {
            this.deleteScript();
            this.done = false;
            this.loading = false;
            this.errors = [];
          }
        }
      }, {
        key: "loadErrorCallback",
        value: function loadErrorCallback(e) {
          var _this2 = this;

          this.errors.push(e);

          if (this.errors.length <= this.retries) {
            var delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log("Failed to load Google Maps script, retrying in ".concat(delay, " ms."));
            setTimeout(function () {
              _this2.deleteScript();

              _this2.setScript();
            }, delay);
          } else {
            this.onerrorEvent = e;
            this.callback();
          }
        }
      }, {
        key: "setCallback",
        value: function setCallback() {
          window.__googleMapsCallback = this.callback.bind(this);
        }
      }, {
        key: "callback",
        value: function callback() {
          var _this3 = this;

          this.done = true;
          this.loading = false;
          this.callbacks.forEach(function (cb) {
            cb(_this3.onerrorEvent);
          });
          this.callbacks = [];
        }
      }, {
        key: "execute",
        value: function execute() {
          if (window.google && window.google.maps && window.google.maps.version) {
            console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader." + "This may result in undesirable behavior as script parameters may not match.");
            this.callback();
          }

          this.resetIfRetryingFailed();

          if (this.done) {
            this.callback();
          } else {
            if (this.loading) ;else {
              this.loading = true;
              this.setCallback();
              this.setScript();
            }
          }
        }
      }, {
        key: "options",
        get: function get() {
          return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url
          };
        }
      }]);

      return Loader;
    }(); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n\t<section #MAP id=\"MAP\" class=\"Google-Maps-Container tab-pane\"></section>\n</main>";
    /***/
  },

  /***/
  "./src/app/pages/map/map.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/map/map.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap\");\n.Form-Control:focus {\n  border-color: #12c2e9;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(18, 194, 233, 0.5);\n}\n.Form-Control-Invalid {\n  border-color: #f64f59;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(246, 79, 89, 0.5);\n}\nmain .Google-Maps-Container {\n  height: 800px;\n  margin: 0 auto;\n  border-radius: 6.25px;\n}\n@media only screen and (max-width: 900px) {\n  .col {\n    flex: 0 0 100%;\n  }\n  .col:first-child {\n    margin-bottom: 15px;\n  }\n  .col.no-margin {\n    margin-bottom: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaW1pdGFyamlsYW5vdi93b3JrL2ppbGFub3YvcmVjaWtsaXJhaS5iZy9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZGltaXRhcmppbGFub3Yvd29yay9qaWxhbm92L3JlY2lrbGlyYWkuYmcvc3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBLCtFQUFZO0FBd0ZaO0VBR0UscUJBckc4QjtFQXNHOUIsaUZBdEc4QjtBQ0NoQztBRHlHQTtFQUNDLHFCQXpHK0I7RUEwRy9CLGdGQTFHK0I7QUNJaEM7QUNQQTtFQUVFLGFBQWE7RUZrRWQsY0FBYztFRWhFYixxQkFBcUI7QURTdkI7QUNIQztFQUREO0lBRUUsY0FBYztFRE9kO0VDVEY7SUFJRyxtQkFBbUI7RURRcEI7RUNaRjtJQU9HLGdCQUFnQjtFRFFqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTE9SU1xuJEJsYWNrOiAjMDAwO1xuJERhcmstV2hpdGU6ICNEN0Q3RDc7XG4kTWFpbi1HcmFkaWVudC0xc3QtUGFydDogIzEyQzJFOTtcbiRNYWluLUdyYWRpZW50LTJuZC1QYXJ0OiNDNDcxRUQ7XG4kTWFpbi1HcmFkaWVudC0zcmQtUGFydDogI0Y2NEY1OTtcbiRNYWluLUdyYWRpZW50LTRydGgtUGFydDogcmdiKDYyLCAyMzYsIDYyKTtcbiRXaGl0ZTogI0ZGRjtcbiRHcmVlbjE6ICM2MzljMDA7XG5cblxuXG4vLyBGT05UU1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXAnKTtcblxuXG5cbi8vIEdSQURJRU5UU1xuJE1haW4tR3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCggOTBkZWcsXG5cdCRNYWluLUdyYWRpZW50LTFzdC1QYXJ0IDAlLFxuXHQkTWFpbi1HcmFkaWVudC0ybmQtUGFydCA1MCUsXG5cdCRNYWluLUdyYWRpZW50LTNyZC1QYXJ0IDEwMCVcbik7XG5cblxuXG4vLyBNSVhJTlNcbkBtaXhpbiBBYnNvbHV0ZS1DZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gQmxpbmstQW5pbWF0aW9uKCREdXJhdGlvbikge1xuXHRhbmltYXRpb246IEJsaW5rICREdXJhdGlvbiBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG5cdEBrZXlmcmFtZXMgQmxpbmsge1xuXHRcdDAlIHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxuXG5cdFx0MTAwJSB7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gRmxleCgkQWxpZ24tSXRlbXMsICRKdXN0aWZ5LUNvbnRlbnQsICRGbGV4LUZsb3c6IHJvdyB3cmFwKSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiAkQWxpZ24tSXRlbXM7XG5cdGp1c3RpZnktY29udGVudDogJEp1c3RpZnktQ29udGVudDtcblx0ZmxleC1mbG93OiAkRmxleC1GbG93O1xuXHRAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDYwcHg7XG5cdH1cbn1cblxuQG1peGluIEhpZ2hsaWdodC1UYWJzIHtcblx0JiA+ICZfX0xvZy1JbiA+IGEuYWN0aXZlLFxuXHQmX19TaWduLVVwID4gYS5hY3RpdmUsXG5cdFx0Ji1Db250ZW50ID4gJi1Db250ZW50X19Mb2ctSW4gPiAuc2hvdyxcblx0XHQmLUNvbnRlbnQgPiAmLUNvbnRlbnRfX1NpZ24tVXAgPiAuc2hvdyB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRXaGl0ZSwgMSk7XG5cdFx0fVxufVxuXG5AbWl4aW4gSG9yaXpvbnRhbC1DZW50ZXIge1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuQG1peGluIEltYWdlLVNpemUoJFdpZHRoLCAkRGlzcGxheTogYmxvY2spIHtcblx0ZGlzcGxheTogJERpc3BsYXk7XG5cdHdpZHRoOiAkV2lkdGg7XG5cdGhlaWdodDogYXV0bztcbn1cblxuQG1peGluIE1lZGlhLVRyYW5zaXRpb24ge1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtaXhpbiBSb2JvdG8tTW9ubyB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xufVxuXG5AbWl4aW4gU3Bpbi1CdXR0b24tRGlzYWJsZSB7XG5cdGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuXHRpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHR9XG5cblx0aW5wdXRbdHlwZT1udW1iZXJdIHtcblx0XHQtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcblx0fVxufVxuXG5cblxuLy8gVVRJTElUWSBDTEFTU0VTXG4uRm9ybS1Db250cm9sIHtcblxuXHQmOmZvY3VzIHtcblx0XHRib3JkZXItY29sb3I6IHJnYmEoJE1haW4tR3JhZGllbnQtMXN0LVBhcnQsIDEpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKCRNYWluLUdyYWRpZW50LTFzdC1QYXJ0LCAwLjUpO1xuXHR9XG59XG5cbi5Gb3JtLUNvbnRyb2wtSW52YWxpZCB7XG5cdGJvcmRlci1jb2xvcjogcmdiYSgkTWFpbi1HcmFkaWVudC0zcmQtUGFydCwgMSk7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKCRNYWluLUdyYWRpZW50LTNyZC1QYXJ0LCAwLjUpO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vJmRpc3BsYXk9c3dhcFwiKTtcbi5Gb3JtLUNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxMmMyZTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDE4LCAxOTQsIDIzMywgMC41KTtcbn1cblxuLkZvcm0tQ29udHJvbC1JbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjY0ZjU5O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgyNDYsIDc5LCA4OSwgMC41KTtcbn1cblxubWFpbiAuR29vZ2xlLU1hcHMtQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29sIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxuICAuY29sOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5jb2wubm8tbWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbm1haW4ge1xuXHQuR29vZ2xlLU1hcHMtQ29udGFpbmVyIHtcblx0XHRoZWlnaHQ6IDgwMHB4O1xuXHRcdEBpbmNsdWRlIEhvcml6b250YWwtQ2VudGVyO1xuXHRcdGJvcmRlci1yYWRpdXM6IDYuMjVweDtcblx0fVxufVxuXG5cbi5jb2wge1xuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cdFx0ZmxleDogMCAwIDEwMCU7XG5cdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdH1cblx0XHQmLm5vLW1hcmdpbiB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblx0fVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/map/map.component.ts ***!
    \********************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppPagesMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @googlemaps/js-api-loader */
    "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);

        this.coordinates = {};
        this.latitude = 42.710767;
        this.longitude = 23.377591;
        this.mapOptions = {
          center: null,
          zoom: 15
        };
        this.isBrowser = false;
      }

      _createClass(MapComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mapInitializer();
        } // COMPONENT METHODS

      }, {
        key: "mapInitializer",
        value: function mapInitializer() {
          var _this4 = this;

          var loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"]({
            apiKey: "AIzaSyAyKG7uNPA9WC33YXov96Q4clFkiftc2fk",
            version: "weekly"
          });
          loader.load().then(function () {
            var map = new google.maps.Map(_this4.googleMap.nativeElement, {
              center: {
                lat: _this4.latitude,
                lng: _this4.longitude
              },
              zoom: _this4.mapOptions.zoom
            });
            var marker = new google.maps.Marker({
              position: {
                lat: _this4.latitude,
                lng: _this4.longitude
              },
              map: map,
              title: "Hello World!",
              icon: {
                url: '/assets/logo3.png',
                scaledSize: new google.maps.Size(150, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0) // anchor

              }
            });
            marker.addListener("click", function () {
              infowindow.open(map, marker);
            });
            var contentString = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Zero Waste Office</h1>' + '<div id="bodyContent">' + "<p><b></b>, MORE INFO WILL BE ADDED" + "</div>" + "</div>";
            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
          });
        }
      }]);

      return MapComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MAP')], MapComponent.prototype, "googleMap", void 0);
    MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/pages/map/map.component.scss"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.component */
    "./src/app/pages/map/map.component.ts");

    var ComponentRoutes = [{
      path: '',
      component: _map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
    }];

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ComponentRoutes)],
      declarations: [_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]],
      exports: [_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]]
    })], MapModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-map-map-module-es5.js.map