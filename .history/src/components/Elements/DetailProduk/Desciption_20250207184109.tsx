import React from "react";
import { useState } from "react";

interface DesciptionProps {
    description: string
}
const Desciption: React.FC<DesciptionProps> = ({description}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
      };
    
    return (<div>
        <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-1"}`}>
          {description}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-green-500 hover:text-green-700 focus:outline-none"
        >
          {isExpanded ? "Tutup" : "Baca Selengkapnya"}
        </button>
        </div>
    );
}



export default Desciption