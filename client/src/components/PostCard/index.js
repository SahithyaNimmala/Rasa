import { ReactComponent as LikeSvg } from "../../Static/icons/like.svg";
import comment from "../../Static/icons/comment.png";
import defaultAvatar from "../../Static/icons/default.png";

const PostCard = ({ profileImage, profileName, postImage, likeNumber }) => {
  if (!profileName) {
    profileName = defaultAvatar;
  }

  postImage = "http://localhost:8080/" + postImage;
  return (
    <div className="overflow-hidden shadow-lg  rounded-2xl  w-full  cursor-pointer m-auto mb-6">
      <div className="bg-white w-full p-4 flex items-center ">
        <img
          className="w-10 h-10 rounded-full "
          src={profileImage}
          alt="profile"
          width="50"
          height="50"
        />
        <p className=" ml-4 text-sm pr-red-cg font-medium">{profileName}</p>
      </div>
      <div className="w-full block h-full bg-white p-2">
        <img
          alt="profile"
          src={postImage}
          className="max-h-1/4 w-full object-cover bg-white rounded-3xl "
        />
        <div className="bg-white flex gap-4 w-full p-4 items-center">
          <LikeSvg
            className="h-8 transition duration-500 ease-in-out transform hover:-translate-y-2"
            onClick={() => {
              console.log("liked");
            }}
          ></LikeSvg>
          <img
            src={comment}
            className="h-9 transition duration-500 ease-in-out transform hover:-translate-y-2"
            alt="post"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
