import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, FileText, BarChart3, Users, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  expandedContent: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  expandedContent, 
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className={`group border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 animate-scale-in ${
        index % 2 === 0 ? 'circle-outline' : ''
      }`} 
      style={{animationDelay: `${(index + 2) * 0.1}s`}}
    >
      <CardContent className="p-8">
        <div className="mb-6">
          <Icon className="h-8 w-8 text-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        
        <div className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground leading-relaxed">{expandedContent}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 p-0 h-auto font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          {isExpanded ? (
            <>
              {useLanguage().t('common.showLess')} <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              {useLanguage().t('common.readMore')} <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

const InteractiveFeatures: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: FileText,
      title: t('features.funding.title'),
      description: t('features.funding.description'),
      expandedContent: t('features.funding.expanded')
    },
    {
      icon: BarChart3,
      title: t('features.reporting.title'),
      description: t('features.reporting.description'),
      expandedContent: t('features.reporting.expanded')
    },
    {
      icon: Users,
      title: t('features.marketplace.title'),
      description: t('features.marketplace.description'),
      expandedContent: t('features.marketplace.expanded')
    },
    {
      icon: Shield,
      title: t('features.documentation.title'),
      description: t('features.documentation.description'),
      expandedContent: t('features.documentation.expanded')
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      {/* Decorative Circle Outlines */}
      <div className="absolute top-10 left-5 w-28 h-28 border border-foreground/10 rounded-full"></div>
      <div className="absolute bottom-10 right-5 w-36 h-36 border border-foreground/10 rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
            {t('features.title')} <span className="animate-text-glow">{t('features.title.precision')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-right stagger-1">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              expandedContent={feature.expandedContent}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;