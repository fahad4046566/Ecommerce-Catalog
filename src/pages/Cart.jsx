import React from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { useCart } from "@/hooks/UseCart";
import { Button } from "@/components/ui/button";
import { Trash } from 'lucide-react';
import { Table,TableBody, TableCell, TableHead, TableHeader, TableRow} from "../components/ui/table";
import { Card,CardContent,CardFooter,CardHeader } from "@/components/ui/card";
const Cart = () => {
  const {
    items,
    removeFromCart,
    updateQty,
    clearCart,
  } = useCart();
 const totalPrice = items.reduce((acc, item) => {
  return acc + (item.price * item.totalItems); 
}, 0);
 const navigate = useNavigate();
const handleCheckout = () => {
  clearCart();
  navigate("/success");
};
  if (items.length === 0) {
    return (
      <div>
      <p className="flex justify-center md:mt-20 text-4xl font-serif font-bold text-gray-700">
        Your cart is empty
      </p>
      <NavLink to="/product"><div className="text-center mt-8"><Button variant="outline">Continue Shopping</Button></div></NavLink>
      </div>
    );
  }

  return (
    <>
     
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-20">Image</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead>SubTotal</TableHead>
      <TableHead>Delete</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {items.map((item) => (
      <TableRow key={item.id} className="border-b"> 
        <TableCell>
          <img src={item.thumbnail} alt={item.title} className="w-full h-auto" />
        </TableCell>
        <TableCell className="font-bold text-gray-800 text-sm md:text-base capitalize">
          {item.title}
        </TableCell>
        <TableCell>${item.price}</TableCell>
        <TableCell>
          <div className="flex items-center">
            <Button onClick={() => updateQty(item.id, "DEC")}>-</Button>
            <span className="mx-3 text-xl">{item.totalItems}</span> 
            <Button onClick={() => updateQty(item.id, "INC")}>+</Button>
          </div>
        </TableCell>
        <TableCell>${item.price*item.totalItems}</TableCell>
        <TableCell>
          <Button onClick={() => removeFromCart(item.id)} variant="deleteBtn">
            <Trash />
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
 
 <div className="flex justify-between m-7">
  <NavLink to="/product"><div><Button variant="outline">Continue Shopping</Button></div></NavLink>
  <div><Button onClick={()=>clearCart()} variant="deleteBtn">Clear Cart</Button></div>
 </div>
{/* chechout procedure  */}
 <Card className="w-full max-w-87.5 shadow-lg border-2 border-gray-100 rounded-xl overflow-hidden">
  <CardHeader className="bg-gray-50/50 pb-4">
    <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
  </CardHeader>
  
  <CardContent className="space-y-4 pt-6">
    {/* Subtotal */}
    <div className="flex justify-between items-center text-gray-600">
      <span className="text-sm font-medium">Subtotal</span>
      <span className="font-semibold text-gray-900">${totalPrice}</span>
    </div>

    {/* Shipping */}
    <div className="flex justify-between items-center text-gray-600">
      <span className="text-sm font-medium">Shipping Fee</span>
      <span className="font-semibold text-green-600 text-sm">+$78.00</span>
    </div>

    {/* Divider Line */}
    <div className="border-t border-dashed border-gray-200 my-2"></div>

    {/* Order Total */}
    <div className="flex justify-between items-center pt-2">
      <span className="text-lg font-bold text-gray-800">Order Total</span>
      <span className="text-xl font-extrabold text-blue-600">
        ${totalPrice + 78}
      </span>
    </div>
  </CardContent>

  <CardFooter className="pt-2 pb-6">
    <Button 
      onClick={handleCheckout}
      variant='activeBtn' 
      className="w-full py-6 text-lg font-bold shadow-md hover:-translate-y-0.5 transition-all active:scale-95"
    >
      Proceed to Checkout
    </Button>
  </CardFooter>
</Card>

    </>
  );
};

export default Cart;
