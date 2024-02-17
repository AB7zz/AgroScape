import User from '../../models/user.js'

const Nextday = async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.id })
        user.day = req.body.day
        user.save()
        res.send({profile: user})
    } catch (error) {
        console.log(error)
    }
}

export default Nextday