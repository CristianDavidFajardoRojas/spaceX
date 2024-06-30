export const companyHTML = data => {
    let company = data;
    
    return /*html*/`
    <header>
        <h3>${company.name}</h3>
    </header>
    <main>
        <section class="left_side" id="laterales_company">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Description:</strong>
                    <p>${company.summary}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/boss-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Founder:</strong>
                    <p>${company.founder}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cost-round-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Valuation:</strong>
                    <p>${company.valuation}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Founded:</strong>
                    <p>${company.founded}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/company-folder-svgrepo-com.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${company.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="core_articles">
                        <article>
                                <strong>EMPLOYEES</strong>
                                <hr>
                                <p>${company.employees}</p>
                            </article>
                            <article>
                                <strong>VEHICLES</strong>
                                <hr>
                                <p>${company.vehicles}</p>
                            </article>
                    </div>
    
                    <img src="https://dplnews.com/wp-content/uploads/2020/10/dplnews_SpaceX_mc261020.jpg">

                    <div id="core_articles">
                        <article>
                                <strong>LAUNCH SITES</strong>
                                <hr>
                                <p>${company.launch_sites}</p>
                            </article>
                            <article>
                                <strong>TEST SITES</strong>
                                <hr>
                                <p>${company.test_sites}</p>
                            </article>
                    </div>
                </div>
    
            <div class="text_images" id = "container_cajas_inferiores_company">
                <div id = "caja_content">
                    <h3>HEADQUARTERS</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Address</p>
                            <strong>${company.headquarters.address}</strong>
                        </article>
                        <article>
                            <p>city</p>
                            <strong>${company.headquarters.city}</strong>
                        </article>
                        <article>
                            <p>State</p>
                            <strong>${company.headquarters.state}</strong>
                        </article>
                    </div>
                </div>
                <div id = "caja_content">
                    <h3>PARTICIPANTS</h3>
                    <hr>
                    <div>
                        <article>
                            <p>CEO</p>
                            <strong>${company.ceo}</strong>
                        </article>
                        <article>
                            <p>CTO</p>
                            <strong>${company.cto}</strong>
                        </article>
                        <article>
                            <p>COO</p>
                            <strong>${company.coo}</strong>
                        </article>
                        <article>
                            <p>CTO PROPULSION</p>
                            <strong>${company.cto_propulsion}</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side" id="laterales_company">
            <article id = "links_company">
                <strong>LINKS:</strong>
                <div>
                    <a href='${company.links.website}'>
                        <img src="https://play-lh.googleusercontent.com/GHgRpnJ0OcX7kxVw1zu2WYJ0jw6eMBw3jdnZA1xFhNagXBlYCK7_NAOYPcgp6qYrlgM=s94-rw">
                        <p>Space X</p>
                    </a>
                    <a href='${company.links.flickr}'>
                        <img src="https://www.flickrhelp.com/hc/article_attachments/4419907666708/unnamed.png">
                        <p>Flickr</p>
                    </a>
                    <a href='${company.links.twitter}'>
                        <img src="storage/img/twitter.svg">
                        <p>Twitter</p>
                    </a>
                    <a href='${company.links.elon_twitter}'>
                        <img src="https://www.svgrepo.com/show/492802/smartphone-business-person.svg">
                        <p>Elon Musk</p>
                    </a>
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