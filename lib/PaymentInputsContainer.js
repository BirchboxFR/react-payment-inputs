'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./utils/cardTypes-47d63a4c.js');
require('./utils/validator-786fed31.js');
require('./chunk-3121e873.js');
require('./utils/formatter-d75f3fe3.js');
require('./utils/index.js');
require('react');
var usePaymentInputs = require('./usePaymentInputs.js');

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentInputs.default(props);
  return props.children(paymentInputs);
}

exports.default = PaymentInputsContainer;
