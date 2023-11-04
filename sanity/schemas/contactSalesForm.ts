import {defineField, defineType} from 'sanity';
import { ComposeIcon } from '@sanity/icons';

export default defineType({
  name: 'salesForm',
  title: 'Sales Form',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
        name: 'id',
        title: 'Unique Identification Number',
        type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
        name: 'company',
        title: 'Company Name',
        type: 'string',
    }),
    defineField({
        name: 'companySize',
        title: 'Company Size',
        type: 'string',
    }),
    defineField({
        name: 'message',
        title: 'Message',
        type: 'string',
    }),
    defineField({
        name: 'connection',
        title: 'How they found DelawareAV',
        type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Submission Date and Time',
      type: 'datetime',
    }),
  ],
})