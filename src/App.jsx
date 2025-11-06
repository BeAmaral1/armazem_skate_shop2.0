import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrdersProvider } from './context/OrdersContext';
import { ReviewsProvider } from './context/ReviewsContext';
import { CouponsProvider } from './context/CouponsContext';
import { NotificationsProvider } from './context/NotificationsContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { FAQProvider } from './context/FAQContext';
import { ReferralProvider } from './context/ReferralContext';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ReferralBanner from './components/ReferralBanner';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const OrderConfirmed = lazy(() => import('./pages/OrderConfirmed'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Profile = lazy(() => import('./pages/Profile'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const Addresses = lazy(() => import('./pages/Addresses'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const Orders = lazy(() => import('./pages/Orders'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const MyCoupons = lazy(() => import('./pages/MyCoupons'));
const Notifications = lazy(() => import('./pages/Notifications'));
const RecentlyViewed = lazy(() => import('./pages/RecentlyViewed'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Referrals = lazy(() => import('./pages/Referrals'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AuthProvider>
      <FAQProvider>
        <RecentlyViewedProvider>
          <NotificationsProvider>
            <CouponsProvider>
              <ReviewsProvider>
                <OrdersProvider>
                  <WishlistProvider>
                    <ReferralProvider>
                    <CartProvider>
          <Router>
            <ScrollToTop />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                },
                success: {
                  iconTheme: {
                    primary: '#10b981',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
            <div className="flex flex-col min-h-screen overflow-x-hidden">
              <Header />
              <ReferralBanner />
              <main className="flex-grow overflow-x-hidden">
                <Suspense fallback={<LoadingScreen />}>
                  <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/produtos" element={<Products />} />
                  <Route path="/produto/:id" element={<ProductDetail />} />
                  <Route path="/carrinho" element={<Cart />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/termos-uso" element={<TermsOfService />} />
                  <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* Rotas Protegidas */}
                  <Route path="/favoritos" element={
                    <PrivateRoute>
                      <Wishlist />
                    </PrivateRoute>
                  } />
                  <Route path="/checkout" element={
                    <PrivateRoute>
                      <Checkout />
                    </PrivateRoute>
                  } />
                  <Route path="/pedido-confirmado" element={
                    <PrivateRoute>
                      <OrderConfirmed />
                    </PrivateRoute>
                  } />
                  <Route path="/perfil" element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  } />
                  <Route path="/perfil/editar" element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  } />
                  <Route path="/perfil/enderecos" element={
                    <PrivateRoute>
                      <Addresses />
                    </PrivateRoute>
                  } />
                  <Route path="/perfil/senha" element={
                    <PrivateRoute>
                      <ChangePassword />
                    </PrivateRoute>
                  } />
                  <Route path="/pedidos" element={
                    <PrivateRoute>
                      <Orders />
                    </PrivateRoute>
                  } />
                  <Route path="/pedidos/:id" element={
                    <PrivateRoute>
                      <OrderDetail />
                    </PrivateRoute>
                  } />
                  <Route path="/cupons" element={
                    <PrivateRoute>
                      <MyCoupons />
                    </PrivateRoute>
                  } />
                  <Route path="/notificacoes" element={
                    <PrivateRoute>
                      <Notifications />
                    </PrivateRoute>
                  } />
                  <Route path="/perfil/vistos-recentemente" element={
                    <PrivateRoute>
                      <RecentlyViewed />
                    </PrivateRoute>
                  } />
                  <Route path="/indicar-amigos" element={
                    <PrivateRoute>
                      <Referrals />
                    </PrivateRoute>
                  } />
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              
              {/* Botões Flutuantes */}
              <BackToTop />
              <WhatsAppButton />
            </div>
          </Router>
                    </CartProvider>
                    </ReferralProvider>
                  </WishlistProvider>
                </OrdersProvider>
              </ReviewsProvider>
            </CouponsProvider>
          </NotificationsProvider>
        </RecentlyViewedProvider>
      </FAQProvider>
    </AuthProvider>
  );
}

export default App;
