import Image from 'next/image';

const Profile = () => {
  return (
    <Image 
      src="/Project-icons/profile.svg" 
      alt="Profile" 
      width={32} 
      height={32} 
      className="rounded-full cursor-pointer  transition-all duration-300"
    />
  );
};

export default Profile;
