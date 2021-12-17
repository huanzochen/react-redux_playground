import React from "react";
import MainPage from "./mainPage";

import ContextHookWrapper from "./contextHookWrapper";

const ContextHook = () => {
  return (
    <div>
      ContextHook Page
      <ContextHookWrapper>
        <MainPage />
      </ContextHookWrapper>
    </div>
  );
};

export default ContextHook;
