import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Milk, ShoppingCart, Leaf, Clock, TrendingUp, Package, Zap, Calendar, CreditCard } from 'lucide-react';


const ProductsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProductTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.25rem;
    margin-bottom: 1.5rem;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#f59e0b' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border: 2px solid ${props => props.active ? '#f59e0b' : '#e2e8f0'};
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    gap: 0.25rem;
  }
`;

const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProductBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #059669;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ProductContent = styled.div`
  padding: 2rem;
`;

const ProductTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTag = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const PricingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PriceInfo = styled.div``;

const CurrentPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #059669;
`;

const OriginalPrice = styled.div`
  font-size: 1rem;
  color: #94a3b8;
  text-decoration: line-through;
`;

const SubscriptionToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: transform 0.3s ease;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }

  input:checked + & {
    background: #f59e0b;
  }
`;

const ToggleInput = styled.input`
  display: none;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: #1e293b;
  border: 2px solid #e2e8f0;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #f59e0b;
    color: #f59e0b;
  }
`;

const ProductConstraints = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const ConstraintItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;

  svg {
    color: #f59e0b;
  }
`;

const ComparisonModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 600;
  color: #1e293b;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #64748b;
`;

const Toast = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;
  max-width: 300px;
  border: 1px solid #e2e8f0;
  color: #1e293b;
  font-weight: 500;
`;





interface ProductsProps {
  cart: Array<{
    id: number, 
    name: string, 
    price: number, 
    quantity: number,
    description?: string,
    features?: string[],
    badge?: string,
    icon?: string,
    unit?: string
  }>;
  setCart: React.Dispatch<React.SetStateAction<Array<{
    id: number, 
    name: string, 
    price: number, 
    quantity: number,
    description?: string,
    features?: string[],
    badge?: string,
    icon?: string,
    unit?: string
  }>>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  onPurchaseAttempt?: () => void;
  onCheckout?: () => void;
  user?: { type: 'email'|'mobile', value: string } | null;
}

