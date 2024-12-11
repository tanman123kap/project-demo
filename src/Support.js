import React, {useState, useEffect} from 'react';
import English from './English.js';
import Metric from './Metric.js';

export default function Support() {
    const [visibleItem, setVisibleItem] = useState('');
    useEffect(() => {
        // This will run only once when the component mounts
        setVisibleItem("english");
    }, []);
    return (
      <div className="btn-group d-block" role="group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
        <label className="btn btn-outline-primary" onClick={() => setVisibleItem("english")} htmlFor="btnradio1">
          English
        </label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-primary" onClick={() => setVisibleItem("metric")} htmlFor="btnradio2">
          Metric
        </label>

        {visibleItem === "english" && <English />}
        {visibleItem === "metric" && <Metric />}
      </div>
    );
}
