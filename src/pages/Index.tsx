import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/58050c04-e256-45d0-b664-427ba9ae7c8a.jpg',
    title: 'Футболки RT',
    subtitle: 'Яркие принты с логотипом RealTeam',
    link: '/tshirts'
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/1934b1ee-69b2-4668-b4f2-d8e0e61f6b98.jpg',
    title: 'Штаны RT',
    subtitle: 'Комфорт и стиль каждый день',
    link: '/pants'
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/5188df39-9fd1-4896-accf-a62f6de17921.jpg',
    title: 'Обувь RealTeam',
    subtitle: 'Кроссовки и кеды в наличии',
    link: '/shoes'
  },
  {
    id: 4,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/c4310033-8623-469d-adc9-84656a4dbac2.jpg',
    title: 'Толстовки RT',
    subtitle: 'Уютный стиль для команды',
    link: '/hoodies'
  },
  {
    id: 5,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg',
    title: 'Зипки RT',
    subtitle: 'Спортивный шик с молнией',
    link: '/zips'
  },
  {
    id: 6,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/636ad6af-07f2-4fb3-a85d-dbda10cb1a1f.jpg',
    title: 'Шорты RT',
    subtitle: 'Для тренировок и отдыха',
    link: '/shorts'
  },
  {
    id: 7,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/23b3505b-2986-4bd6-8e92-1f15658ef70d.jpg',
    title: 'Кепки RT',
    subtitle: 'Завершающий акцент образа',
    link: '/caps'
  },
  {
    id: 8,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/3e8affa1-762f-495b-976b-1719a74dad47.jpg',
    title: 'Сумки RT',
    subtitle: 'Стильные аксессуары',
    link: '/bags'
  },
  {
    id: 9,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/b4e352dc-0131-4593-aa85-85261f3eddff.jpg',
    title: 'Куртки RT',
    subtitle: 'Premium качество для команды',
    link: '/jackets'
  },
  {
    id: 10,
    image: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/58050c04-e256-45d0-b664-427ba9ae7c8a.jpg',
    title: 'RealTeam 2024',
    subtitle: 'Полная коллекция одежды',
    link: '/tshirts'
  }
];

const Index = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  emblaApi?.on('select', () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  });
  
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

      <section className="relative overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide flex-[0_0_100%] relative h-[80vh]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-2xl text-white/90 mb-8 animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.link}>
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform"
                    >
                      Смотреть
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { link: '/tshirts', icon: 'Shirt', title: 'Футболки', price: '2 990', bg: 'from-primary to-purple-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/58050c04-e256-45d0-b664-427ba9ae7c8a.jpg' },
              { link: '/pants', icon: 'Wind', title: 'Штаны', price: '4 790', bg: 'from-secondary to-pink-600', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/1934b1ee-69b2-4668-b4f2-d8e0e61f6b98.jpg' },
              { link: '/shoes', icon: 'Footprints', title: 'Обувь', price: '6 490', bg: 'from-accent to-orange-600', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/5188df39-9fd1-4896-accf-a62f6de17921.jpg' },
              { link: '/hoodies', icon: 'Package', title: 'Толстовки', price: '5 990', bg: 'from-blue-600 to-indigo-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/c4310033-8623-469d-adc9-84656a4dbac2.jpg' },
              { link: '/caps', icon: 'Crown', title: 'Кепки', price: '1 990', bg: 'from-purple-600 to-violet-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/23b3505b-2986-4bd6-8e92-1f15658ef70d.jpg' },
              { link: '/bags', icon: 'Briefcase', title: 'Сумки', price: '3 490', bg: 'from-red-600 to-rose-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/3e8affa1-762f-495b-976b-1719a74dad47.jpg' },
              { link: '/shorts', icon: 'Sun', title: 'Шорты', price: '2 490', bg: 'from-yellow-500 to-amber-600', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/636ad6af-07f2-4fb3-a85d-dbda10cb1a1f.jpg' },
              { link: '/jackets', icon: 'Codesandbox', title: 'Куртки', price: '8 990', bg: 'from-green-600 to-teal-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/b4e352dc-0131-4593-aa85-85261f3eddff.jpg' },
              { link: '/zips', icon: 'Zap', title: 'Зипки', price: '4 990', bg: 'from-cyan-600 to-blue-700', img: 'https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/0eb82b35-9ea9-4c18-9223-a8c24f1b10c4.jpg' },
            ].map((category) => (
              <Link key={category.link} to={category.link}>
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-64">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bg}`}></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <img 
                    src={category.img}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                    <Icon name={category.icon as any} size={48} className="text-white mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-white/90 text-sm">от {category.price} ₽</p>
                  </div>
                </Card>
              </Link>
            ))}
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
                <Icon name="BadgePercent" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Лучшие цены</h3>
              <p className="text-gray-600">Регулярные акции и скидки</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <img 
            src="https://cdn.poehali.dev/projects/448a64db-e1e2-400c-81a1-e7988c3fb78c/files/d7e64b32-027c-4c58-a185-2accbd3142c0.jpg" 
            alt="RealTeam" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-gray-400 mb-6">© 2024 RealTeam. Все права защищены</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;