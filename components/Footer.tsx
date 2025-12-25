
import React from 'react';
import { SettlaLogo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 text-white pt-24 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 mb-24">
          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Crypto</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Crypto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Settla Ramp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Settla X</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Investments</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Stocks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commodities</a></li>
              <li className="pt-6"><h5 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Company</h5></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Help</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developers API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Site Map</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Security</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">How We Protect</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Lost Device</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fraud Awareness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Bugs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insight Report</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Plans</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Standard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ultra</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Global</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Transfers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eSIM Data</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lounges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donations</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Accounts</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Personal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Joint Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Under 18</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Smart</h5>
            <ul className="space-y-3 text-indigo-200/80 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Settla Pay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Budgeting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rewards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shops</a></li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-white/10 mb-12 gap-8">
          <SettlaLogo className="h-10 w-auto text-white" />
          <div className="flex gap-8">
            {['facebook', 'instagram', 'twitter', 'linkedin', 'tiktok'].map((platform) => (
              <a key={platform} href="#" className="text-white/30 hover:text-white transition-all transform hover:scale-110">
                <span className="sr-only">{platform}</span>
                <div className="w-6 h-6 bg-current rounded-md"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Sub-navigation */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 text-[11px] font-bold text-indigo-200/60 mb-16">
          <div className="flex items-center gap-3 text-white bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="text-lg">🇬🇧</span>
            <span>United Kingdom</span>
          </div>
          <a href="#" className="hover:text-white transition-colors">Website Terms</a>
          <a href="#" className="hover:text-white transition-colors">Legal Agreements</a>
          <a href="#" className="hover:text-white transition-colors">Complaints</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">UK Modern Slavery Policy</a>
          <a href="#" className="hover:text-white transition-colors">Customer Vulnerability</a>
          <a href="#" className="hover:text-white transition-colors">Data Privacy Statement</a>
        </div>

        {/* Legal Disclaimers: Increased contrast (text-indigo-200/70) */}
        <div className="space-y-8 text-xs text-indigo-200/70 leading-relaxed mb-20 border-b border-white/10 pb-20">
          <p className="font-black text-white/90">© Settla Ltd 2025</p>
          <p>
            To find out more about which Settla entity you receive services from, please check our corresponding <a href="#" className="text-indigo-400 hover:text-white underline decoration-indigo-400/30">FAQ page</a>. If you have any other questions, please reach out to us via the in-app chat in the Settla app.
          </p>
          <p>
            Settla Ltd is registered in England and Wales (No. 08804411), is authorised by the Financial Conduct Authority to offer e-money and payment services under the Electronic Money Regulations 2011 (FRN: 900562), and is registered with the Financial Conduct Authority to offer cryptocurrency services under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. Commodities services are provided by Settla Ltd and are not regulated by the Financial Conduct Authority.
          </p>
          <p>
            Settla Travel Ltd (No. 10618740) is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FRN: 780586). Our insurance products are arranged by Settla Travel Ltd and Settla Ltd, an appointed representative of Settla Travel Ltd.
          </p>
          <p>
            Investment services are provided by Settla Trading Ltd (No. 11567840), which is authorised and regulated by the Financial Conduct Authority (FRN: 933846).
          </p>
          <p>
            The registered address of Settla Ltd, Settla Travel Ltd, and Settla Trading Ltd is at 30 South Colonnade, London, United Kingdom, E14 5HX. You can read more about our <a href="#" className="text-indigo-400 hover:text-white underline decoration-indigo-400/30">terms and policies here</a>.
          </p>
        </div>

        {/* Global Links Index: Refined contrast */}
        <div className="space-y-10 text-[10px] text-indigo-200/50 font-medium">
          <div>
            <span className="font-black text-white/60 uppercase mr-6">International Money Transfers:</span>
            <div className="inline-flex flex-wrap gap-x-6 gap-y-2">
              {['India', 'Nigeria', 'Poland', 'Ghana', 'Dubai', 'UK from India', 'Saudi Arabia', 'North Macedonia', 'Kazakhstan'].map((loc) => (
                <a key={loc} href="#" className="hover:text-white hover:underline decoration-white/10">Send Money to {loc}</a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-black text-white/60 uppercase mr-6">Currency Converter:</span>
            <div className="inline-flex flex-wrap gap-x-6 gap-y-2">
              {['GBP to INR', 'USD to GBP', 'GBP to EUR', 'GBP to USD', 'EUR to GBP', 'GBP to PKR', 'GBP to TRY', 'GBP to HKD', 'KRW to GBP', 'AED to GBP', 'INR to GBP', 'GBP to CAD', 'Compare Exchange Rates'].map((conv) => (
                <a key={conv} href="#" className="hover:text-white hover:underline decoration-white/10">Convert {conv}</a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3 pt-6 border-t border-white/5">
            {['Settla USA', 'Settla Spain', 'Settla Australia', 'Settla Singapore', 'Settla Estonia'].map((region) => (
              <a key={region} href="#" className="hover:text-white font-black uppercase tracking-widest text-[9px]">{region}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
