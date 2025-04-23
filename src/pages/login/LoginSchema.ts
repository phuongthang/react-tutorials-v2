import * as yup from 'yup';

import i18n from '../../i18n/i18n';


    yup.setLocale({
      mixed: {
        required: () => i18n.t('Required',{ ns: 'yupValidate' }),
      },
      string: {
        email: () => i18n.t('Email',{ ns: 'yupValidate' } ),
        min: ({ min }) => i18n.t('Min',  { ns: 'yupValidate', min }),
        max: ({ max }) => i18n.t('Max', { ns: 'yupValidate' , max }),
      },
    });
    
  
export const loginSchema = yup.object({
  email: yup.string().email().required().max(256),
  password: yup.string().required().min(8),
});

export default yup;