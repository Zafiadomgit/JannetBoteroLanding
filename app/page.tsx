"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Instagram, Star, Clock, Award, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

type Region = "chile" | "colombia"

interface Doctor {
  name: string
  title: string
  specialties: string[]
  experience: string
  description: string
  image: string
}

interface LocationData {
  doctor: string
  address: string
  phone: string
  whatsapp?: string
  instagram: string
  currency: string
  doctors: Doctor[]
  services: {
    name: string
    description: string
  }[]
}

const locationData: Record<Region, LocationData> = {
  chile: {
    doctor: "Doctora Jannett Botero",
    address: "Los arrayanes 1288 El Milagro - La Serena",
    phone: "+56 923 74 2352",
    whatsapp: "https://w.app/lzfyw8",
    instagram: "bybodontoestetica",
    currency: "CLP",
    doctors: [
      {
        name: "Dra. Jannett Botero",
        title: "Directora Médica y Especialista",
        specialties: ["Rehabilitación Oral", "Estética Facial", "Implantología", "Estética Oral", "Periodoncia"],
        experience: "+38 años de experiencia",
        description:
          "Especialista en odontología estética y rehabilitación oral con formación internacional. Comprometida con brindar tratamientos de la más alta calidad utilizando tecnología de vanguardia.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DraJannet.jpg-eJxljkfCSkGYll0rseS5AqzM0kB4HF.jpeg",
      },
    ],
    services: [
      {
        name: "Rehabilitación Oral",
        description: "Restauración completa de la función masticatoria",
      },
      { name: "Estética Facial", description: "Tratamientos de rejuvenecimiento facial" },
      { name: "Ortodoncia", description: "Corrección de malposiciones dentales" },
      { name: "Endodoncia", description: "Tratamiento de conductos radiculares" },
      { name: "Implantología", description: "Implantes dentales de última generación" },
      { name: "Cirugía Oral", description: "Procedimientos quirúrgicos especializados" },
    ],
  },
  colombia: {
    doctor: "Doctora Jannett Botero",
    address: "Carrera 8 # 9 -56 B Quindío, Zarzal Valle",
    phone: "313 347 5347",
    whatsapp: "https://w.app/t34y65",
    instagram: "odontoesteticazarzal",
    currency: "COP",
    doctors: [
      {
        name: "Dra. Jannett Botero",
        title: "Directora Médica y Especialista",
        specialties: ["Rehabilitación Oral", "Estética Facial", "Implantología", "Estética Oral", "Periodoncia"],
        experience: "+38 años de experiencia",
        description:
          "Especialista en odontología estética y rehabilitación oral con formación internacional. Comprometida con brindar tratamientos de la más alta calidad utilizando tecnología de vanguardia.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DraJannet.jpg-eJxljkfCSkGYll0rseS5AqzM0kB4HF.jpeg",
      },
      {
        name: "Dra. Daniela Jaramillo",
        title: "Especialista en Ortodoncia y Ortopedia Maxilar",
        specialties: ["Ortodoncia", "Ortopedia Maxilar", "Odontopediatría"],
        experience: "8+ años de experiencia",
        description:
          "Especialista en ortodoncia y ortopedia maxilar con enfoque en tratamientos integrales para niños y adultos. Experta en corrección de maloclusiones y desarrollo facial con técnicas avanzadas.",
        image: "/images/Doctora Daniela.jpg",
      },
    ],
    services: [
      {
        name: "Rehabilitación Oral",
        description: "Restauración completa de la función masticatoria",
      },
      { name: "Estética Facial", description: "Tratamientos de rejuvenecimiento facial" },
      { name: "Ortodoncia", description: "Corrección de malposiciones dentales" },
      { name: "Endodoncia", description: "Tratamiento de conductos radiculares" },
      { name: "Implantología", description: "Implantes dentales de última generación" },
      { name: "Cirugía Oral", description: "Procedimientos quirúrgicos especializados" },
    ],
  },
}

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState<Region>("chile")
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const currentLocation = locationData[selectedRegion]

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % currentLocation.services.length)
  }

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + currentLocation.services.length) % currentLocation.services.length)
  }

  const getVisibleServices = () => {
    const services = currentLocation.services
    const visibleServices = []
    for (let i = 0; i < 3; i++) {
      const index = (currentServiceIndex + i) % services.length
      visibleServices.push(services[index])
    }
    return visibleServices
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bb-logo.png"
              alt="B&B Odontoestética"
              width={60}
              height={60}
              className="object-contain"
            />
            <div>
              <h1 className="font-serif font-black text-xl text-gray-300">B&B Odontoestética</h1>
              <p className="text-sm text-gray-400">Clínica Dental Especializada</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={selectedRegion} onValueChange={(value: Region) => setSelectedRegion(value)}>
              <SelectTrigger className="w-40 bg-gray-900 border-gray-700 text-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="chile" className="text-gray-300 hover:bg-gray-800">
                  🇨🇱 Chile
                </SelectItem>
                <SelectItem value="colombia" className="text-gray-300 hover:bg-gray-800">
                  🇨🇴 Colombia
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="bg-lime-500 text-black hover:bg-lime-400 font-semibold"
              onClick={() => {
                if (currentLocation.whatsapp) {
                  window.open(currentLocation.whatsapp, "_blank")
                }
              }}
            >
              Solicitar Cita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            key={selectedRegion} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
            onError={(e) => console.error('Error loading video:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source 
              src={selectedRegion === "chile" ? "/chile-video.mp4" : "/colombia-video.mp4"} 
              type="video/mp4" 
            />
            Tu navegador no soporta el elemento video.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-gray-900 text-lime-400 border-lime-500/50 backdrop-blur-sm">
            ✨ Tecnología de Vanguardia
          </Badge>
          <h2 className="font-serif font-black text-4xl md:text-6xl mb-6 text-gray-200 drop-shadow-lg">
            Tu Sonrisa Perfecta
            <span className="block text-lime-400">Nos Espera</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Especialistas en rehabilitación, estética facial y oral, ortodoncia, endodoncia, cirugía e implantología con
            tecnología de última generación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-500 text-black hover:bg-lime-400 font-semibold shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-200 hover:bg-gray-800/50 bg-black/30 backdrop-blur-sm shadow-lg"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Síguenos
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-gray-200">Nuestros Servicios</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ofrecemos tratamientos especializados con la más alta calidad y tecnología avanzada
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              {getVisibleServices().map((service, index) => (
                <Card
                  key={`${service.name}-${currentServiceIndex}-${index}`}
                  className="group hover:shadow-xl transition-all duration-300 hover:border-lime-500/50 bg-gray-900 border-gray-800"
                >
                  <CardHeader>
                    <CardTitle className="font-serif font-bold text-lg group-hover:text-lime-400 transition-colors text-gray-200">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevService}
                className="border-lime-500/30 text-lime-400 hover:bg-lime-500/20 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {currentLocation.services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentServiceIndex ? "bg-lime-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextService}
                className="border-lime-500/30 text-lime-400 hover:bg-lime-500/20 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-gray-200">¿Por Qué Elegirnos?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-lime-400" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-2 text-gray-200">Experiencia</h4>
              <p className="text-gray-400">Años de experiencia en odontología especializada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-lime-400" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-2 text-gray-200">Tecnología</h4>
              <p className="text-gray-400">Equipos de última generación para mejores resultados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-lime-400" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-2 text-gray-200">Atención Personalizada</h4>
              <p className="text-gray-400">Cada paciente recibe un tratamiento único</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-lime-400" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-2 text-gray-200">Horarios Flexibles</h4>
              <p className="text-gray-400">Nos adaptamos a tu disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-gray-200">Nuestro Equipo</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Profesionales altamente capacitados comprometidos con tu salud dental
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentLocation.doctors.map((doctor, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-lime-500/50 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-xl text-gray-200 group-hover:text-lime-400 transition-colors">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-lime-400 font-semibold">{doctor.title}</CardDescription>
                  <Badge variant="outline" className="border-lime-500/30 text-lime-400 w-fit">
                    {doctor.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">{doctor.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-lime-500/20 text-lime-400 border-lime-500/30"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-gray-200">
              Lo Que Dicen Nuestros Pacientes
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-lime-400 text-lime-400" />
                    ))}
                  </div>
                  <CardTitle className="font-serif font-bold text-gray-200">{testimonial.name}</CardTitle>
                  <Badge variant="outline" className="border-lime-500/30 text-lime-400">
                    {testimonial.treatment}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif font-bold text-3xl mb-8 text-gray-200">Información de Contacto</h3>

              <Card className="mb-6 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-xl text-lime-400">{currentLocation.doctor}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-lime-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{currentLocation.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-lime-400" />
                    <p className="text-gray-300">{currentLocation.phone}</p>
                  </div>

                  {currentLocation.whatsapp && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-lime-400" />
                      <p className="text-gray-300">WhatsApp: {currentLocation.whatsapp}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-lime-400" />
                    <p className="text-gray-300">@{currentLocation.instagram}</p>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full bg-lime-500 text-black hover:bg-lime-400 font-semibold"
                onClick={() => {
                  if (currentLocation.whatsapp) {
                    window.open(currentLocation.whatsapp, "_blank")
                  }
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Cita Ahora
              </Button>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-serif font-bold text-3xl mb-8 text-gray-200">Nuestra Ubicación</h3>
              {selectedRegion === "colombia" ? (
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!4v1758144198329!6m8!1m7!1soLMhyrCKlzV2LJVdKecSKg!2m2!1d4.393790780352298!2d-76.07084266430222!3f136.51447795167994!4f-9.32693456541466!5f0.7820865974627469" 
                    width="100%" 
                    height="450" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                  />
                </div>
              ) : (
                <div className="bg-gray-800 border border-gray-700 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-lime-400 mx-auto mb-4" />
                    <p className="text-gray-300">Mapa de Google Maps</p>
                    <p className="text-sm text-gray-400 mt-2">La Serena, Chile</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/bb-logo.png"
                  alt="B&B Odontoestética"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h4 className="font-serif font-bold text-lg text-gray-200">B&B Odontoestética</h4>
              </div>
              <p className="text-gray-400">
                Especialistas en crear sonrisas perfectas con tecnología de vanguardia y atención personalizada.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-gray-200">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rehabilitación Oral</li>
                <li>Estética Facial y Oral</li>
                <li>Ortodoncia</li>
                <li>Endodoncia</li>
                <li>Cirugía e Implantología</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-gray-200">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 {selectedRegion === "chile" ? "La Serena, Chile" : "Zarzal, Colombia"}</p>
                <p>📞 {currentLocation.phone}</p>
                <p>📱 @{currentLocation.instagram}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 B&B Odontoestética. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const testimonials = [
  {
    name: "María González",
    rating: 5,
    comment: "Excelente atención y resultados increíbles. La Dra. Botero es muy profesional y cuidadosa.",
    treatment: "Estética Dental",
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "Mi sonrisa cambió completamente. El tratamiento de ortodoncia fue perfecto.",
    treatment: "Ortodoncia",
  },
  {
    name: "Ana Martínez",
    rating: 5,
    comment: "Instalaciones modernas y tecnología de punta. Me siento muy segura aquí.",
    treatment: "Implantología",
  },
]
