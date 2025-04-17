import { useFormContext } from 'react-hook-form';
import InputField from '../../components/InputField';


const Login = () => {

    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="grid sm:grid-cols-1 gap-6">
            <InputField
                label="Email"
                type="text"
                id="email"
                name="email"
                placeholder="user@example.com"
                control={control}
                errors={errors}
            />
            <InputField
                label="Mật khẩu"
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                control={control}
                errors={errors}
            />
        </div>
    );
};
export default Login;
