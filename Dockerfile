# Используем официальный Node.js образ с LTS версией
FROM node:20.14.0

# Установим рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения в контейнер
COPY . .

# Сборка приложения
RUN npm run build

# Устанавливаем переменную окружения для указания того, что мы будем использовать Vite
ENV VITE_PORT=3000

# Указываем команду для запуска приложения
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host"]

# Экспонируем порт
EXPOSE 3000