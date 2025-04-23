import * as yup from 'yup';
import i18n from '../../src/i18n/i18n';

export const setYupLocale = () =>{
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
    
  }
  