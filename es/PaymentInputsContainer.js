import './utils/cardTypes-1fda329b.js';
import './utils/validator-105895f0.js';
import './chunk-9ca66bcf.js';
import './utils/formatter-7695b1e0.js';
import './utils/index.js';
import 'react';
import usePaymentCard from './usePaymentInputs.js';

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentCard(props);
  return props.children(paymentInputs);
}

export default PaymentInputsContainer;
