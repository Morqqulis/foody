import React from 'react'
import Lottie from 'lottie-react'
import animationData from './doneAnimation.json'

const LottieAnimation: React.FC = () => {
  return (
    <div className="flex h-[515px] w-[1031px] flex-col items-center justify-center bg-gray-7">
      <Lottie animationData={animationData} loop={true} className="h-[250px] w-[250px]" />;
      <h2 className="text-color-[rgba(79, 79, 79, 1)] mb-4 w-[305px] text-center text-2xl font-bold  leading-9">Your order has been received</h2>
    </div>
  )
}

export default LottieAnimation