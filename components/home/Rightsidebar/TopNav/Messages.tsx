import Image from 'next/image';

const Messages = () => {
  return (
    <Image 
      src="/Project-icons/Icon.svg" 
      alt="Messages" 
      width={20} 
      height={20} 
      className="cursor-pointer  transition-all duration-300" 
    />
  );
};

export default Messages;
