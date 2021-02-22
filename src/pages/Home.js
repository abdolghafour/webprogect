import React from 'react';
import SimpleSlider from '../SimpleSlider'

function Home() {
    return (
        <div className="flex flex-col w-full h-full flex-grow">
            <div className="pt-90px px-3 pb-50px flex-auto md:px-35px">
                <SimpleSlider />
            </div>
        </div>
    )
}

export default Home
