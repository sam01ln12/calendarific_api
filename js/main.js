let url = 'https://calendarific.com/api/v2/holidays';
let api_key = 'ae861d1de3c14a0f8922e45f84bdae1dde18e9a0';
let year = document.querySelector("#year_select").value;


let client = new Calendar(url, api_key, year);

document.querySelector("#search").addEventListener('click', (e)=> {
    let keyword = document.querySelector("#country_select").value;
    let countries = [
        {
          "code": "af",
          "name": "Afghanistan",
          "flag_code": "af"
        },
        {
          "code": "al",
          "name": "Albania",
          "flag_code": "al"
        },
        {
          "code": "dz",
          "name": "Algeria",
          "flag_code":"ag"
        },
        {
          "code": "ad",
          "name": "Andorra",
          "flag_code":"an"
        },
        {
          "code": "ao",
          "name": "Angola",
          "flag_code":"ao"
        },
        {
          "code": "ag",
          "name": "Antigua And Barbuda",
          "flag_code":"ac"
        },
        {
          "code": "ar",
          "name": "Argentina",
          "flag_code":"ar"
        },
        {
          "code": "au",
          "name": "Australia",
          "flag_code":"as"
        },
        {
          "code": "at",
          "name": "Austria",
          "flag_code":"au"
        },
        {
          "code": "az",
          "name": "Azerbaijan",
          "flag_code":"aj"
        },
        {
          "code": "bs",
          "name": "Bahamas",
          "flag_code":"bf"
        },
        {
          "code": "bh",
          "name": "Bahrain",
          "flag_code":"ba"
        },
        {
          "code": "bd",
          "name": "Bangladesh",
          "flag_code":"bg"
        },
        {
          "code": "bb",
          "name": "Barbados",
          "flag_code":"bb"
        },
        {
          "code": "by",
          "name": "Belarus",
          "flag_code":"bo"
        },
        {
          "code": "be",
          "name": "Belgium",
          "flag_code":"be"
        },
        {
          "code": "bz",
          "name": "Belize",
          "flag_code":"bh"
        },
        {
          "code": "bj",
          "name": "Benin",
          "flag_code":"bn"
        },
        {
          "code": "bt",
          "name": "Bhutan",
          "flag_code":"bt"
        },
        {
          "code": "bo",
          "name": "Bolivia",
          "flag_code":"bl"
        },
        {
          "code": "ba",
          "name": "Bosnia And Herzegovina",
          "flag_code":"bk"
        },
        {
          "code": "bw",
          "name": "Botswana",
          "flag_code":"bc"
        },
        {
          "code": "br",
          "name": "Brazil",
          "flag_code":"br"
        },
        {
          "code": "bn",
          "name": "Brunei Darussalam",
          "flag_code":"bx"
        },
        {
          "code": "bg",
          "name": "Bulgaria",
          "flag_code":"bu"
        },
        {
          "code": "bf",
          "name": "Burkina Faso",
          "flag_code":"uv"
        },
        {
          "code": "bi",
          "name": "Burundi",
          "flag_code":"by"
        },
        {
          "code": "kh",
          "name": "Cambodia",
          "flag_code":"cb"
        },
        {
          "code": "cm",
          "name": "Cameroon",
          "flag_code":"cm"
        },
        {
          "code": "ca",
          "name": "Canada",
          "flag_code":"ca"
        },
        {
          "code": "cv",
          "name": "Cape Verde",
          "flag_code":"cv"
        },
        {
          "code": "cf",
          "name": "Central African Republic",
          "flag_code":"ct"
        },
        {
          "code": "td",
          "name": "Chad",
          "flag_code":"cd"
        },
        {
          "code": "cl",
          "name": "Chile",
          "flag_code":"ci"
        },
        {
          "code": "cn",
          "name": "China",
          "flag_code":"ch"
        },
        {
          "code": "co",
          "name": "Colombia",
          "flag_code":"co"
        },
        {
          "code": "km",
          "name": "Comoros",
          "flag_code":"cn"
        },
        {
          "code": "cg",
          "name": "Congo",
          "flag_code":"cg"
        },
        {
          "code": "cd",
          "name": "Congo, Democratic Republic",
          "flag_code":"congo"
        },
        {
          "code": "cr",
          "name": "Costa Rica",
          "flag_code":"cs"
        },
        {
          "code": "ci",
          "name": "Cote D'Ivoire",
          "flag_code":"iv"
        },
        {
          "code": "hr",
          "name": "Croatia",
          "flag_code":"hr"
        },
        {
          "code": "cu",
          "name": "Cuba",
          "flag_code":"cu"
        },
        {
          "code": "cy",
          "name": "Cyprus",
          "flag_code":"cy"
        },
        {
          "code": "cz",
          "name": "Czech Republic",
          "flag_code":"ez"
        },
        {
          "code": "dk",
          "name": "Denmark",
          "flag_code":"da"
        },
        {
          "code": "dj",
          "name": "Djibouti",
          "flag_code":"dj"
        },
        {
          "code": "dm",
          "name": "Dominica",
          "flag_code":"do"
        },
        {
          "code": "do",
          "name": "Dominican Republic",
          "flag_code":"dr"
        },
        {
          "code": "ec",
          "name": "Ecuador",
          "flag_code":"ec"
        },
        {
          "code": "eg",
          "name": "Egypt",
          "flag_code":"eg"
        },
        {
          "code": "sv",
          "name": "El Salvador",
          "flag_code":"es"
        },
        {
          "code": "gq",
          "name": "Equatorial Guinea",
          "flag_code":"ek"
        },
        {
          "code": "er",
          "name": "Eritrea",
          "flag_code":"er"
        },
        {
          "code": "ee",
          "name": "Estonia",
          "flag_code":"en"
        },
        {
          "code": "et",
          "name": "Ethiopia",
          "flag_code":"et"
        },
        {
          "code": "fj",
          "name": "Fiji",
          "flag_code":"fj"
        },
        {
          "code": "fi",
          "name": "Finland",
          "flag_code":"fi"
        },
        {
          "code": "fr",
          "name": "France",
          "flag_code":"fr"
        },
        {
          "code": "ga",
          "name": "Gabon",
          "flag_code":"gb"
        },
        {
          "code": "gm",
          "name": "Gambia",
          "flag_code":"ga"
        },
        {
          "code": "ge",
          "name": "Georgia",
          "flag_code":"gg"
        },
        {
          "code": "de",
          "name": "Germany",
          "flag_code":"gm"
        },
        {
          "code": "gh",
          "name": "Ghana",
          "flag_code":"gh"
        },
        {
          "code": "gi",
          "name": "Gibraltar"
        },
        {
          "code": "gr",
          "name": "Greece",
          "flag_code":"gr"
        },
        {
          "code": "gd",
          "name": "Grenada",
          "flag_code":"gj"
        },
        {
          "code": "gt",
          "name": "Guatemala",
          "flag_code":"gt"
        },
        {
          "code": "gn",
          "name": "Guinea",
          "flag_code":"gv"
        },
        {
          "code": "gw",
          "name": "Guinea-Bissau",
          "flag_code":"pu"
        },
        {
          "code": "gy",
          "name": "Guyana",
          "flag_code":"gy"
        },
        {
          "code": "ht",
          "name": "Haiti",
          "flag_code":"ha"
        },
        {
          "code": "va",
          "name": "Holy See (Vatican City State)",
          "flag_code":"vt"
        },
        {
          "code": "hn",
          "name": "Honduras",
          "flag_code":"ho"
        },
        {
          "code": "hu",
          "name": "Hungary",
          "flag_code":"hu"
        },
        {
          "code": "is",
          "name": "Iceland",
          "flag_code":"ic"
        },
        {
          "code": "in",
          "name": "India",
          "flag_code":"in"
        },
        {
          "code": "id",
          "name": "Indonesia",
          "flag_code":"id"
        },
        {
          "code": "ir",
          "name": "Iran, Islamic Republic Of",
          "flag_code":"ir"
        },
        {
          "code": "iq",
          "name": "Iraq",
          "flag_code":"iz"
        },
        {
          "code": "ie",
          "name": "Ireland",
          "flag_code":"ei"
        },
        {
          "code": "il",
          "name": "Israel",
          "flag_code":"is"
        },
        {
          "code": "it",
          "name": "Italy",
          "flag_code":"it"
        },
        {
          "code": "jm",
          "name": "Jamaica",
          "flag_code":"jm"
        },
        {
          "code": "jp",
          "name": "Japan",
          "flag_code":"ja"
        },
        {
          "code": "jo",
          "name": "Jordan",
          "flag_code":"jo"
        },
        {
          "code": "kz",
          "name": "Kazakhstan",
          "flag_code":"kz"
        },
        {
          "code": "ke",
          "name": "Kenya",
          "flag_code":"ke"
        },
        {
          "code": "ki",
          "name": "Kiribati",
          "flag_code":"ke"
        },
        {
          "code": "kr",
          "name": "Korea South",
          "flag_code":"ks"
        },
        {
          "code": "kw",
          "name": "Kuwait",
          "flag_code":"ku"
        },
        {
          "code": "kg",
          "name": "Kyrgyzstan",
          "flag_code":"kg"
        },
        {
          "code": "la",
          "name": "Lao People's Democratic Republic",
          "flag_code":"la"
        },
        {
          "code": "lv",
          "name": "Latvia",
          "flag_code":"lg"
        },
        {
          "code": "lb",
          "name": "Lebanon",
          "flag_code":"le"
        },
        {
          "code": "ls",
          "name": "Lesotho",
          "flag_code":"lt"
        },
        {
          "code": "lr",
          "name": "Liberia",
          "flag_code":"li"
        },
        {
          "code": "ly",
          "name": "Libyan Arab Jamahiriya",
          "flag_code":"ly"
        },
        {
          "code": "li",
          "name": "Liechtenstein",
          "flag_code":"ls"
        },
        {
          "code": "lt",
          "name": "Lithuania",
          "flag_code":"lh"
        },
        {
          "code": "lu",
          "name": "Luxembourg",
          "flag_code":"lu"
        },
        {
          "code": "mk",
          "name": "Macedonia",
          "flag_code":"mk"
        },
        {
          "code": "mg",
          "name": "Madagascar",
          "flag_code":"ma"
        },
        {
          "code": "mw",
          "name": "Malawi",
          "flag_code":"mi"
        },
        {
          "code": "my",
          "name": "Malaysia",
          "flag_code":"my"
        },
        {
          "code": "mv",
          "name": "Maldives",
          "flag_code":"mv"
        },
        {
          "code": "ml",
          "name": "Mali",
          "flag_code":"ml"
        },
        {
          "code": "mt",
          "name": "Malta",
          "flag_code":"mt"
        },
        {
          "code": "mh",
          "name": "Marshall Islands",
          "flag_code":"rm"
        },
        {
          "code": "mr",
          "name": "Mauritania",
          "flag_code":"mr"
        },
        {
          "code": "mu",
          "name": "Mauritius",
          "flag_code":"mp"
        },
        {
          "code": "mx",
          "name": "Mexico",
          "flag_code":"mx"
        },
        {
          "code": "fm",
          "name": "Micronesia, Federated States Of",
          "flag_code":"fm"
        },
        {
          "code": "md",
          "name": "Moldova",
          "flag_code":"md"
        },
        {
          "code": "mc",
          "name": "Monaco",
          "flag_code":"mn"
        },
        {
          "code": "mn",
          "name": "Mongolia",
          "flag_code":"mg"
        },
        {
          "code": "me",
          "name": "Montenegro",
          "flag_code":"mj"
        },
        {
          "code": "ma",
          "name": "Morocco",
          "flag_code":"mo"
        },
        {
          "code": "mz",
          "name": "Mozambique",
          "flag_code":"mz"
        },
        {
          "code": "mm",
          "name": "Myanmar",
          "flag_code":"bm"
        },
        {
          "code": "na",
          "name": "Namibia",
          "flag_code":"wa"
        },
        {
          "code": "nr",
          "name": "Nauru",
          "flag_code":"nr"
        },
        {
          "code": "np",
          "name": "Nepal",
          "flag_code":"np"
        },
        {
          "code": "nl",
          "name": "Netherlands",
          "flag_code":"nl"
        },
        {
          "code": "nz",
          "name": "New Zealand",
          "flag_code":"nz"
        },
        {
          "code": "ni",
          "name": "Nicaragua",
          "flag_code":"nu"
        },
        {
          "code": "ne",
          "name": "Niger",
          "flag_code":"ng"
        },
        {
          "code": "ng",
          "name": "Nigeria",
          "flag_code":"ni"
        },
        {
          "code": "no",
          "name": "Norway",
          "flag_code":"no"
        },
        {
          "code": "om",
          "name": "Oman",
          "flag_code":"mu"
        },
        {
          "code": "pk",
          "name": "Pakistan",
          "flag_code":"pk"
        },
        {
          "code": "pw",
          "name": "Palau",
          "flag_code":"ps"
        },
        {
          "code": "pa",
          "name": "Panama",
          "flag_code":"pm"
        },
        {
          "code": "pg",
          "name": "Papua New Guinea",
          "flag_code":"pp"
        },
        {
          "code": "py",
          "name": "Paraguay",
          "flag_code":"pa"
        },
        {
          "code": "pe",
          "name": "Peru",
          "flag_code":"pe"
        },
        {
          "code": "ph",
          "name": "Philippines",
          "flag_code":"rp"
        },
        {
          "code": "pl",
          "name": "Poland",
          "flag_code":"pl"
        },
        {
          "code": "pt",
          "name": "Portugal",
          "flag_code":"po"
        },
        {
          "code": "qa",
          "name": "Qatar",
          "flag_code":"qa"
        },
        {
          "code": "ro",
          "name": "Romania",
          "flag_code":"ro"
        },
        {
          "code": "ru",
          "name": "Russia",
          "flag_code":"rs"
        },
        {
          "code": "rw",
          "name": "Rwanda",
          "flag_code":"rw"
        },
        {
          "code": "kn",
          "name": "Saint Kitts And Nevis",
          "flag_code":"sc"
        },
        {
          "code": "lc",
          "name": "Saint Lucia",
          "flag_code":"st"
        },
        {
          "code": "ws",
          "name": "Samoa",
          "flag_code":"ws"
        },
        {
          "code": "sm",
          "name": "San Marino",
          "flag_code":"sm"
        },
        {
          "code": "st",
          "name": "Sao Tome And Principe",
          "flag_code":"tp"
        },
        {
          "code": "sa",
          "name": "Saudi Arabia",
          "flag_code":"sa"
        },
        {
          "code": "sn",
          "name": "Senegal",
          "flag_code":"sg"
        },
        {
          "code": "rs",
          "name": "Serbia",
          "flag_code":"ri"
        },
        {
          "code": "sc",
          "name": "Seychelles",
          "flag_code":"se"
        },
        {
          "code": "sl",
          "name": "Sierra Leone",
          "flag_code":"sl"
        },
        {
          "code": "sg",
          "name": "Singapore",
          "flag_code":"sn"
        },
        {
          "code": "sk",
          "name": "Slovakia",
          "flag_code":"lo"
        },
        {
          "code": "si",
          "name": "Slovenia",
          "flag_code":"si"
        },
        {
          "code": "sb",
          "name": "Solomon Islands",
          "flag_code":"bp"
        },
        {
          "code": "so",
          "name": "Somalia",
          "flag_code":"so"
        },
        {
          "code": "za",
          "name": "South Africa",
          "flag_code":"sf"
        },
        {
          "code": "es",
          "name": "Spain",
          "flag_code":"sp"
        },
        {
          "code": "lk",
          "name": "Sri Lanka",
          "flag_code":"ce"
        },
        {
          "code": "sd",
          "name": "Sudan",
          "flag_code":"su"
        },
        {
          "code": "sr",
          "name": "Suriname",
          "flag_code":"ns"
        },
        {
          "code": "se",
          "name": "Sweden",
          "flag_code":"sw"
        },
        {
          "code": "ch",
          "name": "Switzerland",
          "flag_code":"sz"
        },
        {
          "code": "sy",
          "name": "Syrian Arab Republic",
          "flag_code":"sy"
        },
        {
          "code": "tj",
          "name": "Tajikistan",
          "flag_code":"ti"
        },
        {
          "code": "tz",
          "name": "Tanzania",
          "flag_code":"tz"
        },
        {
          "code": "th",
          "name": "Thailand",
          "flag_code":"th"
        },
        {
          "code": "tl",
          "name": "Timor-Leste",
          "flag_code":"tt"
        },
        {
          "code": "tg",
          "name": "Togo",
          "flag_code":"to"
        },
        {
          "code": "to",
          "name": "Tonga",
          "flag_code":"tn"
        },
        {
          "code": "tt",
          "name": "Trinidad And Tobago",
          "flag_code":"td"
        },
        {
          "code": "tn",
          "name": "Tunisia",
          "flag_code":"ts"
        },
        {
          "code": "tr",
          "name": "Turkey",
          "flag_code":"tu"
        },
        {
          "code": "tm",
          "name": "Turkmenistan",
          "flag_code":"tx"
        },
        {
          "code": "tv",
          "name": "Tuvalu",
          "flag_code":"tv"
        },
        {
          "code": "ug",
          "name": "Uganda",
          "flag_code":"ug"
        },
        {
          "code": "ua",
          "name": "Ukraine",
          "flag_code":"up"
        },
        {
          "code": "ae",
          "name": "United Arab Emirates",
          "flag_code":"ae"
        },
        {
          "code": "gb",
          "name": "United Kingdom",
          "flag_code":"uk"
        },
        {
          "code": "us",
          "name": "USA",
          "flag_code":"us"
        },
        {
          "code": "uy",
          "name": "Uruguay",
          "flag_code":"uy"
        },
        {
          "code": "uz",
          "name": "Uzbekistan",
          "flag_code":"uz"
        },
        {
          "code": "vu",
          "name": "Vanuatu",
          "flag_code":"nh"
        },
        {
          "code": "ve",
          "name": "Venezuela",
          "flag_code":"ve"
        },
        {
          "code": "vn",
          "name": "Vietnam",
          "flag_code":"vm"
        },
        {
          "code": "ye",
          "name": "Yemen",
          "flag_code":"ym"
        },
        {
          "code": "zm",
          "name": "Zambia",
          "flag_code":"za"
        },
        {
          "code": "zw",
          "name": "Zimbabwe",
          "flag_code":"zi"
        }
      ]
      let keyword1 = keyword.charAt(0).toUpperCase() + keyword.slice(1);
      let flag;
      for (let i = 0; i<countries.length; i++) {
          if (keyword1 == countries[i].name) {
              keyword1 = countries[i].code;
              flag = countries[i].flag_code;
              break;
          }
      }
    client.search(keyword1, flag);
})
