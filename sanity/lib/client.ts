import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

export const contactSalesForm = `*[_type == "salesForm"]{
  fullname,
  id,
  email,
  company,
  companySize,
  message,
  connection,
  publishedAt,
}`

export const partners = `*[_type == "partners"]{
  company,
  slug,
  logo {
    asset->{
      url
    }
  },
  image {
    asset->{
      url
    }
  },
  isSVG,
  url,
  category[]->,
  title,
  preview,
  description,
}`

export const blog = `*[_type == "blog"]{
  title,
  slug,
  id,
  author,
  mainImage {
    asset->{
      url
    }
  },
  preview,
  categories[]->,
  publishedAt,
  body,
}`

export const category = `*[_type == 'categories']{
  title,
  description,
  id,
}`