const Products: React.FC<ProductsProps> = ({ cart, setCart, showCart, setShowCart, onPurchaseAttempt, onCheckout, user }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [showComparison, setShowComparison] = useState(false);
  const [subscriptionMode, setSubscriptionMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');

  const showToastNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddToCart = (product: any) => {
    // Check if user is logged in
    if (!user) {
      onPurchaseAttempt?.();
      return;
    }

    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(prev => prev.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      showToastNotification(`${product.name} quantity updated in cart!`, 'success');
    } else {
      setCart(prev => [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        quantity: 1,
        description: product.description,
        features: product.features,
        badge: product.badge,
        icon: product.icon,
        unit: product.unit
      }]);
      showToastNotification(`${product.name} added to cart!`, 'success');
    }
  };

  const handleBuyNow = (product: any) => {
    // Check if user is logged in
    if (!user) {
      onPurchaseAttempt?.();
      return;
    }

    // Add product to cart with quantity 1
    const productToAdd = { 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: 1,
      description: product.description,
      features: product.features,
      badge: product.badge,
      icon: product.icon,
      unit: product.unit
    };

    // Clear cart and add only this product
    setCart([productToAdd]);
    onCheckout?.();
    showToastNotification(`Proceeding to checkout for ${product.name}!`, 'success');
  };

  const products = [
    // Milk Products
    {
      id: 1,
      name: 'Fresh Milk',
      description: 'Pure, unprocessed milk with all natural probiotics intact. Delivered within 3 hours of milking.',
      price: 135,
      originalPrice: 150,
              features: ['Organic', 'No Hormones', '3-Hour Delivery', 'Natural Protein'],
      category: 'milk',
      badge: 'Premium',
      icon: '🥛',
      minOrder: 1,
      maxOrder: 10,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '24 hours'
    },
    {
      id: 2,
      name: 'Toned Milk',
      description: 'Low-fat milk with reduced fat content while maintaining nutritional value.',
      price: 120,
      originalPrice: 135,
              features: ['Low Fat', 'High Protein', 'Natural Protein', 'Fresh Daily'],
      category: 'milk',
      badge: 'Toned',
      icon: '🥛',
      minOrder: 1,
      maxOrder: 10,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '24 hours'
    },
    {
      id: 3,
      name: 'Full Cream Milk',
      description: 'Rich, creamy milk with natural fat content for maximum nutrition.',
      price: 150,
      originalPrice: 165,
              features: ['Full Cream', 'Rich Flavor', 'Natural Protein', 'Natural Fat'],
      category: 'milk',
      badge: 'Full Cream',
      icon: '🥛',
      minOrder: 1,
      maxOrder: 10,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '24 hours'
    },
    {
      id: 4,
      name: 'Curd (Dahi)',
      description: 'Traditional curd made from milk, rich in probiotics and natural cultures.',
      price: 80,
      originalPrice: 90,
              features: ['Probiotics', 'Traditional', 'Natural Protein', 'Natural Cultures'],
      category: 'milk',
      badge: 'Traditional',
      icon: '🍶',
      minOrder: 1,
      maxOrder: 5,
      unit: 'kg',
      availability: 'Daily',
      shelfLife: '48 hours'
    },
    {
      id: 5,
      name: 'Buttermilk',
      description: 'Refreshing buttermilk made from curd, perfect for digestion.',
      price: 60,
      originalPrice: 70,
              features: ['Digestive', 'Refreshing', 'Natural Protein', 'Natural'],
      category: 'milk',
      badge: 'Digestive',
      icon: '🥤',
      minOrder: 1,
      maxOrder: 5,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '24 hours'
    },

    // Ghee & Oils
    {
      id: 6,
      name: 'Organic Ghee',
      description: 'Traditional Vedic method ghee with rich, nutty flavor from milk.',
      price: 3000,
      originalPrice: 3500,
      features: ['Vedic Method', 'Pure', 'Rich Flavor', 'Traditional'],
      category: 'ghee',
      badge: 'Traditional',
      icon: '🧈',
      minOrder: 1,
      maxOrder: 3,
      unit: 'kg',
      availability: 'Weekly',
      shelfLife: '12 months'
    },
    {
      id: 7,
      name: 'Butter',
      description: 'Pure butter made from cream, perfect for cooking and spreading.',
      price: 450,
      originalPrice: 500,
      features: ['Pure', 'Natural', 'Rich Flavor', 'Versatile'],
      category: 'ghee',
      badge: 'Pure',
      icon: '🧈',
      minOrder: 1,
      maxOrder: 5,
      unit: 'kg',
      availability: 'Daily',
      shelfLife: '2 weeks'
    },
    {
      id: 8,
      name: 'Cream',
      description: 'Rich, thick cream from milk, perfect for desserts and coffee.',
      price: 200,
      originalPrice: 220,
              features: ['Rich', 'Thick', 'Natural Protein', 'Natural'],
      category: 'ghee',
      badge: 'Premium',
      icon: '🍦',
      minOrder: 1,
      maxOrder: 3,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '48 hours'
    },

    // Fresh Products
    {
      id: 9,
      name: 'Fresh Paneer',
      description: 'Fresh cottage cheese made from milk, perfect for Indian dishes.',
      price: 200,
      originalPrice: 250,
              features: ['Fresh Made', 'No Preservatives', 'Natural Protein', 'Traditional'],
      category: 'paneer',
      badge: 'Fresh Made',
      icon: '🧀',
      minOrder: 1,
      maxOrder: 5,
      unit: 'kg',
      availability: 'Daily',
      shelfLife: '5 days'
    },
    {
      id: 10,
      name: 'Cheese',
      description: 'Artisanal cheese made with whole, raw milk, aged naturally.',
      price: 350,
      originalPrice: 400,
              features: ['Artisanal', 'No Preservatives', 'Aged', 'Natural Protein'],
      category: 'paneer',
      badge: 'Artisanal',
      icon: '🧀',
      minOrder: 1,
      maxOrder: 3,
      unit: 'kg',
      availability: 'Weekly',
      shelfLife: '2 weeks'
    },

    {
      id: 11,
      name: 'Malai',
      description: 'Fresh cream layer from milk, perfect for desserts and sweets.',
      price: 180,
      originalPrice: 200,
              features: ['Fresh', 'Rich', 'Natural Protein', 'Dessert Ready'],
      category: 'paneer',
      badge: 'Fresh',
      icon: '🍦',
      minOrder: 1,
      maxOrder: 3,
      unit: 'kg',
      availability: 'Daily',
      shelfLife: '48 hours'
    },

    // Specialty Products

    {
      id: 12,
      name: 'Lassi',
      description: 'Refreshing yogurt-based drink made from curd with natural flavors.',
      price: 100,
      originalPrice: 120,
              features: ['Refreshing', 'Natural', 'Natural Protein', 'Flavored'],
      category: 'specialty',
      badge: 'Refreshing',
      icon: '🥤',
      minOrder: 1,
      maxOrder: 5,
      unit: 'L',
      availability: 'Daily',
      shelfLife: '24 hours'
    },

  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  const subscriptionDiscount = 0.15; // 15% discount for subscription

  return (
    <ProductsSection id="products">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Our Premium Products</SectionTitle>
          <SectionSubtitle>
            Experience the purest dairy products, crafted with care from our indigenous cows. 
            Each product is delivered fresh within 3 hours of production.

          </SectionSubtitle>
        </SectionHeader>

        <ProductTabs>
          <TabButton 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            <Package size={16} />
            All Products
          </TabButton>
          <TabButton 
            active={activeTab === 'milk'} 
            onClick={() => setActiveTab('milk')}
          >
            <Milk size={16} />
            Milk Products
          </TabButton>
          <TabButton 
            active={activeTab === 'ghee'} 
            onClick={() => setActiveTab('ghee')}
          >
            <Leaf size={16} />
            Ghee & Oils
          </TabButton>
          <TabButton 
            active={activeTab === 'paneer'} 
            onClick={() => setActiveTab('paneer')}
          >
            <TrendingUp size={16} />
            Fresh Products
          </TabButton>
          <TabButton 
            active={activeTab === 'specialty'} 
            onClick={() => setActiveTab('specialty')}
          >
            <Zap size={16} />
            Specialty
          </TabButton>
        </ProductTabs>

        <ProductsGrid
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductImage>
                <ProductBadge>{product.badge}</ProductBadge>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontSize: '4rem' }}
                >
                  {product.icon}
                </motion.div>
              </ProductImage>

              <ProductContent>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>

                <ProductFeatures>
                  {product.features.map((feature, idx) => (
                    <FeatureTag key={idx}>{feature}</FeatureTag>
                  ))}
                </ProductFeatures>

                <ProductConstraints>
                  <ConstraintItem>
                    <Clock size={14} />
                    <span>Min: {product.minOrder} {product.unit}</span>
                  </ConstraintItem>
                  <ConstraintItem>
                    <Package size={14} />
                    <span>Max: {product.maxOrder} {product.unit}</span>
                  </ConstraintItem>
                  <ConstraintItem>
                    <Calendar size={14} />
                    <span>{product.availability}</span>
                  </ConstraintItem>
                  <ConstraintItem>
                    <Zap size={14} />
                    <span>Shelf: {product.shelfLife}</span>
                  </ConstraintItem>
                </ProductConstraints>

                <SubscriptionToggle>
                  <span>Subscribe & Save</span>
                  <ToggleSwitch>
                    <ToggleInput 
                      type="checkbox" 
                      checked={subscriptionMode}
                      onChange={(e) => setSubscriptionMode(e.target.checked)}
                    />
                  </ToggleSwitch>
                </SubscriptionToggle>

                <PricingSection>
                  <PriceInfo>
                    <CurrentPrice>
                      ₹{subscriptionMode 
                        ? Math.round(product.price * (1 - subscriptionDiscount))
                        : product.price
                      }
                    </CurrentPrice>
                    {product.originalPrice > product.price && (
                      <OriginalPrice>₹{product.originalPrice}</OriginalPrice>
                    )}
                  </PriceInfo>
                  {subscriptionMode && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ 
                        background: '#fef3c7', 
                        color: '#92400e',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}
                    >
                      Save 15%
                    </motion.div>
                  )}
                </PricingSection>

                <ActionButtons>
                  <PrimaryButton onClick={() => handleAddToCart(product)}>
                    <ShoppingCart size={16} />
                    {subscriptionMode ? 'Subscribe' : 'Add to Cart'}
                  </PrimaryButton>
                  <SecondaryButton 
                    onClick={() => handleBuyNow(product)}
                    style={{
                      background: '#f59e0b',
                      borderColor: '#f59e0b',
                      color: 'white'
                    }}
                  >
                    <CreditCard size={16} />
                    Buy Now
                  </SecondaryButton>
                </ActionButtons>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SecondaryButton onClick={() => setShowComparison(true)}>
            <Zap size={16} />
            Compare Products
          </SecondaryButton>
        </motion.div>

        <AnimatePresence>
          {showComparison && (
            <ComparisonModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComparison(false)}
            >
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Product Comparison</h3>
                <ComparisonTable>
                  <thead>
                    <tr>
                      <TableHeader>Feature</TableHeader>
                      <TableHeader>Fresh Milk</TableHeader>
                      <TableHeader>Desi Ghee</TableHeader>
                      <TableHeader>Fresh Paneer</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableCell>Price</TableCell>
                      <TableCell>₹135/litre</TableCell>
                      <TableCell>₹3000/litre</TableCell>
                      <TableCell>₹200/250g</TableCell>
                    </tr>
                    <tr>
                      <TableCell>Delivery</TableCell>
                      <TableCell>3 hours</TableCell>
                      <TableCell>3 hours</TableCell>
                      <TableCell>3 hours</TableCell>
                    </tr>
                    <tr>
                      <TableCell>Processing</TableCell>
                      <TableCell>Unprocessed</TableCell>
                      <TableCell>Vedic method</TableCell>
                      <TableCell>Artisanal</TableCell>
                    </tr>
                    <tr>
                      <TableCell>Preservatives</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>None</TableCell>
                    </tr>
                  </tbody>
                </ComparisonTable>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <PrimaryButton onClick={() => setShowComparison(false)}>
                    Close Comparison
                  </PrimaryButton>
                </div>
              </ModalContent>
            </ComparisonModal>
          )}
        </AnimatePresence>



        {/* Toast Notifications */}
        <AnimatePresence>
          {showToast && (
            <Toast
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {toastType === 'success' && <ShoppingCart size={16} color="#10b981" />}
              {toastType === 'error' && <ShoppingCart size={16} color="#dc2626" />}
              {toastType === 'info' && <Package size={16} color="#3b82f6" />}
              {toastMessage}
            </Toast>
          )}
        </AnimatePresence>
      </Container>
    </ProductsSection>
  );
};

export default Products; 