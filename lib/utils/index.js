'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cardTypes = require('./cardTypes-47d63a4c.js');
var validator = require('./validator-786fed31.js');
require('../chunk-3121e873.js');
var formatter = require('./formatter-d75f3fe3.js');

var BACKSPACE_KEY_CODE = 'Backspace';
var ENTER_KEY_CODE = 'Enter';
var isHighlighted = function isHighlighted() {
  return (window.getSelection() || {
    type: undefined
  }).type === 'Range';
};
var utils = {
  cardTypes: cardTypes.cardTypes,
  formatter: formatter.formatter,
  validator: validator.validator,
  BACKSPACE_KEY_CODE: BACKSPACE_KEY_CODE,
  ENTER_KEY_CODE: ENTER_KEY_CODE,
  isHighlighted: isHighlighted
};

exports.BACKSPACE_KEY_CODE = BACKSPACE_KEY_CODE;
exports.ENTER_KEY_CODE = ENTER_KEY_CODE;
exports.default = utils;
exports.isHighlighted = isHighlighted;
