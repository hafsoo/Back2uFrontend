import { MapPin, Tag, Calendar } from "lucide-react";

const LostFoundCard = ({ data, type }) => {
  const imageUrl = data?.images?.[0]?.url;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer overflow-hidden">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-3xl">
        <img
          src={imageUrl}
          alt="item"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        {/* Title + Status Badge */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-gray-900 line-clamp-1">
            {data.itemName}
          </h3>

          <span
            className={`px-4 py-1 rounded-full text-white text-xs font-semibold capitalize
              ${
                data.status === "lost"
                  ? "bg-yellow-500"
                  : data.status === "found"
                  ? "bg-green-500"
                  : "bg-blue-500"
              }`}
          >
            {data.status}
          </span>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mt-4 text-gray-700 text-sm">
          <Tag size={16} className="text-gray-500" />
          <span className="font-medium">{data.category}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
          <MapPin size={16} className="text-gray-500" />
          <span className="font-medium">{data.location}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
          <Calendar size={16} className="text-gray-500" />
          <span className="font-medium">{type === "lost" ? data.dateLost : data.dateFound}</span>
        </div>

        {/* Active Badge */}
        {/* <span className="mt-3 inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold">
          active
        </span> */}
      </div>
    </div>
  );
};

export default LostFoundCard;

/*
import { MapPin, Tag, Calendar } from "lucide-react";

const LostFoundCard = ({ data, type }) => {
  const imageUrl = data?.images?.[0]?.url;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer p-4">
      
     
      <div className="h-40 w-full overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt="item"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="flex justify-between items-center mt-3">
        <h3 className="font-semibold text-lg text-gray-800">
          {data.itemName}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-white text-xs capitalize
            ${
              data.status === "lost"
                ? "bg-yellow-500"
                : data.status === "found"
                ? "bg-green-500"
                : "bg-blue-500"
            }`}
        >
          {data.status}
        </span>
      </div>

   
      <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
        <Tag size={16} />
        <span>{data.category}</span>
      </div>

      
      <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
        <MapPin size={16} />
        <span>{data.location}</span>
      </div>

      
      <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
        <Calendar size={16} />
        <span>{type === "lost" ? data.dateLost : data.dateFound}</span>
      </div>

    
    </div>
  );
};

export default LostFoundCard;
*/



