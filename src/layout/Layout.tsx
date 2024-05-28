import { ReactNode } from "react";
import Header from "./Header/Header";

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div className="theme-body-dark theme-body-mobile">
      <Header />
      <div className="flex justify-center items-center h-screen max-h-full">
        <div className="fixed p-4 items-center sm:border w-full h-full sm:w-1/2 sm:h-2/3 sm:rounded-lg background-Quiz">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
