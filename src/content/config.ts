import { defineCollection, z } from "astro:content";

const servicios = defineCollection({
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    imageBanner: z.string(),
    video: z.string(),
    categoria: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        title: z.string(),
      })
    ),
    content: z.string().optional(),
    url: z.string(),
    icon: z.string(),
  }),
});

const paquetes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.string(), 
    includes: z.array(z.string()), 
    video: z.string().optional(), 
    imageBanner: z.string().optional(),
    url: z.string(), 
    content: z.string().optional(),
  }),
});

const eventos = defineCollection({
  schema: z.object({
    id: z.number(),
    nombre: z.string(), 
    tipoServicio: z.string(),
    fecha: z.string(),
    ubicacion: z.string(),
    video: z.string(), 
    imagen: z.string(), 
    descripcion: z.string(), 
    serviciosIncluidos: z.array(z.string()), 
    duracion: z.string(), 
    asistentes: z.number(),
  }),
});

const actividades = defineCollection({
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    imageBanner: z.string(),
    video: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        title: z.string(),
      })
    ),
    content: z.string().optional(),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  servicios,
  paquetes,
  eventos,
  actividades,
};
