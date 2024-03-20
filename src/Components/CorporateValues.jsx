import {  Card, CardBody, Typography } from "@material-tailwind/react"


const CorporateValues = () => {
    const values = [
        {
            id: 1,
            name: "Inclusión",
            description: "Promover la participación de todas las personas, independientemente de sus capacidades físicas o cognitivas, en un entorno acogedor y sin prejuicios.",
            color: "#ff9800" // Color naranja
        },
        {
            id: 2,
            name: "Respeto",
            description: "Valorar y respetar la diversidad de cada individuo, reconociendo su dignidad y potencial único.",
            color: "#4caf50" // Color verde
        },
        {
            id: 3,
            name: "Compromiso",
            description: "Estar comprometidos con la mejora continua y el bienestar de nuestros participantes, brindando servicios de alta calidad y adaptados a sus necesidades.",
            color: "#2196f3" // Color azul
        },
        {
            id: 4,
            name: "Empatía",
            description: "Entender y compartir las experiencias y emociones de nuestros clientes, mostrando sensibilidad hacia sus desafíos y aspiraciones.",
            color: "#9c27b0" // Color morado
        },
        {
            id: 5,
            name: "Integridad",
            description: "Actuar con honestidad, transparencia y ética en todas nuestras interacciones, manteniendo la confianza de nuestros clientes y colaboradores.",
            color: "#607d82" // Color gris azulado
        },
        {
            id: 6,
            name: "Colaboración",
            description: "Trabajar en equipo y fomentar la colaboración entre todos los miembros de la comunidad, incluyendo a participantes, familias, personal y aliados estratégicos.",
            color: "#795548" // Color marrón
        },
        {
            id: 7,
            name: "Superación",
            description: "Impulsar el crecimiento personal y el desarrollo de habilidades, fomentando la autosuperación y la confianza en uno mismo a través del judo adaptado.",
            color: "#ff5722" // Color rojo
        },
        {
            id: 8,
            name: "Innovación",
            description: "Buscar constantemente nuevas formas de mejorar y ampliar nuestros servicios, adoptando enfoques creativos y soluciones innovadoras para abordar las necesidades cambiantes de nuestros clientes.",
            color: "#ffeb3b" // Color amarillo
        },
        {
            id: 9,
            name: "Responsabilidad social",
            description: "Contribuir positivamente al bienestar de la sociedad, promoviendo la inclusión, la igualdad de oportunidades y el respeto por los derechos humanos de todas las personas.",
            color: "#03a9f4" // Color azul claro
        },
        {
            id: 10,
            name: "Pasión",
            description: "Demostrar entusiasmo y pasión por nuestra misión de promover la inclusión a través del judo adaptado, inspirando a otros a participar y apoyar nuestra causa.",
            color: "#f44336" // Color rojo intenso
        }
      ];


  return (
    <div className=" grid justify-center justify-items-center content-center">
        <h2 className="app-h2 text-center"> VALORES CORPORATIVOS </h2>
      <div className=" flex flex-wrap justify-center gap-4">
         {values.map(value => (
        <Card key={value.id} className={`mt-6 w-96 text-center border-card border-4`} style={{borderColor:`${value.color}`}}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {value.name}
            </Typography>
            <Typography>
              {value.description}
            </Typography>
          </CardBody>
          
        </Card>
      ))}
        
      </div>  
    </div>
  )
}

export default CorporateValues