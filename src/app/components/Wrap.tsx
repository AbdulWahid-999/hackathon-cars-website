import { FC } from "react";
const Wrapper:FC<{children: React.ReactNode;}> = ({children}) => {
  return (
    <div className="max-w-screen-3xlxl mx-auto p-3">
        {children}
      
    </div>
  )
}

export default Wrapper