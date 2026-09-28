import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SlideViewer, SLIDE_LIST } from './components/SlideViewer';
import { StrategicDashboard } from './components/StrategicDashboard';
import { IndicatorDetailModal } from './components/IndicatorDetailModal';
import { Indicador } from './data/strategicData';

export default function App() {
  const [currentMode, setCurrentMode] = useState<'slides' | 'dashboard'>('slides');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedIndicador, setSelectedIndicador] = useState<Indicador | null>(null);

  // Presentation Timer
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Keyboard shortcut 'f' for fullscreen
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#323232]">
      {/* Top Header */}
      <Header
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        currentSlide={currentSlide}
        totalSlides={SLIDE_LIST.length}
        onPrevSlide={() => setCurrentSlide(curr => Math.max(curr - 1, 0))}
        onNextSlide={() => setCurrentSlide(curr => Math.min(curr + 1, SLIDE_LIST.length - 1))}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onToggleDrawer={() => setIsDrawerOpen(prev => !prev)}
        isDrawerOpen={isDrawerOpen}
        elapsedTime={formatTimer(seconds)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-start">
        {currentMode === 'slides' ? (
          <SlideViewer
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            totalSlides={SLIDE_LIST.length}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            onSelectIndicador={(ind) => setSelectedIndicador(ind)}
          />
        ) : (
          <StrategicDashboard
            onSelectIndicador={(ind) => setSelectedIndicador(ind)}
            onGoToSlide={(slideIdx) => {
              setCurrentSlide(slideIdx);
              setCurrentMode('slides');
            }}
          />
        )}
      </main>

      {/* Indicator Detail Modal */}
      <IndicatorDetailModal
        indicador={selectedIndicador}
        onClose={() => setSelectedIndicador(null)}
      />

      {/* Footer Branding bar for desktop */}
      <footer className="py-3 px-6 border-t border-[#B4B4B4]/30 bg-white text-[11px] text-[#A3A3A3] flex items-center justify-between no-print">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#323232]">Superintendência de Gestão de Pessoas</span>
          <span>·</span>
          <span>Santa Casa BH</span>
          <span>·</span>
          <span>Premissas Estratégicas 2027</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>Fonte: Documento Oficial de Desdobramento 2027</span>
          <span>·</span>
          <span className="text-[#FF0032] font-semibold">Proposta para Validação</span>
        </div>
      </footer>
    </div>
  );
}
