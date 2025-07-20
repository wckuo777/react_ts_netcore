import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">ReactTSApp</div>
                <ul className="navbar-links">
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/demo2">表格列表</Link></li>
                    <li><Link to="/demo3">邏輯演算</Link></li>
                </ul>
            </div>
        </nav>
    );
}
