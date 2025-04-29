import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-24 h-10 relative bg-blue-500 rounded-full cursor-pointer select-none" onClick={toggleLanguage}>
      {/* Slider */}
      <div
        className={`absolute top-1 left-1 w-10 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          currentLang === 'nl' ? 'translate-x-12' : 'translate-x-0'
        }`}
      />
      {/* Labels */}
      <div className="absolute inset-0 flex items-center justify-between px-3 text-sm font-medium text-gray-600">
        <span className={`${currentLang === 'en' ? 'text-blue-600 font-bold' : ''}`}>EN</span>
        <span className={`${currentLang === 'nl' ? 'text-blue-600 font-bold' : ''}`}>NL</span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
