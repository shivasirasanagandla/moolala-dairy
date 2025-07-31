import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Clock, ShoppingCart, Play, Pause } from 'lucide-react';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 1.5rem;
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

const RightContent = styled.div`
  position: relative;
  z-index: 2;
`;

const MainTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
  }
`;

const HighlightedText = styled.span`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.2rem);
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
  }
`;

const LiveDeliveryTracker = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 2px solid #e2e8f0;
`;

const TrackerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #059669;
  font-weight: 600;
`;

const TrackerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const TrackerItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
`;

const TrackerValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const TrackerLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
`;

const InteractiveProductShowcase = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
`;

const ProductImage = styled.div`
  height: 300px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
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

const ProductTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const DynamicPricing = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #059669;
`;

const OriginalPrice = styled.span`
  font-size: 1.2rem;
  color: #94a3b8;
  text-decoration: line-through;
`;

const PriceTimer = styled.div`
  font-size: 0.875rem;
  color: #dc2626;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
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



const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <LeftContent>
          <MainTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pure <HighlightedText>Fresh Milk</HighlightedText> from Happy Cows
          </MainTitle>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the difference with our farm-fresh milk, delivered within 3 hours of milking. 
            No hormones, no antibiotics, just pure goodness from our indigenous Gir cows.
          </Subtitle>

          <LiveDeliveryTracker
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TrackerHeader>
              <Clock size={16} />
              <span>Live Delivery Tracker</span>
            </TrackerHeader>
            <TrackerContent>
              <TrackerItem>
                <TrackerValue>{formatTime(currentTime)}</TrackerValue>
                <TrackerLabel>Current Time</TrackerLabel>
              </TrackerItem>
              <TrackerItem>
                <TrackerValue>3h</TrackerValue>
                <TrackerLabel>Delivery Window</TrackerLabel>
              </TrackerItem>
            </TrackerContent>
          </LiveDeliveryTracker>
        </LeftContent>

        <RightContent>
          <InteractiveProductShowcase
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ProductImage>
              <ProductBadge>Premium Quality</ProductBadge>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🥛
              </motion.div>
            </ProductImage>
            
            <ProductTitle>Fresh Milk</ProductTitle>
            
            <DynamicPricing>
              <CurrentPrice>₹110</CurrentPrice>
              <OriginalPrice>₹130</OriginalPrice>
              <PriceTimer>Limited Time</PriceTimer>
            </DynamicPricing>
            
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>
              Pure, unprocessed milk with all natural probiotics intact. 
              Delivered fresh from our farm to your doorstep.
            </p>

                         <ActionButtons>
               <PrimaryButton onClick={() => setIsPlaying(!isPlaying)}>
                 {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                 {isPlaying ? 'Pause' : 'Start'} Live
               </PrimaryButton>
               <SecondaryButton>
                 <ShoppingCart size={16} />
                 Add to Cart
               </SecondaryButton>
             </ActionButtons>
           </InteractiveProductShowcase>
         </RightContent>
       </HeroContainer>
     </HeroSection>
   );
};

export default Hero; 