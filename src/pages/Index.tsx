import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d7e64b32-027c-4c58-a185-2accbd3142c0.jpg" 
                alt="RealTeam" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold">RealTeam</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link to="/" className="text-sm font-bold text-primary border-b-2 border-primary">
                Главная
              </Link>
              <Link to="/tshirts" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Футболки
              </Link>
              <Link to="/pants" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Штаны
              </Link>
              <Link to="/shoes" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Обувь
              </Link>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <Icon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-scale-in">
            RealTeam
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
            Одежда для настоящей команды
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform"
            >
              <Link to="/tshirts">Смотреть коллекцию</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">
            Категории
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 animate-fade-in">
            Выбери свой стиль
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/tshirts">
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up cursor-pointer h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-700"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/58050c04-e256-45d0-b664-427ba9ae7c8a.jpg" 
                  alt="Футболки"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <Icon name="Shirt" size={64} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-bold text-white mb-2">Футболки</h3>
                  <p className="text-white/90 text-lg">от 2 990 ₽</p>
                </div>
              </Card>
            </Link>

            <Link to="/pants">
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up cursor-pointer h-96" style={{ animationDelay: '100ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-pink-600"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/1934b1ee-69b2-4668-b4f2-d8e0e61f6b98.jpg" 
                  alt="Штаны"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <Icon name="Wind" size={64} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-bold text-white mb-2">Штаны</h3>
                  <p className="text-white/90 text-lg">от 4 790 ₽</p>
                </div>
              </Card>
            </Link>

            <Link to="/shoes">
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up cursor-pointer h-96" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange-600"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <Icon name="Footprints" size={64} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-bold text-white mb-2">Обувь</h3>
                  <p className="text-white/90 text-lg">от 6 490 ₽</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим за 1-3 дня по всей России</p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Гарантия качества</h3>
              <p className="text-gray-600">30 дней на возврат без вопросов</p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Сделано с любовью</h3>
              <p className="text-gray-600">Каждая вещь создана с заботой</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d7e64b32-027c-4c58-a185-2accbd3142c0.jpg" 
                alt="RealTeam" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Одежда для настоящей команды
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/tshirts" className="text-gray-400 hover:text-white transition-colors">Футболки</Link></li>
                <li><Link to="/pants" className="text-gray-400 hover:text-white transition-colors">Штаны</Link></li>
                <li><Link to="/shoes" className="text-gray-400 hover:text-white transition-colors">Обувь</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 RealTeam. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;