import Orders from "../../models/orders.js"


const InsertOrders = async(req, res) => {
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
        
        res.send({ success: true, message: "New order placed successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default InsertOrders