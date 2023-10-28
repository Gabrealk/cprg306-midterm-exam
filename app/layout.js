import "./globals.css";

export const metadata = {
  title: "CPRG306 Midterm Exam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
