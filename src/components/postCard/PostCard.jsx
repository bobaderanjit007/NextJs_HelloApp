import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = () => {
  return (
    <div className='flex flex-col mx-3'>
        <Image src="https://images.pexels.com/photos/27745133/pexels-photo-27745133/free-photo-of-green-big-leaves-of-plant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" height={500} width={300} />
        <span>01.01.2024</span> 
        <div className="bottom">
            <h1>Title</h1>
            <p>Descritpion</p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard