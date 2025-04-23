import { useFormContext } from 'react-hook-form';
import InputField from '../../components/InputField';
import { useTranslation } from 'react-i18next';


const Login = () => {
    const {t} = useTranslation('login')
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="grid sm:grid-cols-1 gap-6">
            <InputField
                label={t('login forms.Email label')}
                type="text"
                id="email"
                name="email"
                placeholder=""
                control={control}
                errors={errors}
            />
            <InputField
                label={t('login forms.Password label')}
                type="password"
                id="password"
                name="password"
                placeholder=""
                control={control}
                errors={errors}
            />
        </div>
    );
};
export default Login;
