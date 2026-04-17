import Navbar from "@/src/components/header/Navbar";
import Topvar from "@/src/components/header/Topvar";


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
