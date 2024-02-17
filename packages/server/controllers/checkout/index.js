import Orders from "../../models/orders.js"
import Cart from "../../models/cart.js"


const PlaceOrder = async(req, res) => {
    try {
        const id = req.body.id
        const userId = req.body.userId
        const quantity = req.body.quantity
        const order = new Orders({
            id:id,
            userId:userId,
            quantity:quantity
        });
        order.save()
        const cart = await Cart.deleteOne({id:id})
        res.send({ success: true, message: "New order placed successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default PlaceOrder;