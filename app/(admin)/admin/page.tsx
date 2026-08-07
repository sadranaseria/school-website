import { Metadata } from "next";
import LatestArticels from "./LatestArticels";
import Summery from "./Summery";


const Dashboard = () => {
  return (
    <div className="w-300 h-screen mt-30">
      <Summery />
      <LatestArticels />
    </div>
  );
};

export const metadata : Metadata = {
  title : 'طهرانی ادمین - داشبورد',
  description : 'This page for admin and just admin can enter it. And admin can see some data in this page'
}

export default Dashboard;
