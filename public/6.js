(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Collection from "../../models/Collection";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Collections",
  data: function data() {
    return {
      headers: [{
        text: "Code",
        value: "code"
      }, {
        text: "Category",
        value: "category"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Image",
        value: "image"
      }, {
        text: "Actions",
        value: "action"
      }],
      collections: [],
      // collection: new Collection(),
      categories: [{
        text: "Workwear",
        value: "Workwear",
        code: "1"
      }, {
        text: "Medical",
        value: "Medical",
        code: "2"
      }],
      dialog: false,
      image: "",
      mode: 0,
      errorMessage: ""
    };
  },
  computed: {
    title: function title() {
      return this.mode === 1 ? "New Collection" : "Update Collection";
    }
  },
  methods: {
    getCollections: function getCollections() {// Collection.get()
      //     .then(res => (this.collections = res.data))
      //     .catch(err => console.error(err.response.data));
    },
    getTextileTypes: function getTextileTypes() {
      var _this = this;

      this.$axios.get("http://localhost:3000/api/textileTypes").then(function (res) {
        return _this.textileTypes = res.data;
      })["catch"](function (err) {
        return console.error(err.response.data);
      });
    },
    open: function open(mode, item) {
      // this.collection = new Collection(item);
      if (item) this.collection.image = "http://localhost:3000/" + this.collection.image;
      this.mode = mode;
      this.dialog = true;
    },
    save: function save() {
      var _this2 = this;

      this.collection.code = this.collections.filter(function (col) {
        return col.category === _this2.collection.category.value;
      }).length + 1;

      if (this.mode === 1) {// Collection.post(this.collection)
        //     .then(res => {
        //         this.collections.push(res.data);
        //         this.dialog = false;
        //     })
        //     .catch(err => console.error(err.response.data));
      } else {// Collection.put(this.collection, this.categories)
          //     .then(res => {
          //         let index = this.collections.findIndex(
          //             col => col._id === res.data._id
          //         );
          //         this.collections.splice(index, 1, res.data);
          //         this.dialog = false;
          //     })
          //     .catch(err => (this.errorMessage = err.response.data));
        }
    },
    remove: function remove() {// Collection.delete(id)
      //     .then(res => {
      //         let index = this.collections.findIndex(
      //             collection => collection._id === res.data._id
      //         );
      //         this.collections.splice(index, 1);
      //     })
      //     .catch(err => console.error(err.response.data));
    },
    onFileSelected: function onFileSelected(event) {
      var _this3 = this;

      this.collection.imageFile = event;
      var reader = new FileReader();
      reader.readAsDataURL(this.collection.imageFile);

      reader.onload = function (e) {
        return _this3.collection.image = e.target.result;
      };
    }
  },
  created: function created() {
    this.getCollections();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { tile: "", outlined: "" } },
    [
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [
          _c("v-toolbar-title", [_vm._v("Collections")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-5",
              attrs: { outlined: "", color: "teal darken-4" },
              on: {
                click: function($event) {
                  return _vm.open(1)
                }
              }
            },
            [_vm._v("new collection")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "border-top",
        attrs: {
          headers: _vm.headers,
          items: _vm.collections,
          "disable-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.image",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-img", {
                  attrs: {
                    src: "http://localhost:3000/" + item.image,
                    width: "10vw"
                  }
                })
              ]
            }
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-icon",
                                _vm._g(
                                  {
                                    staticClass: "mr-2",
                                    attrs: { color: "yellow darken-3" },
                                    on: {
                                      click: function($event) {
                                        return _vm.open(2, item)
                                      }
                                    }
                                  },
                                  on
                                ),
                                [_vm._v("mdi-pencil-outline")]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Update")])]
                ),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-icon",
                                _vm._g(
                                  {
                                    attrs: { color: "red" },
                                    on: {
                                      click: function($event) {
                                        return _vm.remove(item._id)
                                      }
                                    }
                                  },
                                  on
                                ),
                                [_vm._v("mdi-delete-outline")]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Delete")])]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "50%", persistent: "" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "", justify: "space-around" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("v-text-field", {
                            staticClass: "b-tile",
                            attrs: {
                              label: "name",
                              color: "teal darken-4",
                              outlined: "",
                              dense: "",
                              clearable: ""
                            },
                            model: {
                              value: _vm.collection.name,
                              callback: function($$v) {
                                _vm.$set(_vm.collection, "name", $$v)
                              },
                              expression: "collection.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("v-file-input", {
                            staticClass: "b-tile",
                            attrs: {
                              label: "upload a photo",
                              color: "teal darken-4",
                              dense: "",
                              outlined: ""
                            },
                            on: { change: _vm.onFileSelected }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("v-select", {
                            staticClass: "b-tile",
                            attrs: {
                              items: _vm.categories,
                              "return-object": "",
                              "menu-props": "offsetY",
                              label: "category",
                              color: "teal darken-4",
                              "item-color": "teal darken-4",
                              outlined: "",
                              dense: "",
                              clearable: "",
                              "open-on-clear": ""
                            },
                            model: {
                              value: _vm.collection.category,
                              callback: function($$v) {
                                _vm.$set(_vm.collection, "category", $$v)
                              },
                              expression: "collection.category"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            staticClass: "b-tile",
                            attrs: {
                              label: "description",
                              color: "teal darken-4",
                              outlined: "",
                              clearable: ""
                            },
                            model: {
                              value: _vm.collection.description,
                              callback: function($$v) {
                                _vm.$set(_vm.collection, "description", $$v)
                              },
                              expression: "collection.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "5" } },
                        [
                          _c(
                            "v-card",
                            {
                              attrs: { tile: "", outlined: "", height: "86%" }
                            },
                            [
                              _vm.collection.image
                                ? _c("v-img", {
                                    attrs: {
                                      src: _vm.collection.image,
                                      height: "100%",
                                      contain: ""
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(
                "\n\n            " + _vm._s(_vm.errorMessage) + "\n            "
              ),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-4", dark: "", width: "90" },
                      on: { click: _vm.save }
                    },
                    [_vm._v("save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=358a02f9& */ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=358a02f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);