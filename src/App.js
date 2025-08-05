import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UploadResource from './pages/UploadResource';

const colleges = [
  'Select College/University',
  'Delhi University', 'IIT Bombay', 'IIT Delhi', 'IIT Kanpur', 'IIT Kharagpur', 'IIT Madras',
  'BITS Pilani', 'NIT Trichy', 'NIT Surathkal', 'JNU', 'AIIMS Delhi', 'Jamia Millia Islamia', 'BHU Varanasi', 'Other...'
];

const sampleResources = [
  {
    id: 1,
    title: "Data Structures and Algorithms - Final Exam 2023",
    type: "PYQ",
    college: "IIT Delhi",
    course: "B.Tech CSE",
    subject: "Data Structures",
    year: "2nd Year",
    semester: "Sem 4",
    uploadedBy: "Rahul Kumar",
    downloads: 245,
    rating: 4.8,
    uploadDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Complete Notes - Operating Systems",
    type: "Notes",
    college: "Delhi University",
    course: "B.Tech",
    subject: "Operating Systems",
    year: "3rd Year",
    semester: "Sem 5",
    uploadedBy: "Priya Sharma",
    downloads: 189,
    rating: 4.6,
    uploadDate: "2024-01-10"
  },
  {
    id: 3,
    title: "Database Management Systems - Mid Sem",
    type: "Mid-Sem Papers",
    college: "BITS Pilani",
    course: "B.Tech CSE",
    subject: "DBMS",
    year: "2nd Year",
    semester: "Sem 4",
    uploadedBy: "Amit Singh",
    downloads: 156,
    rating: 4.7,
    uploadDate: "2024-01-08"
  },
  {
    id: 4,
    title: "Microprocessors and Microcontrollers - Lab Manual",
    type: "Notes",
    college: "NIT Trichy",
    course: "B.Tech ECE",
    subject: "Microprocessors",
    year: "3rd Year",
    semester: "Sem 5",
    uploadedBy: "Sneha Patel",
    downloads: 98,
    rating: 4.5,
    uploadDate: "2024-01-05"
  }
];

function getTypeColor(type) {
  const colors = {
    'PYQ': '#667eea',
    'Notes': '#764ba2',
    'Mid-Sem Papers': '#8b5cf6',
    'Books': '#10b981',
    'Internal Exam Papers': '#f59e0b',
    'Assignments': '#ef4444'
  };
  return colors[type] || '#6b7280';
}

