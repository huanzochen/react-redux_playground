import { ItemContextProvider } from "./context";

const ContextHKWrapper = ({ children }) => {
  return (
    <>
      <ItemContextProvider>{children}</ItemContextProvider>
    </>
  );
};

export default ContextHKWrapper;
