const httpStatus = require("http-status");
const { postService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");

const createPost = catchAsync(async (req, res) => {
  const Post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(Post);
});

const getPostByUserId = catchAsync(async (req, res) => {
  const result = await postService.getPostByUser(req.params.userId);
  res.send(result);
});

const getAllPost = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["user"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await postService.queryPosts(filter, options);
  res.send(result);
});

module.exports = {
  createPost,
  getAllPost,
  getPostByUserId,
};
