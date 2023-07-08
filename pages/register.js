import RegisterPage from "@/components/RegisterPage";
import Head from "next/head";
import Layout from "@/layout/Layout";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterPage />
    </Layout>
  );
}
