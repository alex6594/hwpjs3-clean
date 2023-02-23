"use strict";

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('healthStatus = healthy', function () {
  var data = {
    name: 'Маг',
    health: 90
  };
  expect((0, _app.default)(data)).toBe('healthy');
});
test('healthStatus = wounded', function () {
  var data = {
    name: 'Маг',
    health: 40
  };
  expect((0, _app.default)(data)).toBe('wounded');
});
test('healthStatus = critical', function () {
  var data = {
    name: 'Маг',
    health: 1
  };
  expect((0, _app.default)(data)).toBe('critical');
});
test('healthStatus = dead', function () {
  var data = {
    name: 'Маг',
    health: 0
  };
  expect((0, _app.default)(data)).toBe('dead');
});
test('healthStatus = dead', function () {
  var data = {
    name: 'Маг',
    health: -30
  };
  expect((0, _app.default)(data)).toBe('dead');
});
test('health: string', function () {
  var data = {
    name: 'Маг',
    health: 'healthy'
  };
  expect((0, _app.default)(data)).toBe(null);
});
test('health = undefined', function () {
  var data = {
    name: 'Маг'
  };
  expect((0, _app.default)(data)).toBe(null);
});
test('name = undefined', function () {
  var data = {
    health: 90
  };
  expect((0, _app.default)(data)).toBe(null);
});