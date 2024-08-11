 
interface CardAnimProps{
    image: string;
    player:string;
    phrase:string;
}

export const CardAnim:React.FC<CardAnimProps> = ({image,player,phrase}) => {
    return(
        <div className="relative flex  max-w-xs w-full flex-col items-center justify-center overflow-hidden bg-gray-150">
            <div className="absolute inset-0 bg-center opacity-100 dark:bg-black"></div>
            <div className="group relative m-0 flex  rounded-xl shadow-2xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img src={image} alt="Mainchamp"  className="w-full h-full"/>
                </div>
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h2 className="text-3xl font-bold text-white shadow-xl">{player}</h2>
                    <p className="text-white text-m font-normal shadow-xl">{phrase}</p>
                </div>
            </div>
        </div>
    )
};