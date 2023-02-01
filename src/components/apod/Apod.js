import React from "react";

function Apod({ apodData }) {
    

    const url = apodData.url
    const title = apodData.title
    const date = apodData.date
    const explanation = apodData.explanation

    return (
        <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                        <img src={url} alt=""/>
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                        <h3>{title}</h3>
                    </div>
                    <div class="card-content">
                        <h4>{date}</h4>
                    </div>
                    <div class="card-content">
                        <p>{explanation}</p>
                    </div>
                
                </div>
            </div>
        </div>
    );

}

export default Apod;