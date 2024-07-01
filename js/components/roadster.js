export const roadsterHTML = data => {
    let roadster = data;
    
    let imgPlantilla = ``;
    (roadster.flickr_images).forEach(img=>{
        imgPlantilla += `<article><img src="${img}" referrerpolicy="no-referrer"></article>`
    })


    return /*html*/`
    <header>
        <h3>${roadster.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Details:</strong>
                    <p>${roadster.details}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Speed:</strong>
                    <p>Kph: ${roadster.speed_kph}, Mph: ${roadster.speed_mph}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Launch mass:</strong>
                    <p>Kg: ${roadster.launch_mass_kg}, lbs: ${roadster.launch_mass_lbs}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Longitude:</strong>
                    <p>${roadster.longitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Wikipedia:</strong>
                    <a id="a_crew" href='${roadster.wikipedia}'>
                        <p>CLICK ME</p>
                    </a>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/youtube-filled-svgrepo-com.svg">
                <div class="info_div">
                    <strong>YouTube:</strong>
                    <a id="a_crew" href='${roadster.video}'>
                        <p>CLICK ME</p>
                    </a>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles" id="superior_roadster">
                    
                <div id="core_articles">
                    <article>
                        <strong>LAUNCH DATE UTC</strong>
                        <hr>
                        <p>${roadster.launch_date_utc}</p>
                    </article>
                    <article>
                        <strong>LAUNCH DATE UNIX</strong>
                        <hr>
                        <p>${roadster.launch_date_unix}</p>
                    </article>
                    <article>
                        <strong>NORAD</strong>
                        <hr>
                        <p>${roadster.norad_id}</p>
                    </article>
                </div>
    
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Animation_of_SpaceX_Roadster_trajectory.gif">
            
                <div id="core_articles">
                    <article>
                        <strong>SEMI MAJOR AXIS</strong>
                        <hr>
                        <p>${roadster.semi_major_axis_au}</p>
                    </article>
                    <article>
                        <strong>EPOCH JD</strong>
                        <hr>
                        <p>${roadster.epoch_jd}</p>
                    </article>
                    <article>
                        <strong>ORBIT TYPE</strong>
                        <hr>
                        <p>${roadster.orbit_type}</p>
                    </article>
                </div>

            </div>
    
            <div class="text_images" id="inferior_roadster">
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>APOAPSIS AU</strong>
                        <hr>
                        <p>${roadster.apoapsis_au}</p>
                    </article>
                    <article>
                        <strong>PERIAPSIS AU</strong>
                        <hr>
                        <p>${roadster.periapsis_au}</p>
                    </article>
                </div>
                <div class="div_images">
                    ${imgPlantilla}
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>INCLINATION</strong>
                        <hr>
                        <p>${roadster.inclination}</p>
                    </article>
                    <article>
                        <strong>ECCENTRICITY</strong>
                        <hr>
                        <p>${roadster.eccentricity}</p>
                    </article>
                </div>
            </div>
        </section>
        <section class="right_side" id="right_side_dragons">
            <article id="dragon_thrusters_article">
                <div><strong>PERIAPSIS ARG:</strong><p>${roadster.periapsis_arg}</P></div>
                <div><strong>PERIOD DAYS:</strong><p>${roadster.period_days}</P></div>
                <div><strong>EARTH DISTANCE KM:</strong><p>${roadster.earth_distance_km}</P></div>
                <div><strong>EARTH DISTANCE MI:</strong><p>${roadster.earth_distance_mi}</P></div>
                <div><strong>MARS DISTANCE KM:</strong><p>${roadster.mars_distance_km}</P></div>
                <div><strong>MARS DISTANCE MI:</strong><p>${roadster.mars_distance_mi}</P></div>
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
        <article>
            <img src="storage/img/orbit-satellite-svgrepo-com.svg">
            <p>Payloads</p>
            <div></div>
        </article>
        <article id="imhere">
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