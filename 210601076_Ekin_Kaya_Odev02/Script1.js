
const keys = document.querySelector('.keys');
const display = document.querySelector('.sonucGoster');

let gorunenDeger = '0';
let ilkDeger = null;
let islem = null;
let beklenenDeger = false;

sifirla();

function sifirla() {
    display.value = gorunenDeger;
}

keys.addEventListener('click', function(girilen) {
    const element = girilen.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('islem')) {
        islemHesaplama(element.value);
        sifirla();
        return;
    }
    if (element.classList.contains('temizle')) {
        temizle();
        sifirla();
        return;
    }
    if (element.classList.contains('ondalik')) {
        girilenOndalik();
        sifirla();
        return;
    }

    girilenRakam(element.value);
    sifirla();
});

function girilenRakam(sayi) {
    if (beklenenDeger) {
        gorunenDeger = sayi;
        beklenenDeger = false;
    }
    else {
        gorunenDeger = gorunenDeger === '0' ? sayi : gorunenDeger + sayi;
    }

    //console.log(gorunenDeger, ilkDeger, islem, beklenenDeger);
}

function temizle() {
    gorunenDeger = '0';
}

function girilenOndalik() {
    if (!gorunenDeger.includes('.')) {
        gorunenDeger += '.';
    }
}

function islemHesaplama(sonrakiIslem) {
    const deger = parseFloat(gorunenDeger);

    if (islem && beklenenDeger) {
        islem = sonrakiIslem;
        return;
    }

    if (ilkDeger === null) {
        ilkDeger = deger;
    }
    else if (islem) {
        const sonuc = hesapla(ilkDeger, deger, islem);
        gorunenDeger = String(sonuc);
        ilkDeger = sonuc;
    }

    beklenenDeger = true;
    islem = sonrakiIslem;

    //console.log(gorunenDeger, ilkDeger, islem, beklenenDeger)
}

function hesapla(ilkSayi, ikinciSayi, islem) {
    if (islem === '+') {
        return ilkSayi + ikinciSayi;
    }
    else if (islem === '-') {
        return ilkSayi - ikinciSayi;
    }
    else if (islem === '*') {
        return ilkSayi * ikinciSayi;
    }
    else if (islem === '/') {
        return ilkSayi / ikinciSayi;
    }
    return ikinciSayi;
}