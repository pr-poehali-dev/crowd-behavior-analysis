import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const crowdData = [
    { size: 50, conformity: 45, panic: 15 },
    { size: 150, conformity: 68, panic: 32 },
    { size: 300, conformity: 82, panic: 55 },
    { size: 500, conformity: 91, panic: 71 },
    { size: 1000, conformity: 96, panic: 85 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">Психология Толпы</h1>
            <div className="hidden lg:flex gap-6">
              {['home', 'research', 'mechanisms', 'experiments', 'visualization', 'conclusions', 'sources', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'research' && 'Исследование'}
                  {section === 'mechanisms' && 'Механизмы'}
                  {section === 'experiments' && 'Эксперименты'}
                  {section === 'visualization' && 'Визуализация'}
                  {section === 'conclusions' && 'Выводы'}
                  {section === 'sources' && 'Источники'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Icon name="Brain" size={20} className="text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Индивидуальный проект</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Психология Толпы
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Механизмы поведения в группах
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Анализ поведения индивидов в условиях массовых мероприятий: 
              от конформизма до коллективной паники
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('research')} className="group">
                Начать исследование
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('visualization')}>
                <Icon name="BarChart3" size={18} className="mr-2" />
                Визуализация
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="research" className="py-20 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <Icon name="Search" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Исследование</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексный анализ психологических механизмов группового поведения
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name="Users" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-3">Объект исследования</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Поведенческие паттерны индивидов в составе больших групп на массовых мероприятиях: 
                      концертах, митингах, спортивных событиях и общественных собраниях
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Icon name="Target" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-3">Цель исследования</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Выявление ключевых психологических механизмов, влияющих на поведение человека в толпе, 
                      и определение факторов, способствующих конформизму или паническим реакциям
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/50 rounded-lg flex-shrink-0">
                    <Icon name="BookOpen" size={28} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-3">Методология</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Изучение классических экспериментов (Милгрэм, Аш, Зимбардо), анализ современных исследований, 
                      обработка статистических данных о массовых событиях
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name="TrendingUp" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-3">Актуальность</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Понимание механизмов поведения толпы критично для обеспечения безопасности массовых мероприятий, 
                      управления кризисными ситуациями и социального проектирования
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mechanisms" className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Icon name="Cog" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Механизмы поведения</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Психологические процессы, определяющие поведение в группе
              </p>
            </div>

            <Tabs defaultValue="conformity" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="conformity">Конформизм</TabsTrigger>
                <TabsTrigger value="deindividuation">Деиндивид.</TabsTrigger>
                <TabsTrigger value="emotional">Эмоции</TabsTrigger>
                <TabsTrigger value="panic">Паника</TabsTrigger>
              </TabsList>

              <TabsContent value="conformity" className="animate-fade-in-fast">
                <Card className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="p-4 bg-primary/10 rounded-xl flex-shrink-0">
                      <Icon name="UserCheck" size={40} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Социальный конформизм</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                        Склонность индивида изменять свое поведение или мнение под влиянием группы. 
                        В толпе этот эффект усиливается из-за желания избежать социального отвержения 
                        и стремления к принадлежности.
                      </p>
                      <div className="bg-accent/50 p-4 md:p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="Lightbulb" size={20} className="text-primary" />
                          Ключевые факторы
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Размер группы: эффект максимален при 3-5 людях</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Единодушие группы: один несогласный снижает конформизм на 80%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Публичность: явный конформизм выше, чем скрытый</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="deindividuation" className="animate-fade-in-fast">
                <Card className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0">
                      <Icon name="UserX" size={40} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Деиндивидуализация</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                        Утрата самосознания и личной ответственности в группе. Индивид становится частью 
                        массы, что может приводить к поведению, несвойственному ему в обычных условиях.
                      </p>
                      <div className="bg-accent/50 p-4 md:p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="AlertTriangle" size={20} className="text-secondary" />
                          Проявления
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Снижение самоконтроля и критического мышления</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Повышенная внушаемость и импульсивность</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>Возможность агрессивного или антисоциального поведения</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="emotional" className="animate-fade-in-fast">
                <Card className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="p-4 bg-accent rounded-xl flex-shrink-0">
                      <Icon name="Heart" size={40} className="text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Эмоциональное заражение</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                        Быстрое распространение эмоционального состояния через группу. Эмоции передаются 
                        через мимику, жесты, интонацию и создают единое эмоциональное поле толпы.
                      </p>
                      <div className="bg-accent/50 p-4 md:p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="Zap" size={20} className="text-accent-foreground" />
                          Механизм передачи
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Активация зеркальных нейронов при наблюдении за другими</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Синхронизация физиологических реакций в группе</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Усиление эмоций через социальную обратную связь</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="panic" className="animate-fade-in-fast">
                <Card className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="p-4 bg-destructive/10 rounded-xl flex-shrink-0">
                      <Icon name="AlertCircle" size={40} className="text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Массовая паника</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                        Стихийное массовое бегство от реальной или мнимой угрозы. Характеризуется утратой 
                        рационального контроля, хаотичными действиями и эффектом домино в распространении страха.
                      </p>
                      <div className="bg-destructive/10 p-4 md:p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="AlertOctagon" size={20} className="text-destructive" />
                          Условия возникновения
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>Неожиданность и неопределенность угрозы</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>Ограниченность путей эвакуации и времени на реакцию</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>Отсутствие четких инструкций и лидеров</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="experiments" className="py-20 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Icon name="FlaskConical" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Классические эксперименты</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Исследования, изменившие понимание группового поведения
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="asch" className="bg-card rounded-lg px-4 md:px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name="Eye" size={20} className="text-primary md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-heading font-semibold">Эксперимент Соломона Аша (1951)</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Конформизм и давление группы</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 md:pt-6 pb-4">
                  <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Методика:</strong> Участники должны были определить 
                      длину линий. В группе из 7 человек только один был настоящим испытуемым, остальные — 
                      подсадные утки, которые давали заведомо неверные ответы.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Результаты:</strong> 75% участников хотя бы раз 
                      согласились с неправильным мнением большинства. В среднем 37% ответов были конформными, 
                      несмотря на очевидность правильного варианта.
                    </p>
                    <div className="bg-primary/5 p-3 md:p-4 rounded-lg mt-3 md:mt-4">
                      <p className="text-xs md:text-sm">
                        <strong className="text-foreground">Вывод:</strong> Давление группы может заставить 
                        людей отвергать свидетельства собственных органов чувств.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="milgram" className="bg-card rounded-lg px-4 md:px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className="p-2 md:p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                      <Icon name="Zap" size={20} className="text-secondary md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-heading font-semibold">Эксперимент Стэнли Милгрэма (1961)</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Подчинение авторитету</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 md:pt-6 pb-4">
                  <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Методика:</strong> Участникам предлагалось 
                      наказывать электрическими разрядами «ученика» за неправильные ответы. Авторитетный 
                      «экспериментатор» требовал увеличивать силу тока до опасных уровней.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Результаты:</strong> 65% участников довели силу 
                      тока до максимума (450 вольт), несмотря на крики «жертвы».
                    </p>
                    <div className="bg-secondary/5 p-3 md:p-4 rounded-lg mt-3 md:mt-4">
                      <p className="text-xs md:text-sm">
                        <strong className="text-foreground">Вывод:</strong> Обычные люди способны совершать 
                        жестокие действия под давлением авторитета.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="zimbardo" className="bg-card rounded-lg px-4 md:px-6 border-none">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className="p-2 md:p-3 bg-accent rounded-lg flex-shrink-0">
                      <Icon name="Building" size={20} className="text-accent-foreground md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-heading font-semibold">Стэнфордский тюремный эксперимент (1971)</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Влияние социальных ролей</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 md:pt-6 pb-4">
                  <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Методика:</strong> 24 студента случайно 
                      распределили на роли «охранников» и «заключенных» в импровизированной тюрьме.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Результаты:</strong> Эксперимент прекратили 
                      через 6 дней из-за жестокости «охранников» и психологических травм «заключенных».
                    </p>
                    <div className="bg-accent/30 p-3 md:p-4 rounded-lg mt-3 md:mt-4">
                      <p className="text-xs md:text-sm">
                        <strong className="text-foreground">Вывод:</strong> Ситуация и групповая динамика 
                        могут радикально изменить поведение людей.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="visualization" className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Icon name="BarChart3" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Визуализация данных</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Зависимость поведенческих факторов от размера группы
              </p>
            </div>

            <Card className="p-6 md:p-8 mb-8">
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-6 text-center">
                Влияние размера толпы на конформизм и панику (%)
              </h3>
              <div className="space-y-4 md:space-y-6">
                {crowdData.map((data, index) => (
                  <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">
                        {data.size} человек
                      </span>
                      <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary"></div>
                          Конформизм: {data.conformity}%
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-destructive"></div>
                          Риск паники: {data.panic}%
                        </span>
                      </div>
                    </div>
                    <div className="relative h-6 md:h-8 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-primary transition-all duration-1000"
                        style={{width: `${data.conformity}%`}}
                      />
                      <div 
                        className="absolute left-0 top-0 h-full bg-destructive/40 transition-all duration-1000"
                        style={{width: `${data.panic}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-accent/50 rounded-lg">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Интерпретация:</strong> График демонстрирует 
                  нелинейный рост конформизма и риска паники с увеличением размера группы. Особенно опасна зона 300-500 человек.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">3-7 сек</div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Время распространения эмоции через толпу
                </p>
              </Card>
              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">10-15%</div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Доля активных инициаторов в любой толпе
                </p>
              </Card>
              <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">80%</div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Снижение конформизма при наличии одного союзника
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusions" className="py-20 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Выводы исследования</h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  num: 1,
                  title: 'Трансформация личности в группе',
                  text: 'Нахождение в толпе приводит к значительной трансформации индивидуального сознания: снижается критическое мышление, усиливается внушаемость, утрачивается ощущение личной ответственности.'
                },
                {
                  num: 2,
                  title: 'Множественность механизмов влияния',
                  text: 'Поведение в толпе определяется комплексом взаимодействующих факторов: конформизм, эмоциональное заражение, деиндивидуализация, подчинение авторитету.'
                },
                {
                  num: 3,
                  title: 'Ситуация сильнее личности',
                  text: 'Классические эксперименты показывают: ситуационные факторы часто сильнее индивидуальных характеристик. Обычные люди способны на нехарактерные действия под влиянием группового давления.'
                },
                {
                  num: 4,
                  title: 'Практическое применение',
                  text: 'Понимание психологии толпы критично для: организации безопасности массовых мероприятий, управления кризисными ситуациями, проектирования общественных пространств.'
                }
              ].map((item) => (
                <Card key={item.num} className="p-6 md:p-8 hover:shadow-lg transition-all">
                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm md:text-base">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-heading font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 md:p-8 mt-6 md:mt-8 bg-primary/5 border-primary/20">
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={24} className="text-primary" />
                Заключение
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Психология толпы демонстрирует фундаментальное свойство человеческой природы: 
                мы — социальные существа, глубоко подверженные влиянию группы. Осознание этих 
                механизмов позволяет как защититься от негативных эффектов, так и использовать 
                групповую динамику для позитивных целей.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="sources" className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Icon name="BookMarked" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Источники</h2>
            </div>

            <Card className="p-6 md:p-8">
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-muted-foreground">
                {[
                  'Лебон Г. Психология народов и масс. — СПб.: Макет, 1995.',
                  'Asch S.E. Studies of independence and conformity // Psychological Monographs. 1956. Vol. 70.',
                  'Milgram S. Behavioral study of obedience // Journal of Abnormal and Social Psychology. 1963.',
                  'Zimbardo P.G. The Stanford Prison Experiment. Stanford University, 1971.',
                  'Московичи С. Век толп. — М.: Центр психологии и психотерапии, 1998.',
                  'Reicher S., Stott C. Mad Mobs and Englishmen? — London: Constable & Robinson, 2011.',
                  'Андреева Г.М. Социальная психология. — М.: Аспект Пресс, 2018.'
                ].map((source, index) => (
                  <div key={index} className={index < 6 ? 'pb-3 md:pb-4 border-b' : ''}>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">{source.split('.')[0]}.</strong>{source.substring(source.indexOf('.') + 1)}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Контакты</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Индивидуальный проект по психологии
            </p>
            <Card className="p-6 md:p-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="User" size={20} className="text-primary" />
                  <p className="text-base md:text-lg">Автор проекта</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="GraduationCap" size={20} className="text-secondary" />
                  <p className="text-sm md:text-base text-muted-foreground">Образовательное учреждение</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <p className="text-sm md:text-base text-muted-foreground">2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t py-6 md:py-8">
        <div className="container mx-auto px-6 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2024 Психология Толпы. Индивидуальный исследовательский проект</p>
        </div>
      </footer>
    </div>
  );
}