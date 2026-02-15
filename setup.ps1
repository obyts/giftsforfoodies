# Cozymeal LP - Initial Setup
# Run this script first to create Laravel and Next.js projects (uses Docker, no need for PHP/Node on host)

$ErrorActionPreference = "Stop"

Write-Host "=== Cozymeal LP Setup ===" -ForegroundColor Cyan

# Check Docker
try {
    docker --version | Out-Null
} catch {
    Write-Host "Docker is not installed or not in PATH. Please install Docker Desktop." -ForegroundColor Red
    exit 1
}

$projectRoot = $PSScriptRoot

# 1. Create Laravel backend
if (-not (Test-Path "$projectRoot\backend\artisan")) {
    Write-Host "Creating Laravel backend..." -ForegroundColor Yellow
    docker run --rm -v "${projectRoot}:/app" -w /app composer:latest create-project laravel/laravel backend --no-interaction
    if ($LASTEXITCODE -ne 0) { exit 1 }
    # Add Dockerfile to backend
    @"
FROM php:8.4-cli

RUN apt-get update && apt-get install -y git unzip libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install zip pdo_mysql mbstring exif pcntl

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
COPY . .
RUN composer install --no-interaction

EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
"@ | Out-File -FilePath "$projectRoot\backend\Dockerfile" -Encoding utf8
    Write-Host "Laravel backend created." -ForegroundColor Green
} else {
    Write-Host "Laravel backend already exists, skipping." -ForegroundColor Gray
}

# Update backend .env for Docker (DB_HOST=mysql)
if (Test-Path "$projectRoot\backend\.env") {
    $envContent = Get-Content "$projectRoot\backend\.env" -Raw
    if ($envContent -notmatch "DB_HOST=mysql") {
        $envContent = $envContent -replace "DB_HOST=127\.0\.0\.1", "DB_HOST=mysql"
        $envContent = $envContent -replace "DB_HOST=localhost", "DB_HOST=mysql"
        $envContent = $envContent -replace "DB_CONNECTION=sqlite", "DB_CONNECTION=mysql"
        $envContent = $envContent -replace "DB_DATABASE=laravel", "DB_DATABASE=cozymeal_lp"
        $envContent = $envContent -replace "DB_USERNAME=root", "DB_USERNAME=lp_user"
        $envContent = $envContent -replace "(DB_PASSWORD=)(.*)", '${1}lp_secret'
        Set-Content -Path "$projectRoot\backend\.env" -Value $envContent -NoNewline
    }
}

# Ensure Dockerfile exists in backend
if (-not (Test-Path "$projectRoot\backend\Dockerfile")) {
    Write-Host "Adding backend Dockerfile..." -ForegroundColor Yellow
    @"
FROM php:8.4-cli

RUN apt-get update && apt-get install -y git unzip libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install zip pdo_mysql mbstring exif pcntl

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
COPY . .
RUN composer install --no-interaction

EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
"@ | Out-File -FilePath "$projectRoot\backend\Dockerfile" -Encoding utf8
}

# 2. Create Next.js frontend
if ((Test-Path "$projectRoot\frontend") -and -not (Test-Path "$projectRoot\frontend\package.json")) {
    Remove-Item -Path "$projectRoot\frontend" -Recurse -Force
}
if (-not (Test-Path "$projectRoot\frontend\package.json")) {
    Write-Host "Creating Next.js frontend..." -ForegroundColor Yellow
    docker run --rm -v "${projectRoot}:/app" -w /app node:20-alpine sh -c "npx create-next-app@latest frontend --typescript --tailwind --eslint --app --no-src-dir --no-turbopack --yes"
    if ($LASTEXITCODE -ne 0) { exit 1 }
    Write-Host "Next.js frontend created." -ForegroundColor Green
} else {
    Write-Host "Next.js frontend already exists, skipping." -ForegroundColor Gray
}

# 3. Add lp/gifts-for-foodies page
$lpPage = "$projectRoot\frontend\app\lp\gifts-for-foodies\page.tsx"
if ((Test-Path "$projectRoot\frontend") -and -not (Test-Path $lpPage)) {
    Write-Host "Creating lp/gifts-for-foodies page..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path "$projectRoot\frontend\app\lp\gifts-for-foodies" | Out-Null
    @'
export const metadata = {
  title: 'Gifts for Foodies | Cozymeal',
  description: 'Discover unforgettable gifts for foodies, from chef-led cooking classes and gourmet food tours to chef-curated cookware.',
};

export default function GiftsForFoodiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Gifts for Foodies
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;ve all got a foodie in our lives. From hands-on culinary experiences
          to handy gadgets, here&apos;s a lineup of gifts for foodies that will go to
          great use in anyone&apos;s culinary collection.
        </p>
        <section className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Classes</h2>
            <p className="text-gray-600">
              One of the best gifts for foodies is an experience gift. Cooking classes
              run the gourmet gamut, making them ideal for foodies who like trying new things.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Online Cooking Classes</h2>
            <p className="text-gray-600">
              Give them the opportunity to join a world-class chef with live online
              cooking classes. Professional chefs offer sessions from around the country.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Private Chef Experiences</h2>
            <p className="text-gray-600">
              Treat the gastronome in your life to a fine-dining experience crafted by
              a professional private chef. They can choose the cuisine, date and time.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
'@ | Out-File -FilePath $lpPage -Encoding utf8
    Write-Host "lp/gifts-for-foodies page created." -ForegroundColor Green
}

# 4. Add frontend .env.local and api.ts
if (Test-Path "$projectRoot\frontend") {
    if (-not (Test-Path "$projectRoot\frontend\.env.local")) {
        "NEXT_PUBLIC_API_URL=http://localhost:8000/api" | Out-File -FilePath "$projectRoot\frontend\.env.local" -Encoding utf8
    }
    New-Item -ItemType Directory -Force -Path "$projectRoot\frontend\lib" | Out-Null
    if (-not (Test-Path "$projectRoot\frontend\lib\api.ts")) {
        $apiTs = @'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchMeals(params?: Record<string, string>) {
  const searchParams = params ? new URLSearchParams(params).toString() : '';
  const url = `${API_URL}/meals${searchParams ? `?${searchParams}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch meals');
  return res.json();
}
'@
        $apiTs | Out-File -FilePath "$projectRoot\frontend\lib\api.ts" -Encoding utf8
    }
}

Write-Host ""
Write-Host "Setup complete! Run: docker compose up" -ForegroundColor Green
