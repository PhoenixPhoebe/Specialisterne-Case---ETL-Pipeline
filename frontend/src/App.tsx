import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

type DataPoint = {
  observed_at: string;
  dmi: number;
  ds18b20: string;
  bme280: string;
};

export default function App() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    
    async function fetchData() {
      try {
        const res = await fetch("/vejrData/data/temperature/outside"); 
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json: DataPoint[] = await res.json();

        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Prepare arrays for chart
  const timestamps = data.map((d) => {
    const date = new Date(d.observed_at);
    date.setSeconds(0, 0); // remove seconds
    return date;
  });

  const dmiData = data.map((d) => d.dmi);
  const ds18b20Data = data.map((d) => parseFloat(d.ds18b20));
  const bme280Data = data.map((d) => parseFloat(d.bme280));



  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <LineChart
        width={800}
        height={400}
        xAxis={[{ data: timestamps, scaleType: "time"}]}
        series={[
          { data: dmiData, label: "DMI" , showMark: false },
          { data: ds18b20Data, label: "DS18B20" , showMark: false },
          { data: bme280Data, label: "BME280" , showMark: false },
        ]}
      />
    </div>
  );
}

