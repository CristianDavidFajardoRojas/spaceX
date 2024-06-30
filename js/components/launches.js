export const launchHTML = data => {
    let launch = data.docs[0];
    
    console.log(launch.name)
    console.log(launch.cores)

    return /*html*/`
    <header>
        <h3>${launch.name}</h3>
    </header>
    <main>
        <section class="left_side" id="laterales_company">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Details:</strong>
                    <p>${launch.details}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/boss-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket:</strong>
                    <p>${launch.rocket}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cost-round-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Net:</strong>
                    <p>${launch.net}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/ok-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Succes:</strong>
                    <p>${launch.succes == null ? false : launch.succes}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>Payload ID:</strong>
                    <p>${(launch.payloads)[0]}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${launch.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="core_articles">
                    </div>
    
                    <img src="${launch.links.patch.large}" referrerpolicy="no-referrer">

                    <div id="core_articles">
                    </div>
                </div>
    
            <div class="text_images" id = "container_cajas_inferiores_company">
                <div id = "caja_content">
                    <h3>LAUNCH INFORMATION</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Flight number</p>
                            <strong>${launch.flight_number}</strong>
                        </article>
                        <article>
                            <p>window</p>
                            <strong>${launch.window}</strong>
                        </article>
                        <article>
                            <p>Upcoming</p>
                            <strong>${launch.upcoming}</strong>
                        </article>
                        <article>
                            <p>Auto update</p>
                            <strong>${launch.auto_update}</strong>
                        </article>
                        <article>
                            <p>TBD</p>
                            <strong>${launch.tbd}</strong>
                        </article>
                    </div>
                </div>
                <div id = "caja_content">
                    <h3>CORE</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Flight</p>
                            <strong>${((launch.cores)[0]).flight == null ? false : ((launch.cores)[0]).flight}</strong>
                        </article>
                        <article>
                            <p>Gridfins</p>
                            <strong>${((launch.cores)[0]).gridfins == null ? false : ((launch.cores)[0]).gridfins}</strong>
                        </article>
                        <article>
                            <p>Legs</p>
                            <strong>${((launch.cores)[0]).legs == null ? false : ((launch.cores)[0]).legs}</strong>
                        </article>
                        <article>
                            <p>Reused</p>
                            <strong>${((launch.cores)[0]).reused == null ? false : ((launch.cores)[0]).reused}</strong>
                        </article>
                        <article>
                            <p>Landing attempt</p>
                            <strong>${((launch.cores)[0]).landing_attempt == null ? false : ((launch.cores)[0]).landing_attempt}</strong>
                        </article>
                        <article>
                            <p>Landing Succes</p>
                            <strong>${((launch.cores)[0]).landing_success == null ? false : ((launch.cores)[0]).landing_success}</strong>
                        </article>
                        <article>
                            <p>CTO PROPULSION</p>
                            <strong>${((launch.cores)[0]).landing_type == null ? false : ((launch.cores)[0]).landing_type}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side" id="laterales_company">
            <article id = "links_company">
                <strong>LINKS:</strong>
                <div>
                    <a href='${launch.links.webcast == null ? "#" : launch.links.webcast}'>
                        <img src="https://www.svgrepo.com/show/475700/youtube-color.svg">
                        <p>YouTube</p>
                    </a>
                    <a href='${launch.links.article == null ? "#" : launch.links.article}'>
                        <img src="https://www.svgrepo.com/show/444877/article.svg">
                        <p>Article</p>
                    </a>
                    <a href='${launch.links.wikipedia == null ? "#" : launch.links.wikipedia}'>
                        <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
                        <p>Wikipedia</p>
                    </a>
                    <a href='${launch.links.presskit == null ? "#" : launch.links.presskit}'>
                        <img src="https://www.svgrepo.com/show/366085/directory-downloads.svg">
                        <p>PressKit</p>
                    </a>
                </div>
            </article>
            <article>
                <strong>Dates:</strong>
                <ul>
                    <li><strong>Static fire UTC:</strong> ${launch.static_fire_date_utc}</li>
                    <li><strong>Static fire unix:</strong> ${launch.static_fire_date_unix}</li>
                    <li><strong>UTC:</strong> ${launch.date_utc}</li>
                    <li><strong>Unix:</strong> ${launch.date_unix}</li>
                    <li><strong>Local:</strong> ${launch.date_local}</li>
                    <li><strong>Date Precision:</strong> ${launch.date_precision}</li>
                </ul>
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
        <article id="imhere">
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