import { type SchemaTypeDefinition } from 'sanity'
import partners from './schemas/partners';
import blockContent from './schemas/blockContent';
import categories from './schemas/categories';
import blog from './schemas/blog';
import author from './schemas/author';
import salesForm from './schemas/contactSalesForm';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ partners, blockContent, categories, blog, author, salesForm ],
}

