export const starlinkHTML = data => {
    let starlink = data.docs[0];
    let spaceTrack = starlink.spaceTrack

    return /*html*/`
    <header>
        <h3>${spaceTrack.OBJECT_NAME}</h3>
    </header>
    <main>
        <section class="left_side" id="">
            <article class="article_info">
                <img src="storage/img/terminal-emulator-nethunter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Version:</strong>
                    <p>${starlink.version == null ? "No version" : starlink.version}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/height-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Height KM:</strong>
                    <p>${starlink.height_km == null ? 0 : starlink.height_km}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/coordinates-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Latitude:</strong>
                    <p>${starlink.latitude == null ? 0 : starlink.latitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/graphic-design-diameter-svgrepo-com.svg">
                <div class="info_div">
                    <strong>longitude:</strong>
                    <p>${starlink.longitude == null ? 0 : starlink.longitude}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/et-legacy-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Velocity KMS:</strong>
                    <p>${starlink.velocity_kms == null ? 0 : starlink.velocity_kms}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/rocket-launch-svgrepo-com.svg">
                <div class="info_div">
                    <strong>Launch:</strong>
                    <p>${starlink.id}</p>
                </div>
            </article>
            <article class="article_info">
                <img src="storage/img/id.svg">
                <div class="info_div">
                    <strong>ID:</strong>
                    <p>${starlink.id}</p>
                </div>
            </article>
        </section>
        <section class="mid">
                <div class="circles">
                    <div id="starlink_articles">
                        <article>
                            <strong>CCSDS OMM VERS</strong>
                            <hr>
                            <p>${spaceTrack.CCSDS_OMM_VERS}</p>
                        </article>
                        <article>
                            <strong>COMMENT</strong>
                            <hr>
                            <p>${spaceTrack.COMMENT}</p>
                        </article>
                        <article>
                            <strong>CREATION DATE</strong>
                            <hr>
                            <p>${spaceTrack.CREATION_DATE}</p>
                        </article>
                    </div>

                    <img id="starlink_img" src="https://www.blendswap.com/static/blendImages/2020/6/2/Blend/25280/earth_starlink.gif" referrerpolicy="no-referrer">

                    <div id="starlink_articles">
                        <article>
                            <strong>ORIGINATOR</strong>
                            <hr>
                            <p>${spaceTrack.ORIGINATOR}</p>
                        </article>
                        <article>
                            <strong>OBJECT ID</strong>
                            <hr>
                            <p>${spaceTrack.OBJECT_ID}</p>
                        </article>
                        <article>
                            <strong>MEAN ELEMENT THEORY</strong>
                            <hr>
                            <p>${spaceTrack.MEAN_ELEMENT_THEORY}</p>
                        </article>
                    </div>

                </div>
    
            <div class="text_images">
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>CENTER NAME</strong>
                        <hr>
                        <p>${spaceTrack.CENTER_NAME}</p>
                    </article>
                    <article>
                        <strong>REF FRAME</strong>
                        <hr>
                        <p>${spaceTrack.REF_FRAME}</p>
                    </article>
                    <article>
                        <strong>TIME SYSTEM</strong>
                        <hr>
                        <p>${spaceTrack.TIME_SYSTEM}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>EPOCH</strong>
                        <hr>
                        <p>${spaceTrack.EPOCH}</p>
                    </article>
                    <article>
                        <strong>MEAN MOTION</strong>
                        <hr>
                        <p>${spaceTrack.MEAN_MOTION}</p>
                    </article>
                    <article>
                        <strong>ECCENTRICITY</strong>
                        <hr>
                        <p>${spaceTrack.ECCENTRICITY}</p>
                    </article>
                </div>
                <div class="caja_capsule" id="caja_landpad">
                    <article>
                        <strong>INCLINATION</strong>
                        <hr>
                        <p>${spaceTrack.INCLINATION}</p>
                    </article>
                    <article>
                        <strong>RA OF ASC NODE</strong>
                        <hr>
                        <p>${spaceTrack.RA_OF_ASC_NODE}</p>
                    </article>
                    <article>
                        <strong>ARG OF PERICENTER</strong>
                        <hr>
                        <p>${spaceTrack.ARG_OF_PERICENTER}</p>
                    </article>
                </div>
            </div>
        </section>
        <section class="right_side" id="rightside_starlink">
            <strong>MORE INFORMATION:</strong>
                <div class="caja_capsule" id="caja_starlink">
                    <article>
                        <strong>MEAN ANOMALY</strong>
                        <hr>
                        <p>${spaceTrack.MEAN_ANOMALY}</p>
                    </article>
                    <article>
                        <strong>EPHEMERIS TYPE</strong>
                        <hr>
                        <p>${spaceTrack.EPHEMERIS_TYPE}</p>
                    </article>
                    <article>
                        <strong>CLASSIFICATION TYPE</strong>
                        <hr>
                        <p>${spaceTrack.CLASSIFICATION_TYPE}</p>
                    </article>
                    <article>
                        <strong>NORAD CAT ID</strong>
                        <hr>
                        <p>${spaceTrack.NORAD_CAT_ID}</p>
                    </article>
                    <article>
                        <strong>ELEMENT SET NO</strong>
                        <hr>
                        <p>${spaceTrack.ELEMENT_SET_NO}</p>
                    </article>
                    <article>
                        <strong>REV AT EPOCH</strong>
                        <hr>
                        <p>${spaceTrack.REV_AT_EPOCH}</p>
                    </article>
                    <article>
                        <strong>BSTAR</strong>
                        <hr>
                        <p>${spaceTrack.BSTAR}</p>
                    </article>
                    <article>
                        <strong>MEAN MOTION DOT</strong>
                        <hr>
                        <p>${spaceTrack.MEAN_MOTION_DOT}</p>
                    </article> 
                    <article>
                        <strong>MOTION DDOT</strong>
                        <hr>
                        <p>${spaceTrack.MEAN_MOTION_DDOT}</p>
                    </article> 
                    <article>
                        <strong>SEMIMAJOR AXIS</strong>
                        <hr>
                        <p>${spaceTrack.SEMIMAJOR_AXIS}</p>
                    </article> 
                    <article>
                        <strong>PERIOD</strong>
                        <hr>
                        <p>${spaceTrack.PERIOD}</p>
                    </article> 
                    <article>
                        <strong>APOAPSIS</strong>
                        <hr>
                        <p>${spaceTrack.APOAPSIS}</p>
                    </article> 
                    <article>
                        <strong>PERIAPSIS</strong>
                        <hr>
                        <p>${spaceTrack.PERIAPSIS}</p>
                    </article> 
                    <article>
                        <strong>OBJECT TYPE</strong>
                        <hr>
                        <p>${spaceTrack.OBJECT_TYPE}</p>
                    </article> 
                    <article>
                        <strong>RCS SIZE</strong>
                        <hr>
                        <p>${spaceTrack.RCS_SIZE}</p>
                    </article> 
                    <article>
                        <strong>COUNTRY CODE</strong>
                        <hr>
                        <p>${spaceTrack.COUNTRY_CODE}</p>
                    </article> 
                    <article>
                        <strong>LAUNCH DATE</strong>
                        <hr>
                        <p>${spaceTrack.LAUNCH_DATE}</p>
                    </article> 
                    <article>
                        <strong>SITE</strong>
                        <hr>
                        <p>${spaceTrack.SITE}</p>
                    </article> 
                    <article>
                        <strong>DECAY DATE</strong>
                        <hr>
                        <p>${spaceTrack.DECAY_DATE}</p>
                    </article> 
                    <article>
                        <strong>DECAYED</strong>
                        <hr>
                        <p>${spaceTrack.DECAYED}</p>
                    </article> 
                    <article>
                        <strong>FILE</strong>
                        <hr>
                        <p>${spaceTrack.FILE}</p>
                    </article> 
                    <article>
                        <strong>GP ID</strong>
                        <hr>
                        <p>${spaceTrack.GP_ID}</p>
                    </article> 
                    <article>
                        <strong>TLE LINE0</strong>
                        <hr>
                        <p>${spaceTrack.TLE_LINE0}</p>
                    </article> 
                    <article>
                        <strong>TLE LINE1</strong>
                        <hr>
                        <p>${spaceTrack.TLE_LINE1}</p>
                    </article> 
                    <article>
                        <strong>TLE LINE2</strong>
                        <hr>
                        <p>${spaceTrack.TLE_LINE2}</p>
                    </article>      
                </div>
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
        <article>
            <img src="storage/img/viking-ship-vessel-svgrepo-com.svg">
            <p>Ships</p>
            <div></div>
        </article>
        <article id="imhere">
            <img src="storage/img/star-sharp-svgrepo-com.svg">
            <p>Starlink</p>
            <div></div>
        </article>
    </section>
    <div id="pagination">
    </div>
    </footer>`;
}