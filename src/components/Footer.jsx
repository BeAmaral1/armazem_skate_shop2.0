import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Waves, Truck, Shield, CreditCard, Award, TrendingUp, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Benefits Bar */}
      <div className="bg-ocean-800 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <Truck className="w-5 h-5 text-ocean-200 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white">Frete Grátis acima de R$299</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-ocean-200 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white">Compra 100% Segura</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <CreditCard className="w-5 h-5 text-ocean-200 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white">Parcele em até 10x</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <Award className="w-5 h-5 text-ocean-200 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white">Produtos Originais</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-ocean-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white">Armazem Skate Shop</h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Onde o asfalto encontra a onda. Sua loja completa de surf e skate desde 2010.
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sunset-400" />
                <span className="text-xs">Riders desde 2010</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sunset-400" />
                <span className="text-xs">Equipamentos Pro Level</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Siga-nos nas redes</p>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold text-white mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Início</Link></li>
              <li><Link to="/produtos" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Contato</Link></li>
              <li><Link to="/login" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Minha Conta</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold text-white mb-3 sm:mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produtos?categoria=Surf" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><Waves className="w-4 h-4 text-ocean-400" /> Surf</Link></li>
              <li><Link to="/produtos?categoria=Skate" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><Zap className="w-4 h-4 text-sunset-400" /> Skate</Link></li>
              <li><Link to="/produtos?categoria=Vestuário" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Vestuário</Link></li>
              <li><Link to="/produtos?categoria=Acessórios" className="hover:text-ocean-400 transition-colors inline-flex items-center gap-2"><span className="text-ocean-400">›</span> Acessórios</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold text-white mb-3 sm:mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-ocean-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Av. Atlântica, 1500<br />Copacabana, Rio de Janeiro - RJ</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-ocean-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(21) 3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-ocean-400 flex-shrink-0" />
                <a href="mailto:contato@armazemskate.com.br" className="text-xs sm:text-sm hover:text-ocean-400 transition-colors">contato@armazemskate.com.br</a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Horário de Atendimento</p>
              <p className="text-xs text-white">Seg-Sex: 9h às 19h</p>
              <p className="text-xs text-white">Sáb: 9h às 14h</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-ocean-800 to-ocean-900 rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-ocean-600 rounded-full p-3">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                Receba nossas novidades
              </h4>
              <p className="text-sm sm:text-base text-ocean-100 mb-6 max-w-md mx-auto">
                Cadastre-se e fique por dentro de promoções exclusivas, lançamentos e dicas de surf e skate
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  required
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-ocean-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-400 text-white placeholder-ocean-200 text-sm sm:text-base"
                />
                <button type="submit" className="bg-sunset-600 hover:bg-sunset-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors whitespace-nowrap text-sm sm:text-base">
                  Inscrever-se
                </button>
              </form>
              <p className="text-xs text-ocean-200 mt-4">
                🌊 Ganhe 10% OFF na primeira compra!
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-3">Formas de Pagamento</p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">Visa</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">Mastercard</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">Elo</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">PIX</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs text-gray-300">Boleto</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 mb-3">&copy; {currentYear} Armazem Skate Shop. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-4">
            <a href="#" className="hover:text-ocean-400 transition-colors">Política de Privacidade</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-ocean-400 transition-colors">Termos de Uso</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-ocean-400 transition-colors">Trocas e Devoluções</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-ocean-400 transition-colors">Rastreio de Pedidos</a>
          </div>
          <div className="flex justify-center items-center gap-2 text-xs text-gray-500">
            <Waves className="w-4 h-4 text-ocean-600" />
            <span>Desenvolvido com</span>
            <span className="text-sunset-500">❤️</span>
            <span>para riders</span>
            <Zap className="w-4 h-4 text-sunset-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
