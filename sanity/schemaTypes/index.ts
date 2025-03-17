import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";

import { postType } from "./postType";
import { propertyType } from "./listingType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, propertyType],
};
