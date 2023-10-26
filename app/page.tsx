import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

import 
        { 
          Hero, Partners, More, Overview, Product, Quote
        }
from '@/components/components'

export const dynamic = 'force-dynamic'

export default async function Home() {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <Suspense>
      <Hero />
      <Partners />
      <More />
      <Overview />
      <Product />
      <Quote />
    </Suspense>
  )
}
