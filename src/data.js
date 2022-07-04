import uniqid from "uniqid";
import Mostafa from "./images/Mostafa.svg";
import Ahmed from "./images/Ahmed.svg";
import Enas from "./images/Enas.svg";
import Rehab from "./images/Rehab.svg";
import Shorouk from "./images/Shorouk.svg";
import Hanan from "./images/Hanan.svg";
import Amira from "./images/Amira.svg";
import Manal from "./images/Manal.svg";
import Mirna from "./images/Mirna.svg";
import Shereen from "./images/Shereen1.svg";
import Deda from "./images/Deda.svg";
import DrHanaa from "./images/Dr-Hanaa.svg";
import DrAhmed from "./images/Dr-Ahmed.svg";

import ahmedSound from "./audio/ahmed.mp3";
import mostafaSound from "./audio/mostafa.mp3";
import manalSound from "./audio/manal.mp3";
import hananSound from "./audio/hanan.mp3";
import rehabSound from "./audio/rehab.mp3";
import shoroukSound from "./audio/shorouk.mp3";
import drAhmedSound from "./audio/dr-ahmed.mp3";

const students = [
  {
    id: uniqid(),
    name: "مصطفى محمد",
    GPA: "التقدير: جيد",
    imgURL: Mostafa,
    soundURL: mostafaSound,
    description: "أحسن واحد في الدفعة، دمه خفيف، ومش لاقي حظه في الدنيا",
  },
  {
    id: uniqid(),
    name: "أحمد فتحي",
    GPA: "التقدير: جيد",
    imgURL: Ahmed,
    soundURL: ahmedSound,
    description:
      "الدحيح، منفض لنا على جروب الواتس، وعامل فيها من بنها وبيظهر في الأنمي وبس",
  },
  {
    id: uniqid(),
    name: "إيناس محمد",
    GPA: "التقدير: جيد",
    imgURL: Enas,
    description:
      "مشغولة دايما، كل محاضرة تقولنا عندي اجتماع خدمة عامة ولو محضرتش هيعتبروني منقطعة",
  },
  {
    id: uniqid(),
    name: "رحاب عنتر",
    GPA: "التقدير: جيد",
    imgURL: Rehab,
    soundURL: rehabSound,
    description:
      "غلباوية، تعشق ارتكاب الجرائم، والدكتور هيجيب لنا امتحان سهل عشان خاطر أبوها",
  },
  {
    id: uniqid(),
    name: "شروق أشرف",
    GPA: "التقدير: جيد",
    imgURL: Shorouk,
    soundURL: shoroukSound,
    description:
      "بتحب الدكتورة ريهام، عندها طاقة غير مُبررة في المناهدة، وبترد على الجملة بمقال",
  },
  {
    id: uniqid(),
    name: "حنان نادي",
    GPA: "التقدير: جيد",
    imgURL: Hanan,
    soundURL: hananSound,
    description: "مدمنة شاي بلبن، كان هيضيعها التيرم الماضي، وبنحاول نعالجها",
  },
  {
    id: uniqid(),
    name: "أميرة حسين",
    GPA: "التقدير: جيد",
    imgURL: Amira,
    description:
      "عايشة في عالم الخيال، نفسها تعيش على كوكب زمردة، وتدعم كل ما هو شرّ",
  },
  {
    id: uniqid(),
    name: "منال محمد",
    GPA: "التقدير: جيد",
    imgURL: Manal,
    soundURL: manalSound,
    description:
      "بركة الدفعة، كل شوية تهددنا بسحب ملفها من الكلية، وفي الآخر نلاقيها معانا في المحاضرة، موهوبة، عليها زغروطة، مش موجودة في أجدعها دي جي",
  },
  {
    id: uniqid(),
    name: "ميرنا عادل",
    GPA: "التقدير: جيد",
    imgURL: Mirna,
    description:
      "كان حلم حياتها تستفيد من الكلية، لكن في الحقيقة الكلية هي اللي استفادت منها",
  },
  {
    id: uniqid(),
    name: "دعاء حكيم (ديدا حكيم)",
    GPA: "التقدير: جيد",
    imgURL: Deda,
    description:
      "شخصية مهمة، دايمًا مستعجلة، غريبة والأكسنت بتاعتها أغرب منها، وعشان تفهمها، محتاج قاموس من الأمم المتحدة",
  },
  {
    id: uniqid(),
    name: "شيرين حسين",
    GPA: "التقدير: جيد",
    imgURL: Shereen,
    description:
      "شخصية غامضة، متعرفش شكلها بسكوتاية وهي هتعورك، ولا شكلها هتعورك وهي بسكوتاية!",
  },
];

export const doctors = [
  {
    id: uniqid(),
    name: "د. أحمد",
    title: "أستاذ دكتور",
    imgURL: DrAhmed,
    soundURL: drAhmedSound,
    drAhmedSound,
    description:
      "كاريزما، تسأله على الواتس يجاوبك بعد سنة، شرحه جميل، يحببك في المادة، وفي الآخر يديك جيد",
  },
  {
    id: uniqid(),
    name: "د. هناء",
    title: "أستاذ دكتور",
    imgURL: DrHanaa,
    description:
      "مركز استقبال الشكاوى، تسمع مشكلتك، وتلبسك في منهج كبير، وامتحانات مضغوطة، وتضيع تقديرك، ولو جادلت معاها على الواتس، تتقمص وتغادر جروب الواتس",
  },
];

export default students;
