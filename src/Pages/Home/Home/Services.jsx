// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    // const [services, setServices] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])

    const services = useServices();

  return (
    <div className="my-4">
      <div className="text-center space-y-6">
        <h3 className="text-3xl font-bold text-orange-600">Ours Services</h3>
        <h2 className="text-5xl">Ours Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3">
        
        {
            services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
