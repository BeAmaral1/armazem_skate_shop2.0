import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Wind, Shirt, Package, Clock, Eye, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import RecentlyViewedCarousel from '../components/RecentlyViewedCarousel';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
import BrandsCarousel from '../components/BrandsCarousel';
import SEO from '../components/SEO';
import { products, drops } from '../data/products';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  // Sistema de Campanhas Sazonais - Altere facilmente aqui!
  const campaigns = [
    {
      id: 'esquenta-verao',
      title: 'Esquenta Verão',
      subtitle: 'Armazém Skate Shop',
      description: 'Prepare-se para o verão com até 40% OFF em pranchas e acessórios!',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80',
      active: true,
    },
    {
      id: 'liquidacao-inverno',
      title: '❄️ Liquidação de Inverno',
      subtitle: 'Armazém Skate Shop',
      description: 'Mega liquidação! Até 70% OFF em vestuário e acessórios de inverno',
      image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=1920&q=80',
      active: false,
    },
    {
      id: 'black-friday',
      title: '🔥 Black Friday Armazém',
      subtitle: 'Surf & Skate',
      description: 'Os melhores preços do ano! Até 50% OFF em TUDO + Frete Grátis',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80',
      active: false,
    },
    {
      id: 'volta-as-aulas',
      title: '🎒 Volta às Aulas',
      subtitle: 'Armazém Skate Shop',
      description: 'Começe o ano com estilo! 30% OFF em mochilas, ténis e skates',
      image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1920&q=80',
      active: false,
    },
    {
      id: 'dia-dos-pais',
      title: '👨‍👦 Especial Dia dos Pais',
      subtitle: 'Armazém Skate Shop',
      description: 'Presenteie o paizão com os melhores produtos! Kits especiais até 40% OFF',
      image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=1920&q=80',
      active: false,
    },
    {
      id: 'lancamento-colecao',
      title: '✨ Nova Coleção 2025',
      subtitle: 'Armazém Skate Shop',
      description: 'Confira os lançamentos da temporada! Estilo e performance para você',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1920&q=80',
      active: false,
    },
    {
      id: 'padrao',
      title: 'Onde o asfalto encontra a onda',
      subtitle: '',
      description: 'As melhores marcas de surf e skate em um só lugar',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80',
      active: false,
    },
  ];

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campaigns.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [campaigns.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campaigns.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const activeCampaign = campaigns[currentSlide];

  return (
    <div className="w-full overflow-x-hidden">
      <SEO 
        title="Armazém Skate Shop - Surf e Skate"
        description="A melhor loja de surf e skate do Brasil. Pranchas, shapes, acessórios e vestuário das melhores marcas. Frete grátis acima de R$299."
      />
      {/* Hero Carrossel Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden group">
        {/* Slides */}
        {campaigns.map((campaign, index) => (
          <div
            key={campaign.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 to-transparent"></div>
          </div>
        ))}

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {campaigns.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-2xl animate-slide-in-up">
            {activeCampaign.subtitle && (
              <div className="mb-2 flex items-center gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {activeCampaign.subtitle}
                </span>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              {activeCampaign.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              {activeCampaign.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/produtos" className="btn-primary">
                Compre Agora
              </Link>
              <Link to="/sobre" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-dark-600">
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Destaques da Semana
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Confira nossa seleção especial de produtos em destaque
            </p>
          </div>
          
          {/* Carrossel de Produtos em Destaque */}
          <FeaturedProductsCarousel products={featuredProducts} />
          
          <div className="text-center mt-10">
            <Link to="/produtos" className="btn-primary inline-flex items-center gap-2">
              Ver Todos os Produtos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recently Viewed Products */}
      <RecentlyViewedCarousel limit={6} />

      {/* Categories - Circular Design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-2">
              Explore por Categoria
            </h2>
            <p className="text-gray-600">Encontre exatamente o que você precisa</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              {
                name: 'Surf',
                icon: Waves,
                image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&q=80',
                gradient: 'from-blue-400 to-cyan-500'
              },
              {
                name: 'Skate',
                icon: Wind,
                image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=400&q=80',
                gradient: 'from-orange-400 to-red-500'
              },
              {
                name: 'Vestuário',
                icon: Shirt,
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                name: 'Acessórios',
                icon: Package,
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                name: 'Pranchas',
                icon: Waves,
                image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&q=80',
                gradient: 'from-indigo-400 to-blue-500'
              },
              {
                name: 'Shapes',
                icon: Wind,
                image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974c9a5?w=400&q=80',
                gradient: 'from-yellow-400 to-orange-500'
              }
            ].map(category => (
              <Link
                key={category.name}
                to={`/produtos?categoria=${category.name}`}
                className="group flex flex-col items-center"
              >
                {/* Círculo com imagem */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4">
                  {/* Anel gradiente externo */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} p-1 group-hover:scale-110 transition-transform duration-300`}>
                    {/* Círculo interno branco */}
                    <div className="w-full h-full rounded-full bg-white p-1">
                      {/* Imagem circular */}
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Efeito de brilho ao hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                </div>
                
                {/* Nome da categoria */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-dark-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carrossel de Marcas */}
      <BrandsCarousel />

      {/* Drops/Collections Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-gray-400">
                Exclusivo
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-4">
              Latest Drops
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Coleções exclusivas das melhores marcas. Estoque limitado.
            </p>
          </div>
          {/* Grid: Mobile 2 colunas, Tablet 3, Desktop 4 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {drops.map(drop => (
              <Link 
                key={drop.id} 
                to={`/produtos?brand=${encodeURIComponent(drop.brand)}`}
                className="card group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden border-2 border-transparent hover:border-white"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Drop Number - Responsivo */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white/20 leading-none">
                      #{drop.dropNumber}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span className={`
                      px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md
                      ${drop.status === 'Disponível' ? 'bg-green-500/90 text-white' : ''}
                      ${drop.status === 'Em Breve' ? 'bg-yellow-500/90 text-black' : ''}
                      ${drop.status === 'Esgotado' ? 'bg-red-500/90 text-white' : ''}
                      ${drop.status === 'Últimas Unidades' ? 'bg-orange-500/90 text-white' : ''}
                    `}>
                      {drop.status}
                    </span>
                  </div>

                  {/* Informações sobre a imagem */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <div className="text-white">
                      <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1 sm:mb-2 text-gray-300 truncate">
                        {drop.subtitle}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-black mb-1 leading-tight">
                        {drop.title}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm flex-wrap">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                          {drop.itemCount} {drop.itemCount === 1 ? 'item' : 'itens'}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-bold whitespace-nowrap text-xs sm:text-sm">
                          R$ {drop.startPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 bg-white">
                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {drop.description}
                  </p>

                  {/* Categoria e Data */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4 gap-2">
                    <span className={`
                      px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-semibold text-[10px] sm:text-xs whitespace-nowrap
                      ${drop.colorTheme === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                      ${drop.colorTheme === 'orange' ? 'bg-orange-100 text-orange-700' : ''}
                      ${drop.colorTheme === 'green' ? 'bg-green-100 text-green-700' : ''}
                      ${drop.colorTheme === 'purple' ? 'bg-purple-100 text-purple-700' : ''}
                    `}>
                      {drop.category}
                    </span>
                    <span className="text-[10px] sm:text-xs whitespace-nowrap">
                      {drop.releaseDate}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <span className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wide group-hover:text-black transition-colors">
                      Ver Coleção
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
