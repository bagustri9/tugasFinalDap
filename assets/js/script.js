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
var elms = document.getElementsByClassName('splide');
new Splide(elms[0], {
    perPage: 3,
    perMove: 1,
    height: '100%',
    width: '100%',
    breakpoints: {
        '992': {
            perPage: 2,
            gap: '1rem',
        },
        '768': {
            perPage: 1,
            gap: '1rem',
        },
    }
}).mount();
var resp = new Splide(elms[1], {
    perPage: 2,
    direction: 'ttb',
    perMove: 1,
    height: '700px',
    width: '100%',
    breakpoints: {
        '576': {
            perPage: 2,
            gap: '1rem',
            height: '1300px'
        },
        '768': {
            height: '1000px'
        },
    }
}).mount();
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

var days = 0;
var month = 0;
var resizeTimer = false;
var tinggi;
var high;
function load() {
    var elem = $(".info");
    for (i = 0; i < elem.length; i++) {
        elem[i].style.width = "85%";
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
    $(".owl-stage-outer").css({ "height": (tinggi + (tinggi * 15 / 100)) + "px" });
    $(".splide").first().css({ "height": (tinggi + (tinggi * 30 / 100)) + "px" });
}

function fokus(param) {
    var elem = $(".info")
    for (i = 0; i < elem.length; i++) {
        elem[i].style.opacity = 0.8;
        elem[i].style.width = "85%";
        elem[i].style.height = "400px";
        elem[i].style.transition = "all 0.4s";
    }
    param.style.opacity = 1;
    param.style.height = "450px";
    param.style.width = "95%";
}
function unfokus(param) {
    var elem = $(".info")
    for (i = 0; i < elem.length; i++) {
        elem[i].style.opacity = 1;
        elem[i].style.width = "85%";
        elem[i].style.height = '400px';
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
}).on('resizeend', function () {
    tinggi = jQuery("div").find(".card").first().height();
    high = $("#splide02-slide01").height();
    high = high * 2 + (high * 275 / 600);
    $(".owl-stage-outer").css({ "height": (tinggi + (tinggi * 15 / 100)) + "px" });
    $(".splide").css({ "height": (tinggi + (tinggi * 30 / 100)) + "px" });
    $(".ver").css({ "height": high + "px" });
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
function active(param) {
    var nav = $(".navbar-nav").children();
    for (i = 0; i < nav.length; i++) {
        nav.eq(i).removeClass("active");
    }
    param.classList.add("active");
}
$('html').click(function (e) {
    if ($(e.target).hasClass('cari-halaman') || $(e.target).hasClass('cari-text')) {
        $('.box-cari').removeClass("d-none");
    } else {
        $('.box-cari').addClass("d-none");
    }
});

function submit(){
    $('#loginModal').modal('hide');
    $('#alertLogin').modal('show');
}

function login() {
    $('#loginModal').modal('show');
}

$('#infoBeaModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var imgSrc = button.children().eq(0).children().eq(0).attr("src")
    var title = button.children().eq(1).children().eq(0).text();
    var ke = button.data('ke')
    var paragraf;
    switch (ke) {
        case 0:
            paragraf = "Ajinomoto kembali menawarkan beasiswa S2 kepada mahasiswa Indonesia yang ingin melanjutkan kuliah di Jepang. Beasiswa Ajinomoto ini bersifat beasiswa penuh (full scholarship). \n" +
            "Tambahan informasi, pada 2021 beasiswa Ajinomoto akan memberikan tunjangan sekitar 1.800.000 yen sebagai Research Student (selama satu tahun), dan 6.480.000 yen sebagai Master Course Student (selama dua tahun). Lalu, memberikan tanggungan penuh biaya perkuliahan (tuition fees), admisi, dan full examination, serta tiket pesawat berangkat ke Jepang.\n" +
            "\n" +
            "PILIHAN UNIVERSITAS DI JEPANG:\n" +
            "1.	The University of Tokyo\n" +
            "2.	Kyoto University\n" +
            "3.	Nagoya University\n" +
            "4.	Tokyo Institute of Technology\n" +
            "5.	Ochanomizu University\n" +
            "6.	Kagawa Nutrition University\n" +
            "7.	Waseda University\n" +
            "\n" +
            "PILIHAN FAKULTAS PADA MASING-MASING KAMPUS TUJUAN:\n" +
            "1.	The University of Tokyo: Medicine School of International Health, Engineering, Science, Agricultural and Life Science, Pharmaceutical Science, Frontier Science, Information Science and Technology, Mathematical Science, Interdisciplinary Information Studies (Emerging Design and Informatics, Applied Computer Science, Biostatistics and Bioinformatics courses)\n" +
            "2.	Kyoto University: Medicine, Medical Science, Science, Pharmaceutical Science, Engineering, Agriculture, Human and Environmental Studies, Human Coexistence (Cognitive and Behavioral Sciences, Mathematical Science), Interdisciplinary Environment), Energy Science, Informatics, Biostudies\n" +
            "3.	Nagoya University: Medicine, Medical Science, Science, Mathematics, Engineering, Bio agricultural Sciences, Environmental Studies, Informatics, Pharmaceutical Sciences\n" +
            "4.	Tokyo Institute of Technology: Science, Engineering, Materials and Chemical Technology, Computing, Life Science and Technology, Environment and Society\n" +
            "5.	Ochanomizu University: Humanities and Sciences (Life Sciences, Advanced Sciences, Human Centered Engineering)\n" +
            "6.	Kagawa Nutrition University: Nutrition Sciences, Health Sciences\n" +
            "7.	Waseda University: Fundamental Science and Engineering, Creative Science and Engineering, Advanced Science and Engineering, Environment and Energy Engineering, Information, Production and Systems\n" +
            "\n" +
            "•	Link : \n" +
            "https://indbeasiswa.com/2020/12/beasiswa-ajinomoto-kuliah-s2-jepang.html\n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "Cakupan dari program beasiswa ini, di antaranya adalah \n" +
            "1.	Tunjangan senilai 150,000 yen setiap bulan (bagi penerima beasiswa Research Graduate Program dengan jangka waktu maksimal 1 tahun).\n" +
            "2.	Tunjangan senilai 180,000 yen setiap bulan (bagi penerima beasiswa Master’s Course Graduate School Program dengan jangka waktu maksimal 2 tahun).\n" +
            "3.	Tanggungan penuh biaya perkuliahan (tuition fees), pendaftaran, dan ujian.\n" +
            "4.	Tiket pesawat Indonesia – Jepang.\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Mahasiswa D4 atau S1\n" +
            "\n" +
            "•	Persayaratan :\n" +
            "1.	Merupakan Warga Negara Indonesia.\n" +
            "2.	Telah lulus ATAU akan dinyatakan lulus dari universitas pada jenjang sebelumnya dan mendapatkan rekomendasi dari dosen pembimbing atau dekan dari kampus asal atau memenuhi persyaratan untuk mendaftar di salah satu universitas Jepang yang disebutkan di atas.\n" +
            "3.	Peserta telah mencapai tingkat prestasi akademik tertentu (misalnya: berada pada top 5% teratas dalam satu angkatan, IPK minimal 3,5) pada universitas sebelumnya.\n" +
            "4.	Memiliki latar belakang di bidang Nutrisi dan Ilmu Pangan.\n" +
            "5.	Berusia maksimal 35 tahun (per tanggal 1 April 2020).\n" +
            "6.	Peserta harus bisa mendapatkan persetujuan diterima sebagai mahasiswa di universitas yang dituju baik sebagai Research Student atau Master’s Course Student untuk tahun perkuliahan yang dimulai pada April 2021 atau Oktober 2021.\n" +
            "7.	Peserta harus memenuhi persyaratan bahasa Jepang yang diperlukan untuk melakukan penelitian dan studi di Program Master, ketika mendaftar sebagai Master’s Course Student.\n" +
            "8.	Memiliki kondisi fisik dan mental yang sehat serta motivasi yang tinggi untuk belajar.\n" +
            "9.	Tidak akan mendapatkan beasiswa lainnya.\n" +
            "\n" +
            "•	Dokumen : \n" +
            "1.	Application Form\n" +
            "2.	Formulir Bidang Studi dan Program Studi\n" +
            "3.	Salinan transkrip nilai dari perguruan tinggi sebelumnya yang telah dilegalisir\n" +
            "4.	Formulir Rekomendasi yang diisi oleh pembimbing akademik\n" +
            "5.	Surat Pernyataan Post Graduate Scholarship\n" +
            "6.	Salinan dokumen bukti kemampuan bahasa Jepang (misal: JLPT, EJU, dll) apabila diminta oleh pihak universitas tujuan\n" +
            "7.	Salinan TOEFL dan GRE apabila diminta oleh pihak fakultas universitas tujuan\n" +
            "\n" +
            "•	Timeline :\n" +
            "1.	Untuk mendaftar Beasiswa Ajinomoto, kirimkan berkas dokumen di atas ke alamat berikut:\n" +
            "Public Relation Department (Up Jihad Dwidyasa)\n" +
            "PT. AJINOMOTO INDONESIA\n" +
            "Jl. Laksda Yos Sudarso No. 77-78\n" +
            "Sunter – Jakarta Utara 14350\n" +
            "2.	Batas waktu pendaftaran sampai dengan 5 MARET 2021.\n" +
            "3.	Para kandidat terpilih akan diinformasikan melalui email dan berhak melanjutkan ke tahapan wawancara."
            break
        case 1:
            paragraf = "Global Undergraduate Exchange Program (Global UGRAD Program) diselenggarakan oleh AMINEF (American Indonesian Exchange Foundation) dengan pendanaan dari Biro Pendidikan dan Kebudayaan Departemen Luar Negeri AS. Program pertukaran mahasiswa D4/S1 ini bersifat beasiswa penuh dan dilaksanakan selama satu semester pada perguruan tinggi Amerika Serikat yang telah ditentukan. Program Global UGRAD rutin ditawarkan setiap tahunnya bagi seluruh mahasiswa S1 Indonesia, baik dari universitas negeri maupun swasta. Tentunya selain bisa merasakan dan menjalani perkuliahan sebagai mahasiswa di universitas Amerika Serikat, peserta juga akan mendapatkan berbagai pengalaman. Seperti kesempatan untuk berpartisipasi dalam kegiatan pelayanan masyarakat, orientasi kedatangan dan workshop saat program berakhir. Selama masa studi di Amerika, peserta akan menempati fasilitas perumahan kampus bersama mahasiswa lainnya. Selain itu, peserta juga berkesempatan menambah relasi internasional yang akan berguna nantinya.\n" +
            "\n" +
            "•	Link : \n" +
            "https://indbeasiswa.com/2020/12/program-pertukaran-mahasiswa-aminef.html\n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "Cakupan dari program beasiswa ini, di antaranya adalah \n" +
            "1.	Biaya perjalanan internasional (tiket pesawat)\n" +
            "2.	Uang perkuliahan\n" +
            "3.	Akomodasi\n" +
            "4.	Asuransi kecelakaan/kesehatan\n" +
            "5.	Tunjangan bulanan\n" +
            "6.	Biaya buku\n" +
            "\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Mahasiswa D4 atau S1\n" +
            "\n" +
            "•	Persayaratan :\n" +
            "1.	Merupakan Warga Negara Indonesia.\n" +
            "2.	Berusia minimal 18 tahun.\n" +
            "3.	Merupakan mahasiswa D4/S1 dari universitas negeri atau swasta di Indonesia. Telah menyelesaikan minimal satu semester studi di universitas asal dan memiliki setidaknya 1 semester atau lebih yang harus diselesaikan di kampus setelah kembali ke Indonesia. Lebih diutamakan bagi mereka yang sedang menempuh semester tiga atau lima.\n" +
            "4.	Menunjukkan potensi kepemimpinan melalui prestasi akademik, keterlibatan dalam masyarakat/komunitas, dan kegiatan ekstrakurikuler.\n" +
            "5.	Menunjukkan kemampuan bahasa Inggris yang baik (lisan maupun tulisan), dibuktikan dengan skor TOEFL ITP atau Tes Prediksi TOEFL minimal 500 (diperoleh dalam waktu dua tahun terakhir).\n" +
            "6.	Berkomitmen untuk langsung kembali ke Indonesia setelah menyelesaikan program pertukaran Global UGRAD Program.\n" +
            "7.	Lebih diutamakan bagi peserta yang jarang atau tidak pernah melakukan perjalanan ke Amerika Serikat atau ke negara lainnya.\n" +
            "8.	Bukan merupakan warganegara atau berdomisili di Amerika Serikat.\n" +
            "9.	Saat ini tidak sedang menempuh pendidikan, tinggal atau bekerja di luar Indonesia.\n" +
            "10.	Bukan merupakan anggota keluarga dari pegawai Departemen Luar Negeri AS, USAID, AMINEF, dan World Learning.\n" +
            "\n" +
            "•	Dokumen : \n" +
            "1.	2 (Dua) surat referensi akademik, satu dari dosen jurusan yang bersangkutan, dan yang satu bisa berasal dari dosen lain, atasan, pelatih, atau pimpinan/pengawas kegiatan di masyarakat.\n" +
            "2.	Fotocopy KTP.\n" +
            "3.	Transkrip nilai terbaru dalam bahasa Indonesia dan Inggris.\n" +
            "\n" +
            "•	Timeline :\n" +
            "1.	Saat ini pendaftaran belum dibuka, dan baru akan dibuka pada tanggal 4 JANUARI 2021 mendatang.\n" +
            "2.	Untuk mendaftar program pertukaran mahasiswa oleh Global UGRAD, peserta dapat melengkapi formulir pendaftaran online pada link berikut: \n" +
            "https://webportalapp.com/sp/login/ugrad_student_application \n" +
            "Klik tulisan Sign Up.\n" +
            "3.	Buat akun terlebih dahulu dengan mengisi Nama dan Email yang akan digunakan dan klik “Sign Up”.\n" +
            "4.	Selanjutnya isi seluruh formulir pendaftaran online dengan data-data yang diminta.\n" +
            "5.	Batas waktu pendaftaran dan penyerahan berkas dokumen sampai dengan 28 FEBRUARI 2021.\n" +
            "6.	Setelah pendaftaran online diselesaikan, peserta dapat menginformasikan pada staf AMINEF via email dengan melampirkan hasil scan TOEFL ITP/Tes Prediksi TOEFL kepada: info.scholarship@aminef.or.id, dengan subject email: “[Nama Lengkap Anda] – Completed Global UGRAD Online Form”.\n";
            break
        case 2:
            paragraf = "•	Link : \n" +
            "http://pemudamendunia.org/beasiswa/ \n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "Beasiswa Biaya Bantuan pendidikan sebesar\n" +
            "1.	Beasiswa SMA / MA/SMK / sederajat sebesar 250,000 / bulan selama 6 bulan\n" +
            "2.	Beasiswa Mahasiswa Berprestasi sebesar 500,000 / bulan selama 6 bulan\n" +
            "3.	Beasiswa Mahasiswa Kurang Mampu sebesar 600,000 / bulan selama 6 bulan\n" +
            "4.	Beasiswa Aktifis pemuda sebesar 450,000 / bulan selama 6 bulan\n" +
            "\n" +
            "Selain itu :\n" +
            "•	Mendapatkan Kelas Youth Development Program\n" +
            "•	Menjadi Ambassador Pemuda Mendunia\n" +
            "•	Mendapatkan Kelas Bimbingan Kuliah ke Luar Negeri\n" +
            "•	Mendapatkan Mentor dari Alumni Pemuda Mendunia yang kuliah di Luar Negeri\n" +
            "•	Berkesempatan mengikuti program Pemuda Mendunia baik nasional maupun Internasional\n" +
            "•	Relasi Pemuda Nasional dan Internasional\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Beasiswa SMA/SMK/MA/sederajat, Beasiswa mahasiswa berprestasi, Beasiswa mahasiswa kurang mampu, Beasiswa aktifis pemuda\n" +
            "\n" +
            "•	Persayaratan Umum :\n" +
            "1.	Warga negara Indonesia\n" +
            "2.	Siswa aktif SMA/SMK/MA/sederajat\n" +
            "3.	Mahasiswa aktif jenjang D1/D3/D4/S1/S2\n" +
            "4.	Tidak ada minimal nilai rapor atau IPK\n" +
            "5.	Bagi yang sudah mendapatkan beasiswa baik dari pemerintah ataupun swasta tetap diperbolehkan mendaftar\n" +
            "\n" +
            "•	Persyaratan Beasiswa Aktifis Pemuda :\n" +
            "1.	Warga negara Indonesia yang berusia 17-30 tahun\n" +
            "2.	Tanpa batasan jenjang pendidikan\n" +
            "3.	Telah lulus SMA dan kuliah\n" +
            "4.	Aktif dalam bidang kepemudaan\n" +
            "\n" +
            "•	Dokumen : \n" +
            "1.	SMA/SMK/MA/Sederajat\n" +
            "Persyaratan Berkas Administrasi:\n" +
            "a.	Scan kartu pelajar\n" +
            "b.	Scan nilai rapor semester akhir\n" +
            "c.	Scan sertifikat kegiatan akademik dan non-akademik\n" +
            "d.	Surat pernyataan keabsahan dokumen\n" +
            "\n" +
            "2.	Mahasiswa Berprestasi\n" +
            "Persyaratan Berkas Administrasi:\n" +
            "a.	Scan kartu mahasiswa\n" +
            "b.	CV dalam bentuk pdf\n" +
            "c.	Scan KHS Kumulatif dan KRS semester akhir\n" +
            "d.	Mahasiswa baru dapat menggunakan scan rapor semester 5 dan hasil nilai UN\n" +
            "e.	Scan sertifikat kegiatan akademik dan non-akademik\n" +
            "f.	Surat pernyataan keabsahan dokumen\n" +
            "\n" +
            "3.	Mahasiswa Kurang Mampu\n" +
            "Persyaratan Berkas Administrasi:\n" +
            "a.	Scan kartu mahasiswa\n" +
            "b.	CV dalam bentuk pdf\n" +
            "c.	Scan KHS Kumulatif dan KRS semester akhir\n" +
            "d.	Mahasiswa baru dapat menggunakan scan rapor semester 5 dan hasil nilai UN\n" +
            "e.	Surat pernyataan penghasilan orang tua gabungan kurang dari 750.000 Rupiah perbulan\n" +
            "f.	Surat pernyataan keabsahan dokumen\n" +
            "\n" +
            "4.	Aktifis Pemuda \n" +
            "Persyaratan Berkas Administrasi:\n" +
            "a.	Scan KTP\n" +
            "b.	CV dalam bentuk pdf\n" +
            "c.	Rekomendasi pembina organisasi\n" +
            "d.	Surat pernyataan aktif organisasi\n" +
            "e.	Scan sertifikat prestasi/kontribusi\n" +
            "f.	Surat pernyataan keabsahan dokumen\n" +
            "\n" +
            "•	Timeline :\n" +
            "a.	Pembukaan pendaftaran: 06 November 2020\n" +
            "b.	Deadline pendaftaran: 03 Desember 2020\n" +
            "c.	Pengumuman seleksi berkas: 15 Desember 2020\n" +
            "d.	Wawancara: 17-20 Desember 2020\n" +
            "e.	Pengumuman akhir: 25 Desember 2020";
            break
        case 3:
            paragraf = "Leiden University Excellence Scholarship programme (LExS) kini dibuka lagi untuk perkuliahan yang dimulai 2021. Beasiswa ini menawarkan sejumlah program S2 bergelar MA, MSc, dan LLM di Leiden University (Universiteit Leiden). Pelamar internasional termasuk Indonesia dipersilakan mendaftar. Salah satu keistimewaan beasiswa ini, peserta tidak terbuka bagi warganegara Uni Eropa atau Kawasan Ekonomi Eropa.\n" +
            "\n" +
            "Fakultas yang menawarkan beasiswa:\n" +
            "1.	Archaeology\n" +
            "2.	Humanities\n" +
            "3.	Medicine/LUMC\n" +
            "4.	Governance and Global Affairs\n" +
            "5.	Law\n" +
            "6.	Social and Behavioural Sciences\n" +
            "7.	Science\n" +
            "8.	Interfacultair Centrum voor Lerarenopleiding\n" +
            "9.	Onderwijsontwikkeling en Nascholing (ICLON)\n" +
            "10.	African Studies Centre\n" +
            "11.	International Institute for Asian Studies\n" +
            "\n" +
            "•	Link : \n" +
            "https://www.beasiswapascasarjana.com/2016/04/beasiswa-s2-di-leiden-university-2017.html\n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "LExS merupakan beasiswa kuliah berupa biaya pendidikan, mulai parohan hingga penuh. Nilai beasiswa yang diperoleh tersebut bergantung pada penilaian seleksi, serta ketersediaan dana di masing-masing fakultas. Nilai setiap beasiswa yang diberikan mulai dari € 10.000, € 15.000, serta biaya kuliah penuh dikurangi biaya kuliah wajib. Kandidat terpilih memang hanya mendapatkan bantuan biaya kuliah (tuition fee), sementara biaya lain seperti biaya hidup menjadi tanggung jawab scholars.\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Mahasiswa S1\n" +
            "\n" +
            "•	Persayaratan :\n" +
            "1.	Memiliki prestasi akademik memuaskan dan relevan dengan program master yang akan dilamar\n" +
            "2.	Memegang paspor non Uni Eropa/Kawasan Ekonomi Eropa (EU/EEA) dan tidak menerima pinjaman atau hibah studi di Belanda\n" +
            "3.	Beasiswa tidak berlaku bagi pelamar yang telah meraih gelar master di Leiden University\n" +
            "4.	Mahasiswa yang mendapatkan beasiswa LExS harus mematuhi dan mengkonfirmasi secara tertulis perjanjian mereka sesuai syarat dan ketentuan yang melekat sebelum beasiswa diberikan\n" +
            "\n" +
            "•	Dokumen : \n" +
            "1.	Salinan paspor resmi atau KTP\n" +
            "2.	Motivation letter\n" +
            "3.	Salinan ijazah dan transkrip\n" +
            "4.	Salinan sertifikat TOEFL, IELTS, atau CPE\n" +
            "5.	CV (resume) terbaru\n" +
            "6.	Dua surat rekomendasi\n" +
            "7.	Dokumen penunjang lainnya (Cek laman program)\n" +
            "\n" +
            "•	Timeline :\n" +
            "Permohonan beasiswa sekaligus merupakan pendaftaran ke Leiden University. Pelamar tidak perlu mengajukan aplikasi terpisah. Daftarkan diri terlebih di laman Leiden University secara online. Lengkapi formulir pendaftarannya. Setelah itu lampirkan dokumen aplikasi yang tertera di atas.\n" +
            "Ketika mengisi formulir aplikasi, tepatnya di kolom 'scholarship', pelamar perlu menyebutkan bahwa Anda ingin mengajukan LExS Scholarship. Lakukan hal serupa jika Anda mendaftar lebih dari satu program master. Masih di formulir aplikasi tersebut, lampirkan pula letter of motivation (maksimum 500 kata) khusus beasiswa yang berisikan kenapa Anda perlu dipertimbangkan dalam beasiswa LExS.\n" +
            "Pelamar nantinya akan diminta untuk membayar biaya aplikasi pendaftaran online senilai € 100. Itu merupakan biaya pendaftaran universitas. Deadline pendaftaran 1 Oktober 2020 untuk perkuliahan yang dimulai Februari 2021. Serta paling lambat 1 Februari 2021 untuk perkuliahan yang dimulai September 2021.\n" +
            "Komite seleksi dari fakultas akan menilai aplikasi yang diajukan masing-masing pelamar. Penilaian akan didasarkan pada capaian prestasi akademik. Semua pelamar beasiswa S2 Leiden University akan memperoleh pemberitahuan hasil seleksi pada akhir November 2020 untuk perkuliahan yang dimulai Februari 2021 serta akhir April 2021 untuk perkuliahan pada September 2021. Teknis pendaftaran lebih lanjut dapat disimak di laman Leiden University."
            break
        case 4:
            paragraf = "EIFFEL EXCELLENCE SCHOLARSHIP PROGRAM 2021 ditawarkan oleh Pemerintah Prancis melalui Kementerian Luar Negeri Prancis bagi mahasiswa internasional (termasuk dari Indonesia) untuk melanjutkan kuliah Master dan PhD di perguruan tinggi yang ada di Prancis. Prancis dikenal dengan mutu pendidikan dan keramahan penduduknya yang terbuka dengan pendatang-pendatang baru. Tentunya kesempatan kuliah di Prancis melalui Eiffel Scholarship patut dipertimbangkan.\n" +
            "\n" +
            "Bidang studi yang ditawarkan dalam Beasiswa Eiffel adalah sebagai berikut:\n" +
            "1.	Hukum\n" +
            "2.	Ekonomi dan Manajemen\n" +
            "3.	Teknik (tingkat S2) / Sains dalam lingkup lebih luas (tingkat PhD). Ilmu teknik seperti Mathematics, Physics, Chemistry, the Life Sciences, Nano-and Biotechnology, Earth Sciences, Space Sciences, Environmental Sciences, serta Information and Communication Sciences and Technologies\n" +
            "4.	Ilmu Politik\n" +
            "\n" +
            "•	Link : \n" +
            "https://indbeasiswa.com/2020/10/beasiswa-eiffel-excellence.html \n" +
            "www.campusfrance.org/en  \n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "1.	Tunjangan bulanan sejumlah 1.181 Euro untuk penerima beasiswa Master dan 1.400 Euro untuk penerima beasiswa PhD\n" +
            "2.	Tiket pesawat PP Indonesia – Prancis\n" +
            "3.	2 tiket kereta api dari/ke lokasi kampus pada awal dan akhir beasiswa\n" +
            "4.	Penggantian biaya transportasi lokal\n" +
            "5.	Asuransi kesehatan\n" +
            "6.	Kegiatan kebudayaan\n" +
            "7.	Bantuan tempat tinggal\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Program ini menerima peserta yang akan melanjutkan level studi berikut:\n" +
            "1.	Master’s degree program\n" +
            "2.	Engineering program\n" +
            "3.	Joint-doctoral program\n" +
            "\n" +
            "•	Persayaratan Umum :\n" +
            "1.	Bukan merupakan warganegara atau berkewarganegaraan ganda dengan Prancis.\n" +
            "2.	Berusia maksimal 25 tahun untuk pelamar program Master (lahir setelah bulan Maret 1995) atau maksimal 30 tahun untuk pelamar program PhD (lahir setelah bulan Maret 1990) pada tahun 2020.\n" +
            "3.	Pengajuan beasiswa tidak diajukan sendiri tetapi diajukan oleh lembaga perguruan tinggi Prancis yang telah menyetujui aplikasi lamaran perkuliahan anda. Para pelamar yang diusulkan oleh lebih dari satu perguruan tinggi tidak akan dipertimbangkan dalam seleksi beasiswa.\n" +
            "4.	Beasiswa ditujukan bagi para mahasiswa yang ingin mendaftar program Master, Sekolah Teknik, maupun untuk mahasiswa Doktoral yang akan melakukan penelitian di Prancis sebagai bagian dari joint-doctoral program.\n" +
            "5.	Para pelamar yang telah mendapatkan beasiswa Pemerintah Prancis dari program beasiswa lain tidak dapat mengikuti beasiswa Eiffel.\n" +
            "6.	Bagi pelamar program Master: Pelamar yang sebelumnya telah ditolak pada saat proses seleksi beasiswa Pemerintah Prancis, tidak dapat mengikuti beasiswa Eiffel (walaupun mengajukan pendaftaran untuk bidang studi yang berbeda). Selain itu, pelamar yang sebelumnya telah mendapatkan Beasiswa Eiffel pada tingkat Master juga tidak dapat mengikuti beasiswa ini untuk jenjang yang sama.\n" +
            "7.	Bagi pelamar program PhD: Institusi pendidikan di Prancis diperbolehkan mengajukan calon yang sebelumnya telah mendapatkan beasiswa di tingkat Master untuk mendaftar beasiswa Eiffel tingkat PhD.\n" +
            "8.	Memenuhi persyaratan kemampuan bahasa yang dibutuhkan oleh program studi dan universitas di Prancis yang dipilih.\n" +
            "\n" +
            "•	Timeline :\n" +
            "Batas waktu pengajuan beasiswa oleh universitas-universitas di Prancis ke pihak Campus France adalah 8 JANUARI 2021. Artinya, pelamar harus mendaftar dan diterima oleh universitas yang dituju jauh-jauh hari sebelum tanggal tersebut dan meminta untuk disertakan dalam program beasiswa. Pengumuman hasil seleksi akan dilaksanakan pada 22 Maret 2021."
            break
        case 5:
            paragraf = "Program Beasiswa Cargill Global Scholars kembali ditawarkan bagi mahasiswa S1 on-going di Indonesia. Beasiswa ini tidak hanya menyediakan bantuan keuangan saat kuliah, tetapi juga memberikan kesempatan kepada penerima beasiswa untuk dapat mengembangkan potensi kepemimpinannya melalui berbagai kegiatan.\n" +
            "Melalui program Beasiswa Cargill Global Scholars, Cargill ingin memperkaya dan meningkatkan jaringan para penerima beasiswa supaya dapat mengembangkan ide dan inovasinya serta memberikan kontribusi yang positif kepada komunitasnya. Program ini merupakan bagian dari komitmen Cargill dalam upaya meningkatkan standar hidup dan mendukung terciptanya masyarakat dunia yang berkualitas dan mapan.\n" +
            "\n" +
            "KUOTA BEASISWA: 10 orang\n" +
            "\n" +
            "•	Link : \n" +
            "https://indbeasiswa.com/2020/12/beasiswa-cargill-global-scholars.html\n" +
            "\n" +
            "•	Beasiswa Berupa :\n" +
            "Cakupan dari program beasiswa ini, di antaranya adalah \n" +
            "1.	Mendapatkan beasiswa senilai $ 2,500 setiap tahun untuk membantu pendanaan biaya kuliah pada 2 tahun terakhir masa kuliah S1. Beasiswa diberikan selama maksimum 2 tahun.\n" +
            "2.	Berpartisipasi dalam seminar kepemimpinan selama 3 hari pada tahun pertama program. Kegiatan ini didanai secara penuh oleh pihak penyelenggara (Fully Funded). Program seminar kepemimpinan ini bertujuan untuk meningkatkan kemampuan kepemimpinan penerima beasiswa agar dapat terasah potensinya secara maksimal sehingga tujuan program dapat tercapai.\n" +
            "3.	Berpartisipasi dalam Seminar Kepemimpinan Global (Global Leadership Seminar) selama satu minggu yang diselenggarakan pada salah satu lokasi perusahaan Cargill. Kegiatan ini akan mempertemukan seluruh penerima Beasiswa Cargill Global Scholars dari seluruh negara peserta. Selain itu peserta akan mengikuti serangkaian kegiatan pengayaan pengalaman ditambah kesempatan membentuk jaringan dengan para pemimpin Cargill. Kegiatan ini didanai secara penuh oleh penyelenggara (Fully Funded) dan dilaksanakan pada tahun kedua program.\n" +
            "4.	Dipasangkan dengan salah satu pemimpin Cargill yang akan menjadi Mentor atau Pembimbing. Pembimbing dari Cargill tersebut akan membantu para penerima beasiswa dalam pencapaian target/rencana akademik maupun profesional dalam jangka pendek maupun jangka panjang, melalui pengembangan jaringan, pertemuan tatap muka serta komunikasi via telepon dan email.\n" +
            "5.	Menjadi anggota komunitas Alumni Cargill Global Scholars.\n" +
            "\n" +
            "•	Beasiswa Diperuntukkan :\n" +
            "Mahasiswa S1\n" +
            "\n" +
            "•	Persayaratan :\n" +
            "1.	Merupakan warganegara atau penduduk tetap Indonesia.\n" +
            "2.	Terdaftar sebagai mahasiswa S1 pada salah satu perguruan tinggi partner Beasiswa Cargill yang disebutkan di atas.\n" +
            "3.	Merupakan mahasiswa tahun kedua pada salah satu jurusan berikut:\n" +
            "a.	Akuntansi (khusus mahasiswa UNHAS)\n" +
            "b.	Biologi\n" +
            "c.	Kedokteran Hewan\n" +
            "d.	Perikanan dan yang relevan\n" +
            "e.	Pertanian dan yang relevan\n" +
            "f.	Peternakan dan yang relevan\n" +
            "g.	Teknik Lingkungan\n" +
            "4.	Mempunyai prestasi akademik yang baik dengan IPK minimal 3.0 (skala 4.0) pada semester 1-3.\n" +
            "5.	Aktif dalam berbagai kegiatan sosial dan kemahasiswaan serta menunjukkan potensi kepemimpinan.\n" +
            "6.	Membutuhkan bantuan keuangan.\n" +
            "7.	Terdaftar sebagai mahasiswa aktif perkuliahan untuk tahun ajaran yang dimaksud.\n" +
            "8.	Bagi perempuan dan pelamar difabel sangat disarankan untuk mendaftar.\n" +
            "\n" +
            "\n" +
            "•	Dokumen : \n" +
            "Berkas dokumen berikut dapat di-scan terlebih dahulu dalam format doc/docx/pdf/jpeg.\n" +
            "1.	2 (Dua) Esai yang menjawab pertanyaan dalam formulir pendaftaran\n" +
            "2.	Transkrip nilai S1 untuk seluruh mata kuliah pada semester 1, 2 dan 3\n" +
            "3.	Daftar nilai saat SMA/Sederajat (yang tertera di belakang ijazah SMA/Sederajat)\n" +
            "4.	2 (Dua) Surat Referensi (langsung dari pemberi referensi).\n" +
            "Khusus untuk UNS: salah satu surat referensi harus dari Wakil Rektor Bidang Kemahasiswaan dan Alumni. Untuk pengurusan surat ini, silakan hubungi Ibu Yuni Parwyanti, Kabag. Kesejahteraan Mahasiswa, Biro Kemahasiswaan & Alumni UNS melalui email: parwyanti@yahoo.com,\n" +
            "5.	Resume/CV\n" +
            "6.	Sertifikat penghargaan dan sejenisnya (jika ada)\n" +
            "\n" +
            "•	Timeline :\n" +
            "1.	Untuk mendaftar Beasiswa Cargill Global Scholars, pelamar dapat melakukan pendaftaran secara online pada link berikut: https://apply.iie.org/cargillglobalscholars-indonesia.\n" +
            "2.	Apabila belum mempunyai akun, buat terlebih dulu dengan klik tulisan Create an account.\n" +
            "3.	Masukkan data-data yang diminta, termasuk email, nama dan tanggal lahir.\n" +
            "4.	Masukkan pin sementara yang diterima di email, selanjutnya akan diarahkan untuk login dan membuat password baru.\n" +
            "5.	Setelah masuk pada halaman Application Management, klik tulisan Start New Application.\n" +
            "6.	Selanjutnya isi formulir pendaftaran dengan data-data yang diminta, termasuk upload scan dokumen yang disebutkan di atas.\n" +
            "7.	Batas waktu pendaftaran sampai dengan tanggal 4 JUNI 2021 pkl 23:59 WIB.\n" +
            "8.	Pelamar yang terpilih sebagai semi-finalis tahun 2021 akan diwawancarai pada bulan Juli 2021.\n" +
            "9.	Hasil seleksi beasiswa akan diumumkan pada bulan Agustus 2021.\n" +
            "10.	Harap diperhatikan bagi pelamar yang terseleksi sebagai penerima beasiswa, harus mengikuti Indonesia In-Country Leadership Seminar 2021. Waktu pelaksanaan ICS akan diinformasikan setelah penerima beasiswa dikonfirmasi."
            break
            case 6:
                paragraf = "•	Link : \n" +
                "https://globalyouthaction.com/beasiswa-gya/  \n" +
                "https://campuspedia.id/news/beasiswa-global-youth-action-2020-resmi-dibuka/ \n" +
                "\n" +
                "•	Beasiswa Berupa :\n" +
                "Cakupan dari program beasiswa ini, di antaranya adalah uang bantuan sebesar Rp300.000,- per bulan per semester untuk SMK/SMA/MA/Sederajat, Rp. 600.000,- per bulan per semester untuk mahasiswa, berkesempatan mengikuti program Global Youth Action baik nasional maupun internasional, serta jadi Ambassador untuk program Global Youth Action.\n" +
                "\n" +
                "•	Beasiswa Diperuntukkan :\n" +
                "Beasiswa SMK/SMA/MA/Sederajat, beasiswa mahasiswa kurang mampu, dan mahasiswa beprestasi.\n" +
                "\n" +
                "•	Persayaratan :\n" +
                "1.	Warga Negara Indonesia\n" +
                "2.	Siswa aktif SMA/SMK/MA/Sederajat\n" +
                "3.	Mahasiswa aktif semua jurusan D3/D4/S1\n" +
                "4.	Tidak ada minimal Nilai Rapor atau IPK\n" +
                "5.	Mahasiswa yang sudah menerima beasiswa pemerintah ataupun swasta diperbolehkan mendaftar\n" +
                "\n" +
                "•	Dokumen : \n" +
                "1.	SMA/SMK/MA/Sederajat\n" +
                "Persyaratan Berkas Administrasi:\n" +
                "a.	Kartu Pelajar\n" +
                "b.	Scan nilai rapor semester terakhir\n" +
                "c.	Sertifikat kegiatan akademik maupun non akademik\n" +
                "d.	Surat pernyataan keabsahan dokumen\n" +
                "e.	Mahasiswa Berprestasi\n" +
                "\n" +
                "2.	Mahasiswa Berprestasi\n" +
                "Persyaratan Berkas Administrasi:\n" +
                "a.	Kartu Tanda Mahasiswa (KTM)\n" +
                "b.	Curriculum Vitae (CV)\n" +
                "c.	KHS kumulatif & KRS Semester Terakhir\n" +
                "d.	Mahasiswa baru menggunakan scan rapor semester 5 dan nilai UN\n" +
                "e.	Sertifikat kegiatan akademik maupun non akademik\n" +
                "f.	Surat pernyataan keabsahan dokumen\n" +
                "g.	Mahasiswa Kurang Mampu\n" +
                "\n" +
                "3.	Mahasiswa Kurang Mampu\n" +
                "Persyaratan Berkas Administrasi:\n" +
                "a.	Kartu Tanda Mahasiswa (KTM)\n" +
                "b.	Curriculum Vitae (CV)\n" +
                "c.	KHS kumulatif & KRS Semester Terakhir\n" +
                "d.	Surat pernyataan penghasilan orang tua gabungan jika dibagi dengan anggota keluarga perorang kurang dari Rp. 750.000 per bulan, atau\n" +
                "e.	Surat pernyataan menanggung biaya kuliah sendiri atau bekerja sendiri tanpa bantuan orangtua\n" +
                "f.	Surat pernyataan keabsahan dokumen\n" +
                "\n" +
                "•	Timeline :\n" +
                "Beasiswa global Youth Action (GYA) 2020 ini dibuka mulai tanggal 10 Oktober hingga tanggal 5 November 2020. Untuk yang tertarik untuk mendaftar, kamu bisa langsung akses website Global Youth Action di www.globalyouthaction.com atau langsung www.globalyouthaction.com/BGYA"
                break
        default:
            paragraf = "null"
    }
    var modal = $(this)
    modal.find(".modal-body .beaImage img").attr("src", imgSrc)
    modal.find(".modal-body .beaTitle h3").text(title)
    var replace = modal.find(".modal-body .beaText p").text(paragraf)
    replace.html(replace.html().replace(/\n/g,'<br/>'));
})

$('#beritaModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var ke = button.data('ke')
    var list = $(".ver").find(".splide__slide");
    var url = list.eq(ke).children().eq(0).css("background-image").split("/")
    var imgSrc = url[3]+"/"+url[4]+"/"+url[5].substring(0,(url[5].length-2))
    var title = list.eq(ke).children().eq(1).children().eq(0).children().eq(0).text()
    var paragraf = list.eq(ke).children().eq(1).children().eq(1).children().eq(0).text()
    var modal = $(this)
    modal.find(".modal-body .beaImage img").attr("src", imgSrc)
    modal.find(".modal-body .beaTitle h3").text(title)
    modal.find(".modal-body .beaText p").text(paragraf)
})