"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productRating } from "@/utils/productRating";

interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  
    const router = useRouter();
  return (
    <div onClick={()=>router.push(`/product/${data.id}`)} className="col-span-1 border-[1.2px] cursor-pointer border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm" >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden w-full relative">
             <Image fill src={data.images[0].image} className="object-contain h-full w-full" alt={data.name}/>
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div><Rating value={productRating(data)} readOnly/></div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
