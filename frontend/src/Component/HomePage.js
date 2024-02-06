import Carousel from 'react-bootstrap/Carousel';
import kendall1 from '../Images/kendall-jenner1.webp';
import kendall2 from '../Images/kendall-jenner2.webp';
import kendall3 from '../Images/kendall-jenner3.webp';
import "./HomePage.css";

function HomePage() {
  return (
    <div className="carousel-container">
         <Carousel interval={2000}>
            <Carousel.Item>
                <img src={kendall1} alt="First slide"  style={{ width: '80%', height: '80%' }}/>
                
            </Carousel.Item>
            <Carousel.Item>
                <img src={kendall2} alt="Second slide"  style={{ width: '80%', height: '80%' }}/>
                
            </Carousel.Item>
            <Carousel.Item>
                <img src={kendall3} alt="third slide"  style={{ width: '80%', height: '80%' }}/>
            
            </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default HomePage;