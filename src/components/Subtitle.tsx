import { ReactElement } from "react"

export const Subtitle = ({ children }: {children: string | ReactElement}) => {
  return (
    <h2 className="text-4xl">~/{children}</h2>
  )
}
