import User from "../../models/user.js"
import bcrypt from 'bcryptjs'

function generateRandom4DigitNumber() {
    const randomNum = Math.random() * 9999;
  
    const flooredNum = Math.floor(randomNum);
  
    const fourDigitNum = flooredNum + 1000;
  
    return fourDigitNum;
}

const signup = async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const code = generateRandom4DigitNumber();
        const user = new User({
            email: email,
            password: bcrypt.hashSync(password, 8),
            code
        });

        user.save()
        
        res.send({ code, success: true, message: "User was registered successfully!" });
    } catch (error) {
        console.log(error)
    }
}

export default signup