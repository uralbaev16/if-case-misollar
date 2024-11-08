// IF Masalalari
// 1-masala
{
    let n = 7
    if (n > 0) {
        n++
    } else {
    }
    console.log(n);
}

// 2-masala
{
    let n = 8
    if (n > 0) {
        n++
    } else {
        (n -= 2)
    }
    console.log(n);
}

// 3-masala
{
    let n = 2
    if (n > 0) {
        n++
    } else if (n < 0) {
        (n -= 2)
    } else {
        n = 10
    }
    console.log(n);
}

// 4-masala
{
    let a = 2, b = 4, c = -2, musbat = 0
    if (a > 0) {
        musbat++
    }
    if (b > 0) {
        musbat++
    }
    if (c > 0) {
        musbat++
    }
    console.log(`${musbat} ta Musbat`);
}

// 5-masala
{
    let a = 2, b = 4, c = -2, musbat = 0, manfiy = 0
    if (a > 0) {
        musbat++
    } else if (c < 0) {
        manfiy++
    }
    if (b > 0) {
        musbat++
    } else if (c < 0) {
        manfiy++
    }
    if (c > 0) {
        (musbat++)
    } else if (c < 0) {
        manfiy++
    }
    console.log(`${musbat} ta Musbat,${manfiy} ta Manfiy`);
}

// 6-masala
{
    let a = 50, b = 40
    if (a > b) {
        console.log(`${a} katta ${b} dan`);
    } else if (b > a) {
        console.log(`${b} katta ${a} dan`);
    }
    else {
        console.log("Ikkalasi teng");
    }
}

// 7-masala
{
    let num1 = 10, num2 = 20
    if (num1 < num2) {
        console.log(`${num1} kichik ${num2} dan Tartib raqami 1`);
    } else if (num2 < num1) {
        console.log(`${num2} kichik ${num1} dan Tartib raqami 2`);
    }
}

// 8-masala
{
    let a = 10, b = 5
    if (a > b) {
        console.log(`Kattasi ${a}, Kichigi ${b}`);
    } else if (b > a) {
        console.log(`Kattasi ${b}, Kichigi ${a}`);
    }
}

// 9-masala
{
    let a = 40, b = 20
    if (a > b) {
        let ozgaruvchi = a
        a = b
        b = ozgaruvchi
    }
    console.log(`A = ${a} B = ${b}`);
}

// 10-masala
{
    let a = 50, b = 40
    if (a !== b) {
        a = a + b
        b = a
    } else {
        a = 0
        b = 0
    }
    console.log(`A = ${a} B = ${b}`);
}

// CASE Masalalari
// 1-masala
{
    let a = 5, hafta
    switch (a) {
        case 1:
            hafta = "1-Dushanba"
            break
        case 2:
            hafta = "2-Seshanba"
            break
        case 3:
            hafta = "3-Chorshanba"
            break
        case 4:
            hafta = "4-Payshanba"
            break
        case 5:
            hafta = "5-Juma"
            break
        case 6:
            hafta = "6-Shanba"
            break
        case 7:
            hafta = "7-Yakshanba"
            break
        default:
            hafta = "Bunday hafta kuni yo'q"
    }
    console.log(hafta);

}

// 2-masala
{
    let k = 5, baho
    switch (k) {
        case 1:
            baho = "Yomon"
            break;
        case 2:
            baho = "Qoniqarsiz"
            break;
        case 3:
            baho = "Qoniqarli"
            break;
        case 4:
            baho = "Yaxshi"
            break;
        case 5:
            baho = "A'lo"
            break;
        default:
            baho = "Xato"
    }
    console.log(baho);
}

// 3-masala
{
    let raqam = 14, fasl
    switch (raqam) {
        case 12:
        case 1:
        case 2:
            fasl = "Qish";
            break;
        case 3:
        case 4:
        case 5:
            fasl = "Bahor";
            break;
        case 6:
        case 7:
        case 8:
            fasl = "Yoz";
            break;
        case 9:
        case 10:
        case 11:
            fasl = "Kuz";
            break;
        default:
            fasl = "mavjud emas";
    }
    console.log(`${raqam}-chi oy ${fasl}`);
}


