import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fragmentMatcher from 'graphqlData/fragmentMatcher'

import { link as defaultLink } from './link'

export const getClient = ({
  resolvers,
  typeDefs,
  defaults,
  dataIdFromObject,
  link = defaultLink,
}) => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache({
      fragmentMatcher,
      ...dataIdFromObject && { dataIdFromObject },
    }),
    ...resolvers && { resolvers },
    ...defaults && { defaults },
    ...typeDefs && { typeDefs },
    connectToDevTools: process.env.NODE_ENV !== 'production',
  })
}
