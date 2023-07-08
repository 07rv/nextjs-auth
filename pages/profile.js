import Head from "next/head";
import { getSession } from "next-auth/react";
export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>qerfgh</div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permament: false,
      },
    };
  }
  return {
    props: { session },
  };
}
