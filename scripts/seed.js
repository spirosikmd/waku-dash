import sqlite from 'promised-sqlite3';
import { customers, invoices, revenue } from './placeholder-data.js';

async function seedCustomers(db) {
  await db.run(
    'CREATE TABLE IF NOT EXISTS customers (id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, image_url TEXT NOT NULL)'
  );

  const statement = await db.prepare(
    'INSERT INTO customers (id, name, email, image_url) VALUES (?, ?, ?, ?)'
  );

  for (const customer of customers) {
    await statement.run(
      customer.id,
      customer.name,
      customer.email,
      customer.image_url
    );
  }

  await statement.finalize();
}

async function seedInvoices(db) {
  await db.run(
    'CREATE TABLE IF NOT EXISTS invoices (id STRING PRIMARY KEY, customer_id INTEGER NOT NULL, amount INTEGER NOT NULL, status TEXT NOT NULL, date TEXT NOT NULL)'
  );

  const statement = await db.prepare(
    'INSERT INTO invoices (id, customer_id, amount, status, date) VALUES (?, ?, ?, ?, ?)'
  );

  for (const invoice of invoices) {
    await statement.run(
      invoice.id,
      invoice.customer_id,
      invoice.amount,
      invoice.status,
      invoice.date
    );
  }

  await statement.finalize();
}

async function seedRevenue(db) {
  await db.run(
    'CREATE TABLE IF NOT EXISTS revenue (month TEXT NOT NULL UNIQUE, revenue INTEGER NOT NULL)'
  );

  const statement = await db.prepare(
    'INSERT INTO revenue (month, revenue) VALUES (?, ?)'
  );

  for (const rev of revenue) {
    await statement.run(rev.month, rev.revenue);
  }

  await statement.finalize();
}

async function main() {
  const db = await sqlite.AsyncDatabase.open('db.sqlite');

  await seedCustomers(db);
  await seedInvoices(db);
  await seedRevenue(db);

  await db.close();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
