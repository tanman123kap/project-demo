import React, { useState } from 'react';

export default function English() {
    const [feet, setFeet] = useState("");
    const handleFe =(event) => {
        setFeet(event.target.value);
    }
    const [inch, setInch] = useState("");
    const handleIn =(event) => {
        setInch(event.target.value);
    }
    const insq = feet * 12 + Number(inch);
    const height = insq * insq;
    const [weight, setWeight] = useState("");
    const handleWT = (event) => {
        setWeight(event.target.value);
    }
    const [result, setResult] = useState(null);
    const res = (weight/height * 703).toFixed(2);
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
                <div className="col-5">
                    <input type="text" className="form-control" placeholder="Age" aria-label="Age" />
                </div>
                <div className="col-4">
                    <select className="form-select" value={feet} onChange={handleFe}>
                        <option selected>Height Ft.</option>
                        <option value="3">3 ft</option>
                        <option value="4">4 ft</option>
                        <option value="5">5 ft</option>
                        <option value="6">6 ft</option>
                        <option value="7">7 ft</option>
                        <option value="8">8 ft</option>
                    </select>
                </div>
                <div className="col-3">
                    <select className="form-select" value={inch} onChange={handleIn}>
                        <option selected>In.</option>
                        <option value="0">0 in</option>
                        <option value="1">1 in</option>
                        <option value="2">2 in</option>
                        <option value="3">3 in</option>
                        <option value="4">4 in</option>
                        <option value="5">5 in</option>
                        <option value="6">6 in</option>
                        <option value="7">7 in</option>
                        <option value="8">8 in</option>
                        <option value="9">9 in</option>
                        <option value="10">10 in</option>
                        <option value="11">11 in</option>
                    </select>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-6">
                    <input type="text" className="form-control" value={weight} onChange={handleWT} placeholder="Current Weight lbs" />
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
    );
}