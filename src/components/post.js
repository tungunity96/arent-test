import moment from "moment";
function Post({ post }) {
  const renderedTags = post.tags.map((tag) => {
    return (
      <div className="text-xs text-primary-400 cursor-pointer" key={tag}>
        #{tag}
      </div>
    );
  });
  const publishedDate = moment(post.createdAt).format("yyyy.MM.DD");
  const publishedTime = moment(post.createdAt).format("HH:mm");
  return (
    <div>
      <div className="relative aspect-video" key={post.image}>
        <img
          className="w-full h-full object-cover"
          src={require(`../assets/images/${post.image}`)}
          alt={post.title}
        />
        <div className="absolute bottom-0 left-0 bg-primary-300 px-2 py-0.5 text-light">
          <span>{publishedDate}</span>
          <span className="ml-3">{publishedTime}</span>
        </div>
      </div>
      <div className="text-base mt-2">{post.title}</div>
      <div className="flex gap-2 mt-2">{renderedTags}</div>
    </div>
  );
}

export default Post;
