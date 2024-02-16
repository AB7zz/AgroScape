import User from '../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../../config/jwt.config.js'



const login = async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({
            email: email
        });

        const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        )

        if (!passwordIsValid) {
            return res.status(401).send({ success: false, message: "Invalid Password!" });
        }

        const token = jwt.sign({ id: user._id },
            jwtSecret,
            {
              algorithm: 'HS256',
              allowInsecureKeySizes: true,
              expiresIn: 86400, // 24 hours
            });

        res.status(200).send({ success: true, token })
    } catch (error) {
        console.log(error)
    }
}

export default login