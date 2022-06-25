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

const students = [
  {
    id: uniqid(),
    name: "مصطفى محمد",
    GPA: "جيد",
    imgURL: Mostafa,
    description: "أحسن واحد في الدفعة، دمه خفيف، ومش لاقي حظه في الدنيا",
  },
  {
    id: uniqid(),
    name: "أحمد فتحي",
    GPA: "جيد",
    imgURL: Ahmed,
    description:
      "الدحيح، منفض لنا على جروب الواتس، وعامل فيها من بنها وبيظهر في الأنمي وبس",
  },
  {
    id: uniqid(),
    name: "إيناس محمد",
    GPA: "جيد",
    imgURL: Enas,
    description:
      "مشغولة دايما، كل محاضرة تقولنا عندي اجتماع خدمة عامة ولو محضرتش هيعتبروني منقطعة",
  },
  {
    id: uniqid(),
    name: "رحاب عنتر",
    GPA: "جيد",
    imgURL: Rehab,
    description:
      "غلباوية، تعشق ارتكاب الجرائم، والدكتور هيجيب لنا امتحان سهل عشان خاطر أبوها",
  },
  {
    id: uniqid(),
    name: "شروق أشرف",
    GPA: "جيد",
    imgURL: Shorouk,
    description: "بتحب الدكتورة ريهام، ومصطفى هيجيب لها شلل قريب",
  },
  {
    id: uniqid(),
    name: "حنان نادي",
    GPA: "جيد",
    imgURL: Hanan,
    description: "مدمنة شاي بلبن، كان هيضيعها التيرم الماضي، وبنحاول نعالجها،",
  },
  {
    id: uniqid(),
    name: "أميرة حسين",
    GPA: "جيد",
    imgURL: Amira,
    description:
      "عايشة في عالم الخيال، نفسها تعيش على كوكب زمردة، وتدعم كل ما هو شرّ",
  },
  {
    id: uniqid(),
    name: "منال محمد",
    GPA: "جيد",
    imgURL: Manal,
    description: "تكره الرجال، وتحب الدكتورة هناء",
  },
  {
    id: uniqid(),
    name: "ميرنا عادل",
    GPA: "جيد",
    imgURL: Mirna,
    description:
      "كان حلم حياتها تستفيد من الكلية، لكن الكلية هي اللي استفادت منها",
  },
];

export default students;
