import {defineField, defineType} from 'sanity';
import { DatabaseIcon } from '@sanity/icons';

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: DatabaseIcon,
  fields: [
    defineField({
      name: 'company',
      title: 'Name of Company',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    {
      name: 'isSVG',
      title: 'Is the image an SVG file?',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      }
    },
    defineField({
        name: 'url',
        title: 'URL',
        type: 'url',
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [{type: 'reference', to: {type: 'categories'}}],
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'blockContent',
    }),
  ],
  initialValue: {
    isSVG: false,
  },
})