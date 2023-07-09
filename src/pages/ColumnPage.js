import { Divider } from "@mui/material";
import { useEffect } from "react";
import { PostStore } from "../store/postStore";
import { shallow } from "zustand/shallow";
import Post from "../components/Post";
import ButtonLoadMore from "../components/ButtonLoadMore";

function ColumnPage() {
  const categories = [
    {
      title: "recommended column",
      subtitle: "オススメ",
    },
    {
      title: "recommended diet",
      subtitle: "ダイエット",
    },
    {
      title: "recommended beauty",
      subtitle: "美容",
    },
    {
      title: "recommended health",
      subtitle: "健康",
    },
  ];
  const [posts, fetchPosts, canLoadMore] = PostStore(
    (state) => [state.posts, state.fetchPosts, state.canLoadMore],
    shallow
  );
  const handleLoadMore = () => {
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderedPosts = posts.map((post) => {
    return <Post post={post} key={post.id}></Post>;
  });
  const renderedCategories = categories.map((category, index) => {
    return (
      <div className="h-[144px] bg-dark-600 flex flex-col justify-center items-center p-6" key={index}>
        <div className="uppercase text-center text-2xl text-primary-300 font-inter font-light">
          {category.title}
        </div>
        <div className="w-[56px] my-2">
          <Divider sx={{ bgcolor: "white" }} />
        </div>
        <div className="text-light">{category.subtitle}</div>
      </div>
    );
  });
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-4 gap-10">{renderedCategories}</div>
      <div className="grid grid-cols-4 gap-4 mt-12">{renderedPosts}</div>
      {canLoadMore && (
        <div className="mt-8">
          <ButtonLoadMore buttonText="記録をもっと見る" buttonCb={handleLoadMore} />
        </div>
      )}
    </div>
  );
}

export default ColumnPage;
