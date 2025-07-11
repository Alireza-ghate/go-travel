import ExploreMore from "./components/ExploreMore/ExploreMore";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Page from "./components/Page";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";

function App() {
  // Page is like a container or wrapper
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Main>
        <Steps />
        <Services />
        <News />
        <ExploreMore />
      </Main>
    </Page>
  );
}

export default App;
