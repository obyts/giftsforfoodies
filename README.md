# Cozymeal LP

Landing pages — Laravel + Next.js (Docker)

## Передумови

- **Docker Desktop** (запущений)

## Швидкий старт (для колег — клонування репо)

### 1. Клонувати репозиторій

```powershell
git clone <URL_репозиторію> cozymeal-lp
cd cozymeal-lp
```

### 2. Підготувати .env для Laravel (перший раз)

```powershell
# Windows PowerShell
Copy-Item backend\.env.docker.example backend\.env
```

### 3. Згенерувати APP_KEY (перший раз)

```powershell
docker compose run --rm backend php artisan key:generate
```

### 4. Запустити

```powershell
docker compose up
```

Первісна збірка займе 2–5 хвилин (завантаження образів, composer install, npm install).

### 5. Відкрити

- **Laravel API:** http://localhost:8000
- **Next.js (lp/gifts-for-foodies):** http://localhost:3000/lp/gifts-for-foodies

---

## Перший setup (тільки для створення проекту)

Якщо клонуєте вже готовий репо — цей крок **не потрібен**. Якщо створюєте проект з нуля:

```powershell
.\setup.ps1
```

## Сторінки

| URL | Опис |
|-----|------|
| /lp/gifts-for-foodies | Gifts for Foodies (поки статична) |

## Структура

```
cozymeal-lp/
├── backend/           # Laravel API
├── frontend/          # Next.js
│   ├── app/lp/        # LP сторінки
│   └── lib/api.ts     # API клієнт (для майбутніх запитів)
├── docker-compose.yml
├── Vagrantfile        # VM з Docker (опційно)
├── setup.ps1          # Первинний setup
└── README.md
```

## CORS

Якщо Next.js не може звертатися до Laravel API, оновіть `backend/config/cors.php`:

```php
'allowed_origins' => ['http://localhost:3000', 'http://127.0.0.1:3000'],
```

## Vagrant (опційно)

Якщо використовуєте VM замість Docker Desktop:

```powershell
vagrant up
vagrant ssh
cd /vagrant
./setup.ps1   # або запустіть setup на хості
docker compose up
```
