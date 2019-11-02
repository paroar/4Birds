import React from "react";

type HeroProps = {
  children: React.ReactNode;
  hero: string;
};

const Hero: React.FC<HeroProps> = ({ children, hero }) => {
  return (
    <header className={hero} data-testid="hero">
      {children}
    </header>
  );
};

export default Hero;
