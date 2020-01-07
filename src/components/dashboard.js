import React from 'react';
import Header from './presentation/header';
import Image from './presentation/image';
import imgsrc from '../images/stereo.svg';
import Footer from './presentation/footer';

const testCaetgories = ['General Doctor', 'skin-care', 'Child Care', 'women Health'];
const Dashboard = () => (
  <main>
    <div className="container">
      <Header name="Doctor" search />
      <p className="space" />
      <Image src={imgsrc} />
      <div className="category-container">
        <h3>
          Search Doctors
        </h3>
        <p>
          Search by directly typing doctors name.
          Or clicking speciality.
        </p>
        <div className="category">
          {
            testCaetgories.map((category) => (
              <div className="category-unit" key={category}>
                {category}
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <Footer />
  </main>
);

export default Dashboard;
