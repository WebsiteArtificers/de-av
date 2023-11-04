"use client"
import './quote.css'
import { useState } from 'react'
import { client as sanityClient } from '@/sanity/lib/client'
import { createClient as supabaseClient } from '@supabase/supabase-js';
import { v4 as uuid } from 'uuid';

const supabase = supabaseClient(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`)

export default function RightQuoteComponent() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [companySize, setCompanySize] = useState('1-100')
    const [message, setMessage] = useState('')
    const [connection, setConnection] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const uniqueId = uuid().toString();

        const timestamp = new Date().toISOString();

        const formData: Object = {
            fullname,
            id: uniqueId,
            email,
            company,
            companySize,
            message,
            connection,
            publishedAt: timestamp,
        }
        
        try {
            await sanityClient.create({_type: 'salesForm', ...formData});
            await supabase.from('SalesForm').insert([formData]);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='quote__subcontainer--right'>
            <form className='quote__form' onSubmit={handleSubmit}>
                <div className='quote__form--container'>
                    <div className='quote__input--container'>
                        <label className='quote__form--label' htmlFor='fullname'>Full Name</label>
                        <input
                        required
                        className='quote__form--input'
                        id='fullname' name='fullname'
                        placeholder='First and last name'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}/>
                    </div>
                    <div className='quote__input--container'>
                        <label className='quote__form--label' htmlFor='email'>Work Email</label>
                        <input
                        required
                        className='quote__form--input'
                        id='email'
                        name='email'
                        placeholder='example@company.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='quote__form--container'>
                    <div className='quote__input--container'>
                        <label className='quote__form--label' htmlFor='company'>Company</label>
                        <input
                        required
                        className='quote__form--input'
                        id='company' name='company'
                        placeholder='Company name'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}/>
                    </div>
                    <div className='quote__input--container'>
                        <label className='quote__form--label' htmlFor='size'>Company Size</label>
                        <select title='companySize' onChange={(e) => setCompanySize(e.target.value)} value={companySize} required className='quote__form--input' id='companySize' name='companySize' placeholder='Company size'>
                            <option disabled>Number of employees</option>
                            <option value='1-100'>1-100</option>
                            <option value='100-500'>100-500</option>
                            <option value='500-5000'>500-5000</option>
                            <option value='5000+'>5000+</option>
                        </select>
                    </div>
                </div>
                <div className='quote__form--container'>
                    <div className='quote__input--container container__textarea'>
                        <label className='quote__form--label' htmlFor='message'>Message <span>(Optional)</span></label>
                        <textarea
                        className='quote__form--textarea'
                        id='message'
                        name='message'
                        placeholder='Tell us about your projects, timelines, needs, etc'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                </div>
                <div className='quote__form--container'>
                    <div className='quote__input--container'>
                        <label className='quote__form--label' htmlFor='connection'>Where did you find us? <span>(Optional)</span></label>
                        <input
                        className='quote__form--input'
                        id='connection'
                        name='connection'
                        placeholder='How did you hear about DAV?'
                        value={connection}
                        onChange={(e) => setConnection(e.target.value)}/>
                    </div>
                    <div className='quote__input--container'>
                        <button type='submit' className='quote__form--button button__secondary'>Contact Sales</button>
                    </div>
                </div>
            </form>
        </div>
    )
}