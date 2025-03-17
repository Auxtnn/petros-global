import { groq } from "next-sanity";
import { client } from "./client";

export async function getPosts(post: string) {
  try {
    const response = await client.fetch(
      groq`*[_type == $post && defined(slug.current)] | order(publishedAt desc) {
        'currentSlug': slug.current,
        _id,
        title,
        mainImage,
        publishedAt,
        body,
        'image': mainImage.asset->url
      }`,
      { post },
      { tag: "post", next: { revalidate: 10 } }
    );

    console.log("Fetched:", response);

    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error(`Failed to fetch posts: ${(error as Error).message}`);
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const response = await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
          'currentSlug': slug.current,
          _id,
          title,
          mainImage,
          publishedAt,
          body,
          'image': mainImage.asset->url
        }`,
      { slug } // Pass the slug as a parameter
    );

    if (!response) {
      throw new Error("Post not found");
    }

    return response;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw new Error(`Failed to fetch post: ${(error as Error).message}`);
  }
}

export async function getProperties() {
  try {
    const response = await client.fetch(
      groq`*[_type == "property" && defined(slug.current)] | order(_createdAt desc) {
        'currentSlug': slug.current,
        _id,
        title,
        status,
        category,
        description[],
        price,
        priceUnit,
        mainImage,
        'image': mainImage.asset->url,
        location {
          address,
          city
        }
      }`,
      {},
      { tag: "property", next: { revalidate: 10 } }
    );

    console.log("Fetched properties:", response);

    return response;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error(`Failed to fetch properties: ${(error as Error).message}`);
  }
}

export async function getPropertyBySlug(slug: string) {
  try {
    const response = await client.fetch(
      groq`*[_type == "property" && slug.current == $slug][0] {
          'currentSlug': slug.current,
          _id,
          title,
          status,
          category,
          price,
          priceUnit,
          mainImage,
          'image': mainImage.asset->url,
          images[]{
            'url': asset->url
          },
          details {
            bedrooms,
            bathrooms,
            toilets,
            area,
            furnished
          },
          description[],
          location {
            address,
            city
          },
          features
        }`,
      { slug }
    );

    if (!response) {
      throw new Error("Property not found");
    }

    console.log("Fetched property:", response);

    return response;
  } catch (error) {
    console.error("Error fetching property by slug:", error);
    throw new Error(`Failed to fetch property: ${(error as Error).message}`);
  }
}
