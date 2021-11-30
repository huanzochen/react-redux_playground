import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  // This instance related on
  uri: "https://plp0mopxq.sse.codesandbox.io/",
});

const AddTodoWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AddTodoWrapper;
