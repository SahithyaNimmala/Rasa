const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const postValidation = require('../../validations/post.validation');
const postController = require('../../controllers/post.controller');
const userValidation = require('../../validations/user.validation');

const router = express.Router();


router.route('/')
.get(auth('getPosts'),validate(postValidation.getPosts),postController.getAllPost)
.post(auth('managePost'),validate(postValidation.createPost),postController.createPost)

router.route('/user/:userId')
.get(auth('getPostUserById'),validate(userValidation.getUser),postController.getPostByUserId)



module.exports = router;
