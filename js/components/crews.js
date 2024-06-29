export const crewHTML = data => {
    let crew = data.docs[0];

    let launches = "";
    (crew.launches).forEach(launch => {
        launches += `<li>${launch}</li>`;
    })

    return /*html*/`
    <header>
        <h3>${crew.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/cpu-svgrepo-com.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${crew.id}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Wikipedia:</strong>
                    <a href='${crew.wikipedia}'>
                        <p>WIKIPEDIA</p>
                    </a>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="core_articles">
                        <article>
                            <strong>RTLS attempts</strong>
                            <hr>
                            <p>${crew.agency}</p>
                        </article>
                    </div>
                    <img src="storage/img/800_600.gif">
                    <div id="core_articles">
                        <article>
                                <strong>ASDS attempts</strong>
                                <hr>
                                <p>${crew.status}</p>
                            </article>
                    </div>
                </div>
    
            <div class="text_images" id="section_inferior_core">
                <div class="caja_core">
                    <img src="${crew.image}" referrerpolicy="no-referrer">
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
        <article id="imhere">
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