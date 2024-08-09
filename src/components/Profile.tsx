interface ProfileProps {
  name: string;
  phone: string;
  about: string;
  image: string;
}

export default function Profile({ name, phone, about, image }: ProfileProps) {
  return (
    <div className="flex flex-col gap-6 w-full h-full justify-start items-center">
      <div className="max-w-[500px] w-full flex flex-col gap-5">
        <div className="flex justify-start items-center gap-4 h-full bg-baseWhite px-5 py-5 rounded-lg cursor-pointer">
          <img
            src={image}
            alt="icon-user"
            width={90}
            height={90}
            className="rounded-full h-[90px] w-[90px] object-cover"
            loading="lazy"
          />

          <p className="text-lg font-semibold">{name}</p>
        </div>

        <div className="bg-baseWhite px-5 py-5 rounded-lg flex flex-col gap-2 cursor-pointer">
          <h1 className="text-lg font-semibold">Phone number</h1>
          <p className="font-normal text-sm">{phone}</p>
        </div>

        <div className="bg-baseWhite px-5 py-5 rounded-lg flex flex-col gap-2 cursor-pointer">
          <h1 className="text-lg font-semibold">About</h1>
          <p className="font-normal text-sm">{about}</p>
        </div>
      </div>
    </div>
  );
}
