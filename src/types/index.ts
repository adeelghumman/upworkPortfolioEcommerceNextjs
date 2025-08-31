export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  images: string[]
  category: string
  stock: number
  featured: boolean
  slug: string
  createdAt: Date
  updatedAt: Date
  tags?: string[]
  specifications?: Record<string, string>
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  imageUrl: string
  quantity: number
  slug: string
}

export interface User {
  id: string
  email: string
  name?: string
  image?: string
  role: 'user' | 'admin'
  addresses?: Address[]
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  userId: string
  name: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  createdAt: Date
  updatedAt: Date
  trackingNumber?: string
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl?: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export interface FilterOptions {
  category?: string
  priceRange?: [number, number]
  sort?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest'
  search?: string
}
