<div align="center">

# Павел Цветков

### Специалист по информационной безопасности

Портфолио, опыт и write-ups по практическим лабораторным работам в области информационной безопасности.

[![Открыть сайт](https://img.shields.io/badge/Открыть-сайт-ff7a45?style=for-the-badge)](https://mapanit.github.io/mapanit-site/)
[![GitHub](https://img.shields.io/badge/GitHub-mapanit-181717?style=for-the-badge&logo=github)](https://github.com/mapanit)

</div>

---

## О сайте

Персональный сайт-портфолио с информацией о профессиональном опыте, навыках и проектах. В разделе портфолио можно открыть write-ups с форматированным текстом, командами и скриншотами.

**[Перейти на сайт →](https://mapanit.github.io/mapanit-site/)**

## Разделы сайта

- **Главная** — краткое описание, специализация и ключевые навыки.
- **Опыт** — практика и профессиональный опыт.
- **Портфолио** — проекты и разборы учебных машин.
- **Write-ups** — подробные отчёты с кодом, таблицами и изображениями.
- **Контакты** — способы связи и публичные профили.

## Публичные профили

- [HackerLab](https://hackerlab.pro/users/Pavel253)
- [Hack The Box](https://profile.hackthebox.com/profile/01a0e998-0837-737c-af0c-4b85bf18ecca)
- [GitHub](https://github.com/mapanit)

## Технологии

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=20232A)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)

- React и React Router — интерфейс и навигация.
- Vite — локальная разработка и production-сборка.
- Framer Motion — анимация переходов между страницами.
- Embla Carousel — карусель проектов.
- React Markdown — отображение write-ups.
- GitHub Pages — публикация сайта.

## Запуск локально

Требуется установленный [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/mapanit/mapanit-site.git
cd mapanit-site
npm install
npm run dev
```

Vite выведет адрес локального сервера в терминал — обычно это `http://localhost:5173/`.

## Сборка и публикация

Проверить production-сборку:

```bash
npm run build
```

Опубликовать сайт в GitHub Pages:

```bash
npm run deploy
```

Скрипт `deploy` сначала собирает проект, затем публикует содержимое `dist` в ветку `gh-pages`. Для GitHub Pages используется параметр `--nojekyll`, необходимый для загрузки Markdown-файлов write-ups.

## Структура проекта

```text
src/
├── components/   # Переиспользуемые компоненты
├── data/         # Данные профиля, опыта и портфолио
├── pages/        # Страницы сайта
└── Write-ups/    # Отчёты в Markdown
```

---

<div align="center">

Сделано Павлом Цветковым · [mapanit](https://github.com/mapanit)

</div>
