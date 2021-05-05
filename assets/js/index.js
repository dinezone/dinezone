const modalstate = false; //!!!!!!!!!!!!!!!!!!!!!!!!

if (!modalstate) {
    $(".modal-wrapper").hide();
}

$(".hamburger").on("click", () => {
    $(".hamburger").toggleClass("active");
    $("header").toggleClass("active", 500, "swing");
});

$(document).on("click", "li", () => {
    if ($(".hamburger").hasClass("active")) {
        $(".hamburger").toggleClass("active");
        $("header").toggleClass("active", 500, "swing");
    }
});

let modalclosed = false;

$(".modal-close").on("click", () => {
    modalclosed = true;
    $(".modal-wrapper").fadeOut(500);
});

$(window).on("load", () => {
    $(".preloader").delay(1000).fadeOut(1000);
    $("body").css("overflow-y", "auto");

    let countDownDate = new Date("Jan 5, 2021 20:00:00").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#counter").text(
            `${days > 9 ? "" : "0"}${days} nap ${hours > 9 ? "" : "0"}${hours} óra ${minutes > 9 ? "" : "0"}${minutes} perc ${
                seconds > 9 ? "" : "0"
            }${seconds} mp`
        );

        if (distance < 0) {
            clearInterval(x);
            $("#counter").text(`LEJART`);
        }
    }, 1000);

    setTimeout(() => {
        if (modalclosed) return;
        else $(".modal-wrapper").fadeOut(500);
    }, 12 * 1000);
});

$("body").on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $("header").addClass("darken");
    } else {
        $("header").removeClass("darken");
    }
});

$(document).on("click", "#copyaddr", () => {
    let button = $("#copyaddr");
    console.log(button.text());

    let temp = $("<input>");
    $("body").append(temp);
    temp.val(button.text());
    temp.select();
    document.execCommand("copy");
    temp.remove();

    button.text("IP CIM MASOLVA");

    setTimeout(() => {
        button.text("play.woodcraft.hu");
    }, 1000);
});


const url = 'https://37.221.210.137:2053/api/onlineplayers';
$(document).ready(() => {
  $.get(url, (data, status) => {
	$('.playerCount').html(data.online + '/' + data.maxPlayers);
	//round(($status->players->online / $status->players->max) * 100
	$('.percent').html((data.online == 0 ? 0 : Math.round((data.online / data.maxPlayers) * 100)) + '%');
	$('.percent').css({
		"width": (data.online == 0 ? 0 : Math.round((data.online / data.maxPlayers) * 100)) + '%'
	});
	console.log(data)
  })
  var today = new Date();
  var yyyy = today.getFullYear();
  $(".copyRight").html("Copyright @ " + yyyy + " - " + (yyyy + 1) + " - www.woodcraft.hu | Minden jog fenntartva!")
})
