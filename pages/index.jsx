import PageLayout from '../src/layouts/PageLayout';
import Slider from '../src/layouts/Slider';
import About from '../src/layouts/About';
import Service from '../src/layouts/Service';
import Timeline from '../src/layouts/Timeline';
import Feedback from '../src/layouts/Feedback';
import QuickLinks from '../src/layouts/QuickLinks';
import Footer from '../src/layouts/Footer';
import Copyright from '../src/layouts/Copyright';

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
