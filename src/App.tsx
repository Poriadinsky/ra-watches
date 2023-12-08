import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { List } from "./components/List";
import "./App.css";
import { Form } from "./components/Form";
import * as moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

interface IClock {
  id: string;
  title: string;
  timeZone: string;
}

export default function App() {
  const [clocks, setClock] = useState<IClock[]>([]);

  const [form, setForm] = useState({
    title: "",
    timeZone: "",
  });

  const handleAddClock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e.target);
    setClock((p) => [
      ...p,
      { id: uuidv4(), title: form.title, timeZone: form.timeZone },
    ]);
    setForm({ title: "", timeZone: "" });
  };

  const handleRemoveClock = (id: string) => {
    setClock((prev) => prev.filter((b) => b.id !== id));
  };

  console.log(clocks);
  return (
    <div className="contaiter">
      <Form
        title="clock-input"
        onChange={handleAddClock}
        onSubmit={handleSubmit}
        formTitle={form.title}
        formTimeZone={form.timeZone}
      />
      <List items={clocks} onClick={handleRemoveClock} />
    </div>
  );
}
