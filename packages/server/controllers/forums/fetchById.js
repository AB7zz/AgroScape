import Forums from "../../models/forums.js";

const FetchForumById = async (req, res) => {
    try {
        const forum = await Forums.findById(req.params.id);
        res.json({ forum });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default FetchForumById;