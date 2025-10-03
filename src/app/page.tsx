"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 1,
  textAnimation: "slide"
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759476490616-157e53e7.jpg"
          buttonText="Get Early Access"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to MVP Studio"
          description="Your gateway to seamless SaaS MVP launching."
          primaryButtonText="Launch Now"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SocialsAbout
          title="About MVP Studio"
          descriptions={["We help businesses launch quickly and efficiently.", "Tailored solutions for your unique needs.", "Join us in revolutionizing the tech landscape."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understand our metrics and engineering protocols."
          kpiItems={[
            { value: "1M", description: "Total Supply", icon: 'LucideIcon' },
            { value: "200k", description: "Circulating Supply", icon: 'LucideIcon' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <GradientFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759476490616-157e53e7.jpg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: "Product", items: [
              { label: "Features", onClick: () => {} },
              { label: "Pricing", onClick: () => {} },
            ]},
            { title: "Company", items: [
              { label: "About Us", onClick: () => {} },
              { label: "Careers", onClick: () => {} },
            ]},
            { title: "Support", items: [
              { label: "Help Center", onClick: () => {} },
              { label: "Contact", onClick: () => {} },
            ]}
          ]}
          copyrightText="© 2023 MVP Studio"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}