function ResourceCard({ resource }) {
  return (
    <div className="resource-card-adv">
      <div className="resource-card-header">
        <span className="resource-type" style={{ background: getTypeColor(resource.type) }}>{resource.type}</span>
        <span className="resource-rating">★ {resource.rating}</span>
      </div>
      <h3 className="resource-title">{resource.title}</h3>
      <div className="resource-meta">
        <span>🏫 {resource.college}</span>
        <span>📚 {resource.course} • {resource.subject}</span>
        <span>👤 By {resource.uploadedBy}</span>
      </div>
      <div className="resource-footer">
        <span>⬇️ {resource.downloads} downloads</span>
        <button className="cta download-btn">Download</button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="main-content">
      <section className="hero-section-new">
        <div className="hero-overlay">
          <div className="hero-text-new">
            <h1>Welcome to YOUR BUDDY</h1>
            <p>Your one-stop platform for all academic resources.</p>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-us">
          <h2>About Us</h2>
          <p>We are a passionate team of students and educators dedicated to making academic resources more accessible to every student in India. Our platform is built on the principle of "for the students, by the students."</p>
        </div>
        <div className="our-mission">
          <h2>Our Mission</h2>
          <p>Our mission is to create a collaborative ecosystem where students can share and access high-quality study materials, including notes, previous year papers, and more, to excel in their academic journey.</p>
        </div>
      </section>

      <section className="actions-section">
        <p className="cta-message">Download or upload notes to help the community!</p>
        <div className="cta-buttons">
          <Link className="cta" to="/browse">Browse Resources</Link>
          <Link className="cta secondary" to="/upload">Contribute Now</Link>
        </div>
        <div className="hero-graphic-adv">
          <div className="hero-card">📄 PYQ Papers</div>
          <div className="hero-card">📚 Study Notes</div>
          <div className="hero-card">🤝 Community</div>
        </div>
      </section>

      <section className="stats-section-new">
        <h2>Our Stats</h2>
        <div className="stats-list">
          <div className="stat-card">
            <div className="icon">📝</div>
            <h3>12,000+</h3>
            <p>Total Notes</p>
          </div>
          <div className="stat-card">
            <div className="icon">👥</div>
            <h3>8,000+</h3>
            <p>Contributors</p>
          </div>
          <div className="stat-card">
            <div className="icon">📥</div>
            <h3>1,00,000+</h3>
            <p>Notes Downloaded</p>
          </div>
        </div>
      </section>

      <section className="featured-content-section">
        <h2>Featured Content</h2>
        <div className="featured-content-list">
          <div className="featured-card">
            <h3>Recently Added</h3>
            <p>Operating Systems - Complete Notes</p>
          </div>
          <div className="featured-card">
            <h3>Most Downloaded</h3>
            <p>Data Structures and Algorithms - PYQs</p>
          </div>
          <div className="featured-card">
            <h3>Trending Subjects</h3>
            <p>Machine Learning</p>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-card">
            <div className="icon">📄</div>
            <h3>10,000+</h3>
            <p>Resources Shared</p>
          </div>
          <div className="achievement-card">
            <div className="icon">🧑‍🎓</div>
            <h3>50,000+</h3>
            <p>Active Students</p>
          </div>
          <div className="achievement-card">
            <div className="icon">🏛️</div>
            <h3>500+</h3>
            <p>Colleges & Universities</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose YOUR BUDDY?</h2>
        <div className="features-list">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Vast Collection</h3>
            <p>Access thousands of PYQ papers, notes, and study materials from top institutions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Student Community</h3>
            <p>Join a thriving community of students helping each other succeed academically.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Assured</h3>
            <p>All resources are reviewed and rated by the community for quality and accuracy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Browse() {
  const [selectedCollege, setSelectedCollege] = useState('Select College/University');
  const [search, setSearch] = useState('');
  const filtered = sampleResources.filter(r =>
    (selectedCollege === 'Select College/University' || r.college === selectedCollege) &&
    (search === '' || r.title.toLowerCase().includes(search.toLowerCase()) || r.subject.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <main className="main-content browse-adv">
      <h2>Browse Resources</h2>
      <div className="browse-controls">
        <select value={selectedCollege} onChange={e => setSelectedCollege(e.target.value)}>
          {colleges.map(c => <option key={c}>{c}</option>)}
        </select>
        <input className="search-input" placeholder="Search by subject, course, year..." value={search} onChange={e => setSearch(e.target.value)} />
        <button className="cta">Search</button>
      </div>
      <div className="resource-list-adv">
        {filtered.length === 0 ? (
          <div className="resource-card placeholder">No resources found. Try searching or uploading!</div>
        ) : (
          filtered.map(resource => <ResourceCard key={resource.id} resource={resource} />)
        )}
      </div>
    </main>
  );
}


function Login() {
  return (
    <main className="main-content">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="cta" type="submit">Login</button>
      </form>
      <p style={{marginTop:8}}>No account? <Link to="/register">Register</Link></p>
    </main>
  );
}

function Register() {
  return (
    <main className="main-content">
      <h2>Register</h2>
      <form className="login-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="cta" type="submit">Register</button>
      </form>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-bg">
        <nav className="navbar sticky">
          <span className="logo">🤝 YOUR BUDDY</span>
          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/browse" onClick={() => setMenuOpen(false)}>Browse</Link>
            <Link to="/upload" className="nav-btn" onClick={() => setMenuOpen(false)}>Upload</Link>
            <Link to="/register" className="nav-btn-cta" onClick={() => setMenuOpen(false)}>Get Started</Link>
          </div>
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadResource />} />
        </Routes>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text"><span>YOUR</span>BUDDY</h1>
              <p>
                Your Buddy is a platform for students to share and find academic resources.
                We aim to create a community of learners who help each other grow.
              </p>
              <div className="contact">
                <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                <span><i className="fas fa-envelope"></i> &nbsp; info@yourbuddy.com</span>
              </div>
              <div className="socials">
                <Link to="#"><i className="fab fa-facebook"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
            <div className="footer-section links">
              <h2>Quick Links</h2>
              <br />
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/policy">Terms & Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} YOUR BUDDY | Designed by Students for Students
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
