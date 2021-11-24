import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
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
    console.log("the apollo client had already fetch the data first!")
  );

const ApolloPlayground = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>my first apollo client app</h2>
        {children}
      </div>
    </ApolloProvider>
  );
};

export default ApolloPlayground;
