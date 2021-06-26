import { ButtonHTMLAttributes } from 'react'

// import '../styles/button.scss';

import { ButtonComponent } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonComponent
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}
