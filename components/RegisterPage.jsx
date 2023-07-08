import Link from "next/link";

import styles from "@/styles/Form.module.css";

import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";

import { registerValidate } from "@/lib/validate";

import { useFormik } from "formik";

const RegisterPage = () => {
  const [show, setShow] = useState({ password: false, confirmpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });
  async function onSubmit(values) {
    console.log(values);
  }
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
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            className={styles.input_text}
            {...formik.getFieldProps("username")}
          />
          <span className="icon flex items-center px-3">
            <HiOutlineUser size={18} />
          </span>
        </div>
        {formik.errors.username && formik.touched.username ? (
          <span className="text-rose-500">{formik.errors.username}</span>
        ) : (
          ""
        )}
        <div className={styles.input_group}>
          <input
            type="text"
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
            type={`${show.password ? "text" : "password"}`}
            name="password"
            placeholder="password"
            className={styles.input_text}
            {...formik.getFieldProps("password")}
          />
          <span
            className="icon flex items-center px-3"
            onClick={() => setShow({ ...show, password: !show.password })}
          >
            <HiAtSymbol size={18} />
          </span>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <span className="text-rose-500">{formik.errors.password}</span>
        ) : (
          ""
        )}
        <div className={styles.input_group}>
          <input
            type={`${show.confirmpassword ? "text" : "password"}`}
            name="confirmpassword"
            placeholder="confirm password"
            className={styles.input_text}
            {...formik.getFieldProps("confirmpassword")}
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
        {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
          <span className="text-rose-500">{formik.errors.confirmpassword}</span>
        ) : (
          ""
        )}
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
