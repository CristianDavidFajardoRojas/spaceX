export const historyHTML = data => {
    let history = data.docs[0];

    return /*html*/`
    <header>
        <h3>${history.title}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Description:</strong>
                    <p>${history.details}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cpu-svgrepo-com.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${history.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/868485179515737818/D61FB839FC3F44E083811C404E98218B1D63A2BC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" referrerpolicy="no-referrer">
                </div>
    
            <div class="text_images" id="section_inferior_core">
                <div class="caja_core" id="caja_core_history">
                    <h4>LINK:</h4>
                    <a href="${history.links.article}">
                    <img src="storage/img/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg" id="wikipedia_logo_history">
                    </a>
                </div>
            </div>
        </section>
        <section class="right_side">
        <article id="capsule_launches">
            <div>
                <strong>Dates:</strong>
                <ul>
                    <li><strong>Event UTC:</strong> ${history.event_date_utc}</li>
                    <li><strong>Event unix:</strong> ${history.event_date_unix}</li>
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
        <article id="imhere">
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