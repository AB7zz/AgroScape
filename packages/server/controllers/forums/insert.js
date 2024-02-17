import Forums from "../../models/forums.js"

const InsertForums = async(req, res) => {
    try {
        const title = req.body.title
        const desc = req.body.desc
        const userId = req.body.userId
        const forums = new Forums({
            title:title,
            desc:desc,
            userId:userId,
            comments:[]
        });
        
        forums.save()
        
        res.send({ success: true, message: "New product added successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default InsertForums