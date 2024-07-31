"use client"

import { Button, Card, Input, Option, Select, Typography } from "@material-tailwind/react"

import { useForm, Controller } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit , formState: { errors }, reset, control  } = useForm();
    
     
    const onSubmit = (data) => {
        alert(`Nombre: ${data.nombre}\nCorreo: ${data.correo}\nGénero: ${data.genero}\nDeportes: ${data.deportes}`);
        reset();
      };
    

  return (
    <div className="h-auto grid content-center justify-items-center grid-cols-1 p-0 md:py-16">
       
    <Card color="white" shadow={false} className="p-8 rounded-none md:rounded-xl m-0 md:my-12">
      <Typography variant="h4" color="blue-gray">
        Registro
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        ¡Un placer conocerte! Introduce tus datos para registrarte.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 flex flex-col gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre Completo:
          </Typography>
          <Input
            size="lg"
            placeholder="tu nombre"
            {...register('nombre', { required: 'Este campo es obligatorio' })}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.nombre && <Typography color="red" className="mt-1">{errors.nombre.message}</Typography>}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Correo Electrónico
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            {...register('correo', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo electrónico inválido'
              }
            })}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.correo && <Typography color="red" className="mt-1">{errors.correo.message}</Typography>}

          <Typography variant="h6" color="blue-gray" className="-mb-[-0.25rem]">
            Género
          </Typography>
          <Controller
            name="genero"
            control={control}
            rules={{ required: 'Este campo es obligatorio' }}
            render={({ field }) => (
              <Select
                label="Selecciona género"
                {...field}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <Option value="masculino">Masculino</Option>
                <Option value="femenino">Femenino</Option>
                <Option value="otro">Otro</Option>
              </Select>
            )}
          />
          {errors.genero && <Typography color="red" className="mt-1">{errors.genero.message}</Typography>}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Deportes de interés o gustos:
          </Typography>
          <Input
            size="lg"
            placeholder="Fútbol, Natación, etc."
            {...register('deportes', { required: 'Este campo es obligatorio' })}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.deportes && <Typography color="red" className="mt-1">{errors.deportes.message}</Typography>}
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Enviar
        </Button>
      </form>
    </Card>
    </div>
  )
}

export default Register