import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { StyledExchangeRate } from "./styleExchangeRate";

const GET_RATING = gql`
  {
    rates(currency: "USD") {
      name
      currency
      rate
    }
  }
`;

const ExchangeRate = () => {
  const { loading, error, data } = useQuery(GET_RATING);

  let content;

  if (data) {
    console.log("exchangedRate data has been fetched!", data);
    content = data.rates.map(({ name, currency, rate }) => {
      return (
        <div key={currency}>
          <span>{name}</span>
          <span>{currency}</span>
          <span>{rate}</span>
        </div>
      );
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <StyledExchangeRate>
      ExchangeRate
      {content}
    </StyledExchangeRate>
  );
};

export default ExchangeRate;
