import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name: "Opening Hours",
            description:"Open 9.00 Am to 10.00 PM Everyday",
            icon: clock,
            bgClass: "bg-primary"
        },
        {
            id:2,
            name: "Opening Hours",
            description:"Open 9.00 Am to 10.00 PM Everyday",
            icon: marker,
            bgClass: "bg-neutral-500"
        },{
            id:3,
            name: "Opening Hours",
            description:"Open 9.00 Am to 10.00 PM Everyday",
            icon: phone,
            bgClass: "bg-primary"
        }
    ]
    return (
        <div className='my-20 flex justify-evenly text-white flex-wrap gap-4'>
            {cardData.map(card => <InfoCard key={card.id} card = {card} ></InfoCard>)}
        </div>
    );
};

export default InfoCards;