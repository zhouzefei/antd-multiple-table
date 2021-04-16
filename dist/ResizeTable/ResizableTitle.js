"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactResizable = require("react-resizable");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(props) {
  var onResize = props.onResize,
      width = props.width,
      restProps = _objectWithoutProperties(props, ["onResize", "width"]);

  if (!width) {
    return /*#__PURE__*/React.createElement("th", restProps);
  }

  return /*#__PURE__*/React.createElement(_reactResizable.Resizable, {
    width: width,
    height: 0,
    handle: /*#__PURE__*/React.createElement("span", {
      className: "react-resizable-handle",
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    }),
    onResize: onResize,
    draggableOpts: {
      enableUserSelectHack: false
    }
  }, /*#__PURE__*/React.createElement("th", restProps));
};

exports.default = _default;