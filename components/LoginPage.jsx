import Link from "next/link";

import styles from "@/styles/Form.module.css";

const LoginPage = () => {
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-3xl font-bold py-3">Explore</h1>
      </div>

      <form className="flex flex-col gap-3">
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="input-button">
          <button className={styles.button} type="submit">
            {" "}
            Login
          </button>
        </div>
        <div className="input-button">
          <button type="submit"> Sign In Google</button>
        </div>
        <div className="input-button">
          <button type="submit"> Sign In Github</button>
        </div>
        <p className="text-center text-gray-400">
          don't have an account?
          <Link href={"/register"} className="text-blue-700">
            {" "}
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
