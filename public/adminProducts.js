(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminProducts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Products.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  data: function data() {
    var _this = this;

    return {
      headers: [{
        text: "Title",
        value: "title"
      }, {
        text: "Price",
        value: "price"
      }, {
        text: "Rating",
        value: "rating"
      }, {
        text: "Image",
        value: "images"
      }, {
        text: "Actions",
        value: "action"
      }],
      products: [],
      product: new !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
      categories: [],
      mode: 0,
      dialog: false,
      valid: false,
      step: 1,
      selectedCategory: {},
      secondSelectedCategory: {},
      thirdSelectedCategory: {},
      titleSuccess: false,
      titleRules: [function (v) {
        if (v) {
          _this.titleSuccess = true;
          return true;
        } else {
          return "Title is required";
        }
      }, function (v) {
        return (v || "").length >= 3 || "Title must be at least 3 characters long";
      }, function (v) {
        return (v || "").length <= 20 || "Title must be less than 20 characters";
      }],
      categorySuccess: false,
      categoryRules: [function (v) {
        if (v) {
          _this.categorySuccess = true;
          return true;
        } else {
          return "Category is required";
        }
      }],
      priceSuccess: false,
      priceRules: [function (v) {
        if (v + "") {
          _this.priceSuccess = true;
          return true;
        } else {
          return "Price is required";
        }
      }, function (v) {
        return v > 0 || "Price must be greater 0";
      }],
      ratingSuccess: false,
      ratingRules: [function (v) {
        if (v + "") {
          _this.ratingSuccess = true;
          return true;
        } else {
          return "Rating is required";
        }
      }, function (v) {
        return v >= 0 || "Rating must be 0 to 5";
      }, function (v) {
        return v <= 5 || "Rating must be less then 5";
      }],
      errorMessage: "",
      snackbar: false,
      disabled: true
    };
  },
  computed: {
    title: function title() {
      return this.mode === 1 ? "New Product" : "Update Product";
    }
  },
  methods: {
    getProducts: function getProducts() {
      var _this2 = this;

      !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).get().then(function (res) {
        return _this2.products = res.data;
      })["catch"](function (err) {
        return console.error(err.response.data);
      });
    },
    getCategories: function getCategories() {
      var _this3 = this;

      this.$axios.get("https://evening-headland-21583.herokuapp.com/api/categories").then(function (res) {
        return _this3.categories = res.data;
      })["catch"](function (err) {
        return console.error(err.response.data);
      });
    },
    open: function open(mode, item) {
      var _this4 = this;

      this.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item);
      this.selectedCategory = {};
      this.secondSelectedCategory = {};
      this.thirdSelectedCategory = {};
      this.step = 1;

      if (mode === 1) {
        this.titleSuccess = false;
        this.categorySuccess = false;
        this.priceSuccess = false;
        this.ratingSuccess = false;
      }

      if (mode === 2) {
        this.product.images = this.product.images.map(function (image) {
          return "https://evening-headland-21583.herokuapp.com/" + image;
        });
      }

      this.mode = mode;
      this.dialog = true;
      setTimeout(function () {
        return _this4.$refs.form.resetValidation();
      }, 300);
    },
    save: function save() {
      var _this5 = this;

      this.disabled = true;
      console.log(this.product);

      if (this.mode === 1) {
        !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).post(this.product).then(function (res) {
          _this5.products.push(res.data);

          _this5.dialog = false;
          _this5.disabled = false;
        })["catch"](function (err) {
          _this5.errorMessage = err.response.data;
          setTimeout(function () {
            return _this5.errorMessage = "";
          }, 5000);
          _this5.disabled = false;
        });
      } else {
        !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).put(this.product).then(function (res) {
          var index = _this5.products.findIndex(function (p) {
            return p._id === res.data._id;
          });

          _this5.products.splice(index, 1, res.data);

          _this5.dialog = false;
          _this5.disabled = false;
        })["catch"](function (err) {
          _this5.errorMessage = err.response.data;
          setTimeout(function () {
            return _this5.errorMessage = "";
          }, 5000);
          _this5.disabled = false;
        });
      }
    },
    remove: function remove(id) {
      var _this6 = this;

      !(function webpackMissingModule() { var e = new Error("Cannot find module '../../models/Product'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())["delete"](id).then(function (res) {
        var index = _this6.products.findIndex(function (p) {
          return p._id === res.data._id;
        });

        _this6.products.splice(index, 1);
      })["catch"](function (err) {
        _this6.errorMessage = err.response.data;
        _this6.snackbar = true;
        setTimeout(function () {
          _this6.snackbar = false;
          _this6.errorMessage = "";
        }, 5000);
      });
    },
    onFileSelected: function onFileSelected(event) {
      var _this7 = this;

      this.product.imageFiles = event;
      this.product.imageFiles.forEach(function (imageFile) {
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);

        reader.onload = function (e) {
          return _this7.product.images.push(e.target.result);
        };
      });
    }
  },
  watch: {
    valid: function valid(val) {
      if (val) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    thirdSelectedCategory: function thirdSelectedCategory(val) {
      if (val) {
        this.product.category = val;
      } else {
        this.product.category = {};
      }
    }
  },
  mounted: function mounted() {
    this.getCategories();
    this.getProducts();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("v-toolbar-title", [_vm._v("Products")]),
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
            [_vm._v("new product")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "border-top",
        attrs: {
          headers: _vm.headers,
          items: _vm.products,
          "disable-sort": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.images",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-img", {
                  attrs: {
                    src: "http://localhost:3000/" + item.images[0],
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
            "v-form",
            {
              ref: "form",
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
                [
                  _c("v-card-title", [_vm._v(_vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        {
                          attrs: { "no-gutters": "", justify: "space-around" }
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "5" } },
                            [
                              _c("v-text-field", {
                                staticClass: "b-tile",
                                attrs: {
                                  label: "title",
                                  outlined: "",
                                  dense: "",
                                  clearable: "",
                                  rules: _vm.titleRules,
                                  success: _vm.titleSuccess
                                },
                                model: {
                                  value: _vm.product.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "title", $$v)
                                  },
                                  expression: "product.title"
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
                              _c("v-text-field", {
                                staticClass: "b-tile",
                                attrs: {
                                  label: "category",
                                  outlined: "",
                                  dense: "",
                                  readonly: "",
                                  rules: _vm.categoryRules,
                                  success: _vm.categorySuccess
                                },
                                model: {
                                  value: _vm.product.category.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product.category, "name", $$v)
                                  },
                                  expression: "product.category.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "mb-5",
                                  attrs: { outlined: "", tile: "" }
                                },
                                [
                                  _c(
                                    "v-window",
                                    {
                                      model: {
                                        value: _vm.step,
                                        callback: function($$v) {
                                          _vm.step = $$v
                                        },
                                        expression: "step"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-window-item",
                                        { attrs: { value: 1 } },
                                        [
                                          _c(
                                            "v-card-title",
                                            {
                                              staticClass:
                                                "title font-weight-regular justify-space-between"
                                            },
                                            [
                                              _c("span", [_vm._v("Category")]),
                                              _vm._v(" "),
                                              _c("v-avatar", {
                                                staticClass:
                                                  "subheading white--text",
                                                attrs: {
                                                  color: "primary lighten-2",
                                                  size: "24"
                                                },
                                                domProps: {
                                                  textContent: _vm._s(_vm.step)
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            [
                                              _c(
                                                "v-list-item-group",
                                                {
                                                  model: {
                                                    value: _vm.selectedCategory,
                                                    callback: function($$v) {
                                                      _vm.selectedCategory = $$v
                                                    },
                                                    expression:
                                                      "selectedCategory"
                                                  }
                                                },
                                                _vm._l(_vm.categories, function(
                                                  category
                                                ) {
                                                  return _c(
                                                    "v-list-item",
                                                    {
                                                      key: category._id,
                                                      attrs: {
                                                        value: category
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.step++
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          textContent: _vm._s(
                                                            category.name
                                                          )
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                }),
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.selectedCategory
                                        ? _c(
                                            "v-window-item",
                                            { attrs: { value: 2 } },
                                            [
                                              _c(
                                                "v-card-title",
                                                {
                                                  staticClass:
                                                    "title font-weight-regular justify-space-between"
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: { icon: "" },
                                                      on: {
                                                        click: function() {
                                                          _vm.selectedCategory = {}
                                                          _vm.step--
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-arrow-left")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        _vm.selectedCategory
                                                          .name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-avatar", {
                                                    staticClass:
                                                      "subheading white--text",
                                                    attrs: {
                                                      color:
                                                        "primary lighten-2",
                                                      size: "24"
                                                    },
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        _vm.step
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list",
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      model: {
                                                        value:
                                                          _vm.secondSelectedCategory,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.secondSelectedCategory = $$v
                                                        },
                                                        expression:
                                                          "\n                                                    secondSelectedCategory\n                                                "
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.selectedCategory
                                                        .children,
                                                      function(category) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: category._id,
                                                            attrs: {
                                                              value: category
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.step++
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              {
                                                                domProps: {
                                                                  textContent: _vm._s(
                                                                    category.name
                                                                  )
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.secondSelectedCategory
                                        ? _c(
                                            "v-window-item",
                                            { attrs: { value: 3 } },
                                            [
                                              _c(
                                                "v-card-title",
                                                {
                                                  staticClass:
                                                    "title font-weight-regular justify-space-between"
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: { icon: "" },
                                                      on: {
                                                        click: function() {
                                                          _vm.secondSelectedCategory = {}
                                                          _vm.step--
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-arrow-left")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        _vm
                                                          .secondSelectedCategory
                                                          .name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-avatar", {
                                                    staticClass:
                                                      "subheading white--text",
                                                    attrs: {
                                                      color:
                                                        "primary lighten-2",
                                                      size: "24"
                                                    },
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        _vm.step
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list",
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.thirdSelectedCategory,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.thirdSelectedCategory = $$v
                                                        },
                                                        expression:
                                                          "\n                                                    thirdSelectedCategory\n                                                "
                                                      }
                                                    },
                                                    _vm._l(
                                                      _vm.secondSelectedCategory
                                                        .children,
                                                      function(category) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: category._id,
                                                            attrs: {
                                                              value: category
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              {
                                                                domProps: {
                                                                  textContent: _vm._s(
                                                                    category.name
                                                                  )
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "5" } },
                            [
                              _c("v-text-field", {
                                staticClass: "b-tile",
                                attrs: {
                                  type: "number",
                                  label: "price",
                                  outlined: "",
                                  dense: "",
                                  clearable: "",
                                  rules: _vm.priceRules,
                                  success: _vm.priceSuccess
                                },
                                model: {
                                  value: _vm.product.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "price", _vm._n($$v))
                                  },
                                  expression: "product.price"
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
                              _c("v-text-field", {
                                staticClass: "b-tile",
                                attrs: {
                                  type: "number",
                                  label: "rating",
                                  outlined: "",
                                  dense: "",
                                  clearable: "",
                                  rules: _vm.ratingRules,
                                  success: _vm.ratingSuccess
                                },
                                model: {
                                  value: _vm.product.rating,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "rating", _vm._n($$v))
                                  },
                                  expression: "product.rating"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "11" } },
                            [
                              _c("v-file-input", {
                                staticClass: "b-tile",
                                attrs: {
                                  label: "upload product images",
                                  dense: "",
                                  outlined: "",
                                  multiple: "",
                                  "error-messages": !_vm.product.images.length
                                    ? "Images are required"
                                    : "",
                                  success: _vm.product.images.length
                                },
                                on: { change: _vm.onFileSelected }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "pa-0", attrs: { cols: "11" } },
                            [
                              _c(
                                "v-row",
                                _vm._l(_vm.product.images, function(image) {
                                  return _c(
                                    "v-col",
                                    { key: image, attrs: { cols: "4" } },
                                    [
                                      _c(
                                        "v-card",
                                        { attrs: { tile: "", outlined: "" } },
                                        [
                                          _c("v-img", { attrs: { src: image } })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
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
                                    [_vm._v(_vm._s(_vm.errorMessage))]
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

/***/ "./resources/js/views/admin/Products.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Products.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=49ba3dfa& */ "./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=49ba3dfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);