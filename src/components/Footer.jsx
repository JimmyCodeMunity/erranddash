import React from 'react'

const Footer = () => {
    const datenow = Date()
    return (
        <div className='w-full py-5 relative max-w-7xl mx-auto'>
            <div className="w-full bg-white sm:px-16 px-6 absolute bottom-10">
                <p className="text-lime-500 text-center text-sm">Copyright@{datenow} Qode Technologies</p>
            </div>

        </div>
    )
}

export default Footer
