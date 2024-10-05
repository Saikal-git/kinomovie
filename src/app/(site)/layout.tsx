import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};
export default layout;