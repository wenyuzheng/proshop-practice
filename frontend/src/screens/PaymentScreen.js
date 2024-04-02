import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { savePaymentMethod } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress.address) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="paypal"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
