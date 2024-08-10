import Image from 'next/image'

interface IFeaturesCard {
  imagePath: string
  title: string
  text: string
  imageWidth: number
  imageHeight: number
  className?: string
}

const FeaturesCard: React.FC<IFeaturesCard> = ({ imagePath, title, text, imageWidth, imageHeight, className }): JSX.Element => {
  return (
    <div
      className={`${className} flex max-w-[327px] flex-col items-center bg-white px-[23px] pb-[20px] text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[4px]`}
    >
      <Image
        className={`max-h-[233px] -translate-y-[10px] md:border-[2px] md:border-dashed`}
        src={imagePath}
        alt={title}
        width={imageWidth}
        height={imageHeight}
      />
      <span className={`whitespace-nowrap text-balance text-[30px] font-bold leading-[42px] text-gray-2`}>{title}</span>
      <p className={`mt-auto text-[18px] leading-[30px]`}>{text}</p>
    </div>
  )
}

export default FeaturesCard
