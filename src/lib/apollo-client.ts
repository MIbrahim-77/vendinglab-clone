import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { CombinedGraphQLErrors } from '@apollo/client/errors';

const GRAPHQL_ENDPOINT = 'https://vendinglab.tech/graphql';

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, path }) =>
      console.error(`[GraphQL error] ${message} — path: ${path?.join('.')}`)
    );
  } else {
    console.error(`[Network error]: ${error}`);
  }
});

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

// Singleton — one instance per Node.js process (server components)
let apolloClient: ApolloClient | null = null;

export function getClient(): ApolloClient {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: from([errorLink, httpLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    });
  }
  return apolloClient;
}

export default getClient;
