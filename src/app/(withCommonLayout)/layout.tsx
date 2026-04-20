
import CopyRight from "@/src/components/footer-section/CopyRight";
import Footer from "@/src/components/footer-section/Footer";
import TopFooter from "@/src/components/footer-section/TopFooter";
import Navbar from "@/src/components/header/Navbar";
import Topvar from "@/src/components/header/Topvar";
import MessengerBtn from "@/src/shared/MessengerBtn";
import ScrollToBottomToTop from "@/src/shared/ScrollToBottomToTop";


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">
    <MessengerBtn/>
    <ScrollToBottomToTop/>
    <Topvar/>
    <Navbar/>
    {children}
    <TopFooter/>
    <Footer/>
    <CopyRight/>
    </div>;
}
