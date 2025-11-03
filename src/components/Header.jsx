import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Waves } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ocean-700 text-white py-2 px-4 text-xs sm:text-sm text-center">
        <p className="hidden sm:block">Frete grátis para compras acima de R$ 299 | Parcele em até 10x sem juros</p>
        <p className="sm:hidden">Frete grátis acima de R$ 299</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-ocean-600 group-hover:text-sunset-600 transition-colors flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 truncate">Armazem Skate Shop</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Onde o asfalto encontra a onda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-ocean-600 border-b-2 border-ocean-600'
                    : 'text-gray-700 hover:text-ocean-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors" title="Buscar">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* User */}
            <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Minha Conta">
              <User className="w-5 h-5 text-gray-700" />
            </Link>

            {/* Cart */}
            <Link to="/carrinho" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors" title="Carrinho">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-sunset-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded transition-colors ${
                    isActive(link.path)
                      ? 'bg-ocean-50 text-ocean-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
