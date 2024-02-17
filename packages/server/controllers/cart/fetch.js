import Cart from "../../models/cart.js";

const FetchCart = async (req, res) => {
    try {
        const cart = await Cart.find({
            userId: req.body.id
        });
        res.json({ cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchCart;
