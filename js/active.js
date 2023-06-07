
//Active change view grid page-destinations

const gridView = document.getElementById("change-list");
const gridList = document.getElementById("list-destination");

gridView.addEventListener("click", () => {
    gridView.classList.toggle("grid");
    gridList.classList.toggle("grid");

});

//Active at 768px show select

const filterSeclect = document.getElementById("filter-select");

filterSeclect.addEventListener("click", () => {
    filterSeclect.classList.toggle("active");

});

//Pagination

$(document).ready(function () {
    $('.pagin-next').click(function () {
        $('.pagination').find('.page-number.active').next().addClass('active');
        $('.pagination').find('.page-number.active').prev().removeClass('active');
    })
    $('.pagin-prev').click(function () {
        $('.pagination').find('.page-number.active').prev().addClass('active');
        $('.pagination').find('.page-number.active').next().removeClass('active');
    })
})

const pageNumber = document.querySelectorAll.bind(document)('.page-number')

pageNumber.forEach((tab) => {
    tab.onclick = function () {
        document.querySelector.bind(document)('.page-number.active').classList.remove('active');

        this.classList.add('active');
    }
});
