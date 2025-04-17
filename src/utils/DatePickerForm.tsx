import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

interface DatePickerProps {
  value?: string;
  onChange: (date: string) => void;
  error?: string;
  className?: string;
}

const DatePickerForm = ({
  value = "",
  onChange,
  error,
  className = "",
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(value);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  return (
    <Flatpickr
      value={selectedDate}
      options={{
        dateFormat: "Y-m-d",
        maxDate: "today",
      }}
      onChange={(dates) => {
        const formattedDate = dates[0]?.toISOString().split("T")[0] || "";
        setSelectedDate(formattedDate);
        onChange(formattedDate);
      }}
      className={`${className} ${error ? "border border-red-500" : ""}`}
    />
  );
};

export default DatePickerForm;