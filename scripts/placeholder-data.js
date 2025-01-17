import { randomUUID } from 'crypto';

export const customers = [
  {
    id: randomUUID(),
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/images/customers/delba-de-oliveira.png',
  },
  {
    id: randomUUID(),
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/images/customers/lee-robinson.png',
  },
  {
    id: randomUUID(),
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/images/customers/hector-simpson.png',
  },
  {
    id: randomUUID(),
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/images/customers/steven-tey.png',
  },
  {
    id: randomUUID(),
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/images/customers/steph-dietz.png',
  },
  {
    id: randomUUID(),
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/images/customers/michael-novotny.png',
  },
  {
    id: randomUUID(),
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/images/customers/evil-rabbit.png',
  },
  {
    id: randomUUID(),
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/images/customers/emil-kowalski.png',
  },
  {
    id: randomUUID(),
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/images/customers/amy-burns.png',
  },
  {
    id: randomUUID(),
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/images/customers/balazs-orban.png',
  },
  {
    id: randomUUID(),
    name: 'Guillermo Rauch',
    email: 'guillermo@rauch.com',
    image_url: '/images/customers/guillermo-rauch.png',
  },
];

export const invoices = [
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    id: randomUUID(),
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    id: randomUUID(),
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

export const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];
