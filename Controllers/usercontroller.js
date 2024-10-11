const userModel = require("../Model/userModel");



const userSignUp = async (req, res) => {
    const {email, password} = await req.body;
    
    try {
        const userExists = await userModel.findOne({email});

        if(userExists){
            res.json({
                validationMessage: "User Already Exists"
            });
        }

        const newUser = await new userModel({email, password});
        await newUser.save();
        
        res.status(201).json({
            newUser: newUser
        })

    } catch (error) {
        res.status(500).json({
            errorMessage: "Internal Server Error"
        })
    }
}

const updateUser = async (req, res) => {
    res.send("user updated successfully!")
}

const usersignIn = async (req, res) => {
    res.send("User Signed in!");
}

module.exports = {
    userSignUp,
    usersignIn,
    updateUser
}
