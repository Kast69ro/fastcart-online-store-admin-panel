import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Schedule from "../../components/schedule/schedule";
import one from "#/div.MuiStack-root.png";
import two from "#/div.MuiStack-root (2).png";
import three from "#/div.MuiStack-root (1).png";
import Card from "../../components/dashboard-card/card";
import Tables from "../../components/dashboard-table/table";

const Dashboards = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
       <div className="p-8 w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img src={one} alt="Card 1" className="rounded-xl shadow-md" />
              <img src={two} alt="Card 2" className="rounded-xl shadow-md" />
              <img src={three} alt="Card 3" className="rounded-xl shadow-md" />
            </div>

            <div>
              <Schedule />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 shadow-xl p-[10px_20px] rounded-2xl ">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Top selling products
              </h2>
              <button className="flex items-center text-blue-600 hover:underline group">
                <span className="mr-1">See All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <Card />
            <Card />
            <Card />
          </div>
        </div>
      <Tables/>
      </div>
    </div>
    </>
  );
};

export default Dashboards;
