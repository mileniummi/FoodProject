import React, { useRef, useState } from "react";
import styles from "./index.module.css";
import { BsCalendarWeek } from "react-icons/all";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface DatePickerFieldProps {
  selectedDate: Date | undefined;
  selectDate: (date: Date) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  selectDate,
  selectedDate,
}) => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setShowCalendar(false));

  const handleCalendarDatePick = (date: Date) => {
    setDate(date);
    selectDate(date);
  };

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => setShowCalendar((prevState) => !prevState)}
        className={styles.container}
      >
        <p>
          Date{" "}
          {selectedDate
            ? new Intl.DateTimeFormat()
                .format(selectedDate)
                .split("/")
                .join(".")
            : "__.__.____"}
        </p>
        <BsCalendarWeek />
      </div>
      {showCalendar && (
        <div ref={ref} className={styles.calendarContainer}>
          <Calendar onChange={handleCalendarDatePick} value={date} />
        </div>
      )}
    </div>
  );
};

export default DatePickerField;
