import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleDotIcon, CircleIcon, LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@/constants/languages";
import { Button } from "../ui/button";
import { useState } from "react";

const LanguagesToggle = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
        >
          <LanguagesIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleChangeLanguage(code)}
          >
            {selectedLanguage === code ? <CircleDotIcon /> : <CircleIcon />}
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguagesToggle };
