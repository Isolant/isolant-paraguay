import Link from "next/link";

import MainHead from "@/components/MainHead";
import Header from "./Header";
import Footer from "./Footer";

export default function Base({
  pageTitle,
  footerTheme,
  footerDecorations,
  children,
  productLines,
}) {
  return (
    <>
      <MainHead
        pageTitle={pageTitle}
      />
      <Header />
      <main>{children}</main>
    </>
  );
}
