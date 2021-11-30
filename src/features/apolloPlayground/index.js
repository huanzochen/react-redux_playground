import MainPage from "./page";
import DetectBreakPoint from "./common/renderProps/detectBreakpoint";

const ApolloPlayground = ({ children }) => {
  return (
    <>
      <DetectBreakPoint>
        {(breakpoint) => (
          <>
            <MainPage />
            {children}
          </>
        )}
      </DetectBreakPoint>
    </>
  );
};
export default ApolloPlayground;
