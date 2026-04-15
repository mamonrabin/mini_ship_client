import Topvar from "@/src/components/header/Topvar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">
    <Topvar/>
    {children}
    </div>;
}
