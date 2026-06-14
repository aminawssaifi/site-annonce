import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Itim, Montserrat } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-itim",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Site d'annonces ANNONCES TUNISIE",
  description:
    "Trouver les meilleures annonces en Tunisie. Vendez, achetez et publiez votre annonce près de chez vous.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${itim.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900">
        
        <Header />
        <NavBar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
