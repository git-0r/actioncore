const express = require("express")
const app = express()
const mongoose = require("mongoose")
const env = require("dotenv")
env.config()
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected!")
    })
    .catch((error) => {
        console.log(error)
    })

app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
    console.log("connected to backend!")
})