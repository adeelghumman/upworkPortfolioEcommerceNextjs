'use client'

import Link from 'next/link'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/store/cart'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items, getItemCount, getTotal } = useCartStore()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              ShopNext
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search, Cart, User */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:block relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-64 pr-10"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </Button>
            </Link>

            {/* User */}
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Mobile Search */}
            <div className="mt-4 pt-4 border-t">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Cart Preview (appears on hover/click) */}
      {items.length > 0 && (
        <div className="hidden absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4 z-50">
          <h3 className="font-semibold mb-3">Shopping Cart</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {items.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × {formatPrice(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {items.length > 3 && (
            <p className="text-sm text-gray-500 mt-2">
              +{items.length - 3} more items
            </p>
          )}
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
            <Button className="w-full mt-3" asChild>
              <Link href="/cart">View Cart</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
