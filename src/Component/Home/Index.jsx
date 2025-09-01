import Services from "../Services";
import AboutSection from "./About";
import Banner from "./Banner";
import QuoteCard from "./QuickCard";
import Team from "./Team";
import WhyChoose from "./WhyChoose";

export default function Home() {
      return (
            <>
                  <Banner />
                  <AboutSection />
                  <WhyChoose />
                  <Team />
                  <QuoteCard />
            </>
      );
}
