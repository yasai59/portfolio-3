import { ReactElement } from "react";

export const Table = ({children}: {children: ReactElement[]}) => {
  return (
    <div className="grid font-opensans border-mygray border-2 rounded-xl overflow-hidden gap-[1px] bg-mygray mt-5">
      {children}
    </div>
  );
}
