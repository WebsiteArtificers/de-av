"use client"
import { useState, useEffect } from 'react';
import { client, blog } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Navbar, Footer } from '@/components/components';
import Image from 'next/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import './blogContent.css';
import { Suspense } from 'react';

export default function BlogContentPage({ params }: { params: { slug: any } }) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const blogSlug = params.slug;

  useEffect(() => {
    async function fetchBlogs() {
      const res = await client.fetch(blog);
      setBlogs(res);
    }

    fetchBlogs();
  }, []);

  return (
    <Suspense fallback='loading...'>
      <Navbar />
      <div className='blogPage__container'>
        {
          blogs?.map((blog: any) => (
            blogSlug === blog.slug.current ?
            <div key={blog.id}>
              <div className='blogPage__subcontainer'>
                <div className='blogPage__title--container'>
                  <h1 className='blogPage__title'>{blog.title}</h1>
                  <p>{blog.preview}</p>
                </div>
                <div className='blogPage__image--container'>
                  <Image className='blogPage__image' priority width='800' height='800' src={urlForImage(blog.mainImage).url()} alt={blog.title} />
                </div>
              </div>
              <div className='blogPage__content--container'>
                <SanityBlockContent blocks={blog.body}/>
              </div>
            </div>
            : null
          ))
        }
      </div>
      <Footer />
    </Suspense>
  );
}