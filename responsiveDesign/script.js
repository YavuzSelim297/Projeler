function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    var burger = document.getElementById("hamburger");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function control() {
    var isim  = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var mesaj = document.getElementById("message").value.trim();

    if (isim === "" || email === "" || mesaj === "") {
        alert("Boş alan bırakmayınız!");
        return;
    }
    document.getElementById("iletisimForm").submit();
}

function registerKontrol() {
    var kullaniciAdi = document.getElementById("kullaniciAdi").value.trim();
    var eposta = document.getElementById("Eposta").value.trim();
    var sifre = document.getElementById("Sifre").value;
    var sifreTekrar = document.getElementById("SifreTekrar").value;
  
    if (!kullaniciAdi || !eposta || !sifre || !sifreTekrar) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
  
    if (sifre !== sifreTekrar) {
      alert("Şifreler uyuşmuyor.");
      return;
    }
  
    alert("Kayıt başarılı!");
    document.getElementById("registerForm").submit();
    window.location.href="index.html"
  }