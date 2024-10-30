import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import "@src/styles/globals.scss";
import NextTopLoader from "nextjs-toploader";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <NextTopLoader />
          <AntdRegistry>{children}</AntdRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}
