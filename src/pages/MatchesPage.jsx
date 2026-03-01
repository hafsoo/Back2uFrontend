import { useLocation, useNavigate } from "react-router-dom";
import MatchingCard from "../components/Route/LostFound/MatchingCard";

const MatchesPage = () => {
  const location = useLocation();
  const matches = location.state?.matches || [];
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Possible Matches</h2>

      {matches.length === 0 ? (
        <p className="text-gray-500">No matches found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...matches]
            .sort((a, b) => b.matchPercentage - a.matchPercentage)
            .map((m, idx) => (
              <div
                key={m.item._id}
                onClick={() => navigate(`/lost-found/${m.item._id}`)}
                className="cursor-pointer"
              >
                <MatchingCard key={idx} data={m.item} type={m.item.status} matchPercentage={m.matchPercentage} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MatchesPage;
