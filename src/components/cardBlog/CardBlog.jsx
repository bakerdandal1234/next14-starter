import Image from 'next/image';
import Link from 'next/link';
import './Cardblog.css'
const CardBlog = ({post}) => {
    return (
       <div className='project-card '>
        <div className='supImage'>
            <Image    src="/hero.gif" alt="" fill/>
        </div>

            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
            <Link className='btn'  href={`/blug/${post.id}`}>Learn more</Link>
         
        </div>

    );
}

export default CardBlog;
