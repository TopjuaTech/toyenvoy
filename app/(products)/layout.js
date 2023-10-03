import SecondaryNavbar from "@/components/SecondaryNavbar"


const Layout = ({children}) => {
  return (
    <>
      <SecondaryNavbar />
      {children}
    </>
  )
}

export default Layout