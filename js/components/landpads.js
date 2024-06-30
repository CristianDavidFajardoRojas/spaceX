export const landpadHTML = data => {
    let landpad = data.docs[0];

    let launches = "";
    (landpad.launches).forEach(launch => {
        launches += `<li>${launch}</li>`;
    })

    return /*html*/`
    <header>
        <h3>${landpad.name}</h3>
    </header>
    <main>
        <section class="left_side" id="laterales_capsule">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Details:</strong>
                    <p>${landpad.details}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/pen-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Full name:</strong>
                    <p>${landpad.full_name}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${landpad.id}</p>
                </div>
            </article>
            <article class="article_info">
            <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
            <div class="info_div">
                <strong>Wikipedia:</strong>
                <a id="a_crew" href='${landpad.wikipedia}'>
                    <p>CLICK ME</p>
                </a>
            </div>
        </article>
        </section>
        <section class="mid">
                <div class="circles">
    
                <img src="${(landpad.images.large)[0]}" referrerpolicy="no-referrer">
            
                </div>
    
            <div class="text_images">
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>STATUS</strong>
                        <hr>
                        <p>${landpad.status}</p>
                    </article>
                    <article>
                        <strong>TYPE</strong>
                        <hr>
                        <p>${landpad.type}</p>
                    </article>
                    <article>
                        <strong>LANDING ATTEMPTS</strong>
                        <hr>
                        <p>${landpad.landing_attempts}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>REGION</strong>
                        <hr>
                        <p>${landpad.region}</p>
                    </article>
                    <article>
                        <strong>LOCALITY</strong>
                        <hr>
                        <p>${landpad.locality}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>LATITUDE</strong>
                        <hr>
                        <p>${landpad.latitude}</p>
                    </article>
                    <article>
                        <strong>longitude</strong>
                        <hr>
                        <p>${landpad.longitude}</p>
                    </article>
                    <article>
                        <strong>LANDING SUCCESSES</strong>
                        <hr>
                        <p>${landpad.landing_successes}</p>
                    </article>
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
        <article id="imhere">
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