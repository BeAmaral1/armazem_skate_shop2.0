import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Wind, Shirt, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import RecentlyViewedCarousel from '../components/RecentlyViewedCarousel';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
import SEO from '../components/SEO';
import { products, blogPosts } from '../data/products';

const Home = () => {
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

  // Pegar campanha ativa (ou usar padrão)
  const activeCampaign = campaigns.find(c => c.active) || campaigns[campaigns.length - 1];

  return (
    <div className="w-full overflow-x-hidden">
      <SEO 
        title="Armazém Skate Shop - Surf e Skate"
        description="A melhor loja de surf e skate do Brasil. Pranchas, shapes, acessórios e vestuário das melhores marcas. Frete grátis acima de R$299."
      />
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activeCampaign.image}
            alt={activeCampaign.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 to-transparent"></div>
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

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Categorias em Destaque
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Surf',
                icon: Waves,
                image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
                color: 'ocean'
              },
              {
                name: 'Skate',
                icon: Wind,
                image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&q=80',
                color: 'sunset'
              },
              {
                name: 'Vestuário',
                icon: Shirt,
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
                color: 'sand'
              },
              {
                name: 'Acessórios',
                icon: Package,
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
                color: 'ocean'
              }
            ].map(category => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={`/produtos?categoria=${category.name}`}
                  className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${category.color}-900/90 to-transparent`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl sm:text-2xl font-heading font-bold">{category.name}</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm flex items-center gap-1">
                        Explorar <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              The Vibe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Últimas notícias e conteúdo sobre a cultura surf e skate
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="card group cursor-pointer">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-sm text-gray-500 mb-3">
                    {new Date(post.date).toLocaleDateString('pt-BR')} • {post.author}
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-dark-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <span className="text-dark-600 font-semibold inline-flex items-center gap-1 text-sm sm:text-base">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
