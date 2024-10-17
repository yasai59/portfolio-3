type IconButtonProps = {
  icon: JSX.Element
  onClick: () => void
}


export const IconButton = ({icon, onClick}: IconButtonProps) => {
  return (
    <div className="relative w-20 h-20 group cursor-pointer"  onClick={onClick}>
      <div className="text-6xl border border-white w-20 h-20 flex items-center justify-center rounded-xl">
        {icon}
      </div>
      <div className="transition-transform duration-300 ease-in-out bg-white w-10 h-10 rounded-lg absolute top-5 -right-7 rotate-[20deg] group-hover:rotate-[30deg] text-black flex items-center justify-center text-3xl"><span className="icon-[material-symbols--arrow-outward]"/></div>
    </div>
  )
}
