import React from "react";
import Plot from "react-plotly.js";
import s from "./visualizationcomponent.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const VisualizationBComponent = ({ data }) => {

    const { width } = useWindowDimensions();
    const isMobile = width <= 768;

    const colorBarPosition = {
        x: 1.05,
        y: 0.5,
        len: 1,
        thickness: 15,
        orientation: "v",
    };
    

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
                            coloraxis: "coloraxis",
                        },
                    ]}
            layout={{
                title: {
                    text: "Теплова карта B-скану",
                    font: { size: isMobile ? 14 : 16 },
                },
                xaxis: {
                    title: {
                        text: "Позиція (мм)",
                        font: { size: isMobile ? 12 : 14 },
                    },
                    tickfont: { size: isMobile ? 10 : 12 },
                },
                yaxis: {
                    title: {
                        text: "Час (µs)",
                        font: { size: isMobile ? 12 : 14 },
                    },
                    tickfont: { size: isMobile ? 10 : 12 },
                },
                coloraxis: {
                    colorbar: {
                        x: colorBarPosition.x,
                        y: colorBarPosition.y,
                        len: colorBarPosition.len,
                        thickness: colorBarPosition.thickness,
                        orientation: colorBarPosition.orientation,
                        xanchor: colorBarPosition.xanchor || "left",
                    },
                },
                margin: { t: 40, b: 40 },
                autosize: true,
                responsive: true,
            }}
        />
        </div>
       
    );
};

export default VisualizationBComponent;
