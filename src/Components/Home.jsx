import yudoLogo3D from "../assets/images/judoLogo3D.png"


const Home = () => {
  return (
    <div className="grid grid-cols-1 bg-cover bg-right md:" id="home">
       <section className=" container flex flex-col-reverse md:flex-col items-center px-6  mx-auto   lg:flex-row h-screen md:h-[90vh] ">
      <div className="lg:w-1/2">
        <h1 className="max-w-xl font-serif text-4xl font-medium tracking-wide text-[white] capitalize md:text-6xl ">Fortaleza a través de la Disciplina</h1>

        <p className="max-w-[40rem] mt-4 text-white">Explora el mundo del Yudo. Desde principiantes hasta expertos, ofrecemos recursos, consejos y eventos para todos los amantes de esta disciplina. Descubre técnicas, reglas, y encuentra clubes y competiciones cercanas. Únete a nuestra comunidad y lleva tu práctica de Yudo al siguiente nivel.</p>
        
        <div className="mt-6 sm:flex sm:items-center">
          <a href="/sign-up" className="bg-[#007dbb] hover:bg-[#008cff]/80 duration-300 transition-colors border-2 border-[#17a6df] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white rounded">
            Registrate Ahora
          </a>

        </div>
      </div>

      <div className=" h-[30rem]  lg:mt-0 w-full mx-auto  max-w-md   ">
        <img className=" object-cover w-full h-full  " src={yudoLogo3D} alt="main page" />
      </div>
        </section>
    
    
    </div>
  )
}

export default Home