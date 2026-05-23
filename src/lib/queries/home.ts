import { gql } from '@apollo/client';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails: {
      width: number;
      height: number;
    };
  };
}

export interface HomePageData {
  page: {
    title: string;
    content: string;
    featuredImage: FeaturedImage | null;
    seo: {
      title: string;
      metaDesc: string;
    } | null;
  } | null;
}

export interface ProductNode {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage: FeaturedImage | null;
}

export interface ProductsData {
  pages: {
    nodes: ProductNode[];
  };
}

export interface EventNode {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string | null;
  featuredImage: FeaturedImage | null;
  acfEvents: {
    videoUrl: string | null;
    gallery: Array<{
      sourceUrl: string;
      altText: string;
    }> | null;
    eventLocation: string | null;
  } | null;
}

export interface EventsData {
  posts: {
    nodes: EventNode[];
  };
}

// ─── Fragments ────────────────────────────────────────────────────────────────

const FEATURED_IMAGE_FRAGMENT = gql`
  fragment FeaturedImageFields on NodeWithFeaturedImage {
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
  }
`;

// ─── Queries ──────────────────────────────────────────────────────────────────

export const GET_HOME_PAGE = gql`
  ${FEATURED_IMAGE_FRAGMENT}
  query GetHomePage {
    page(id: "home", idType: URI) {
      title
      content
      ...FeaturedImageFields
      seo {
        title
        metaDesc
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  ${FEATURED_IMAGE_FRAGMENT}
  query GetProducts {
    pages(
      where: {
        parentId: "0"
        nameIn: ["coffee-robot", "ice-cream-robot", "cafexbot"]
      }
      first: 10
    ) {
      nodes {
        id
        title
        slug
        excerpt
        ...FeaturedImageFields
      }
    }
  }
`;

export const GET_EVENTS = gql`
  ${FEATURED_IMAGE_FRAGMENT}
  query GetEvents {
    posts(
      where: { categoryName: "events", orderby: { field: DATE, order: DESC } }
      first: 12
    ) {
      nodes {
        id
        title
        slug
        date
        excerpt(format: RENDERED)
        ...FeaturedImageFields
        acfEvents {
          videoUrl
          gallery {
            sourceUrl
            altText
          }
          eventLocation
        }
      }
    }
  }
`;
