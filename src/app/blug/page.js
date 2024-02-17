
import CardBlog from 'components/cardBlog/CardBlog';
import './Blug.css'

const getData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts"); 
    if(!res.ok){
   throw new Error("something went wrong");
    }
    return res.json();
};



const Page = async() => {
    const posts=await getData();
   
        return (
            <div  className='flex'>
                {posts.map((post) => {
                    return(
                         <CardBlog key={post.id}  post={post}  />
                    )
                })}
                       
                        
                     
           
            </div>
           
        );
   
    
}

export default Page;
