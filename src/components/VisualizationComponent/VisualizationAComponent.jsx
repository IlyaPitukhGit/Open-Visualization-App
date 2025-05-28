import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import { useState } from "react";
import s from "./visualizationcomponent.module.css";

const VisualizationAComponent = ({ data }) => {
    const [legendPosition, setLegendPosition] = useState({ orientation: "v", x: 1.05, y: 1 });

    useEffect(() => {
        const updateLegend = () => {
            const isMobile = window.innerWidth <= 768;
            setLegendPosition(isMobile
                ? {
                      orientation: "h",
                      x: 0.5,
                      y: -0.3,
                      xanchor: "center"
                  }
                : {
                      orientation: "v",
                      x: 1.05,
                      y: 1
                  });
        };
    
        updateLegend(); // одразу встановити
        window.addEventListener("resize", updateLegend);
    
        return () => window.removeEventListener("resize", updateLegend);
    }, []);
    


    if (!data || data.length === 0)
        return <p className={s.title}>There is no data for the A-scan.</p>;

    const time = data.map((point) => point.time);
    const ch1 = data.map((point) => point.ch1);
    const ch2 = data.map((point) => point.ch2);

    return (
        <div className="plot__wrapper">
            <Plot 
                    useResizeHandler={true}
                    style={{ width: "100%", height: "100%" }}
                    config={{ responsive: true }}
                        data={[
                            {
                                x: time,
                                y: ch1,
                                type: "scatter",
                                mode: "lines",
                                name: "CH1",
                                line: { color: "blue" },
                            },
                            {
                                x: time,
                                y: ch2,
                                type: "scatter",
                                mode: "lines",
                                name: "CH2",
                                line: { color: "red" },
                            },
                        ]}
                        layout={{
                            title: "Візуалізація A-скану",
                            xaxis: { title: "Час (µs)" },
                            yaxis: { title: "Напруга (mV)" },
                            legend: legendPosition,
                            margin: legendPosition.orientation === "h"
                                ? { t: 40, b: 80 }  // більше місця знизу
                                : { t: 40, b: 40 },
                            autosize: true,
                            responsive: true,
                        }}
                    />

        </div>
            
    );
};

export default VisualizationAComponent;
