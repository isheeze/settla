
import React, { useEffect, useRef } from 'react';
import { SettlaLogo } from './Logo';

const HeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);
    const centerCardRef = useRef<HTMLDivElement>(null);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);
    const finalTextRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY.current;
            lastScrollY.current = currentScrollY;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollHeight = rect.height - viewportHeight;
            
            // Progress goes from 0 to 1 based on how much of the 400vh has been scrolled
            const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));

            // --- ANIMATION LOGIC ---
            
            // 1. Hero Text Content Fade/Translate
            const heroFadeProgress = Math.max(0, 1 - progress * 3.5);
            if (heroContentRef.current) {
                heroContentRef.current.style.opacity = `${heroFadeProgress}`;
                heroContentRef.current.style.transform = `translateX(${-80 * progress}px)`;
            }

            // 2. Center Card Expansion & Positioning
            if (centerCardRef.current) {
                // Starts as a small-ish card on the right, grows to fill most space or centers
                // Scale from roughly 1.4 down to 1.0 (or vice versa depending on vibe)
                const scale = 1.3 - (0.3 * progress);
                const borderRadius = Math.max(12, 40 * progress);
                const xOffset = window.innerWidth > 1024 ? (1 - progress) * 70 : 0;
                centerCardRef.current.style.transform = `translateX(${xOffset}%) scale(${scale})`;
                centerCardRef.current.style.borderRadius = `${borderRadius}px`;
            }

            // 3. Side Cards appearing at the end
            const sideProgress = Math.max(0, (progress - 0.55) * 2.5);
            if (leftCardRef.current) {
                leftCardRef.current.style.opacity = `${sideProgress}`;
                leftCardRef.current.style.transform = `translateX(${(-160 * (1 - sideProgress))}px) rotate(${(-5 * (1 - sideProgress))}deg)`;
            }
            if (rightCardRef.current) {
                rightCardRef.current.style.opacity = `${sideProgress}`;
                rightCardRef.current.style.transform = `translateX(${(160 * (1 - sideProgress))}px) rotate(${(5 * (1 - sideProgress))}deg)`;
            }

            // 4. Final Text "Your salary, reimagined"
            if (finalTextRef.current) {
                const textOpacity = Math.max(0, (progress - 0.75) * 4);
                finalTextRef.current.style.opacity = `${textOpacity}`;
                finalTextRef.current.style.transform = `translateY(${30 * (1 - textOpacity)}px)`;
            }

            // --- SNAPPING MECHANISM ---
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                if (progress > 0.05 && progress < 0.95) {
                    const sectionTop = sectionRef.current!.offsetTop;
                    const sectionBottom = sectionTop + scrollHeight;
                    if (isScrollingDown) {
                        window.scrollTo({ top: sectionBottom, behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
                    }
                }
            }, 100); 
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[400vh] bg-slate-50 text-indigo-950 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

                {/* Phase 1: Main Hero Text */}
                <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10 pointer-events-none pt-20">
                    <div ref={heroContentRef} className="lg:w-1/2 transition-all duration-75">
                        <h1 className="text-6xl lg:text-[5.5rem] font-[800] leading-[1.05] tracking-tight mb-8 text-indigo-950">
                            Move money <br /> <span className="text-indigo-600">without borders.</span>
                        </h1>
                        <p className="text-xl text-indigo-900/70 mb-10 max-w-md leading-relaxed">
                            Spend, send, and save in over 40 currencies. Settla is the one-tap solution for the modern global citizen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 pointer-events-auto">
                            <button className="bg-indigo-600 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-2xl shadow-indigo-400/30 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
                                Get Started for Free
                            </button>
                            <button className="bg-white border-2 border-indigo-100 text-indigo-900 px-10 py-5 rounded-full font-extrabold text-lg hover:border-indigo-200 transition-all">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-full" />
                </div>

                {/* Phase 2: Final Text (appears on scroll) */}
                <div ref={finalTextRef} className="absolute top-32 text-center z-20 opacity-0 px-6">
                    <h2 className="text-4xl md:text-7xl font-black text-indigo-950 tracking-tight">Financial freedom, <span className="text-indigo-600">unlocked.</span></h2>
                    <p className="mt-6 text-indigo-900/60 font-medium text-lg max-w-2xl mx-auto">One account for every currency. No hidden fees. Real exchange rates.</p>
                </div>

                {/* Cards Container */}
                <div className="relative flex items-center justify-center w-full max-w-7xl px-6 mt-20 lg:mt-40">
                    {/* Left Card */}
                    <div ref={leftCardRef} className="hidden lg:block relative w-72 h-[460px] rounded-[2.5rem] bg-white shadow-2xl opacity-0 z-0 overflow-hidden mx-4 border border-indigo-50">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/travel/600/1000)' }} />
                        <div className="absolute inset-0 bg-indigo-950/20" />
                        <div className="absolute top-10 left-10"><SettlaLogo className="h-10 w-auto text-white" /></div>
                        <div className="absolute bottom-12 w-full px-10 text-white">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Savings • EUR</p>
                            <h3 className="text-5xl font-black mt-1">€12,840</h3>
                        </div>
                    </div>

                    {/* Center Card (Primary) */}
                    <div ref={centerCardRef} className="relative w-[340px] h-[520px] md:w-[380px] md:h-[580px] z-10 shadow-[0_48px_80px_-16px_rgba(49,46,129,0.3)] overflow-hidden transform-gpu flex-shrink-0 mx-4 border border-indigo-100">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/money/800/1200)' }} />
                        <div className="absolute inset-0 bg-indigo-900/10" />
                        <div className="absolute top-12 left-12"><SettlaLogo className="h-12 w-auto text-white" /></div>
                        <div className="absolute bottom-16 w-full px-12 text-white">
                            <p className="text-sm font-bold uppercase tracking-widest opacity-90 mb-2">Main Account • GBP</p>
                            <h3 className="text-6xl font-black mt-1">£42,019</h3>
                            <div className="mt-8 flex gap-2">
                                <div className="h-1.5 w-12 bg-white rounded-full"></div>
                                <div className="h-1.5 w-4 bg-white/40 rounded-full"></div>
                                <div className="h-1.5 w-4 bg-white/40 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div ref={rightCardRef} className="hidden lg:block relative w-72 h-[460px] rounded-[2.5rem] bg-white shadow-2xl opacity-0 z-0 overflow-hidden mx-4 border border-indigo-50">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/business/600/1000)' }} />
                        <div className="absolute inset-0 bg-indigo-950/30" />
                        <div className="absolute top-10 left-10"><SettlaLogo className="h-10 w-auto text-white" /></div>
                        <div className="absolute bottom-12 w-full px-10 text-white">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Business • USD</p>
                            <h3 className="text-5xl font-black mt-1">$8,250</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
