# 🎗️ Charity Fund REST API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 📌 Про проєкт
REST API для управління інформаційною системою **"Благодійний фонд"**. Проєкт розроблено в рамках лабораторних робіт з дисципліни «Організація баз даних» (Національний університет «Львівська політехніка»). 

API забезпечує взаємодію між клієнтськими додатками та реляційною базою даних, дозволяючи керувати проєктами зборів, донорами та пожертвами.

## 🚀 Основний функціонал
- **CRUD операції** для управління даними (Створення, Читання, Оновлення, Видалення).
- **Бізнес-логіка на рівні БД:** використання тригерів та збережених процедур для захисту цілісності даних (запобігання дублям, перевірка від'ємних сум).
- **Оптимізовані запити:** використання B-Tree індексів для прискорення пошуку.
- **CI/CD Pipeline:** налаштовано автоматичне тестування коду через GitHub Actions при кожному `push` та Pull Request.

## ⚙️ Стек технологій
* **Backend:** Node.js, Express.js
* **Database:** MariaDB / MySQL (драйвер `mysql2`)
* **DevOps:** Git, GitHub Actions
* **Tools:** Postman (тестування API), DBeaver (адміністрування БД)

## 🛠️ Локальний запуск (Quick Start)

**1. Клонування репозиторію:**
git clone [https://github.com/skillowoy/charity-api.git](https://github.com/твоє-ім'я-користувача/charity-api.git)
cd charity-api

**2. Встановлення залежностей:**
npm install

**3. Налаштування бази даних:**
- Запустіть локальний сервер MySQL.
- Імпортуйте SQL-дамп бази даних (таблиці donors, projects, donations).
- Переконайтеся, що облікові дані в server.js відповідають вашим локальним налаштуванням (user: 'root', password: '').

**4. Запуск сервера:**
node server.js
Сервер запуститься за адресою: http://localhost:3000

## 📡 API Endpoints (Приклади)

**Донори (Donors)**
* GET /donors — отримати список усіх донорів.
* POST /donors — додати нового донора.
    - Body (JSON): { "first_name": "Іван", "last_name": "Франко", "email": "ivan@email.com", "phone": "+380990001122" }
* PUT /donors/:id — оновити дані донора за його ID.
* DELETE /donors/:id — видалити донора з бази.

**Проєкти (Projects)**
* GET /projects — отримати список усіх благодійних проєктів.

Розробник: Тичинський О.С. (Група КІ-201)
