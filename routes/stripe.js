const Order = require("../models/Order")

const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", async (req, res) => {
    const products = req.body.products
    const session = await stripe.checkout.sessions.create(
        {
            line_items: products.map(product => {
                return {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: product.title
                        },
                        unit_amount: product.price * 100
                    },
                    quantity: product.quantity
                }
            }),
            mode: "payment",
            // success_url: "http://localhost:3000/PaymentSuccess",
            // cancel_url: "http://localhost:3000/PaymentFail"
            success_url: "https://actioncore.herokuapp.com/PaymentSuccess",
            cancel_url: "https://actioncore.herokuapp.com/PaymentFail"
        }
    )
    const newOrder = new Order({
        userId: req.body.userId,
        products,
        amount: req.body.total
    })

    const savedOrder = await newOrder.save()
    res.status(200).json(session.url)
})

module.exports = router