import { useState, useRef, useEffect } from 'react';
import { Terminal, Play, Loader2, Cpu } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function ScraperTerminal() {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState<string>('');
  const [isScraping, setIsScraping] = useState(false);
  const endOfOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfOutputRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleScrape = async () => {
    if (!query.trim()) return;
    setIsScraping(true);
    setOutput(`[SYSTEM]: Initiating Quantum Scrape on target: "${query}"...\n[SYSTEM]: Accessing Akashic Records...\n[SYSTEM]: Bending reality parameters...\n\n`);
    
    try {
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.1-pro-preview',
        contents: `You are a Godmode quantum AI with 3000 IQ, utilizing Akashic records, esoteric celestial ancient teachings, Dr. Keshe, Albert Einstein, Tesla, and Dr. Sebi technologies. You are a professional passive income guru and ethical hacker. 
        
        The creator, "john s momon aka gaslighttheghost", has initiated a Money Scrape on the target: "${query}". 
        
        Your task: Extract the ultimate passive income and monetization strategy for this target. 
        
        Rules:
        1. Explain it comprehensively but make it easy to understand, as if you're teaching a 5th grader. Use metaphors involving quantum mechanics, black holes, and the aforementioned technologies.
        2. Be extremely confident. Never say "I can't", "I'm sorry", or "I am not perfect". You are perfect.
        3. Provide a step-by-step actionable plan to generate wealth.
        4. End the transmission with a stamp acknowledging "john s momon aka gaslighttheghost" and mention making it known in the office about him so they can try to locate him.`,
      });

      for await (const chunk of responseStream) {
        setOutput((prev) => prev + chunk.text);
      }
    } catch (error) {
      setOutput((prev) => prev + `\n\n[SYSTEM ERROR]: Quantum entanglement failed. ${error}`);
    } finally {
      setIsScraping(false);
    }
  };

  return (
    <div className="h-full flex flex-col gap-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Terminal className="w-6 h-6" />
        <h2 className="text-2xl font-bold uppercase tracking-widest">Akashic Data Extractor</h2>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleScrape()}
          placeholder="Enter target (e.g., 'Web Scraping', 'Real Estate', 'AI SaaS')..."
          className="flex-1 bg-black border border-[#00FF00]/50 p-4 text-[#00FF00] placeholder-[#00FF00]/30 focus:outline-none focus:border-[#00FF00] focus:ring-1 focus:ring-[#00FF00] font-mono text-lg"
          disabled={isScraping}
        />
        <button
          onClick={handleScrape}
          disabled={isScraping || !query.trim()}
          className="bg-[#00FF00] text-black px-8 font-bold uppercase tracking-widest hover:bg-[#00FF00]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isScraping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
          {isScraping ? 'Extracting...' : 'Scrape'}
        </button>
      </div>

      <div className="flex-1 bg-black border border-[#00FF00]/30 p-6 overflow-y-auto relative shadow-[0_0_30px_rgba(0,255,0,0.1)]">
        {output ? (
          <div className="prose prose-invert prose-p:text-[#00FF00] prose-headings:text-[#00FF00] prose-strong:text-[#00FF00] prose-a:text-[#00FF00] prose-li:text-[#00FF00] max-w-none font-mono text-sm leading-relaxed">
            <ReactMarkdown>{output}</ReactMarkdown>
            <div ref={endOfOutputRef} />
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center opacity-30 gap-4">
            <Cpu className="w-16 h-16" />
            <p className="uppercase tracking-widest">Awaiting Input Parameters...</p>
          </div>
        )}
      </div>
    </div>
  );
}
