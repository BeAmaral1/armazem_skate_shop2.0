import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-sunset-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-4 left-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          {product.category}
        </div>
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-ocean-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-sunset-500 text-sunset-500'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews?.length || 0})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through mr-2">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="text-2xl font-bold text-ocean-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Button */}
        <Link
          to={`/produto/${product.id}`}
          className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          <ShoppingCart className="w-4 h-4" />
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
