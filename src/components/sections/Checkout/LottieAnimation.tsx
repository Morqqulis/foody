import React from 'react';
import Lottie from 'lottie-react';
import animationData from "./doneAnimation.json"


const LottieAnimation: React.FC = () => {
    return <div className='w-[1031px] h-[515px] bg-gray-7 flex flex-col items-center justify-center'>
        <Lottie animationData={animationData} loop={true} className='w-[250px] h-[250px]' />;
        <h2 className='w-[305px] leading-9 text-2xl font-bold mb-4 text-color-[rgba(79, 79, 79, 1)]  text-center'>Your order has been received</h2>
    </div>
};

export default LottieAnimation;
