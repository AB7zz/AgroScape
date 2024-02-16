import dotenv from 'dotenv'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/jwt.config.js'

dotenv.config()

class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authorization;
		console.log(token)
		try {
			if (!token) {
				return res.status(403).send({ message: "No token provided!" });
			}
			jwt.verify(token,
				jwtSecret,
				(err, decoded) => {
				  if (err) {
					return res.status(401).send({
						success: false,
					  	message: "Unauthorized!"
					});
				  }
				  req.userId = decoded.id;
				  next();
				}
			)
		} catch (e) {
			return res.json({ success: false, message: 'Internal Error', expired: true });
		}
	}

	async verifySignup(req, res, next){
		const user = await User.findOne({
			email: req.body.email
		})

		if (user) {
			res.status(400).send({ success: false, message: "Failed! Email is already in use!" });
			return;
		}

		next()
	}

	async checkUserExists(req, res, next){
		const user = await User.findOne({
            email: req.body.email
        })
		
		if (!user) {
			return res.status(404).send({ success: false, message: "User Not found." });
		}
		
		if(user && !user.verified){
			return res.status(401).send({ success: false, message: "User not verified." });
		}

		next()
	}

}

export default new Middleware()