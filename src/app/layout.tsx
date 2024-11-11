import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import "@/styles/globals.scss";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/components/providers";
import GlobalHeader from "@/components/header";

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
          <Providers>
            <GlobalHeader />
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
