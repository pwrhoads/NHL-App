import dayjs, { Dayjs } from "dayjs";
import ArrowButton from "./ArrowButton";
import DatePickerLib from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

interface DatePickerProps {
  selectedDate: Dayjs;
  onDateChange: (date: Dayjs) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrevDay = () => {
    onDateChange(selectedDate.subtract(1, "day"));
  };

  const handleNextDay = () => {
    onDateChange(selectedDate.add(1, "day"));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      onDateChange(dayjs(date));
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-4">
        <ArrowButton onClick={handlePrevDay} direction="left" />
        <div className="relative">
          <div
            className="font-bold cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedDate.format("dddd, MMMM D, YYYY")}
          </div>
          {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2">
              <DatePickerLib
                selected={selectedDate.toDate()}
                onChange={handleDateChange}
                inline
              />
            </div>
          )}
        </div>
        <ArrowButton onClick={handleNextDay} direction="right" />
      </div>
    </div>
  );
};

export default DatePicker;
