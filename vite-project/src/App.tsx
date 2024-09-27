import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import BasicExample from './Navigation';
const App = () => {
  return (
    <>
        <BasicExample />
        <h2>Lorem ipsum blaablaa perse</h2>
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
          {/* Background layers */}
          <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: '#005E73' }} />
          <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#87BCDE' }} />
          <ParallaxLayer offset={2} speed={5} style={{ backgroundColor: '#27BCDE' }} />
        </Parallax>
    </>
  );
};


export default App
