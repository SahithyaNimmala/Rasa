const mongoose = require("mongoose");
const { friend, User } = require("../models");
const Friend = require("../models/friends.model");

const createFriend = (data) => {
  return friend.create(data);
};

const getFriends = (from_user) => {
  return User.aggregate([
    {
      $lookup: {
        from: "friends",
        as: "connection",
        let: { user_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$to_user", "$$user_id"] },
                  {
                    $eq: ["$from_user", mongoose.Types.ObjectId(from_user)],
                  },
                ],
              },
            },
          },
          { $project: { status: 1, to_user: 1, from_user, _id: 0 } },
        ],
      },
    },
    { $unwind: { path: "$connection", preserveNullAndEmptyArrays: true } },
  ]);
};

const getConnectedFriends = (from_user) => {
  return Friend.find({
    $or: [
      {
        from_user: mongoose.Types.ObjectId(from_user),
        status: 2,
      },
      {
        to_user: mongoose.Types.ObjectId(from_user),
        status: 2,
      },
    ],
  }).populate(['to_user',"from_user"]);
};

module.exports = {
  getFriends,
  createFriend,
  getConnectedFriends,
};
