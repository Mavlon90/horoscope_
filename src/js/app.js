const month1 = prompt('Введите номер месяца: ');;
const day1 = prompt('Введите день месяца: ');

day = parseInt(day1);
month = parseInt(month1);

let sign;

const CAPRICORN = 'capricorn';
const AQUARIUS = 'aquarius';
const PISCES = 'pisces';
const ARIES = 'aries';
const TAURUS = 'taurus';
const GEMINI = 'gemini';
const CANCER = 'cancer';
const LEO = 'leo';
const VIRGO = 'virgo';
const LIBRA = 'libra';
const SCORPIO = 'scorpio';
const SAGITTARIUS = 'sagittarius';

switch(month){
    case 1:
        day <= 19?sign = CAPRICORN:sign = AQUARIUS;
    break;
        case 2:
        day <= 18?sign = AQUARIUS:sign = PISCES;
        break;
    case 3:
        day <= 20?sign = PISCES:sign = ARIES;
        break;
    case 4:
        day <= 20?sign = ARIES:sign = TAURUS;
        break;
    case 5:
        day <= 20?sign = TAURUS:sign = GEMINI;
        break;
    case 6:
        day <= 20?sign = GEMINI:sign = CANCER;
        break;
    case 7:
        day <= 22?sign = CANCER:sign = LEO;
        break;
    case 8:
        day <= 22?sign = LEO:sign = VIRGO;
        break;
    case 9:
        day <= 22?sign = VIRGO:sign = LIBRA;
        break;
    case 10:
        day <= 22?sign = LIBRA:sign = SCORPIO;
        break;
    case 11:
        day <= 22?sign = SCORPIO:sign = SAGITTARIUS;
        break;
    case 12:
        day <= 21?sign = SAGITTARIUS:sign = CAPRICORN;
        break;
    default:
         sign = 'Нет такого знака зодиака';
}

alert(sign);