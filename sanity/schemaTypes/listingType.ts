import { defineArrayMember, defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      options: {
        list: [
          { title: "For Rent", value: "rent" },
          { title: "For Sale", value: "sale" },
          { title: "For Lease", value: "lease" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Property Category",
      type: "string",
      options: {
        list: [
          { title: "House", value: "house" },
          { title: "Apartment", value: "apartment" },
          { title: "Shop", value: "shop" },
          { title: "Land", value: "land" },
          { title: "Warehouse", value: "warehouse" },
          { title: "Office", value: "office" },
          { title: "Building", value: "building" },
          { title: "Villa", value: "villa" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceUnit",
      title: "Price Unit",
      type: "string",
      options: {
        list: [
          { title: "Per Month", value: "month" },
          { title: "Per Year", value: "year" },
          { title: "Total Price", value: "total" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Property Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "details",
      title: "Property Details",
      type: "object",
      fields: [
        defineField({
          name: "bedrooms",
          title: "Bedrooms",
          type: "number",
        }),
        defineField({
          name: "bathrooms",
          title: "Bathrooms",
          type: "number",
        }),
        defineField({
          name: "toilets",
          title: "Toilets",
          type: "number",
        }),
        defineField({
          name: "area",
          title: "Area (sq ft)",
          type: "number",
        }),
        defineField({
          name: "furnished",
          title: "Furnished",
          type: "boolean",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        defineField({
          name: "address",
          title: "Address",
          type: "string",
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "mainImage",
    },
  },
});
