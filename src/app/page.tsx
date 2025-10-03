"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';
import { LucideIcon } from 'lucide-react';

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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759469894124-ee1bcf9b.jpg"
          buttonText="Get Early Access"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to MVP Studio"
          subtitle="Plan, Build, Launch Fast"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Who We Are"
          descriptions={["We specialize in MVP development.", "Our mission is to enable startups.", "Join us to accelerate your journey."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: 'left', image: 'https://example.com/step1.png', title: 'Step 1', description: 'Start your journey by signing up.' },
            { position: 'center', image: 'https://example.com/step2.png', title: 'Step 2', description: 'Choose your plan.' },
            { position: 'right', image: 'https://example.com/step3.png', title: 'Step 3', description: 'Launch with MVP Studio!' }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Understanding our value model"
          kpiItems={[
            { value: '100M', description: 'Total Supply', longDescription: 'The total supply of tokens available.', icon: LucideIcon },
            { value: '15%', description: 'Investors Share', longDescription: 'Percentage of tokens allocated to investors.', icon: LucideIcon },
            { value: '$0.5', description: 'Initial Price', longDescription: 'Initial price per token at launch.', icon: LucideIcon }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <LogoFooter
          logoSrc="https://example.com/logo.png"
          columns={[
            { title: 'Products', items: [{ label: 'Product 1', onClick: () => {} }, { label: 'Product 2', onClick: () => {} }] },
            { title: 'Company', items: [{ label: 'About', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { title: 'Legal', items: [{ label: 'Privacy', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MVP Studio"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}