import React from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import "./Blog.css"


const getData=async(blog)=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${blog}`); 
  if(!res.ok){
 throw new Error("something went wrong");
  }
  return res.json();
};


const Page =async ({params}) => {
  const {blog}=params;
  const post=await getData(blog);

  return (
    <Stack direction="row">
      <div>
        <Image className="img" src="/blug.jpg" alt="about" width={300} height={400} />
      </div>
      <Stack className="ok"   >
        <h1>{post.title}</h1>
        <Stack direction="row" style={{ marginTop: "15px" }}>
          <Image
            style={{ borderRadius: "50%", marginRight: "15px" }}
            src="/blug.jpg"
            alt="about"
            width={25}
            height={25}
          />
          <Stack style={{ marginRight: "20px" }}>
            <p>autorize</p>
            <p>terry jelerson</p>
          </Stack>
          <Stack>
            <p>published</p>
            old2024
          </Stack>
      
        </Stack>
        <p style={{marginTop:"15px"}}>
          {post.body}
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the  standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and */}
      </p>
      </Stack>

    
    </Stack>
  );
};

export default Page;
