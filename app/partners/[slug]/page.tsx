"use client"
import { useState, useEffect } from 'react';
import { client, partners as sanityPartners } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Navbar, Footer } from '@/components/components';
import Image from 'next/image';
import SanityBlockContent from '@sanity/block-content-to-react';
import './partnerContent.css';
import { Suspense } from 'react';
import { Logo, Alert } from '@/icons/icons'

export default function PartnerContentPage({ params }: { params: { slug: any } }) {
  const [partners, setPartners] = useState<any[]>([]);
  const partnerSlug = params.slug;

  useEffect(() => {
    async function fetchBlogs() {
      const res = await client.fetch(sanityPartners);
      setPartners(res);
    }

    fetchBlogs();
  }, []);

  return (
    <Suspense fallback='loading...'>
      <Navbar />
      <div className='partnerContent__container'>
        {partners?.map((partner, index) => (
          partnerSlug === partner.slug.current ?
            <div key={index} className='partnerContent__subcontainer'>
              <div className='partnerContent__logo--container'>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className='partnerContent__logo--link'>
                  <Image
                  width={400}
                  height={400}
                  alt={partner.company}
                  key={index}
                  src={urlForImage(partner.logo).url()}
                  className='partnerContent__logo'
                  />
                </a>
                <span className='partnerContent__logo--separator'></span>
                <a href='/' className='partnerContent__logo--link'>
                  <Logo />
                </a>
                <div className='partnerContent__current--url'>
                  <a href='/partners' className='partnerContent__current--url__beginning'>partners</a>
                  <span className='partnerContent__current--url__middle'></span>
                  <span className='partnerContent__current--url__end'>{partner.slug.current}</span>
                </div>
              </div>
              <div className='partnerContent__preview--container'>
                <div className='partnerContent__preview--description'>
                  <h3 className='partnerContent__preview--title'>{partner.title}</h3>
                  <div className='partnerContent__preview--preview'>
                    <SanityBlockContent blocks={partner.preview} />
                  </div>
                </div>
                {
                  partner.image ?
                  <div className='partnerContent__preview--description'>
                    <Image
                      width={400}
                      height={400}
                      alt={partner.company}
                      key={index}
                      src={urlForImage(partner.image).url()}
                      className='partnerContent__preview--image'
                    />
                  </div>
                  : 
                  <div className='partnerContent__preview--description partnerContent__preview--missing'>
                    <div className='partnerContent__preview--missing__svg'>
                      <Alert />
                    </div>
                    <div className='partnerContent__preview--missing__header'>
                      <h3 className='partnerContent__preview--missing__header'>We have not yet updated our collaboration page with <span className='partnerContent__preview--missing__span'>{partner.company}</span></h3>
                      <h4 className='partnerContent__preview--missing__subheader'>Stay tuned for future updates on our collaborations with our partners</h4>
                    </div>
                  </div>
                }
              </div>
              <div className='partnerContent__description'>
                {
                  partner.description ?
                  <SanityBlockContent blocks={partner.description} />
                  : null
                }
              </div>
            </div>
          : null
        ))}
      </div>
      <Footer />
    </Suspense>
  );
}