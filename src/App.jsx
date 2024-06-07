
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/dark_saa_s_landing_page/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  