# ShopNext - Modern E-commerce Store

A fully functional, modern e-commerce store built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates a complete online shopping experience with cart management, product browsing, and responsive design.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse and search products with advanced filtering
- **Shopping Cart**: Add, remove, and manage items with persistent storage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Search & Filters**: Advanced product search with category and price filters
- **Product Details**: Detailed product pages with image galleries
- **User-Friendly Navigation**: Intuitive header with cart counter and search

### Technical Features
- **Next.js 14**: Latest Next.js with App Directory structure
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Zustand**: Lightweight state management for cart functionality
- **Responsive Images**: Optimized images with Next.js Image component
- **Component Architecture**: Reusable, modular React components
- **Modern Icons**: Lucide React icons for consistent iconography

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in build system

## 📁 Project Structure

```
nextjs-ecommerce/
├── src/
│   ├── app/                    # Next.js App Directory
│   │   ├── cart/              # Shopping cart page
│   │   ├── products/          # Products listing page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── ui/               # UI component library
│   │   ├── Header.tsx        # Site header with navigation
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   └── ProductCard.tsx   # Product display card
│   ├── data/                 # Sample data
│   │   └── products.ts       # Product and category data
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Helper functions
│   ├── store/                # State management
│   │   └── cart.ts           # Shopping cart store
│   ├── styles/               # Additional styles
│   │   └── globals.css       # Global CSS with Tailwind
│   └── types/                # TypeScript definitions
│       └── index.ts          # Type definitions
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project:**
   ```bash
   cd nextjs-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Category highlights
- Newsletter subscription
- Company features (shipping, security, returns)

### Products Page (`/products`)
- Complete product catalog
- Search functionality
- Category filtering
- Price range filtering
- Sort options (price, name, newest)
- Grid and list view modes
- Responsive design

### Shopping Cart (`/cart`)
- Cart item management
- Quantity adjustment
- Item removal
- Order summary with tax and shipping
- Persistent cart storage
- Empty cart state
- Responsive layout

### Product Cards
- Product image with hover effects
- Pricing and stock information
- Add to cart functionality
- Wishlist toggle
- Quick view options
- Category and rating display

## 🎨 UI Components

### Reusable Components
- **Button**: Various styles and sizes
- **Card**: Content containers with consistent styling
- **Input**: Form input fields
- **Header**: Navigation with cart counter
- **Footer**: Site information and links
- **ProductCard**: Product display component

### Design System
- Consistent color scheme
- Typography scale
- Spacing system
- Component variants
- Hover and focus states
- Loading and disabled states

## 🛒 Cart Management

The shopping cart uses Zustand for state management with the following features:

- **Persistent Storage**: Cart data is saved to localStorage
- **Add Items**: Add products with quantity
- **Update Quantity**: Increase/decrease item quantities
- **Remove Items**: Delete individual items
- **Clear Cart**: Remove all items
- **Calculations**: Automatic total and item count calculation

## 📦 Sample Data

The project includes comprehensive sample data:

- **8 Sample Products**: Electronics, clothing, home & kitchen, sports & fitness
- **4 Product Categories**: With descriptions and images
- **Product Specifications**: Detailed product information
- **Realistic Pricing**: Varied price ranges for testing filters
- **Stock Management**: Different stock levels for testing

## 🎯 Key Features Implemented

### Shopping Experience
- ✅ Product browsing and discovery
- ✅ Advanced search and filtering
- ✅ Shopping cart management
- ✅ Responsive product cards
- ✅ Category organization
- ✅ Price and stock display

### User Interface
- ✅ Modern, clean design
- ✅ Mobile-responsive layout
- ✅ Smooth animations and transitions
- ✅ Loading and empty states
- ✅ Consistent component library
- ✅ Accessible navigation

### Technical Implementation
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ State management with Zustand
- ✅ Optimized images and performance
- ✅ Modern CSS with Tailwind
- ✅ Next.js 14 App Directory structure

## 🔧 Customization

### Adding Products
Edit `src/data/products.ts` to add, modify, or remove products:

```typescript
{
  id: generateId(),
  name: 'Your Product Name',
  description: 'Product description',
  price: 99.99,
  imageUrl: 'your-image-url',
  images: ['image1', 'image2'],
  category: 'Your Category',
  stock: 10,
  featured: false,
  slug: 'your-product-slug',
  // ... other properties
}
```

### Styling
- Modify `tailwind.config.js` for custom design tokens
- Update `src/app/globals.css` for global styles
- Edit component styles using Tailwind classes

### Components
All components are in `src/components/` and can be customized:
- Modify existing components
- Add new UI components in `src/components/ui/`
- Update layout components for different designs

## 📈 Performance Optimizations

- **Next.js Image Optimization**: Automatic image resizing and optimization
- **Component Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging unused styles
- **State Management**: Lightweight Zustand for minimal bundle size
- **TypeScript**: Compile-time optimizations and error catching

## 🚀 Deployment

The project can be deployed on various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Other Platforms
Build the project and deploy the generated files:
```bash
npm run build
npm start
```

## 🤝 Contributing

This is a demonstration project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

Potential features to add:
- User authentication and accounts
- Product reviews and ratings
- Checkout and payment processing
- Order management
- Admin dashboard
- Database integration
- Email notifications
- Wishlist functionality
- Product recommendations
- Advanced analytics

## 📞 Support

For questions or support:
- Check the documentation above
- Review the code comments
- Create an issue for bugs or feature requests

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
