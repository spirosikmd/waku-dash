import { Suspense } from 'react';
import { SideNav } from '../components/dashboard/side-nav';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '../components/skeletons';
import CardWrapper from '../components/dashboard/cards';
import RevenueChart from '../components/dashboard/revenue-chart';
import LatestInvoices from '../components/dashboard/latest-invoices';

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <main>
          <h1 className="mb-4 text-xl md:text-2xl`">Dashboard</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
              <CardWrapper />
            </Suspense>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
              <RevenueChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <LatestInvoices />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
