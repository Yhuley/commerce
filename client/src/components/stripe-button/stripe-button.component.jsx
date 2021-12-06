import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51K0Xk8HIBWpKgZaAZo16XCmWm6z75MgPnOx8Zu2Im8fTMZVwlweosc1ElnqX7tPA6Zapym5dRFEDAuZyIVnl99Em00mkPutmQp"

    const onToken = async token => {
        try {
            await axios({
                url: "payment",
                method: "post",
                data: {
                    amount: priceForStripe,
                    token
                }
            })
            alert("Payment passed successfully")
        } catch (error) {
            console.log("Payment error: ", error)
            alert("Oops, there was an issue with your payment")
        }
    }

    return (
        <StripeCheckout
            label="Pay Online"
            bitcoin
            alipay
            billingAddress
            shippingAddress
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
