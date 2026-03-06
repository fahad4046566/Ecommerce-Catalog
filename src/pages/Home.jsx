import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

const Home = () => {


  return (
    <div className=" -m-10 min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255, 102, 0, 0.6) 0%, rgba(255, 140, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80")'
        }}
      >
        {/* Hero Content */}
        <div className="text-center text-white px-4 md:px-8 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to Our Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
            Discover quality products at unbeatable prices
          </p>
           <NavLink to="/product"><div><Button variant="activeBtn">Explore Products</Button></div></NavLink>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-background py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Badge 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">✓</div>
              <h3 className="text-xl font-bold">100% Trusted</h3>
              <p className="text-muted-foreground">
                We are verified and trusted by thousands of customers worldwide
              </p>
            </div>

            {/* Service Badge 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">🚚</div>
              <h3 className="text-xl font-bold">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery to your doorstep within days
              </p>
            </div>

            {/* Service Badge 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">💰</div>
              <h3 className="text-xl font-bold">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive pricing with regular discounts and special offers
              </p>
            </div>

            {/* Service Badge 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-5xl">🛡️</div>
              <h3 className="text-xl font-bold">Secure Checkout</h3>
              <p className="text-muted-foreground">
                Safe and encrypted transactions to protect your information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-primary/10 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Shop?
          </h2>
          <p className="text-xl text-muted-foreground">
            Browse our exclusive collection of products
          </p>
         <NavLink to="/product"><div><Button variant="outline">Explore Products</Button></div></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
