
import React from 'react';
import WorldMap from "./ui/WorldMap";

const RemoteConnectivity: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 w-full font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Branding: Consistent Indigo Header */}
                <h2 className="text-4xl md:text-7xl font-[900] mb-8 text-indigo-950 tracking-tight leading-[1.1]">
                    Connected <span className="text-indigo-600">Everywhere.</span>
                </h2>

                <p className="text-lg md:text-xl text-indigo-900/60 max-w-2xl mx-auto mb-20 leading-relaxed">
                    Financial boundaries are a thing of the past. Move your assets with zero friction across <span className="text-indigo-600 font-bold">170+ territories.</span>
                </p>

                <div className="w-full max-w-6xl mx-auto relative group">
                    {/* Soft background glow */}
                    <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full -z-10 transition-opacity duration-1000"></div>
                    
                    <WorldMap
                        lineColor="#6366f1"
                        dots={[
                            {
                                start: { lat: 40.7128, lng: -74.0060 }, // NYC
                                end: { lat: 51.5074, lng: -0.1278 }, // London
                            },
                            {
                                start: { lat: 34.0522, lng: -118.2437 }, // LA
                                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                            },
                            {
                                start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                                end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                            },
                            {
                                start: { lat: 55.7558, lng: 37.6173 }, // Moscow
                                end: { lat: 25.2048, lng: 55.2708 }, // Dubai
                            },
                            {
                                start: { lat: -23.5505, lng: -46.6333 }, // Sao Paulo
                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                            },
                            {
                                start: { lat: 28.6139, lng: 77.2090 }, // New Delhi
                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                            },
                        ]}
                    />
                </div>

                {/* Performance Stats */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-indigo-950 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-black mb-2 text-indigo-600">170+</p>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-900/40">Regions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-black mb-2 text-indigo-950">50+</p>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-900/40">Currencies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-black mb-2 text-indigo-950">24/7</p>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-900/40">Reliability</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-black mb-2 text-indigo-600">0ms</p>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-900/40">Settlement</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RemoteConnectivity;
