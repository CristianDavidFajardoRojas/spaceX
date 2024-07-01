import { getAllRocketsData, getRocketData } from "./modules/rocketsData.js";
import { rocketHTML } from "./components/rockets.js";

import { getAllCapsulesData, getCapsuleData  } from "./modules/capsulesData.js";
import { capsuleHTML } from "./components/capsules.js";

import { getAllCoresData, getCoreData } from "./modules/coresData.js";
import { coreHTML } from "./components/cores.js";

import { getAllCompanyData, getCompanyData } from "./modules/company.js";
import { companyHTML } from "./components/company.js";

import { getAllCrewsData, getCrewData } from "./modules/crewsData.js";
import { crewHTML } from "./components/crews.js";

import { getAllDragonsData, getDragonData } from "./modules/dragonsData.js";
import { dragonHTML } from "./components/dragons.js";

import { getAllHistoryData, getHistoryData } from "./modules/historyData.js";
import { historyHTML } from "./components/history.js";

import { getAllLandpadsData, getLandpadData } from "./modules/landpadsData.js";
import { landpadHTML } from "./components/landpads.js";

import { getAllLaunchesData, getLaunchData } from "./modules/launchesData.js";
import { launchHTML } from "./components/launches.js";

import { getAlllaunchpadsData, getLaunchpadData } from "./modules/launchpadsData.js";
import { launchdpadHTML } from "./components/launchpads.js";




const allPaginacion = async(funcionAllData, primerDato, dictAMostrar, plantilla) => {
let allData = funcionAllData;

////Muestra el primer dict.
let body = document.querySelector(".body")
body.innerHTML = primerDato;

//Paginacion.
let currentPage = 0;
let itemsPerPage = 4;

const changePage = page => {
    currentPage = page;
    initPagination();
}

const initPagination = async() => {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = Math.min(start + itemsPerPage, allData.length);

    for (let i = start; i < end; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i + 1;
        pageButton.onclick = async() => {body.innerHTML = plantilla(await dictAMostrar(i + 1));
        initPagination();
        footer();};
        pagination.appendChild(pageButton);
    }

    const totalPages = Math.ceil(allData.length / itemsPerPage);

    if (currentPage > 0) {
        const prevButton = document.createElement('button');
        prevButton.innerText = '<<';
        prevButton.onclick = () => changePage(currentPage - 1);
        pagination.insertBefore(prevButton, pagination.firstChild);
    } else if (currentPage == 0 && allData.length > itemsPerPage){
        const prevButton = document.createElement('button');
        prevButton.innerText = '<<';
        prevButton.onclick = () => changePage(currentPage = totalPages - 1);
        pagination.insertBefore(prevButton, pagination.firstChild);
    }

    if (currentPage < totalPages - 1) {
        const nextButton = document.createElement('button');
        nextButton.innerText = '>>';
        nextButton.onclick = () => changePage(currentPage + 1);
        pagination.appendChild(nextButton);
    } else if(currentPage = totalPages - 1) {
        const nextButton = document.createElement('button');
        nextButton.innerText = '>>';
        nextButton.onclick = () => changePage(0);
        pagination.appendChild(nextButton);
    }
}
//Inicia la paginaciòn.
initPagination();
}




// Principio de la pagina, recien entra.
allPaginacion(await getAllRocketsData(), rocketHTML(await getRocketData(1)), getRocketData, rocketHTML);


// Footer.
const footer = async() => {
    let articlesFooter = document.querySelectorAll(".footer > section > article");

    articlesFooter.forEach(article => {
        article.addEventListener('click', async e => {
            let name = article.querySelector("p");
            console.log(name.textContent);

            if(name.textContent == "Rockets"){
                allPaginacion(await getAllRocketsData(), rocketHTML(await getRocketData(1)), getRocketData, rocketHTML);
                footer();
            } 
            
            if(name.textContent == "Capsules"){
                allPaginacion(await getAllCapsulesData(), capsuleHTML(await getCapsuleData(1)), getCapsuleData, capsuleHTML);
                footer();
            }

            if(name.textContent == "Cores"){
                allPaginacion(await getAllCoresData(), coreHTML(await getCoreData(1)), getCoreData, coreHTML);
                footer();
            }

            if(name.textContent == "Company"){
                allPaginacion(await getAllCompanyData(), companyHTML(await getAllCompanyData()), getAllCompanyData, companyHTML);
                footer();
            }

            if(name.textContent == "Crew"){
                allPaginacion(await getAllCrewsData(), crewHTML(await getCrewData(1)), getCrewData, crewHTML);
                footer();
            }

            if(name.textContent == "Dragons"){
                allPaginacion(await getAllDragonsData(), dragonHTML(await getDragonData(1)), getDragonData, dragonHTML);
                footer();
            }

            if(name.textContent == "History"){
                allPaginacion(await getAllHistoryData(), historyHTML(await getHistoryData(1)), getHistoryData, historyHTML);
                footer();
            }

            if(name.textContent == "Landpads"){
                allPaginacion(await getAllLandpadsData(), landpadHTML(await getLandpadData(1)), getLandpadData, landpadHTML);
                footer();
            }

            if(name.textContent == "Launches"){
                allPaginacion(await getAllLaunchesData(), launchHTML(await getLaunchData(1)), getLaunchData, launchHTML);
                footer();
            }

            if(name.textContent == "Launchpads"){
                allPaginacion(await getAlllaunchpadsData(), launchdpadHTML(await getLaunchpadData(1)), getLaunchpadData, launchdpadHTML);
                footer();
            }






        })
    })
}

footer();

