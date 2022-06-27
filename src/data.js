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
import Deda from "./images/Deda.svg";

const students = [
  {
    id: uniqid(),
    name: "مصطفى محمد",
    GPA: "التقدير: جيد",
    imgURL: Mostafa,
    description: "أحسن واحد في الدفعة، دمه خفيف، ومش لاقي حظه في الدنيا",
  },
  {
    id: uniqid(),
    name: "أحمد فتحي",
    GPA: "التقدير: جيد",
    imgURL: Ahmed,
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
    description:
      "غلباوية، تعشق ارتكاب الجرائم، والدكتور هيجيب لنا امتحان سهل عشان خاطر أبوها",
  },
  {
    id: uniqid(),
    name: "شروق أشرف",
    GPA: "التقدير: جيد",
    imgURL: Shorouk,
    description:
      "بتحب الدكتورة ريهام، عندها طاقة غير مُبررة في المناهدة، وبترد على الجملة بمقال",
  },
  {
    id: uniqid(),
    name: "حنان نادي",
    GPA: "التقدير: جيد",
    imgURL: Hanan,
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
    description:
      "بركة الدفعة، كل شوية تهددنا بسحب ملفها من الكلية، وفي الآخر نلاقيها معانا في المحاضرة، تكره الرجال، وتحب الدكتورة هناء",
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
];

export const doctors = [
  {
    id: uniqid(),
    name: "د. أحمد",
    title: "أستاذ دكتور",
    imgURL: Mostafa,
    description:
      "كاريزما، تسأله سؤال يجاوبك بعد سنة، شرحه جميل، يحببك في المادة، وفي الآخر يديك جيد",
  },
];

export default students;
