
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Bhoomika B S | Software Developer Portfolio",
  description:
    "Personal portfolio of Bhoomika B S, Computer Science Engineering student and aspiring software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
