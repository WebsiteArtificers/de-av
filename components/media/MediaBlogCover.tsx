"use client"
import './media.css'
import { useState, useEffect } from 'react'
import { Logo } from '@/icons/icons'
import { client, blog } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export default function MediaBlogCover() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const result: any = await client.fetch(blog);
          setBlogs(result);
        } catch (error) {
          console.error('Error fetching the blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);

    return (
        <div className="mediaBlogCover__container">
            {blogs?.map((blog: any, index: any) => {
            // Render only the first three elements
            if (index < 4) {
                return (
                <a key={index} className='mediaBlogCover__blog' href={"/blog/" + blog.slug.current}>
                    <img className='mediaBlogCover__blog--image' src={urlForImage(blog.mainImage).url()} alt={blog.title} />
                    <div className='mediaBlogCover__blog--subcontainer'>
                    <h1 className='mediaBlogCover__blog--title'>{blog.title}</h1>
                    <Logo />
                    </div>
                </a>
                );
            } else {
                return null; // Render nothing for elements beyond the first three
            }
            })}
        </div>
    )
}