import { DNA } from 'react-loader-spinner'
interface ILoadingAnimation {
  className?: string
  height: number
  width: number
}
const LoadingAnimation: React.FC<ILoadingAnimation> = ({ className, height, width }): JSX.Element => {
  return (
    <div className={`flex h-full w-full items-center justify-center ${className}`}>
      <DNA visible={true} height={height} width={width} ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
    </div>
  )
}

export default LoadingAnimation
