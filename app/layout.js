import './globals.css';
import Menu from './components/menu';
import PageBackground from './components/page-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageBackground/>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
