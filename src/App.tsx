import { useState } from 'react'
import { motion } from 'framer-motion'
import { Switch } from './components/ui/switch'
import {
  ArrowRight,
  Facebook,
  Instagram,
  MessageCircle,
  MessageSquare,
  Music2,
  PhoneCall,
  type LucideIcon,
} from 'lucide-react'

type Lang = 'ru' | 'ro'

type Translation = {
  ru: string
  ro: string
}

type Service = {
  id: string
  title: Translation
  duration: Translation
  description: Translation
  price: Translation
}

type ContactChannel = {
  id: string
  label: Translation
  description: Translation
  href: string
  icon: LucideIcon
}

const PHONE_NUMBER = '+37360136877'
const PHONE_TEL = `tel:${PHONE_NUMBER}`
const WHATSAPP_LINK = 'https://wa.me/37360136877'
const VIBER_LINK = 'https://viber.click/37360136877'
const INSTAGRAM_LINK = 'https://www.instagram.com/bonita.massage.md/'
const FACEBOOK_LINK = 'https://www.facebook.com/p/Bonita-Massage-61552146661462/'
const TIKTOK_LINK = 'https://www.tiktok.com/@igori.massajist.trener'
const EMAIL_LINK = 'mailto:biznes13ww@mail.ru'

const services: Service[] = [
  {
    id: 'back30',
    title: { ru: 'Массаж спины и шеи', ro: 'Masaj spate și gât' },
    duration: { ru: '30 минут', ro: '30 de minute' },
    description: {
      ru: 'Расслабляет мышцы после офисных нагрузок и снимает головное напряжение.',
      ro: 'Relaxează musculatura după ore la birou și reduce tensiunea cervicală.',
    },
    price: { ru: '270 лей', ro: '270 lei' },
  },
  {
    id: 'back45',
    title: { ru: 'Массаж спины и шеи', ro: 'Masaj spate și gât' },
    duration: { ru: '45 минут', ro: '45 de minute' },
    description: {
      ru: 'Усиленная проработка глубоких мышц для стойкого облегчения.',
      ro: 'Lucru mai intens pe musculatura profundă pentru relaxare de durată.',
    },
    price: { ru: '350 лей', ro: '350 lei' },
  },
  {
    id: 'full60',
    title: { ru: 'Общий массаж', ro: 'Masaj corporal complet' },
    duration: { ru: '60 минут', ro: '60 de minute' },
    description: {
      ru: 'Восстанавливает тонус всего тела и гармонизирует кровообращение.',
      ro: 'Redă tonusul întregului corp și echilibrează circulația.',
    },
    price: { ru: '450 лей', ro: '450 lei' },
  },
  {
    id: 'full90',
    title: { ru: 'Общий массаж', ro: 'Masaj corporal complet' },
    duration: { ru: '90 минут', ro: '90 de minute' },
    description: {
      ru: 'Продлённая сессия с особым вниманием к зонам напряжения.',
      ro: 'Ședință prelungită cu atenție specială zonelor tensionate.',
    },
    price: { ru: '590 лей', ro: '590 lei' },
  },
  {
    id: 'legs30',
    title: { ru: 'Массаж ног', ro: 'Masaj picioare' },
    duration: { ru: '30 минут', ro: '30 de minute' },
    description: {
      ru: 'Лёгкость для ног, улучшение лимфотока и снятие отёчности.',
      ro: 'Oferă ușurință picioarelor, stimulează drenajul limfatic și reduce edemul.',
    },
    price: { ru: '270 лей', ro: '270 lei' },
  },
  {
    id: 'cavitation60',
    title: { ru: 'Кавитация / липолитик', ro: 'Cavitație / lipolitic' },
    duration: { ru: '60 минут', ro: '60 de minute' },
    description: {
      ru: 'Комплекс для заметного уменьшения объёмов и выравнивания силуэта.',
      ro: 'Program complet pentru reducerea vizibilă a volumelor și conturare.',
    },
    price: { ru: '500 лей', ro: '500 lei' },
  },
  {
    id: 'cavitation45',
    title: { ru: 'Кавитация / липолитик', ro: 'Cavitație / lipolitic' },
    duration: { ru: '45 минут', ro: '45 de minute' },
    description: {
      ru: 'Поддерживающая процедура между основными сессиями.',
      ro: 'Ședință de întreținere între terapiile principale.',
    },
    price: { ru: '350 лей', ro: '350 lei' },
  },
  {
    id: 'cavitation15',
    title: { ru: 'Кавитация / липолитик', ro: 'Cavitație / lipolitic' },
    duration: { ru: '15 минут', ro: '15 minute' },
    description: {
      ru: 'Локальная коррекция проблемных зон и запуск обменных процессов.',
      ro: 'Corectare locală a zonelor dificile și activarea metabolismului.',
    },
    price: { ru: '210 лей', ro: '210 lei' },
  },
  {
    id: 'vacuum',
    title: { ru: 'Вакуумные банки', ro: 'Ventuze cu vid' },
    duration: { ru: 'Дополнение к курсу', ro: 'Supliment la cură' },
    description: {
      ru: 'Включены в программы для усиления лимфодренажного эффекта.',
      ro: 'Incluse în programe pentru a amplifica drenajul limfatic.',
    },
    price: { ru: 'Бесплатно', ro: 'Gratuit' },
  },
]

const founderHighlights: Translation[] = [
  {
    ru: 'Более 5 лет опыта в спорте, реабилитации и массажных методиках.',
    ro: 'Peste 5 ani de experiență în sport, reabilitare și tehnici de masaj.',
  },
  {
    ru: 'Персональные планы для снижения веса или набора мышечной массы без травм.',
    ro: 'Planuri personalizate pentru slăbire sau creștere musculară fără traumatisme.',
  },
  {
    ru: 'Ультразвуковая кавитация помогает уменьшить объёмы на 5–7 см за курс.',
    ro: 'Cavitația ultrasonică ajută la diminuarea circumferinței cu 5–7 cm pe curs.',
  },
  {
    ru: 'Работа с клиентами любого возраста и особенностей, индивидуальный подход.',
    ro: 'Lucru cu clienți de toate vârstele și nevoile, abordare individuală.',
  },
  {
    ru: 'Бесплатная консультация и сопровождение в Viber, Telegram, WhatsApp.',
    ro: 'Consultanță gratuită și suport pe Viber, Telegram, WhatsApp.',
  },
  {
    ru: 'Предварительная запись обязательна по номеру +373 60 13 68 77.',
    ro: 'Programare în avans obligatorie la +373 60 13 68 77.',
  },
]

const methods: Translation[] = [
  { ru: 'Терапевтический массаж', ro: 'Masaj terapeutic' },
  { ru: 'Классический массаж', ro: 'Masaj clasic' },
  { ru: 'Лимфодренажный массаж', ro: 'Drenaj limfatic' },
  { ru: 'Спортивный массаж', ro: 'Masaj sportiv' },
  { ru: 'Аппаратная кавитация', ro: 'Cavitație cu aparate' },
  { ru: 'RF-лифтинг для лица и тела', ro: 'RF lifting pentru față și corp' },
]

const translations: Record<
  Lang,
  {
    nav: { about: string; services: string; methods: string; contact: string }
    language: { left: string; right: string; aria: string }
    hero: {
      badge: string
      heading: string
      description: string[]
      ctaPrimary: string
      ctaSecondary: string
      callHint: string
      addressTitle: string
      addressLines: string[]
      contactTitle: string
      contactLines: string[]
      cardTitle: string
      cardDescription: string[]
      cardCta: string
    }
    about: {
      title: string
      subtitle: string
      paragraphs: string[]
      whyTitle: string
      whySubtitle: string
    }
    services: {
      kicker: string
      title: string
    }
    methods: { title: string; subtitle: string; intro: string }
    contact: {
      title: string
      description: string
      callCardTitle: string
      callCardSubtitle: string
      callHighlights: string[]
      callButton: string
      callButtonHint: string
      emailButton: string
      channelsTitle: string
      channelsSubtitle: string
      policyTitle: string
      policyText: string
    }
    footer: {
      about: string
      services: string
      contact: string
      rights: string
    }
  }
> = {
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      methods: 'Методики',
      contact: 'Контакты',
    },
    language: {
      left: 'RU',
      right: 'RO',
      aria: 'Переключатель языка',
    },
    hero: {
      badge: 'Студия массажа в Кишинёве',
      heading: 'Bonita Massage — восстанови тело и уверенность',
      description: [
        'Я Игорь, основатель студии Bonita Massage. Помогаю вернуть здоровье спины, убрать лишние объёмы и ощутить лёгкость в теле.',
        'Подбираю безопасные техники массажа и аппаратные процедуры под ваши задачи — от реабилитации до эстетической коррекции.',
      ],
      ctaPrimary: 'Позвонить и записаться',
      ctaSecondary: 'Написать в WhatsApp',
      callHint: 'Нажмите на “Позвонить”, чтобы услышать свободные окошки прямо сейчас.',
      addressTitle: 'Адрес',
      addressLines: ['Chișinău, str. Ginta Latina 13', '3 этаж'],
      contactTitle: 'Контакты',
      contactLines: ['Tel: +373 60 13 68 77', 'Mail: biznes13ww@mail.ru'],
      cardTitle: 'Игорь · Специалист по лечебному массажу',
      cardDescription: [
        'Бесплатная консультация: обсуждаем цели, формируем курс, сопровождаем на протяжении всего процесса.',
        'Даю рекомендации по домашнему уходу и упражнениям между процедурами.',
      ],
      cardCta: 'Написать на почту',
    },
    about: {
      title: 'Авторский подход к здоровью и эстетике',
      subtitle: 'Что ждёт вас на сеансе',
      paragraphs: [
        'Каждая встреча начинается с диагностики: мы учитываем образ жизни, нагрузки и самочувствие прямо сейчас. На этой основе формируем курс — от классического массажа до аппаратных техник.',
        'Комбинируем ручные техники и современные аппараты, чтобы быстро и безопасно достичь ваших целей — от снятия боли до коррекции силуэта.',
      ],
      whyTitle: 'Почему выбирают Bonita Massage',
      whySubtitle: 'Ценности студии',
    },
    services: {
      kicker: 'Прайс-лист',
      title: 'Сеансы для здоровья и эстетики',
    },
    methods: {
      title: 'Методики, с которыми работаем',
      subtitle: 'Что мы используем',
      intro:
        'Сочетаем ручные техники и современные аппараты, чтобы быстро и безопасно достичь ваших целей — от снятия боли до коррекции силуэта.',
    },
    contact: {
      title: 'Готовы к новой энергии?',
      description:
        'Оставьте заявку и я свяжусь с вами в течение дня, чтобы подобрать удобное время и программу.',
      callCardTitle: 'Самый быстрый способ — звонок',
      callCardSubtitle: 'Узнаем свободные слоты и подберём курс за пару минут.',
      callHighlights: [
        'Расскажу про доступные кабинеты и время уже в разговоре',
        'Помогу выбрать программу: лечебный, спортивный, кавитация',
        'Закрепим бронь и отправим подготовку в мессенджер',
      ],
      callButton: 'Позвонить сейчас',
      callButtonHint: 'Работаем ежедневно 09:00 – 21:00 · Воскресенье по записи',
      emailButton: 'Написать на почту',
      channelsTitle: 'Соцсети и мессенджеры',
      channelsSubtitle: 'Выберите удобный канал — отвечу лично.',
      policyTitle: 'Правила записи',
      policyText:
        'Запись подтверждается предоплатой или сообщением в мессенджере. Пожалуйста, предупреждайте об изменениях минимум за 12 часов.',
    },
    footer: {
      about: 'О студии',
      services: 'Прайс',
      contact: 'Контакты',
      rights: 'Bonita Massage. Все права защищены.',
    },
  },
  ro: {
    nav: {
      about: 'Despre noi',
      services: 'Servicii',
      methods: 'Metode',
      contact: 'Contacte',
    },
    language: {
      left: 'RU',
      right: 'RO',
      aria: 'Comutator limbă',
    },
    hero: {
      badge: 'Studio de masaj în Chișinău',
      heading: 'Bonita Massage — redescoperă echilibrul tău',
      description: [
        'Sunt Igor, fondatorul Bonita Massage. Te ajut să eliberezi spatele, să remodelezi silueta și să revii la ușurință.',
        'Alegem împreună tehnici de masaj și proceduri estetice sigure pentru obiectivele tale: recuperare, tonifiere sau relaxare profundă.',
      ],
      ctaPrimary: 'Sună pentru programare',
      ctaSecondary: 'Scrie pe WhatsApp',
      callHint: 'Apasă “Sună” și afli imediat intervalele disponibile.',
      addressTitle: 'Adresă',
      addressLines: ['Chișinău, str. Ginta Latina 13', 'Etajul 3'],
      contactTitle: 'Contacte',
      contactLines: ['Tel: +373 60 13 68 77', 'Mail: biznes13ww@mail.ru'],
      cardTitle: 'Igor · Specialist în masaj terapeutic',
      cardDescription: [
        'Consultație gratuită: discutăm obiectivele, construim planul și te susținem pe tot parcursul.',
        'Primești recomandări pentru îngrijire acasă și exerciții între ședințe.',
      ],
      cardCta: 'Scrie-mi pe email',
    },
    about: {
      title: 'Abordare personalizată pentru sănătate și estetică',
      subtitle: 'Ce te așteaptă la ședință',
      paragraphs: [
        'Fiecare program începe cu o evaluare atentă: analizăm stilul de viață, nivelul de stres și starea corpului din prezent.',
        'Combinăm masajul clasic, sportiv și drenajul limfatic cu tehnologii moderne pentru rezultate vizibile fără suprasolicitare.',
      ],
      whyTitle: 'De ce alegi Bonita Massage',
      whySubtitle: 'Valorile studioului',
    },
    services: {
      kicker: 'Lista de prețuri',
      title: 'Ședințe pentru sănătate și estetică',
    },
    methods: {
      title: 'Metodele pe care le aplicăm',
      subtitle: 'Ce folosim',
      intro:
        'Îmbinăm tehnici manuale și aparate moderne pentru a atinge rapid și sigur obiectivele tale — de la eliminarea durerii la conturarea corpului.',
    },
    contact: {
      title: 'Pregătit pentru energie nouă?',
      description:
        'Lasă un mesaj și te contactez în aceeași zi pentru a stabili programarea și protocolul potrivit.',
      callCardTitle: 'Cel mai rapid este prin apel',
      callCardSubtitle: 'Aflăm sloturile libere și alegem terapia potrivită în câteva minute.',
      callHighlights: [
        'Îți spun imediat ce intervale și terapeuți sunt disponibili',
        'Stabilim împreună tipul de masaj sau procedură estetică',
        'Confirmăm rezervarea și trimit instrucțiunile pe chat',
      ],
      callButton: 'Sună acum',
      callButtonHint: 'Program zilnic 09:00 – 21:00 · Duminică doar cu programare',
      emailButton: 'Trimite un email',
      channelsTitle: 'Rețele și mesagerie',
      channelsSubtitle: 'Alege canalul preferat — răspund personal.',
      policyTitle: 'Politica programărilor',
      policyText:
        'Programările se confirmă prin avans sau mesaj în aplicație. Te rog să anunți modificările cu cel puțin 12 ore înainte.',
    },
    footer: {
      about: 'Despre studio',
      services: 'Tarife',
      contact: 'Contacte',
      rights: 'Bonita Massage. Toate drepturile rezervate.',
    },
  },
}

const contactChannels: ContactChannel[] = [
  {
    id: 'whatsapp',
    label: { ru: 'WhatsApp', ro: 'WhatsApp' },
    description: {
      ru: 'Быстрая переписка, фото и инструкции.',
      ro: 'Mesaje rapide, fotografii și instrucțiuni.',
    },
    href: WHATSAPP_LINK,
    icon: MessageCircle,
  },
  {
    id: 'viber',
    label: { ru: 'Viber', ro: 'Viber' },
    description: {
      ru: 'Голосовые сообщения и звонки по интернету.',
      ro: 'Mesaje vocale și apeluri prin internet.',
    },
    href: VIBER_LINK,
    icon: MessageSquare,
  },
  {
    id: 'instagram',
    label: { ru: 'Instagram', ro: 'Instagram' },
    description: {
      ru: 'Фото до/после, stories и новости студии.',
      ro: 'Foto before/after, stories și noutăți din studio.',
    },
    href: INSTAGRAM_LINK,
    icon: Instagram,
  },
  {
    id: 'facebook',
    label: { ru: 'Facebook', ro: 'Facebook' },
    description: {
      ru: 'Отзывы гостей и анонсы акций.',
      ro: 'Recenzii ale clienților și oferte.',
    },
    href: FACEBOOK_LINK,
    icon: Facebook,
  },
  {
    id: 'tiktok',
    label: { ru: 'TikTok', ro: 'TikTok' },
    description: {
      ru: 'Видео с техникой массажа и тренировок.',
      ro: 'Clipuri cu tehnici de masaj și antrenament.',
    },
    href: TIKTOK_LINK,
    icon: Music2,
  },
]

const fadeIn = (delay = 0, distance = 24) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
})

const fadeInViewport = { once: true, amount: 0.2 }

