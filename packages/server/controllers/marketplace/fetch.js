import MarketPlace from "../../models/marketplace.js";

const FetchMarketplace = async (req, res) => {
    try {
        const marketplace = await MarketPlace.find({});
        res.json({ marketplace });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchMarketplace;
