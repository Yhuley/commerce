import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51K0Xk8HIBWpKgZaAZo16XCmWm6z75MgPnOx8Zu2Im8fTMZVwlweosc1ElnqX7tPA6Zapym5dRFEDAuZyIVnl99Em00mkPutmQp"

    const onToken = token => {
        console.log(token)
        alert('Payment passed successfully')
    }

    return (
        <StripeCheckout
            label="Pay Online"
            bitcoin
            alipay
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            amount={priceForStripe}
            panelLabel="Pay Now"
            name="Yhuley Shop"
            description={`Pay $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
