import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import { useState } from "react";
import s from "./visualizationcomponent.module.css";

const VisualizationAComponent = ({ data }) => {
    if (!data || data.length === 0)
        return <p className={s.title}>There is no data for the A-scan.</p>;

    const time = data.map((point) => point.time);
    const ch1 = data.map((point) => point.ch1);
    const ch2 = data.map((point) => point.ch2);

    return (
        <Plot
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
            }}
        />
    );
};

export default VisualizationAComponent;
