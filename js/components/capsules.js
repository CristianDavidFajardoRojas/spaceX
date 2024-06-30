export const capsuleHTML = data => {
    console.log(data.docs[0]);
    let capsule = data.docs[0];

    let launches = "";
    (capsule.launches).forEach(launch => {
        launches += `<li>${launch}</li>`;
    })

    return /*html*/`
    <header>
        <h3>${capsule.serial}</h3>
    </header>
    <main>
        <section class="left_side" id="laterales_capsule">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Last Update:</strong>
                    <p>${capsule.last_update}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${capsule.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
    
                <img src="https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg">
            
                </div>
    
            <div class="text_images">
                <div class="caja_capsule">
                    <h3>INFORMATION CAPSULE</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>${capsule.type}</strong>
                        </article>
                        <article>
                            <p>Status</p>
                            <strong>${capsule.status}</strong>
                        </article>
                        <article>
                            <p>Reuse count</p>
                            <strong>${capsule.reuse_count}</strong>
                        </article>
                    </div>
                </div>
                <div class="div_images">
                </div>
                <div class="caja_capsule">
                    <h3>LANDING INFORMATION</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Land landings</p>
                            <strong>${capsule.land_landings}</strong>
                        </article>
                        <article>
                            <p>Water landings</p>
                            <strong>${capsule.water_landings}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side" id="laterales_capsule">
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
        <article id="imhere">
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