import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <div className="image-container max-h-80 max-w-80 ">
        <Image
          src="https://images.pexels.com/photos/27745133/pexels-photo-27745133/free-photo-of-green-big-leaves-of-plant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default About;
