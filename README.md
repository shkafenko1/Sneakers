React Sneakers
React Sneakers - это pet-проект интернет-магазина кроссовок, реализованный с использованием современного фронтенд и бэкенд стека. Фронтенд построен на React с использованием Vite для быстрой разработки и сборки, а бэкенд реализован на Spring Boot с управлением зависимостями через Gradle.
О проекте
Магазин позволяет пользователям просматривать каталог кроссовок, добавлять товары в корзину, оформлять заказы и просматривать историю покупок. Проект демонстрирует интеграцию фронтенда и бэкенда, работу с REST API.
Стек технологий
Фронтенд

React - библиотека для построения пользовательских интерфейсов
Vite - инструмент для быстрой сборки и разработки
SCSS - для стилизации интерфейса

Бэкенд

Spring Boot - фреймворк для создания REST API
Gradle - система управления зависимостями
Spring Data JPA - для работы с базой данных
PostgreSQL - для хранения данных

Функционал

Просмотр каталога кроссовок
Добавление товаров в корзину
Оформление заказов
Адаптивный интерфейс для мобильных устройств

Установка и запуск
Предварительные требования

Node.js (версия 18 или выше) для фронтенда
Java (версия 17 или выше) для бэкенда
Gradle (устанавливается автоматически при сборке бэкенда)
База данных (PostgreSQL для продакшена)

Установка

Клонируйте репозиторий:
git clone https://github.com/shkafenko1/Sneakers


Фронтенд:
cd client
npm install
npm run dev

Приложение будет доступно по адресу http://localhost:5173.

Бэкенд:
cd server
./gradlew build
./gradlew bootRun

API будет доступно по адресу http://localhost:8080.

Настройка базы данных:

Настройте параметры подключения в server/src/main/resources/application.properties.



Переменные окружения

Фронтенд:Создайте файл .env в папке client:
VITE_API_URL=http://localhost:8080/api


Бэкенд:Настройте application.properties или создайте .env:
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=



Структура проекта
react-sneakers/
├── client/               # Фронтенд приложение
│   ├── src/
│   │   ├── components/    # React компоненты
│   │   ├── pages/         # Страницы приложения
│   │   ├── api/           # Запросы к бэкенду
│   │   └── assets/        # Статические файлы
│   ├── package.json
│   └── vite.config.js
├── server/                # Бэкенд приложение
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/      # Java код (контроллеры, сервисы, модели)
│   │   │   └── resources/ # Конфигурации и статические файлы
│   ├── build.gradle
│   └── application.properties
└── README.md

API
Основные эндпоинты:

GET /api/sneakers - получить список кроссовок
POST /api/cart - добавить товар в корзину
POST /api/orders - оформить заказ

Полная документация API доступна через Swagger UI: http://localhost:8080/swagger-ui.html (при запущенном бэкенде).
Тестирование

Фронтенд:
cd client
npm run test

Используется Vitest или Jest для модульного тестирования.

Бэкенд:
cd server
./gradlew test

Используется JUnit и Spring Test.