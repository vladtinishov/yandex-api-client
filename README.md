# yandex-api-client

## Инициализация

```
npm install
```

## Кратко

В яндекс api создать рекламу можно в три шага:

1. Создать кампанию
2. Создать рекламную группу
3. Создать рекламу

## Сбор данных

Все инструкции можно по сбору данных можно получить получить по [ссылке](https://yandex.ru/dev/direct/doc/start/access-request.html).
> Из продуктов Yandex API нужно также выбрать Аудитории

Главное и единственное что нужно получить это токен.

## Подстановка

После получения токена, нужно переименовать **src/auth.example.js** в **src/auth.js**.
В файле есть объект **auth_data** с полем *token*, в него нужно указать полученный токен.

## Создание рекламы

> все примеры берутся из **src/queryData.js**
Во всех запросах необходимо указывать токен

1. Создание кампании

На адресс
<pre>
https://api-sandbox.direct.yandex.com/json/v5/campaigns
</pre>
отправляется объект *campaign*. После чего нужно сохранить id кампании.

2. Создание рекламной группы

На адресс
<pre>
https://api-sandbox.direct.yandex.com/json/v5/adgroups
</pre>
Отправляется объект *adGroup*, в котором нужно указать id кампании.После чего нужно сохранить id группы.


3. Создание рекламного объявления

На адресс
<pre>
https://api-sandbox.direct.yandex.com/json/v5/ads
</pre>
Отправляется объект *ad*, в котором нужно указать id группы. После чего нужно сохранить id группы.

##### Инструкция по получению AdImageHash

На адрес 
<pre>
https://api-sandbox.direct.yandex.com/json/v5/adimages
</pre>
Нужно отправить объект image. В поле ImageData указать base64Binary изображения. В ответе будет hash этого изображения и его нужно будет вставить в AdImageHash.

## Подключение таргетинговой группы

Для подключения её нужно создать аудиторию
Сделать это можно двумя путями:
1. Через api
2. Через сайт

В любом случае, нужно получить её ID.

Далее нужно отправить по ссылке
<pre>
https://api-sandbox.direct.yandex.com/json/v5/retargetinglists
</pre>

объект *retargeting*, где в поле *ExternalId* нужно указать id аудитории. После нужно получить id группы.

Далее, чтобы прикрепить аудиторию к рекламе, нужно отправить по ссылке
<pre>
https://api-sandbox.direct.yandex.com/json/v5/audiencetargets
</pre>

объект *addAudience*, где в поле *AdGroupId* нужно указать id рекламной группы, а в *RetargetingListId* id таргетинговой группы.

Документация по всем ресурсам находится [здесь](https://yandex.ru/dev/direct/doc/ref-v5/concepts/about.html)