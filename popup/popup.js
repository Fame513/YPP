/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(64);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(2);
	const ReactDOM = __webpack_require__(3);
	const react_materialize_1 = __webpack_require__(4);
	const sendBtn_1 = __webpack_require__(64);
	chrome.runtime.getBackgroundPage(function (app) {
	    class FileInput extends React.Component {
	        render() {
	            return (React.createElement("input", { type: "file", multiple: true }));
	        }
	    }
	    class AuthBtn extends React.Component {
	        render() {
	            return (React.createElement(react_materialize_1.Button, { onClick: this.login }, "Auth"));
	        }
	        login() {
	            app.openAuthWindow();
	        }
	    }
	    class LogutBtn extends React.Component {
	        render() {
	            return (React.createElement("button", null, "Logout"));
	        }
	    }
	    class PasteBtn extends React.Component {
	        render() {
	            return (React.createElement("button", { onClick: this.pasteCode }, "Paste"));
	        }
	        pasteCode() {
	            console.log('past');
	        }
	    }
	    class NewWindowBtn extends React.Component {
	        render() {
	            return (React.createElement("button", { id: "open-btn" }, "Open new window"));
	        }
	    }
	    class TemplateList extends React.Component {
	        render() {
	            return (React.createElement("div", null,
	                React.createElement("select", null)));
	        }
	    }
	    class Content extends React.Component {
	        render() {
	            return (React.createElement("div", null,
	                React.createElement(FileInput, null),
	                React.createElement(sendBtn_1.SendBtn, null),
	                React.createElement(AuthBtn, null),
	                React.createElement(LogutBtn, null),
	                React.createElement(PasteBtn, null),
	                React.createElement(NewWindowBtn, null),
	                React.createElement(TemplateList, null)));
	        }
	    }
	    ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Toast = exports.Tag = exports.Tabs = exports.Table = exports.Tab = exports.Slider = exports.Slide = exports.SideNavItem = exports.SideNav = exports.Section = exports.SearchForm = exports.Row = exports.ProgressBar = exports.Preloader = exports.Parallax = exports.PaginationButton = exports.Pagination = exports.OverlayTrigger = exports.Overlay = exports.Navbar = exports.NavItem = exports.Modal = exports.MenuItem = exports.MediaBox = exports.Input = exports.Icon = exports.Footer = exports.Dropdown = exports.Divider = exports.Container = exports.CollectionItem = exports.Collection = exports.CollapsibleItem = exports.Collapsible = exports.Col = exports.Chip = exports.CardTitle = exports.CardPanel = exports.Card = exports.Carousel = exports.Button = exports.Breadcrumb = exports.Badge = exports.Autocomplete = undefined;
	
	var _Autocomplete = __webpack_require__(5);
	
	var _Autocomplete2 = _interopRequireDefault(_Autocomplete);
	
	var _Badge = __webpack_require__(20);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Breadcrumb = __webpack_require__(21);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Button = __webpack_require__(23);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Carousel = __webpack_require__(24);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Card = __webpack_require__(25);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _CardPanel = __webpack_require__(26);
	
	var _CardPanel2 = _interopRequireDefault(_CardPanel);
	
	var _CardTitle = __webpack_require__(27);
	
	var _CardTitle2 = _interopRequireDefault(_CardTitle);
	
	var _Chip = __webpack_require__(28);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	var _Col = __webpack_require__(22);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Collapsible = __webpack_require__(29);
	
	var _Collapsible2 = _interopRequireDefault(_Collapsible);
	
	var _CollapsibleItem = __webpack_require__(30);
	
	var _CollapsibleItem2 = _interopRequireDefault(_CollapsibleItem);
	
	var _Collection = __webpack_require__(31);
	
	var _Collection2 = _interopRequireDefault(_Collection);
	
	var _CollectionItem = __webpack_require__(32);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _Container = __webpack_require__(33);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Divider = __webpack_require__(34);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _Dropdown = __webpack_require__(35);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Footer = __webpack_require__(36);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Input = __webpack_require__(38);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _MediaBox = __webpack_require__(39);
	
	var _MediaBox2 = _interopRequireDefault(_MediaBox);
	
	var _MenuItem = __webpack_require__(40);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Modal = __webpack_require__(41);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _NavItem = __webpack_require__(44);
	
	var _NavItem2 = _interopRequireDefault(_NavItem);
	
	var _Navbar = __webpack_require__(45);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Overlay = __webpack_require__(43);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _OverlayTrigger = __webpack_require__(42);
	
	var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
	
	var _Pagination = __webpack_require__(46);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _PaginationButton = __webpack_require__(47);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	var _Parallax = __webpack_require__(48);
	
	var _Parallax2 = _interopRequireDefault(_Parallax);
	
	var _Preloader = __webpack_require__(49);
	
	var _Preloader2 = _interopRequireDefault(_Preloader);
	
	var _ProgressBar = __webpack_require__(51);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _Row = __webpack_require__(37);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _SearchForm = __webpack_require__(52);
	
	var _SearchForm2 = _interopRequireDefault(_SearchForm);
	
	var _Section = __webpack_require__(53);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _SideNav = __webpack_require__(54);
	
	var _SideNav2 = _interopRequireDefault(_SideNav);
	
	var _SideNavItem = __webpack_require__(55);
	
	var _SideNavItem2 = _interopRequireDefault(_SideNavItem);
	
	var _Slide = __webpack_require__(57);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	var _Slider = __webpack_require__(58);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Tab = __webpack_require__(59);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Table = __webpack_require__(60);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Tabs = __webpack_require__(61);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Tag = __webpack_require__(62);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Toast = __webpack_require__(63);
	
	var _Toast2 = _interopRequireDefault(_Toast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Autocomplete = _Autocomplete2.default;
	exports.Badge = _Badge2.default;
	exports.Breadcrumb = _Breadcrumb2.default;
	exports.Button = _Button2.default;
	exports.Carousel = _Carousel2.default;
	exports.Card = _Card2.default;
	exports.CardPanel = _CardPanel2.default;
	exports.CardTitle = _CardTitle2.default;
	exports.Chip = _Chip2.default;
	exports.Col = _Col2.default;
	exports.Collapsible = _Collapsible2.default;
	exports.CollapsibleItem = _CollapsibleItem2.default;
	exports.Collection = _Collection2.default;
	exports.CollectionItem = _CollectionItem2.default;
	exports.Container = _Container2.default;
	exports.Divider = _Divider2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.Footer = _Footer2.default;
	exports.Icon = _Icon2.default;
	exports.Input = _Input2.default;
	exports.MediaBox = _MediaBox2.default;
	exports.MenuItem = _MenuItem2.default;
	exports.Modal = _Modal2.default;
	exports.NavItem = _NavItem2.default;
	exports.Navbar = _Navbar2.default;
	exports.Overlay = _Overlay2.default;
	exports.OverlayTrigger = _OverlayTrigger2.default;
	exports.Pagination = _Pagination2.default;
	exports.PaginationButton = _PaginationButton2.default;
	exports.Parallax = _Parallax2.default;
	exports.Preloader = _Preloader2.default;
	exports.ProgressBar = _ProgressBar2.default;
	exports.Row = _Row2.default;
	exports.SearchForm = _SearchForm2.default;
	exports.Section = _Section2.default;
	exports.SideNav = _SideNav2.default;
	exports.SideNavItem = _SideNavItem2.default;
	exports.Slide = _Slide2.default;
	exports.Slider = _Slider2.default;
	exports.Tab = _Tab2.default;
	exports.Table = _Table2.default;
	exports.Tabs = _Tabs2.default;
	exports.Tag = _Tag2.default;
	exports.Toast = _Toast2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }] */
	
	
	var Autocomplete = function (_Component) {
	  _inherits(Autocomplete, _Component);
	
	  function Autocomplete(props) {
	    _classCallCheck(this, Autocomplete);
	
	    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));
	
	    _this.state = {
	      value: props.value || ''
	    };
	
	    _this.renderIcon = _this.renderIcon.bind(_this);
	    _this.renderDropdown = _this.renderDropdown.bind(_this);
	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Autocomplete, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var value = _ref.value;
	
	      if (value !== undefined) {
	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(icon, iconClassName) {
	      return _react2.default.createElement(
	        _Icon2.default,
	        { className: iconClassName },
	        icon
	      );
	    }
	  }, {
	    key: 'renderDropdown',
	    value: function renderDropdown(data, minLength, limit) {
	      var _this2 = this;
	
	      var value = this.state.value;
	
	
	      if (minLength && minLength > value.length || !value) {
	        return null;
	      }
	
	      var matches = Object.keys(data).filter(function (key) {
	        var index = key.toUpperCase().indexOf(value.toUpperCase());
	        return index !== -1 && value.length < key.length;
	      });
	      if (limit) matches = matches.slice(0, limit);
	      if (matches.length === 0) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'ul',
	        { className: 'autocomplete-content dropdown-content' },
	        matches.map(function (key, idx) {
	          var index = key.toUpperCase().indexOf(value.toUpperCase());
	          return _react2.default.createElement(
	            'li',
	            { key: key + '_' + idx, onClick: _this2._onAutocomplete.bind(_this2, key) },
	            data[key] ? _react2.default.createElement('img', { src: data[key], className: 'right circle' }) : null,
	            _react2.default.createElement(
	              'span',
	              null,
	              index !== 0 ? key.substring(0, index) : '',
	              _react2.default.createElement(
	                'span',
	                { className: 'highlight' },
	                value
	              ),
	              key.length !== index + value.length ? key.substring(index + value.length) : ''
	            )
	          );
	        })
	      );
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(evt) {
	      var onChange = this.props.onChange;
	
	      var value = evt.target.value;
	      if (onChange) {
	        onChange(evt, value);
	      }
	
	      this.setState({ value: value });
	    }
	  }, {
	    key: '_onAutocomplete',
	    value: function _onAutocomplete(value, evt) {
	      var _props = this.props,
	          onChange = _props.onChange,
	          onAutocomplete = _props.onAutocomplete;
	
	      if (onAutocomplete) {
	        onAutocomplete(value);
	      }
	      if (onChange) {
	        onChange(evt, value);
	      }
	
	      this.setState({ value: value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          id = _props2.id,
	          className = _props2.className,
	          title = _props2.title,
	          data = _props2.data,
	          icon = _props2.icon,
	          iconClassName = _props2.iconClassName,
	          s = _props2.s,
	          m = _props2.m,
	          l = _props2.l,
	          offset = _props2.offset,
	          minLength = _props2.minLength,
	          placeholder = _props2.placeholder,
	          limit = _props2.limit,
	          value = _props2.value,
	          onChange = _props2.onChange,
	          onAutocomplete = _props2.onAutocomplete,
	          props = _objectWithoutProperties(_props2, ['id', 'className', 'title', 'data', 'icon', 'iconClassName', 's', 'm', 'l', 'offset', 'minLength', 'placeholder', 'limit', 'value', 'onChange', 'onAutocomplete']);
	
	      var _id = id || 'autocomplete-' + (0, _idgen2.default)();
	      var sizes = { s: s, m: m, l: l };
	      var classes = {
	        col: true
	      };
	      _constants2.default.SIZES.forEach(function (size) {
	        classes[size + sizes[size]] = sizes[size];
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          offset: offset, className: (0, _classnames2.default)('input-field', className, classes) }, props),
	        icon && this.renderIcon(icon, iconClassName),
	        _react2.default.createElement('input', {
	          placeholder: placeholder,
	          className: 'autocomplete',
	          id: _id,
	          onChange: this._onChange,
	          type: 'text',
	          value: this.state.value
	        }),
	        _react2.default.createElement(
	          'label',
	          { htmlFor: _id },
	          title
	        ),
	        this.renderDropdown(data, minLength, limit)
	      );
	    }
	  }]);
	
	  return Autocomplete;
	}(_react.Component);
	
	Autocomplete.propTypes = {
	  /**
	   * Uniquely identifies <input> generated by this component
	   * Used by corresponding <label> for attribute
	   */
	  id: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  /*
	   * The title of the autocomplete component.
	   */
	  title: _propTypes2.default.string,
	  /*
	   * An object with the keys of the items to match in autocomplete
	   * The values are either null or a location to an image
	   */
	  data: _propTypes2.default.object.isRequired,
	  /*
	   * Optional materialize icon to add to the autocomplete bar
	   */
	  icon: _propTypes2.default.string,
	  iconClassName: _propTypes2.default.string,
	  s: _propTypes2.default.number,
	  m: _propTypes2.default.number,
	  l: _propTypes2.default.number,
	  offset: _propTypes2.default.string,
	  /*
	   * Determine input length before dropdown
	   */
	  minLength: _propTypes2.default.number,
	  /**
	   * The max amount of results that can be shown at once. Default: Infinity
	   * */
	  limit: _propTypes2.default.number,
	  /**
	   * Placeholder for input element
	   * */
	  placeholder: _propTypes2.default.string,
	  /**
	   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
	   * Function signature: (event, value) => ()
	   */
	  onChange: _propTypes2.default.func,
	  /**
	   * Called when auto-completed item is selected.
	   * Function signature: (value) => ()
	   */
	  onAutocomplete: _propTypes2.default.func,
	  /**
	   * The value of the input
	   */
	  value: _propTypes2.default.string
	};
	
	exports.default = Autocomplete;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(15)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(9);
	var invariant = __webpack_require__(10);
	var warning = __webpack_require__(11);
	var assign = __webpack_require__(12);
	
	var ReactPropTypesSecret = __webpack_require__(13);
	var checkPropTypes = __webpack_require__(14);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(9);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(10);
	  var warning = __webpack_require__(11);
	  var ReactPropTypesSecret = __webpack_require__(13);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(9);
	var invariant = __webpack_require__(10);
	var ReactPropTypesSecret = __webpack_require__(13);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  STYLES: ['large', 'floating', 'flat'],
	  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
	  SIZES: ['s', 'm', 'l'],
	  PLACEMENTS: ['left', 'center', 'right'],
	  SCALES: ['big', 'small'],
	  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(props) {
	  var classes = {
	    'material-icons': true
	  };
	  _constants2.default.PLACEMENTS.forEach(function (p) {
	    classes[p] = props[p];
	  });
	
	  _constants2.default.ICON_SIZES.forEach(function (s) {
	    classes[s] = props[s];
	  });
	
	  return _react2.default.createElement(
	    'i',
	    { className: (0, _classnames2.default)(classes, props.className) },
	    props.children
	  );
	};
	
	Icon.propTypes = {
	  /*
	   * Classname passed to i tag
	   */
	  className: _propTypes2.default.string,
	  /*
	   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
	   */
	  children: _propTypes2.default.string,
	  /*
	   * Placement for icon if used beside a text ↓
	   */
	  left: _propTypes2.default.bool,
	  center: _propTypes2.default.bool,
	  right: _propTypes2.default.bool,
	  /*
	   * Sizes for icons ↓
	   */
	  tiny: _propTypes2.default.bool,
	  small: _propTypes2.default.bool,
	  medium: _propTypes2.default.bool,
	  large: _propTypes2.default.bool
	};
	
	exports.default = Icon;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetID = resetID;
	exports.default = idgen;
	var id = 0;
	
	function resetID() {
	  id = 0;
	}
	
	function idgen() {
	  var oldId = id;
	  id += 1;
	  return oldId;
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Badge = function Badge(_ref) {
	  var className = _ref.className,
	      newIcon = _ref.newIcon,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['className', 'newIcon', 'children']);
	
	  var classes = {
	    badge: true,
	    'new': newIcon
	  };
	
	  return _react2.default.createElement(
	    'span',
	    _extends({}, props, { className: (0, _classnames2.default)(classes, className) }),
	    children
	  );
	};
	
	Badge.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  /**
	   * Add the <b>new</b> class name
	   */
	  newIcon: _propTypes2.default.bool
	};
	
	exports.default = Badge;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Col = __webpack_require__(22);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Breadcrumb = function Breadcrumb(_ref) {
	  var cols = _ref.cols,
	      children = _ref.children;
	  return _react2.default.createElement(
	    'nav',
	    { className: 'row' },
	    _react2.default.createElement(
	      'div',
	      { className: 'nav-wrapper' },
	      _react2.default.createElement(
	        _Col2.default,
	        { s: cols },
	        _react2.default.Children.map(children, function (item) {
	          return _react2.default.cloneElement(item, { className: 'breadcrumb' });
	        })
	      )
	    )
	  );
	};
	
	Breadcrumb.propTypes = {
	  children: _propTypes2.default.node,
	  cols: _propTypes2.default.number
	};
	
	Breadcrumb.defaultProps = {
	  cols: 12
	};
	
	exports.default = Breadcrumb;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Col = function Col(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      _ref$node = _ref.node,
	      C = _ref$node === undefined ? 'div' : _ref$node,
	      s = _ref.s,
	      m = _ref.m,
	      l = _ref.l,
	      offset = _ref.offset,
	      other = _objectWithoutProperties(_ref, ['children', 'className', 'node', 's', 'm', 'l', 'offset']);
	
	  var sizes = { s: s, m: m, l: l };
	  var classes = { col: true };
	  _constants2.default.SIZES.forEach(function (size) {
	    classes[size + sizes[size]] = sizes[size];
	  });
	
	  if (offset) {
	    offset.split(' ').forEach(function (off) {
	      classes['offset-' + off] = true;
	    });
	  }
	
	  return _react2.default.createElement(
	    C,
	    _extends({}, other, { className: (0, _classnames2.default)(classes, className) }),
	    children
	  );
	};
	
	Col.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  /**
	   * Columns for large size screens
	   */
	  l: _propTypes2.default.number,
	  /**
	   * Columns for middle size screens
	   */
	  m: _propTypes2.default.number,
	  /**
	   * The node to be used for the column
	   * @default div
	   */
	  node: _propTypes2.default.node,
	  /**
	   * To offset, simply add s2 to the class where s signifies the screen
	   * class-prefix (s = small, m = medium, l = large) and the number after
	   * is the number of columns you want to offset by.
	   */
	  offset: _propTypes2.default.string,
	  /**
	   * Columns for small size screens
	   */
	  s: _propTypes2.default.number
	};
	
	exports.default = Col;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.renderIcon = _this.renderIcon.bind(_this);
	    _this.renderFab = _this.renderFab.bind(_this);
	    return _this;
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          node = _props.node,
	          fab = _props.fab,
	          fabClickOnly = _props.fabClickOnly,
	          modal = _props.modal,
	          flat = _props.flat,
	          floating = _props.floating,
	          large = _props.large,
	          disabled = _props.disabled,
	          waves = _props.waves,
	          other = _objectWithoutProperties(_props, ['className', 'node', 'fab', 'fabClickOnly', 'modal', 'flat', 'floating', 'large', 'disabled', 'waves']);
	
	      var toggle = fabClickOnly ? 'click-to-toggle' : '';
	      var C = node;
	      var classes = {
	        btn: true,
	        disabled: disabled,
	        'waves-effect': waves
	      };
	
	      if (_constants2.default.WAVES.indexOf(waves) > -1) {
	        classes['waves-' + waves] = true;
	      }
	
	      var styles = { flat: flat, floating: floating, large: large };
	      _constants2.default.STYLES.forEach(function (style) {
	        classes['btn-' + style] = styles[style];
	      });
	
	      if (modal) {
	        classes['modal-action'] = true;
	        classes['modal-' + modal] = true;
	      }
	      if (fab) {
	        return this.renderFab((0, _classnames2.default)(classes, className), fab, toggle);
	      } else {
	        return _react2.default.createElement(
	          C,
	          _extends({}, other, {
	            disabled: !!disabled,
	            onClick: this.props.onClick,
	            className: (0, _classnames2.default)(classes, className)
	          }),
	          this.renderIcon(),
	          this.props.children
	        );
	      }
	    }
	  }, {
	    key: 'renderFab',
	    value: function renderFab(className, orientation, clickOnly) {
	      var classes = (0, _classnames2.default)(orientation, clickOnly);
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('fixed-action-btn', classes) },
	        _react2.default.createElement(
	          'a',
	          { className: className },
	          this.renderIcon()
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.Children.map(this.props.children, function (child) {
	            return _react2.default.createElement(
	              'li',
	              { key: (0, _idgen2.default)() },
	              child
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var icon = this.props.icon;
	
	      if (!icon) return;
	
	      return _react2.default.createElement(
	        _Icon2.default,
	        null,
	        icon
	      );
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	Button.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  /**
	   * Enable other styles
	   */
	  flat: _propTypes2.default.bool,
	  large: _propTypes2.default.bool,
	  floating: _propTypes2.default.bool,
	  /**
	   * Fixed action button
	   * If enabled, any children button will be rendered as actions, remember to provide an icon.
	   * @default vertical
	   */
	  fab: _propTypes2.default.oneOf(['vertical', 'horizontal']),
	  /**
	   * The icon to display, if specified it will create a button with the material icon
	   */
	  icon: _propTypes2.default.string,
	  modal: _propTypes2.default.oneOf(['close', 'confirm']),
	  node: _propTypes2.default.node,
	  onClick: _propTypes2.default.func,
	  /**
	   * Tooltip to show when mouse hovered
	   */
	  tooltip: _propTypes2.default.string,
	  waves: _propTypes2.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal']),
	  /**
	   * FAB Click-Only
	   * Turns a FAB from a hover-toggle to a click-toggle
	   */
	  fabClickOnly: _propTypes2.default.bool
	};
	
	Button.defaultProps = {
	  node: 'button'
	};
	
	exports.default = Button;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Carousel = function (_React$Component) {
	  _inherits(Carousel, _React$Component);
	
	  function Carousel(props) {
	    _classCallCheck(this, Carousel);
	
	    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
	
	    _this.renderFixedItem = _this.renderFixedItem.bind(_this);
	    return _this;
	  }
	
	  _createClass(Carousel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props$options = this.props.options,
	          options = _props$options === undefined ? {} : _props$options;
	
	
	      if (typeof $ !== 'undefined') {
	        $(this._carousel).carousel(options);
	      }
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(child, idx) {
	      if (typeof child === 'string') {
	        return _react2.default.createElement(
	          'a',
	          { className: 'carousel-item' },
	          _react2.default.createElement('img', { src: child })
	        );
	      }
	      return _react2.default.cloneElement(child, {
	        className: (0, _classnames2.default)(child.props.className, 'carousel-item')
	      });
	    }
	  }, {
	    key: 'renderFixedItem',
	    value: function renderFixedItem() {
	      var fixedItem = this.props.fixedItem;
	
	      return fixedItem && _react2.default.createElement(
	        'div',
	        { className: 'carousel-fixed-item center' },
	        fixedItem
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          carouselId = _props.carouselId,
	          images = _props.images,
	          _props$options2 = _props.options,
	          options = _props$options2 === undefined ? {} : _props$options2;
	
	      var elemsToRender = children || images || [];
	
	      return elemsToRender && _react2.default.createElement(
	        'div',
	        {
	          id: carouselId,
	          ref: function ref(el) {
	            _this2._carousel = el;
	          },
	          className: (0, _classnames2.default)('carousel', { 'carousel-slider': options.fullWidth }, className)
	        },
	        this.renderFixedItem(),
	        _react2.default.Children.map(elemsToRender, this.renderItems)
	      );
	    }
	  }]);
	
	  return Carousel;
	}(_react2.default.Component);
	
	;
	
	Carousel.propTypes = {
	  /*
	  * Children to render as slider elements
	  */
	  children: _propTypes2.default.any,
	  /*
	  * Array of image url's
	  */
	  images: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  /*
	  * Fixed element on slider
	  */
	  fixedItem: _propTypes2.default.node,
	  /*
	  * Additional classNames for carousel wrapper
	  */
	  className: _propTypes2.default.string,
	  /*
	  * Carousel ID for jQuery manipulating
	  */
	  carouselId: _propTypes2.default.string,
	  /*
	   * Carousel initialization options
	   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
	  */
	  options: _propTypes2.default.shape({
	    /*
	    * Transition duration in milliseconds. (Default: 200)
	    */
	    duration: _propTypes2.default.number,
	    /*
	    * Perspective zoom. If 0, all items are the same size. (Default: -100)
	    */
	    dist: _propTypes2.default.number,
	    /*
	    * Set the spacing of the center item. (Default: 0)
	    */
	    shift: _propTypes2.default.number,
	    /*
	    * Set the padding between non center items. (Default: 0)
	    */
	    padding: _propTypes2.default.number,
	    /*
	    * Make the carousel a full width slider like the second example. (Default: false)
	    */
	    fullWidth: _propTypes2.default.bool,
	    /*
	    * Set to true to show indicators. (Default: false)
	    */
	    indicators: _propTypes2.default.bool,
	    /*
	     * Don't wrap around and cycle through items. (Default: false)
	    */
	    noWrap: _propTypes2.default.bool
	  })
	};
	
	exports.default = Carousel;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var renderTitle = function renderTitle(title, reveal) {
	  return _react2.default.createElement(
	    'span',
	    { className: (0, _classnames2.default)('card-title', 'grey-text', 'text-darken-4', { 'activator': reveal }) },
	    title,
	    reveal && _react2.default.createElement(
	      _Icon2.default,
	      { right: true },
	      'more_vert'
	    )
	  );
	};
	
	var renderReveal = function renderReveal(title, reveal) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'card-reveal' },
	    _react2.default.createElement(
	      'span',
	      { className: 'card-title grey-text text-darken-4' },
	      title,
	      _react2.default.createElement(
	        _Icon2.default,
	        { right: true },
	        'close'
	      )
	    ),
	    reveal
	  );
	};
	
	var renderAction = function renderAction(actions) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'card-action' },
	    actions
	  );
	};
	
	var Card = function Card(_ref) {
	  var title = _ref.title,
	      header = _ref.header,
	      className = _ref.className,
	      textClassName = _ref.textClassName,
	      actions = _ref.actions,
	      reveal = _ref.reveal,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['title', 'header', 'className', 'textClassName', 'actions', 'reveal', 'children']);
	
	  var classes = { card: true };
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, props, { className: (0, _classnames2.default)(className, classes) }),
	    header,
	    _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)('card-content', textClassName) },
	      title && renderTitle(title, reveal),
	      _react2.default.createElement(
	        'div',
	        null,
	        children
	      )
	    ),
	    renderReveal(title, reveal),
	    actions && renderAction(actions)
	  );
	};
	
	Card.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  title: _propTypes2.default.string,
	  textClassName: _propTypes2.default.string,
	  reveal: _propTypes2.default.element,
	  header: _propTypes2.default.element,
	  // The buttons to be displayed at the action area
	  actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
	};
	
	exports.default = Card;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CardPanel = function CardPanel(_ref) {
	  var className = _ref.className,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['className', 'children']);
	
	  var classes = {
	    'card-panel': true
	  };
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	    children
	  );
	};
	
	CardPanel.propTypes = {
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};
	
	exports.default = CardPanel;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardTitle = function (_Component) {
	  _inherits(CardTitle, _Component);
	
	  function CardTitle() {
	    _classCallCheck(this, CardTitle);
	
	    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
	  }
	
	  _createClass(CardTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          image = _props.image,
	          reveal = _props.reveal,
	          waves = _props.waves,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['image', 'reveal', 'waves', 'children']);
	
	      var classes = {
	        'card-image': true
	      };
	      if (waves) {
	        classes['waves-effect'] = true;
	        classes['waves-' + waves] = true;
	        classes['waves-block'] = true;
	      }
	      var imgClasses = { 'activator': reveal };
	      var titleClasses = {
	        'card-title': true
	      };
	      return _react2.default.createElement(
	        'div',
	        _extends({ className: (0, _classnames2.default)(classes) }, props),
	        _react2.default.createElement('img', { className: (0, _classnames2.default)(imgClasses), src: image }),
	        _react2.default.createElement(
	          'span',
	          { className: (0, _classnames2.default)(titleClasses) },
	          children
	        )
	      );
	    }
	  }]);
	
	  return CardTitle;
	}(_react.Component);
	
	CardTitle.propTypes = {
	  children: _propTypes2.default.node,
	  // Whether the image serves as activator for the reveal
	  reveal: _propTypes2.default.bool,
	  // the waves effect
	  waves: _propTypes2.default.oneOf(_constants2.default.WAVES),
	  // The path to the image
	  image: _propTypes2.default.string.isRequired
	};
	
	exports.default = CardTitle;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Chip = function Chip(_ref) {
	  var children = _ref.children,
	      close = _ref.close;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'chip' },
	    children,
	    close ? _react2.default.createElement(
	      'i',
	      { className: 'close material-icons' },
	      'close'
	    ) : null
	  );
	};
	
	Chip.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * If show a close icon
	   * @default false
	   */
	  close: _propTypes2.default.bool
	};
	
	exports.default = Chip;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collapsible = function (_Component) {
	  _inherits(Collapsible, _Component);
	
	  function Collapsible(props) {
	    _classCallCheck(this, Collapsible);
	
	    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	
	    _this.renderItem = _this.renderItem.bind(_this);
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collapsible, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $(this._collapsible).collapsible();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          accordion = _props.accordion,
	          popout = _props.popout,
	          className = _props.className,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['accordion', 'popout', 'className', 'children']);
	
	      delete props.defaultActiveKey;
	
	      var classes = {
	        collapsible: true,
	        popout: popout
	      };
	      var collapsible = accordion ? 'accordion' : 'expandable';
	
	      return _react2.default.createElement(
	        'ul',
	        _extends({ ref: function ref(node) {
	            _this2._collapsible = node;
	          }, className: (0, _classnames2.default)(className, classes) }, props, { 'data-collapsible': collapsible }),
	        _react2.default.Children.map(children, this.renderItem)
	      );
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(child, key) {
	      if (!child) return null;
	      var props = {
	        expanded: this.state.activeKey === key,
	        eventKey: key,
	        onSelect: this.handleSelect
	      };
	
	      return _react2.default.cloneElement(child, props);
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(key) {
	      var onSelect = this.props.onSelect;
	
	
	      if (onSelect) {
	        onSelect(key);
	      }
	
	      if (this.state.activeKey === key) {
	        key = null;
	      }
	
	      if (this.props.accordion) {
	        this.setState({ activeKey: key });
	      }
	    }
	  }]);
	
	  return Collapsible;
	}(_react.Component);
	
	Collapsible.propTypes = {
	  /**
	   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
	   * or it can only allow one section to stay open at a time, which is called an accordion.
	   * @default false
	   */
	  accordion: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  /**
	   * Enable popout style
	   */
	  popout: _propTypes2.default.bool,
	  /**
	   * The default CollapsibleItem that should be expanded. This value should match the specified
	   * item's eventKey value. Ignored if accordion is false.
	   */
	  defaultActiveKey: _propTypes2.default.any,
	  onSelect: _propTypes2.default.func
	};
	
	Collapsible.defaultProps = {
	  accordion: false
	};
	
	exports.default = Collapsible;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CollapsibleItem = function CollapsibleItem(_ref) {
	  var className = _ref.className,
	      eventKey = _ref.eventKey,
	      expanded = _ref.expanded,
	      header = _ref.header,
	      children = _ref.children,
	      icon = _ref.icon,
	      iconClassName = _ref.iconClassName,
	      Node = _ref.node,
	      onSelect = _ref.onSelect,
	      props = _objectWithoutProperties(_ref, ['className', 'eventKey', 'expanded', 'header', 'children', 'icon', 'iconClassName', 'node', 'onSelect']);
	
	  return _react2.default.createElement(
	    'li',
	    _extends({ className: (0, _classnames2.default)(className, { active: expanded }) }, props),
	    _react2.default.createElement(
	      Node,
	      {
	        className: (0, _classnames2.default)('collapsible-header', { active: expanded }),
	        onClick: function onClick() {
	          return onSelect(eventKey);
	        }
	      },
	      icon && _react2.default.createElement(
	        _Icon2.default,
	        { className: iconClassName },
	        icon
	      ),
	      header
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'collapsible-body' },
	      children
	    )
	  );
	};
	
	CollapsibleItem.propTypes = {
	  header: _propTypes2.default.any.isRequired,
	  icon: _propTypes2.default.string,
	  iconClassName: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  onSelect: _propTypes2.default.func,
	  /**
	   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
	   * @default false
	   */
	  expanded: _propTypes2.default.bool,
	  /**
	   * The value to pass to the onSelect callback.
	   */
	  eventKey: _propTypes2.default.any,
	  className: _propTypes2.default.string,
	  /**
	   * The node type of the header
	   * @default a
	   */
	  node: _propTypes2.default.node,
	  /**
	   * The scroll behavior for scrollIntoView
	   */
	  scroll: _propTypes2.default.oneOf(['auto', 'instant', 'smooth'])
	};
	
	CollapsibleItem.defaultProps = {
	  expanded: false,
	  node: 'div'
	};
	
	exports.default = CollapsibleItem;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collection = function (_Component) {
	  _inherits(Collection, _Component);
	
	  function Collection(props) {
	    _classCallCheck(this, Collection);
	
	    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));
	
	    _this.renderHeader = _this.renderHeader.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collection, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          header = _props.header;
	
	
	      var classes = {
	        collection: true,
	        'with-header': !!header
	      };
	      var C = 'ul';
	      _react2.default.Children.forEach(children, function (child) {
	        if (child.props.href) {
	          C = 'div';
	        }
	      });
	      return _react2.default.createElement(
	        C,
	        { className: (0, _classnames2.default)(classes) },
	        header ? this.renderHeader() : null,
	        children
	      );
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var header = void 0;
	      if (this.props.header) {
	        if (_react2.default.isValidElement(this.props.header)) {
	          header = this.props.header;
	        } else {
	          header = _react2.default.createElement(
	            'h4',
	            null,
	            this.props.header
	          );
	        }
	        return _react2.default.createElement(
	          'li',
	          { className: 'collection-header' },
	          header
	        );
	      }
	    }
	  }]);
	
	  return Collection;
	}(_react.Component);
	
	Collection.propTypes = {
	  children: _propTypes2.default.node,
	  header: _propTypes2.default.node
	};
	
	exports.default = Collection;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CollectionItem = function (_Component) {
	  _inherits(CollectionItem, _Component);
	
	  function CollectionItem() {
	    _classCallCheck(this, CollectionItem);
	
	    return _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).apply(this, arguments));
	  }
	
	  _createClass(CollectionItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          active = _props.active,
	          children = _props.children,
	          className = _props.className,
	          other = _objectWithoutProperties(_props, ['active', 'children', 'className']);
	
	      var classes = {
	        'collection-item': true,
	        active: active
	      };
	
	      var C = this.props.href ? 'a' : 'li';
	
	      return _react2.default.createElement(
	        C,
	        _extends({}, other, { className: (0, _classnames2.default)(className, classes) }),
	        children
	      );
	    }
	  }]);
	
	  return CollectionItem;
	}(_react.Component);
	
	CollectionItem.propTypes = {
	  active: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  href: _propTypes2.default.string
	};
	
	exports.default = CollectionItem;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Container = function Container(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'container' },
	    props.children
	  );
	};
	
	Container.propTypes = {
	  children: _propTypes2.default.node
	};
	
	exports.default = Container;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Divider = function Divider() {
	  return _react2.default.createElement('div', { className: 'divider' });
	};
	exports.default = Divider;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classes = {
	  'dropdown-content': true
	};
	
	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);
	
	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);
	
	    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
	
	    _this.idx = 'dropdown_' + (0, _idgen2.default)();
	    _this.renderTrigger = _this.renderTrigger.bind(_this);
	    return _this;
	  }
	
	  _createClass(Dropdown, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var options = this.props.options || {};
	      $(this._trigger).dropdown(options);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $(this._trigger).off();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          props = _objectWithoutProperties(_props, ['children', 'className']);
	
	      delete props.trigger;
	      delete props.options;
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.renderTrigger(),
	        _react2.default.createElement(
	          'ul',
	          _extends({}, props, { className: (0, _classnames2.default)(classes, className), id: this.idx }),
	          children
	        )
	      );
	    }
	  }, {
	    key: 'renderTrigger',
	    value: function renderTrigger() {
	      var _this2 = this;
	
	      var trigger = this.props.trigger;
	
	
	      return _react2.default.cloneElement(trigger, {
	        ref: function ref(t) {
	          return _this2._trigger = '[data-activates=' + _this2.idx + ']';
	        },
	        className: (0, _classnames2.default)(trigger.props.className, 'dropdown-button'),
	        'data-activates': this.idx
	      });
	    }
	  }]);
	
	  return Dropdown;
	}(_react.Component);
	
	Dropdown.propTypes = {
	  /**
	   * The node to trigger the dropdown
	   */
	  trigger: _propTypes2.default.node.isRequired,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	
	  /**
	   * Options hash for the dropdown
	   * more info: http://materializecss.com/dropdown.html#options
	   */
	  options: _propTypes2.default.shape({
	    inDuration: _propTypes2.default.number,
	    outDuration: _propTypes2.default.number,
	    constrainWidth: _propTypes2.default.bool,
	    hover: _propTypes2.default.bool,
	    gutter: _propTypes2.default.number,
	    belowOrigin: _propTypes2.default.bool,
	    alignment: _propTypes2.default.oneOf(['left', 'right'])
	  })
	};
	
	exports.default = Dropdown;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Row = __webpack_require__(37);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(22);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          copyrights = _props.copyrights,
	          links = _props.links,
	          moreLinks = _props.moreLinks,
	          props = _objectWithoutProperties(_props, ['children', 'className', 'copyrights', 'links', 'moreLinks']);
	
	      var classes = {
	        'page-footer': true
	      };
	
	      return _react2.default.createElement(
	        'footer',
	        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            _Row2.default,
	            null,
	            _react2.default.createElement(
	              _Col2.default,
	              { l: 6, s: 12 },
	              children
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { l: 4, s: 12, offset: 'l2' },
	              links
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'footer-copyright' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            copyrights,
	            moreLinks
	          )
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	Footer.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  copyrights: _propTypes2.default.string,
	  links: _propTypes2.default.node,
	  moreLinks: _propTypes2.default.node
	};
	
	exports.default = Footer;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Row = function Row(_ref) {
	  var children = _ref.children,
	      className = _ref.className,
	      _ref$node = _ref.node,
	      Node = _ref$node === undefined ? 'div' : _ref$node,
	      props = _objectWithoutProperties(_ref, ['children', 'className', 'node']);
	
	  return _react2.default.createElement(
	    Node,
	    _extends({ className: (0, _classnames2.default)('row', className) }, props),
	    children
	  );
	};
	
	Row.propTypes = {
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  node: _propTypes2.default.node
	};
	
	exports.default = Row;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Component) {
	  _inherits(Input, _Component);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	
	    _this.state = {
	      value: props.value || props.defaultValue,
	      checked: !!props.checked
	    };
	
	    _this._onChange = _this._onChange.bind(_this);
	    _this.getMultipleValues = _this.getMultipleValues.bind(_this);
	    _this.isSelect = _this.isSelect.bind(_this);
	    return _this;
	  }
	
	  _createClass(Input, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.isMaterialSelect()) {
	        $(this.selectInput).material_select();
	        $(this.selectInput).on('change', this._onChange);
	      }
	      if (this.isDatePicker) {
	        $(this.dateInput).pickadate(this.props.options);
	        $(this.dateInput).on('change', this._onChange);
	      }
	      if (this.isTimePicker) {
	        $(this.timeInput).pickatime(this.props.options);
	        $(this.timeInput).on('change', this._onChange);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.isMaterialSelect() && !this.props.multiple) {
	        $(this.selectInput).material_select();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (this.isMaterialSelect()) {
	        this.setState({
	          value: nextProps.defaultValue
	        }, function () {
	          return $(_this2.selectInput).material_select();
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.isMaterialSelect()) {
	        $(this.selectInput).off('change', this._onChange);
	      }
	    }
	  }, {
	    key: 'getMultipleValues',
	    value: function getMultipleValues(_ref) {
	      var options = _ref.options;
	
	      if (!options) {
	        return;
	      }
	
	      return Array.from(options).filter(function (opt) {
	        return opt.selected;
	      }).map(function (opt) {
	        return opt.value;
	      });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      var onChange = this.props.onChange;
	
	      var types = {
	        'checkbox': e.target.checked,
	        'radio': e.target.checked,
	        'select-multiple': this.getMultipleValues(e.target),
	        'default': e.target.value
	      };
	      var value = types.hasOwnProperty(e.target.type) ? types[e.target.type] : types['default'];
	      if (onChange) {
	        onChange(e, value);
	      }
	
	      this.setState({ value: value, checked: e.target.checked });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          browserDefault = _props.browserDefault,
	          children = _props.children,
	          className = _props.className,
	          labelClassName = _props.labelClassName,
	          defaultValue = _props.defaultValue,
	          error = _props.error,
	          label = _props.label,
	          multiple = _props.multiple,
	          placeholder = _props.placeholder,
	          success = _props.success,
	          s = _props.s,
	          m = _props.m,
	          l = _props.l,
	          type = _props.type,
	          validate = _props.validate,
	          onLabel = _props.onLabel,
	          offLabel = _props.offLabel,
	          other = _objectWithoutProperties(_props, ['browserDefault', 'children', 'className', 'labelClassName', 'defaultValue', 'error', 'label', 'multiple', 'placeholder', 'success', 's', 'm', 'l', 'type', 'validate', 'onLabel', 'offLabel']);
	
	      var sizes = { s: s, m: m, l: l };
	      this._id = this._id || this.props.id || 'input_' + (0, _idgen2.default)();
	      var classes = {
	        col: true,
	        'input-field': type !== 'checkbox' && type !== 'radio'
	      };
	      _constants2.default.SIZES.forEach(function (size) {
	        classes[size + sizes[size]] = sizes[size];
	      });
	      var inputClasses = {
	        validate: validate,
	        invalid: error,
	        valid: success,
	        'browser-default': browserDefault && this.isSelect()
	      };
	      var C = void 0,
	          inputType = void 0;
	      switch (type) {
	        case 'textarea':
	          C = 'textarea';
	          inputClasses['materialize-textarea'] = true;
	          break;
	        case 'switch':
	          C = 'input';
	          inputType = 'checkbox';
	          break;
	        default:
	          C = 'input';
	          inputType = type || 'text';
	      }
	      var labelClasses = {
	        active: this.state.value || this.isSelect()
	      };
	
	      var htmlLabel = label || inputType === 'radio' ? _react2.default.createElement(
	        'label',
	        {
	          className: (0, _classnames2.default)(labelClasses, labelClassName),
	          'data-success': success,
	          'data-error': error,
	          htmlFor: this._id
	        },
	        label
	      ) : null;
	
	      if (this.isSelect()) {
	        var options = placeholder && !defaultValue ? [_react2.default.createElement(
	          'option',
	          { disabled: true, key: (0, _idgen2.default)() },
	          placeholder
	        )] : [];
	        options = options.concat(_react2.default.Children.map(children, function (child) {
	          return _react2.default.cloneElement(child, { 'key': child.props.value });
	        }));
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          this.renderIcon(),
	          htmlLabel,
	          _react2.default.createElement(
	            'select',
	            _extends({}, other, {
	              multiple: multiple,
	              id: this._id,
	              className: (0, _classnames2.default)(className, inputClasses),
	              ref: function ref(_ref2) {
	                return _this3.selectInput = _ref2;
	              },
	              defaultValue: defaultValue
	            }),
	            options
	          )
	        );
	      } else if (type === 'date') {
	        this.isDatePicker = true;
	        delete other.options;
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          this.renderIcon(),
	          _react2.default.createElement(C, _extends({}, other, {
	            className: (0, _classnames2.default)(className, inputClasses),
	            defaultValue: defaultValue,
	            id: this._id,
	            ref: function ref(_ref3) {
	              return _this3.dateInput = _ref3;
	            },
	            placeholder: placeholder,
	            type: 'date'
	          })),
	          htmlLabel
	        );
	      } else if (type === 'time') {
	        this.isTimePicker = true;
	        delete other.options;
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          this.renderIcon(),
	          _react2.default.createElement(C, _extends({}, other, {
	            className: (0, _classnames2.default)(className, inputClasses),
	            defaultValue: defaultValue,
	            id: this._id,
	            ref: function ref(_ref4) {
	              return _this3.timeInput = _ref4;
	            },
	            placeholder: placeholder
	          })),
	          htmlLabel
	        );
	      } else if (type === 'switch') {
	        return _react2.default.createElement(
	          'div',
	          { className: 'switch' },
	          _react2.default.createElement(
	            'label',
	            null,
	            offLabel || 'Off',
	            _react2.default.createElement('input', _extends({}, other, {
	              onChange: this._onChange,
	              type: 'checkbox'
	            })),
	            _react2.default.createElement('span', { className: 'lever' }),
	            onLabel || 'On'
	          )
	        );
	      } else {
	        var _defaultValue = inputType !== 'checkbox' && inputType !== 'radio' ? this.state.value : _defaultValue;
	
	        if (inputType === 'checkbox' || inputType === 'radio') {
	          return _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)(classes) },
	            this.renderIcon(),
	            _react2.default.createElement(C, _extends({}, other, {
	              className: (0, _classnames2.default)(className, inputClasses),
	              ref: function ref(_ref5) {
	                return _this3.input = _ref5;
	              },
	              id: this._id,
	              checked: this.state.checked,
	              onChange: this._onChange,
	              placeholder: placeholder,
	              type: inputType
	            })),
	            htmlLabel
	          );
	        }
	
	        return _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(classes) },
	          this.renderIcon(),
	          _react2.default.createElement(C, _extends({}, other, {
	            className: (0, _classnames2.default)(className, inputClasses),
	            ref: function ref(_ref6) {
	              return _this3.input = _ref6;
	            },
	            defaultValue: _defaultValue,
	            id: this._id,
	            onChange: this._onChange,
	            placeholder: placeholder,
	            type: inputType
	          })),
	          htmlLabel
	        );
	      }
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var _props2 = this.props,
	          icon = _props2.icon,
	          children = _props2.children;
	
	      if (icon) {
	        return _react2.default.createElement(
	          _Icon2.default,
	          { className: 'prefix' },
	          icon
	        );
	      } else {
	        var _icon = null;
	        if (_react2.default.Children.count(children) === 1 && !Array.isArray(children)) {
	          _icon = _react2.default.Children.only(children);
	        }
	        return _icon === null ? null : _react2.default.cloneElement(_icon, { className: 'prefix' });
	      }
	    }
	  }, {
	    key: 'isSelect',
	    value: function isSelect() {
	      return this.props.type === 'select';
	    }
	  }, {
	    key: 'isMaterialSelect',
	    value: function isMaterialSelect() {
	      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
	    }
	  }]);
	
	  return Input;
	}(_react.Component);
	
	Input.propTypes = {
	  s: _propTypes2.default.number,
	  m: _propTypes2.default.number,
	  l: _propTypes2.default.number,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  labelClassName: _propTypes2.default.string,
	  label: _propTypes2.default.node,
	  error: _propTypes2.default.string,
	  success: _propTypes2.default.string,
	  /**
	   * Input field type, e.g. select, checkbox, radio, text, tel, email
	   * @default 'text'
	   */
	  type: _propTypes2.default.string,
	  defaultValue: _propTypes2.default.any,
	  placeholder: _propTypes2.default.string,
	  id: _propTypes2.default.string,
	  icon: _propTypes2.default.string,
	  name: _propTypes2.default.string,
	  validate: _propTypes2.default.bool,
	  multiple: _propTypes2.default.bool,
	  browserDefault: _propTypes2.default.bool,
	  checked: _propTypes2.default.bool,
	  onLabel: _propTypes2.default.string,
	  offLabel: _propTypes2.default.string,
	  onChange: _propTypes2.default.func,
	  options: _propTypes2.default.any,
	  /**
	   * Value used to set a initial value
	   */
	  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
	};
	
	Input.defaultProps = { type: 'text', checked: false };
	
	exports.default = Input;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MediaBox = function (_Component) {
	  _inherits(MediaBox, _Component);
	
	  function MediaBox() {
	    _classCallCheck(this, MediaBox);
	
	    return _possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
	  }
	
	  _createClass(MediaBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.materialboxed').materialbox();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          src = _props.src,
	          className = _props.className,
	          caption = _props.caption,
	          props = _objectWithoutProperties(_props, ['src', 'className', 'caption']);
	
	      return _react2.default.createElement('img', _extends({ className: (0, _classnames2.default)('materialboxed', className), 'data-caption': caption, src: src }, props));
	    }
	  }]);
	
	  return MediaBox;
	}(_react.Component);
	
	MediaBox.propTypes = {
	  className: _propTypes2.default.string,
	  /**
	   * The caption shown below the image when opened
	   */
	  caption: _propTypes2.default.string,
	  /**
	   * The path to the image
	   */
	  src: _propTypes2.default.string.isRequired
	};
	
	exports.default = MediaBox;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This should be used within any component that has a menu like interface
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem() {
	    _classCallCheck(this, MenuItem);
	
	    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	  }
	
	  _createClass(MenuItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          href = _props.href,
	          breadcrumbItem = _props.breadcrumbItem,
	          children = _props.children,
	          className = _props.className,
	          props = _objectWithoutProperties(_props, ['href', 'breadcrumbItem', 'children', 'className']);
	
	      var classes = {
	        breadcrumb: breadcrumbItem
	      };
	      return _react2.default.createElement(
	        'a',
	        _extends({ href: href }, props, { className: (0, _classnames2.default)(classes, className) }),
	        children
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.propTypes = {
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  // internal
	  breadcrumbItem: _propTypes2.default.bool,
	  /**
	   * The link for the anchor
	   */
	  href: _propTypes2.default.string
	};
	
	exports.default = MenuItem;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Button = __webpack_require__(23);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OverlayTrigger = __webpack_require__(42);
	
	var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = function (_Component) {
	  _inherits(Modal, _Component);
	
	  function Modal(props) {
	    _classCallCheck(this, Modal);
	
	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	    _this.modalID = props.id || 'modal_' + (0, _idgen2.default)();
	    return _this;
	  }
	
	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          trigger = _props.trigger,
	          modalOptions = _props.modalOptions;
	
	
	      if (!trigger) {
	        $('#' + this.modalID).modal(modalOptions);
	      }
	    }
	  }, {
	    key: 'renderOverlay',
	    value: function renderOverlay() {
	      var _props2 = this.props,
	          actions = _props2.actions,
	          bottomSheet = _props2.bottomSheet,
	          children = _props2.children,
	          fixedFooter = _props2.fixedFooter,
	          header = _props2.header,
	          other = _objectWithoutProperties(_props2, ['actions', 'bottomSheet', 'children', 'fixedFooter', 'header']);
	
	      delete other.modalOptions;
	      delete other.trigger;
	
	      var classes = (0, _classnames2.default)({
	        'modal': true,
	        'modal-fixed-footer': fixedFooter,
	        'bottom-sheet': bottomSheet
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { className: classes, id: this.modalID }),
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-content' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            header
	          ),
	          children
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'modal-footer' },
	          _react2.default.Children.toArray(actions)
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          modalOptions = _props3.modalOptions,
	          trigger = _props3.trigger;
	
	
	      return _react2.default.createElement(
	        _OverlayTrigger2.default,
	        {
	          modalOptions: modalOptions,
	          overlay: this.renderOverlay()
	        },
	        trigger
	      );
	    }
	  }]);
	
	  return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  /**
	  * ModalOptions
	  * Object with options for modal
	  */
	  modalOptions: _propTypes2.default.shape({
	    /*
	     * Modal can be dismissed by clicking outside of the modal
	     */
	    dismissible: _propTypes2.default.bool,
	    /*
	     * Opacity of modal background ( from 0 to 1 )
	     */
	    opacity: _propTypes2.default.number,
	    /*
	     * Transition in duration
	     */
	    inDuration: _propTypes2.default.number,
	    /*
	     * Transition out duration
	     */
	    outDuration: _propTypes2.default.number,
	    /*
	     * Starting top style attribute
	     */
	    startingTop: _propTypes2.default.string,
	    /*
	     * Ending top style attribute
	     */
	    endingTop: _propTypes2.default.string,
	    /*
	     * Callback for Modal open. Modal and trigger parameters available.
	     */
	    ready: _propTypes2.default.func,
	    /*
	     *  Callback for Modal close
	     */
	    complete: _propTypes2.default.func
	  }),
	  /**
	  * BottomSheet styled modal
	  * @default false
	  */
	  bottomSheet: _propTypes2.default.bool,
	  /**
	   * Component children
	   */
	  children: _propTypes2.default.node,
	  /**
	  * FixedFooter styled modal
	  * @default false
	  */
	  fixedFooter: _propTypes2.default.bool,
	  /**
	   * Text to shown in the header of the modal
	   */
	  header: _propTypes2.default.string,
	  /**
	   * The button to trigger the display of the modal
	   */
	  trigger: _propTypes2.default.node,
	  /**
	   * The buttons to show in the footer of the modal
	   * @default <Button>Close</Button>
	   */
	  actions: _propTypes2.default.node,
	  /**
	   * The ID to trigger the modal opening/closing
	   */
	  id: _propTypes2.default.string
	};
	
	Modal.defaultProps = {
	  modalOptions: {},
	  fixedFooter: false,
	  bottomSheet: false,
	  actions: [_react2.default.createElement(
	    _Button2.default,
	    { waves: 'light', modal: 'close', flat: true },
	    'Close'
	  )]
	};
	
	exports.default = Modal;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Overlay2 = __webpack_require__(43);
	
	var _Overlay3 = _interopRequireDefault(_Overlay2);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OverlayTrigger = function (_Overlay) {
	  _inherits(OverlayTrigger, _Overlay);
	
	  function OverlayTrigger(props) {
	    _classCallCheck(this, OverlayTrigger);
	
	    var _this = _possibleConstructorReturn(this, (OverlayTrigger.__proto__ || Object.getPrototypeOf(OverlayTrigger)).call(this, props));
	
	    _this.showOverlay = _this.showOverlay.bind(_this);
	    _this.renderOverlay = _this.renderOverlay.bind(_this);
	    _this.overlayID = _this.props.overlay.props.id || 'overlay_' + (0, _idgen2.default)();
	    return _this;
	  }
	
	  _createClass(OverlayTrigger, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      if (!children) return null;
	
	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, {
	        onClick: this.showOverlay
	      });
	    }
	  }, {
	    key: 'renderOverlay',
	    value: function renderOverlay() {
	      return _react2.default.cloneElement(this.props.overlay, {
	        id: this.overlayID
	      });
	    }
	  }, {
	    key: 'showOverlay',
	    value: function showOverlay(e) {
	      e.preventDefault();
	      var _props$modalOptions = this.props.modalOptions,
	          modalOptions = _props$modalOptions === undefined ? {} : _props$modalOptions;
	
	      $('#' + this.overlayID).modal(modalOptions).modal('open');
	    }
	  }]);
	
	  return OverlayTrigger;
	}(_Overlay3.default);
	
	OverlayTrigger.propTypes = {
	  /**
	  * ModalOptions
	  * Object with options for modal
	  */
	  modalOptions: _propTypes2.default.shape({
	    /*
	     * Modal can be dismissed by clicking outside of the modal
	     */
	    dismissible: _propTypes2.default.bool,
	    /*
	     * Opacity of modal background ( from 0 to 1 )
	     */
	    opacity: _propTypes2.default.number,
	    /*
	     * Transition in duration
	     */
	    inDuration: _propTypes2.default.number,
	    /*
	     * Transition out duration
	     */
	    outDuration: _propTypes2.default.number,
	    /*
	     * Starting top style attribute
	     */
	    startingTop: _propTypes2.default.string,
	    /*
	     * Ending top style attribute
	     */
	    endingTop: _propTypes2.default.string,
	    /*
	     * Callback for Modal open. Modal and trigger parameters available.
	     */
	    ready: _propTypes2.default.func,
	    /*
	     *  Callback for Modal close
	     */
	    complete: _propTypes2.default.func
	  }),
	  overlay: _propTypes2.default.node
	};
	
	exports.default = OverlayTrigger;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
	  }
	
	  _createClass(Overlay, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      try {
	        this._unrenderOverlay();
	      } catch (e) {
	        this._overlayInstance = null;
	      }
	      if (this._overlayTarget) {
	        this.getContainerDOMNode().removeChild(this._overlayTarget);
	        this._overlayTarget = null;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._renderOverlay();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._renderOverlay();
	    }
	  }, {
	    key: '_mountOverlayTarget',
	    value: function _mountOverlayTarget() {
	      this._overlayTarget = document.createElement('div');
	      this.getContainerDOMNode().appendChild(this._overlayTarget);
	    }
	  }, {
	    key: '_renderOverlay',
	    value: function _renderOverlay() {
	      if (!this._overlayTarget) {
	        this._mountOverlayTarget();
	      }
	
	      // Save reference to help testing
	      this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderOverlay(), this._overlayTarget);
	    }
	  }, {
	    key: '_unrenderOverlay',
	    value: function _unrenderOverlay() {
	      _react2.default.unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  }, {
	    key: 'getOverlayDOMNode',
	    value: function getOverlayDOMNode() {
	      if (!this.isMounted()) {
	        throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	      }
	
	      return this._overlayInstance.getDOMNode();
	    }
	  }, {
	    key: 'getContainerDOMNode',
	    value: function getContainerDOMNode() {
	      return this.props.container.getDOMNode ? this.props.container.getDOMNode() : this.props.container;
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = {
	  container: _propTypes2.default.any.isRequired
	};
	
	Overlay.defaultProps = {
	  container: {
	    // Provide `getDOMNode` fn mocking a React component API. The `document.body`
	    // reference needs to be contained within this function so that it is not accessed
	    // in environments where it would not be defined, e.g. nodejs. Equally this is needed
	    // before the body is defined where `document.body === null`, this ensures
	    // `document.body` is only accessed after componentDidMount.
	    getDOMNode: function getDOMNode() {
	      return document.body;
	    }
	  }
	};
	
	exports.default = Overlay;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var NavItem = function NavItem(_ref) {
	  var divider = _ref.divider,
	      children = _ref.children,
	      _ref$href = _ref.href,
	      href = _ref$href === undefined ? '' : _ref$href,
	      props = _objectWithoutProperties(_ref, ['divider', 'children', 'href']);
	
	  if (divider) return _react2.default.createElement('li', { className: 'divider' });
	  return _react2.default.createElement(
	    'li',
	    props,
	    _react2.default.createElement(
	      'a',
	      { href: href },
	      children
	    )
	  );
	};
	
	NavItem.propTypes = {
	  /**
	   * children can be a string value or a node
	   */
	  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	  divider: _propTypes2.default.bool,
	  href: _propTypes2.default.string
	};
	
	exports.default = NavItem;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Col = __webpack_require__(22);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navbar = function (_Component) {
	  _inherits(Navbar, _Component);
	
	  function Navbar(props) {
	    _classCallCheck(this, Navbar);
	
	    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
	
	    _this.renderSideNav = _this.renderSideNav.bind(_this);
	    return _this;
	  }
	
	  _createClass(Navbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof $ !== 'undefined') {
	        $('.button-collapse').sideNav(this.props.options);
	      }
	    }
	  }, {
	    key: 'renderSideNav',
	    value: function renderSideNav() {
	      return _react2.default.createElement(
	        'ul',
	        { id: 'nav-mobile', className: 'side-nav' },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          brand = _props.brand,
	          className = _props.className,
	          fixed = _props.fixed,
	          left = _props.left,
	          right = _props.right,
	          href = _props.href,
	          other = _objectWithoutProperties(_props, ['brand', 'className', 'fixed', 'left', 'right', 'href']);
	
	      delete other.options;
	
	      var classes = {
	        right: right,
	        'hide-on-med-and-down': true
	      };
	
	      var brandClasses = {
	        'brand-logo': true,
	        right: left
	      };
	
	      var content = _react2.default.createElement(
	        'nav',
	        _extends({}, other, { className: className }),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-wrapper' },
	          _react2.default.createElement(
	            _Col2.default,
	            { s: 12 },
	            _react2.default.createElement(
	              'a',
	              { href: href, className: (0, _classnames2.default)(brandClasses) },
	              brand
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: (0, _classnames2.default)(className, classes) },
	              this.props.children
	            ),
	            this.renderSideNav(),
	            _react2.default.createElement(
	              'a',
	              { className: 'button-collapse', href: '#', 'data-activates': 'nav-mobile' },
	              _react2.default.createElement(
	                _Icon2.default,
	                null,
	                'view_headline'
	              )
	            )
	          )
	        )
	      );
	
	      if (fixed) {
	        content = _react2.default.createElement(
	          'div',
	          { className: 'navbar-fixed' },
	          content
	        );
	      }
	
	      return content;
	    }
	  }]);
	
	  return Navbar;
	}(_react.Component);
	
	Navbar.propTypes = {
	  brand: _propTypes2.default.node,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  left: _propTypes2.default.bool,
	  right: _propTypes2.default.bool,
	  href: _propTypes2.default.string,
	  /**
	   * Makes the navbar fixed
	   */
	  fixed: _propTypes2.default.bool,
	  /**
	   * Options hash for the sidenav.
	   * More info: http://materializecss.com/side-nav.html#options
	   */
	  options: _propTypes2.default.shape({
	    menuWidth: _propTypes2.default.number,
	    edge: _propTypes2.default.oneOf(['left', 'right']),
	    closeOnClick: _propTypes2.default.bool,
	    draggable: _propTypes2.default.bool
	  })
	};
	
	Navbar.defaultProps = {
	  href: '/',
	  options: {}
	};
	
	exports.default = Navbar;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _PaginationButton = __webpack_require__(47);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pagination = function (_Component) {
	  _inherits(Pagination, _Component);
	
	  function Pagination(props) {
	    _classCallCheck(this, Pagination);
	
	    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));
	
	    var activePage = props.activePage,
	        items = props.items;
	
	
	    _this.state = {
	      activePage: activePage > 0 && activePage <= items ? activePage : 1
	    };
	
	    _this.renderButtons = _this.renderButtons.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Pagination, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.activePage !== this.props.activePage) {
	        this.setState({ activePage: nextProps.activePage });
	      }
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(i) {
	      var _this2 = this;
	
	      var _props = this.props,
	          items = _props.items,
	          onSelect = _props.onSelect;
	
	
	      return function () {
	        if (i > 0 && i <= items) {
	          if (onSelect) {
	            onSelect(i);
	          }
	          _this2.setState({ activePage: i });
	        }
	      };
	    }
	  }, {
	    key: 'renderButtons',
	    value: function renderButtons() {
	      var _props2 = this.props,
	          items = _props2.items,
	          children = _props2.children,
	          _props2$maxButtons = _props2.maxButtons,
	          maxButtons = _props2$maxButtons === undefined ? items : _props2$maxButtons;
	      var activePage = this.state.activePage;
	
	
	      if (children) return children;
	
	      var buttonsCount = Math.min(maxButtons, items);
	
	      var maxPos = items - buttonsCount;
	      var halfButtons = parseInt(buttonsCount / 2, 10);
	
	      var hiddenPagesBefore = activePage - halfButtons;
	      if (hiddenPagesBefore > maxPos) {
	        hiddenPagesBefore = maxPos + 1;
	      }
	
	      var from = Math.max(hiddenPagesBefore, 1);
	      var to = Math.min(items, from + maxButtons - 1);
	
	      var buttons = [_react2.default.createElement(
	        _PaginationButton2.default,
	        {
	          disabled: activePage === 1,
	          key: 'pagination-0',
	          onSelect: this._onClick(activePage - 1)
	        },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'chevron_left'
	        )
	      )];
	
	      for (var i = from; i <= to; i++) {
	        buttons.push(_react2.default.createElement(
	          _PaginationButton2.default,
	          {
	            active: i === activePage,
	            key: 'pagination-' + i,
	            onSelect: this._onClick(i)
	          },
	          i
	        ));
	      }
	
	      buttons.push(_react2.default.createElement(
	        _PaginationButton2.default,
	        {
	          key: 'pagination-' + (items + 1),
	          disabled: activePage === items,
	          onSelect: this._onClick(activePage + 1)
	        },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'chevron_right'
	        )
	      ));
	
	      return buttons;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        { className: (0, _classnames2.default)('pagination', this.props.className) },
	        this.renderButtons()
	      );
	    }
	  }]);
	
	  return Pagination;
	}(_react.Component);
	
	Pagination.propTypes = {
	  /**
	   * Number of items in the component
	   */
	  items: _propTypes2.default.number.isRequired,
	  /**
	   * The initial activePage
	   */
	  activePage: _propTypes2.default.number,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  maxButtons: _propTypes2.default.number,
	  onSelect: _propTypes2.default.func
	};
	
	Pagination.defaultProps = {
	  activePage: 1,
	  items: 10
	};
	
	exports.default = Pagination;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PaginationButton = function PaginationButton(_ref) {
	  var _ref$active = _ref.active,
	      active = _ref$active === undefined ? false : _ref$active,
	      children = _ref.children,
	      className = _ref.className,
	      _ref$disabled = _ref.disabled,
	      disabled = _ref$disabled === undefined ? false : _ref$disabled,
	      href = _ref.href,
	      onSelect = _ref.onSelect;
	
	  var classes = {
	    'waves-effect': true,
	    disabled: disabled,
	    active: active
	  };
	
	  var linkProps = href ? { href: href } : null;
	
	  return _react2.default.createElement(
	    'li',
	    { className: (0, _classnames2.default)(classes, className), onClick: onSelect },
	    _react2.default.createElement(
	      'a',
	      linkProps,
	      children
	    )
	  );
	};
	
	PaginationButton.propTypes = {
	  active: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  href: _propTypes2.default.string,
	  onSelect: _propTypes2.default.func
	};
	
	exports.default = PaginationButton;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Parallax = function (_Component) {
	  _inherits(Parallax, _Component);
	
	  function Parallax() {
	    _classCallCheck(this, Parallax);
	
	    return _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).apply(this, arguments));
	  }
	
	  _createClass(Parallax, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.parallax').parallax();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          imageSrc = _props.imageSrc;
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('parallax-container', className) },
	        _react2.default.createElement(
	          'div',
	          { className: 'parallax' },
	          _react2.default.createElement('img', { src: imageSrc })
	        )
	      );
	    }
	  }]);
	
	  return Parallax;
	}(_react.Component);
	
	Parallax.propTypes = {
	  className: _propTypes2.default.string,
	  /**
	  * The image path which will be used for the background of the parallax
	  */
	  imageSrc: _propTypes2.default.string
	};
	exports.default = Parallax;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Spinner = __webpack_require__(50);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var colors = ['blue', 'red', 'yellow', 'green'];
	
	var Preloader = function (_Component) {
	  _inherits(Preloader, _Component);
	
	  function Preloader() {
	    _classCallCheck(this, Preloader);
	
	    return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
	  }
	
	  _createClass(Preloader, [{
	    key: 'render',
	    value: function render() {
	      var classes = {
	        'preloader-wrapper': true,
	        active: this.props.active
	      };
	
	      if (this.props.size) {
	        classes[this.props.size] = true;
	      }
	
	      var spinners = void 0;
	      if (this.props.flashing) {
	        spinners = [];
	        colors.map(function (color) {
	          spinners.push(_react2.default.createElement(_Spinner2.default, { color: color, only: false, key: color }));
	        });
	      } else {
	        spinners = _react2.default.createElement(_Spinner2.default, { color: this.props.color });
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(this.props.className, classes) },
	        spinners
	      );
	    }
	  }]);
	
	  return Preloader;
	}(_react.Component);
	
	Preloader.propTypes = {
	  className: _propTypes2.default.string,
	  /**
	   * The scale of the circle
	   * @default 'medium'
	   */
	  size: _propTypes2.default.oneOf(['big', 'small', 'medium']),
	  /**
	   * Whether to spin
	   * @default true
	   */
	  active: _propTypes2.default.bool,
	  /**
	   * The color of the circle, if not flashing
	   * @default 'blue'
	   */
	  color: _propTypes2.default.oneOf(['blue', 'red', 'yellow', 'green']),
	  /**
	   * Wheter to circle four different colors
	   * @default false
	   */
	  flashing: _propTypes2.default.bool
	};
	
	Preloader.defaultProps = {
	  active: true,
	  flashing: false,
	  color: 'blue'
	};
	
	exports.default = Preloader;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function Spinner(_ref) {
	  var color = _ref.color,
	      only = _ref.only;
	
	  var spinnerClasses = {
	    'spinner-layer': true
	  };
	  if (only) {
	    spinnerClasses['spinner-' + color + '-only'] = true;
	  } else {
	    spinnerClasses['spinner-' + color] = true;
	  }
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classnames2.default)(spinnerClasses) },
	    _react2.default.createElement(
	      'div',
	      { className: 'circle-clipper left' },
	      _react2.default.createElement('div', { className: 'circle' })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'gap-patch' },
	      _react2.default.createElement('div', { className: 'circle' })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'circle-clipper right' },
	      _react2.default.createElement('div', { className: 'circle' })
	    )
	  );
	};
	
	Spinner.defaultProps = {
	  only: true
	};
	
	Spinner.propTypes = {
	  color: _propTypes2.default.string,
	  only: _propTypes2.default.bool
	};
	
	exports.default = Spinner;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressBar = function ProgressBar(_ref) {
	  var progress = _ref.progress,
	      className = _ref.className;
	
	  var style = void 0;
	  var classes = {
	    indeterminate: progress === undefined,
	    determinate: !!progress
	  };
	  if (progress) {
	    style = {
	      width: progress + '%'
	    };
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classnames2.default)('progress lighten-5', className) },
	    _react2.default.createElement('div', { className: (0, _classnames2.default)(classes, className), style: style })
	  );
	};
	
	ProgressBar.propTypes = {
	  className: _propTypes2.default.string,
	  /**
	   * A number between 0..100 that indicates the current progress,
	   * when provided, a determinate bar with the progress is displayed,
	   * otherwise a indeterminate bar is shown
	   */
	  progress: _propTypes2.default.number
	};
	
	exports.default = ProgressBar;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchForm = function SearchForm() {
	  return _react2.default.createElement(
	    'form',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'input-field' },
	      _react2.default.createElement('input', { id: 'search', type: 'search', required: true }),
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'search' },
	        _react2.default.createElement(
	          _Icon2.default,
	          null,
	          'search'
	        )
	      ),
	      _react2.default.createElement(
	        _Icon2.default,
	        null,
	        'close'
	      )
	    )
	  );
	};
	
	exports.default = SearchForm;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Section = function Section(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'section' },
	    props.children
	  );
	};
	
	Section.propTypes = {
	  children: _propTypes2.default.node
	};
	
	exports.default = Section;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideNav = function (_Component) {
	  _inherits(SideNav, _Component);
	
	  function SideNav(props) {
	    _classCallCheck(this, SideNav);
	
	    var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));
	
	    _this.id = props.id || 'sidenav_' + (0, _idgen2.default)();
	    return _this;
	  }
	
	  _createClass(SideNav, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props$options = this.props.options,
	          options = _props$options === undefined ? {} : _props$options;
	
	      $(this._trigger).sideNav(options);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['children']);
	
	      delete props.id;
	      delete props.trigger;
	      delete props.options;
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.renderTrigger(),
	        _react2.default.createElement(
	          'ul',
	          _extends({ id: this.id, className: 'side-nav' }, props),
	          children
	        )
	      );
	    }
	  }, {
	    key: 'renderTrigger',
	    value: function renderTrigger() {
	      var _this2 = this;
	
	      var trigger = this.props.trigger;
	
	      return _react2.default.cloneElement(trigger, {
	        ref: function ref(t) {
	          return _this2._trigger = '[data-activates=' + _this2.id + ']';
	        },
	        'data-activates': this.id
	      });
	    }
	  }]);
	
	  return SideNav;
	}(_react.Component);
	
	SideNav.propTypes = {
	  /**
	   * sidenav id. If none is passed, an id will be generated.
	   */
	  id: _propTypes2.default.string,
	  /**
	   * Component that is rendered to trigger the sidenav
	   */
	  trigger: _propTypes2.default.node.isRequired,
	  /**
	   * Options hash for the sidenav.
	   * More info: http://materializecss.com/side-nav.html#options
	   */
	  options: _propTypes2.default.shape({
	    menuWidth: _propTypes2.default.number,
	    edge: _propTypes2.default.oneOf(['left', 'right']),
	    closeOnClick: _propTypes2.default.bool,
	    draggable: _propTypes2.default.bool
	  }),
	  children: _propTypes2.default.node
	};
	
	exports.default = SideNav;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _UserView = __webpack_require__(56);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideNavItem = function (_Component) {
	  _inherits(SideNavItem, _Component);
	
	  function SideNavItem() {
	    _classCallCheck(this, SideNavItem);
	
	    return _possibleConstructorReturn(this, (SideNavItem.__proto__ || Object.getPrototypeOf(SideNavItem)).apply(this, arguments));
	  }
	
	  _createClass(SideNavItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          divider = _props.divider,
	          subheader = _props.subheader,
	          userView = _props.userView,
	          icon = _props.icon,
	          _props$href = _props.href,
	          href = _props$href === undefined ? '#!' : _props$href,
	          waves = _props.waves,
	          _props$user = _props.user,
	          user = _props$user === undefined ? {} : _props$user,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['divider', 'subheader', 'userView', 'icon', 'href', 'waves', 'user', 'children']);
	
	      var itemClasses = {
	        'divider': divider
	      };
	      var linkClasses = {
	        'subheader': subheader,
	        'waves-effect': waves
	      };
	
	      return _react2.default.createElement(
	        'li',
	        _extends({ className: (0, _classnames2.default)(itemClasses) }, props),
	        userView && user && _react2.default.createElement(_UserView.UserView, user),
	        !userView && _react2.default.createElement(
	          'a',
	          { className: (0, _classnames2.default)(linkClasses), href: href },
	          icon && _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            icon
	          ),
	          children
	        )
	      );
	    }
	  }]);
	
	  return SideNavItem;
	}(_react.Component);
	
	SideNavItem.propTypes = {
	  children: _propTypes2.default.node,
	  divider: _propTypes2.default.bool,
	  subheader: _propTypes2.default.bool,
	  userView: _propTypes2.default.bool,
	  waves: _propTypes2.default.bool,
	  href: _propTypes2.default.string,
	  icon: _propTypes2.default.string,
	  user: _propTypes2.default.shape(_UserView.UserShape)
	};
	
	exports.default = SideNavItem;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserView = exports.UserShape = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserShape = exports.UserShape = {
	  background: _propTypes2.default.string,
	  image: _propTypes2.default.string,
	  name: _propTypes2.default.string,
	  email: _propTypes2.default.string
	};
	
	var UserView = exports.UserView = function (_Component) {
	  _inherits(UserView, _Component);
	
	  function UserView() {
	    _classCallCheck(this, UserView);
	
	    return _possibleConstructorReturn(this, (UserView.__proto__ || Object.getPrototypeOf(UserView)).apply(this, arguments));
	  }
	
	  _createClass(UserView, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          background = _props.background,
	          image = _props.image,
	          name = _props.name,
	          email = _props.email;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'userView' },
	        background && _react2.default.createElement(
	          'div',
	          { className: 'background' },
	          _react2.default.createElement('img', { src: background })
	        ),
	        image && _react2.default.createElement(
	          'a',
	          { href: '#!user' },
	          _react2.default.createElement('img', { className: 'circle', src: image })
	        ),
	        name && _react2.default.createElement(
	          'a',
	          { href: '#!name' },
	          _react2.default.createElement(
	            'span',
	            { className: 'white-text name' },
	            name
	          )
	        ),
	        email && _react2.default.createElement(
	          'a',
	          { href: '#!email' },
	          _react2.default.createElement(
	            'span',
	            { className: 'white-text email' },
	            email
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserView;
	}(_react.Component);
	
	;
	
	UserView.propTypes = UserShape;
	
	exports.default = UserView;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _constants = __webpack_require__(17);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slide = function (_Component) {
	  _inherits(Slide, _Component);
	
	  function Slide(props) {
	    _classCallCheck(this, Slide);
	
	    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));
	
	    _this.renderCaption = _this.renderCaption.bind(_this);
	    return _this;
	  }
	
	  _createClass(Slide, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement('img', { src: this.props.src }),
	        this.renderCaption()
	      );
	    }
	  }, {
	    key: 'renderCaption',
	    value: function renderCaption() {
	      var _props = this.props,
	          title = _props.title,
	          className = _props.className,
	          placement = _props.placement,
	          children = _props.children,
	          props = _objectWithoutProperties(_props, ['title', 'className', 'placement', 'children']);
	
	      delete props.placement;
	
	      var classes = _defineProperty({
	        caption: true
	      }, placement + '-align', placement);
	
	      if (typeof title !== 'undefined' || typeof children !== 'undefined') {
	        return _react2.default.createElement(
	          'div',
	          _extends({ className: (0, _classnames2.default)(classes) }, props),
	          _react2.default.createElement(
	            'h3',
	            null,
	            title
	          ),
	          _react2.default.createElement(
	            'h5',
	            { className: className },
	            children
	          )
	        );
	      } else return null;
	    }
	  }]);
	
	  return Slide;
	}(_react.Component);
	
	Slide.propTypes = {
	  /**
	  * Aliment of the caption
	  * @default 'center'
	  */
	  placement: _propTypes2.default.oneOf(_constants2.default.PLACEMENTS),
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  /**
	  * The tagline of the caption
	  */
	  title: _propTypes2.default.string,
	  /**
	   * The path of the background image
	   */
	  src: _propTypes2.default.string.isRequired
	};
	
	Slide.defaultProps = {
	  placement: 'center'
	};
	
	exports.default = Slide;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	
	  function Slider() {
	    _classCallCheck(this, Slider);
	
	    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
	  }
	
	  _createClass(Slider, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          fullscreen = _props.fullscreen,
	          indicators = _props.indicators,
	          interval = _props.interval,
	          transition = _props.transition;
	
	
	      $('.slider').slider({
	        full_width: fullscreen,
	        indicators: indicators,
	        interval: interval,
	        transition: transition
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          fullscreen = _props2.fullscreen,
	          children = _props2.children,
	          className = _props2.className;
	
	      var classes = {
	        fullscreen: fullscreen,
	        slider: true
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(classes, className) },
	        _react2.default.createElement(
	          'ul',
	          { className: 'slides' },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Slider;
	}(_react.Component);
	
	Slider.propTypes = {
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  fullscreen: _propTypes2.default.bool,
	  /**
	  * Set to false to hide slide indicators
	  * @default true
	  */
	  indicators: _propTypes2.default.bool,
	  /**
	  * The interval between transitions in ms
	  * @default 6000
	  */
	  interval: _propTypes2.default.number,
	  /**
	  * The duration of the transation animation in ms
	  * @default 500
	  */
	  transition: _propTypes2.default.number
	};
	
	Slider.defaultProps = {
	  fullscreen: false,
	  indicators: true,
	  interval: 6000
	};
	
	exports.default = Slider;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// This is just a holder for the props and children for tab, thus
	// there is no logic here.
	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);
	
	  function Tab() {
	    _classCallCheck(this, Tab);
	
	    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
	  }
	
	  _createClass(Tab, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Tab;
	}(_react2.default.Component);
	
	Tab.propTypes = {
	  /**
	  * The title shown in the tabs list
	  */
	  title: _propTypes2.default.node.isRequired,
	  /**
	  * The width of the Tab
	  */
	  tabWidth: _propTypes2.default.number,
	  /**
	  * Pre-select the tab
	  * @default false
	  */
	  active: _propTypes2.default.bool,
	  /**
	  * Disable the tab
	  * @default false
	  */
	  disabled: _propTypes2.default.bool
	};
	
	Tab.defaultProps = {
	  active: false,
	  disabled: false
	};
	
	exports.default = Tab;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Table = function (_Component) {
	  _inherits(Table, _Component);
	
	  function Table() {
	    _classCallCheck(this, Table);
	
	    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	  }
	
	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          bordered = _props.bordered,
	          centered = _props.centered,
	          children = _props.children,
	          className = _props.className,
	          hoverable = _props.hoverable,
	          responsive = _props.responsive,
	          striped = _props.striped,
	          props = _objectWithoutProperties(_props, ['bordered', 'centered', 'children', 'className', 'hoverable', 'responsive', 'striped']);
	
	      var classes = {
	        centered: centered,
	        highlight: hoverable,
	        'responsive-table': responsive,
	        striped: striped,
	        bordered: bordered
	      };
	
	      return _react2.default.createElement(
	        'table',
	        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
	        children
	      );
	    }
	  }]);
	
	  return Table;
	}(_react.Component);
	
	Table.propTypes = {
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  /**
	  * Center align all the text in the table
	  * @default false
	  */
	  centered: _propTypes2.default.bool,
	  /**
	  * Highlight the row that's hovered
	  * @default false
	  */
	  hoverable: _propTypes2.default.bool,
	  /**
	  * Enable response to make the table horizontally scrollable on smaller screens
	  * @default false
	  */
	  responsive: _propTypes2.default.bool,
	  /**
	  * striped style
	  * @default false
	  */
	  striped: _propTypes2.default.bool,
	  /**
	  * Add border to each row
	  * @default false
	  */
	  bordered: _propTypes2.default.bool
	};
	
	exports.default = Table;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _idgen = __webpack_require__(19);
	
	var _idgen2 = _interopRequireDefault(_idgen);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Row = __webpack_require__(37);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(22);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_Component) {
	  _inherits(Tabs, _Component);
	
	  function Tabs() {
	    _classCallCheck(this, Tabs);
	
	    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
	  }
	
	  _createClass(Tabs, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props$tabOptions = this.props.tabOptions,
	          tabOptions = _props$tabOptions === undefined ? {} : _props$tabOptions;
	
	
	      if (typeof $ !== 'undefined') {
	        $(this._tabsEl).tabs(tabOptions);
	      }
	    }
	  }, {
	    key: '_onSelect',
	    value: function _onSelect(idx, e) {
	      var onChange = this.props.onChange;
	
	
	      if (onChange) onChange(idx, e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          defaultValue = _props.defaultValue;
	
	
	      var scope = '' + (0, _idgen2.default)();
	
	      return _react2.default.createElement(
	        _Row2.default,
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          { s: 12 },
	          _react2.default.createElement(
	            'ul',
	            { className: (0, _classnames2.default)('tabs', className), ref: function ref(el) {
	                return _this2._tabsEl = el;
	              } },
	            _react2.default.Children.map(children, function (child, id) {
	              var _classes;
	
	              var idx = '' + scope + id;
	              var _child$props = child.props,
	                  active = _child$props.active,
	                  className = _child$props.className,
	                  disabled = _child$props.disabled,
	                  tabWidth = _child$props.tabWidth,
	                  title = _child$props.title;
	
	
	              var classes = (_classes = {}, _defineProperty(_classes, 's' + tabWidth, tabWidth), _defineProperty(_classes, 'tab', true), _defineProperty(_classes, 'disabled', disabled), _defineProperty(_classes, 'col', true), _classes);
	
	              return _react2.default.createElement(
	                'li',
	                { className: (0, _classnames2.default)(classes, className), key: idx },
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#tab_' + idx, className: active || defaultValue === idx ? 'active' : ''
	                  }, disabled ? {} : { onClick: _this2._onSelect.bind(_this2, idx) }),
	                  title
	                )
	              );
	            })
	          )
	        ),
	        _react2.default.Children.map(children, function (child, id) {
	          var idx = '' + scope + id;
	          return _react2.default.createElement(
	            _Col2.default,
	            { id: 'tab_' + idx, s: 12, key: 'tab' + idx,
	              style: { 'display': child.props.active || defaultValue === idx ? 'block' : 'none' } },
	            child.props.children
	          );
	        })
	      );
	    }
	  }]);
	
	  return Tabs;
	}(_react.Component);
	
	Tabs.propTypes = {
	  children: _propTypes2.default.node.isRequired,
	  className: _propTypes2.default.string,
	  defaultValue: _propTypes2.default.string,
	  onChange: _propTypes2.default.func,
	  /*
	   * More info
	   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
	   */
	  tabOptions: _propTypes2.default.shape({
	    onShow: _propTypes2.default.func,
	    swipeable: _propTypes2.default.bool,
	    responsiveThreshold: _propTypes2.default.number
	  })
	};
	
	exports.default = Tabs;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Chip = __webpack_require__(28);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tag = function Tag(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    _Chip2.default,
	    { close: true },
	    children
	  );
	};
	
	Tag.propTypes = {
	  children: _propTypes2.default.node
	};
	
	exports.default = Tag;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Button = __webpack_require__(23);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Toast = function (_Component) {
	  _inherits(Toast, _Component);
	
	  function Toast(props) {
	    _classCallCheck(this, Toast);
	
	    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Toast, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          rounded = _props.rounded;
	
	      var classes = { toast: true, rounded: rounded };
	
	      return _react2.default.createElement(
	        _Button2.default,
	        { onClick: this.onClick, className: (0, _classnames2.default)(classes) },
	        children
	      );
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      Materialize.toast(this.props.toast, 1000);
	    }
	  }]);
	
	  return Toast;
	}(_react.Component);
	
	Toast.propTypes = {
	  toast: _propTypes2.default.string.isRequired,
	  children: _propTypes2.default.node,
	  rounded: _propTypes2.default.bool
	};
	
	exports.default = Toast;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(2);
	class SendBtn extends React.Component {
	    render() {
	        return (React.createElement("button", null, "Send"));
	    }
	}
	exports.SendBtn = SendBtn;


/***/ })
/******/ ]);
//# sourceMappingURL=41914fd8e80b91be917e.js.map