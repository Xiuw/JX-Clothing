import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripePaymentButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_6x7EmFDOvpou4MMCflr0DW7700a8HBUcjo";

  const onToken = token => {
    console.log(token);
    alert("Payment approved");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="JX Clothing INC."
      billingAddress
      shippingAddress
      // image="http://svgshare.com/i/CUz.svg"
      description={`$Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};
export default stripePaymentButton;
