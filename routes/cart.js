const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")

const router = require("express").Router()

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        console.log("trying", req.body)
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            // { userId: req.body.userId },
            {
                $set: req.body,
            },
            { new: true }
        )
        if (updatedCart === null) {
            // try {
            const newCart = new Cart(req.body)
            const savedCart = await newCart.save()
            res.status(200).json(savedCart)
            console.log(savedCart)
            // } catch (error) {
            //     res.status(500).json(error)
            // }

        } else {
            console.log(updatedCart)
            res.status(200).json(updatedCart)
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted.")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id })
        console.log(cart)
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router