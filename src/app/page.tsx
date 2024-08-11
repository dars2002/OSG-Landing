"use client";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { AchievementCard } from "./components/AchievementCard";
import { CardAnim } from "./components/CardAnim";
import Link from 'next/link'
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero" className="bg-hero-background bg-center h-[80vh] bg-cover">
        <div className="h-full">
          <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/osg-logo.jpg" className="rounded-full w-10" alt="OSG Logo" />
              </a>
              <button onClick={toggleMenu} 
                      type="button" 
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                      aria-controls="navbar-default" 
                      aria-expanded={isMenuOpen}>
                <span className="sr-only">Open main menu</span>
                <svg  className="w-5 h-5" 
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 17 14">
                  <path stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  bg-grey md:bg-opacity-0 rounded-lg  md:flex-row md:space-x-8  rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="#" className="hover:text-blue block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" >Home</a>
                  </li>
                  <li>
                    <a href="#members" className="hover:text-blue block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Members</a>
                  </li>
                  <li>
                    <a href="#achievements" className="hover:text-blue block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Achievements</a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex flex-col h-5/6	 items-center justify-between px-4 md:px-8 lg:px-20">
            <div className="flex flex-col w-full  max-w-lg text-center bg-black/60 lg:bg-black/0 py-4 rounded-lg my-auto">
              <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OSITOS GAMING</h1>
              <h2 className="text-black text-lg md:text-xl m-1">A competitive LAN team from League of Legends since 2019.</h2>
              <button
                className="bg-blue text-white font-thin px-6 py-2 rounded-lg w-1/2 max-w-xs mx-auto mt-5 hover:bg-opacity-85"
                onClick={() => router.push("#contact")}
              >
                Scrim with us!
              </button>
            </div>
          </div>
          
        </div>

      </section>
      <section id="games" className="flex items-center justify-center">
        <div className=" flex flex-row w-full">
          <a id="lol_button" href="#" className="flex w-full items-center justify-center bg-blue">
            <img src="/images/lol-logo.png" width={100} height={100} />
          </a>

          {/*<a id="val_button" href="#" className="flex w-1/2 items-center justify-center bg-red">
            <img src="/images/valorant-logo.png" width={100} height={100}  className="w-1/3"/>
          </a>*/}
        </div>
      </section>
      <section id="members" className="flex flex-col items-center py-10">
        <h2 className=" text-black pb-4 pt-2 underline decoration-blue">Members</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 lg:px-8">
          <CardAnim
            image="/images/champs/Kayle_15.jpg"
            player="OSG Darstic"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Diana_27.jpg"
            player="OSG Blaxer"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Jhin_5.jpg"
            player="OSG Miracle"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Gnar_22.jpg"
            player="OSG Zendo"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Karma_27.jpg"
            player="OSG Scy"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Yasuo_18.jpg"
            player="OSG Aless88"
            phrase="Nashe"
          />
          <CardAnim
            image="/images/champs/Xayah_26.jpg"
            player="OSG Dragantos"
            phrase="Nashe"
          />
        </div>

      </section>
      <section id="achievements" className="flex flex-col items-center py-10 bg-black">
        <h2 className="text-white pt-2 pb-4 underline decoration-blue">Achievements</h2>
        <div className="flex flex-col items-center justify-center mt-8 mx-auto px-10 lg:px-20">
          <AchievementCard
            image="/images/pupc-league.JPG"
            title="PUCP League"
            description="La competencia PUCP League es uno de los eventos más esperados en la comunidad de League of Legends de la Pontificia Universidad Católica del Perú. Este torneo anual reúne a los mejores equipos estudiantiles para enfrentarse en emocionantes partidas, demostrando su habilidad, estrategia y trabajo en equipo. Durante el evento, nuestro equipo, OSG (Ositos Gaming), se destacó por su excelente coordinación y destreza en el juego, alcanzando varias victorias memorables." />
          <AchievementCard
            image="/images/pupc-league.JPG"
            title="Clash 2024"
            description="Durante los torneos de Clash, nuestro equipo, OSG (Ositos Gaming), ha demostrado una notable capacidad para adaptarse y superar a diversos oponentes. Cada victoria en Clash se siente especialmente gratificante, ya que requiere una combinación de planificación previa, ejecución precisa y comunicación efectiva. El formato de eliminación directa significa que cada partida cuenta, y el camino hacia la final está lleno de desafíos emocionantes. Clash nos ha brindado una plataforma para mejorar continuamente, aprender de nuestros errores y celebrar nuestras victorias juntos como un equipo unido y determinado." />
        </div>
      </section>
      <section id="contact" className="flex flex-col items-center py-10">
        <h2 className="text-black py-4 underline decoration-blue">Contact us</h2>
        <div className="flex flex-col md:flex-row justify-center border-black border-2 rounded-lg mt-8 mx-6">
          <div className="p-6 w-full h-full">
            <form>
              <div className="pb-3">
                <label className="font-bold">Name</label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your name" />
              </div>
              <div className="pb-3">
                <label className="font-bold">Email</label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your Email" />
              </div>
              <div className="pb-3">
                <label className="font-bold">Topic</label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your Topic" />
              </div>
              <div className="pb-3">
                <label className="font-bold">Message</label>
                <input className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your Message" />
              </div>
              <div className="flex justify-end mt-5">
                <button className="border-black border-2 rounded-lg py-2 px-6 focus:outline-none hover:bg-black hover:text-white" type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:mt-0 bg-black p-3  w-full">
            <h3 className="text-xl font-semibold text-white py-3">Información de Contacto</h3>
            <p className="mt-4 text-white py-3">Puedes contactarnos a través de los siguientes medios:</p>
            <ul className="mt-4 space-y-2 py-6">
              <li className=" text-white"><strong>Email:</strong> contacto@osgequipojuegos.com</li>
              <li className=" text-white"><strong>Twitter:</strong> <Link href="#" className="text-blue">@equipojuegosOSG</Link></li>
              <li className=" text-white"><strong>Discord:</strong> <Link href="#" className="text-blue">discord.gg/equipojuegosOSG</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="flex flex-col items-center bg-blue">
        <p className="text-white pt-2">Designed by David Rivas</p>
        <div className="flex flex-row pt-2 pb-5 space-x-3">
          <img src="/images/linkedin-icon.png" alt="LinkedinIcon" width={100} height={100} className="w-10" />
          <img src="/images/discord-icon.png" alt="DiscordIcon" width={100} height={100} className="w-10" />
          <img src="/images/github-icon.png" alt="GithubIcon" width={100} height={100} className="w-10" />
        </div>
      </footer>
    </main>
  );
}
