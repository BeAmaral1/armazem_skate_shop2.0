import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Wind, Shirt, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import RecentlyViewedCarousel from '../components/RecentlyViewedCarousel';
import SEO from '../components/SEO';
import { products, blogPosts } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

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
            src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80"
            alt="Surf Hero"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-2xl animate-slide-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Onde o asfalto encontra a onda
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              As melhores marcas de surf e skate em um só lugar
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('pt-BR')} • {post.author}
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-dark-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-dark-600 font-semibold inline-flex items-center gap-1">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-dark-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Cadastre-se e receba em primeira mão nossas promoções e lançamentos
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <button type="submit" className="btn-secondary whitespace-nowrap">
                Inscrever-se
              </button>
            </form>
            <p className="text-sm text-gray-200 mt-4">
              Não enviamos spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
