"use client";

import MapCard from "./MapCard";
import ClimateChart from "./ClimateChart";
import Alerts from "./Alerts";

export default function Dashboard() {
  return (
    <main className="p-6 grid gap-6 md:grid-cols-2">
      {}
      <MapCard />

      {}
      <ClimateChart />

      {}
      <div className="md:col-span-2">
        <Alerts />
      </div>
    </main>
  );
}
