import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Check, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="btn-primary">
          Voltar para Produtos
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert('Por favor, selecione um tamanho');
      return;
    }
    if (!selectedColor && product.colors.length > 1) {
      alert('Por favor, selecione uma cor');
      return;
    }

    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];

    for (let i = 0; i < quantity; i++) {
      addToCart(product, size, color);
    }

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-4 sm:py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8 overflow-x-auto">
          <Link to="/" className="hover:text-ocean-600 whitespace-nowrap">Início</Link>
          <span>/</span>
          <Link to="/produtos" className="hover:text-ocean-600 whitespace-nowrap">Produtos</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-16">
          {/* Images Gallery */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden mb-4 aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-ocean-600 ring-2 ring-ocean-200'
                      : 'border-gray-200 hover:border-ocean-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-xl p-8">
              <div className="text-sm text-ocean-600 uppercase tracking-wide mb-2">
                {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-sunset-500 text-sunset-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {product.rating} ({product.reviews.length} avaliações)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6 pb-6 border-b">
                {product.oldPrice && (
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg text-gray-400 line-through">
                      R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="bg-sunset-100 text-sunset-700 px-3 py-1 rounded-full text-sm font-bold">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                  </div>
                )}
                <div className="text-3xl sm:text-4xl font-bold text-ocean-600">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Em até 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')} sem juros
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Descrição</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Tamanho</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                          selectedSize === size
                            ? 'border-ocean-600 bg-ocean-50 text-ocean-600'
                            : 'border-gray-300 hover:border-ocean-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors.length > 1 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cor</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                          selectedColor === color
                            ? 'border-ocean-600 bg-ocean-50 text-ocean-600'
                            : 'border-gray-300 hover:border-ocean-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantidade</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-ocean-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-ocean-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    addedToCart
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-ocean-600 hover:bg-ocean-700 text-white'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-6 h-6" />
                      Adicionado ao Carrinho!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-6 h-6" />
                      Adicionar ao Carrinho
                    </>
                  )}
                </button>

                <div className="flex gap-2">
                  <button className="flex-1 btn-outline flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    <span className="hidden sm:inline">Favoritar</span>
                  </button>
                  <button className="flex-1 btn-outline flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    <span className="hidden sm:inline">Compartilhar</span>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 pt-6 border-t space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span>Em estoque - Envio imediato</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5" />
                  <span>Frete grátis acima de R$ 299</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5" />
                  <span>Troca e devolução em até 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Avaliações dos Clientes
              </h2>
              <div className="space-y-6">
                {product.reviews.map(review => (
                  <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-900">{review.author}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-sunset-500 text-sunset-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
