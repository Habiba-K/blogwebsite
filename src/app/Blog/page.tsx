import React from "react";
import BlogCard from "../../components/BlogCard";
import { posts } from "../../components/posts";
export default function Mega() {
  
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animation-color-change">
      Exploring the Latest Technologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {posts.map((post,index) =>(
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
            <BlogCard post={post} isDarkBackground={index===20}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
