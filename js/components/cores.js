export const coreHTML = data => {
    let core = data.docs[0];

    let launches = "";
    (core.launches).forEach(launch => {
        launches += `<li>${launch}</li>`;
    })

    return /*html*/`
    <header>
        <h3>${core.serial}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Last Update:</strong>
                    <p>${core.last_update}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cpu-svgrepo-com.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${core.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="core_articles">
                        <article>
                            <strong>RTLS attempts</strong>
                            <hr>
                            <p>${core.rtls_attempts}</p>
                        </article>
                        <article>
                            <strong>RTLS landings</strong>
                            <hr>
                            <p>${core.rtls_landings}</p>
                        </article>
                    </div>
                    <img src="storage/img/rocket.gif">
                    <div id="core_articles">
                        <article>
                                <strong>ASDS attempts</strong>
                                <hr>
                                <p>${core.asds_attempts}</p>
                            </article>
                            <article>
                                <strong>ASDS landings</strong>
                                <hr>
                                <p>${core.asds_landings}</p>
                            </article>
                    </div>
                </div>
    
            <div class="text_images" id="section_inferior_core">
                <div class="caja_core">
                    <h3>INFORMATION CORE</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Status</p>
                            <strong>${core.status}</strong>
                        </article>
                        <article>
                            <p>Reuse count</p>
                            <strong>${core.reuse_count}</strong>
                        </article>
                        <article>
                            <p>Block</p>
                            <strong>${core.block == null ? "no block" : core.block}</strong>
                        </article>
                    </div>
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
        <article id="imhere">
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
    </footer>`;
}