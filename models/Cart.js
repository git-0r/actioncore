const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        products: { type: Array, default: [] },
        quantity: { type: Number, default: 0 },
        total: { type: Number, default: 0 }
        // [
        // {
        //     productId: { type: String },
        //     quantity: { type: Number, default: 1 },
        // },

        // ]
    },
    { timestamps: true }
)

module.exports = mongoose.model("Cart", CartSchema)