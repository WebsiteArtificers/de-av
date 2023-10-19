import {defineField, defineType} from 'sanity';
import { DatabaseIcon } from '@sanity/icons';

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  icon: DatabaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})