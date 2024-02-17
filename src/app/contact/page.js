
import {  Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import styles from './Contact.module.css'
import Image from 'next/image';
const Page = () => {
 

    return (
        <div className={styles.all}>
          <div>
          <Image className={styles.img} src="/contact.png" alt="about" width={400} height={400}/>
          </div>


          
         

 
      <form   className={styles.bord}>
         <Stack className={styles.input} sx={{gap:"10px",width:"500px"}}>
            <TextField name="userName"  id="outlined-basic" label="userName" variant="outlined" />
            <TextField name="email"  id="outlined-basic" label="Email address" variant="outlined" />
            <TextField name="phonenumber" id="outlined-basic" label="press phone number" variant="outlined" />
            <TextField
                name="message"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Message"
              />
            <Button type="submit"  className={styles.btn} variant="contained" color="primary">
              send
            </Button>
         </Stack>
      </form>
         
    

   
    
          </div>
    );
}

export default Page;
