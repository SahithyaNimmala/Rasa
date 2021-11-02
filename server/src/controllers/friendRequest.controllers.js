const httpStatus = require("http-status");
const { friendService, userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createFriendRequest = catchAsync(async (req, res) => {
  const friend = await friendService.createFriend(req.body);
  if (friend.status === 2) {
    await userService.createFriendToUser(friend.from_user, friend.to_user);
  }
  res.status(httpStatus.CREATED).send(friend);
});

const getFriendUser = catchAsync(async (req, res) => {
  const friends = await friendService.getFriends(req.params.userId);
  res.send(friends);
});

const getConnectedFriends = catchAsync(async (req, res) => {
  const friends = await friendService.getConnectedFriends(req.params.userId);
  res.send(friends);
});

module.exports = {
  createFriendRequest,
  getFriendUser,
  getConnectedFriends
};
