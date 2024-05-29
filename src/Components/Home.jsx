
import yudoBg from "../assets/images/yudoBg.webp"
import yudoLogo from "../assets/images/yudoLogo.webp"
const Home = () => {
  return (
    <div  className="grid grid-cols-1 bg-cover bg-right md:bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${yudoBg})`,
       
   }}
    >
       <div className=" md:bg-[#031955]  h-screen grid grid-cols-1 md:clip-polygon">
        <div className=" border-white grid justify-center md:justify-start content-center justify-items-start gap-4">
        <section className=' border-green-800 grid justify-items-center content-center lg:justify-items-start gap-4 pl-0 md:pl-8'>
          <img src={yudoLogo} width={300} height={150} />
          <h2 className=' border-purple-700 app-h3 app-text'> Randori reto </h2>
          <p className=' border-purple-700 app-gray-3 app-span text-center px-4 md:px-0 md:text-start w-full md:w-[40%] font-semibold md:font-normal'>Explora el mundo del Yudo. Desde principiantes hasta expertos, ofrecemos recursos, consejos y eventos para todos los amantes de esta disciplina. Descubre técnicas, reglas, y encuentra clubes y competiciones cercanas. Únete a nuestra comunidad y lleva tu práctica de Yudo al siguiente nivel.</p>

        </section>
         

          
        </div>
      </div>
    
    
    
    </div>
  )
}

export default Home