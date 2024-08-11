import Image from "next/image";

interface AchievementCardProps {
    image: string;
    title: string;
    description: string;
}

export const AchievementCard:React.FC<AchievementCardProps> = ({image,title,description}) => {
    return(
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-5 mb-4">
        <div className="mx-3">
          <img
            src={image}
            alt={title}
            width={200}
            height={200}
            className=" responsive flex rounded-sm border-grey shadow-lg w-full"/>
        </div>
        <h2 className="text-black px-6 mb-4 font-bold">{title}</h2>
        <p className="text-black px-6 mb-4">{description}</p>
      </div>
    )
};