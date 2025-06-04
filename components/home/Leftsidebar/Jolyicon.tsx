import Image from 'next/image';

const JolyIcon = () => {
  return (
    <div className="h-[54px] w-[224px] relative mb-6 ">
      <Image
        src="/Project-icons/Logo.svg"
        alt="Logo"
        width={24}
        height={24}
        className="grayscale"
      />
    </div>
  );
};

export default JolyIcon;
