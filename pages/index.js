import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { useSession, getSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}{" "}
    </>
  );
}

function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest world!</h3>
      <div className="flex justify-center">
        <Link
          href="/login"
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">User world!</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500"
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          href="/profile"
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500"
        >
          Profile
        </Link>
      </div>
    </main>
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
