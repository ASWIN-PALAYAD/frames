import bcrypt from 'bcrypt'
import User from '../models/userModel.js';


export const getSingleUser = async(req,res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId ?  await User.findById(userId) : await User.findOne({username:username}) ;
        const {password,updatedAt,...other} = user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async(req,res) => {
    if(req.body.userId === req.params.id || req.user?.isAdmin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },);
            res.status(200).json("Account has been updated")
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        return res.status(403).json("You can update only your account");
    }
};


export const followUser = async(req,res) => { 
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json('user has beedn followed')
            }else{
                res.status(403).json('you already follow this user')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json('you cant follow yourself')
    }
}

export const unfollowUser = async(req,res) => {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{following:req.params.id}});
                res.status(200).json('user has beedn unfollowed')
            }else{
                res.status(403).json('you dont follow this user')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json('you cant unfollow yourself')
    }
}



export const deleteUser = async(req,res) => {
    if(req.body.userId === req.params.id || req.user?.isAdmin){
       
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted")
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        return res.status(403).json("You can delete only your account");
    }
}



