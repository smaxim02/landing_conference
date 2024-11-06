import store from '../img/development/store.webp';
import academy from '../img/development/academy.webp';
import bot from '../img/development/bot.webp';
import creo from '../img/development/creo.webp';
import proxy from '../img/development/proxy.webp';

export const navItems = [
  { label: 'Кто мы такие', href: '#about' },
  { label: 'Экосистема', href: '#ecosystem' },
  { label: 'Наша ценность для сообщества', href: '#community' },
  { label: 'Наши принципы', href: '#principles' },
  { label: 'Достижения в цифрах', href: '#achievements' },
  { label: 'Контакты', href: '#contacts' },
];

export const devItems = [
  {
    header: 'Mustage Store',
    text: 'Наш фирменный маркетплейс Mustage Store стал надежным решением для арбитражников, нуждающихся в качественных рекламных аккаунтах. Мы тщательно проверяем каждый аккаунт перед продажей, гарантируя стабильную работу и максимальную эффективность. В нашем ассортименте - премиум Facebook-аккаунты, кинги от $1.99 и автоматически фармленные аккаунты от $0.3. Каждому клиенту мы обеспечиваем персональную поддержку и сопровождение.',
    img: store,
    link: '#',
  },
  {
    header: 'Mustage Proxy',
    text: 'Мы создали надежную прокси-инфраструктуру, когда увидели, как наши клиенты страдают от нестабильных соединений, постоянных отлетов прокси и скам-селлеров. Наши украинские мобильные прокси стали настоящим прорывом на рынке, предлагая идеальный баланс цены и качества.',
    img: proxy,
    link: '#',
  },
  {
    header: 'Mustage Creo',
    text: 'Креативы – сердце успешной рекламной кампании. Мы начали с создания креативов для собственных нужд, но спрос со стороны сообщества был настолько высок, что мы открыли отдельное направление. Сегодня наша команда креативщиков создает уникальные креативы для любого желающего в довольно-таки краткие сроки.',
    img: creo,
    link: '#',
  },
  {
    header: 'Mustage Academy',
    text: 'Особая гордость – наша образовательная платформа с Бесплатным обучением арбитражу трафика. Мы верим, что знания должны быть доступными, поэтому создали бесплатный курс по арбитражу трафика. Более (уточнить цифру на момент верстки) успешных выпускников – лучшее подтверждение качества нашего обучения.',
    img: academy,
    link: '#',
  },
  {
    header: 'Mustage Service bot',
    text: 'Наш специализированный Telegram-бот стал эффективным решением для уникализации креативов. Интегрируясь с мессенджером Telegram, бот обрабатывает фото- и видео материалы быстро и качественно, значительно расширяя возможности для создания успешных рекламных кампаний.',
    img: bot,
    link: '#',
  },
];
