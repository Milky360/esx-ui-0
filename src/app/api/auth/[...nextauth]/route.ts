import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

import { execute } from "@/utils/django";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
    }),
    CredentialsProvider({
      id: "cred-login",
      name: "BulkCredentialLogin",
      credentials: {
        email_or_phone: { label: "email_or_phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req: any) {
        console.log("cred data ---->", credentials, req.query);
        // Your existing authorization logic remains unchanged
        const { email_or_phone, password } = req.query as any;

        const response = await execute("USER_LOGIN", {
          email_or_phone,
          password,
        });

        if (response.errors != null || response.statusCode !== 200) {
          throw new Error("Server Error");
        }

        console.log("response ===>", response.data.result);

        try {
          const user = response.data.result;
          const { refreshToken, accessToken } = user;
          const username = user.user.username;
          const profile_completed = user.user.profile_completed;

          return {
            username,
            refreshToken,
            accessToken,
            profile_completed,
          } as any;
        } catch (e) {
          console.log("error", e);
          throw new Error("User Parsing Error");
        }
      },
    }),
  ],
  debug: true,
  secret: process.env.JWT_SIGNATURE as string,
  pages: {
    signIn: "/?auth=signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  session: {
    strategy: "jwt", // Use 'jwt' for the session strategy if you want JWT sessions
  },
  callbacks: {
    async signIn({ user, account }: any) {
      console.log("sign in callback", user, account);

      if (account.type !== "credentials") {
        if (!user.email) {
          return "/auth/no-email-found";
        }

        const response = await execute("USER_LOGIN", {
          provider: account.provider,
          token: account.id_token,
        });

        if (response.errors != null || response.statusCode !== 200) {
          throw new Error("Server Error");
        }

        console.log("response ---->", response);
        user.username = response.user.username;
        user.accessToken = response.accessToken;
        user.refreshToken = response.refreshToken;
      } else {
        console.log("cred data ===>", user, account);

        // Redirect to profile setup if incomplete
        if (!user.profile_completed) {
          return "http://localhost:3000/registration/issuer?stage=2";
        }
        // if (user.new) {
        //   return `${process.env.NEXTAUTH_URL}${user.paths}`;
        // }
      }
      return true;
    },
    jwt: async ({ token, user, account }: any) => {
      console.log("session check", token, user, account);
      if (!token.username && user) {
        token.username = user.username ?? token.username;
        token.accessToken = user.accessToken ?? token.accessToken;
        token.refreshToken = user.refreshToken ?? token.refreshToken;
      }

      return token;
    },
    session: async ({ session, token }: any) => {
      session.user.username = token.username;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
