import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
const PostsExcerpt = ({ post }) => {
  return (
    <article className="post">
      <h2>
        {post.title.substring(0, 25)} {post.title.length > 25 && "..."}
      </h2>
      <p className="excerpt">{post.body.substr(0, 100)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>view post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
