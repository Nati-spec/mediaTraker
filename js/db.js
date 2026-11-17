// js/db.js — Локальная база данных (30 карточек: фильмы, сериалы, аниме) и клиентский API без сервера
const INITIAL_DB_DATA = {
  "media": [
    {
      "id": 1,
      "title": "Во все тяжкие",
      "originalTitle": "Breaking Bad",
      "type": "series",
      "releaseYear": 2008,
      "duration": 47,
      "totalEpisodes": 62,
      "ageRating": "18+",
      "genres": [
        "Драма",
        "Триллер"
      ],
      "rating": 9.5,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      "localPoster": "img/poster-1.svg",
      "description": "Школьный учитель химии Уолтер Уайт узнает о смертельном диагнозе и начинает производство метамфетамина вместе с бывшим учеником Джесси Пинкманом."
    },
    {
      "id": 2,
      "title": "Чернобыль",
      "originalTitle": "Chernobyl",
      "type": "series",
      "releaseYear": 2019,
      "duration": 65,
      "totalEpisodes": 5,
      "ageRating": "18+",
      "genres": [
        "Драма",
        "Триллер"
      ],
      "rating": 9.4,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/193/482599.jpg",
      "localPoster": "img/poster-2.svg",
      "description": "Реконструкция событий апреля 1986 года на Чернобыльской АЭС и героических усилий ликвидаторов катастрофы."
    },
    {
      "id": 3,
      "title": "Прослушка",
      "originalTitle": "The Wire",
      "type": "series",
      "releaseYear": 2002,
      "duration": 59,
      "totalEpisodes": 60,
      "ageRating": "18+",
      "genres": [
        "Драма",
        "Детектив",
        "Триллер"
      ],
      "rating": 9.3,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/504/1260189.jpg",
      "localPoster": "img/poster-3.svg",
      "description": "Подразделение полиции Балтимора использует прослушку и скрытое наблюдение для расследования преступных синдикатов города."
    },
    {
      "id": 4,
      "title": "Игра престолов",
      "originalTitle": "Game of Thrones",
      "type": "series",
      "releaseYear": 2011,
      "duration": 57,
      "totalEpisodes": 73,
      "ageRating": "18+",
      "genres": [
        "Фантастика",
        "Драма"
      ],
      "rating": 9.2,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
      "localPoster": "img/poster-4.svg",
      "description": "Благородные дома Вестероса ведут жестокую борьбу за Железный трон, пока на севере пробуждается древнее зло."
    },
    {
      "id": 5,
      "title": "Клан Сопрано",
      "originalTitle": "The Sopranos",
      "type": "series",
      "releaseYear": 1999,
      "duration": 55,
      "totalEpisodes": 86,
      "ageRating": "18+",
      "genres": [
        "Драма",
        "Триллер"
      ],
      "rating": 9.2,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg",
      "localPoster": "img/poster-5.svg",
      "description": "Криминальный босс Северного Джерси Тони Сопрано пытается сохранить баланс между требованиями мафиозной семьи и личной жизнью."
    },
    {
      "id": 6,
      "title": "Шерлок",
      "originalTitle": "Sherlock",
      "type": "series",
      "releaseYear": 2010,
      "duration": 88,
      "totalEpisodes": 13,
      "ageRating": "16+",
      "genres": [
        "Детектив",
        "Драма",
        "Триллер"
      ],
      "rating": 9.1,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/171/428042.jpg",
      "localPoster": "img/poster-6.svg",
      "description": "Современная адаптация классических историй Артура Конан Дойла о гениальном сыщике Шерлоке Холмсе и докторе Ватсоне в Лондоне XXI века."
    },
    {
      "id": 7,
      "title": "Лучше звоните Солу",
      "originalTitle": "Better Call Saul",
      "type": "series",
      "releaseYear": 2015,
      "duration": 46,
      "totalEpisodes": 63,
      "ageRating": "18+",
      "genres": [
        "Драма",
        "Триллер"
      ],
      "rating": 9.0,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253515.jpg",
      "localPoster": "img/poster-7.svg",
      "description": "История превращения мелкого адвоката Джимми Макгилла в беспринципного юриста криминального мира Альбукерке Сола Гудмана."
    },
    {
      "id": 8,
      "title": "Настоящий детектив",
      "originalTitle": "True Detective",
      "type": "series",
      "releaseYear": 2014,
      "duration": 58,
      "totalEpisodes": 24,
      "ageRating": "18+",
      "genres": [
        "Детектив",
        "Драма",
        "Триллер"
      ],
      "rating": 8.9,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg",
      "localPoster": "img/poster-8.svg",
      "description": "Детективы Раст Коул и Марти Харт расследуют серию оккультных убийств в Луизиане на протяжении семнадцати лет."
    },
    {
      "id": 9,
      "title": "Тьма",
      "originalTitle": "Dark",
      "type": "series",
      "releaseYear": 2017,
      "duration": 53,
      "totalEpisodes": 26,
      "ageRating": "18+",
      "genres": [
        "Фантастика",
        "Детектив",
        "Триллер"
      ],
      "rating": 8.8,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/504/1262353.jpg",
      "localPoster": "img/poster-9.svg",
      "description": "Исчезновение двух детей в немецком городке Винден раскрывает мрачные тайны четырех семей и запутанную петлю путешествий во времени."
    },
    {
      "id": 10,
      "title": "Очень странные дела",
      "originalTitle": "Stranger Things",
      "type": "series",
      "releaseYear": 2016,
      "duration": 51,
      "totalEpisodes": 34,
      "ageRating": "16+",
      "genres": [
        "Фантастика",
        "Детектив",
        "Триллер"
      ],
      "rating": 8.7,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/396/991288.jpg",
      "localPoster": "img/poster-10.svg",
      "description": "В тихом городке Хоукинс загадочно исчезает мальчик, а его друзья встречают девочку со сверхспособностями и сталкиваются с параллельным миром."
    },
    {
      "id": 11,
      "title": "Атака титанов",
      "originalTitle": "Attack on Titan",
      "type": "series",
      "releaseYear": 2013,
      "duration": 24,
      "totalEpisodes": 87,
      "ageRating": "18+",
      "genres": [
        "Фантастика",
        "Аниме",
        "Драма"
      ],
      "rating": 9.1,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/485/1214266.jpg",
      "localPoster": "img/poster-11.svg",
      "description": "Остатки человечества укрылись за тремя гигантскими стенами от кровожадных титанов, но однажды колоссальный титан пробивает внешнюю стену."
    },
    {
      "id": 12,
      "title": "Стальной алхимик: Братство",
      "originalTitle": "Fullmetal Alchemist: Brotherhood",
      "type": "series",
      "releaseYear": 2009,
      "duration": 24,
      "totalEpisodes": 64,
      "ageRating": "16+",
      "genres": [
        "Аниме",
        "Фантастика",
        "Драма"
      ],
      "rating": 9.1,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/35/89567.jpg",
      "localPoster": "img/poster-12.svg",
      "description": "Братья Элрики путешествуют по стране в поисках философского камня, чтобы восстановить свои тела после запретного алхимического ритуала."
    },
    {
      "id": 13,
      "title": "Провожающая в последний путь Фрирен",
      "originalTitle": "Frieren: Beyond Journey's End",
      "type": "series",
      "releaseYear": 2023,
      "duration": 24,
      "totalEpisodes": 28,
      "ageRating": "12+",
      "genres": [
        "Аниме",
        "Фантастика",
        "Драма"
      ],
      "rating": 9.1,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/475/1188356.jpg",
      "localPoster": "img/poster-13.svg",
      "description": "Эльфийская волшебница Фрирен после победы над Королем демонов отправляется в новое путешествие, чтобы понять ценность человеческой жизни."
    },
    {
      "id": 14,
      "title": "Аркейн",
      "originalTitle": "Arcane",
      "type": "series",
      "releaseYear": 2021,
      "duration": 41,
      "totalEpisodes": 18,
      "ageRating": "16+",
      "genres": [
        "Аниме",
        "Фантастика",
        "Драма"
      ],
      "rating": 9.0,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/542/1356137.jpg",
      "localPoster": "img/poster-14.svg",
      "description": "История двух сестер, оказавшихся по разные стороны баррикад в конфликте между утопическим Пилтовером и угнетенным Зауном."
    },
    {
      "id": 15,
      "title": "Врата Штейна",
      "originalTitle": "Steins;Gate",
      "type": "series",
      "releaseYear": 2011,
      "duration": 24,
      "totalEpisodes": 24,
      "ageRating": "16+",
      "genres": [
        "Аниме",
        "Фантастика",
        "Триллер"
      ],
      "rating": 9.0,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/36/92241.jpg",
      "localPoster": "img/poster-15.svg",
      "description": "Студент-изобретатель случайно превращает микроволновку в машину времени для отправки сообщений в прошлое."
    },
    {
      "id": 16,
      "title": "Тетрадь смерти",
      "originalTitle": "Death Note",
      "type": "series",
      "releaseYear": 2006,
      "duration": 23,
      "totalEpisodes": 37,
      "ageRating": "18+",
      "genres": [
        "Аниме",
        "Триллер",
        "Детектив"
      ],
      "rating": 8.9,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245650.jpg",
      "localPoster": "img/poster-16.svg",
      "description": "Гениальный школьник Лайт Ягами находит тетрадь бога смерти и решает очистить мир от преступников, бросая вызов детективу L."
    },
    {
      "id": 17,
      "title": "Ковбой Бибоп",
      "originalTitle": "Cowboy Bebop",
      "type": "series",
      "releaseYear": 1998,
      "duration": 24,
      "totalEpisodes": 26,
      "ageRating": "18+",
      "genres": [
        "Аниме",
        "Фантастика",
        "Драма"
      ],
      "rating": 8.9,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/19/47952.jpg",
      "localPoster": "img/poster-17.svg",
      "description": "Команда охотников за головами на космическом корабле «Бибоп» бороздит просторы Солнечной системы."
    },
    {
      "id": 18,
      "title": "Монстр",
      "originalTitle": "Monster",
      "type": "series",
      "releaseYear": 2004,
      "duration": 24,
      "totalEpisodes": 74,
      "ageRating": "18+",
      "genres": [
        "Аниме",
        "Детектив",
        "Триллер"
      ],
      "rating": 8.7,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/21/54965.jpg",
      "localPoster": "img/poster-18.svg",
      "description": "Талантливый нейрохирург Кэндзо Тэмма спасает жизнь мальчику с огнестрельным ранением, не подозревая, что вырастит хладнокровного серийного убийцу."
    },
    {
      "id": 19,
      "title": "Клинок, рассекающий демонов",
      "originalTitle": "Demon Slayer",
      "type": "series",
      "releaseYear": 2019,
      "duration": 24,
      "totalEpisodes": 55,
      "ageRating": "16+",
      "genres": [
        "Аниме",
        "Драма"
      ],
      "rating": 8.6,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/518/1297057.jpg",
      "localPoster": "img/poster-19.svg",
      "description": "Юный Тандзиро Камадо становится истребителем демонов, чтобы спасти свою сестру Незуко, обращенную в демона."
    },
    {
      "id": 20,
      "title": "Токийский гуль",
      "originalTitle": "Tokyo Ghoul",
      "type": "series",
      "releaseYear": 2014,
      "duration": 24,
      "totalEpisodes": 48,
      "ageRating": "18+",
      "genres": [
        "Аниме",
        "Триллер",
        "Фантастика"
      ],
      "rating": 7.8,
      "poster": "https://static.tvmaze.com/uploads/images/medium_portrait/22/55788.jpg",
      "localPoster": "img/poster-20.svg",
      "description": "Студент Кэн Канэки после пересадки органов превращается в полугуля и оказывается на грани войны между людьми и плотоядными существами."
    },
    {
      "id": 21,
      "title": "Побег из Шоушенка",
      "originalTitle": "The Shawshank Redemption",
      "type": "movie",
      "releaseYear": 1994,
      "duration": 142,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Драма"
      ],
      "rating": 9.3,
      "poster": "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      "localPoster": "img/poster-21.svg",
      "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он не теряет надежды на свободу."
    },
    {
      "id": 22,
      "title": "Крестный отец",
      "originalTitle": "The Godfather",
      "type": "movie",
      "releaseYear": 1972,
      "duration": 175,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Драма",
        "Триллер"
      ],
      "rating": 9.2,
      "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "localPoster": "img/poster-22.svg",
      "description": "Криминальная сага, повествующая о нью-йоркской сицилийской мафиозной семье Корлеоне в период 1945–1955 годов."
    },
    {
      "id": 23,
      "title": "Темный рыцарь",
      "originalTitle": "The Dark Knight",
      "type": "movie",
      "releaseYear": 2008,
      "duration": 152,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Триллер",
        "Драма",
        "Детектив"
      ],
      "rating": 9.0,
      "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "localPoster": "img/poster-23.svg",
      "description": "Бэтмен, лейтенант Гордон и прокурор Харви Дент вступают в бескомпромиссное противостояние с гением преступного хаоса Джокером."
    },
    {
      "id": 24,
      "title": "Криминальное чтиво",
      "originalTitle": "Pulp Fiction",
      "type": "movie",
      "releaseYear": 1994,
      "duration": 154,
      "totalEpisodes": 1,
      "ageRating": "18+",
      "genres": [
        "Триллер",
        "Драма"
      ],
      "rating": 8.9,
      "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "localPoster": "img/poster-24.svg",
      "description": "Переплетающиеся криминальные истории двух бандитов Винсента Веги и Джулса Уиннфилда, жены мафиози Мии Уоллес и боксера Бутча Кулиджа."
    },
    {
      "id": 25,
      "title": "Начало",
      "originalTitle": "Inception",
      "type": "movie",
      "releaseYear": 2010,
      "duration": 148,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Фантастика",
        "Триллер",
        "Детектив"
      ],
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      "localPoster": "img/poster-25.svg",
      "description": "Профессиональный извлекатель секретов из чужих сновидений Дом Кобб берется за невозможную операцию — внедрение новой идеи в подсознание."
    },
    {
      "id": 26,
      "title": "Бойцовский клуб",
      "originalTitle": "Fight Club",
      "type": "movie",
      "releaseYear": 1999,
      "duration": 139,
      "totalEpisodes": 1,
      "ageRating": "18+",
      "genres": [
        "Триллер",
        "Драма"
      ],
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      "localPoster": "img/poster-26.svg",
      "description": "Сотрудник страховой компании, страдающий хронической бессонницей, встречает харизматичного торговца мылом Тайлера Дердена и создает подпольный бойцовский клуб."
    },
    {
      "id": 27,
      "title": "Дюна: Часть вторая",
      "originalTitle": "Dune: Part Two",
      "type": "movie",
      "releaseYear": 2024,
      "duration": 166,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Фантастика",
        "Драма"
      ],
      "rating": 8.8,
      "poster": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "localPoster": "img/poster-27.svg",
      "description": "Пол Атрейдес объединяется с фрименами пустынной планеты Арракис, чтобы отомстить заговорщикам, уничтожившим его семью."
    },
    {
      "id": 28,
      "title": "Интерстеллар",
      "originalTitle": "Interstellar",
      "type": "movie",
      "releaseYear": 2014,
      "duration": 169,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Фантастика",
        "Драма"
      ],
      "rating": 8.7,
      "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "localPoster": "img/poster-28.svg",
      "description": "Когда засуха и пыльные бури приводят человечество к продовольственному кризису, коллектив исследователей отправляется сквозь червоточину в космосе."
    },
    {
      "id": 29,
      "title": "Матрица",
      "originalTitle": "The Matrix",
      "type": "movie",
      "releaseYear": 1999,
      "duration": 136,
      "totalEpisodes": 1,
      "ageRating": "16+",
      "genres": [
        "Фантастика",
        "Триллер"
      ],
      "rating": 8.7,
      "poster": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "localPoster": "img/poster-29.svg",
      "description": "Хакер Нео узнает от таинственного Морфеуса, что привычный мир — лишь иллюзия, созданная разумными машинами для порабощения человечества."
    },
    {
      "id": 30,
      "title": "Унесенные призраками",
      "originalTitle": "Spirited Away",
      "type": "movie",
      "releaseYear": 2001,
      "duration": 125,
      "totalEpisodes": 1,
      "ageRating": "12+",
      "genres": [
        "Аниме",
        "Фантастика"
      ],
      "rating": 8.6,
      "poster": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "localPoster": "img/poster-30.svg",
      "description": "Десятилетняя Тихиро попадает в таинственный мир духов и древних богов, где ей предстоит спасти своих родителей от колдовства ведьмы Юбабы."
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "admin_mark",
      "email": "admin@tracker.ru",
      "password": "adminpassword",
      "role": "admin",
      "mustChangePassword": false,
      "created_at": "2026-01-10"
    },
    {
      "id": 2,
      "username": "alex_critic",
      "email": "alex@example.com",
      "password": "password123",
      "role": "user",
      "mustChangePassword": false,
      "created_at": "2026-01-12"
    },
    {
      "id": 3,
      "username": "elena_movie",
      "email": "elena@example.com",
      "password": "password123",
      "role": "user",
      "mustChangePassword": false,
      "created_at": "2026-01-15"
    }
  ],
  "reviews": [
    {
      "id": 1,
      "mediaId": 1,
      "userId": 2,
      "username": "alex_critic",
      "score": 9,
      "title": "Невероятная химия персонажей",
      "body": "Дуэт Брайана Крэнстона и Аарона Пола вытягивает каждую драматическую сцену. Сценарий прописан до мельчайших деталей без проходных эпизодов.",
      "hasSpoilers": false,
      "helpfulUp": 14,
      "helpfulDown": 1,
      "date": "15 февраля 2026"
    },
    {
      "id": 2,
      "mediaId": 1,
      "userId": 3,
      "username": "elena_movie",
      "score": 10,
      "title": "Идеальный сюжетный твист в финале сезона",
      "body": "Финальное противостояние Уолтера Уайта и Гуса Фринга в доме престарелых — один из самых напряженных моментов в истории телевидения, когда Гектор Саламанка нажимает на звонок!",
      "hasSpoilers": false,
      "helpfulUp": 21,
      "helpfulDown": 0,
      "date": "01 марта 2026"
    },
    {
      "id": 3,
      "mediaId": 11,
      "userId": 3,
      "username": "elena_movie",
      "score": 8,
      "title": "Неожиданная правда о титанах",
      "body": "Во втором сезоне выясняется, что Райнер и Бертольт на самом деле и есть Бронированный и Колоссальный титаны, которые разрушили стену Мария.",
      "hasSpoilers": false,
      "helpfulUp": 9,
      "helpfulDown": 4,
      "date": "10 марта 2026"
    }
  ],
  "complaints": [
    {
      "id": 1,
      "review_id": 2,
      "media_id": 1,
      "media_title": "Во все тяжкие (Breaking Bad)",
      "author_name": "elena_movie",
      "reason": "Раскрытие ключевого сюжетного поворота финала 4-го сезона без флага спойлера (has_spoilers = false)",
      "comment_excerpt": "«Финальное противостояние Уолтера Уайта и Гуса Фринга в доме престарелых — один из самых напряженных моментов в истории телевидения, когда Гектор Саламанка нажимает на звонок!»",
      "created_at": "12 марта 2026, 14:20"
    },
    {
      "id": 2,
      "review_id": 3,
      "media_id": 11,
      "media_title": "Атака титанов (Attack on Titan)",
      "author_name": "elena_movie",
      "reason": "Прямое раскрытие личности главных антагонистов без предупреждения для новых зрителей",
      "comment_excerpt": "«Во втором сезоне выясняется, что Райнер и Бертольт на самом деле и есть Бронированный и Колоссальный титаны, которые разрушили стену Мария.»",
      "created_at": "14 марта 2026, 18:05"
    }
  ],
  "user_lists": []
};

