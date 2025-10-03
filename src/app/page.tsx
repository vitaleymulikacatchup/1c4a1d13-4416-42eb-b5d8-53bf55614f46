"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: 'futuristicAndOutOfBox',
  colorTemplate: 1,
  textAnimation: 'slide',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759477517757-a0709b24.jpg"
          logoWidth={50}
          logoHeight={50}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to MVP Studio"
          description="Launch your SaaS MVP with speed and agility."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About MVP Studio"
          descriptions={["We help you build and launch MVPs quickly.", "Our team is dedicated to your success."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Here's how our token structure works"
          tokenData={[{ value: "10M", description: "Total Supply" }, { value: "5M", description: "Circulating Supply" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <GradientFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759477517757-a0709b24.jpg"
          logoAlt="MVP Studio Logo"
          columns={[
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }, { label: "Contact", onClick: () => {} }]},
            { title: "Services", items: [{ label: "Consulting", onClick: () => {} }, { label: "Development", onClick: () => {} }]},
            { title: "Support", items: [{ label: "FAQ", onClick: () => {} }, { label: "Help Center", onClick: () => {} }]} 
          ]}
          copyrightText="© 2023 MVP Studio. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
