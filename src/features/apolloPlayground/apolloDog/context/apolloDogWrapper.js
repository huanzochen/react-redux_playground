import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  // This instance related on
  // https://codesandbox.io/s/32ypr38l61?file=/index.js
  uri: "https://32ypr38l61.sse.codesandbox.io/",
});

const ApolloDogWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloDogWrapper;
