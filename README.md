# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Установка
    Версия node js: v20.14.0
    Версия vite: 5.4.0
    
1.  С использованием Docker
2.  Создаём папку, переходим в текстовый редактор с терминалом, у меня это vs code
3.  В терминале пишем: git clone https://github.com/AntonWeb-web/authorization-testovoe-.git
4.  После клонирования переходим в папку с проектом: cd .\authorization-testovoe-\
5.  Пишем: docker build -t my-react-app .
6.  Запускаем контейнер: docker run -p 3000:3000 my-react-app
7.  Всё должно работать :)

// Если Docker не работает

1.  Создайте папку на рабочем столе 
2.  Кликните по ней правой кнопкой мыши и
3.  Найдите меню "Открыть с помощью"
4.  выберите любой текстовый редактор с терминалом. Я использую vs code
5.  Переходим в терминал и пишем там: git clone https://github.com/AntonWeb-web/authorization-testovoe-.git
6.  После клонирования проекта, пишем в терминале: cd .\authorization-testovoe-\
7.  После перехода в папку с проектом, пишем также в терминале: npm i
8.  После установки модулей, пишем npm run dev

// Для проверки работоспособности я использовал временные почты, на которые приходили коды подтверждения