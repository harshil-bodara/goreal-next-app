import PageLayout from '../src/layouts/PageLayout';
import Slider from '../src/components/Slider';
import About from '../src/components/About';
import Service from '../src/components/Service';
import Timeline from '../src/components/Timeline';
import Feedback from '../src/components/Feedback';
import QuickLinks from '../src/components/QuickLinks';
import Footer from '../src/components/Footer';
import Copyright from '../src/components/Copyright';

export default function Home() {
  return (
    <PageLayout>
      {/* <!-- Slider Area  --> */}
      <Slider />

      {/* <!-- About Area  --> */}
      <About />

      {/* <!-- Service Area  --> */}
      <Service />

      {/* <!-- Timeline Area  --> */}
      <Timeline />

      {/* <!-- Feedback Area  --> */}
      <Feedback />

      {/* <!-- QuickLinks Area  --> */}
      <QuickLinks />

    </PageLayout>
  )
}
