"use client";

import CurrentTasks from "./CurrentTasks";
import RightBar from "./RightBar";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-16">
      <div className="flex flex-col w-3/4 ">
        <CurrentTasks />
        <div />
      </div>
      <RightBar />
    </div>
  );
}

export default Dashboard;