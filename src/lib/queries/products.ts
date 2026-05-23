import { gql } from '@apollo/client';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProductSlugNode {
  slug: string;
}

export interface AllProductsData {
  pages: {
    nodes: ProductSlugNode[];
  };
}

export interface GalleryImage {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

export interface ProductAcfFields {
  // Specs
  capacity: string | null;
  dimensions: string | null;
  weight: string | null;
  powerConsumption: string | null;
  operatingTemperature: string | null;
  // Media
  videoUrl: string | null;
  brochureUrl: string | null;
  gallery: GalleryImage[] | null;
  // Marketing
  tagline: string | null;
  keyFeatures: string | null;
  idealFor: string | null;
}

export interface ProductDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  date: string;
  modified: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  } | null;
  acfProduct: ProductAcfFields | null;
  seo: {
    title: string;
    metaDesc: string;
    opengraphImage: {
      sourceUrl: string;
    } | null;
  } | null;
}

export interface ProductBySlugData {
  page: ProductDetail | null;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

// Used in generateStaticParams — only needs slugs
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    pages(
      where: { parentId: "0", categoryName: "products" }
      first: 100
    ) {
      nodes {
        slug
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      slug
      content(format: RENDERED)
      excerpt(format: RENDERED)
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      acfProduct {
        capacity
        dimensions
        weight
        powerConsumption
        operatingTemperature
        videoUrl
        brochureUrl
        gallery {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
        tagline
        keyFeatures
        idealFor
      }
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;
