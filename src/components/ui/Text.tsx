interface IText {
  className?: string
  text: string | React.ReactNode
}

const Text: React.FC<IText> = ({ className, text }): JSX.Element => {
  return <p className={`${className} text-[22px] leading-[30px] text-foreground`}>{text}</p>
}

export default Text
