import React, { useEffect, useState } from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
const Layout = () => {
  const [apidata, setApidata] = useState(null);
  useEffect(() => {
    fetch("/api/subs")
      .then((response) => response.json())
      .then((data) => setApidata(data.subs));
  }, []);
  if (apidata) {
  return (
      <main className="font-Pixel bg-[url(./imgs/main-bg.png)] bg-blend-multiply bg-black/30 bg-no-repeat bg-center bg-fixed bg-clip-content bg-cover">
      <Header />
      <Footer />
    </main>
    
  );
};
};

export default Layout;
