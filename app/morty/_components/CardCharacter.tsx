import Image from "next/image";
import { FC } from "react";

type IProps = {
  image: string;
  name: string;
  id: number;
  status: string;
  gender: string;
};

type NewProps = Required<IProps> &
  Partial<Omit<IProps, keyof Required<IProps>>>;

const CardCharacter: FC<NewProps> = ({
  image,
  name,
  id,
  status,
  gender,
  ...props
}) => {
  return (
    <div className="w-full h-auto flex flex-row items-stretch bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
      <div className="max-w-[30%] h-full">
        <Image
          alt={name}
          src={image}
          className="w-full h-auto object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 p-3 flex flex-col gap-3">
        <h5>{name}</h5>
        <span>{status}</span>
        <span>{gender}</span>
      </div>
    </div>
  );
};

export default CardCharacter;
