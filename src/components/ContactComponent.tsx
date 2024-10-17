type ContactComponentProps = {
  name: string;
  link: string;
  icon: JSX.Element;
  text: string;
}


export const ContactComponent = ({name, link, icon, text}: ContactComponentProps) => {
  return (
    <a href={link} target="_blank"><p className="flex items-center gap-1 font-bold">{name}{icon}</p>{text}<span className="icon-[material-symbols--arrow-outward]" /></a>
  )
}
