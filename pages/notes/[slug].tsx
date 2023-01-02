import React from "react";
import { allPosts } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Script from "next/script";
import { DesmosGraph, DesmosCalc, DesmosGraphCalc } from "components/desmos";
import { MultipleChoice, ShortResponse } from "components/questions";
import Head from "next/head";


export async function getStaticPaths() {
  const paths = allPosts.map((post) => "/" + post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

function Paragraph(props){
    return (
        <div className="py-5 mx-[10vw]">
        <p className="text-justify" {...props}/>
        </div>
    )
}

function HeadingOne(props){
    return (
        <div>
            <h1 className=" font-bold " {...props}/>
        </div>
    )
}

const PostLayout = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
      <div>
        <Head>
            <title>{post.title}</title>
        </Head>
        <Script strategy="beforeInteractive" src="/scripts/calculator.js"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.css"></link>
        <div className="flex py-10 items-center justify-center">
            <h1 className=" text-[20px] font-Clearview">{post.title}</h1>
        </div>
        <MDXContent components={{
            DesmosGraph,
            DesmosCalc,
            DesmosGraphCalc,
            MultipleChoice,
            ShortResponse,
            p:Paragraph,
            h1:HeadingOne,
            }}></MDXContent>
      </div>
  );
};

export default PostLayout;