import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product, CartStore } from '@/types'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: Product, quantity = 1) => {
        const { items } = get()
        const existingItem = items.find(item => item.productId === product.id)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          })
        } else {
          const newItem: CartItem = {
            id: `cart-${product.id}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity,
            slug: product.slug,
          }
          set({ items: [...items, newItem] })
        }
      },
      
      removeItem: (productId: string) => {
        const { items } = get()
        set({ items: items.filter(item => item.productId !== productId) })
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        const { items } = get()
        if (quantity <= 0) {
          set({ items: items.filter(item => item.productId !== productId) })
        } else {
          set({
            items: items.map(item =>
              item.productId === productId
                ? { ...item, quantity }
                : item
            ),
          })
        }
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      getTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      
      getItemCount: () => {
        const { items } = get()
        return items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
