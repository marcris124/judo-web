import { Carousel, Typography } from "@material-tailwind/react";

import yudoImg from "../assets/images/yudoImg.webp"
import yudoImg2 from "../assets/images/yudoImg2.webp"
import yudoImg3 from "../assets/images/yudoImg3.webp"
import yudoImg4 from "../assets/images/yudoImg4.webp"
import yudoImg5 from "../assets/images/yudoImg5.webp"
import yudoImg6 from "../assets/images/yudoImg6.webp"
const ProductsAndServices = () => {
    const productsOrServices = [
        {
            id: 1,
            name: "Clases de judo adaptado",
            description: "Ofrecer una variedad de clases de judo adaptado diseñadas específicamente para personas con diferentes tipos de discapacidades físicas o cognitivas. Estas clases se adaptarían para satisfacer las necesidades individuales de cada participante, incluyendo técnicas de judo modificadas, ejercicios de movilidad, equilibrio y coordinación, así como entrenamiento físico y mental.",
            image:yudoImg
        },
        {
            id: 2,
            name: "Entrenamiento personalizado",
            description: "Proporcionar sesiones de entrenamiento personalizado con instructores especializados en judo adaptado, que trabajen en estrecha colaboración con cada cliente para desarrollar un plan de entrenamiento adaptado a sus habilidades y metas específicas.",
            image:yudoImg2
        },
        {
            id: 3,
            name: "Eventos y competiciones inclusivas",
            description: "Organizar eventos y competiciones de judo adaptado que promuevan la participación de personas con discapacidades físicas o cognitivas, ofreciendo un entorno seguro y accesible para que los participantes demuestren sus habilidades y talentos en el judo.",
            image:yudoImg3
        },
        {
            id: 4,
            name: "Programas de inclusión comunitaria",
            description: "Desarrollar programas de inclusión comunitaria que fomenten la participación de personas con discapacidades en actividades deportivas y recreativas, utilizando el judo adaptado como una herramienta para promover la integración social y el desarrollo personal.",
            image:yudoImg4
        },
        {
            id: 5,
            name: "Servicios de asesoramiento y apoyo",
            description: "Brindar servicios de asesoramiento y apoyo a individuos, familias y organizaciones interesadas en aprender más sobre el judo adaptado, incluyendo información sobre accesibilidad, adaptaciones y recursos disponibles.",
            image:yudoImg5
        },
        {
            id: 6,
            name: "Alianzas y colaboraciones",
            description: "Establecer alianzas estratégicas con organizaciones locales, nacionales e internacionales que promuevan la inclusión de personas con discapacidades, colaborando en proyectos, eventos y programas que amplíen el alcance y el impacto del judo adaptado.",
            image:yudoImg6
        }
    ];
    
  return (
    <div className='h-60 md:h-[30rem] py-4  p-2 sm:p-2 sm:px-24 '>

    <Carousel navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`hidden md:block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )} autoplay loop  placeholder={""} className="rounded-md md:rounded-xl">
      
       {productsOrServices.map((item)=>
                
        <div   key={item.id}  className="relative h-full w-full hover:border border-white cursor-pointer">
        <img
           
          src={item.image}
          alt="image 2"
          className="h-full w-full object-cover object-center"
        />
        <div className=" absolute inset-0 grid h-full w-full items-center ">
          <div className=" w-3/4  pl-4 md:w-2/4 md:pl-20 lg:pl-32  border-orange-600 grid  justify-center items-center ">
            <div className=" border-red-600  bg-transparent-2 rounded-xl p-6"> 
            <Typography
                        placeholder={""}
                        
                        color="white"
                        className="mb-0 mt-8  text-xl md:text-4xl lg:text-5xl app-h2"
                        >
                        {item.name}
                        </Typography>
                        <Typography
                        placeholder={""}
                        
                        color="white"
                        className="mb-0 mt-8 md:mb-4  app-p hidden md:block"
                        >
                        {item.description}
                        </Typography>

            </div>
            
          </div>
        </div>
        </div>
     )}
    </Carousel>
    </div>
  )
}

export default ProductsAndServices