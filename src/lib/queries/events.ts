import { gql } from '@apollo/client';

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface EventGalleryImage {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

export interface EventAcfFields {
  videoUrl: string | null;
  eventLocation: string | null;
  eventDate: string | null;
  gallery: EventGalleryImage[] | null;
}

export interface EventDetail {
  id: string;
  title: string;
  slug: string;
  date: string;
  modified: string;
  content: string;
  excerpt: string | null;
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
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  acfEvents: EventAcfFields | null;
}

export interface AllEventsData {
  posts: {
    nodes: EventDetail[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

// ─── Queries ──────────────────────────────────────────────────────────────────

export const GET_ALL_EVENTS = gql`
  query GetAllEvents($first: Int = 20, $after: String) {
    posts(
      where: {
        categoryName: "events"
        orderby: { field: DATE, order: DESC }
      }
      first: $first
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        date
        modified
        content(format: RENDERED)
        excerpt(format: RENDERED)
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
        categories {
          nodes {
            name
            slug
          }
        }
        acfEvents {
          videoUrl
          eventLocation
          eventDate
          gallery {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

// Lightweight version for listing pages (no content/gallery)
export const GET_EVENTS_PREVIEW = gql`
  query GetEventsPreview($first: Int = 6) {
    posts(
      where: {
        categoryName: "events"
        orderby: { field: DATE, order: DESC }
      }
      first: $first
    ) {
      nodes {
        id
        title
        slug
        date
        excerpt(format: RENDERED)
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
        acfEvents {
          videoUrl
          eventLocation
          eventDate
        }
      }
    }
  }
`;
