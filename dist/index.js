"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.less");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ResizeTable = /*#__PURE__*/_react.default.lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./ResizeTable"));
  });
});

var _default = function _default(props) {
  var children = props.children,
      _props$colMinWidth = props.colMinWidth,
      colMinWidth = _props$colMinWidth === void 0 ? 70 : _props$colMinWidth,
      cacheNameSpace = props.cacheNameSpace;

  var _ref = children.props || {},
      scroll = _ref.scroll,
      columnsProps = _ref.columns,
      tableProps = _objectWithoutProperties(_ref, ["scroll", "columns"]);

  var _ref2 = scroll || {},
      x = _ref2.x;

  var _useState = (0, _react.useState)(x),
      _useState2 = _slicedToArray(_useState, 2),
      scrollX = _useState2[0],
      setScrollX = _useState2[1]; // 长度调整


  var _useState3 = (0, _react.useState)(columnsProps),
      _useState4 = _slicedToArray(_useState3, 2),
      columns = _useState4[0],
      setColumns = _useState4[1]; // 列


  var tableEl = (0, _react.useRef)(null); // 监听列变化初始化

  (0, _react.useEffect)(function () {
    if (columnsProps && columnsProps.length) {
      initTable();
    }
  }, [columnsProps]); // 表格初始化

  var initTable = function initTable() {
    var nextColumns = _toConsumableArray(columnsProps);

    var scrollXTemp = 0;

    if (cacheNameSpace) {
      var storageWidthValue = localStorage.getItem(cacheNameSpace);

      if (storageWidthValue) {
        storageWidthValue = JSON.parse(storageWidthValue);
        nextColumns = nextColumns.map(function (v, colI) {
          if (storageWidthValue && storageWidthValue[colI]) {
            v.width = storageWidthValue[colI];
          }

          return v;
        });
        scrollXTemp = storageWidthValue.scrollX;
      }
    }

    var tableDefaultWidth = tableEl && tableEl.current && tableEl.current.clientWidth;
    tableDefaultWidth = scrollXTemp || Math.max(x, tableDefaultWidth); // 如果有缓存的scroll使用缓存的

    console.log("tableDefaultWidth", tableDefaultWidth); // 针对没有设置段度的列进行宽度平均分配

    var widCount = 0,
        columnIArr = [];
    nextColumns.forEach(function (column, i) {
      if (!column.width) {
        columnIArr.push(i);
      } else {
        if (typeof column.width === "string") {
          column.width = column.width.replace("px", '');
        }

        widCount += Number(column.width);
      }
    });
    var restWid = tableDefaultWidth - widCount;
    var average = restWid / columnIArr.length; // 平均宽度

    columnIArr.length && columnIArr.forEach(function (v, i) {
      nextColumns[v] = _objectSpread(_objectSpread({}, nextColumns[v]), {}, {
        width: average
      });
    });
    setScrollX(tableDefaultWidth);
    setColumns(nextColumns);
  }; // 监听初始化


  (0, _react.useEffect)(function () {
    if (columns && columns.length > 0) {
      initLeftFixedTable();
      initRightFixedTable();
    }
  }, [columns]); // 左浮动表格初始化

  var initLeftFixedTable = function initLeftFixedTable() {
    if (tableEl.current) {
      if (tableEl.current.querySelector(".ant-table-fixed-left table")) {
        var width = tableEl.current.querySelector(".ant-table-scroll .ant-table-fixed tr").firstElementChild.getBoundingClientRect().width;
        tableEl.current.querySelector(".ant-table-fixed-left table").style.width = width + "px";
      }
    }
  }; // 右浮动表格初始化


  var initRightFixedTable = function initRightFixedTable() {
    if (tableEl.current) {
      if (tableEl.current.querySelector(".ant-table-fixed-right table")) {
        var width = tableEl.current.querySelector(".ant-table-scroll .ant-table-fixed tr").lastElementChild.getBoundingClientRect().width;
        tableEl.current.querySelector(".ant-table-fixed-right table").style.width = width + "px";
      }
    }
  };

  var handleResize = function handleResize(index) {
    return function (e, _ref3) {
      var size = _ref3.size;

      var nextColumns = _toConsumableArray(columns);

      var width = Math.max(size.width, colMinWidth);
      var scrollXTemp = Number(scrollX) + (width - nextColumns[index].width); // ------start缓存处理

      if (cacheNameSpace) {
        var _objectSpread2;

        var storageWidthValue = localStorage.getItem(cacheNameSpace);

        if (storageWidthValue) {
          storageWidthValue = JSON.parse(storageWidthValue);
        } else {
          storageWidthValue = {};
        }

        storageWidthValue = _objectSpread(_objectSpread({}, storageWidthValue), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, index, width), _defineProperty(_objectSpread2, "scrollX", scrollXTemp), _objectSpread2));
        localStorage.setItem(cacheNameSpace, JSON.stringify(storageWidthValue));
      } // ------end缓存处理


      setScrollX(scrollXTemp);
      nextColumns[index] = _objectSpread(_objectSpread({}, nextColumns[index]), {}, {
        width: width
      });
      setColumns(nextColumns);
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: tableEl,
    className: "tntd-multi-table"
  }, _react.default.Children.map(children, function (table) {
    return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
      fallback: null
    }, /*#__PURE__*/_react.default.createElement(ResizeTable, _extends({
      table: table,
      handleResize: handleResize,
      columns: columns,
      scroll: {
        x: scrollX
      }
    }, tableProps)));
  }));
};

exports.default = _default;