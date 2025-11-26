import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Кроссовки Urban',
    price: 8990,
    image: '/placeholder.svg',
    category: 'Стрит',
    colors: ['Белый', 'Черный'],
    sizes: ['38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 2,
    name: 'Кеды Classic',
    price: 6490,
    image: '/placeholder.svg',
    category: 'Базовая коллекция',
    colors: ['Белый', 'Серый', 'Черный'],
    sizes: ['36', '37', '38', '39', '40', '41', '42']
  },
  {
    id: 3,
    name: 'Ботинки Chelsea',
    price: 12990,
    image: '/placeholder.svg',
    category: 'Premium',
    colors: ['Черный', 'Коричневый'],
    sizes: ['39', '40', '41', '42', '43', '44']
  },
  {
    id: 4,
    name: 'Кроссовки Sport',
    price: 9990,
    image: '/placeholder.svg',
    category: 'Спорт',
    colors: ['Оранжевый', 'Синий', 'Серый'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45']
  }
];

const Shoes = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
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
              <Link to="/tshirts" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Футболки
              </Link>
              <Link to="/pants" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Штаны
              </Link>
              <Link to="/shoes" className="text-sm font-bold text-accent border-b-2 border-accent">
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
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            Обувь
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Стильная обувь для завершения образа
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
                    <Button className="w-full bg-white text-accent hover:bg-gray-100 font-semibold">
                      Выбрать размер
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-accent text-white border-0">
                  {product.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-accent mb-4">
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

export default Shoes;
