const next = '<div class="cursor"> <i class="material-icons md-36"> arrow_right </i> </div>';
const prev = '<div class="cursor"> <i class="material-icons md-36"> arrow_left </i> </div>';
const date = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function tampilTanggal() {
    date.setDate(1);
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDay = date.getDay();
    document.querySelector('.date h3').innerHTML = months[date.getMonth()] + " " + date.getFullYear();
    document.querySelector('.date p').innerHTML = new Date().toDateString();
    let hari = "";

    for (x = firstDay - 1; x >= 0; x--) {
        hari += '<div class="prev-date tanggal col-sm-1 ">' + (prevDate - x) + '</div>';
    }

    for (i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            hari += '<div class="col-sm-1 tanggal today">' + i + '</div>';
        } else {
            hari += '<div class="col-sm-1 tanggal">' + i + '</div>';
        }
        monthDays.innerHTML = hari;
    }
    nextDays = 42 - document.getElementsByClassName("tanggal").length;

    for (i = 1; i <= nextDays; i++) {
        hari += '<div class="next-date tanggal col-sm-1 ">' + i + '</div>';
        monthDays.innerHTML = hari;
    }
    document.getElementById("dropBulan").innerHTML = months[date.getMonth()];
}
$('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText: [
        prev,
        next
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})
var days = 0;
var month = 0;
var resizeTimer = false;
var tinggi;
function load() {
    var elem = $(".info");
    for (i = 0; i < elem.length; i++) {
        elem[i].style.width = "90%";
    }
    month = $('.month').width();
    if ($(window).width() < 576) {
        $('.month').css({ 'height': (month * 60 / 100) + 'px' });
    }
    else if ($(window).width() < 768) {
        $('.month').css({ 'height': (month * 50 / 100) + 'px' });
    }
    else if ($(window).width() < 992) {
        $('.month').css({ 'height': (month * 25 / 100) + 'px' });
    } else {
        $('.month').css({ 'height': (month * 20 / 100) + 'px' });
    }
    days = $('.days').width();
    $('.days').css({ 'height': (days * 65 / 100) + 'px' });
    tampilTanggal();
    tinggi = jQuery("div").find(".card").first().height();
	$(".owl-stage-outer").css({"height":(tinggi+(tinggi*15/100))+"px"});
}

function fokus(param) {
    var elem = $(".info")
    for (i = 0; i < elem.length; i++) {
        elem[i].style.opacity = 0.8;
        elem[i].style.width = "90%";
        elem[i].style.transition = "all 0.4s";
    }
    param.style.opacity = 1;
    param.style.width = "100%";
}
function unfokus(param) {
    var elem = $(".info")
    for (i = 0; i < elem.length; i++) {
        elem[i].style.opacity = 1;
        elem[i].style.width = "90%";
        elem[i].style.transition = "all 0.4s";
    }
}

$(window).resize(function () {
    month = $('.month').width();
    if ($(window).width() < 576) {
        $('.month').css({ 'height': (month * 60 / 100) + 'px' });
    }
    else if ($(window).width() < 768) {
        $('.month').css({ 'height': (month * 45 / 100) + 'px' });
    }
    else if ($(window).width() < 992) {
        $('.month').css({ 'height': (month * 25 / 100) + 'px' });
    } else {
        $('.month').css({ 'height': (month * 20 / 100) + 'px' });
    }
    days = $('.days').width();
    $('.days').css({ 'height': (days * 65 / 100) + 'px' });
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

        resizeTimer = false;
        $(window).trigger('resizeend');

    }, 250);
}).on('resizeend', function(){
    tinggi = jQuery("div").find(".card").first().height();
	$(".owl-stage-outer").css({"height":(tinggi+(tinggi*15/100))+"px"});
});

function pilihBulan(param) {
    date.setMonth(param);
    tampilTanggal();
}

function pilihTahun(param) {
    if (param == "") {
        param = new Date().getFullYear();
    }
    date.setFullYear(param);
    tampilTanggal();
}


// $(".owl-stage-outer").css({ "height": tinggi });