import { UseFormSetError, FieldValues, Path } from "react-hook-form";

const handleApiErrors = <T extends FieldValues>(
    errors: { field: keyof T; message: string }[],
    setError: UseFormSetError<T>
) => {
    errors.forEach((err) => {
        setError(err.field as Path<T>, {
            type: "server",
            message: err.message,
        });
    });
};

export default handleApiErrors;