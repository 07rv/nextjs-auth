import Link from "next/link";

import styles from "@/styles/Form.module.css";
import Image from "next/image";

import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useState } from "react";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [show, setShow] = useState(false);

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  }
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-2xl font-bold py-1">Explore</h1>
        <p className="mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          officia?
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5">
        <div className={styles.input_group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
          />
          <span className="icon flex items-center px-3">
            <HiFingerPrint size={18} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-3"
            onClick={() => setShow(!show)}
          >
            <HiAtSymbol size={18} />
          </span>
        </div>

        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
        <div className="input-button">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className={styles.button_custom}
          >
            Sign In with Google{" "}
            <Image src={"/assets/google.svg"} width="20" height={20}></Image>
          </button>
        </div>
        <div className="input-button">
          <button type="button" className={styles.button_custom}>
            Sign In with Github{" "}
            <Image src={"/assets/github.svg"} width={25} height={25}></Image>
          </button>
        </div>
      </form>

      {/* bottom */}
      <p className="text-center text-gray-400 ">
        don't have an account yet?{" "}
        <Link href={"/register"} className="text-blue-700">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
