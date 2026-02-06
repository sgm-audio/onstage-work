import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { AuthSheet } from './AuthSheet';

export const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
      setIsAuthOpen(false);
    }
  }, [user, pendingRoute, navigate]);

  return createPortal(
    <>
      <nav className="fixed top-8 left-4 md:left-8 z-[2000] flex items-center gap-0" >
      {/* Logo */}
      <div className="bg-onstage-charcoal text-white h-[34px] px-3 border border-onstage-charcoal flex items-center justify-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
        </svg>
        <span className="text-[11px] font-bold uppercase tracking-wide hidden sm:inline">Onstage</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <Link 
          to="/discover" 
          className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border border-border leading-none group"
        >
          <span className="relative z-10">DISCOVER</span>
          <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </Link>
        <button
          onClick={() => {
            if (user) {
              navigate('/create-event');
            } else {
              setPendingRoute('/create-event');
              setIsAuthOpen(true);
            }
          }}
          className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-border leading-none group"
        >
          <span className="relative z-10">CREATE EVENT</span>
          <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
        <Link 
          to="/about" 
          className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-border leading-none group"
        >
          <span className="relative z-10">ABOUT</span>
          <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </Link>
        {user ? (
          <>
            <Link 
              to="/my-events" 
              className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-border leading-none group"
            >
              <span className="relative z-10">MY EVENTS</span>
              <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </Link>
            <button 
              onClick={async () => {
                await supabase.auth.signOut();
              }}
              className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-border leading-none group"
            >
              <span className="relative z-10">SIGN OUT</span>
              <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
          </>
        ) : (
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="relative overflow-hidden bg-background text-foreground h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-border leading-none group"
          >
            <span className="relative z-10">SIGN IN</span>
            <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          </button>
        )}
      </div>

      {/* Mobile Navigation - Full Screen */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[3000] flex flex-col animate-in slide-in-from-top duration-300">
          {/* Close header */}
          <div className="bg-onstage-charcoal flex items-center justify-center py-16 animate-in fade-in duration-500">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-[11px] font-medium uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 flex flex-col bg-background">
            <Link 
              to="/discover" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase border-b border-border tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              DISCOVER
            </Link>
            <button 
              onClick={() => {
                if (user) {
                  navigate('/create-event');
                } else {
                  setPendingRoute('/create-event');
                  setIsAuthOpen(true);
                }
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase border-b border-border tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              CREATE EVENT
            </button>
            <Link 
              to="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase border-b border-border tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
            >
              ABOUT
            </Link>
            {user ? (
              <>
                <Link 
                  to="/my-events" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase border-b border-border tracking-[-0.34px] animate-fade-in"
                  style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
                >
                  MY EVENTS
                </Link>
                <button 
                  onClick={async () => {
                    await supabase.auth.signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase tracking-[-0.34px] animate-fade-in"
                  style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                  setIsAuthOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center text-foreground text-[17px] font-medium uppercase tracking-[-0.34px] animate-fade-in"
                style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
              >
                SIGN IN
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Menu Button - Mobile Only */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden relative overflow-hidden bg-background text-foreground h-[34px] px-3 border border-l-0 border-border flex items-center justify-center text-[11px] font-medium uppercase leading-none group"
      >
        <span className="relative z-10">MENU</span>
        <span className="absolute inset-0 bg-onstage-coral translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
      </button>
    </nav>
    
    <AuthSheet isOpen={isAuthOpen} onClose={() => { setIsAuthOpen(false); setPendingRoute(null); }} />
    </>,
    document.body
  );
};
