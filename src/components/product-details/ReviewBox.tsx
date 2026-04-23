import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import product from "@/src/assets/products/a1.jpg";
import { Star } from "lucide-react";
import Image from "next/image";


const ReviewBox = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger>
          <p className="text-[12px] w-25 px-2 py-1 rounded font-medium bg-[#1B5DD5] hover:bg-[#FF5500] duration-300 cursor-pointer text-white">
            Rate Product
          </p>
        </DialogTrigger>
        <DialogContent className="max-w-5xl! rounded !">
          <div className="flex gap-4 border-b border-[#262626]/40 pb-4">
            <Image
              className="border border-[#262626]/15 p-2 rounded"
              src={product}
              alt="product"
              width={120}
              height={120}
            />
            <div>
              <h2 className="md:text-xl font-semibold">
                Haier 65 Inch Bezel-Less HQLED 4K UHD Google TV
              </h2>
              <p className="mt-2">Brand: Haier</p>
              <p className="mt-1">Sold by: Haier Bangladesh</p>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="md:text-2xl font-semibold">Write a review</h2>

            <form className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-1 pb-2">
                <p className="text-[#FF5722]">
                  <Star size={16} />
                </p>
                <p className="text-[#FF5722]">
                  <Star size={16} />
                </p>
                <p className="text-[#FF5722]">
                  <Star size={16} />
                </p>
                <p className="text-[#FF5722]">
                  <Star size={16} />
                </p>
                <p className="text-[#FF5722]">
                  <Star size={16} />
                </p>
              </div>

              <input className="border border-[#262626]/20 px-2 py-2 outline-none" type="text" placeholder="Review Title" />
              <textarea className="border capitalize border-[#262626]/20 px-2 py-2 outline-none" cols={10} rows={4} placeholder="feedback about the product"></textarea>
              <input 
              className="py-3 bg-[#1B5DD5] hover:bg-[#FF5722] duration-300 cursor-pointer font-medium text-sm text-white rounded"
              type="submit" value="Submit Review" />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewBox;
