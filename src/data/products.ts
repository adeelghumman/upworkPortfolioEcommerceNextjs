import { Product } from '@/types'
import { generateId } from '@/lib/utils'

export const sampleProducts: Product[] = [
  {
    id: generateId(),
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    stock: 25,
    featured: true,
    slug: 'wireless-bluetooth-headphones',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['wireless', 'bluetooth', 'headphones', 'audio'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '280g',
      'Color': 'Black'
    }
  },
  {
    id: generateId(),
    name: 'Smart Watch Series X',
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Compatible with iOS and Android.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    stock: 15,
    featured: true,
    slug: 'smart-watch-series-x',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['smartwatch', 'fitness', 'health', 'gps'],
    specifications: {
      'Display': '1.9" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: generateId(),
    name: 'Premium Coffee Maker',
    description: 'Professional-grade coffee maker with built-in grinder and programmable settings. Makes perfect coffee every time.',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop'
    ],
    category: 'Home & Kitchen',
    stock: 8,
    featured: false,
    slug: 'premium-coffee-maker',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['coffee', 'kitchen', 'appliance', 'grinder'],
    specifications: {
      'Capacity': '12 cups',
      'Material': 'Stainless Steel',
      'Features': 'Built-in Grinder, Timer',
      'Warranty': '2 years'
    }
  },
  {
    id: generateId(),
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    ],
    category: 'Clothing',
    stock: 50,
    featured: false,
    slug: 'organic-cotton-t-shirt',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['clothing', 'organic', 'cotton', 'sustainable'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine Washable',
      'Origin': 'Made in USA'
    }
  },
  {
    id: generateId(),
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Includes AC adapter and cable.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    stock: 30,
    featured: false,
    slug: 'wireless-phone-charger',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['wireless', 'charger', 'phone', 'qi'],
    specifications: {
      'Output': '15W Fast Charging',
      'Compatibility': 'Qi-enabled devices',
      'Input': 'USB-C',
      'Material': 'Aluminum'
    }
  },
  {
    id: generateId(),
    name: 'Gaming Mechanical Keyboard',
    description: 'Professional gaming keyboard with RGB lighting, mechanical switches, and customizable keys.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    stock: 12,
    featured: true,
    slug: 'gaming-mechanical-keyboard',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['gaming', 'keyboard', 'mechanical', 'rgb'],
    specifications: {
      'Switch Type': 'Cherry MX Blue',
      'Backlighting': 'RGB',
      'Connection': 'USB-C',
      'Layout': 'Full Size'
    }
  },
  {
    id: generateId(),
    name: 'Yoga Mat Premium',
    description: 'High-quality non-slip yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and fitness.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'
    ],
    category: 'Sports & Fitness',
    stock: 20,
    featured: false,
    slug: 'yoga-mat-premium',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['yoga', 'fitness', 'mat', 'exercise'],
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE (Eco-friendly)',
      'Size': '183cm x 61cm',
      'Weight': '1.2kg'
    }
  },
  {
    id: generateId(),
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours and hot for 12 hours.',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop'
    ],
    category: 'Sports & Fitness',
    stock: 35,
    featured: false,
    slug: 'stainless-steel-water-bottle',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['water', 'bottle', 'stainless', 'insulated'],
    specifications: {
      'Capacity': '750ml',
      'Material': '304 Stainless Steel',
      'Insulation': 'Double Wall Vacuum',
      'Lid Type': 'Leak-proof Sport Cap'
    }
  }
]

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for everyone',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    description: 'Everything for your home and kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
  },
  {
    id: 'sports-fitness',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    description: 'Gear for your active lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
]
