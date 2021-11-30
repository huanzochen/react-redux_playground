import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  // This instance related on
  uri: "https://plp0mopxq.sse.codesandbox.io/",
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

const AddTodoWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AddTodoWrapper;
