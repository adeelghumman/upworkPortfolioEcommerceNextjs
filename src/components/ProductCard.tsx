'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the button
    setIsLoading(true)
    
    try {
      addItem(product)
      // You could add a toast notification here
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLiked(!isLiked)
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700">
        <Link href={`/products/${product.slug}`}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Wishlist Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-gray-800/80 hover:bg-gray-700/80 text-white"
                onClick={handleToggleLike}
              >
                <Heart 
                  className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} 
                />
              </Button>
            </motion.div>

            {/* Stock Badge */}
            {product.stock <= 5 && product.stock > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded"
              >
                Only {product.stock} left
              </motion.div>
            )}
            
            {product.stock === 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Out of Stock
              </motion.div>
            )}

            {product.featured && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded"
              >
                Featured
              </motion.div>
            )}

            {/* Quick Add to Cart Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={handleAddToCart}
                  disabled={isLoading || product.stock === 0}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isLoading ? 'Adding...' : 'Add to Cart'}
                </Button>
              </motion.div>
            </div>
          </div>
        </Link>

        <CardContent className="p-4">
          <Link href={`/products/${product.slug}`}>
            <div className="space-y-2">
              {/* Category */}
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                {product.category}
              </p>

              {/* Product Name */}
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors text-white">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 line-clamp-2">
                {product.description}
              </p>

              {/* Rating (placeholder) */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">(4.0)</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-green-400">
                    {formatPrice(product.price)}
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={handleAddToCart}
                    disabled={isLoading || product.stock === 0}
                    size="sm"
                    className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProductCard
