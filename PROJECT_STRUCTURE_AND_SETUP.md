# GiftsForFoodies LP — Структура проєкту та інструкція з налаштування

## Огляд

Landing page «Gifts for Foodies» на базі Next.js 16 + React 19. Дизайн орієнтований на [Giftory](https://www.giftory.com/). Усі дані поки статичні (без бекенду).

---

## Структура проєкту

```
cozymeal-lp/
└── frontend/                    # Next.js додаток
    ├── app/                     # App Router (Next.js)
    │   ├── api/
    │   │   └── health/
    │   │       └── route.ts     # Health check endpoint
    │   ├── lp/
    │   │   └── gifts-for-foodies/
    │   │       └── page.tsx     # /lp/gifts-for-foodies (окрема сторінка)
    │   ├── error.tsx            # Error boundary (показ помилок)
    │   ├── global-error.tsx     # Глобальний error boundary
    │   ├── globals.css          # Глобальні стилі + Tailwind
    │   ├── layout.tsx           # Кореневий layout
    │   └── page.tsx             # Головна сторінка (/)
    ├── components/              # React-компоненти
    │   ├── Header.tsx           # Шапка сайту
    │   ├── Hero.tsx             # Hero-слайдер з промо-бейджами
    │   ├── ExploreLocations.tsx # Картки міст (NYC, LA, Chicago...)
    │   ├── MealsGrid.tsx        # Сітка досвідів з табами локацій
    │   ├── MealCard.tsx         # Картка одного досвіду
    │   ├── ShopByRecipient.tsx  # Картки: Couples, Him, Her, Kids, Parents
    │   ├── BrowseByCategory.tsx # Картки категорій (Cooking, Food Tours...)
    │   ├── GiftCardsBlock.tsx   # Блоки Gift Cards та Gift Collections
    │   ├── HowItWorks.tsx       # 3 кроки: Find → Gift → Book
    │   ├── WhyLoveUs.tsx        # 4 переваги
    │   ├── Newsletter.tsx       # Форма підписки
    │   ├── FAQ.tsx              # Акордеон FAQ
    │   ├── Footer.tsx           # Підвал
    │   ├── Slider.tsx           # (не використовується на головній)
    │   └── CategoryFilters.tsx  # (не використовується на головній)
    ├── lib/                     # Утиліти та дані
    │   ├── gifts-for-foodies-data.ts  # Статичні дані
    │   └── api.ts               # (заготовка для API)
    ├── next.config.ts           # Конфігурація Next.js
    ├── postcss.config.mjs       # PostCSS (Tailwind)
    ├── tsconfig.json
    ├── package.json
    └── eslint.config.mjs
```

---

## Компоненти та їх призначення

| Компонент | Опис |
|-----------|------|
| **Header** | Логотип GiftsForFoodies, навігація (Gifts for Foodies, Cooking Classes, Food Tours, Gift Cards, Help, Redeem, корзина) |
| **Hero** | Повноширинний слайдер з 3 слайдами, автопрокрутка 5 сек, промо-бейджі під слайдером |
| **ExploreLocations** | Сітка карток міст (New York, LA, Chicago, San Diego, SF, Austin) + "View All" |
| **MealsGrid** | Таби локацій + сітка карток досвідів (6 meals) |
| **MealCard** | Картка: зображення, назва, локація, рейтинг, ціна, теги |
| **ShopByRecipient** | Картки: Gifts for Couples, Him, Her, Kids, Parents |
| **BrowseByCategory** | Картки: Cooking Classes, Food Tours, Private Chefs, Online Classes, Wine Tastings |
| **GiftCardsBlock** | 2 блоки: Gift Cards та Gift Collections з CTA |
| **HowItWorks** | 3 кроки: Find, Gift, Book |
| **WhyLoveUs** | 4 переваги: Fully flexible, Direct to inbox, Hand-picked, Best value |
| **Newsletter** | Форма email-підписки |
| **FAQ** | 4 питання з акордеоном |
| **Footer** | 4 колонки посилань + copyright |

---

## Дані (`lib/gifts-for-foodies-data.ts`)

Статичні експорти:

- `categories` — категорії (Cooking Classes, Private Chefs, Food Tours...)
- `occasions` — приводи (Christmas, Birthday, Valentine's Day...)
- `recipients` — одержувачі (Coffee Lovers, Men, Bakers...)
- `staticMeals` — 6 прикладів досвідів
- `sliderItems` — міста для Explore Locations
- `heroSlides` — слайди Hero
- `promoBadges` — бейджі під Hero
- `recipientCards`, `categoryCards` — дані для карток
- `howItWorks`, `whyLoveUs`, `faqItems`

Зображення завантажуються з Cloudinary (`res.cloudinary.com/hz3gmuqw6/...`).

---

## Вимоги

- **Node.js** 18+ (рекомендовано LTS)
- **npm** (йде разом з Node.js)

---

## Інструкція з налаштування для колег

### 1. Клонування репозиторію

```bash
git clone <url-репозиторію> cozymeal-lp
cd cozymeal-lp
```

### 2. Встановлення залежностей

```bash
cd frontend
npm install
```

### 3. Запуск проєкту

**Рекомендовано (production mode):**

```bash
npm run build
npm run start
```

Відкрити: http://localhost:3000

**Development mode** (на Windows можливі помилки — див. розділ «Важливо»):

```bash
npm run dev
```

### 4. Порт зайнятий?

Якщо `EADDRINUSE: address already in use :::3000`:

**Windows (PowerShell):**

```powershell
# 1. Знайти PID процесу
netstat -ano | findstr :3000

# 2. Завершити (замість 12345 — PID з кроку 1)
taskkill /PID 12345 /F
```

**Linux / macOS:**

```bash
lsof -ti:3000 | xargs kill -9
```

### 5. Environment-змінні

Опційно: файл `frontend/.env.local` для змінних середовища (наприклад, API keys).

---

## Важливо (Windows)

- **Dev-сервер** (`npm run dev`) може викликати Internal Server Error через проблеми з Turbopack/шляхами.
- **Рекомендовано:** використовувати `npm run build` + `npm run start` для локальної розробки.
- Dev-скрипт налаштований з `--webpack` (замість Turbopack) — спрощує запуск на Windows.

---

## Скрипти

| Скрипт | Опис |
|--------|------|
| `npm run dev` | Dev-сервер (з webpack) |
| `npm run build` | Збірка production |
| `npm run start` | Production-сервер (після build) |
| `npm run lint` | Перевірка ESLint |

---

## API

- `GET /api/health` — перевірка роботи сервера. Відповідь: `{"ok":true,"message":"Server works"}`.

---

## Маршрути

| URL | Опис |
|-----|------|
| `/` | Головна сторінка (Gifts for Foodies, стиль Giftory) |
| `/lp/gifts-for-foodies` | Окрема сторінка з описом |
| `/api/health` | Health check |

---

## Технології

- **Next.js** 16 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **Зображення:** звичайні `<img>`, URL Cloudinary (без Next.js Image)

---

## Що робити далі

1. Підключити бекенд і замінити статичні дані на API.
2. Додати маршрутизацію для категорій, міст, досвідів.
3. Закрити TODO в компонентах (посилання `#`, href тощо).
4. Опційно повернути `next/image` для оптимізації зображень (після виправлення проблем з dev-сервером).
