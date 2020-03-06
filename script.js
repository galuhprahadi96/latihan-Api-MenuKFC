//menampilkan data json
function allmenu() {

    $.getJSON('menu.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4 mb-2"><div class="card"><img src="image/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">RP.' + data.harga + '</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>')
        })

    })
}

allmenu();

//menampilkan data per kategori
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'ALL MENU') {
        allmenu();
        return;
    }

    $.getJSON('menu.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori) {
                content += '<div class="col-md-4 mb-2"><div class="card"><img src="image/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">RP.' + data.harga + '</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>'
            }
        })

        $('#daftar-menu').html(content);
    })
})