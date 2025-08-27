import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">
              Arrotec
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.features')}
            </a>
            <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.solutions')}
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              {t('hero.cta.learn')}
            </Button>
            <Button size="sm" className="text-sm font-medium bg-foreground hover:bg-primary-hover">
              {t('hero.cta.demo')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-1">
              <a href="#features" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.features')}
              </a>
              <a href="#solutions" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.solutions')}
              </a>
              <a href="#about" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.about')}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.pricing')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.contact')}
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" className="w-full text-sm font-medium">
                {t('hero.cta.learn')}
              </Button>
              <Button size="sm" className="w-full text-sm font-medium bg-foreground hover:bg-primary-hover">
                {t('hero.cta.demo')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;