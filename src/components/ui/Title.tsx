import React from 'react'

interface Ititle {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string | React.ReactNode
  className?: string
}

const Title: React.FC<Ititle> = ({
  className,
  tag,

  text
}: Ititle): JSX.Element => {
  return React.createElement(tag, { className: `${className} text-mainBlack` }, text)
}

export default Title
