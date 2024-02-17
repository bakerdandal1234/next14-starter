"use client"
import Modal from './Modal';
import Link from 'next/link';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@mui/material/Button'
const Header = () => {
     const pathName=usePathname();
     const[showModal,setshowModal]=useState(false);
     const closeModal=() => {
         setshowModal(false) 
     }
     const session=true;
     const isAdmin=true;
     return (
          <div className="flex" >
             <Link href="/">
                <h1 className='logo'> logo</h1>
             </Link>
               <nav>
                    <ul>
                         <li><Link href="/home" className={`${pathName=== "/home" && "active"}`}>home</Link></li>
                         <li><Link href="/about"  className={`${pathName=== "/about" && "active"}`}>about</Link></li>
                         <li><Link href="/contact" className={`${pathName=== "/contact" && "active"}`}>contact</Link></li>
                         <li><Link href="/blug" className={`${pathName=== "/blug" && "active"}`}>blug</Link></li>
                         {session ? (
                              isAdmin &&(
                                   <><li><Link href="/admin" className={`${pathName === "/admin" && "active"}`}>admin</Link></li>
                                   <Button variant="contained" color="primary">
                                        logout
                                   </Button></>  
                              )
                              
                         ):(
                              <li><Link href="/login" className={`${pathName=== "/login" && "active"}`}>login</Link></li>
                         )}
                    </ul>
                   
               </nav>
               
            <IconButton className="menu" sx={{display:"none"}} aria-label="" onClick={() => {
               setshowModal(true)
            }}>
              <MenuIcon/>
            </IconButton>
             {showModal && <Modal closeModal={closeModal} >
                            <ul>
                                 <li><Link href="/">home</Link></li>
                                 <li><Link href="/about">about</Link></li>
                                 <li><Link href="/contact">contact</Link></li>
                                 <li><Link href="/admin">admin</Link></li>
                                 <li><Link href="/blug">blug</Link></li>
                            </ul>
           </Modal> } 
           
          </div>
     );
}

export default Header;