// 4-masala
{
    let oy = 3, kun
    switch (oy) {
        case 1:
            kun = "Yanvar 31"
            break
        case 2:
            kun = "Fevral 28"
            break
        case 3:
            kun = "Mart 31"
            break
        case 4:
            kun = "Aprel 30"
            break
        case 5:
            kun = "May 31"
            break
        case 6:
            kun = "Iyun 30"
            break
        case 7:
            kun = "Iyul 31"
            break
        case 8:
            kun = "Avgust 31"
            break
        case 9:
            kun = "Sentabr 30"
            break
        case 10:
            kun = "Oktabr 31"
            break
        case 11:
            kun = "Noyabr 30"
            break
        case 12:
            kun = "Dekabr 31"
            break
        default:
            kun = "Bunday oy yo'q"
    }
    console.log(`${kun}`);
}


// 5-masala
{
    let a = 10, b = 5, amal = 1, natija
    switch (amal) {
        case 1:
            natija = a + b;
            console.log(`Natija: ${natija}`);
            break;
        case 2:
            natija = a - b;
            console.log(`Natija: ${natija}`);
            break;
        case 3:
            natija = a / b;
            console.log(`Natija: ${natija}`);
            break;
        case 4:
            natija = a * b;
            console.log(`Natija: ${natija}`);
            break;
        default:
            console.log("Noto'g'ri amal qiymati");
    }
}


// 6-masala
{
    let birlik = 1, uzunlik = 1, uzunlikMt

    switch (birlik) {
        case 1:
            uzunlikMt = uzunlik * 0.1;
            console.log(`Desimetrdan metrga: ${uzunlikMt} metr`);
            break;
        case 2:
            uzunlikMt = uzunlik * 1000;
            console.log(`Kilometrdan metrga: ${uzunlikMt} metr`);
            break;
        case 3:
            uzunlikMt = uzunlik;
            console.log(`Metrda o'zgarish yo'q: ${uzunlikMt} metr`);
            break;
        case 4:
            uzunlikMt = uzunlik * 0.001;
            console.log(`Millimetrdan metrga: ${uzunlikMt} metr`);
            break;
        case 5:
            uzunlikMt = uzunlik * 0.01;
            console.log(`Santimetrdan metrga: ${uzunlikMt} metr`);
            break;
        default:
            console.log("Noto'g'ri birlik raqami");
    }
}


// 7-masala
{
    let birlik = 4, ogirlik = 1, ogirlikKg
    switch (birlik) {
        case 1:
            ogirlikKg = ogirlik
            console.log(`${ogirlik} Kilogramda o'zgarish yo'q ${ogirlikKg}`);
            break;
        case 2:
            ogirlikKg = ogirlik * 1e-6
            console.log(`${ogirlik} Milligramm = kg ${ogirlikKg}kg`);
            break;
        case 3:
            ogirlikKg = ogirlik * 0.001
            console.log(`${ogirlik} Gramm = kg ${ogirlikKg}kg`);
            break;
        case 4:
            ogirlikKg = ogirlik * 1000
            console.log(`${ogirlik} Tonna = kg ${ogirlikKg}kg`);
            break;
        case 5:
            ogirlikKg = ogirlik * 100
            console.log(`${ogirlik} Setner = kg ${ogirlikKg}kg`);
            break;
        default:
            console.log("Noto'g'ri birlik raqami");
    }
}


// 8-masala
{
    let d = 30, m = 2, OyNomi
    switch (m) {
        case 1:
            OyNomi = "Yanvar"
            break;
        case 2:
            OyNomi = "Fevral"
            break;
        case 3:
            OyNomi = "Mart"
            break;
        case 4:
            OyNomi = "Aprel"
            break;
        case 5:
            OyNomi = "May"
            break;
        case 6:
            OyNomi = "Iyun"
            break;
        case 7:
            OyNomi = "Iyul"
            break;
        case 9:
            OyNomi = "Sentabr"
            break;
        case 10:
            OyNomi = "Oktabr"
            break;
        case 11:
            OyNomi = "Noyabr"
            break;
        case 12:
            OyNomi = "Dekabr"
            break;
        default:
            console.log("natog'ri oy raqami");
    }
    console.log(`${d}-chi ${OyNomi}`);
}
