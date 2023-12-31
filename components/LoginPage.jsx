import Link from "next/link";

import styles from "@/styles/Form.module.css";
import Image from "next/image";

import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useState } from "react";

import { signIn } from "next-auth/react";

import { useFormik } from "formik";

import login_validate from "@/lib/validate";
import { useRouter } from "next/router";
const LoginPage = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.ok) router.push(status.url);
  }
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
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
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
            {...formik.getFieldProps("email")}
          />
          <span className="icon flex items-center px-3">
            <HiFingerPrint size={18} />
          </span>
        </div>
        {formik.errors.email && formik.touched.email ? (
          <span className="text-rose-500">{formik.errors.email}</span>
        ) : (
          ""
        )}
        <div className={styles.input_group}>
          <input
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
            {...formik.getFieldProps("password")}
          />
          <span
            className="icon flex items-center px-3"
            onClick={() => setShow(!show)}
          >
            <HiAtSymbol size={18} />
          </span>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <span className="text-rose-500">{formik.errors.password}</span>
        ) : (
          ""
        )}
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
            <Image
              alt="google"
              src={"/assets/google.svg"}
              width="20"
              height={20}
            ></Image>
          </button>
        </div>
        <div className="input-button">
          <button
            type="button"
            onClick={handleGithubSignin}
            className={styles.button_custom}
          >
            Sign In with Github{" "}
            <Image
              alt="github"
              src={"/assets/github.svg"}
              width={25}
              height={25}
            ></Image>
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
