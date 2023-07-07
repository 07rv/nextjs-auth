import Head from "next/head";
import Layout from "@/layout/Layout";
import LoginPage from "@/components/LoginPage";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <LoginPage />
    </Layout>
  );
}
