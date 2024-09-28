import React from 'react'

function Card2(props) {
  return (
    <div className="flex flex-col   ">
                        <img
                            src={props.image}
                            alt={props.name}
                            className="w-full h-90 object-cover mb-4"
                        />
                        <h3 className="font-semibold text-xl md:text-4xl text-gray-700 mb-2">{props.name}</h3>
                        <p className="text-gray-600 text-xl md:text-xl">{props.description}</p>
                    </div>
  )
}

export default Card2