/**
 * @IMPORTANT:
 * Please run `npm run gulp:fetch-fragment-types` to fetch the latest fragment types
 * as long as we did some change especially `union` or `interface` for graphQL schema.
 *
 * DOCUMENT: tw-ui-mall/client/docs/graphql/fragmentMatch.md
 */
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './fragmentTypes.json'
 
export default new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})
 