import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="text-7xl mb-6 animate-bounce">🎉</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for your purchase. We've received your order and are getting it ready for shipment.
      </p>
      <NavLink to="/">
       <Button variant="outline">Continue Shopping</Button>
      </NavLink>
    </div>
  );
};

export default Success;