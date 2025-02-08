export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#D2E8E3] text-black m-0">
      {children}
    </div>
  );
}
