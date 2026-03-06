import { useParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { fetchProductById } from "@/Services/api";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/UseCart";
import { ArrowBigLeft,ArrowDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import { Spinner } from "@/components/ui/spinner"

const ProductDetails = () => {
  const { items, updateQty, addToCart } = useCart();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
  };
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const Singleproduct = await fetchProductById(id);
      setProduct(Singleproduct);
      setLoading(false);
    };
    loadProduct();
  }, [id]);
  if (loading || !product) {
    return <div className="text-4xl text-gray-600 flex gap-2 mt-40 md:mt-70 items-center justify-center"><Spinner />Loading...</div>;
  }
  const currentItemInCart = items?.find((item) => item.id === product?.id);
  return (
    <div>
      <div>
        <NavLink to="/">
          <div className=" mt-8 mb-3 md:ml-40">
            <Button variant="link"><ArrowBigLeft/>Back To Home</Button>
          </div>
        </NavLink>
      </div>
    
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden lg:flex gap-12 p-6 md:p-10">
          {/* LEFT: Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 m-3">
            <div className="sticky top-10">
              <Carousel>
                <CarouselContent>
                  {product.images.map((img, i) => (
                    <CarouselItem key={i}>
                      <img src={img} alt={product.title} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Brand & Category Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {product.brand || "Premium"}
              </span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating Section */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center bg-yellow-400/10 px-2 py-1 rounded">
                <Badge variant="secondary">⭐ {product.rating}</Badge>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                ({product.comment || "24"} Verified Reviews)
              </span>
            </div>

            {/* Price & Description */}
            <div className="mb-6">
              <p className="text-3xl font-black text-indigo-600 mb-4">
                {product.price}
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
            </div>

            {/* Info Grid (Warranty, Shipping etc) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-400 font-bold">
                  Shipping
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  {product.shippingInformation}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-400 font-bold">
                  Warranty
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  {product.warrantyInformation}
                </span>
              </div>
              <div className="flex flex-col col-span-full">
                <span className="text-[10px] uppercase text-gray-400 font-bold">
                  Return Policy
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  {product.returnPolicy}
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-8 bg-white border border-gray-200 w-fit md:px-6 py-3 m-2 md:rounded-full shadow-sm">
                <span className="text-sm font-bold text-gray-400 uppercase">
                  Quantity
                </span>
                <div className="flex items-center">
                  {currentItemInCart ? (
                    <div className="flex items-center">
                      <Button
                        onClick={() => updateQty(currentItemInCart.id, "DEC")}
                      >
                        -
                      </Button>
                      <span className="md:mx-3 mx-1 text-xl">
                        {currentItemInCart.totalItems}
                      </span>
                      <Button
                        onClick={() => updateQty(currentItemInCart.id, "INC")}
                      >
                        +
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => addToCart(handleAddToCart)}>
                      Click on Add to Cart<ArrowDown />
                    </Button>
                  )}
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                variant="activeBtn"
                className="w-full"
                
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
