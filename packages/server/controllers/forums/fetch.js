import Forums from "../../models/forums.js";

const FetchForums = async (req, res) => {
    try {
        const forums = await Forums.find({});
        res.json({ forums });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchForums;
