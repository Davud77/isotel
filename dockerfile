# Используем официальный образ Node.js в качестве базового
FROM node:18-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml

# Устанавливаем Yarn 3
RUN yarn set version berry

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы приложения в рабочую директорию
COPY . .

# Открываем порт 3000 для доступа к приложению
EXPOSE 3000

# Определяем команду для запуска приложения
CMD ["yarn", "dev"]
