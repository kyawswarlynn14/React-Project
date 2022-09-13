
import cover from '/home/nano/Desktop/ReactProjects/nano/src/images/cover.jpg'

const Cover = () => {
    return(
        <div className='my-5 text-white relative'>
            <img 
            className="rounded-3xl w-[100%] h-[28em]" 
            src={cover} />

            <div 
            className='bg-black w-[100%] h-[100%] opacity-40
            absolute top-0 rounded-3xl'>

            </div>

            <div className='absolute top-40 p-3'>
                <p className='text-3xl mb-5 font-bold leading-12'>
                    Hey,<br/> Wondering where your next Journey gonna be ? 
                </p>

                <h3 className='bg-gradient-to-r from-cyan-500 to-blue-500 
                text-center
                rounded-xl
                p-2 w-52 cursor-pointer'>
                    Our Recommandations
                </h3>
            </div>
        </div>
    )
}

export default Cover;