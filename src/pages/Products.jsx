import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, brands } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  
  const [filters, setFilters] = useState({
    category: searchParams.get('categoria') || 'Todos',
    brand: 'Todos',
    priceRange: 'Todos',
    sortBy: 'featured'
  });

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (filters.category !== 'Todos') {
      result = result.filter(p => p.category === filters.category);
    }

    // Filter by brand
    if (filters.brand !== 'Todos') {
      result = result.filter(p => p.brand === filters.brand);
    }

    // Filter by price range
    if (filters.priceRange !== 'Todos') {
      switch (filters.priceRange) {
        case 'Até R$ 100':
          result = result.filter(p => p.price <= 100);
          break;
        case 'R$ 100 - R$ 300':
          result = result.filter(p => p.price > 100 && p.price <= 300);
          break;
        case 'R$ 300 - R$ 500':
          result = result.filter(p => p.price > 300 && p.price <= 500);
          break;
        case 'Acima de R$ 500':
          result = result.filter(p => p.price > 500);
          break;
        default:
          break;
      }
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'Todos',
      brand: 'Todos',
      priceRange: 'Todos',
      sortBy: 'featured'
    });
    setSearchParams({});
  };

  const FilterSection = ({ title, options, filterKey, currentValue }) => (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center cursor-pointer group">
            <input
              type="radio"
              name={filterKey}
              value={option}
              checked={currentValue === option}
              onChange={(e) => updateFilter(filterKey, e.target.value)}
              className="w-4 h-4 text-ocean-600 focus:ring-ocean-500"
            />
            <span className="ml-2 text-gray-700 group-hover:text-ocean-600 transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
            Produtos
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-gray-900">
                  Filtros
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-ocean-600 hover:text-ocean-700 font-medium"
                >
                  Limpar
                </button>
              </div>

              <FilterSection
                title="Categoria"
                options={categories}
                filterKey="category"
                currentValue={filters.category}
              />

              <FilterSection
                title="Marca"
                options={brands}
                filterKey="brand"
                currentValue={filters.brand}
              />

              <FilterSection
                title="Faixa de Preço"
                options={['Todos', 'Até R$ 100', 'R$ 100 - R$ 300', 'R$ 300 - R$ 500', 'Acima de R$ 500']}
                filterKey="priceRange"
                currentValue={filters.priceRange}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn-outline flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>

              <div className="flex items-center gap-4 ml-auto">
                <label className="text-gray-700 text-sm">Ordenar por:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter('sortBy', e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                >
                  <option value="featured">Destaque</option>
                  <option value="name">Nome (A-Z)</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts
                    .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                {filteredProducts.length > productsPerPage && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.max(1, prev - 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Página anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => i + 1)
                        .filter(page => {
                          const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
                          if (totalPages <= 7) return true;
                          if (page === 1 || page === totalPages) return true;
                          if (Math.abs(page - currentPage) <= 1) return true;
                          if (page === 2 && currentPage <= 3) return true;
                          if (page === totalPages - 1 && currentPage >= totalPages - 2) return true;
                          return false;
                        })
                        .map((page, index, array) => (
                          <React.Fragment key={page}>
                            {index > 0 && array[index - 1] !== page - 1 && (
                              <span className="px-2 text-gray-400">...</span>
                            )}
                            <button
                              onClick={() => {
                                setCurrentPage(page);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`min-w-[40px] h-10 px-4 rounded-lg font-medium transition-colors ${
                                currentPage === page
                                  ? 'bg-ocean-600 text-white'
                                  : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {page}
                            </button>
                          </React.Fragment>
                        ))}

                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.min(Math.ceil(filteredProducts.length / productsPerPage), prev + 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Próxima página"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Limpar Filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
