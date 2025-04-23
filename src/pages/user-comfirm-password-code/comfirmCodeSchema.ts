



import * as yup from 'yup';
import i18n from '../../i18n/i18n';


yup.setLocale({
  mixed: {
    required: () => i18n.t('Required',{ ns: 'yupValidate' }),
  },
  string: {
    max: ({ max }) => i18n.t('Max', { ns: 'yupValidate' , max }),
  },
});

export const comfirmCodeSchema = yup.object({
    passwordCode:yup.string()
    .required().max(5)
    .matches(/^[0-9]+$/, i18n.t('Number', { ns: 'yupValidate' })),
});

export default yup;