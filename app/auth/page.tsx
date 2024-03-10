import Form from "./_component/Form";

export default function Auth() {
  return (
    <main className="w-screen h-screen grid place-content-center ">
      <section className="w-full p-5 sm:w-[50%] lg:w-[600px] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 ">
        <h1 className="text-center text-2xl">Login Account</h1>
        <Form />
      </section>
    </main>
  );
}
