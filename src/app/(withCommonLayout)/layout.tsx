import Topvar from "@/src/components/header/Topvar";
import Navbar from "@/src/components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">
    <Topvar/>
    <Navbar/>
    {children}
    </div>;
}
