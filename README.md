# Simple notification lib

## ENG

This javascript library allows you to create adaptive notifications with animations, but since this is my first library, the functionality is not great.

To create a notification (you can only create one notification per page for now), you need to use a ready-made page template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <link rel="stylesheet" href="simple_notification_lib.css" />
  </head>
  <body>
    <div class="lib-style-notification"></div>
    <script src="simple_notification_lib.js"></script>
    <script src="notification_call.js"></script>
  </body>
</html>
```

In this template, all library files (simple_notification_lib.css and simple_notification_lib.js) should be in the root of the project

Then you need to create a new javascript file (in our case notification_call.js), in which you need to write the following code:

```javascript
notification.create({
  title: `Example title`,
  content: `Example content`,
  link: `https://github.com/SKeLeTON5227?tab=repositories`,
});
notification.show();
```

## RUS

Эта javascript-библиотека позволяет создавать адаптивные уведомления с анимацией, но так как это моя первая библиотека, то функциональность невелика.

Чтобы создать уведомление (пока можно создать только одно уведомление на странице), желательно использовать готовый шаблон страницы:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <link rel="stylesheet" href="simple_notification_lib.css" />
  </head>
  <body>
    <div class="lib-style-notification"></div>
    <script src="simple_notification_lib.js"></script>
    <script src="notification_call.js"></script>
  </body>
</html>
```

В этом шаблоне все файлы библиотеки (simple_notification_lib.css и simple_notification_lib.js) должны находиться в корне проекта

Затем нужно создать новый файл javascript (в нашем случае notification_call.js), в котором нужно написать следующий код:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  notification.create({
    title: `Example title`,
    content: `Example content`,
    link: `https://github.com/SKeLeTON5227?tab=repositories`,
  });
  notification.show();
});
```
