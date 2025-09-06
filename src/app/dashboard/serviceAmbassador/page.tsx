"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Service_img1 from "@/assets/pngs/amb-service-1.png";
import Service_img2 from "@/assets/pngs/amb-service-2.png";
import Service_img3 from "@/assets/pngs/amb-service-3.png";
import Service_img4 from "@/assets/pngs/amb-service-3.png";
import Service_img5 from "@/assets/pngs/amb-service-1.png";
import Service_img6 from "@/assets/pngs/amb-service-2.png";

interface Service {
  id: number;
  image: StaticImageData;
  service_name: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    image: Service_img1,
    service_name: "Healthcare Support",
    description: "Providing access to essential healthcare services, medical checkups, and wellness programs.",
  },
  {
    id: 2,
    image: Service_img2,
    service_name: "Educational Guidance",
    description: "Offering training sessions, workshops, and mentoring to improve skills and knowledge.",
  },
  {
    id: 3,
    image: Service_img3,
    service_name: "Community Outreach",
    description: "Engaging with local communities through volunteering, awareness campaigns, and support activities.",
  },
  {
    id: 4,
    image: Service_img4,
    service_name: "Environmental Care",
    description: "Promoting eco-friendly practices, tree plantation drives, and sustainability initiatives.",
  },
  {
    id: 5,
    image: Service_img5,
    service_name: "Emergency Assistance",
    description: "Helping communities during crises with quick response teams and emergency relief support.",
  },
  {
    id: 6,
    image: Service_img6,
    service_name: "Skill Development",
    description: "Empowering individuals with professional skills, certifications, and career-building opportunities.",
  },
];

const ServiceAmbassador = () => {
  return (
    <section className="">

      <h1 className="text-2xl font-bold mb-4">
        Registered Services
      </h1>

      <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md border rounded-[20px] overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={service.image}
              alt={service.service_name}
              className="w-full h-[220px] object-cover"
            />
            <h2 className="text-2xl font-bold p-4">{service.service_name}</h2>
            <p className="px-4 line-clamp-4 text-ellipsis">{service.description}</p>
            <div className="flex items-center gap-2.5 px-4 py-4">
              <span className="text-lg text-[#4CAF50] font-bold">Registered</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAmbassador;