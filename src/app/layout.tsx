import { ConfigProvider } from "antd";
import { getServerSession } from "next-auth";
import NextTopLoader from "nextjs-toploader";

import GlobalHeader from "@/components/global-header-2";
import Providers from "@/components/providers";
import SessionProvider from "@/components/session-provider";
import "@/styles/globals.scss";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              // colorPrimary: "#005798",
              fontFamily: "Helvetica Neue, sans-serif",
            },
          }}
        >
          <SessionProvider session={session}>
            <NextTopLoader />
            <Providers>
              <GlobalHeader />
              {children}
            </Providers>
          </SessionProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
