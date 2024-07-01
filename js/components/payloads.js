export const payloadHTML = data => {
    let payload = data.docs[0];

    return /*html*/`
    <header>
        <h3>${payload.name}</h3>
    </header>
    <main>
        <section class="left_side">
             <article class="article_info">
                <img src="storage/img/country-flag-flags-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Nacionality:</strong>
                    <p>${payload.nationalities[0] ? payload.nationalities[0] : "No info"}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/orbit-space-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Orbit:</strong>
                    <p>${payload.orbit == null ? "No orbit" : payload.orbit}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Longitude:</strong>
                    <p>${payload.longitude == null ? 0 : payload.longitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Reference system:</strong>
                    <p>${payload.reference_system}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Mass:</strong>
                    <p>Kg: ${payload.mass_kg}, lbs: ${payload.mass_lbs}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Dragon manifest:</strong>
                    <a id="a_crew" href='${payload.dragon.manifest == null ? "#" : payload.dragon.manifest}'>
                        <p>CLICK ME</p>
                    </a>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    
                <div id="core_articles">
                    <article>
                        <strong>Semi major axis km</strong>
                        <hr>
                        <p>${payload.semi_major_axis_km}</p>
                    </article>
                    <article>
                        <strong>Eccentricity</strong>
                        <hr>
                        <p>${payload.eccentricity}</p>
                    </article>
                </div>
    
                <img src="https://payloadspace.com/wp-content/uploads/2022/04/Screenshot-2022-04-03-100044-702x866.jpg">
            
                <div id="core_articles">
                    <article>
                        <strong>Periapsis KM</strong>
                        <hr>
                        <p>${payload.periapsis_km}</p>
                    </article>
                    <article>
                        <strong>Apoapsis KM</strong>
                        <hr>
                        <p>${payload.apoapsis_km}</p>
                    </article>
                </div>

            </div>
    
            <div class="text_images" id = "inferior_payloads">
                <div id = "caja_content">
                    <h3>PAYLOAD INFORMATION</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>${payload.type}</strong>
                        </article>
                        <article>
                            <p>Reused</p>
                            <strong>${payload.reused == null ? "false" : payload.reused }</strong>
                        </article>
                        <article>
                            <p>Manufactures</p>
                            <strong>${payload.manufacturers[0] ? payload.manufacturers[0] : "No manufac."}</strong>
                        </article>
                        <article>
                            <p>Customer</p>
                            <strong>${payload.customers[0] ? payload.customers[0] : "No customers"}</strong>
                        </article>
                        <article>
                            <p>Regime</p>
                            <strong>${payload.regime}</strong>
                        </article>
                    </div>
                </div>
                <div id = "caja_content">
                    <h3>DRAGON</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Mass returned</p>
                            <strong>kg: ${payload.dragon.mass_returned_kg == null ? 0 : payload.dragon.mass_returned_kg}, lbs: ${payload.dragon.mass_returned_lbs == null ? 0 : payload.dragon.mass_returned_lbs}</strong>
                        </article>
                        <article>
                            <p>Flight time sec</p>
                            <strong>${payload.dragon.flight_time_sec == null ? 0 : payload.dragon.flight_time_sec}</strong>
                        </article>
                        <article>
                            <p>Land landing</p>
                            <strong>${payload.dragon.land_landing == null ? false : payload.dragon.land_landing}</strong>
                        </article>
                        <article>
                            <p>Water landing</p>
                            <strong>${payload.dragon.water_landing == null ? false : payload.dragon.water_landing}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side" id="right_side_dragons">
            <article id="dragon_thrusters_article">
                <div><strong>INCLINATION DEG:</strong><p>${payload.inclination_deg == null ? 0 : payload.inclination_deg}</P></div>
                <div><strong>PERIOD MIN:</strong><p>${payload.period_min == null ? 0 : payload.period_min}</P></div>
                <div><strong>LIFESPAN YEARS:</strong><p>${payload.lifespan_years == null ? 0 : payload.lifespan_years}</P></div>
                <div><strong>EPOCH:</strong><p>${payload.epoch == null ? 0 : payload.epoch}</P></div>
                <div><strong>MEAN MOTION:</strong><p>${payload.mean_motion == null ? 0 : payload.mean_motion}</P></div>
                <div><strong>RAAN:</strong><p>${payload.raan == null ? 0 : payload.raan}</P></div>
                <div><strong>PERICENTER:</strong><p>${payload.arg_of_pericenter == null ? 0 : payload.arg_of_pericenter}</P></div>
                <div><strong>MEAN ANOMALY:</strong><p>${payload.mean_anomaly == null ? 0 : payload.mean_anomaly}</P></div>
            </article>
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
        <article id="imhere">
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