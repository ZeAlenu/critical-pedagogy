
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = (
  ({ value, onChange, placeholder = "Enter phone number", className, ...props }) => {
    return (
      <div className="relative" dir="ltr">
        <PhoneInput
          {...props}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultCountry="IL"
          international
          countryCallingCodeEditable={false}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "[&>.PhoneInputInput]:border-0 [&>.PhoneInputInput]:outline-0 [&>.PhoneInputInput]:ring-0 [&>.PhoneInputInput]:focus:ring-0 [&>.PhoneInputInput]:bg-transparent [&>.PhoneInputInput]:p-0 [&>.PhoneInputInput]:h-auto [&>.PhoneInputInput]:text-left [&>.PhoneInputInput]:flex-1 [&>.PhoneInputInput]:ml-2",
            "[&>.PhoneInputCountrySelect]:border-0 [&>.PhoneInputCountrySelect]:bg-transparent [&>.PhoneInputCountrySelect]:outline-0 [&>.PhoneInputCountrySelect]:mr-0 [&>.PhoneInputCountrySelect]:ml-0 [&>.PhoneInputCountrySelect]:order-[-1]",
            "flex-row text-left",
            className
          )}
        />
      </div>
    );
  }
);

export { CustomPhoneInput as PhoneInput };
