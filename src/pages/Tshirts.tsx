import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Футболка Classic',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d964dbd6-eb5e-41be-a6de-8e5c4ce668e8.jpg',
    category: 'Базовая коллекция',
    colors: ['Фиолетовый', 'Черный', 'Белый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Футболка Oversize',
    price: 3290,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d964dbd6-eb5e-41be-a6de-8e5c4ce668e8.jpg',
    category: 'Premium',
    colors: ['Розовый', 'Серый'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Футболка Sport',
    price: 3490,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d964dbd6-eb5e-41be-a6de-8e5c4ce668e8.jpg',
    category: 'Спорт',
    colors: ['Оранжевый', 'Синий'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: 'Футболка Graphic',
    price: 3790,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d964dbd6-eb5e-41be-a6de-8e5c4ce668e8.jpg',
    category: 'Limited',
    colors: ['Фиолетовый', 'Розовый'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const Tshirts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/88faa3c3-5dae-48d2-8c68-61c7700d0fea.jpg" 
                alt="VIBE" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            
            <div className="flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/tshirts" className="text-sm font-bold text-primary border-b-2 border-primary">
                Футболки
              </Link>
              <Link to="/pants" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Штаны
              </Link>
              <Link to="/shoes" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Обувь
              </Link>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Футболки
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Стильные футболки для вашего гардероба
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold">
                      Выбрать размер
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-white border-0">
                  {product.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.colors.map((color) => (
                    <Badge key={color} variant="outline" className="text-xs">
                      {color}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Размеры:</span>
                  <span className="font-medium">{product.sizes.join(', ')}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tshirts;
