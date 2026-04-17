"use client";


import { Sheet,  SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, TextAlignJustify, } from "lucide-react";

type Props = {
  MenuIconStyle?: string;
};

const ResponsiveNav = ({ MenuIconStyle }: Props) => {

  return (
    <Sheet>
      <SheetTrigger className="border-transparent outline-none focus:ring-0">
       <TextAlignJustify size={28} />
      </SheetTrigger>
      <SheetContent className="w-full px-4 py-2" side="left">
         <h2>this is a simple heading</h2>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNav;
