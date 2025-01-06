"use client";
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/app/AuthorCard/page';
import { time } from 'console';
import { title } from 'process';
import { posts } from '@/components/posts';
export default function Post ({params}:{params:{id:string}} ) {
  const {id} =params;
  const post =posts.find((p) =>p.id ===id);
  if(!post){
    return(
    <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }
  const renderParagraphs = (description : string)=>{
    return description.split("/n").map((para,index)=>{
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}</p>
    });
  };
  return(
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>{post.title}</h1>
      {post.imageUrl &&(
        <img 
         src={post.imageUrl} alt={post.title} 
         className='w-full h-auto rounded-md mt-4'/>
      )}
      <div className='mt-6 text-lg text-slate-700'>
        {(post.description)}
      </div>
      <CommentSection postId={post.id}/>
   
      <AuthorCard></AuthorCard>
    </div>
  )
}

