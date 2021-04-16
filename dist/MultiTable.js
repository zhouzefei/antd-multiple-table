"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _ResizableTitle = _interopRequireDefault(require("./ResizeTable/ResizableTitle"));

var _DragableBodyRow = _interopRequireDefault(require("./DragTable/DragableBodyRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(props) {
  var table = props.table,
      moveRow = props.moveRow,
      handleResize = props.handleResize,
      columns = props.columns,
      rest = _objectWithoutProperties(props, ["table", "moveRow", "handleResize", "columns"]);

  return /*#__PURE__*/_react.default.createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.HTML5Backend
  }, /*#__PURE__*/_react.default.cloneElement(table, _objectSpread(_objectSpread({}, rest), {}, {
    components: {
      header: {
        cell: _ResizableTitle.default
      },
      body: {
        row: _DragableBodyRow.default
      }
    },
    columns: columns && columns.length > 0 ? columns.map(function (col, index) {
      return _objectSpread(_objectSpread({}, col), {}, {
        onHeaderCell: function onHeaderCell(column) {
          return {
            width: column.width,
            onResize: handleResize(index)
          };
        }
      });
    }) : [],
    onRow: function onRow(record, index) {
      return {
        index: index,
        moveRow: moveRow
      };
    }
  })));
};

exports.default = _default;