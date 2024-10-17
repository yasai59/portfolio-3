type TechLoaderProps = {
  techs: string[]
}


export const TechLoader = ({techs}: TechLoaderProps) => {
  return (
    <p>{techs.join(' / ')}</p>
  )
}
