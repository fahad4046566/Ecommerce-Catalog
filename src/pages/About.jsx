import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
            About Our Store
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your trusted destination for quality products at unbeatable prices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-12">
        {/* Our Story */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Welcome to our ecommerce catalog! We started our journey with a simple mission: 
              to bring you the best products with exceptional customer service and affordable prices.
            </p>
            <p>
              Founded in 2023, we've grown from a small startup to a thriving online marketplace 
              serving thousands of happy customers worldwide. Our commitment to quality and innovation 
              drives everything we do.
            </p>
          </CardContent>
        </Card>

        {/* Our Mission */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              To provide an exceptional shopping experience by offering a curated selection of quality products, 
              competitive pricing, and outstanding customer support.
            </p>
            <p>
              We believe in building lasting relationships with our customers and continuously improving our 
              services to meet and exceed expectations.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl mb-6">Why Choose Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="text-xl font-semibold">Quality Products</h3>
                <p className="text-muted-foreground">
                  Carefully selected products from trusted brands and suppliers
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl mb-2">🚚</div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Quick and reliable delivery to your doorstep
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="text-xl font-semibold">Best Prices</h3>
                <p className="text-muted-foreground">
                  Competitive pricing and regular discounts
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="text-xl font-semibold">Customer Support</h3>
                <p className="text-muted-foreground">
                  Dedicated support team ready to help
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="text-xl font-semibold">Secure Shopping</h3>
                <p className="text-muted-foreground">
                  Safe and encrypted transactions
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl mb-2">♻️</div>
                <h3 className="text-xl font-semibold">Easy Returns</h3>
                <p className="text-muted-foreground">
                  Hassle-free returns and exchanges
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>Have a question? We'd love to hear from you!</p>
            <div className="space-y-2">
              <p><strong>Email:</strong>fahad85581@gmail.com</p>
              <p><strong>Phone:</strong> +923329585581</p>
              <p><strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}

export default About
