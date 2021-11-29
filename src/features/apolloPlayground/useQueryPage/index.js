import ApolloDog from "../apolloDog";
import ApolloStarted from "../apolloStarted";
import ExchangeRate from "../apolloStarted/exchangeRate";

const UseQueryPage = () => {
  return (
    <>
      <ApolloDog />
      <ApolloStarted>
        <ExchangeRate />
      </ApolloStarted>
    </>
  );
};

export default UseQueryPage;
