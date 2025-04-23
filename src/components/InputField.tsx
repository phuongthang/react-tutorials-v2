import { Controller, Control, FieldErrors, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
    className?: string;
    label: string;
    id: string;
    name: keyof T;
    type: string;
    placeholder?: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    defaultValue?: string | number; 
}

const InputField = <T extends FieldValues>({
    label,
    id,
    name,
    type = 'text',
    placeholder,
    control,
    errors,
    defaultValue = '', 
    className,
}: InputFieldProps<T>) => {
    return (
        <div>
            <label htmlFor={id} className="text-gray-600 text-sm sm:mb-2 block">
                {label}
            </label>
            <Controller
            
                name={name as Path<T>}
                
                control={control}
                defaultValue={defaultValue as any} 
                render={({ field }) => (
                    <input
                        {...field}
                        id={id}
                        type={type}
                        value={field.value ?? ''} 
                        placeholder={placeholder}
                        className= {className ? className : `bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all ${
                            errors[name] ? 'border border-red-500' : ''
                        }`}
                        
                    />
                )}
            />
            {errors[name] && <p className="text-sm font-thin text-red-600">{String(errors[name]?.message)}</p>}
        </div>
    );
};

export default InputField;