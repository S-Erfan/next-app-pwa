"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
  username: string;
  password: string;
};

const Form = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      if (await fetchFake()) {
        router.push(`/`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFake = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-3"
    >
      <div className="w-full flex flex-col gap-1 ">
        <label htmlFor="username">UserName</label>
        <input
          {...register("username", { required: "this field is required !" })}
          className={` w-full text-lg px-2 py-3 bg-inherit outline-none rounded-lg border-2 ${
            errors?.username ? "border-red-800" : "border-neutral-800"
          }`}
        />
        {errors?.username && (
          <span className="text-sm text-red-600 ">
            {errors?.username?.message}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1 ">
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "this field is required !",
            minLength: {
              value: 8,
              message: "It must be more than 8 characters",
            },
          })}
          className={` w-full text-lg px-2 py-3 bg-inherit outline-none rounded-lg border-2 ${
            errors?.password ? "border-red-800" : "border-neutral-800"
          }`}
        />
        {errors?.password && (
          <span className="text-sm text-red-600 ">
            {errors?.password?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 justify-center items-center mt-4 pb-4">
        <button
          className="bg-yellow-500 py-3 px-5 rounded-md"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "loading ..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Form;
