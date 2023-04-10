import { Route, Routes } from "react-router-dom";
import { ConfigProvider, message } from "antd";
import locale from "antd/es/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import EdmPage from "./src/pages/EdmPage";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

dayjs.locale("ko");

message.config({
  top: 157,
});

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider locale={locale}>
        <Routes>
          <Route>
            <EdmPage />
          </Route>
        </Routes>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
