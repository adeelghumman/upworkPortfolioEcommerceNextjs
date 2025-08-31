'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useState } from 'react'
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
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={handleToggleLike}
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>

          {/* Stock Badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              Only {product.stock} left
            </div>
          )}
          
          {product.stock === 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Out of Stock
            </div>
          )}

          {product.featured && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
              Featured
            </div>
          )}

          {/* Quick Add to Cart Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              onClick={handleAddToCart}
              disabled={isLoading || product.stock === 0}
              className="bg-white text-black hover:bg-gray-100"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`}>
          <div className="space-y-2">
            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {product.category}
            </p>

            {/* Product Name */}
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Rating (placeholder) */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">(4.0)</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-green-600">
                  {formatPrice(product.price)}
                </span>
              </div>
              
              <Button
                onClick={handleAddToCart}
                disabled={isLoading || product.stock === 0}
                size="sm"
                className="md:hidden" // Show only on mobile, hidden on desktop (desktop shows on hover)
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

export default ProductCard
