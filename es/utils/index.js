import { b as cardTypes } from './cardTypes-1fda329b.js';
import { a as validator } from './validator-105895f0.js';
import '../chunk-9ca66bcf.js';
import { a as formatter } from './formatter-7695b1e0.js';

var BACKSPACE_KEY_CODE = 'Backspace';
var ENTER_KEY_CODE = 'Enter';
var isHighlighted = function isHighlighted() {
  return (window.getSelection() || {
    type: undefined
  }).type === 'Range';
};
var utils = {
  cardTypes: cardTypes,
  formatter: formatter,
  validator: validator,
  BACKSPACE_KEY_CODE: BACKSPACE_KEY_CODE,
  ENTER_KEY_CODE: ENTER_KEY_CODE,
  isHighlighted: isHighlighted
};

export default utils;
export { BACKSPACE_KEY_CODE, ENTER_KEY_CODE, isHighlighted };
