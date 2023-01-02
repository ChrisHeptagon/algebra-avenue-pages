import { NextPage } from "next"
import { allPosts } from "contentlayer/generated"
import Image from "next/image";

export function PostCard ({ post }: { post:any }) {
  return (
    <div className="table shadow-md rounded-lg bg-[#d87635] border border-[#025c5c]">
      <div className="flex items-center justify-center shadow-black drop-shadow">
    <a href={post.url}>
      <Image className="rounded-t-lg bg-white" src={post.thumbnail} width={256} height={256} alt={post.title}/>
    </a>
      </div>
    <div className="p-5">
    <a href={post.url}>
      <h2>{post.title}</h2>
    </a>
    <a href={post.url}>
      <p>{post.description}</p>
    </a>
    </div>
    </div>
  );
}


export default function IndexPage() {
  return (
    <div className="">
      <h1 className="flex items-center justify-center">
        Welcome to Algebra Avenue</h1>
        <div className="flex flex-wrap items-center mx-[5vw]">
          {allPosts.map((post, idx) => (
            <PostCard post={post} key={idx}></PostCard>
          ))}
        </div> 
    </div>
  )
}