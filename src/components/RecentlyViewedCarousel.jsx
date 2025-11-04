import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import ProductCard from './ProductCard';

const RecentlyViewedCarousel = ({ limit = 6, showTitle = true, showControls = true }) => {
  const { getRecent, getCount, removeProduct, clearAll } = useRecentlyViewed();
  const scrollContainerRef = useRef(null);

  const recentProducts = getRecent(limit);
  const totalCount = getCount();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  if (recentProducts.length === 0) {
    return null; // Não exibir se não houver produtos
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showTitle && (
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                  Vistos Recentemente
                </h2>
                <p className="text-gray-600 text-sm">
                  {totalCount} {totalCount === 1 ? 'produto visto' : 'produtos vistos'}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {totalCount > 0 && (
                <button
                  onClick={() => {
                    if (confirm('Deseja limpar todo o histórico?')) {
                      clearAll();
                    }
                  }}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpar Tudo
                </button>
              )}
              
              {totalCount > limit && (
                <Link
                  to="/perfil/vistos-recentemente"
                  className="hidden sm:block text-sm font-medium text-dark-700 hover:text-dark-900 underline"
                >
                  Ver Todos ({totalCount})
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          {showControls && recentProducts.length > 3 && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Products Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {recentProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-64 sm:w-72 relative group/card"
              >
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeProduct(product.id);
                  }}
                  className="absolute top-2 right-2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity hover:bg-red-50"
                  title="Remover do histórico"
                >
                  <X className="w-4 h-4 text-gray-600 hover:text-red-600" />
                </button>

                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showControls && recentProducts.length > 3 && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>

        {/* Mobile View All */}
        {totalCount > limit && (
          <div className="flex justify-center mt-6 sm:hidden">
            <Link
              to="/perfil/vistos-recentemente"
              className="text-sm font-medium text-dark-700 hover:text-dark-900 underline"
            >
              Ver Todos ({totalCount})
            </Link>
          </div>
        )}

        {/* Mobile Clear All */}
        {totalCount > 0 && (
          <div className="flex justify-center mt-4 sm:hidden">
            <button
              onClick={() => {
                if (confirm('Deseja limpar todo o histórico?')) {
                  clearAll();
                }
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Limpar Tudo
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RecentlyViewedCarousel;
