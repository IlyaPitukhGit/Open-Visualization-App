import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import s from "./visualizationcomponent.module.css";

const VisualizationBComponent = ({ data }) => {
    if (!data)
        return <p className={s.title}>There is no data for the B-scan.</p>;

    const positions = Object.keys(data).map(Number);
    const intensities = Object.values(data);

    return (
        <Plot
            data={[
                {
                    z: intensities,
                    x: positions,
                    type: "heatmap",
                    colorscale: "Viridis",
                },
            ]}
            layout={{
                title: "Теплова карта B-скану",
                xaxis: { title: "Позиція (мм)" },
                yaxis: { title: "Час (µs)" },
            }}
        />
    );
};

export default VisualizationBComponent;
