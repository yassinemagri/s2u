import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
const Layout = ({children}) => {
  return (
      <main className="font-Pixel bg-[url(https://i.ibb.co/tgC1wkx/1138740.png)] bg-blend-multiply bg-black/30 bg-no-repeat bg-center bg-fixed bg-clip-content bg-cover">
      <Header />
      {children}
      <Footer />
    </main>
    
  );
};

export default Layout;
