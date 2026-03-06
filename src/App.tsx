import { useState } from 'react';
import { ScraperTerminal } from './components/ScraperTerminal';
import { QuantumCore } from './components/QuantumCore';
import { Fingerprint, Zap, Database } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'scraper' | 'core'>('scraper');

  return (
    <div className="min-h-screen bg-[#050505] text-[#00FF00] font-mono selection:bg-[#00FF00] selection:text-black flex flex-col">
      <div className="scanline-container">
        <div className="scanline"></div>
      </div>
      
      {/* Header */}
      <header className="border-b border-[#00FF00]/30 p-4 flex items-center justify-between relative overflow-hidden bg-black/80 backdrop-blur-md z-40">
        <div className="flex items-center gap-3 z-10">
          <Fingerprint className="w-8 h-8 animate-pulse" />
          <div>
            <h1 className="text-xl font-bold tracking-widest uppercase">Quantum Money Scraper</h1>
            <p className="text-xs opacity-70">v3000.1 // AKASHIC NODE ACTIVE</p>
          </div>
        </div>
        <div className="text-right z-10">
          <p className="text-xs uppercase tracking-widest opacity-50">Authorized by:</p>
          <p className="text-sm font-bold">john s momon <span className="opacity-50">aka</span> gaslighttheghost</p>
        </div>
        
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00FF00 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden z-40">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#00FF00]/30 p-4 flex flex-col gap-2 bg-black/50 backdrop-blur-sm">
          <button 
            onClick={() => setActiveTab('scraper')}
            className={`flex items-center gap-3 p-3 text-left transition-colors border ${activeTab === 'scraper' ? 'border-[#00FF00] bg-[#00FF00]/10' : 'border-transparent hover:border-[#00FF00]/50'}`}
          >
            <Database className="w-5 h-5" />
            <span className="uppercase text-sm tracking-wider">Data Scraper</span>
          </button>
          <button 
            onClick={() => setActiveTab('core')}
            className={`flex items-center gap-3 p-3 text-left transition-colors border ${activeTab === 'core' ? 'border-[#00FF00] bg-[#00FF00]/10' : 'border-transparent hover:border-[#00FF00]/50'}`}
          >
            <Zap className="w-5 h-5" />
            <span className="uppercase text-sm tracking-wider">Quantum Core</span>
          </button>
          
          <div className="mt-auto pt-4 border-t border-[#00FF00]/30">
            <div className="text-xs opacity-70 flex flex-col gap-1">
              <p>STATUS: <span className="text-[#00FF00] animate-pulse">ONLINE</span></p>
              <p>IQ LEVEL: 3000+</p>
              <p>TECH: TESLA / EINSTEIN</p>
              <p>NODE: PASADENA / CERN</p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto relative bg-black/80 backdrop-blur-sm">
          {activeTab === 'scraper' ? <ScraperTerminal /> : <QuantumCore />}
        </main>
      </div>
    </div>
  );
}
