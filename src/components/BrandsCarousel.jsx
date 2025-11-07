import React from 'react';

const BrandsCarousel = () => {
  const brands = [
    { name: 'Ocean Soul', logo: '🌊' },
    { name: 'Street Surf Co.', logo: '🛹' },
    { name: 'Independent', logo: '⚡' },
    { name: 'Spitfire', logo: '🔥' },
    { name: 'Wave Vision', logo: '👓' },
    { name: 'Wave Gear', logo: '🎒' },
    { name: 'Armazém', logo: '⭐' },
    { name: 'Eco Surf', logo: '🌿' },
  ];

  // Duplicar para efeito infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-sm sm:text-base font-semibold text-gray-600 uppercase tracking-wider">
          Marcas Parceiras
        </h3>
      </div>

      {/* Carrossel infinito */}
      <div className="relative">
        {/* Gradiente esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Gradiente direita */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Faixa de marcas */}
        <div className="flex animate-scroll-brands">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8 flex flex-col items-center justify-center group"
            >
              {/* Logo (emoji ou poderia ser imagem) */}
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              
              {/* Nome da marca */}
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
