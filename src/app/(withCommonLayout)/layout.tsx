
import CopyRight from "@/src/components/footer-section/CopyRight";
import Footer from "@/src/components/footer-section/Footer";
import TopFooter from "@/src/components/footer-section/TopFooter";
import Navbar from "@/src/components/header/Navbar";
import Topvar from "@/src/components/header/Topvar";
import MessengerBtn from "@/src/shared/MessengerBtn";
import ScrollToBottomToTop from "@/src/shared/ScrollToBottomToTop";
import { authOptions } from "@/src/utilits/authOption";
import { getServerSession } from "next-auth";


export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  return <div className="">
    <MessengerBtn/>
    <ScrollToBottomToTop/>
    <Topvar/>
    <Navbar session={session}/>
    {children}
    <TopFooter/>
    <Footer/>
    <CopyRight/>
    </div>;
}
