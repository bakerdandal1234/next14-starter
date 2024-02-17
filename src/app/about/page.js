import Image from "next/image";
import './About.css';
// import React from 'react';
const Page = () => {
    return (
        <div className="flex">
       <div style={{width:"300px",marginLeft:"auto",marginRight:"auto"}} >
       <h1>we create digital<br></br>
             ideas that are bigger <br></br>
            ,bolder,braver and better.</h1>
           <p style={{marginTop:"15px"}}>bbbbb bbbb bibib ibibib kjbjbbj jkbjbjb mnmnb  kjjfj bdjndjdj jbdjn bdfbn  ndjbfnj nbsfjbnj  nbfjn jnfbnf njfbndfnbei nbbnisn inrin  ninrwi sbrnbn </p>
           <div style={{marginTop:"20px"}} className="flex medium">
            <div>
                10 k+ <br></br> <p>dependencies</p>
            </div>
            <div>
                234k+ k+ <br></br> <p>dependencies</p>
            </div>
            <div>
                5 k+ <br></br> <p>dependencies</p>
            </div>
           </div>
       </div>



       <div>
       <Image className="img"  src="/about.png" alt="about" width={400} height={400}/>
       </div>
       
       </div>
    );
}

export default Page;
