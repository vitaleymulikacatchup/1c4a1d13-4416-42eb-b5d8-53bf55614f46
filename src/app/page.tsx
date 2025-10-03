"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

const theme: SiteTheme = {
  styleVariant: 'futuristicAndOutOfBox',
  colorTemplate: 1,
  textAnimation: 'slide'
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759472316802-8246334b.jpg"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' }
          ]}
          buttonText="Get Early Access"
        />
      </div>
      <div id="hero" data-section="hero">
        <CyclopsHero
          title="Welcome to MVP Studio"
          subtitle="Your partner in building SaaS MVPs"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/minimal-vector-mascot-for-mvp-studio-wai-1759472315520-777be292.jpg"
          characterImageAlt="Minimal Mascot"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About MVP Studio"
          descriptions={[
            "We specialize in fast, efficient MVP development.",
            "Our team guides you from ideation to launch."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: 'left', image: '', title: 'Step 1', description: 'Description for step 1.' },
            { position: 'center', image: '', title: 'Step 2', description: 'Description for step 2.' },
            { position: 'right', image: '', title: 'Step 3', description: 'Description for step 3.' }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="An overview of our token distribution and economics."
          tokenData={[
            { value: '1M', description: 'Total Supply' },
            { value: '0.5M', description: 'Circulating Supply' },
            { value: '0.2M', description: 'Tokens Allocated for Rewards' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <LogoFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-m-1759472316802-8246334b.jpg"
          columns={[
            { title: 'Links', items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About Us', onClick: () => {} }
            ]},
            { title: 'Support', items: [
              { label: 'Contact', onClick: () => {} },
              { label: 'FAQ', onClick: () => {} }
            ]},
            { title: 'Legal', items: [
              { label: 'Privacy Policy', onClick: () => {} },
              { label: 'Terms of Service', onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 MVP Studio"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
