import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

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

function Home({ onUploadClick }) {
  return (
    <main className="main-content hero">
      <section className="hero-section-adv">
        <div className="hero-text">
          <h1>Welcome to <span className="brand">YOUR BUDDY</span> <span className="hero-emoji">🤝</span></h1>
          <p className="subtitle">India’s largest student community for sharing academic resources. Access previous year papers, notes, and study materials from <span className="highlight">top colleges & universities</span> across the country.</p>
          <div className="cta-buttons">
            <Link className="cta" to="/browse">Browse Resources</Link>
            <button className="cta secondary" onClick={onUploadClick}>Contribute Now</button>
          </div>
        </div>
        <div className="hero-graphic-adv">
          <div className="hero-card">📄 PYQ Papers</div>
          <div className="hero-card">📚 Study Notes</div>
          <div className="hero-card">🤝 Community</div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Resources Shared</p>
        </div>
        <div className="stat">
          <h3>50,000+</h3>
          <p>Active Students</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Colleges & Universities</p>
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

function UploadModal({ open, onClose }) {
  const [form, setForm] = useState({
    college: 'Select College/University',
    course: '',
    subject: '',
    year: '',
    semester: '',
    type: 'PYQ',
    title: '',
    file: null
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resource uploaded! (Demo only)');
    onClose();
  };
  return open ? (
    <div className="modal-bg">
      <div className="modal">
        <h2>Upload Resource</h2>
        <form className="upload-form" onSubmit={handleSubmit}>
          <label>College/University</label>
          <select name="college" value={form.college} onChange={handleChange} required>
            {colleges.map(c => <option key={c}>{c}</option>)}
          </select>
          <label>Course</label>
          <input name="course" type="text" placeholder="e.g. B.Tech CSE" value={form.course} onChange={handleChange} required />
          <label>Subject</label>
          <input name="subject" type="text" placeholder="e.g. Data Structures" value={form.subject} onChange={handleChange} required />
          <label>Year</label>
          <input name="year" type="text" placeholder="e.g. 2nd Year" value={form.year} onChange={handleChange} required />
          <label>Semester</label>
          <input name="semester" type="text" placeholder="e.g. Sem 4" value={form.semester} onChange={handleChange} required />
          <label>Document Type</label>
          <select name="type" value={form.type} onChange={handleChange} required>
            <option>PYQ</option>
            <option>Notes</option>
            <option>Mid-Sem Papers</option>
            <option>Books</option>
            <option>Internal Exam Papers</option>
            <option>Assignments</option>
          </select>
          <label>Title</label>
          <input name="title" type="text" placeholder="Resource Title" value={form.title} onChange={handleChange} required />
          <label>Upload File</label>
          <input name="file" type="file" onChange={handleChange} required />
          <div className="modal-actions">
            <button type="submit" className="cta">Upload</button>
            <button type="button" className="cta secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
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
  const [uploadOpen, setUploadOpen] = useState(false);
  return (
    <Router>
      <div className="app-bg">
        <nav className="navbar">
          <span className="logo">🤝 YOUR BUDDY</span>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>
            <button className="nav-btn" onClick={() => setUploadOpen(true)}>Upload</button>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home onUploadClick={() => setUploadOpen(true)} />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <UploadModal open={uploadOpen} onClose={() => setUploadOpen(false)} />
        <footer className="footer">&copy; {new Date().getFullYear()} YOUR BUDDY. Made for students, by students.</footer>
      </div>
    </Router>
  );
}

export default App;
