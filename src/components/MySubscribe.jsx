import Image from "next/image";

const MySubscribe = ({ image, name }) => {
  return (
    <>
      <div className="w-8 h-8">
        <Image
          className="w-auto h-full rounded-full object-cover"
          src={image ? image : "/team1.webp"}
          alt="img"
          width={40}
          height={40}
        />
      </div>
      <h1 className="font-medium">{name}</h1>
    </>
  );
};

export default MySubscribe;
