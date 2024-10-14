type LangOptionProps = {
  callback: Function,
  lang: {
    code: String,
    name: String
  }
}

export default function LangOption({callback, lang}: LangOptionProps) {
  return (
    <div onMouseDown={() => callback(lang.code)} className="flex flex-col items-center p-2 hover:bg-mygray w-22 bg-black">
      <img src={`/images/flags/${lang.code}.svg`} className="w-10 rounded-md" draggable={false}/>
      {lang.name}
    </div>
  )
}
