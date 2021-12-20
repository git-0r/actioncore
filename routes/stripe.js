const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", async (req, res) => {
    const session = await stripe.checkout.sessions.create(
        {
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 1000,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3002/success",
            cancel_url: "https://localhost:3000"
        }
    )
    res.status(200).json(session.url)
})

module.exports = router