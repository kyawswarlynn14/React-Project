
import beach from '/home/nano/Desktop/ReactProjects/nano/src/images/beach.jpg'

import ice from '/home/nano/Desktop/ReactProjects/nano/src/images/ice.jpg'

import mauntain from '/home/nano/Desktop/ReactProjects/nano/src/images/mauntain.jpg'

import Card from './card';
import Image from './img';

const Main = () => {

    return(
        <div>
            <h1 
            className='font-bold text-2xl'>
                Find and enjoy your next vacation !!
            </h1>

            <input 
            className='bg-gray-100 p-2 pl-7 rounded-3xl my-5' 
            type="text" placeholder='Search' />

            <ul 
            className='flex justify-between text-base 
            font-thin cursor-pointer'>
                <li className='font-bold mr-3 border-b-4 border-black border-dotted'>
                    All
                </li>

                <li>Most visited</li>

                <li>Recommend</li>

                <li className='mr-10'>Economy</li>
            </ul>

            <div 
            className='flex gap-2 my-7'>
                <Card title="Hiroshima 1" description="historical places in Japan" />

                <Card title="Hiroshima 2" description="historical places in Japan" />

                <Card title="Hiroshima 3" description="historical places in Japan" />
            </div>

            <div className='flex gap-3 mb-7'>
                <Image img={beach} />               
                <Image img={ice} />
                <Image img={mauntain} />

                <div 
                className='w-20 h-16 border-inherit border-2 rounded-2xl text-center pt-4 ml-5
                font-light'>
                    MORE
                </div>
            </div>

        </div>
    )
}

export default Main;