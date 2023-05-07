'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('articles', [
      {
        title: 'Анекдот про рыбака',
        text: 'Вышел на лёд порыбачить... Решил не сидеть в общей куче, отошел от нее метров пятьсот, осмотрелся. Вижу, вдалеке сидят три мужика — ну, думаю, не просто так сидят. Решил к ним. Лед становился тоньше, и вскоре я почувствовал, как под ним двигается волна. Мужики меня заметили, встали, взяли короткий разбег, взмахнули крыльями и полетели... Это были большие птицы — или орланы, или ещё какие-нибудь. Половину обратной дороги я полз. С тех самых пор беру бинокль. Штаны не намочил, но трясло знатно.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'История из жиз',
        text: 'Однажды возвращаюсь домой с работы позднее обычного, не просто вечером, а уже около полуночи. Выхожу из метро, народа на улице - никого, только у церкви две самых стойких нищенки собираются, готовясь идти по домам. При этом одна из них неплохим литературным языком, без единого матюка, раздражённо выговаривает второй: "Ну нельзя же быть такой жадной, это же просто ужас какой-то. Ты одной дочке квартиру купила, другой - купила. Казалось бы, можно уже угомониться, так ведь нет! Ну кем вообще надо быть, чтобы с твоими доходами у своей же соседки мелочь из кружки тырить?"',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'вопрос важный',
        text: 'Привiт умирач. Имею на руках слабый новутбук с вин 8.1, однако изначально там была предустановлена вин10. Недавнее прекращение поддержи 8.1 винды стимом вынудило перекочевать обратно на 10, после чего в играх по понятным причинам упал фпс и фреймрейт. Посему хочу поставить второй системой вин 7, для тех игр что не тянут. Вопрос, безопасно ли в 2023 юзать вин 7 с подключенным интернетом? Или за 3 года без поддержки уже накопилось уязвимостей? Я знаю, на этой борде много ретроградов.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТРЕД ДИСКУССИИ О ФИЛЬМЕ ПЫЛЬ',
        text: 'Когда смотрел этот фильм постоянно было ощущение раскрытия этим фильмом какой-то гениальной философии или великого смысла, причём понять это я до конца не мог, конец вообще почти поставил меня в ступор. В чём смысл этого фильма? Зачем он снят? Что режиссер хотел донести своим зрителям?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('articles', null);
  },
};
