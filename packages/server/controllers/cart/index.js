import Cart from "../../models/cart.js"


const Insertcart = async(req, res) => {
    try {
        const id = req.body.id
        const userId = req.body.userId
        const quantity = req.body.quantity

        console.log(req.body)
    

        const cart = new Cart({
            id:id,
            userId:userId,
            quantity:quantity
        });

        cart.save()
        
        res.send({ success: true, message: "Item added to cart successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default Insertcart