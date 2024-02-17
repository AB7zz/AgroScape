import Forums from "../../models/forums.js"

const Insertcomment = async(req, res) => {
    try {
        console.log(req.body.id)
        const forum = await Forums.findOne({
            _id: req.body.id
        })
        const comment = {
            comment: req.body.comment,
            userId: req.body.userId,
            from: req.body.from
        }
        forum.comments.push(comment)
        forum.save()
        res.send({ success: true, message: "Comment was added successfully!", forum });
    } catch (error) {
        console.log(error)
    }
}

export default Insertcomment