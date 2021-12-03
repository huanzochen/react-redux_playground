import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  // This instance related to:
  // https://codesandbox.io/s/48p1r2roz4?file=/index.js
  // https://48p1r2roz4.sse.codesandbox.io/
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          name
          currency
        }
      }
    `,
  })
  .then((result) =>
    console.log(
      "the src/features/apolloPlayground/apolloStarted/index.js had already fetch the data first!"
    )
  );

const ApolloStarted = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>my first apollo client app</h2>
        {children}
      </div>
    </ApolloProvider>
  );
};

export default ApolloStarted;
