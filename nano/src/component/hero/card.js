import hiroshima from '/home/nano/Desktop/ReactProjects/nano/src/images/hiroshima.jpg'

const Card = (props) => {
    const { title, description } = props;

    return(
        <div className='relative w-28 text-white'>
            <img
            className='w-[100%] rounded-xl' 
            src={hiroshima} alt="" />

            <div
            className='w-[100%] h-[100%] bg-black 
            opacity-50 rounded-xl absolute top-0'>

            </div>

            <div className='absolute top-20 p-1'>
                <h4 className="font-bold">{title}</h4>

                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default Card;