export const shipHTML = data => {
    let ship = data.docs[0];

    let launches = "";
    (ship.launches).forEach(launch => {
        launches += `<li>${launch}</li>`;
    })

    return /*html*/`
    <header>
        <h3>${ship.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Type:</strong>
                    <p>${ship.type}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Legacy ID::</strong>
                    <p>${ship.legacy_id}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Roles:</strong>
                    <p>${ship.roles[0] ? ship.roles.join(", ") : "No roles"}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Mass:</strong>
                    <p>Kg: ${ship.mass_kg == null ? 0 : ship.mass_kg}, lbs: ${ship.mass_lbs == null ? 0 : ship.mass_lbs}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Latitude:</strong>
                    <p>${ship.latitude == null ? 0 : ship.latitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>longitude:</strong>
                    <p>${ship.longitude == null ? 0 : ship.longitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${ship.id}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Link:</strong>
                    <a id="a_crew" href='${ship.link == null ? "#" : ship.link}'>
                        <p>CLICK ME</p>
                    </a>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="core_articles">
                        <article>
                            <strong>IMO</strong>
                            <hr>
                            <p>${ship.imo == null ? 0 : ship.imo}</p>
                        </article>
                        <article>
                            <strong>MMSI</strong>
                            <hr>
                            <p>${ship.mmsi == null ? 0 : ship.mmsi}</p>
                        </article>
                        
                    </div>
                    <img src="${ship.image ? ship.image : "https://previews.123rf.com/images/yoginta/yoginta2301/yoginta230100567/196853824-imagen-no-encontrada-ilustraci%C3%B3n-vectorial.jpg"}" referrerpolicy="no-referrer">
                    <div id="core_articles">
                        <article>
                            <strong>SPEED KN</strong>
                            <hr>
                            <p>${ship.speed_kn == null ? 0 : ship.speed_kn}</p>
                        </article>
                        <article>
                            <strong>COURSE DEG</strong>
                            <hr>
                            <p>${ship.course_deg == null ? 0 : ship.course_deg}</p>
                        </article>    
                    </div>
                </div>
    
            <div class="text_images" id="section_inferior_core">
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>HOME PORT</strong>
                        <hr>
                        <p>${ship.home_port}</p>
                    </article>
                    <article>
                        <strong>ABS</strong>
                        <hr>
                        <p>${ship.abs == null ? 0 : ship.abs}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>MODEL</strong>
                        <hr>
                        <p>${ship.model == null ? "No model" : ship.model}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>YEAR BUILT</strong>
                        <hr>
                        <p>${ship.year_built == null ? "No year" : ship.year_built}</p>
                    </article>
                    <article>
                        <strong>STATUS</strong>
                        <hr>
                        <p>${ship.status == "" ? "No status" : ship.status}</p>
                    </article>
                </div>
            </div>
        </section>
        <section class="right_side">
        <article id="capsule_launches">
            <div>
                <strong>Launches:</strong>
                <ul>
                    ${launches}
                </ul>
            </div>
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
        <article>
            <img src="storage/img/road-mini-603-svgrepo-com.svg">
            <p>Roadster</p>
            <div></div>
        </article>
        <article id="imhere">
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
    </footer>`;
}