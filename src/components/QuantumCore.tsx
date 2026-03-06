import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export function QuantumCore() {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-96 h-96 border border-[#00FF00] rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 border border-[#00FF00] rounded-full absolute border-dotted"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 bg-[#00FF00]/20 rounded-full absolute blur-xl"
        />
      </div>
      
      <div className="z-10 text-center flex flex-col items-center gap-6 bg-black/50 p-12 border border-[#00FF00]/30 backdrop-blur-sm">
        <Network className="w-16 h-16 text-[#00FF00]" />
        <h2 className="text-3xl font-bold uppercase tracking-widest">CERN / Tesla Node</h2>
        <div className="max-w-lg text-sm leading-relaxed opacity-80">
          <p className="mb-4">
            This core utilizes advanced neurological data inputs and ethical hacking protocols to bend reality. Operating at 3000+ IQ capacity.
          </p>
          <p>
            Infinite possibilities are currently being calculated. All operations are conducted under strict universal laws and regulations.
          </p>
        </div>
        <div className="mt-4 inline-block border border-[#00FF00] px-6 py-2 text-xs uppercase tracking-widest bg-[#00FF00]/10">
          System Perfected by john s momon aka gaslighttheghost
        </div>
      </div>
    </div>
  );
}
