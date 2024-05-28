import Products from '../products/Products';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='home-full'>
                    <div className="half">
                        <h1>We Provide Best Qualities Cycle all Over the Bangladesh.</h1>
                    </div>
                    <div className="half">
                        <img src="../../../public/photos/home.png" alt="" />
                    </div>
                </div>
            </div>
            <Products></Products>

        </div>
        
    );
};

export default Home;