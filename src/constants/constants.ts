import i18n from "../i18n/i18n";
 
export const getCurrentLang = () =>{
    console.log(i18n.language);
    return i18n.language;
}
export const setCurrentLang = (lng: string) =>{
    i18n.changeLanguage(lng);
}

