const article = [
  {
    title: "Sudah Tahu Kelebihan Shopee dibanding E-commerce Lainnya?",
    content: "Zaman sekarang orang tidak asing lagi dengan namanya belanja online, selain mudah, biasanya harga barang yang ditawarkan lebih murah dibandingan beli di toko.",
    publishdate_author: "28 Februari 2021 || Rizka Indah Puspita",
    link: "/shopee-artikel.html",
    image: "/img/shopee.jpg"
  },
  {
    title: "Tokopedia Sukses Gaet BLACKPINK dan BTS, Ini Sosok di Balik Layarnya",
    content: "Penampilan BTS dan BLACKPINK dalam acara Waktu Indonesia Belanja (WIB) TV Show Tokopedia telah ditonton lebih dari 15 juta kali baik di platform Tokopedia.",
    publishdate_author: "1 Maret 2021 || Rizka Indah Puspita",
    link: "/tokopedia-artikel.html",
    image: "/img/tokopedia.jpg"
  },
  {
    title: "KliknClean Bermitra dengan Bukalapak?",
    content: "Pandemi Covid-19 masih belum usai. Namun, hal tersebut tak menjadi penghalang peluang usaha untuk jasa kebersihan serta kesehatan",
    publishdate_author: "1 Maret 2021 || Rizka Indah Puspita",
    link: "/bukalapak-artikel.html",
    image: "/img/bukalapak.jpg"
  },
  {
    title: "Pegadaian & Lazada Logistics Kerja Sama Bantu Penghasilan buat Kurir",
    content: "PT Pegadaian (Persero) bekerja sama dengan Lazada Logistics untuk pemberdayaan mitra kurir Lazada sebagai agen Pegadaian.",
    publishdate_author: "1 Maret 2021 || Rizka Indah Puspita",
    link: "/lazada-artikel.html",
    image: "/img/lazada.jpg"
  }
]

document.addEventListener("click", function(){
  document.getElementById("text-ubah").innerHTML =
   "Enjoy Your Day!";
});

$(document).ready(function(){
  // ini jquery untuk notif 
  $(".icon-close").on("click",function(){
    const notificationList = $(this).parent();
    notificationList.slideUp(500, function(){
      notificationList.remove();
    });

    // console.log($("#notification").children().length)
    if($("#notification").children().length === 1){
      $("#notification").slideUp(1000, function(){
        $("#notification").remove();
      });
    } 
  })

  // ini jquery untuk comments 
  $("#submit").on("submit", function(event){
    event.preventDefault();
    
    const namaKomentator = $("input#name").val();
    const textKomentator = $("textarea#comment").val();
    // console.log(namaKomentator);
    // console.log(textKomentator);

    // buat modal success di dalam komen
    if(namaKomentator == '' || textKomentator == ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Check The Missing Field!',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Good Job',
        text: 'Success',
        showConfirmButton: false,
        timer: 1500
      });
      $("#card-tampil").append(`
      <div class="card p-3 mb-3 w-100 justify-content-center">
        <div class="list-comment">
          <div id="comment-name">${namaKomentator}
          <span id="comment-text" class="text-dark">${textKomentator}</span>
          </div>
        </div>
      </div>
      `);
    }
  });

  // postpreview template
  for (let i = 0; i < article.length; i++) {
    let postPreviewTemplate = `
        <div class="card card-berita mb-3 container pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-4 d-flex">
              <a href="${article[i].link}" class="href"><img src="${article[i].image}" class="card-img responsive-banner" alt="shopee"></a>
            </div>
            <div class="col-md-8 d-md-flex">
              <div class="card-body">
                <a href="${article[i].link}" class="hre">
                <h5 class="card-title">${article[i].title}</h5>
                </a>
                <p class="card-text">${article[i].content}</p>
                <a href="${article[i].link}" class="href"><button type="button" class="btn btn-outline-secondary">Read More</button></a>
                <hr>
                <p class="card-text text-right"><small class="text-muted">${article[i].publishdate_author}</small></p>
              </div>
            </div>
          </div>
        </div>
    `
    $("#post-preview").append(postPreviewTemplate);
  }

  $('h2, h3').addClass('muncul');

  $('.list-group').addClass('muncul');

  $('.profile-card').addClass('muncul');
  
  $('.card-text').addClass('muncul')

  $('.post-preview .card').each(function(i){
    setTimeout(function() {
      // console.log('ok')
      $('.post-preview .card').eq(i).addClass('muncul');
    }, 500 * (i));
  })

});








// ini klau mau saat nge scroll ada efek
// $(window).scroll(function(){
//   let wScroll = $(this).scrollTop();
//     if(wScroll > $('.post-preview').offset().top - 250){
//       $('.post-preview .card').each(function(i){
//         setTimeout(function() {
//           // console.log('ok')
//           $('.post-preview .card').eq(i).addClass('muncul');
//         }, 500 * (i+1));
//       })
//     }
// });
