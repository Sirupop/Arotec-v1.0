import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-md border border-border overflow-hidden">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="rounded-none px-3 py-1 h-8 text-xs font-medium"
        >
          EN
        </Button>
        <Button
          variant={language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('de')}
          className="rounded-none px-3 py-1 h-8 text-xs font-medium"
        >
          DE
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;