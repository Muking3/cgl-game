import { useState } from "react"
import { UseFormReturn, FieldValues, Path } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

type PasswordFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  name: Path<T>
  label?: string
  placeholder?: string
  labelClassName?: string
  onFocus?: () => void;
}

export default function FormPassword<T extends FieldValues>({ form, name, label, placeholder, labelClassName, onFocus }: PasswordFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={`flex justify-start paragraph ${labelClassName}`}>{label}</FormLabel>
          <FormControl>
            <div className="flex justify-items-center space-x-1">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                {...field}
                className="outline-none w-11/12"
                onFocus={onFocus}
              />
              <Button
                type="button"
                onClick={togglePasswordVisibility}
                className="h-10 bg-white hover:bg-white w-1/12">
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  color="black"
                />
              </Button>
            </div>
          </FormControl>
          <FormMessage className="flex justify-start" />
        </FormItem>
      )}
    />
  )
}
