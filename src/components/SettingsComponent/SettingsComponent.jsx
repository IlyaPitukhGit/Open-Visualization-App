import React from "react";
import s from "./settingscomponent.module.css";

const SettingsComponent = ({ scanType, setScanType }) => (
    <div className={s.settings__container}>
        <label className={s.settings__label}>
            <input
                className={s.settings__input}
                type="radio"
                value="A-scan"
                checked={scanType === "A-scan"}
                onChange={() => setScanType("A-scan")}
            />
            A-scan
        </label>
        <label className={s.settings__label}>
            <input
                className={s.settings__input}
                type="radio"
                value="B-scan"
                checked={scanType === "B-scan"}
                onChange={() => setScanType("B-scan")}
            />
            B-scan
        </label>
    </div>
);

export default SettingsComponent;
