import sqlite from 'promised-sqlite3';
import { formatCurrency } from './utils';
import { LatestInvoice, Revenue } from './definitions';

export async function fetchCardData() {
  const db = await sqlite.AsyncDatabase.open('db.sqlite');

  const customerCountRow = await db.get<{ count: number }>(
    'SELECT COUNT() as count FROM customers'
  );
  const invoiceCountRow = await db.get<{ count: number }>(
    'SELECT COUNT() as count FROM invoices'
  );
  const invoiceStatusRow = await db.get<{
    paid: number;
    pending: number;
  }>(`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`);

  await db.close();

  return {
    numberOfCustomers: customerCountRow.count,
    numberOfInvoices: invoiceCountRow.count,
    totalPaidInvoices: formatCurrency(invoiceStatusRow.paid),
    totalPendingInvoices: formatCurrency(invoiceStatusRow.pending),
  };
}

export async function fetchRevenue() {
  const db = await sqlite.AsyncDatabase.open('db.sqlite');

  const rows = await db.all<Revenue>('SELECT * FROM revenue');

  await db.close();

  return rows;
}

export async function fetchLatestInvoices() {
  const db = await sqlite.AsyncDatabase.open('db.sqlite');

  const rows = await db.all<LatestInvoice>(
    'SELECT * FROM invoices JOIN customers ON invoices.customer_id = customers.id ORDER BY date DESC LIMIT 5'
  );

  await db.close();

  return rows;
}
