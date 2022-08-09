import React, { useState } from "react";
import Select from "@/components/Events/FilterForm/CustomSelect";
import DatePickerField from "@/components/UI/DatePickerField";

interface FormFields {
  guestNumber: number | undefined;
  eventType: string | undefined;
  date: Date | undefined;
}

const FilterForm = () => {
  const [formData, setFormData] = useState<FormFields>({
    guestNumber: undefined,
    eventType: undefined,
    date: undefined,
  });

  return (
    <form>
      <Select
        text="Guest number"
        options={[
          { value: "any", name: "any" },
          { value: "1", name: "1" },
          { value: "2", name: "2" },
          { value: "3", name: "3" },
          { value: "4", name: "4" },
        ]}
      />
      <Select
        text="Event type"
        options={[
          { value: "any", name: "any" },
          { value: "Breakfast", name: "Breakfast" },
          { value: "Lunch", name: "Lunch" },
          { value: "Dinner", name: "Dinner" },
          { value: "Other", name: "Other" },
        ]}
      />
      <DatePickerField
        selectedDate={formData.date}
        selectDate={(date) =>
          setFormData((prevState) => ({ ...prevState, date }))
        }
      />
    </form>
  );
};

export default FilterForm;
