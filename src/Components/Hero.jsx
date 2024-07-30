import ContactMe from "./ContactMe"
import CorporateValues from "./CorporateValues"
import Home from "./Home"
import MisionAndVision from "./MisionAndVision"
import NavComponent from "./NavComponent"
import ProductsAndServices from "./ProductsAndServices"


const Hero = () => {
  return (
    <main className="h-full w-full scrollbar-none">
      <div className="flex flex-col  scrollbar-none">
        <NavComponent/>
       <Home/>
       <section className='grid gap-16'>
        <ProductsAndServices/> 
        <MisionAndVision/>
        <CorporateValues/>
        <ContactMe/>
       </section>
      
      </div>
      </main>
  )
}

export default Hero