"use client";

import { CartProductType, SelectedImgType } from "@/app/product/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 h-full max-h[600px] min-h[300px] sm:min-h[400px] gap-2">
      <div
        className="flex 
        flex-col
        items-center 
        justify-center  gap-4 cursor-pointer
        border h-full max-h[600px]
        min-h[300px] sm:min-h[400px] "
      >
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              className={`relative w-[80%] aspect-square
             border-teal-300 rounded 
             ${
               cartProduct.selectedImg.color === image.color
                 ?  "border-[1.5px]"
                 : "border-none"
             }`}
              onClick={() => handleColorSelect(image)}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 
       relative aspect-square">
         <Image
                src={cartProduct.selectedImg.image}
                alt={cartProduct.name}
                fill
                className="object-contain h-full 
                max-h-[500px] min-h-[300px]
                sm:min-h-[400px] "
              />
       </div>
    </div>
  );
};

export default ProductImage;
