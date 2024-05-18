import "./globals.css";

export const metadata = {
  title: "Fajrul Aslim",
  description: "Test Front-End from Suitmedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fajrul Aslim | Front-End</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
