"use client";

import InputField from "@/components/InputField/InputField";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium">Changes password</h1>
      <p className="text-slate-500">Fill up the form to Change the password</p>

      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email address"
            required={true}
            type="email"
          />

          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-primary hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>

            <span>Reset password</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
