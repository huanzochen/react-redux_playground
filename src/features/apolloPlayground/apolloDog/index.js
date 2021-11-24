import ApolloDogWrapper from "./apolloDogWrapper";
import Dogs from "./dogs";

const ApolloDog = () => {
  let content;

  return (
    <>
      <ApolloDogWrapper>
        <h2>Second app for apollodog</h2>
        ApolloDog
        <Dogs />
      </ApolloDogWrapper>
    </>
  );
};
export default ApolloDog;
