// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand" href="/">PERPUSTAKAAN</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* Dropdown Siswa */}
              <li className="nav-item dropdown">
                <button 
                  className="btn btn-dark dropdown-toggle" 
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  SISWA
                </button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" href="/siswa">CRUD Siswa</Link></li>
                  <li><Link className="dropdown-item" href="/datasiswa">Data Siswa</Link></li>
                </ul>
              </li>

              {/* Link Biasa */}
              <li className="nav-item">
                <Link className="nav-link" href="/buku">BUKU</Link>
              </li>
            </ul>

            {/* Form Pencarian */}
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: '70px' }}></div>
    </header>
  );
}
