


const userSignUp = async (req, res) => {
    res.send("user signed up!");
}

const usersignIn = async (req, res) => {
    res.send("User Signed in!");
}


module.exports = {
    userSignUp,
    usersignIn
}