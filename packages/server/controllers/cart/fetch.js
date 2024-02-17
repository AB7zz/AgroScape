import Cart from "../../models/cart.js";

const FetchCart = async (req, res) => {
    try {
        const cart = await Cart.find({
            userId: req.params.id
        });
        res.send({ cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchCart;
