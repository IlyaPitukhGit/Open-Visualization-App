import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import s from "./visualizationcomponent.module.css";

const VisualizationBComponent = ({ data }) => {

    const [colorBarPosition, setColorBarPosition] = useState({
        orientation: "v",  // вертикальна шкала праворуч
        x: 1.05,
        y: 0.5,
    });

    useEffect(() => {
        const updateColorbar = () => {
            const isMobile = window.innerWidth <= 768;
            setColorBarPosition(isMobile
                ? {
                      x: 0.5,
                      y: -0.25,
                      xanchor: "center",
                      len: 0.4,
                      thickness: 15,
                      orientation: "h"
                  }
                : {
                      x: 1.05,
                      y: 0.5,
                      len: 1,
                      thickness: 15,
                  });
        };
    
        updateColorbar();
        window.addEventListener("resize", updateColorbar);
    
        return () => window.removeEventListener("resize", updateColorbar);
    }, []);
    

    if (!data)
        return <p className={s.title}>There is no data for the B-scan.</p>;

    const positions = Object.keys(data).map(Number);
    const intensities = Object.values(data);

    return (
        <div className="plot__wrapper">
             <Plot useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}
                config={{ responsive: true }}
                    data={[
                        {
                            z: intensities,
        x: positions,
        type: "heatmap",
        colorscale: "Viridis",
        colorbar: {
            x: colorBarPosition.x,
            y: colorBarPosition.y,
            len: colorBarPosition.len,
            thickness: colorBarPosition.thickness,
            xanchor: colorBarPosition.xanchor || "left",
        },
                        },
            ]}
            layout={{
                title: "Теплова карта B-скану",
                    xaxis: { title: "Позиція (мм)" },
                    yaxis: { title: "Час (µs)" },
                    margin: { t: 40, b: 40 },
                    autosize: true,
                    responsive: true,
            }}
        />
        </div>
       
    );
};

export default VisualizationBComponent;
