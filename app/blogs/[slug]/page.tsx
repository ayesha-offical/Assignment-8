import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Blogdata } from "@/app/blogs/page";
import Link from "next/link";



export default async function   Postdata ({params}:{ params: {slug: string;}}) {
  const {slug} = params;
  const query = `*[_type == "post" && slug.current == $slug]{
  title,author,"slug":slug.current,"Image":Image.asset->url,publishedAt,content}`;

  const post : Blogdata[] = await client.fetch(query,{slug});

  const posts = post[0];
  console.log(posts);

  return (
    <div className="text-black"> 
      <main className="flex flex-col gap-10 items-center justify-center h-full px-10 lg:px-28 py-28">
        <div>
        <Link href={"/blogs"}>
          <Image   src={posts.Image} alt="mage" width={1200} height={608} className="rounded-xl" />
        </Link>
        </div>
        <div className="flex md:w-[95%] items-center gap-5">
        <span className="text-text2 font-bold">{posts.author}</span>
        <span className="text-slate-600 font-medium">{new Date(posts.publishedAt).toLocaleDateString()}</span>
        </div>
        <h1 className="text-text2 md:w-[95%] text-4xl font-raleway lg:text-6xl font-bold">{posts.title}</h1>
        <div className="md:w-[95%] flex flex-col gap-5 justify-center items-center">

          <p className="text-text2 text-lg">{posts.content}</p>

         
        </div>
      </main>
    </div>
  )

}
