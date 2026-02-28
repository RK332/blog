import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <Link to="/">首页</Link>
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: '#f1356d',
              borderRadius: '8px'
            }}
          >
            新博客
          </Link>
        </div>
      </nav>
    </div>
  )
}

