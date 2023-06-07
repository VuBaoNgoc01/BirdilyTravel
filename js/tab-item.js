///Active Tab////

const btnTab = document.querySelectorAll.bind(document)('.tab-item')
const itemTab = document.querySelectorAll.bind(document)('.content-item')

btnTab.forEach((tab, index) => {
    const item = itemTab[index]
    tab.onclick = function () {
        document.querySelector.bind(document)('.tab-item.active').classList.remove('active');
        document.querySelector.bind(document)('.content-item.active').classList.remove('active')

        this.classList.add('active');
        item.classList.add('active');
    }
});

//Fancybox

$('[data-fancybox]').fancybox({
    // Options will go here
    buttons: [
        'close'
    ],
    wheel: false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop: true,
    // keyboard        : true,
    toolbar: false,
    // animationEffect : false,
    // arrows          : true,
    clickContent: false
});