const LocalDB = {
  init() {
    if (!localStorage.getItem('mt_local_v3_media')) {
      localStorage.setItem('mt_local_v3_media', JSON.stringify(INITIAL_DB_DATA.media));
    }
    if (!localStorage.getItem('mt_local_v3_users')) {
      localStorage.setItem('mt_local_v3_users', JSON.stringify(INITIAL_DB_DATA.users));
    }
    if (!localStorage.getItem('mt_local_v3_reviews')) {
      localStorage.setItem('mt_local_v3_reviews', JSON.stringify(INITIAL_DB_DATA.reviews));
    }
    if (!localStorage.getItem('mt_local_v3_complaints')) {
      localStorage.setItem('mt_local_v3_complaints', JSON.stringify(INITIAL_DB_DATA.complaints));
    }
    if (!localStorage.getItem('mt_local_v3_lists')) {
      localStorage.setItem('mt_local_v3_lists', JSON.stringify(INITIAL_DB_DATA.user_lists));
    }
  },

  get(key) {
    this.init();
    return JSON.parse(localStorage.getItem('mt_local_v3_' + key) || '[]');
  },

  set(key, val) {
    localStorage.setItem('mt_local_v3_' + key, JSON.stringify(val));
  },

  generateTempPassword() {
    const part1 = Math.floor(1000 + Math.random() * 9000);
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let part2 = '';
    for (let i = 0; i < 4; i++) {
      part2 += chars[Math.floor(Math.random() * chars.length)];
    }
    return `MT-${part1}-${part2}`;
  }
};

