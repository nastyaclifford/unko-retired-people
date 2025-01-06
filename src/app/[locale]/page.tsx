import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import InfoBanner1 from '@/components/InfoBanner1/InfoBanner1';
import InfoBanner2 from '@/components/InfoBanner2/InfoBanner2';
import BlockLearnMore from '@/components/BlockLearnMore/BlockLearnMore';
import CollapsibleElements from '@/components/CollapsibleElements/CollapsibleElements';
import BlockContactForm from '@/components/BlockContactForm/BlockContactForm';
import Footer from '@/components/Footer/Footer';
import Sliders from '@/components/Sliders/Sliders';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <InfoBanner1 />
      <InfoBanner2 />
      <BlockLearnMore />
      <CollapsibleElements />
      <Sliders />
      <BlockContactForm />
      <Footer />
    </div>
  );
}
