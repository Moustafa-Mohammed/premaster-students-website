import { useState } from "react";
import { v4 as uuid } from "uuid";

import Button from "./Button";
import FormInput from "./FormInput";

function Form() {
  const [user, setUser] = useState({
    username: "",
    studyHours: 0,
  });
  const [GPAMsg, setGPAMsg] = useState("");
  const [textColor, setTextColor] = useState("");

  const { username, studyHours } = user;

  const id = uuid();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (username) {
      case "رحاب": {
        setGPAMsg("حتى لو ما ذاكرتيش يا رحاب، هتجيبي امتياز عشان خاطر أبوكي");
        setTextColor("text-purple-600");
        break;
      }
      case "منال": {
        setGPAMsg(
          "احنا مقدرين ظروفك يا منال وعارفين إن فريدة مطلعة عينك، وقررنا نديكي امتياز"
        );
        setTextColor("text-purple-600");
        break;
      }
      case "مصطفى": {
        setGPAMsg("بتكتبي اسمي ليه، أكيد أنا هجيب امتياز عشان أنا شاطر");
        setTextColor("text-purple-600");
        break;
      }
      case "أحمد": {
        setGPAMsg("يا أحمد أنت دحيح، فكدا كدا هتجيب امتياز");
        setTextColor("text-purple-600");
        break;
      }
      case "شروق": {
        setGPAMsg("متحاوليش يا شروق، انتي كدا كدا معانا في السمر كورس");
        setTextColor("text-red-500");
        break;
      }
    }

    if (
      username === "شيرين" ||
      username === "مروة" ||
      username === "شيماء" ||
      username === "حنان" ||
      username === "أميرة" ||
      username === "ميرنا"
    ) {
      if (studyHours >= 0 && studyHours < 51) {
        setGPAMsg(`معانا في السمر كورس إن شاء الله يا ${username}`);
        setTextColor("text-red-700");
      } else if (studyHours > 50 && studyHours < 76) {
        setGPAMsg(`خلصانة يا ${username}، هتجيبي جيد`);
        setTextColor("text-orange-500");
      } else if (studyHours > 75 && studyHours < 100) {
        setGPAMsg(`محدش هيجيب أكتر من جيد يا ${username}، متتعبيش نفسك`);
        setTextColor("text-orange-500");
      }
    } else {
      setUser({
        username: "",
        studyHours: 0,
      });
    }
  };

  return (
    <form className="max-w-lg mx-auto p-4">
      <h2 className="form-heading mb-4 text-center text-purple-900">
        احتساب التقدير
      </h2>
      <FormInput
        type="text"
        id={`username${id}`}
        area="usernameHelp"
        name="username"
        value={username}
        onChange={handleChange}
        required={true}
      >
        الاسم
      </FormInput>
      <FormInput
        type="number"
        id={`studyHours${id}`}
        area="studyHelp"
        name="studyHours"
        value={studyHours}
        onChange={handleChange}
      >
        عدد ساعات المذاكرة (من 1 إلى 100)
      </FormInput>
      <Button onSubmit={handleSubmit}>احسب التقدير</Button>

      {GPAMsg && (
        <p
          className={`${textColor} my-4 bg-gray-100 p-6 rounded-md shadow-sm text-lg`}
        >
          {GPAMsg}
        </p>
      )}
    </form>
  );
}

export default Form;