const api = {
  token: localStorage.getItem('mt_jwt_token') || null,

  setToken(token) {
    this.token = token;
    if (token) localStorage.setItem('mt_jwt_token', token);
    else localStorage.removeItem('mt_jwt_token');
  },

  getCurrentUser() {
    if (!this.token) return null;
    const users = LocalDB.get('users');
    return users.find(u => String(u.id) === String(this.token)) || null;
  },

  async request(url, options = {}) {
    LocalDB.init();
    const method = (options.method || 'GET').toUpperCase();
    const body = options.body ? JSON.parse(options.body) : {};
    const curUser = this.getCurrentUser();

    // GET /api/media
    if (url === '/api/media' && method === 'GET') {
      const rows = LocalDB.get('media');
      return rows.sort((a, b) => b.rating - a.rating || a.id - b.id);
    }

    // POST /api/media
    if (url === '/api/media' && method === 'POST') {
      if (!curUser || curUser.role !== 'admin') throw new Error('Доступ разрешен только администратору');
      const media = LocalDB.get('media');
      const newId = media.reduce((m, x) => Math.max(m, x.id), 0) + 1;
      const ep = body.type === 'series' ? (parseInt(body.totalEpisodes, 10) || parseInt(body.duration, 10) || 10) : 1;
      const newItem = {
        id: newId,
        title: (body.title || '').trim(),
        originalTitle: (body.originalTitle || body.title || '').trim(),
        type: body.type || 'movie',
        releaseYear: parseInt(body.releaseYear, 10) || 2025,
        duration: parseInt(body.duration, 10) || 120,
        totalEpisodes: ep,
        ageRating: body.ageRating || '16+',
        genres: Array.isArray(body.genres) && body.genres.length > 0 ? body.genres : ['Фантастика', 'Драма'],
        rating: 8.5,
        poster: (body.poster && body.poster.trim()) ? body.poster.trim() : 'img/poster-1.svg',
        localPoster: 'img/poster-1.svg',
        description: body.description || 'Новое произведение, добавленное администратором в каталог MediaTracker.'
      };
      media.push(newItem);
      LocalDB.set('media', media);
      return { message: 'Медиаединица успешно сохранена в базу данных' };
    }

    // PUT /api/media/:id
    if (url.startsWith('/api/media/') && method === 'PUT') {
      if (!curUser || curUser.role !== 'admin') throw new Error('Доступ разрешен только администратору');
      const mediaId = parseInt(url.split('/').pop(), 10);
      const media = LocalDB.get('media');
      const idx = media.findIndex(x => x.id === mediaId);
      if (idx === -1) throw new Error('Карточка произведения не найдена');
      const existing = media[idx];
      const nextType = body.type || existing.type;
      media[idx] = {
        ...existing,
        title: (body.title || existing.title).trim(),
        originalTitle: (body.originalTitle || existing.originalTitle).trim(),
        type: nextType,
        releaseYear: parseInt(body.releaseYear, 10) || existing.releaseYear,
        duration: parseInt(body.duration, 10) || existing.duration,
        totalEpisodes: nextType === 'series' ? (parseInt(body.totalEpisodes, 10) || existing.totalEpisodes) : 1,
        ageRating: body.ageRating || existing.ageRating,
        poster: (body.poster && body.poster.trim()) ? body.poster.trim() : existing.poster,
        description: (body.description || existing.description).trim()
      };
      LocalDB.set('media', media);
      return { message: 'Изменения в карточке произведения сохранены в БД' };
    }

    // POST /api/auth/login
    if (url === '/api/auth/login' && method === 'POST') {
      const ident = (body.identifier || '').trim().toLowerCase();
      const pass = body.password || '';
      const users = LocalDB.get('users');
      const userRow = users.find(u => u.email.toLowerCase() === ident || u.username.toLowerCase() === ident);
      if (!userRow || userRow.password !== pass) {
        throw new Error('Неверный логин или пароль');
      }
      const userPayload = {
        id: userRow.id,
        username: userRow.username,
        email: userRow.email,
        role: userRow.role,
        mustChangePassword: Boolean(userRow.mustChangePassword)
      };
      return { user: userPayload, token: String(userRow.id) };
    }

    // POST /api/auth/register
    if (url === '/api/auth/register' && method === 'POST') {
      const username = (body.username || '').trim();
      const email = (body.email || '').trim();
      const password = body.password || '';
      if (username.length < 3) throw new Error('Имя пользователя должно содержать минимум 3 символа');
      if (!email.includes('@')) throw new Error('Укажите корректный email');
      if (password.length < 8) throw new Error('Пароль должен содержать минимум 8 символов');
      const users = LocalDB.get('users');
      if (users.some(u => u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === email.toLowerCase())) {
        throw new Error('Пользователь с таким логином или email уже существует');
      }
      const newUser = {
        id: users.reduce((m, u) => Math.max(m, u.id), 0) + 1,
        username,
        email,
        password,
        role: 'user',
        mustChangePassword: false,
        created_at: new Date().toISOString().slice(0, 10)
      };
      users.push(newUser);
      LocalDB.set('users', users);
      const userPayload = { id: newUser.id, username: newUser.username, email: newUser.email, role: 'user', mustChangePassword: false };
      return { user: userPayload, token: String(newUser.id) };
    }

    // GET /api/auth/me
    if (url === '/api/auth/me' && method === 'GET') {
      if (!curUser) throw new Error('Пользователь не найден');
      return {
        user: {
          id: curUser.id,
          username: curUser.username,
          email: curUser.email,
          role: curUser.role,
          mustChangePassword: Boolean(curUser.mustChangePassword)
        }
      };
    }

    // POST /api/auth/complete-setup
    if (url === '/api/auth/complete-setup' && method === 'POST') {
      if (!curUser) throw new Error('Требуется авторизация');
      const newUsername = (body.newUsername || '').trim();
      const newPassword = body.newPassword || '';
      if (newUsername.length < 3) throw new Error('Новое имя пользователя должно содержать минимум 3 символа');
      if (newPassword.length < 8) throw new Error('Постоянный пароль должен содержать минимум 8 символов');
      const users = LocalDB.get('users');
      if (users.some(u => u.username.toLowerCase() === newUsername.toLowerCase() && u.id !== curUser.id)) {
        throw new Error('Это имя пользователя уже занято, выберите другое');
      }
      const idx = users.findIndex(u => u.id === curUser.id);
      users[idx].username = newUsername;
      users[idx].password = newPassword;
      users[idx].mustChangePassword = false;
      LocalDB.set('users', users);
      const updated = users[idx];
      return {
        user: { id: updated.id, username: updated.username, email: updated.email, role: updated.role, mustChangePassword: false },
        token: String(updated.id)
      };
    }

    // GET /api/lists
    if (url === '/api/lists' && method === 'GET') {
      if (!curUser || curUser.role === 'admin') return [];
      return LocalDB.get('lists').filter(r => r.userId === curUser.id);
    }

    // POST /api/lists
    if (url === '/api/lists' && method === 'POST') {
      if (!curUser || curUser.role === 'admin') throw new Error('Администратор не может добавлять тайтлы в личные списки');
      const media = LocalDB.get('media').find(m => m.id === body.mediaId);
      if (!media) throw new Error('Тайтл не найден');
      const lists = LocalDB.get('lists');
      const idx = lists.findIndex(u => u.userId === curUser.id && u.mediaId === body.mediaId);
      const existing = idx !== -1 ? lists[idx] : null;

      let finalStatus = body.status || (existing ? existing.status : 'watching');
      let finalEp = body.episodesWatched !== undefined ? body.episodesWatched : (existing ? existing.episodesWatched : (finalStatus === 'watching' ? 1 : 0));
      let completedAt = existing ? existing.completedAt : null;

      if (finalStatus === 'completed' || finalEp >= media.totalEpisodes) {
        finalStatus = 'completed';
        finalEp = media.totalEpisodes;
        completedAt = completedAt || new Date().toLocaleDateString('ru-RU');
      }

      if (existing) {
        lists[idx] = {
          ...existing,
          status: finalStatus,
          episodesWatched: finalEp,
          userScore: body.userScore || existing.userScore,
          completedAt
        };
      } else {
        lists.push({
          id: lists.reduce((m, x) => Math.max(m, x.id), 0) + 1,
          userId: curUser.id,
          mediaId: body.mediaId,
          status: finalStatus,
          episodesWatched: finalEp,
          userScore: body.userScore || null,
          completedAt
        });
      }
      LocalDB.set('lists', lists);
      return { status: finalStatus, episodesWatched: finalEp };
    }

    // GET /api/reviews
    if (url === '/api/reviews' && method === 'GET') {
      return LocalDB.get('reviews').sort((a, b) => b.id - a.id);
    }

    // POST /api/reviews
    if (url === '/api/reviews' && method === 'POST') {
      if (!curUser || curUser.role === 'admin') throw new Error('Администратор не может оценивать произведения и оставлять зрительские рецензии');
      const lists = LocalDB.get('lists');
      const listEntry = lists.find(l => l.userId === curUser.id && l.mediaId === body.mediaId);
      if (!listEntry || listEntry.status === 'plan') {
        throw new Error('Оставить рецензию можно только на тайтл, который находится у вас в статусе «Смотрю», «Просмотрено» или «Брошено»');
      }
      if (!body.title || !body.body || body.body.trim().length < 50) {
        throw new Error('Заголовок обязателен, а текст рецензии должен быть не менее 50 символов');
      }
      const reviews = LocalDB.get('reviews');
      const dateStr = new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
      reviews.push({
        id: reviews.reduce((m, r) => Math.max(m, r.id), 0) + 1,
        mediaId: body.mediaId,
        userId: curUser.id,
        username: curUser.username,
        score: parseInt(body.score, 10) || 10,
        title: body.title.trim(),
        body: body.body.trim(),
        hasSpoilers: Boolean(body.hasSpoilers),
        helpfulUp: 1,
        helpfulDown: 0,
        date: dateStr
      });
      LocalDB.set('reviews', reviews);
      listEntry.userScore = parseInt(body.score, 10) || 10;
      LocalDB.set('lists', lists);
      return { message: 'Отзыв опубликован' };
    }

    // POST /api/reviews/:id/vote
    if (url.endsWith('/vote') && method === 'POST') {
      const revId = parseInt(url.split('/')[3], 10);
      const reviews = LocalDB.get('reviews');
      const rev = reviews.find(r => r.id === revId);
      if (rev) {
        if (body.dir === 'up') rev.helpfulUp += 1;
        else rev.helpfulDown += 1;
        LocalDB.set('reviews', reviews);
      }
      return { ok: true };
    }

    // POST /api/reviews/:id/report
    if (url.endsWith('/report') && method === 'POST') {
      const revId = parseInt(url.split('/')[3], 10);
      const rev = LocalDB.get('reviews').find(r => r.id === revId);
      if (!rev) throw new Error('Рецензия не найдена');
      const media = LocalDB.get('media').find(m => m.id === rev.mediaId);
      const mediaTitle = media ? `${media.title} (${media.originalTitle})` : `Тайтл #${rev.mediaId}`;
      const complaints = LocalDB.get('complaints');
      complaints.unshift({
        id: complaints.reduce((m, c) => Math.max(m, c.id), 0) + 1,
        review_id: rev.id,
        media_id: rev.mediaId,
        media_title: mediaTitle,
        author_name: rev.username,
        reason: (body && body.reason) ? body.reason.trim() : 'Жалоба пользователя: спойлеры без метки или нарушение правил сообщества',
        comment_excerpt: `«${rev.body}»`,
        created_at: new Date().toLocaleString('ru-RU')
      });
      LocalDB.set('complaints', complaints);
      return { message: 'Жалоба отправлена модератору' };
    }

    // GET /api/admin/complaints
    if (url === '/api/admin/complaints' && method === 'GET') {
      return LocalDB.get('complaints');
    }

    // POST /api/admin/complaints/:id/resolve
    if (url.startsWith('/api/admin/complaints/') && url.endsWith('/resolve')) {
      const compId = parseInt(url.split('/')[4], 10);
      let complaints = LocalDB.get('complaints');
      const comp = complaints.find(c => c.id === compId);
      if (comp) {
        let reviews = LocalDB.get('reviews');
        if (body.action === 'spoiler') {
          const r = reviews.find(x => x.id === comp.review_id);
          if (r) r.hasSpoilers = true;
        } else if (body.action === 'delete') {
          reviews = reviews.filter(x => x.id !== comp.review_id);
        }
        LocalDB.set('reviews', reviews);
        complaints = complaints.filter(c => c.id !== compId);
        LocalDB.set('complaints', complaints);
      }
      return { ok: true };
    }

    // GET /api/admin/admins
    if (url === '/api/admin/admins' && method === 'GET') {
      return LocalDB.get('users').filter(u => u.role === 'admin').map(u => ({
        id: u.id,
        username: u.username,
        email: u.email,
        role: u.role,
        must_change_password: u.mustChangePassword ? 1 : 0,
        created_at: u.created_at
      }));
    }

    // POST /api/admin/create-admin
    if (url === '/api/admin/create-admin' && method === 'POST') {
      const email = (body.email || '').trim();
      if (!email.includes('@')) throw new Error('Укажите корректный служебный email нового администратора');
      const baseLogin = (body.initialUsername && body.initialUsername.trim().length >= 3)
        ? body.initialUsername.trim()
        : `admin_${Math.floor(100 + Math.random() * 900)}`;
      const users = LocalDB.get('users');
      if (users.some(u => u.email.toLowerCase() === email.toLowerCase() || u.username.toLowerCase() === baseLogin.toLowerCase())) {
        throw new Error('Пользователь с таким email или логином уже зарегистрирован');
      }
      const tempPassword = LocalDB.generateTempPassword();
      users.push({
        id: users.reduce((m, u) => Math.max(m, u.id), 0) + 1,
        username: baseLogin,
        email,
        password: tempPassword,
        role: 'admin',
        mustChangePassword: true,
        created_at: new Date().toISOString().slice(0, 10)
      });
      LocalDB.set('users', users);
      return { username: baseLogin, email, tempPassword };
    }

    // POST /api/admin/change-password
    if (url === '/api/admin/change-password' && method === 'POST') {
      if (!body.newPassword || body.newPassword.length < 8) throw new Error('Новый пароль должен содержать минимум 8 символов');
      const users = LocalDB.get('users');
      const idx = users.findIndex(u => u.id === curUser.id);
      users[idx].password = body.newPassword;
      users[idx].mustChangePassword = false;
      LocalDB.set('users', users);
      return { message: 'Пароль администратора успешно обновлен' };
    }

    // POST /api/admin/handover-account
    if (url === '/api/admin/handover-account' && method === 'POST') {
      const users = LocalDB.get('users');
      const idx = users.findIndex(u => u.id === curUser.id);
      const tempPassword = LocalDB.generateTempPassword();
      users[idx].password = tempPassword;
      users[idx].mustChangePassword = true;
      LocalDB.set('users', users);
      return {
        email: curUser.email,
        tempPassword,
        message: 'Временный пароль для передачи аккаунта сгенерирован'
      };
    }

    return {};
  }
};

const store = {
  currentUser: null,
  media: [],
  userLists: [],
  reviews: [],
  complaints: [],
  adminsList: []
};
