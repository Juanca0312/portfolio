import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image';
import me from '../../../public/avatar.png';
import pokeapp from '../../../public/pokeapp.png';
import gymapp1 from '../../../public/gymapp1.jpeg';
import gymapp2 from '../../../public/gymapp2.jpeg';
import arnatomyMain from '../../../public/arnatomy-main.png';
import kusi1 from '../../../public/kusi1.jpg';
import kusi2 from '../../../public/kusi2.jpg';
import spanish from '../../../public/spanish.png';
import Link from 'next/link';


export default function ENHome() {
  return (
    <main className='bg-white px-10 md:px-40'>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl'>developed by juanca</h1>
          <div className='flex items-center' >
            <Link href="/" className='ml-2'>
              <div className='flex flex-col items-center'>
                <Image src={spanish} style={{ height: '20px', width: '30px', minWidth: "30px" }} />
                <p>ES</p>
              </div>
            </Link>
            <a href="./cv-en.pdf" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8 text-center'>Resume</a>
          </div>

        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Juan Carlos Hernández</h2>
          <h3 className='text-2xl py-2'>Mobile Developer</h3>
          <p className='text-md py-5 leading-7 text-gray-800'>
            Bachelor in Software Engineering, passionate about mobile development, experienced in developing for iOS and Flutter.
          </p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>

          <a target="_blank" href="https://www.linkedin.com/in/juan-carlos-hernandez-castillo/?locale=en_US"><AiFillLinkedin /></a>
          <a target="_blank" href="https://github.com/Juanca0312"><AiFillGithub /></a>
          <a target="_blank" href="mailto:jchernandez0312@gmail.com"><AiFillMail /></a>

        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={me} fill style={{ objectFit: 'cover', marginTop: -30 }} />
        </div>

      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>Projects</h3>
          <p className='text-md py-5 leading-7 text-gray-800'>
            Some of my relevant projects carried out during my professional and academic career.
          </p>


          <div className='flex flex-wrap justify-between md:justify-center gap-5'>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1 md:max-w-md">
                <h3 className="text-lg font-medium pt-8 pb-2 "><span className='text-teal-600'>AR</span>natomy</h3>

                <p className="py-2">
                  Graduation project that aims to create an alternative for interactive learning of human anatomy using augmented reality.
                </p>
                <div className='flex justify-center pt-2'>
                  <iframe className='hidden md:block' height="300"
                    src="https://www.youtube.com/embed/HwcxxzMyspI" allowFullScreen>
                  </iframe>
                  <div className='block md:hidden'>
                    <Image src={arnatomyMain} height={300} />
                    <a href="https://www.youtube.com/watch?v=HwcxxzMyspI" target="_blank" className='font-medium'>
                      Ver video
                    </a>
                  </div>
                </div>
                <h4 className="pt-4 pb-2 text-teal-600">Technologies</h4>
                <p className="text-gray-800 py-1">Mobile: Flutter/Dart, ARCore</p>
                <p className="text-gray-800">Backend: Java / Spring Boot, MySQL</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
                  <a target="_blank" href="https://github.com/PRY20220262/augmented_anatomy"><AiFillGithub /></a>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1 md:max-w-md">
                <h3 className="text-lg font-medium pt-8 pb-2 "><span className='text-teal-600'>Poke</span>App</h3>
                <p className="py-2">
                  iOS mobile application that lists, filters and details Pokémons. The project uses the open source PokeAPI API and implements the views programmatically.
                </p>
                <div className='flex justify-center gap-2'>
                  <Image src={pokeapp} height={300} />
                </div>
                <h4 className="pt-4 pb-2 text-teal-600">Technologies</h4>
                <p className="text-gray-800 py-1">Mobile: iOS/Swift, Combine, Unit Testing</p>
                <p className="text-gray-800 py-1">Architecture: MVVM</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
                  <a target="_blank" href="https://github.com/Juanca0312/PokeApp"><AiFillGithub /></a>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1 md:max-w-md">
                <h3 className="text-lg font-medium pt-8 pb-2 "><span className='text-teal-600'>Kusikay</span> App</h3>

                <p className="py-2">
                  Mobile application developed for the Kusikay volunteer programme to manage attendance and class reports.
                </p>
                <div className='flex justify-center pt-2'>
                  <Image src={kusi1} height={300} />
                  <Image src={kusi2} height={300} />
                </div>
                <h4 className="pt-4 pb-2 text-teal-600">Technologies</h4>
                <p className="text-gray-800 py-1">Mobile: Flutter/Dart</p>
                <p className="text-gray-800">Backend: Java / Spring Boot, MySQL</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
                  <a target="_blank" href="https://github.com/algowapo/Kusikay-Mobile"><AiFillGithub /></a>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg px-10 py-5 rounded-xl my-10 dark:bg-white flex-1 md:max-w-md">
                <h3 className="text-lg font-medium pt-8 pb-2 "><span className='text-teal-600'>Gym</span>App</h3>
                <p className="py-2">
                  iOS mobile application that helps to create a routine of exercises. The app stores the exercises and routines created with CoreData.                </p>
                <div className='flex justify-center'>
                  <Image src={gymapp1} height={300} />
                  <Image src={gymapp2} height={300} />
                </div>
                <h4 className="pt-4 pb-2 text-teal-600">Technologies</h4>
                <p className="text-gray-800 py-1">Mobile: iOS/Swift, CoreData</p>
                <p className="text-gray-800 py-1">Architecture: MVC</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
                  <a target="_blank" href="https://github.com/Juanca0312/GymApp"><AiFillGithub /></a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
