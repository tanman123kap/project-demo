import React, { useState } from 'react';

export default function Metric() {
    const [height, setHeight] = useState("");
    const handleHT = (event) => {
        setHeight(event.target.value);
    }
    let meter = height * 1/100;
    let mtsq = meter * meter;
    const [weight, setWeight] = useState("");
    const handleWT = (event) => {
        setWeight(event.target.value);
    }
    const [result, setResult] = useState(null);
    const res = (weight/mtsq).toFixed(2);
    const [weDiff, setWeDiff] = useState("");
    const [hide, setHide] = useState("none");
    const showres = () => {
        setResult(res);
        if(Number(res) < 16) {
            setWeDiff("under weight");
        } else if(Number(res) >= 16 && res < 25) {
            setWeDiff("healthy weight");
        } else if(Number(res) >= 25 && res < 30) {
            setWeDiff("over weight");
        } else if(Number(res) >= 30) {
            setWeDiff("obese");
        } else {
            setWeDiff("healthy weight");
        }        
        setHide("block");
    }
    return(
        <div className="container-fluid">
            <div className="row m-2">
                <div className="col form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="col form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-6 col-sm-12 mb-2">
                    <input type="text" className="form-control" placeholder="Age" aria-label="Age" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <input type="text" className="form-control" value={height} onChange={handleHT} placeholder="Height cm" />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-6 col-sm-12">
                    <input type="text" className="form-control" value={weight} onChange={handleWT} placeholder="Current Weight kg" />
                </div>
            </div>
            <button className="btn btn-primary" onClick={showres}>
                Calculate
            </button>
            <div className={`my-2 d-${hide}`}>
                <strong className="text-info">Your Results</strong><br />
                <b>Based on your body mass index &#8317;BMI&#8318; of {result}, you are classed as {weDiff}.</b>
            </div>
        </div>
    )
}