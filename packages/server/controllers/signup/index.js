import User from "../../models/user.js"
import bcrypt from 'bcryptjs'

const signup = async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const dob = req.body.dob
        const address = req.body.address
        const points = req.body.points
        const streak = req.body.streak
        const phone = req.body.phone

        const user = new User({
            email: email,
            password: bcrypt.hashSync(password, 8),
            name: name,
            dob: dob,
            address: address,
            points: points,
            streak: streak,
            phone: phone

        });

        user.save()
        
        res.send({ success: true, message: "User was registered successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default signup