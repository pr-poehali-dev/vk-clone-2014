import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [likes, setLikes] = useState({ post1: 15, post2: 8 });
  const [isOnline, setIsOnline] = useState(true);

  const handleLike = (postId: string) => {
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId as keyof typeof prev] + 1
    }));
  };

  return (
    <div className="min-h-screen bg-[#E1E7ED]">
      {/* Header */}
      <header className="bg-[#2B587A] text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold">ВКонтакте</h1>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="Home" size={20} className="mr-2" />
                Моя страница
              </Button>
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="Users" size={20} className="mr-2" />
                Друзья
              </Button>
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Сообщения
              </Button>
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="Users2" size={20} className="mr-2" />
                Группы
              </Button>
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="Image" size={20} className="mr-2" />
                Фото
              </Button>
              <Button variant="ghost" className="text-white hover:bg-blue-700">
                <Icon name="Video" size={20} className="mr-2" />
                Видео
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                placeholder="Поиск..."
                className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Icon name="Search" size={20} className="absolute right-3 top-2.5 text-white/70" />
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar>
              <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
              <AvatarFallback>АК</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Profile */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                    <AvatarFallback>АК</AvatarFallback>
                  </Avatar>
                  {isOnline && (
                    <div className="absolute bottom-4 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">Анна Козлова</h3>
                <p className="text-gray-500 text-sm">онлайн</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Друзья:</span>
                  <span className="text-[#2B587A] font-medium">248</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Фото:</span>
                  <span className="text-[#2B587A] font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Видео:</span>
                  <span className="text-[#2B587A] font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Группы:</span>
                  <span className="text-[#2B587A] font-medium">32</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Последние друзья</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <Avatar key={i} className="w-10 h-10">
                      <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                      <AvatarFallback>Д{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card className="bg-white shadow-md mt-4">
            <CardContent className="p-4">
              <h4 className="font-medium mb-3">Быстрый переход</h4>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Icon name="Bookmark" size={16} className="mr-2" />
                  Закладки
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Icon name="Clock" size={16} className="mr-2" />
                  История
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - News Feed */}
        <div className="lg:col-span-2">
          {/* Create Post */}
          <Card className="bg-white shadow-md mb-4">
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <Avatar>
                  <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                  <AvatarFallback>АК</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input
                    placeholder="Что у вас нового?"
                    className="border-gray-200 mb-3"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Image" size={16} className="mr-1" />
                        Фото
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Video" size={16} className="mr-1" />
                        Видео
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        Место
                      </Button>
                    </div>
                    <Button className="bg-[#2B587A] hover:bg-[#1e3f59]">
                      Поделиться
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* News Posts */}
          <div className="space-y-4">
            {/* Post 1 */}
            <Card className="bg-white shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                    <AvatarFallback>МП</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Михаил Петров</h4>
                    <p className="text-sm text-gray-500">2 часа назад</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreHorizontal" size={16} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="mb-4">
                  Отличные выходные в горах! Природа просто невероятная 🏔️
                </p>
                <img
                  src="/img/e5ed957d-a91a-45c6-89e0-4ba30e0d3a94.jpg"
                  alt="Mountain landscape"
                  className="w-full rounded-lg mb-4"
                />
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike('post1')}
                      className="text-gray-600 hover:text-red-500"
                    >
                      <Icon name="Heart" size={16} className="mr-1" />
                      {likes.post1}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      3
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Icon name="Share" size={16} className="mr-1" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="bg-white shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                    <AvatarFallback>ЕС</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Елена Смирнова</h4>
                    <p className="text-sm text-gray-500">4 часа назад</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="MoreHorizontal" size={16} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="mb-4">
                  Новый проект готов! Спасибо всей команде за отличную работу 💪
                </p>
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike('post2')}
                      className="text-gray-600 hover:text-red-500"
                    >
                      <Icon name="Heart" size={16} className="mr-1" />
                      {likes.post2}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      1
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Icon name="Share" size={16} className="mr-1" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Online Friends */}
          <Card className="bg-white shadow-md mb-4">
            <CardHeader>
              <h4 className="font-medium flex items-center">
                <Icon name="Circle" size={8} className="text-green-500 mr-2 fill-current" />
                Друзья онлайн (12)
              </h4>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {[
                  'Дмитрий Иванов',
                  'Ольга Николаева',
                  'Сергей Козлов',
                  'Мария Попова'
                ].map((name, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Groups */}
          <Card className="bg-white shadow-md mb-4">
            <CardHeader>
              <h4 className="font-medium">Рекомендуемые группы</h4>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {[
                  { name: 'Путешественники', members: '15K' },
                  { name: 'IT Сообщество', members: '8.2K' },
                  { name: 'Фотографы', members: '12K' }
                ].map((group, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-[#2B587A] text-white">
                          {group.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{group.name}</p>
                        <p className="text-xs text-gray-500">{group.members} участников</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Вступить
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Birthdays */}
          <Card className="bg-white shadow-md">
            <CardHeader>
              <h4 className="font-medium flex items-center">
                <Icon name="Gift" size={16} className="mr-2 text-orange-500" />
                Дни рождения
              </h4>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <p className="text-sm">
                  Сегодня день рождения у <strong>Анны Петровой</strong> и еще 2 друзей
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Поздравить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;