import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const products = [
  {
    id: 400,
    name: 'Зипка Classic',
    price: 4990,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg',
    category: 'Базовая коллекция',
    colors: ['Черный', 'Серый', 'Синий'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 401,
    name: 'Зипка Sport',
    price: 5490,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg',
    category: 'Спорт',
    colors: ['Черный', 'Белый', 'Красный'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 402,
    name: 'Зипка Premium',
    price: 6490,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg',
    category: 'Premium',
    colors: ['Серый', 'Синий', 'Белый'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 403,
    name: 'Зипка RT Logo',
    price: 5990,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg',
    category: 'RT Collection',
    colors: ['Черный', 'Синий', 'Красный'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  }
];

const Zips = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { addToCart, getTotalItems, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize && selectedColor) {
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        size: selectedSize,
        color: selectedColor
      });
      setSelectedProduct(null);
      setSelectedSize('');
      setSelectedColor('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50/30 to-white">
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
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/tshirts" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Футболки
              </Link>
              <Link to="/pants" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Штаны
              </Link>
              <Link to="/hoodies" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Толстовки
              </Link>
              <Link to="/zips" className="text-sm font-bold text-primary border-b-2 border-primary">
                Зипки
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

      <div className="container mx-auto px-6 py-12">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Зипки
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Спортивный шик
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
                    <Button 
                      className="w-full bg-white text-primary hover:bg-gray-100 font-semibold"
                      onClick={() => {
                        setSelectedProduct(product);
                        setSelectedSize(product.sizes[0]);
                        setSelectedColor(product.colors[0]);
                      }}
                    >
                      Добавить в корзину
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

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img 
              src={selectedProduct?.image} 
              alt={selectedProduct?.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
            
            <div>
              <label className="text-sm font-semibold mb-2 block">Размер:</label>
              <div className="flex gap-2 flex-wrap">
                {selectedProduct?.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Цвет:</label>
              <div className="flex gap-2 flex-wrap">
                {selectedProduct?.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-2xl font-bold text-primary mb-4">
                {selectedProduct?.price.toLocaleString('ru-RU')} ₽
              </p>
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Zips;
