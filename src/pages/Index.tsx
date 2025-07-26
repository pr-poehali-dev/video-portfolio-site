import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const videoCategories = [
    {
      title: "Предметная съемка",
      description: "Профессиональная съемка товаров и продукции",
      icon: "Package",
      videos: 12
    },
    {
      title: "Репортажная съемка",
      description: "Мероприятия и события в живом формате",
      icon: "Camera",
      videos: 8
    },
    {
      title: "Говорящая голова",
      description: "Интервью, презентации, обучающий контент",
      icon: "User",
      videos: 15
    },
    {
      title: "Остальное",
      description: "Творческие проекты и эксперименты",
      icon: "Film",
      videos: 6
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">ВИДЕОГРАФ</div>
          <div className="flex gap-6">
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">Обо мне</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-light mb-6 tracking-tight">
            ВИДЕОГРАФИЯ<br />
            <span className="font-normal">ВЫСОКОГО УРОВНЯ</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Репортажная съемка мероприятий и событий. Создаю видео, которые рассказывают истории и вызывают эмоции.
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть работы
          </Button>
        </div>
      </section>

      {/* Video Categories */}
      <section id="portfolio" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">КАТЕГОРИИ РАБОТ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors">
                    <Icon name={category.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                  <div className="text-xs text-gray-500 mb-4">{category.videos} видео</div>
                  <Button variant="outline" className="w-full">
                    Смотреть работы
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">ИЗБРАННЫЕ РАБОТЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Корпоративное мероприятие", category: "Репортаж", image: "img/e6539e4b-7933-4c43-ac64-102f04cd2ba4.jpg" },
              { id: 2, title: "Студийная съемка продукта", category: "Предметка", image: "img/6a2f648f-1e03-498f-a6d9-5d803903931e.jpg" },
              { id: 3, title: "Профессиональное оборудование", category: "Техника", image: "img/07b458a8-7e2a-4316-9636-59e9e97b738a.jpg" },
              { id: 4, title: "Конференция 2024", category: "Репортаж", image: "img/e6539e4b-7933-4c43-ac64-102f04cd2ba4.jpg" },
              { id: 5, title: "Рекламная съемка", category: "Предметка", image: "img/6a2f648f-1e03-498f-a6d9-5d803903931e.jpg" },
              { id: 6, title: "Интервью с экспертом", category: "Говорящая голова", image: "img/07b458a8-7e2a-4316-9636-59e9e97b738a.jpg" }
            ].map((item) => (
              <div key={item.id} className="group cursor-pointer animate-fade-in">
                <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4 relative hover-scale">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">Профессиональная видеосъемка</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">О РАБОТЕ</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Специализируюсь на репортажной съемке мероприятий и событий. В моем арсенале 
            профессиональное оборудование и многолетний опыт работы с различными форматами. 
            Каждый проект — это уникальная история, которую я рассказываю через видео.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-light mb-2">50+</div>
              <div className="text-gray-600">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">5</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">СВЯЗАТЬСЯ СО МНОЙ</h2>
          <p className="text-xl text-gray-300 mb-12">
            Готов обсудить ваш проект и воплотить идеи в жизнь
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Mail" size={24} className="mx-auto mb-3 text-gray-300" />
              <div className="text-sm text-gray-400">Email</div>
              <div>contact@videographer.com</div>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={24} className="mx-auto mb-3 text-gray-300" />
              <div className="text-sm text-gray-400">Телефон</div>
              <div>+7 (999) 123-45-67</div>
            </div>
            <div className="text-center">
              <Icon name="MessageCircle" size={24} className="mx-auto mb-3 text-gray-300" />
              <div className="text-sm text-gray-400">Telegram</div>
              <div>@videographer</div>
            </div>
          </div>
          
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
            Заказать съемку
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Видеограф. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;