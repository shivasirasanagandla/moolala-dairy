import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Practices from './components/Practices';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import LocationModal from './components/LocationModal';
import Chatbot from './components/Chatbot';
import MyOrders from './components/MyOrders';
import AIEnhancedChatbot from './components/AIEnhancedChatbot';
import CheckoutModal from './components/CheckoutModal';
import CartModal from './components/CartModal';
import ToastNotification from './components/ToastNotification';
import ErrorBoundary from './components/ErrorBoundary';

// Types
interface User {
  type: 'email' | 'mobile';
  value: string;
  name?: string;
  id?: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  features?: string[];
  badge?: string;
  icon?: string;
  unit?: string;
}

interface Order {
  id: string;
  orderNumber: string;
  status: 'processing' | 'in-transit' | 'delivered' | 'cancelled';
  trackingNumber: string;
  deliveryAddress: string;
  deliveryDate: Date;
  items: CartItem[];
  total: number;
  createdAt: Date;
}

function App() {
  // State management with localStorage persistence
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('naturesdairy_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [location, setLocation] = useState<string>(() => {
    return localStorage.getItem('naturesdairy_location') || '';
  });
  
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('naturesdairy_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem('naturesdairy_orders');
    if (savedOrders) {
      const parsedOrders = JSON.parse(savedOrders);
      // Convert date strings back to Date objects
      return parsedOrders.map((order: any) => ({
        ...order,
        deliveryDate: new Date(order.deliveryDate),
        createdAt: new Date(order.createdAt)
      }));
    }
    return [];
  });

  // UI State
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [aiFeaturesEnabled] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
    isVisible: boolean;
    title?: string;
  }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  // Persist user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('naturesdairy_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('naturesdairy_user');
    }
  }, [user]);

  // Persist location to localStorage
  useEffect(() => {
    if (location) {
      localStorage.setItem('naturesdairy_location', location);
    } else {
      localStorage.removeItem('naturesdairy_location');
    }
  }, [location]);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('naturesdairy_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist orders to localStorage
  useEffect(() => {
    localStorage.setItem('naturesdairy_orders', JSON.stringify(orders));
  }, [orders]);

  const handleLogout = () => {
    setUser(null);
    setLocation('');
    setCart([]);
    setShowCart(false);
    setShowCheckout(false);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowLoginModal(false);
    // After login, show location selection
    setShowLocationModal(true);
  };

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setShowLocationModal(false);
  };

  const handleCartClick = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    setShowCart(true);
  };

  const handlePurchaseAttempt = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    if (!location) {
      setShowLocationModal(true);
      return;
    }
    // Proceed with purchase
    setShowCart(true);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOrderComplete = (orderData: Omit<Order, 'id' | 'orderNumber' | 'trackingNumber' | 'createdAt'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `order_${Date.now()}`,
      orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
      trackingNumber: `TRK-${Date.now().toString().slice(-8)}`,
      createdAt: new Date()
    };

    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setShowCheckout(false);
    
    // Show success message
    setToast({
      message: `Order placed successfully! Order Number: ${newOrder.orderNumber}`,
      type: 'success',
      isVisible: true,
      title: 'Order Confirmed'
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
        <Header 
          user={user} 
          onLogout={handleLogout} 
          cartCount={cartCount}
          onCartClick={handleCartClick}
          onLogin={() => setShowLoginModal(true)}
        />
        <div style={{ marginTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={
              <Products 
                cart={cart} 
                setCart={setCart} 
                showCart={showCart} 
                setShowCart={setShowCart}
                onPurchaseAttempt={handlePurchaseAttempt}
                onCheckout={handleCheckout}
                user={user}
              />
            } />
            <Route path="/practices" element={<Practices />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={
              user ? <MyOrders user={user} location={location} orders={orders} /> : <Navigate to="/" />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Chatbot */}
        {aiFeaturesEnabled ? (
          <AIEnhancedChatbot 
            isOpen={isChatbotOpen} 
            onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
            user={user}
          />
        ) : (
          <Chatbot 
            isOpen={isChatbotOpen} 
            onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
          />
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <LoginModal 
            onLogin={handleLogin} 
            onClose={() => setShowLoginModal(false)} 
          />
        )}

        {/* Location Selection Modal */}
        {showLocationModal && user && (
          <LocationModal 
            user={user} 
            onLocationSelect={handleLocationSelect} 
            onSkip={() => {
              setLocation('Default');
              setShowLocationModal(false);
            }}
            onClose={() => setShowLocationModal(false)}
          />
        )}

        {/* Cart Modal */}
        <CartModal
          cart={cart}
          setCart={setCart}
          isOpen={showCart}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
          user={user}
        />

        {/* Checkout Modal */}
        {showCheckout && (
          <CheckoutModal
            cart={cart}
            onClose={() => setShowCheckout(false)}
            onOrderComplete={handleOrderComplete}
          />
        )}

        {/* Toast Notification */}
        <ToastNotification
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
          title={toast.title}
        />
      </div>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App; 