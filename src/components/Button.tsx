import {ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props:any){
    return(
        <button className="button" {...props} />
    )
}