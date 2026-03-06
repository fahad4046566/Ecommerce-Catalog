import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useCart } from '@/hooks/UseCart'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({product}) => {
  const {addToCart} = useCart()
 const { title, thumbnail, price, rating } = product;

 const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail
    })
  }
  
   return (
     <Card>
      <CardContent className="p-4">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <h3 className="font-bold mt-2">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span>${price}</span>
          <Badge>⭐ {rating}</Badge>
        </div>
      </CardContent>
      <CardContent>
        <Link to={`/product/${product.id}`}>
         <Button variant="default">Product Details <ArrowRight /></Button>
        </Link>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddToCart} variant='activeBtn' className="w-full">Add to Cart <ShoppingCart /></Button>
      </CardFooter>
    </Card>
  );
};


export default ProductCard