"use client"

import { Button, Card, Input, Option, Select, Typography } from "@material-tailwind/react"

const Register = () => {
  return (
    <div className="h-auto grid content-center justify-items-center ">
         <Card color="white" shadow={false} className="p-8">
      <Typography variant="h4" color="blue-gray">
        Registro
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
      ¡Un placer conocerte! Introduce tus datos para registrarte.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Nombre Completo:
          </Typography>
          <Input
            size="lg"
            placeholder="your name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Correo Electrónico
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        <div>

            <Typography variant="h6" color="blue-gray" className="-mb-[-0.25rem]">
                Género
            </Typography>
            <Select
        label="Selecciona genero"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option value="masculino">Masculino</Option>
        <Option value="femenino">Femenino</Option>
        <Option value="otro">Otro</Option>
      </Select>

        </div>
        <Typography variant="h6" color="blue-gray" className="-mb-3">
             Deportes de interés o gustos:
          </Typography>
          <Input
            size="lg"
            placeholder="Fútbol, Natación, etc."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

        </div>
        
        <Button className="mt-6" fullWidth>
          Enviar
        </Button>
        
      </form>
    </Card>
    </div>
  )
}

export default Register