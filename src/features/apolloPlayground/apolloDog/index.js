import { useState } from "react";

import ApolloDogWrapper from "./apolloDogWrapper";
import Dogs from "./dogs";
import DogPhoto from "./dogPhoto";

const ApolloDog = () => {
  const [selectedBreed, setSelectedBreed] = useState("");

  const onDogSelected = (e) => {
    console.log("Apollo Dpg - ", e.target.value, "has been selected");
    setSelectedBreed(e.target.value);
  };

  return (
    <>
      <ApolloDogWrapper>
        <h2>Second app for apollodog</h2>
        ApolloDog
        <Dogs onDogSelected={onDogSelected} />
        <DogPhoto breedName={selectedBreed}></DogPhoto>
      </ApolloDogWrapper>
    </>
  );
};
export default ApolloDog;
