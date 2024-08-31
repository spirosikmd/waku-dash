import '../styles.css';

import type { ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html lang="en">
      <body className="font-['Nunito']">
        <div>
          <meta property="description" content={data.description} />
          <link rel="icon" type="image/png" href={data.icon} />
          {children}
        </div>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: 'A dashboard made with Waku!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
