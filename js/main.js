import { getAllRocketsData, getRocketData } from "./modules/rocketsData.js";
import { rocketHTML } from "./components/rockets.js";



let rockets = (await getAllRocketsData());

////////

let currentPage = 0;
let itemsPerPage = 4

let body = document.querySelector(".body")
body.innerHTML = rocketHTML(await getRocketData(1));


function changePage(page) {
    currentPage = page;
    initPagination();
}

const initPagination = () => {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = Math.min(start + itemsPerPage, rockets.length);

    console.log(start)
    console.log(end)

    for (let i = start; i < end; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i + 1;
        pageButton.onclick = async() => {body.innerHTML = rocketHTML(await getRocketData(i + 1))
        initPagination()};
        pagination.appendChild(pageButton);
    }

    const totalPages = Math.ceil(rockets.length / itemsPerPage);

    if (currentPage > 0) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Prev';
        prevButton.onclick = () => changePage(currentPage - 1);
        pagination.appendChild(prevButton);
    }

    if (currentPage < totalPages - 1) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.onclick = () => changePage(currentPage + 1);
        pagination.appendChild(nextButton);
    }
}

initPagination();


