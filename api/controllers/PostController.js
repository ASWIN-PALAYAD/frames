import Post from "../models/postModel.js";
import User from "../models/userModel.js";

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({$set:req.body});
        res.status(200).json('The post has been updated')
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json('The post has been deleted');
        }else{
            res.status(403).json('You can delete only your post');
        }
    } catch (error) {
        res.status(500).json(error) 
    }
}

export const getSinglePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(400).json("post not found")
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserTimeline = async(req,res)=> {
    console.log(req.params.userId);

    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId=>{
                return Post.find({userId:friendId})
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json(error)
    }
}

//get users all posts
export const getUserTimelinePosts = async(req,res)=> {
    const user = await User.findOne({username:req.params.username});
    const posts = await Post.find({userId:user._id});
    res.status(200).json(posts)
}


//liek and unlike
export const likePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The post has been disliked");
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
