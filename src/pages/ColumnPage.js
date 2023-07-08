import "../styles/ColumnPage.css";
import { Divider } from "@mui/material";
import Post from "../components/post";
import moment from "moment";

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
  const posts = [
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-1.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-2.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-3.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-4.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-5.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-6.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-7.jpg",
    },
    {
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      createdAt: moment.now(),
      image: "column-8.jpg",
    },
  ];
  const renderedPosts = posts.map((post) => {
    return <Post post={post} key={post.image}></Post>;
  });
  const renderedCategories = categories.map((category) => {
    return (
      <div
        className="category-card bg-dark-600 flex flex-col justify-center items-center p-4"
        key={category.title}
      >
        <div className="uppercase text-center text-2xl text-primary-300">
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
      <div className="bg-gradient-to-r to-primary-400 from-primary-300 w-[296px] h-[56px] rounded-md flex justify-center items-center mx-auto mt-8 cursor-pointer">
        <div className="text-light">記録をもっと見る</div>
      </div>
    </div>
  );
}

export default ColumnPage;
