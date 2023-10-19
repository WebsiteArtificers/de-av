import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

export const partners = `*[_type == "document"]{
  title,
  slug,
  logo {
    asset->{
      url
    }
  },
  url,
  category[]->,
  description,
}`