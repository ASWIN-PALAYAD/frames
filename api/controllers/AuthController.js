import User from "../models/userModel.js"
import bcrypt from 'bcrypt';


export const register = async(req,res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        });

        //save user to db
        const user = await newUser.save();
        res.status(200).send(user)

    } catch (error) {
        console.log(`eroor in user register`,error);
        res.status(500).json(error)
    }
};

export const login = async(req,res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json('user not found');

        const validPassword = await bcrypt.compare(req.body.password,user?.password);
        !validPassword &&  res.status(400).json('Invalid credentials');

        res.status(200).json(user)

    } catch (error) {
        console.log(`error in user login`,error);
        res.status(500).send(error)  
    }
}