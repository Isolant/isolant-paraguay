import { ReactNode } from "react";

import MainHead from "@/components/MainHead";
import Header from "./Header";

export default function Base({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <MainHead />
      <Header />
      <main>{children}</main>
    </>
  );
}
