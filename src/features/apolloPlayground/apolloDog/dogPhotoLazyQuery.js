import { useLazyQuery } from "@apollo/react-hooks";
import React, { useEffect, useState, useMemo } from "react";

import { GET_DOG_PHOTO } from "../graphqlData/queries/dogs";

const DogPhotoLazyQuery = () => {
  // const [dog, setDog] = useState(null);
  let dog = "";
  const [getDog, { loading, data, error, refetch }] =
    useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error}</p>;

  if (data && data.dog) {
    dog = data.dog;
  }

  return (
    <div>
      <h4>
        useLazyQuery on dog image, it will query until you press the button.
      </h4>
      {dog && (
        <img src={dog.displayImage} alt={dog.breed} style={{ height: 100 }} />
      )}
      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Get bulldog info powered by lazy query!
      </button>
      <button onClick={() => refetch()}> refresh new Image!</button>
    </div>
  );
};

export default DogPhotoLazyQuery;
