import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ImageInputProps {
  onChange: (url: string | null) => void;
  onBlur?: () => void;
  name?: string;
  error?: string;
}

export default function ImageInput({ onChange, onBlur, name, error }: ImageInputProps) {
    const {t} = useTranslation('userDetail')
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>(''); 

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFileName(file.name); 
      onChange(fileUrl);
    } else {
      setFileName('');
      onChange(null);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        onBlur={onBlur}
        name={name}
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-left text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white"
      >
        {fileName || t('selectFile')}
      </button>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
