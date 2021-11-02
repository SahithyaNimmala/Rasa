const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createPost = {
  body: Joi.object().keys({
    image: Joi.string().required(),
    user: Joi.required().custom(objectId),
    music: Joi.string(),
    comments: Joi.array(),
  }),
};

const getPosts = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createPost,
  getPosts,
};
