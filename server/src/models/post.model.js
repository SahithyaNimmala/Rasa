const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const postSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    music: {
      type: String,
      required: false,
    },
    likes: [
      {
        user: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "User",
          unique: true,
        },
      },
    ],
    comments: [
      {
        text: String,
        postedBy: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "User",
          unique: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

postSchema.plugin(toJSON);
postSchema.plugin(paginate);
const Post = mongoose.model("post", postSchema);
module.exports = Post;
