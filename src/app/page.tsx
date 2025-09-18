'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
import { sampleProducts, categories } from '@/data/products'

export default function HomePage() {
  const featuredProducts = sampleProducts.filter(p => p.featured).slice(0, 6)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4])

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On all orders over $50' },
    { icon: Shield, title: 'Secure Payment', description: 'Safe and encrypted checkout' },
    { icon: RefreshCw, title: 'Easy Returns', description: '30-day hassle-free returns' },
    { icon: Star, title: 'Quality Guarantee', description: 'Premium products guaranteed' }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section - Full Width Image */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ opacity }} className="absolute inset-0">
          <Image
            src="/mainImage.webp"
            alt="Featured Products"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto px-6"
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-extrabold leading-tight drop-shadow-2xl mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Shop the Latest
              <span className="block text-yellow-400">Tech & More</span>
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover amazing products at unbeatable prices. From cutting-edge electronics to everyday essentials.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl shadow-lg px-8 py-4 text-lg">
                <Link href="/products" className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-gray-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our premium services and quality products
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mx-auto mb-6">
                  <f.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
                <p className="text-gray-300">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-gray-900/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our handpicked selection of the best products across all categories
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" asChild className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-gray-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-300">Explore our wide range of product categories</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map(c => (
              <motion.div 
                key={c.id} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }} 
                className="group"
              >
                <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700">
                  <Link href={`/categories/${c.slug}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={c.imageUrl}
                        alt={c.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors text-white">
                        {c.name}
                      </h3>
                      <p className="text-gray-300">{c.description}</p>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-blue-900/50" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-12">
              Subscribe for the latest deals, new products, and exclusive offers
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-400 text-lg"
              />
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 rounded-xl font-semibold text-lg">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
