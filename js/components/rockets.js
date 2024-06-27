export const rocketHTML = data => {
    let rocket = data.docs[0];
    console.log(rocket)
    
    return /*html*/`
    <header>
        <h3>${rocket.name}</h3>
    </header>
    <main>
        <section class="left_side">
            <article class="article_info">
                <img src="storage/img/document-ui-description-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Description:</strong>
                    <p>${rocket.description}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/country-flag-flags-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket Country:</strong>
                    <p>USA</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/cost-round-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Cost per launch:</strong>
                    <p>the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Date of the first flight:</strong>
                    <p>the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket Height:</strong>
                    <p>the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/scales-scale-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket mass:</strong>
                    <p>the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Rocket diameter:</strong>
                    <p>the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.</p>
                </div>
            </article>
        </section>
        <section class="mid">
            <div class="circles">
                <div class="progress-bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) 23.60%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Atmospheric acceleration</strong>
                        <p>23.60 % </p>
                        <p>420 kN</p>
                        <p>94.000 Lbf</p>
                    </div>
                </div>
                <img src="storage/img/rocket.gif">
                <div class="progress-bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) 24%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Atmospheric acceleration</strong>
                        <p>23.60 % </p>
                        <p>420 kN</p>
                        <p>94.000 Lbf</p>
                    </div>
                </div>
            </div>
            <div class="text_images">
                <div id = "caja_content">
                    <h3>Info Rocket</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                    </div>
                </div>
                <div class="div_images">
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                    <article>
                        <img src="">
                    </article>
                </div>
                <div id = "caja_content">
                    <h3>Info Rocket</h3>
                    <hr>
                    <div>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                        <article>
                            <p>Type</p>
                            <strong>rocket</strong>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <section class="right_side">
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="420" max="1780"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <strong>Rocket weight</strong>
                    <progress value="50" max="100"></progress>
                </div>
                <div>
                    <div>
                        <p>1.420.788 kg</p>
                        <p>3.125.735 lb</p>
                    </div>
                </div>
            </article>

        </section>
    </main>
    <footer class="footer">
        <section>
        <article id="imhere">
            <img src="storage/img/cute-rocket-launching-svgrepo-com.svg">
            <p>Rockets</p>
            <div></div>
        </article>
        <article>
            <img src="storage/img/capsule-space-capsule-svgrepo-com.svg">
            <p>Capsules </p>
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
    </footer>
    `;
}