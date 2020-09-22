import React from "react";
import "./styles/PaymentMethods.css";
import bitPay from "../images/payments/bitpay.png";
import neteller from "../images/payments/neteller.png";
import skrill from "../images/payments/skrill.png";
import sticpay from "../images/payments/sticpay.png";
import swift from "../images/payments/swift.png";
import verified_visa from "../images/payments/verified_visa.png";
import visa from "../images/payments/visa.png";
import vload from "../images/payments/vload.png";
function PaymentMethods() {
  return (
    <div className="paymentMethods">
      <img src={visa} alt="" />
      <img src={verified_visa} alt="" />
      <img src={swift} alt="" />
      <img src={sticpay} alt="" />
      <img src={bitPay} alt="" />
      <img src={neteller} alt="" />
      <img src={skrill} alt="" />
      <img src={vload} alt="" />
    </div>
  );
}

export default PaymentMethods;
