(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Category */ "./resources/js/models/Category.js");
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
// import Category from "../../models/Category";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  data: function data() {
    return {
      headers: [{
        text: "Title",
        value: "title"
      }, {
        text: "Actions",
        value: "action"
      }],
      categories: [],
      category: new _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"](),
      selectedCategory: [],
      mode: 0,
      dialog: false,
      valid: false,
      errorMessage: "",
      snackbar: false,
      disabled: false
    };
  },
  computed: {
    title: function title() {
      return this.mode === 1 ? "New Category" : "Update Category";
    }
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"].get().then(function (res) {
        return _this.categories = res.data;
      })["catch"](function (err) {
        return console.error(err.response.data);
      });
    },
    open: function open(mode, item) {
      this.category = new _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"](item);
      console.log(this.category);
      this.mode = mode;
      this.dialog = true;
    },
    save: function save() {
      var _this2 = this;

      this.disabled = true;

      if (this.mode === 1) {
        _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.category).then(function () {
          _this2.getCategories();

          _this2.selectedCategory = [];
          _this2.dialog = false;
          _this2.disabled = false;
        })["catch"](function (err) {
          _this2.errorMessage = err.response.data;
          setTimeout(function () {
            return _this2.errorMessage = "";
          }, 5000);
          _this2.disabled = false;
        });
      } else {
        _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"].put(this.category).then(function () {
          _this2.getCategories();

          _this2.selectedCategory = [];
          _this2.dialog = false;
          _this2.disabled = false;
        })["catch"](function (err) {
          _this2.errorMessage = err.response.data;
          setTimeout(function () {
            return _this2.errorMessage = "";
          }, 5000);
          _this2.disabled = false;
        });
      }
    },
    remove: function remove(id) {
      var _this3 = this;

      this.dialog = false;
      confirm("Are you sure you want to delete this category?") && _models_Category__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](id).then(function () {
        return _this3.getCategories();
      })["catch"](function (err) {
        _this3.errorMessage = err.response.data;
        _this3.snackbar = true;
        setTimeout(function () {
          _this3.snackbar = false;
          _this3.errorMessage = "";
        }, 5000);
      });
    }
  },
  watch: {
    selectedCategory: function selectedCategory(val) {
      if (val.length > 1) val = val.splice(0, 1);
      this.category.parent = val[0];
    }
  },
  created: function created() {
    this.getCategories();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        "v-snackbar",
        {
          attrs: { top: "", color: "red darken-4" },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        staticClass: "mr-2",
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            _vm.snackbar = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _c("v-alert", { staticClass: "ma-0", attrs: { type: "error" } }, [
            _vm._v("\n            " + _vm._s(_vm.errorMessage) + "\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [
          _c("v-toolbar-title", [_vm._v("\n            Categories\n        ")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-5",
              attrs: { outlined: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.open(1)
                }
              }
            },
            [_vm._v("new category")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "border-top", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "space-between" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-treeview", {
                    attrs: {
                      items: _vm.categories,
                      selectable: _vm.dialog && _vm.mode === 1,
                      "item-key": "_id",
                      "selected-color": "primary",
                      "selection-type": "independent"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "append",
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
                                            "v-btn",
                                            { attrs: { icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      color: "yellow darken-3"
                                                    },
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
                                            ],
                                            1
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
                                            "v-btn",
                                            { attrs: { icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  {
                                                    attrs: { color: "red" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.remove(
                                                          item._id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("mdi-delete-outline")]
                                              )
                                            ],
                                            1
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
                    ]),
                    model: {
                      value: _vm.selectedCategory,
                      callback: function($$v) {
                        _vm.selectedCategory = $$v
                      },
                      expression: "selectedCategory"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "", justify: "end" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _vm.dialog
                            ? _c(
                                "v-form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.save($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.valid,
                                    callback: function($$v) {
                                      _vm.valid = $$v
                                    },
                                    expression: "valid"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { outlined: "", tile: "" } },
                                    [
                                      _c(
                                        "v-card-title",
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(_vm.title) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            "no-gutters": "",
                                            justify: "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "11" } },
                                            [
                                              _c("v-text-field", {
                                                staticClass: "b-tile",
                                                attrs: {
                                                  label: "category",
                                                  outlined: "",
                                                  dense: "",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value: _vm.category.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.category,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "category.name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _vm.errorMessage
                                                ? _c(
                                                    "v-alert",
                                                    {
                                                      staticClass: "mx-2",
                                                      attrs: { type: "error" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(_vm.errorMessage)
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
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
                                              attrs: {
                                                disabled: _vm.disabled,
                                                type: "submit",
                                                color: "success",
                                                width: "90"
                                              },
                                              on: { click: _vm.save }
                                            },
                                            [_vm._v("save")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.mode === 1
                                    ? _c(
                                        "v-alert",
                                        { attrs: { type: "info", tile: "" } },
                                        [
                                          _vm._v(
                                            "If no category choosen, category will be\n                                added at root level"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
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

/***/ "./resources/js/models/Category.js":
/*!*****************************************!*\
  !*** ./resources/js/models/Category.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var url = "https://evening-headland-21583.herokuapp.com/api/categories";

var Category = /*#__PURE__*/function () {
  function Category() {
    var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Category);

    this._id = category._id || null;
    this.name = category.name || "";
    this.parent = category.parent || "";
    this.children = category.children || [];
  } // static get = () => axios.get(url);


  _createClass(Category, null, [{
    key: "get",
    value: function get(url) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
    }
  }, {
    key: "post",
    value: function post(_ref) {
      var name = _ref.name,
          parent = _ref.parent;
      console.log(parent);
      if (parent) return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
        name: name,
        parent: parent
      });else return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
        name: name
      });
    }
  }, {
    key: "put",
    value: function put(_ref2) {
      var _id = _ref2._id,
          name = _ref2.name,
          parent = _ref2.parent;
      if (parent) return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(url, "/").concat(_id), {
        name: name,
        parent: parent
      });else return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(url, "/").concat(_id), {
        name: name
      });
    }
  }, {
    key: "delete",
    value: function _delete(_id) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(url, "/").concat(_id));
    }
  }]);

  return Category;
}();



/***/ }),

/***/ "./resources/js/views/admin/Categories.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=1e5593fb& */ "./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=1e5593fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);