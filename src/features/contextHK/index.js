import React from "react";
import MainPage from "./mainPage";

import ContextHKWrapper from "./contextHKWrapper";

const ContextHK = () => {
  return (
    <div>
      ContextHK index
      <ContextHKWrapper>
        <MainPage />
      </ContextHKWrapper>
    </div>
  );
};

export default ContextHK;
