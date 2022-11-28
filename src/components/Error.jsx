

const Error = ({ mensaje }) => {
    return (
        <div className='bg-red-600 p-3 text-white text-center font-bold mb-3 rounded-md'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error