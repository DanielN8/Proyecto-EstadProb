import React from 'react';

interface NavTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

{/* Aca se muestran las pestañas con sus nombres */}

const NavTabs: React.FC<NavTabsProps> = ({ activeTab, setActiveTab }) => {
    
    return (
        <div className='w-100'>
        <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'rgb(30, 58, 95)' }}>
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item px-3">
                        <button className={`nav-link btn btn-link ${activeTab === 'inicio' ? 'active fw-bold text-white' : 'text-white'}`} onClick={() => setActiveTab('inicio')}>
                            <i className="bi bi-house-door me-1"></i>Inicio
                        </button>
                    </li>
                    <li className="nav-item px-3">
                        <button className={`nav-link btn btn-link ${activeTab === 'tab1' ? 'active fw-bold text-white' : 'text-white'}`} onClick={() => setActiveTab('tab1')}>
                            <i className="bi bi-grid me-1"></i>Pestaña 1
                        </button>
                    </li>
                    <li className="nav-item px-3">
                        <button className={`nav-link btn btn-link ${activeTab === 'tab2' ? 'active fw-bold text-white' : 'text-white'}`} onClick={() => setActiveTab('tab2')}>
                            <i className="bi bi-star me-1"></i>Pestaña 2
                        </button>
                    </li>
                    <li className="nav-item px-3">
                        <button className={`nav-link btn btn-link ${activeTab === 'tab3' ? 'active fw-bold text-white' : 'text-white'}`} onClick={() => setActiveTab('tab3')}>
                            <i className="bi bi-gear me-1"></i>Pestaña 3
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
        </div>
    );
};
export default NavTabs;
