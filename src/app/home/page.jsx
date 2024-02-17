import Button from '@mui/material/Button'
import Image from 'next/image';

const Home = () => {
    return (
        <div className='flex'>
           <div>
           <h1>
            creative <br></br> thoughts<br></br> agency.
           </h1>
           <p style={{marginTop:"15px"}}>
            lorem psum solar sn smet consecteur adispering alt.<br></br>  vero blandus adispert minims reicendes a autem assumenda dolare
           </p>
          <div style={{marginTop:"20px"}}>
             <Button style={{marginRight:"10px"}} variant="contained" color="primary">
               learn more
             </Button>
             <Button variant="contained" color="primary">
               contact
             </Button>
          </div>
          <Image  style={{marginTop:"10px"}} src="/brands.png" alt="" width={350} height={100}/>
           </div>



           <div>
           <Image  style={{marginTop:"10px"}} src="/hero.gif" alt="" width={350} height={350}/>
           </div>
        </div>
    );
}

export default Home;
