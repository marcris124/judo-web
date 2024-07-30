import mision from "../assets/images/mision.gif"
import vision from "../assets/images/vision.gif"
const MisionAndVision = () => {
  return (
    <div className=" border-red-700">
        <div className=" border-orange-900" id="mision-vision">
            <div className=" border-green-700 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 px-2 md:px-20">
            <div className=" border-red-900 grid md:hidden justify-center">
                <img src={mision} width={400} height={400} className="border-img"/>
                </div>
                <div className=" p-8 border-purple-800 grid justify-center content-center">
                    <div className=" border-yellow-800 grid justify-center content-center text-center gap-6">
                        <h2 className="app-h2">
                            Mision
                        </h2>
                        <p className="app-span text-white"> Nuestra misión es proporcionar un espacio inclusivo y seguro para que personas con discapacidades físicas o cognitivas puedan participar y disfrutar del judo adaptado. Nos comprometemos a ofrecer programas especializados que se adapten a las necesidades individuales de cada cliente, promoviendo el desarrollo físico, mental y emocional a través de la práctica deportiva. Buscamos fomentar la inclusión, la autoconfianza y el empoderamiento de nuestros participantes, mientras trabajamos en estrecha colaboración con organizaciones que promueven la igualdad y la diversidad. </p>
                    </div>
                </div>
                <div className=" border-blue-700 hidden md:grid justify-center ">
                <img src={mision} width={700} height={700} className="border-img"/>
                </div>
            </div>
            <div className=" border-green-700 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 px-6 md:px-20">
               
                <div className=" border-blue-700 grid justify-center">
                <img src={vision} width={350} height={350} className="border-img"/>
                </div>
                 <div className=" border-purple-800 grid justify-center content-center">
                    <div className=" border-yellow-800 grid justify-center content-center text-center gap-6">
                        <h2 className="app-h2">
                            Vision
                        </h2>
                        <p className="app-span text-white"> Nos visualizamos como líderes en la promoción de la inclusión y la igualdad de oportunidades en el ámbito deportivo, siendo reconocidos a nivel local y nacional como un referente en la provisión de servicios de judo adaptado para personas con discapacidades físicas o cognitivas. Nos esforzamos por expandir nuestro impacto, llegando a comunidades más amplias y estableciendo estándares de excelencia en la atención personalizada y la adaptación de programas deportivos para satisfacer las necesidades individuales de nuestros participantes. Nuestra visión es crear un mundo donde todas las personas, independientemente de sus capacidades, tengan acceso equitativo a oportunidades deportivas y puedan disfrutar de los beneficios físicos, mentales y sociales que estas ofrecen. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MisionAndVision