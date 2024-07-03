<script setup>

import TransactionGroup from "@/views/account/transactions/components/index/TransactionGroup.vue";

const transaction = [
  {date: '20.06.2024', items: [
      {category: 'Подарунки дуже довга назва категорії', account: 'Готівка', sum: -45000000000000, desc: 'Також довгий опис транзакції'},
      {category: 'Їжа та напої', account: 'Готівка', sum: -1200, desc: 'Купили суші'}
    ]},
  {date: '18.06.2024', items: [
      {category: 'Зарплата', account: 'Готівка', sum: 3000, desc: null},
      {category: 'Здоров\'я дуже довга назва категорії', account: 'Готівка', sum: -1200, desc: 'Консультація лікаря'}
    ]},
  {date: '17.06.2024', items: [
      {category: 'Оренда житла', account: 'Карта', sum: -8000, desc: null}
    ]},
  {date: '15.06.2024', items: [
      {category: 'Розваги', account: 'Карта', sum: -500, desc: 'Кінотеатр'},
      {category: 'Зарплата', account: 'Банк', sum: 5000, desc: null},
      {category: 'Транспорт', account: 'Готівка', sum: -200, desc: 'Таксі'}
    ]},
  {date: '13.06.2024', items: [
      {category: 'Інтернет', account: 'Карта', sum: -400, desc: 'Щомісячна оплата'}
    ]},
  {date: '12.06.2024', items: [
      {category: 'Комунальні послуги', account: 'Карта', sum: -1500, desc: 'Оплата за газ'}
    ]},
  {date: '10.06.2024', items: [
      {category: 'Подорожі', account: 'Карта', sum: -2500, desc: 'Бронювання готелю'},
      {category: 'Зарплата', account: 'Карта', sum: 4000, desc: null}
    ]},
  {date: '08.06.2024', items: [
      {category: 'Ремонт авто', account: 'Готівка', sum: -3000, desc: 'Заміна масла'}
    ]},
  {date: '07.06.2024', items: [
      {category: 'Спорт і фітнес', account: 'Карта', sum: -600, desc: 'Абонемент у спортзал'},
      {category: 'Зарплата', account: 'Карта', sum: 3500, desc: null},
      {category: 'Їжа та напої', account: 'Готівка', sum: -900, desc: 'Покупка в супермаркеті'}
    ]},
  {date: '05.06.2024', items: [
      {category: 'Освіта', account: 'Готівка', sum: -2000, desc: 'Курси англійської мови'}
    ]},
  {date: '04.06.2024', items: [
      {category: 'Розваги', account: 'Карта', sum: -700, desc: 'Квест-кімната'}
    ]},
  {date: '02.06.2024', items: [
      {category: 'Здоров\'я', account: 'Готівка', sum: -500, desc: 'Ліки'}
    ]},
  {date: '01.06.2024', items: [
      {category: 'Подарунки', account: 'Готівка', sum: -300, desc: null},
      {category: 'Транспорт', account: 'Готівка', sum: -150, desc: 'Квиток на автобус'}
    ]},
  {date: '30.05.2024', items: [
      {category: 'Розваги', account: 'Карта', sum: -1200, desc: 'Вечірка'}
    ]},
  {date: '28.05.2024', items: [
      {category: 'Їжа та напої', account: 'Готівка', sum: -1000, desc: 'Вечеря в ресторані'},
      {category: 'Зарплата', account: 'Банк', sum: 4500, desc: null},
      {category: 'Освіта', account: 'Готівка', sum: -1200, desc: 'Книги'}
    ]},
  {date: '25.05.2024', items: [
      {category: 'Транспорт', account: 'Готівка', sum: -100, desc: 'Проїзд в метро'}
    ]},
  {date: '23.05.2024', items: [
      {category: 'Інтернет', account: 'Карта', sum: -350, desc: 'Щомісячна оплата'},
      {category: 'Комунальні послуги', account: 'Карта', sum: -2000, desc: 'Оплата за електрику'}
    ]},
  {date: '20.05.2024', items: [
      {category: 'Подорожі', account: 'Карта', sum: -4000, desc: 'Квитки на літак'}
    ]},
  {date: '18.05.2024', items: [
      {category: 'Зарплата', account: 'Готівка', sum: 3000, desc: null},
      {category: 'Їжа та напої', account: 'Готівка', sum: -700, desc: 'Сніданок в кафе'}
    ]},
  {date: '15.05.2024', items: [
      {category: 'Подарунки', account: 'Готівка', sum: -450, desc: null},
      {category: 'Транспорт', account: 'Готівка', sum: -300, desc: 'Проїзд в таксі'},
      {category: 'Зарплата', account: 'Карта', sum: 3200, desc: null},
      {category: 'Здоров\'я', account: 'Готівка', sum: -900, desc: 'Консультація стоматолога'}
    ]},
  {date: '13.05.2024', items: [
      {category: 'Освіта', account: 'Готівка', sum: -1500, desc: 'Онлайн курс програмування'}
    ]}
];
</script>
<template>
<div>
  <v-card class="mb-2" title="Історія транзакцій"/>
  <v-card>
    <v-card-text>

      <TransactionGroup
          v-for="group in transaction"
          :group="group"
      />
      <v-fab
          app
          icon="mdi-plus"
          class="mb-14"
          :to="{name: 'transactions.create'}"
      />
    </v-card-text>
  </v-card>
</div>
</template>

<style scoped>

</style>
