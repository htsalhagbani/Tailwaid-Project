import React from 'react'

function Card(props) {
  return (

     
            <div className="flex flex-col ">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-70 object-cover mb-4"
                />
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2">{props.title}</h3>
                <p className="text-gray-600 mb-4 text-lg md:text-xl">{props.description}</p>
                <p className="text-[#BE7C68] font-bold uppercase text-sm hover:underline">
                    Read More →
                </p>
            </div>
       

  )
}

export default Card