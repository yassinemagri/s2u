import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { ThemeProvider } from "./ThemeProvider";
const Layout = ({children}) => {
  return (
    <ThemeProvider>
      <main className="font-Pixel bg-[url(https://i.ibb.co/tgC1wkx/1138740.png)] bg-blend-multiply bg-black/30 bg-no-repeat bg-center bg-fixed bg-clip-content bg-cover">
      <Header />
      {children}
      <Footer />
    </main>
    </ThemeProvider>
    
  );
};

export default Layout;
