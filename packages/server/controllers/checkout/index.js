import Orders from "../../models/orders.js"
import Cart from "../../models/cart.js"


const PlaceOrder = async(req, res) => {
    try {
        const cart = req.body.cart
        cart.map(async(c) => {
            const order = new Orders({
                itemId:c.itemId,
                userId:c.userId,
                quantity:c.quantity
            });
            order.save()
            await Cart.findByIdAndDelete(c._id)
        })
        res.send({ success: true, message: "New order placed successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default PlaceOrder;