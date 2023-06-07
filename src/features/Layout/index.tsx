import React, { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectStatus } from "../logs/logSlice";
import LoadingPage from "./LoadingPage";

type SelectComponentProps = {
    children: ReactNode;
  };

const Layout = ({ children } : SelectComponentProps) => {
  const status = useAppSelector(selectStatus);
  const isLoading = status === "loading";
  return (
    <div className="w-screen p-10">
      {isLoading && <LoadingPage />}
      {children}
    </div>
  );
};

export default Layout;
