import "./globals.css";
import Header from "@components/Header";
import StoreProvider from "@store/storeProvider";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: "YouTube",
  description: "this is youtube clone",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
