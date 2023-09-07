import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";
import "../../src/app/globals.css";
import { Open_Sans } from "next/font/google";
import MyChatMain from "@/components/MyChatMain/MyChatMain";

const open = Open_Sans({ subsets: ["latin"] });
function myChat() {
  return (
    <div className={open.className}>
      <Header />
      <MyChatMain/>
      <Footer />
    </div>
  );
}

export default myChat;
