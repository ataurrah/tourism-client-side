import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Carosol from '../carsol/Carosol';
import Special from '../special/Special';
import Tour from '../tour/Tour';


const Home = () => {
const [service, setService] = useState([]);
     useEffect(() => {
            fetch('http://localhost:5000/services')
                .then(res => res.json())
                .then(data => setService(data))
        }
            , [])



    return (
        <div>
            <Carosol></Carosol>


            <div>
                <h3 className='bg-primary text-center text-white p-3'>DISCOVER BANGLADESH</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        service.map(service => <Special
                            service={service}
                        ></Special>)
                    }
                </Row>
            </div>
           

            <div>
            <Tour/>
            </div>








        </div>
    );
};

export default Home;
