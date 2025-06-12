import { Dayjs } from "dayjs";
import ArrowButton from "./ArrowButton";

interface DatePickerProps {
  selectedDate: Dayjs;
  onDateChange: (date: Dayjs) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  const handlePrevDay = () => {
    onDateChange(selectedDate.subtract(1, "day"));
  };

  const handleNextDay = () => {
    onDateChange(selectedDate.add(1, "day"));
  };

  return (
    <div className="flex items-center space-x-4">
      <ArrowButton onClick={handlePrevDay} direction="left" />
      <div className="font-bold">
        {selectedDate.format("dddd, MMMM D, YYYY")}
      </div>
      <ArrowButton onClick={handleNextDay} direction="right" />
    </div>
  );
};

export default DatePicker;
