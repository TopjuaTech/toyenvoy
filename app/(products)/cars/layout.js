import SecondaryNavbar from "@/components/SecondaryNavbar"
import {carstab} from '@/constants/carsitems'

const CarLayout = ({children}) => {

  return (
    <>
    <SecondaryNavbar tabs={carstab} />
      {children}
    </>
  )
}

export default CarLayout