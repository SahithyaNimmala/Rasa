const httpStatus = require('http-status');
const { Post } = require('../models');
const ApiError = require('../utils/ApiError');

const createPost = async (postbody) => {
    return Post.create(postbody)
}

const getPostById = async (id ) =>{
    return Post.findById(id)
}
const getPostByUser = async (id) =>{
    return Post.find({user:id})
}

const queryPosts = async (filter, options) => {
    options.populate = 'user'
    const users = await Post.paginate(filter, options);
    return users;
  };

module.exports = {
    createPost,
    queryPosts,
    getPostById,
    getPostByUser
}