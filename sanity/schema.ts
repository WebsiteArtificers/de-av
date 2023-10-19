import { type SchemaTypeDefinition } from 'sanity'
import partners from './schemas/partners';
import blockContent from './schemas/blockContent';
import categories from './schemas/categories';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ partners, blockContent, categories ],
}

