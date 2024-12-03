'use client';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FieldProps } from 'formik';

interface Option {
  id: number;
  name: string;
}

interface SelectProps extends FieldProps {
  options: Option[];
  label?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ field, form, options, label, placeholder }) => {
  const selectedOption = options.find(option => option.name === field.value);

  const handleChange = (value: Option) => {
    form.setFieldValue(field.name, value.name);
  };

  return (
    <div>
      {label && <label className="text-title block text-lg font-medium">{label}</label>}
      <Listbox value={selectedOption} onChange={handleChange}>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default rounded-md bg-white px-5 py-4 text-left sm:text-sm">
            <span className="block truncate">{selectedOption ? selectedOption.name : placeholder}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
              <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute z-20 mt-1 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
            {options.map(option => (
              <ListboxOption
                key={option.id}
                value={option}
                className="hover:bg-theme relative cursor-pointer select-none py-2 pl-3 pr-4 hover:text-white"
              >
                <span className="block truncate">{option.name}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
