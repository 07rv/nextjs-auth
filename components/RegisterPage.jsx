import Link from "next/link";

import styles from "@/styles/Form.module.css";
import Image from "next/image";

import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

const RegisterPage = () => {
  const [show, setShow] = useState({ password: false, confirmpassword: false });

  return (
    <div className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-2xl font-bold py-1">Register</h1>
        <p className="mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          officia?
        </p>
      </div>

      {/* form */}
      <form className="flex flex-col gap-5">
        <div className={styles.input_group}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            className={styles.input_text}
          />
          <span className="icon flex items-center px-3">
            <HiOutlineUser size={18} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type="text"
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
            type={`${show.password ? "text" : "password"}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-3"
            onClick={() => setShow({ ...show, password: !show.password })}
          >
            <HiAtSymbol size={18} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={`${show.confirmpassword ? "text" : "password"}`}
            name="confirmpassword"
            placeholder="confirm password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-3"
            onClick={() =>
              setShow({ ...show, confirmpassword: !show.confirmpassword })
            }
          >
            <HiAtSymbol size={18} />
          </span>
        </div>

        {/* login buttons */}
        <div className="input-button">
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </div>
      </form>

      {/* bottom */}
      <p className="text-center text-gray-400 ">
        Already have an account{" "}
        <Link href={"/login"} className="text-blue-700">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
