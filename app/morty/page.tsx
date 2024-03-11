import { axiosPrivate } from "@/libs/axios";
import CardCharacter from "./_components/CardCharacter";
import axios, { AxiosError } from "axios";

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type InfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

const getAllCharacter = async () => {
  let obj: {
    error: boolean;
    data: CharacterType[] | null;
    message: string;
    info: null | InfoType;
  } = {
    error: false,
    data: null,
    info: null,
    message: "",
  };
  try {
    const { data, status } = await axiosPrivate({
      url: "character",
      method: "GET",
    });
    if (status === 200) {
      obj.data = data.results;
      obj.info = data.info;
    } else {
      obj.error = true;
      obj.message = data?.message ?? "";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      obj.message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        error ||
        "";
    } else {
      console.error(error);
    }
    obj.error = true;
  } finally {
    return obj;
  }
};

export default async function Rick() {
  const { data, info, error, message } = await getAllCharacter();

  return (
    <>
      <main className="ricky_screen w-screen h-screen flex flex-col gap-6 pb-6 ">
        <section className="container pt-8">
          <h1 className="text-4xl text-white text-center ">
            The Rick and Morty API
          </h1>
        </section>
        <section className="container h-[100%] overflow-y-auto bg-green-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
          {error ? (
            <h1 className="w-full h-full grid place-content-center text-red-600 text-2xl">
              {message}
            </h1>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {data?.map((item) => (
                <div className="p-3" key={item.id}>
                  <CardCharacter
                    gender={item.gender}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    status={item.status}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
