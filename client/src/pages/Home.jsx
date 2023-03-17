import React, { useState, useEffect } from "react";

import { Loader, Card, FormField } from "../components";
const RenderCards =({data,title}) =>{
  if(data?.length > 0) {
    return data.map((post)=> <Card key= {post._id}{...post}/>)
  }
return (
  <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
)
}

const Home = () => {
  const [loading, setloading] = useState(false);
  const [allPosts, setallPosts] = useState(null);
  const [searchText, setsearchText] = useState("");
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrablod text-[#222328] text-[32px]">
          the community show case
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          tao hinh anh bang Dall-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                showing results for <span className="text-[#222328]">{searchText}</span>
              </h2>
            )} 
            <div className="grid lg:grid-col-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                 {searchText ?(
                  <searchText
                    data = {[]}
                    title= "no search results found"
                  />
                 ):(
                  <RenderCards
                    data={[]}
                    title="no posts found"
                  />
                 )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
