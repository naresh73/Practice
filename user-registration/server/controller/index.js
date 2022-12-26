const userModel = require('../model');
const { generateJWTtoken, authenticateToken} = require('../token');




async function createAccount(req, res) {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email: email })

    if (userExist) {
        res.send({
            message: "user already exist"
        })
    } else {
        try {
            const newUser = new userModel({
                name, email, password
            })

            const token = generateJWTtoken(newUser)

            await newUser.save()

            res.send({
                message: "Account created successfully",
                user: newUser,
                token : token
            })
        } catch (error) {
            res.send({
                error : error
            })
        }
    }
}

async function loginToYourAccount(req, res) {
    const user = await userModel.findOne({email : req.body.email})

    if(!user) {
        res.send({
            message : "user doesn't exist"
        })
    }
    else {
        const token = generateJWTtoken(user);
        res.send({
            message : "Hii",
            user : user,
            token : token
        })
    }
}

module.exports = {createAccount, loginToYourAccount};