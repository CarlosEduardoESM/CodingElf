import Head from "next/head";
import { PostCard, SocialMediaWidget, Categories , RecentCard } from "../components";
import { getPosts, GetTags } from "../services";
import React from "react";

export default function Home({ posts ,tags}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Coding Elf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecentCard posts={posts}/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relatve top-8 ">
            <SocialMediaWidget />

            <Categories tags={tags}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const tags = (await GetTags()) || [];

  return {
    props: { posts ,tags},
  };
}