function App() {
  const [lang, setLang] = useState<Lang>('ru')
  const t = translations[lang]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="relative overflow-hidden bg-gradient-to-br from-[#F3E9DC] via-[#F7F4EE] to-[#E4F1FF]">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16 lg:py-20">
          <motion.nav
            {...fadeIn(0)}
            viewport={fadeInViewport}
            className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-stone-700"
          >
            <div className="flex items-center gap-3 text-sky-900">
              <img
                src="/bonita-logo.png"
                alt="Bonita Massage logo"
                className="h-12 w-auto drop-shadow-sm"
              />
              <span className="text-lg font-semibold tracking-wide">
                Bonita Massage
              </span>
            </div>
            <div className="hidden gap-6 lg:flex">
              <a className="hover:text-sky-900" href="#about">
                {t.nav.about}
              </a>
              <a className="hover:text-sky-900" href="#services">
                {t.nav.services}
              </a>
              <a className="hover:text-sky-900" href="#methods">
                {t.nav.methods}
              </a>
              <a className="hover:text-sky-900" href="#contact">
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-500 shadow-sm ring-1 ring-white/60">
                <span
                  className={`transition-colors ${
                    lang === 'ru' ? 'text-sky-900' : 'text-stone-400'
                  }`}
                >
                  {t.language.left}
                </span>
                <Switch
                  checked={lang === 'ro'}
                  onCheckedChange={(checked) => setLang(checked ? 'ro' : 'ru')}
                  aria-label={t.language.aria}
                />
                <span
                  className={`transition-colors ${
                    lang === 'ro' ? 'text-sky-900' : 'text-stone-400'
                  }`}
                >
                  {t.language.right}
                </span>
              </div>
              <a
                className="rounded-full bg-sky-900 px-4 py-2 text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-800"
                href={PHONE_TEL}
              >
                +373 60 13 68 77
              </a>
            </div>
          </motion.nav>

          <div className="relative z-10 flex flex-col gap-8 lg:col-span-2 lg:flex-row lg:items-start lg:gap-16">
            <motion.div
              {...fadeIn(0.05)}
              viewport={fadeInViewport}
              className="max-w-2xl space-y-6"
            >
              <div className="inline-flex rounded-full bg-white/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-sky-700 shadow-sm ring-1 ring-white/60">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
                {t.hero.heading}
              </h1>
              <div className="space-y-3 text-lg leading-relaxed text-stone-700">
                {t.hero.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  className="inline-flex items-center rounded-full bg-sky-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-900/25 transition hover:bg-sky-800 animate-pulse-soft"
                  href={PHONE_TEL}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  className="inline-flex items-center rounded-full bg-white/70 px-6 py-3 text-base font-semibold text-sky-900 shadow-sm ring-1 ring-sky-900/30 transition hover:bg-white"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.hero.ctaSecondary}
                </motion.a>
              </div>
              <p className="flex items-center gap-2 text-sm font-medium text-sky-700">
                <PhoneCall className="h-4 w-4" />
                {t.hero.callHint}
              </p>
              <div className="grid gap-6 pt-4 text-sm text-stone-700 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-sky-900">
                    {t.hero.addressTitle}
                  </p>
                  {t.hero.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sky-900">
                    {t.hero.contactTitle}
                  </p>
                  {t.hero.contactLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn(0.1)}
              viewport={fadeInViewport}
              className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur"
            >
              <div className="space-y-4 text-center">
                <p className="text-2xl font-semibold text-sky-950">
                  {t.hero.cardTitle}
                </p>
                <div className="space-y-2 text-sm text-stone-600">
                  {t.hero.cardDescription.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-900/20 transition hover:bg-sky-800"
                  href={EMAIL_LINK}
                >
                  {t.hero.cardCta}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <motion.section
          {...fadeIn(0.08)}
          viewport={fadeInViewport}
          className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20"
          id="about"
        >
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-sky-950 md:text-4xl">
                {t.about.title}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                {t.about.subtitle}
              </p>
              <div className="space-y-4 text-base leading-relaxed text-stone-700">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#F3E9DC] to-white p-8 shadow-xl ring-1 ring-sky-100/70">
              <h3 className="text-lg font-semibold text-sky-900">
                {t.about.whyTitle}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                {t.about.whySubtitle}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-stone-700">
                {founderHighlights.map((point) => (
                  <li
                    key={point.ru}
                    className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-sky-100/60"
                  >
                    {point[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeIn(0.12)}
          viewport={fadeInViewport}
          className="bg-stone-950/95 py-16 text-stone-50 sm:py-20"
          id="services"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                {t.services.kicker}
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                {t.services.title}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.id}
                  {...fadeIn(0.15 + index * 0.03, 32)}
                  viewport={fadeInViewport}
                  whileHover={{ translateY: -6 }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg shadow-black/10 backdrop-blur transition"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {service.title[lang]}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-wide text-sky-200">
                          {service.duration[lang]}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-stone-200">
                      {service.description[lang]}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-base font-semibold text-sky-200">
                    <span>{service.price[lang]}</span>
                    <motion.a
                      className="text-sm font-semibold text-sky-300 underline-offset-4 hover:text-sky-100 hover:underline"
                      href={PHONE_TEL}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                    >
                      {lang === 'ru' ? 'Записаться' : 'Rezervă'}
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeIn(0.18)}
          viewport={fadeInViewport}
          className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20"
          id="methods"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-sky-950 md:text-4xl">
                {t.methods.title}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                {t.methods.subtitle}
              </p>
              <p className="text-base leading-relaxed text-stone-700">
                {t.methods.intro}
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {methods.map((method) => (
                <li
                  key={method.ru}
                  className="rounded-3xl bg-[#F3E9DC] p-5 shadow-sm ring-1 ring-sky-100"
                >
                  <p className="font-semibold text-sky-900">{method[lang]}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          {...fadeIn(0.22)}
          viewport={fadeInViewport}
          className="bg-gradient-to-br from-[#F3E9DC] via-[#F7F4EE] to-[#E4F1FF] py-16"
          id="contact"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-sky-950 md:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-stone-700">
                {t.contact.description}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <motion.div
                {...fadeIn(0.25)}
                viewport={fadeInViewport}
                className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-white/60"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-900 text-white shadow-md shadow-sky-900/20">
                    <PhoneCall className="h-6 w-6" />
                  </span>
      <div>
                    <h3 className="text-xl font-semibold text-sky-950">
                      {t.contact.callCardTitle}
                    </h3>
                    <p className="text-sm text-stone-600">
                      {t.contact.callCardSubtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-stone-700">
                  {t.contact.callHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-2 w-2 rounded-full bg-sky-400/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    className="inline-flex w-full items-center justify-center rounded-full bg-sky-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-800 animate-pulse-soft"
                    href={PHONE_TEL}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 21 }}
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    {t.contact.callButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
                  <motion.a
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-sky-900 shadow-sm ring-1 ring-sky-900/20 transition hover:bg-[#F3E9DC]"
                    href={EMAIL_LINK}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  >
                    {t.contact.emailButton}
                  </motion.a>
      </div>
                <p className="text-xs text-stone-500">{t.contact.callButtonHint}</p>
                <div className="rounded-2xl bg-[#F3E9DC] p-4 text-sm text-stone-600 ring-1 ring-sky-100">
                  <p className="font-semibold text-sky-900">
                    {t.contact.policyTitle}
                  </p>
                  <p className="mt-1">{t.contact.policyText}</p>
                </div>
              </motion.div>
              <motion.div
                {...fadeIn(0.3)}
                viewport={fadeInViewport}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-sky-950">
                    {t.contact.channelsTitle}
                  </h3>
                  <p className="text-sm text-stone-600">
                    {t.contact.channelsSubtitle}
                  </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {contactChannels.map((channel, index) => (
                    <motion.li
                      key={channel.id}
                      {...fadeIn(0.32 + index * 0.03, 28)}
                      viewport={fadeInViewport}
                    >
                      <motion.a
                        className="group flex items-start gap-4 rounded-2xl bg-white/70 p-5 text-left shadow-sm ring-1 ring-white/60 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition group-hover:bg-sky-900 group-hover:text-white">
                          <channel.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-sky-900">
                            {channel.label[lang]}
                          </p>
                          <p className="text-sm text-stone-600">
                            {channel.description[lang]}
        </p>
      </div>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-sky-900">Bonita Massage</p>
            <p>Chișinău, str. Ginta Latina 13</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a className="hover:text-sky-900" href="#about">
              {t.footer.about}
            </a>
            <a className="hover:text-sky-900" href="#services">
              {t.footer.services}
            </a>
            <a className="hover:text-sky-900" href="#contact">
              {t.footer.contact}
            </a>
          </div>
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


