import Head from "next/head";
import { React, useEffect, useState } from 'react'
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import TrustedPartner from "@/components/TrustedPartner";
import Digital from "@/components/Digital";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/Icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from "@/components/Preloader";


export default function Home() {
  // -------------aos-------------
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);

  // -------------backtotop-----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ------------preloader-------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader/>
      ) : (
        <>
          <main className="overflow-hidden">
            <Header />
            <TrustedPartner />
            <Digital />
            <Footer />
            <div>
              <button className={`${backToTop ? " position-fixed cursor_pointer updown_animation backtotop d-flex justify-content-center align-items-center" : "d-none"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </main>
        </>
      )}
    </>
  );
}
