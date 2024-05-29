
import './App.css'
import ContactMe from './Components/ContactMe'
import CorporateValues from './Components/CorporateValues'
import Home from './Components/Home'
import MisionAndVision from './Components/MisionAndVision'
import ProductsAndServices from './Components/ProductsAndServices'

function App() {


  return (
    <>
      <main className="h-full w-full scrollbar-none">
      <div className="flex flex-col gap-20 scrollbar-none">
       <Home/>
       <ProductsAndServices/>
       <ContactMe/>
       <MisionAndVision/>
       <CorporateValues/>
      
      </div>
      </main>
    </>
  )
}

export default App
