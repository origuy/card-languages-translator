/* Grabbers */

const cardGrabber = document.getElementsByClassName('card');
const breedInfoContainerGrabber = document.getElementsByClassName('breedinfoContainer');
const profilePicGrabber = document.getElementsByClassName('profilePic');
const breedHeaderGrabber = document.getElementsByClassName('breedHeader');
const subBreedHeaderGrabber = document.getElementsByClassName('subBreedHeader');
const breedInfoGrabber = document.getElementsByClassName('breedInfo');
const socialLinksGrabber = document.getElementsByClassName('socialLinks');
const hebrewGrabber = document.getElementById('he');
const langLinkGrabber = document.getElementsByClassName('linkLangWrapper');
const dropdownAddGrabber = document.getElementById('dropdownAdd');
const bodyGrabber = document.getElementById('body');
const mainHeaderGrabber = document.getElementsByClassName('navHeading')[0];
const buttonLangGrabber = document.getElementsByClassName('dropdownBtn')[0];
const browserLang = navigator.language;

class Lang {
    constructor(title,subTitle,info){
        this.title = title;
        this.subTitle = subTitle;
        this.info = info;
    }
}


/* Hebrew */
let corgiHe = new Lang( 'קורגי', 'כלב רועים',  'הוולשי קורגי הוא סוג קטן של כלב רועים שמקורו בוויילס. השם "קורגי" נגזר מהמילים הוולשיות "cor" ו-"ci" (אשר עובר מוטציה ל\'gi\'), כלומר "גמד" ו"כלב", בהתאמה.\
')
let akitaHe = new Lang('אקיטה', 'כלבי שפיץ', 'האקיטה הוא גזע גדול של כלבים שמקורו באזורים ההרריים של צפון יפן. ישנם שני זנים נפרדים של אקיטה: זן יפני, הנקרא בדרך כלל אקיטה אינו (ינו פירושו כלב ביפנית) או אקיטה יפנית, וזן אמריקאי, המכונה אקיטה או אקיטה אמריקאי.');
let goldenHe = new Lang('גולדן רטריוור','כלבי רטריוור וספניאל','הגולדן רטריבר הוא גזע בריטי של כלבי רטריבר בגודל בינוני. הוא מאופיין באופי עדין ומלא חיבה ומעיל זהוב בולט.');
let headerHe = 'גזעי כלבים פופלארים'
let buttonLangHe = 'בחר שפה';

/* English */
let corgiEn = new Lang('Welsh Corgi','herding dog','The Welsh Corgi is a small type of herding dog that originated in Wales. The name "corgi" is derived from the Welsh words "cor" and "ci" (which is mutated to ‘gi’), meaning "dwarf" and "dog", respectively.')

let akitaEn = new Lang('Akita', 'Spitz Dogs', 'The Akita is a large breed of dog originating from the mountainous regions of northern Japan. There are two separate varieties of Akita: a Japanese strain, commonly called Akita Inu (inu means dog in Japanese) or Japanese Akita, and an American strain, known as the Akita or American Akita.');
let goldenEn = new Lang('Golden Retriever','Retriever and Spaniel dogs','The Golden Retriever is a British breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat.'  );
let headerEn = 'Popular Dogs Breeds';
let buttonLangEn = 'Change Languages';

/* France */
let corgiFr = new Lang('Corgi gallois','chien de berger','Le Welsh Corgi est un petit type de chien de berger originaire du Pays de Galles. Le nom "corgi" est dérivé des mots gallois "cor" et "ci" (qui est muté en "gi"), signifiant respectivement "nain" et "chien".')

let akitaFr = new Lang('Akita', 'Chiens Spitz', 'L\'Akita est une grande race de chien originaire des régions montagneuses du nord du Japon. Il existe deux variétés distinctes d\'Akita : une souche japonaise, communément appelée Akita Inu (inu signifie chien en japonais) ou Akita japonais, et une souche américaine, connue sous le nom d\'Akita ou Akita américain.');
let goldenFr = new Lang('Golden Retriever','Chiens retriever et épagneul','Le Golden Retriever est une race britannique de chien retriever de taille moyenne. Il se caractérise par une nature douce et affectueuse et un pelage doré saisissant.'  );
let headerFr = 'Races de chiens populaires';
let buttonLangFr = 'Changer de langue';

/* Italiano */
let corgiIt = new Lang('Corgi gallesi','cane da pastore','Il Welsh Corgi è un piccolo tipo di cane da pastore originario del Galles. Il nome "corgi" deriva dalle parole gallesi "cor" e "ci" (che è mutato in "gi"), che significano rispettivamente "nano" e "cane".')

let akitaIt = new Lang('Akita', 'Cani Spitz', 'L\'Akita è una grande razza di cane originaria delle regioni montuose del nord del Giappone. Esistono due varietà separate di Akita: un ceppo giapponese, comunemente chiamato Akita Inu (inu significa cane in giapponese) o Akita giapponese, e un ceppo americano, noto come Akita o Akita americano.');
let goldenIt = new Lang('Golden Retriever','cani da riporto e spaniel','Il Golden Retriever è una razza britannica di cane da riporto di taglia media. È caratterizzato da una natura gentile e affettuosa e da un sorprendente mantello dorato.'  );
let headerIt = 'Razze di cani popolari';
let buttonLangIt = 'Cambia lingua';

