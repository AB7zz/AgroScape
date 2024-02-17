import Cart from "../../models/cart.js"


const Insertcart = async(req, res) => {
    try {
        const itemId = req.body.id
        const userId = req.body.userId
        const quantity = req.body.quantity

        console.log(req.body)
    

        const cart = new Cart({
            itemId:itemId,
            userId:userId,
            quantity:quantity
        });

        cart.save()
        
        res.send({ success: true, message: "Item added to cart successfully!", cart });
    } catch (error) {
        console.log(error)
    }
}

export default Insertcart