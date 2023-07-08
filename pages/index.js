import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [session, setSession] = useState(true);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {session ? User({ session }) : Guest()}{" "}
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

function User() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">User world!</h3>

      <div className="details">
        <h5>123456</h5>
        <h5>123456ujhgf</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500">
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