/* spain */
let corgiSp = new Lang('corgi galés','perro pastor','El Welsh Corgi es un pequeño tipo de perro de pastoreo que se originó en Gales. El nombre "corgi" se deriva de las palabras galesas "cor" y "ci" (que se muta a "gi"), que significan "enano" y "perro", respectivamente.')

let akitaSp = new Lang('Akita', 'Perros Pomerania', 'El Akita es una gran raza de perro originaria de las regiones montañosas del norte de Japón. Hay dos variedades separadas de Akita: una variedad japonesa, comúnmente llamada Akita Inu (inu significa perro en japonés) o Akita japonés, y una variedad estadounidense, conocida como Akita o Akita estadounidense.');
let goldenSp = new Lang('perro perdiguero de oro','Perros cobradores y spaniel','El Golden Retriever es una raza británica de perro perdiguero de tamaño mediano. Se caracteriza por un carácter afable y cariñoso y un llamativo pelaje dorado.'  );
let headerEs = 'Razas de perros populares';
let buttonLangEs = 'Cambiar idioma';


let heArray = [corgiHe,akitaHe,goldenHe,headerHe];
let enArray = [corgiEn,akitaEn,goldenEn];
let frArray = [corgiFr,akitaFr,goldenFr];
let itArray = [corgiIt,akitaIt,goldenIt];
let spArray = [corgiSp,akitaSp,goldenSp];

let addLang = (src,alt,href,lang) => {
    let divOpen = document.createElement('div');
    divOpen.className = 'linkLangWrapper'
    divOpen.id = 'linkLangWrapper';
    let flagPic = document.createElement('img');
    flagPic.setAttribute('src', src);
    flagPic.setAttribute('alt', alt);
    flagPic.setAttribute('width', '40');
    let liOpen = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.setAttribute('href',href);
    anchor.setAttribute('class','langLink');
    anchor.setAttribute('class','dropdown-item');
    anchor.innerHTML = lang;
    dropdownAddGrabber.appendChild(divOpen);
    divOpen.appendChild(flagPic);
    divOpen.appendChild(liOpen);
    liOpen.appendChild(anchor); 
}

let start = () =>{
    switch (browserLang) {
        case 'he':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = heArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = heArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = heArray[i].info;

            }
            mainHeaderGrabber.innerHTML = headerHe;
            buttonLangGrabber.innerHTML = buttonLangHe;
            bodyGrabber.style.direction = "rtl"
            
            break;
        case 'en':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = enArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = enArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = enArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerEn;
            buttonLangGrabber.innerHTML = buttonLangEn;
            bodyGrabber.style.direction = "ltr"
            break;
        case 'fr':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = frArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = frArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = frArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerFr;
            buttonLangGrabber.innerHTML = buttonLangFr;
            bodyGrabber.style.direction = "ltr"
            break;
        case 'it':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = itArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = itArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = itArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerIt;
            buttonLangGrabber.innerHTML = buttonLangIt;
            bodyGrabber.style.direction = "ltr"
            break;
        case 'es':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = spArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = spArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = spArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerEs;
            buttonLangGrabber.innerHTML = buttonLangEs;
            bodyGrabber.style.direction = "ltr"
            break;
        
        default:
            break;
    }

}

document.addEventListener('click', (e) => {
    let lang = e.target.innerHTML;
    console.log(lang);
    switch (lang) {
        case 'עברית':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = heArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = heArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = heArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerHe;
            buttonLangGrabber.innerHTML = buttonLangHe;
            bodyGrabber.style.direction = "rtl"
            break;
        case 'English':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = enArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = enArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = enArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerEn;
            buttonLangGrabber.innerHTML = buttonLangEn;
            bodyGrabber.style.direction = "ltr"
            break;
            break;
        case 'Français':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = frArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = frArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = frArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerFr;
            buttonLangGrabber.innerHTML = buttonLangFr;
            bodyGrabber.style.direction = "ltr"
            break;
            break;
        case 'Italiano':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = itArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = itArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = itArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerIt;
            buttonLangGrabber.innerHTML = buttonLangIt;
            bodyGrabber.style.direction = "ltr"
            break;
            break;
        case 'Espanol':
            for(let i = 0; i < breedHeaderGrabber.length; i++){
                breedHeaderGrabber[i].innerHTML = spArray[i].title;
                subBreedHeaderGrabber[i].innerHTML = spArray[i].subTitle;
                breedInfoGrabber[i].innerHTML = spArray[i].info;
            }
            mainHeaderGrabber.innerHTML = headerEs;
            buttonLangGrabber.innerHTML = buttonLangEs;
            bodyGrabber.style.direction = "ltr"
            break;
            break;
        
        default:
            break;
    }

})
addLang('images\\spain (1).png','spain', '#', 'Espanol');



    
