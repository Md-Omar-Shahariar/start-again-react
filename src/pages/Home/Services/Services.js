import React from 'react';
import cavity from "../../../assets/images/cavity.png"
import flouride from "../../../assets/images/fluoride.png"
import whitening from "../../../assets/images/whitening.png"
import Service from './Service';


const Services = () => {
    const serviceData = [{
        id:1,
        name:"Fluoride Treatment",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: flouride
    },
    {
        id:2,
        name:"Cavity Treatment",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: cavity
    },
    {
        id:3,
        name:"Whitening Treatment",
        description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        icon: whitening
    }]
    return (
        <div className='flex flex-col text-center my-10'>
            <p className='text-2xl font-bold text-primary'>
                Our Services
            </p>
            <h1 className='text-3xl'>
                Services We Provide
            </h1>
            <div className='mt-20 flex justify-evenly text-accent flex-wrap gap-4'>

            {serviceData.map(service =><Service service= {service} key={service.id}></Service>)}
            </div>
        </div>
    );
};

export default Services;