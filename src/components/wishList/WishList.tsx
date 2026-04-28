


import {
  Sheet,

  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import enotyImage from "@/src/assets/icon/empry-cart.svg"
const WishList = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <p>My Wishlist</p>
        </SheetTrigger>
        <SheetContent className="max-w-lg! p-6">
          <h2 className="font-medium">My Wishlist (0)</h2>

          <div className="flex items-center justify-center mt-20">
             <Image src={enotyImage} alt="emty" width={300} height={300}/>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default WishList;
