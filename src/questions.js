import uniqid from "uniqid";

const questions = [
  {
    id: uniqid(),
    question: "ما هي المواد الدراسية المقررة في السنة التمهيدية الأولى؟",
    answer:
      "الترم الأول: ثلاث مواد (نصوص ونقد، درسات لغوية متقدمة، تحليل نصي ولغوي) والترم الثاني: ثلاث مواد (تاريخ أدب وحضارة، ترجمة، كتابة أدبية)",
  },
  {
    id: uniqid(),
    question: "كم عدد الساعات المعتمدة المقرر حضورها؟",
    answer: "مش فارقة، المهم تدفع المصاريف",
  },
  {
    id: uniqid(),
    question:
      "هل يُحرم الطالب من الامتحان في حالة عدم حضوره 75% من عدد الساعات المعتمدة؟",
    answer: "ده المكتوب في اللائحة، لكن طالما دفعت المصاريف، فأنت في الأمان",
  },
];
export default questions;
