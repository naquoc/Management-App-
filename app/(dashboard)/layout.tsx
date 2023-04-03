
import GlassPane from "@/components/GlassPane"
import { FC } from "react"
import '@/styles/global.css'

const DashboardRootLayout: FC<any> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GlassPane>
      </body>
    </html>
  )
}

export default DashboardRootLayout
