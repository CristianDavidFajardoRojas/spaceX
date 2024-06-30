export const dragonHTML = data => {
    let dragon = data.docs[0];
    
    let imgPlantilla = ``;
    (dragon.flickr_images).forEach(img=>{
        imgPlantilla += `<article><img src="${img}" referrerpolicy="no-referrer"></article>`
    })



    let thrusterPlantilla = '';
    (dragon.thrusters).forEach(dict => {
        thrusterPlantilla += /*html*/`
        <h3>${dict.type}:</h3>
        <article id="dragon_thrusters_article">
            <div><strong>AMOUNT:</strong><p>${dict.amount}</P></div>
            <div><strong>PODS:</strong><p>${dict.pods}</P></div>
            <div><strong>FUEL 1:</strong><p>${dict.fuel_1}</P></div>
            <div><strong>FUEL 2:</strong><p>${dict.fuel_2}</P></div>
            <div><strong>ISP:</strong><p>${dict.isp}</P></div>
            <div><strong>thrust:</strong><p>kn: ${dict.thrust.kN}, lbf: ${dict.thrust.lbf}</P></div>
        </article>
        <hr>
        
        `;
    })




    return /*html*/`
    <header>
        <h3>${dragon.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Description:</strong>
                    <p>${dragon.description}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Date of the first flight:</strong>
                    <p>${dragon.first_flight}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Height with trunk:</strong>
                    <p>Meters: ${dragon.height_w_trunk.meters}, Feet: ${dragon.height_w_trunk.feet}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Dry mass:</strong>
                    <p>Kg: ${dragon.dry_mass_kg}, lb: ${dragon.dry_mass_lb}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Diameter:</strong>
                    <p>Meters: ${dragon.diameter.meters}, Feet: ${dragon.diameter.feet}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Wikipedia:</strong>
                    <a id="a_crew" href='${dragon.wikipedia}'>
                        <p>CLICK ME</p>
                    </a>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    
                <div id="core_articles">
                    <article>
                        <strong>Launch payload mass</strong>
                        <hr>
                        <p>kg: ${dragon.launch_payload_mass.kg}, lb: ${dragon.launch_payload_mass.lb}</p>
                    </article>
                    <article>
                        <strong>Launch payload volume</strong>
                        <hr>
                        <p>cubic meters: ${dragon.launch_payload_vol.cubic_meters}, cubic_feet: ${dragon.launch_payload_vol.cubic_feet}</p>
                    </article>
                    <article>
                        <strong>Return payload mass</strong>
                        <hr>
                        <p>kg: ${dragon.return_payload_mass.kg}, lb: ${dragon.return_payload_mass.lb}</p>
                    </article>
                </div>
    
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7f74ab81505303.5d02aa15a7ab5.gif">
            
                <div id="core_articles">
                    <article>
                        <strong>Launch payload volume</strong>
                        <hr>
                        <p>cubic meters: ${dragon.launch_payload_vol.cubic_meters}, cubic_feet: ${dragon.launch_payload_vol.cubic_feet}</p>
                    </article>
                    <article>
                        <strong>Pressurized capsule</strong>
                        <hr>
                        <p>cubic meters: ${dragon.pressurized_capsule.payload_volume.cubic_meters}, cubic_feet: ${dragon.pressurized_capsule.payload_volume.cubic_feet}</p>
                    </article>
                    <article>
                        <strong>Trunk</strong>
                        <hr>
                        <p>cubic meters: ${dragon.trunk.trunk_volume.cubic_meters}, cubic_feet: ${dragon.trunk.trunk_volume.cubic_feet}</p>
                    </article>
                </div>

            </div>
    
            <div class="text_images">
                <div id = "caja_content">
                    <h3>DRAGON INFORMATION</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>${dragon.type}</strong>
                        </article>
                        <article>
                            <p>Dragon in service</p>
                            <strong>${dragon.active == true ? "active" : "inactive"}</strong>
                        </article>
                        <article>
                            <p>Crew capacity</p>
                            <strong>${dragon.crew_capacity}</strong>
                        </article>
                        <article>
                            <p>Sidewall angle</p>
                            <strong>${dragon.sidewall_angle_deg}</strong>
                        </article>
                        <article>
                            <p>Years of orbit</p>
                            <strong>${dragon.orbit_duration_yr}</strong>
                        </article>
                    </div>
                </div>
                <div class="div_images">
                    ${imgPlantilla}
                </div>
                <div id = "caja_content">
                    <h3>HEAT SHIELD</h3>
                    <hr>
                    <div>
                        <article>
                            <p>material</p>
                            <strong>${dragon.heat_shield.material}</strong>
                        </article>
                        <article>
                            <p>Maximum power loss</p>
                            <strong>${dragon.heat_shield.size_meters}</strong>
                        </article>
                        <article>
                            <p>Engine availability</p>
                            <strong>${dragon.heat_shield.temp_degrees}</strong>
                        </article>
                        <article>
                            <p>Layout</p>
                            <strong>${dragon.heat_shield.dev_partner}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side" id="right_side_dragons">
            ${thrusterPlantilla}
        </section>
    </main>
    <footer class="footer">
        <section>
        <article>
            <img src="storage/img/cute-rocket-launching-svgrepo-com.svg">
            <p>Rockets</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/capsule-space-capsule-svgrepo-com.svg">
            <p>Capsules</p>
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
        <article id="imhere">
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
            <p>Landpads</p>
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