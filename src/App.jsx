import { useState } from 'react';
import './App.css';
import ME from './logo.png';
import ME2 from './right2.png';
import me5 from './Rectangle 11.png';
import ME3 from './lleft.png';
import me4 from './goals.png';
import me6 from './curve left.png';
import me7 from './curve right .png';
import me8 from './goalsimageshape.png';
import me9 from './join our team corner .png';
import me10 from './Untitled design (10) 1.png';
import me11 from './bottom.png';
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to a server
    console.log(formData);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    

  return (
    <>
    
      <header className="header">
      
        <div className="logo">
          <img src={ME} alt="Logo" />
        </div>
        <nav className="nav">
          <button onClick={() => (window.location.href = '#about')}>About</button>
          <button onClick={() => (window.location.href = '#goals')}>Our Goals</button>
          <button onClick={() => (window.location.href = '#join')}>Join us</button>
          <button onClick={() => (window.location.href = '#contact')}>Contact us</button>
        </nav>

      </header>

      <div className="main-section">
      <div className="main-text">
        <div>A Platform</div>
        <div>Connecting</div>
        <div>
          <span className="highlight">Every </span><br/>
          <span className="underline-text">Need.</span>
        </div>
      </div>
      <div className="main-image">
        <img src={ME2} alt="Main Graphic" class="image1" />
        <img src={me5} alt="Main Graphic" class="image2" />
        
      </div>
    </div>


<br/>
<section className="company-section" id="about">
  <div className="left-side">
    <div className="company-title">
      <h1>
        <span className="inter">Inter</span><span className="link">link</span>
      </h1>
    </div>
    <div className="company-image">
      <img src={ME3} alt="Company Graphic" />
    </div>
    <img src={me6} alt="Left Overlapping Image" />
    <img src={me7} alt="Right Overlapping Image" />
  </div>

  <div className="company-text">
    <br/><br/><br/><br/>
    <p>
      At Interlink, we’re transforming logistics by connecting communities and empowering individuals with a solution that prioritizes both people and purpose. Our mission is to make logistics effortless and reliable, bridging the gap between people and their needs with efficiency and trust. Built on principles of connectivity and accessibility, Interlink offers a dependable platform for transporting heavy goods, serving individuals and businesses alike as a seamless link in the logistics chain. Join us in reshaping the future of logistics.
    </p>
  </div>
</section>





      <section className="goals-section" id="goals">
        <div className="goals-text">
          <h1>
        <span className="g">G</span><span className="oals">oals</span>
        </h1>
          <div className="underline"></div>
          <p>At Interlink, our goal is to bridge the gap between people and essential logistics services. By creating a seamless network, we ensure that heavy vehicle services are accessible, reliable, and efficient. Through advanced technology and an intuitive platform, we connect individuals and businesses with the transportation solutions they need, enhancing the movement of goods and fostering community connections. Interlink aims to empower users with quick, accessible logistics, supporting unity and economic growth.</p>
        </div>
        
        <div className="goal-image">
          <img src={me4} alt="goals"class="image11" />
          <img src={me8} alt="Right Overlapping Image"class="image21" />
          </div>
          
        
      </section>
      <section className="join-section" id="join">
  <div className="join-text">
    <h1>
  <span className="j">J</span><span className="oin">oin</span><span className='U'> U</span><span className='s'>s !</span>
  </h1>
    <p>We are hiring the most <br/>extraordinary <span className="highlight">Minds</span>.</p>
    <p className="join-info">Send your resume to <span className="email">interlinkbn@gmail.com</span></p>
  </div>
  
  
  
  <div className="join-image">
          <img src={me9} alt="goals"class="image111" />
          <img src={me10} alt="Right Overlapping Image"class="image211" />
          </div>
  
    
  
  
</section>


      <section className="contact-section" id="contact">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <p>Email: interlink@gmail.com</p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/company/interlink-connects/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/company/interlink-connects/
            </a>
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>


        
  <input
    type="text"
    name="firstName"
    placeholder="First Name"
    value={formData.firstName}
    onChange={handleChange}
  />
  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={formData.lastName}
    onChange={handleChange}
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
  />
  <input
    type="text"
    name="phoneNumber"
    placeholder="Phone Number"
   
    value={formData.phoneNumber}
    onChange={handleChange}
  />
  <textarea
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
  ></textarea>
  <button type="submit">Send Message</button>

</form>
<img src={me11} alt="Left Overlapping Image" className="bottom-left-image" />



      </section>
      
    </>
  );
}

export default App;