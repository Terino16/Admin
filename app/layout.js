import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "./Provider";
import Navbar from "../components/Navbar/page"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SelectedOptionProvider} from "../context/SelectOptionContext";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "DengoAdmin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <SelectedOptionProvider>
          <ToastContainer />
          <Navbar />
          {children}
          </SelectedOptionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}