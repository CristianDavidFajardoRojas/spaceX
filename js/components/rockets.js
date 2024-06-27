import { getAllRocketsData } from "../modules/rocketsData.js";

let allrockets = await getAllRocketsData();
let maxWeigth;
let maxSeaKn;
allrockets.forEach(dict => {
    maxWeigth = dict.mass.kg
    if(dict.mass.kg > maxWeigth) maxWeigth = dict.mass.kg
    

    maxSeaKn = dict.first_stage.thrust_sea_level.kN
    if(dict.first_stage.thrust_sea_level.kN > maxSeaKn) maxSeaKn = dict.first_stage.thrust_sea_level.kN
})





export const rocketHTML = data => {
    let rocket = data.docs[0];
    console.log(rocket)
    
    let imgPlantilla = ``;
    (rocket.flickr_images).forEach(img=>{
        imgPlantilla += `<article><img src="${img}" referrerpolicy="no-referrer"></article>`
    })


    let plantillaProgressBar = `
    <article>
        <div>
            <strong>Rocket weight</strong>
            <progress value="${rocket.mass.kg}" max="${maxWeigth}"></progress>
        </div>
        <div>
            <div>
                <p>${rocket.mass.kg} kg</p>
                <p>${rocket.mass.lb} lb</p>
            </div>
        </div>
    </article>
    `; 
    (rocket.payload_weights).forEach(dict => {
        plantillaProgressBar += `
    <article>
        <div>
            <strong>${dict.name}</strong>
            <progress value="${dict.kg}" max="${dict.kg + dict.lb}"></progress>
        </div>
        <div>
            <div>
                <p>${dict.kg} kg</p>
                <p>${dict.lb} lb</p>
            </div>
        </div>
    </article>`
    })

    return /*html*/`
    <header>
        <h3>${rocket.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Description:</strong>
                    <p>${rocket.description}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/country-flag-flags-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket Country:</strong>
                    <p>${rocket.country}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cost-round-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Cost per launch:</strong>
                    <p>${rocket.cost_per_launch}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Date of the first flight:</strong>
                    <p>${rocket.first_flight}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket Height:</strong>
                    <p>Meters: ${rocket.height.meters}, Feet: ${rocket.height.feet}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket mass:</strong>
                    <p>Kg: ${rocket.mass.kg}, lb: ${rocket.mass.lb}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket diameter:</strong>
                    <p>Meters: ${rocket.diameter.meters}, Feet: ${rocket.diameter.feet}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div class="progress-bar" style="background: 
                        radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                        conic-gradient(from 180deg, rgb(118, 189, 255) ${rocket.first_stage.thrust_sea_level.kN / 1780 * 100}%, rgba(255, 192, 203, 0) 0);  ">
                        <div>
                            <strong>Atmospheric acceleration</strong>
                            <p>${(rocket.first_stage.thrust_sea_level.kN / 1780 * 100).toFixed(2)} % </p>
                            <p>${rocket.first_stage.thrust_sea_level.kN} kN</p>
                            <p>${rocket.first_stage.thrust_sea_level.lbf} Lbf</p>
                        </div>
                    </div>
    
                <img src="storage/img/rocket.gif">
            
                <div class="progress-bar" style="background: 
                    radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                    conic-gradient(from 180deg, rgb(118, 189, 255) ${rocket.second_stage.thrust.kN / 1960 * 100}%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Speed in space</strong>
                        <p>${(rocket.second_stage.thrust.kN / 1960 * 100).toFixed(2)} % </p>
                        <p>${rocket.second_stage.thrust.kN} kN</p>
                        <p>${rocket.second_stage.thrust.lbf} Lbf</p>
                    </div>
                </div>
            </div>
    
            <div class="text_images">
                <div id = "caja_content">
                    <h3>INFORMATION ROCKET</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>${rocket.type}</strong>
                        </article>
                        <article>
                            <p>Rocket in service</p>
                            <strong>${rocket.active == true ? "active" : "inactive"}</strong>
                        </article>
                        <article>
                            <p>Number of stages</p>
                            <strong>${rocket.stages}</strong>
                        </article>
                        <article>
                            <p>Number of engines</p>
                            <strong>${rocket.engines.number}</strong>
                        </article>
                        <article>
                            <p>Landing legs</p>
                            <strong>${rocket.landing_legs.number}</strong>
                        </article>
                        <article>
                            <p>Leg material</p>
                            <strong>${rocket.landing_legs.material}</strong>
                        </article>
                    </div>
                </div>
                <div class="div_images">
                    ${imgPlantilla}
                </div>
                <div id = "caja_content">
                    <h3>ENGINE INFORMATION</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>${rocket.engines.type}</strong>
                        </article>
                        <article>
                            <p>Maximum power loss</p>
                            <strong>${rocket.engines.engine_loss_max || 'Not specified'}</strong>
                        </article>
                        <article>
                            <p>Engine availability</p>
                            <strong>${rocket.active ? 'Active' : 'Inactive'}</strong>
                        </article>
                        <article>
                            <p>Layout</p>
                            <strong>${rocket.engines.layout || 'Not specified'}</strong>
                        </article>
                        <article>
                            <p>Propellant 1</p>
                            <strong>${rocket.engines.propellant_1}</strong>
                        </article>
                        <article>
                            <p>Propellant 2</p>
                            <strong>${rocket.engines.propellant_2}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side">
            ${plantillaProgressBar}

        </section>
    </main>
    <footer class="footer">
        <section>
        <article id="imhere">
            <img src="storage/img/cute-rocket-launching-svgrepo-com.svg">
            <p>Rockets</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/capsule-space-capsule-svgrepo-com.svg">
            <p>Capsules </p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/cpu-svgrepo-com.svg">
            <p>Cores</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/company-folder-svgrepo-com.svg">
            <p>Company</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/account-avatar-man-svgrepo-com.svg">
            <p>Crew</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/two-dragons-svgrepo-com.svg">
            <p>Dragons</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/history-svgrepo-com.svg">
            <p>History</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/pen-svgrepo-com.svg">
            <p>Landspads</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/rocket-launch-svgrepo-com.svg">
            <p>Launches</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/launchpad-svgrepo-com.svg">
            <p>Launchpads</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/orbit-satellite-svgrepo-com.svg">
            <p>Payloads</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/road-mini-603-svgrepo-com.svg">
            <p>Roadster</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/viking-ship-vessel-svgrepo-com.svg">
            <p>Ships</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/star-sharp-svgrepo-com.svg">
            <p>Starlink</p>
            <div></div>
        </article>
    </section>
    <div id="pagination">
    </div>
    </footer>
    `;
}