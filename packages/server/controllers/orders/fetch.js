import Orders from "../../models/orders.js";

const FetchOrders = async (req, res) => {
    try {
        const order = await Orders.find({
            userId: req.params.id
        });
        res.json({ order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchOrders;
