"use strict";

var _app = _interopRequireDefault(require("./js/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userObject = {
  name: 'Маг',
  health: 90
};
console.log((0, _app.default)(userObject));