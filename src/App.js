import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OnlineStores from "./components/OnlineStores/OnlineStores.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <div className="loader-wrapper">
          <Loader />
        </div>
      ) : (
        <>
          <div className="main-content">
            <OnlineStores />
            <ContactForm />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
