import { useNavigate } from "react-router";
import CardDashboard from "../../components/CardDashboard";
import Heading from "../../components/Heading";
import Heading2 from "../../components/Heading2";
import { URL_CATEGORY, URL_DESTINATION } from "../../constants/config";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 sm:p-40 min-h-[90vh] bg-img-hero">
      <Heading>How do you want to explore?</Heading>
      <div className="grid md:grid-cols-2 gap-10 mt-20 sm:mt-30">
        <CardDashboard onClick={() => navigate(URL_CATEGORY)}>
          <Heading2>Category</Heading2>
          <p>Choose your travel style: beaches, mountains, cities, and more.</p>
        </CardDashboard>
        <CardDashboard onClick={() => navigate(URL_DESTINATION)}>
          <Heading2>Destination</Heading2>
          <p>Pick a place directly: Bali, Tokyo, Paris, and beyond.</p>
        </CardDashboard>
      </div>
    </div>
  );
};

export default Dashboard;
