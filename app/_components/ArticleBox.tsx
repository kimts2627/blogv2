import { ReactNode } from "react";
import WindowBox from "./WindowBox";

const ArticleBox = ({ children }: { children: ReactNode }) => {
  return <WindowBox title="Content">{children}</WindowBox>;
};

export default ArticleBox;
