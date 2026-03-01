import { MapPin, Tag, Calendar } from "lucide-react";

const MatchingCard = ({ data, type, matchPercentage }) => {
  const imageUrl = data?.images?.[0]?.url;

  return (
    <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden group">

      {/* Match Percentage Badge */}
      {matchPercentage !== undefined && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] tracking-wide font-semibold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-white/40">
            {matchPercentage}% MATCH
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={data.itemName}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition duration-500" />

        {/* Floating Status Tag (More Premium Placement) */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide capitalize backdrop-blur-md border
              ${
                data.status === "lost"
                  ? "bg-yellow-500/90 text-white border-yellow-300/50"
                  : data.status === "found"
                  ? "bg-emerald-500/90 text-white border-emerald-300/50"
                  : "bg-blue-500/90 text-white border-blue-300/50"
              }`}
          >
            {data.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">

        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
            {data.itemName}
          </h3>
        </div>

        {/* Meta Info Section */}
        <div className="flex flex-col gap-3 text-sm">

          {/* Category */}
          <div className="flex items-center gap-3 text-gray-600">
            <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition">
              <Tag size={16} className="text-gray-500 group-hover:text-orange-600 transition" />
            </div>
            <span className="font-medium">{data.category}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-gray-600">
            <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition">
              <MapPin size={16} className="text-gray-500 group-hover:text-orange-600 transition" />
            </div>
            <span className="font-medium">{data.location}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 text-gray-600">
            <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition">
              <Calendar size={16} className="text-gray-500 group-hover:text-orange-600 transition" />
            </div>
            <span className="font-medium">
              {type === "lost" ? data.dateLost : data.dateFound}
            </span>
          </div>

        </div>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-orange-400/40 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default MatchingCard;