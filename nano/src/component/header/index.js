
import nav from '/home/nano/Desktop/ReactProjects/nano/src/images/nav_icon.png'

const Header = () => {
    return(
        <div
        className='pt-4 flex justify-between'
        >
            <h1
            className='font-normal'>
                TRIPSARIO
            </h1>

            <img
            className='w-7'
            src={nav} alt="" />
        </div>
    )
}

export default Header;