import React from "react";

function Card({ title, text, images, image }) {
	return (
		<div className="card">
			<img
				src={image}
				alt="nature_image"
				className=" h-40 w-full rounded-t-lg"
			/>
			<div className="px-3 pb-2">
				<h4 className="font-medium my-2 text-2xl leading-7">{title}</h4>
				<p className="cardBody">{text}</p>
				<div className="mt-6 flex items-center space-x-3">
                    {
                        images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={img}
                                className=" w-10 h-10 rounded-full object-cover"
                            />
                        ))
                    }
				</div>
			</div>
		</div>  
	);
}

export default Card;
