import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [likes, setLikes] = useState({ post1: 15, post2: 8 });
  const [comments, setComments] = useState({ post1: 3, post2: 1 });
  const [isOnline, setIsOnline] = useState(true);
  const [activeSection, setActiveSection] = useState('newsfeed');
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [notifications, setNotifications] = useState(5);

  const handleLike = (postId: string) => {
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId as keyof typeof prev] + 1
    }));
  };

  const handleComment = (postId: string) => {
    setComments(prev => ({
      ...prev,
      [postId]: prev[postId as keyof typeof prev] + 1
    }));
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      alert(`Пост создан: ${newPost}`);
      setNewPost('');
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Поиск: ${searchQuery}`);
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    alert(`Переход в раздел: ${section}`);
  };

  const clearNotifications = () => {
    setNotifications(0);
    alert('Уведомления просмотрены');
  };

  return (
    <div className="min-h-screen bg-[#E1E7ED]">
      {/* Header */}
      <header className="bg-[#2B587A] text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold">ВКонтакте</h1>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-blue-700 ${activeSection === 'profile' ? 'bg-blue-700' : ''}`}
                onClick={() => handleSectionChange('Моя страница')}
              >
                <Icon name="Home" size={20} className="mr-2" />
                Моя страница
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-blue-700 ${activeSection === 'friends' ? 'bg-blue-700' : ''}`}
                onClick={() => handleSectionChange('Друзья')}
              >
                <Icon name="Users" size={20} className="mr-2" />
                Друзья
              </Button>
              <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-blue-700">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Сообщения
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Сообщения</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <Avatar>
                        <AvatarFallback>МП</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Михаил Петров</p>
                        <p className="text-sm text-gray-500">Привет! Как дела?</p>
                      </div>
                      <Badge variant="secondary">2</Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <Avatar>
                        <AvatarFallback>ЕС</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Елена Смирнова</p>
                        <p className="text-sm text-gray-500">Спасибо за помощь!</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-blue-700 ${activeSection === 'groups' ? 'bg-blue-700' : ''}`}
                onClick={() => handleSectionChange('Группы')}
              >
                <Icon name="Users2" size={20} className="mr-2" />
                Группы
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-blue-700 ${activeSection === 'photos' ? 'bg-blue-700' : ''}`}
                onClick={() => handleSectionChange('Фото')}
              >
                <Icon name="Image" size={20} className="mr-2" />
                Фото
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-blue-700 ${activeSection === 'videos' ? 'bg-blue-700' : ''}`}
                onClick={() => handleSectionChange('Видео')}
              >
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1 text-white/70 hover:text-white"
                onClick={handleSearch}
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white"
                onClick={clearNotifications}
              >
                <Icon name="Bell" size={20} />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 text-white">
                    {notifications}
                  </Badge>
                )}
              </Button>
            </div>
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
                <button 
                  className="flex justify-between w-full hover:bg-gray-50 p-2 rounded"
                  onClick={() => alert('Переход к друзьям')}
                >
                  <span className="text-gray-600">Друзья:</span>
                  <span className="text-[#2B587A] font-medium">248</span>
                </button>
                <button 
                  className="flex justify-between w-full hover:bg-gray-50 p-2 rounded"
                  onClick={() => alert('Переход к фото')}
                >
                  <span className="text-gray-600">Фото:</span>
                  <span className="text-[#2B587A] font-medium">156</span>
                </button>
                <button 
                  className="flex justify-between w-full hover:bg-gray-50 p-2 rounded"
                  onClick={() => alert('Переход к видео')}
                >
                  <span className="text-gray-600">Видео:</span>
                  <span className="text-[#2B587A] font-medium">12</span>
                </button>
                <button 
                  className="flex justify-between w-full hover:bg-gray-50 p-2 rounded"
                  onClick={() => alert('Переход к группам')}
                >
                  <span className="text-gray-600">Группы:</span>
                  <span className="text-[#2B587A] font-medium">32</span>
                </button>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Последние друзья</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <button
                      key={i}
                      onClick={() => alert(`Переход к профилю друга ${i}`)}
                    >
                      <Avatar className="w-10 h-10 hover:scale-105 transition-transform">
                        <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                        <AvatarFallback>Д{i}</AvatarFallback>
                      </Avatar>
                    </button>
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
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => alert('Открытие закладок')}
                >
                  <Icon name="Bookmark" size={16} className="mr-2" />
                  Закладки
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => alert('Открытие истории')}
                >
                  <Icon name="Clock" size={16} className="mr-2" />
                  История
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                  onClick={() => alert('Открытие настроек')}
                >
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
                  <Textarea
                    placeholder="Что у вас нового?"
                    className="border-gray-200 mb-3 min-h-[80px]"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => alert('Добавление фото')}
                      >
                        <Icon name="Image" size={16} className="mr-1" />
                        Фото
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => alert('Добавление видео')}
                      >
                        <Icon name="Video" size={16} className="mr-1" />
                        Видео
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => alert('Добавление геолокации')}
                      >
                        <Icon name="MapPin" size={16} className="mr-1" />
                        Место
                      </Button>
                    </div>
                    <Button 
                      className="bg-[#2B587A] hover:bg-[#1e3f59]"
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                    >
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
                  <button onClick={() => alert('Переход к профилю Михаила Петрова')}>
                    <Avatar className="hover:scale-105 transition-transform">
                      <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                      <AvatarFallback>МП</AvatarFallback>
                    </Avatar>
                  </button>
                  <div className="flex-1">
                    <button 
                      className="font-medium hover:text-blue-600 transition-colors"
                      onClick={() => alert('Переход к профилю Михаила Петрова')}
                    >
                      Михаил Петров
                    </button>
                    <p className="text-sm text-gray-500">2 часа назад</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => alert('Опции поста')}
                  >
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
                  className="w-full rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => alert('Открытие фото в полном размере')}
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
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => handleComment('post1')}
                    >
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      {comments.post1}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:text-green-600"
                      onClick={() => alert('Пост поделен!')}
                    >
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
                  <button onClick={() => alert('Переход к профилю Елены Смирновой')}>
                    <Avatar className="hover:scale-105 transition-transform">
                      <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                      <AvatarFallback>ЕС</AvatarFallback>
                    </Avatar>
                  </button>
                  <div className="flex-1">
                    <button 
                      className="font-medium hover:text-blue-600 transition-colors"
                      onClick={() => alert('Переход к профилю Елены Смирновой')}
                    >
                      Елена Смирнова
                    </button>
                    <p className="text-sm text-gray-500">4 часа назад</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => alert('Опции поста')}
                  >
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
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => handleComment('post2')}
                    >
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      {comments.post2}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:text-green-600"
                      onClick={() => alert('Пост поделен!')}
                    >
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
                      <button onClick={() => alert(`Переход к профилю ${name}`)}>
                        <Avatar className="w-8 h-8 hover:scale-105 transition-transform">
                          <AvatarImage src="/img/5dc7356b-cb12-4146-bdfa-49306eab0edc.jpg" />
                          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </button>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    </div>
                    <button 
                      className="text-sm hover:text-blue-600 transition-colors" 
                      onClick={() => alert(`Переход к профилю ${name}`)}
                    >
                      {name}
                    </button>
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
                      <button onClick={() => alert(`Переход к группе ${group.name}`)}>
                        <Avatar className="w-10 h-10 hover:scale-105 transition-transform">
                          <AvatarFallback className="bg-[#2B587A] text-white">
                            {group.name[0]}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                      <div>
                        <button 
                          className="text-sm font-medium hover:text-blue-600 transition-colors block text-left"
                          onClick={() => alert(`Переход к группе ${group.name}`)}
                        >
                          {group.name}
                        </button>
                        <p className="text-xs text-gray-500">{group.members} участников</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => alert(`Вступили в группу ${group.name}`)}
                    >
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => alert('Поздравление отправлено!')}
                >
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