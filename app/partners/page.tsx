"use client"
import './partners.css'
import { Navbar, Footer } from '@/components/components';
import { Suspense } from 'react'
import { client, partners as sanityPartners } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function PartnersPage() {

    const [partners, setPartners] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchBlogs() {
        const res = await client.fetch(sanityPartners);
        setPartners(res);
      }
  
      fetchBlogs();
    }, []);

    return (
        <Suspense fallback='Loading...'>
            <Navbar/>
            <div className='partnersPage__container'>
                <h1 className='partnersPage__header'>DelawareAV Partners</h1>
                <h3 className='partnersPage__subheader'>With the help of our partners, we allow companies of all sizes to create incredible audio and visual experiences</h3>
                <div className='partnersPage__subcontainer'>
                  {partners?.map((partner, index) => {
                    if (partner.isSVG) {
                      return null;
                    } else {
                      return (
                        <div key={index} className='partnersPage__subcontainer--container'>
                          <a href={partner.url} target="_blank" rel="noopener noreferrer" className='partnersPage__subcontainer--partner__link'>
                              <Image
                              width={400}
                              height={400}
                              alt={partner.company}
                              key={index}
                              src={urlForImage(partner.logo).url()}
                              className='partnersPage__subcontainer--logo'
                              />
                          </a>
                          <h3 className='partnersPage__subcontainer--title'>{partner.title}</h3>
                          <div className='partnersPage__subcontainer--preview__container'>
                            <SanityBlockContent blocks={partner.preview} />
                          </div>
                          <a href={"/partners/" + partner.slug.current} key={partner.slug.current} className='partnersPage__subcontainer--case__link'>
                              <button className='partnersPage__subcontainer--button button__secondary'>Our partnership with {partner.company}</button>
                          </a>
                        </div>
                      );
                    }
                  })}
                </div>
            </div>
            <Footer/>
        </Suspense>
    )
}