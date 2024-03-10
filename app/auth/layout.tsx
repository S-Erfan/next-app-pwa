import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorization user",
  description: "Authorization user",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
