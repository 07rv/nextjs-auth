import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredientialsProvider from "next-auth/providers/credentials";

import dbConnect from "@/database/mongodb";
import Users from "@/modal/User";
import { compare } from "bcrypt";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredientialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        dbConnect().catch((error) => {
          error: "Connection Failed...!";
        });

        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  secret: "LliVWDOWQCeCfjqsZwZ2HFtrtg4Tyke/iolTkH8D32M=",
});
