import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'BAFA-Ready Platform',
    'hero.title.the': 'The',
    'hero.title.smart': 'smart platform',
    'hero.title.for': 'for',
    'hero.title.audits': 'energy audits',
    'hero.description': 'Arrotec connects companies and auditors, automates processes, and makes energy efficiency simple, transparent, and eligible for funding.',
    'hero.cta.demo': 'Request Demo',
    'hero.cta.learn': 'Learn More',
    'hero.compliance.bafa': 'BAFA-compliant',
    'hero.compliance.iso': 'ISO 50001',
    'hero.compliance.gdpr': 'GDPR-ready',
    
    // Features Section
    'features.title': 'Built for',
    'features.title.precision': 'precision',
    'features.description': 'Every feature designed to streamline energy auditing from assessment to funding approval.',
    'features.funding.title': 'Digital funding applications',
    'features.funding.description': 'BAFA-ready applications with automated compliance',
    'features.funding.expanded': 'Our intelligent platform pre-fills all required BAFA forms, ensuring 100% compliance with current regulations. Advanced validation checks prevent common errors, while automated document generation saves weeks of manual work. Integration with government databases provides real-time status updates and streamlined submission processes.',
    'features.reporting.title': 'Automated reporting',
    'features.reporting.description': 'DIN EN 16247 & ISO 50001 compliant reports',
    'features.reporting.expanded': 'Generate comprehensive energy audit reports that meet all regulatory standards automatically. Our AI-powered system analyzes your data, identifies optimization opportunities, and creates professional documentation complete with charts, recommendations, and compliance certificates. Export options include PDF, Excel, and XML formats for seamless integration.',
    'features.marketplace.title': 'Auditor marketplace',
    'features.marketplace.description': 'Connect with verified energy audit professionals',
    'features.marketplace.expanded': 'Access our curated network of certified energy auditors with proven track records. Advanced matching algorithms connect you with specialists in your industry and region. Transparent ratings, detailed profiles, and integrated project management ensure successful collaborations from initial consultation to final report delivery.',
    'features.documentation.title': 'Compliant documentation',
    'features.documentation.description': 'Secure storage and structured data management',
    'features.documentation.expanded': 'Enterprise-grade security protects your sensitive energy data with end-to-end encryption and GDPR compliance. Automated backups, version control, and audit trails ensure data integrity. Smart categorization and search functions make historical data easily accessible for follow-up audits and regulatory requirements.',
    'common.readMore': 'Read more',
    'common.showLess': 'Show less'
  },
  de: {
    // Navigation
    'nav.features': 'Funktionen',
    'nav.solutions': 'Lösungen',
    'nav.about': 'Über uns',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.badge': 'BAFA-konforme Plattform',
    'hero.title.the': 'Die',
    'hero.title.smart': 'intelligente Plattform',
    'hero.title.for': 'für',
    'hero.title.audits': 'Energieaudits',
    'hero.description': 'Arrotec verbindet Unternehmen und Auditoren, automatisiert Prozesse und macht Energieeffizienz einfach, transparent und förderfähig.',
    'hero.cta.demo': 'Demo anfordern',
    'hero.cta.learn': 'Mehr erfahren',
    'hero.compliance.bafa': 'BAFA-konform',
    'hero.compliance.iso': 'ISO 50001',
    'hero.compliance.gdpr': 'DSGVO-konform',
    
    // Features Section
    'features.title': 'Entwickelt für',
    'features.title.precision': 'Präzision',
    'features.description': 'Jede Funktion wurde entwickelt, um Energieaudits von der Bewertung bis zur Fördergenehmigung zu optimieren.',
    'features.funding.title': 'Digitale Förderanträge',
    'features.funding.description': 'BAFA-konforme Anträge mit automatisierter Compliance',
    'features.funding.expanded': 'Unsere intelligente Plattform füllt alle erforderlichen BAFA-Formulare automatisch aus und gewährleistet 100%ige Compliance mit aktuellen Vorschriften. Erweiterte Validierungsprüfungen verhindern häufige Fehler, während die automatisierte Dokumentenerstellung wochenlange manuelle Arbeit spart. Die Integration mit Regierungsdatenbanken bietet Echtzeit-Statusupdates und optimierte Einreichungsverfahren.',
    'features.reporting.title': 'Automatisierte Berichterstattung',
    'features.reporting.description': 'DIN EN 16247 & ISO 50001 konforme Berichte',
    'features.reporting.expanded': 'Erstellen Sie automatisch umfassende Energieaudit-Berichte, die alle regulatorischen Standards erfüllen. Unser KI-gestütztes System analysiert Ihre Daten, identifiziert Optimierungsmöglichkeiten und erstellt professionelle Dokumentation mit Diagrammen, Empfehlungen und Compliance-Zertifikaten. Exportoptionen umfassen PDF-, Excel- und XML-Formate für nahtlose Integration.',
    'features.marketplace.title': 'Auditor-Marktplatz',
    'features.marketplace.description': 'Verbindung zu verifizierten Energieaudit-Profis',
    'features.marketplace.expanded': 'Zugang zu unserem kuratierten Netzwerk zertifizierter Energieauditoren mit nachgewiesener Erfolgsbilanz. Erweiterte Matching-Algorithmen verbinden Sie mit Spezialisten in Ihrer Branche und Region. Transparente Bewertungen, detaillierte Profile und integriertes Projektmanagement gewährleisten erfolgreiche Zusammenarbeit von der ersten Beratung bis zur finalen Berichterstattung.',
    'features.documentation.title': 'Konforme Dokumentation',
    'features.documentation.description': 'Sichere Speicherung und strukturiertes Datenmanagement',
    'features.documentation.expanded': 'Unternehmenssicherheit auf höchstem Niveau schützt Ihre sensiblen Energiedaten mit End-to-End-Verschlüsselung und DSGVO-Compliance. Automatische Backups, Versionskontrolle und Audit-Trails gewährleisten Datenintegrität. Intelligente Kategorisierung und Suchfunktionen machen historische Daten für Folgeaudits und regulatorische Anforderungen leicht zugänglich.',
    'common.readMore': 'Mehr lesen',
    'common.showLess': 'Weniger anzeigen'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};