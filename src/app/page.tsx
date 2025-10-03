"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { NavbarLayoutSplitBottom } from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 1,
  textAnimation: "slide",
}

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759474650243-6a696545.jpg"
          logoAlt="MVP Studio"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Get Early Access"
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero
          title="MVP SaaS Landing"
          description="Maximize your launch potential with streamlined features."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About MVP Studio"
          descriptions={["We help you build and launch MVPs quickly.", "Join a community of forward-thinkers."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics"
          description="Learn about our token supply and allocation."
          tokenData={[{ value: "1,000,000", description: "Total Supply" }, { value: "3%, 12%", description: "Rewards" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <GradientFooter
          columns={[
            { title: "Resources", items: [{ label: "Help", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }] },
            { title: "Contact", items: [{ label: "Support", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MVP Studio"
        />
      </div>
    </SiteThemeProvider>
  );
}
