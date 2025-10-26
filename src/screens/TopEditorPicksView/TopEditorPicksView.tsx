import React, { useEffect, useState } from 'react';

interface TopEditorPicksViewProps {
  onBack: () => void;
}

export const TopEditorPicksView: React.FC<TopEditorPicksViewProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <div 
      className={`w-full transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Container */}
      <div className="w-full flex flex-col items-start gap-[27px] pt-[160px] pb-8">
        {/* Back Button */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div 
            onClick={onBack}
            className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H1M1 7L7 13M1 7L7 1" stroke="#203468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[#606F7F] text-sm font-normal leading-5" style={{ fontFamily: 'Work Sans' }}>
              Back to Full Article
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center gap-10">
          {/* Header Section */}
          <div className="w-full flex flex-col items-center gap-[41px]">
            <div className="w-full max-w-[1020px] px-4 flex flex-col gap-6">
              {/* Title and Description */}
              <div className="flex flex-col gap-2">
                <h1 
                  className="text-black text-[40px] font-bold leading-[48px]" 
                  style={{ fontFamily: 'Schnyder S' }}
                >
                  Top Editor Picks for Pet Insurance
                </h1>
                <p className="text-[#606F7F] text-base font-normal leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                  After evaluating 10 providers across 34 categories, and analyzing 72,002 datapoints, we narrowed our recommendations across three areas. These are not the only good options-but they're the three our editors would actually buy for their own pets. The right choice ultimately depends on what you're optimizing for. Here's how we'd choose.
                </p>
              </div>

              {/* Authors */}
              <div className="flex flex-wrap items-center gap-10">
                {/* Writer 1 */}
                <div className="flex items-center gap-3">
                  <img 
                    src="https://placehold.co/40x40" 
                    alt="Author" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#333333] text-sm font-semibold leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Written By</span>
                      <span className="text-[#333333] text-sm font-semibold underline leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Ashlee Valentine</span>
                    </div>
                    <div className="text-[#333333] text-xs font-normal leading-4" style={{ fontFamily: 'Work Sans' }}>Staff Editor</div>
                  </div>
                </div>

                {/* Writer 2 */}
                <div className="flex items-center gap-3">
                  <img 
                    src="https://placehold.co/40x40" 
                    alt="Author" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#333333] text-sm font-semibold leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Written By</span>
                      <span className="text-[#333333] text-sm font-semibold underline leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Ashlee Valentine</span>
                    </div>
                    <div className="text-[#333333] text-xs font-normal leading-4" style={{ fontFamily: 'Work Sans' }}>Staff Editor</div>
                  </div>
                </div>

                {/* Expert Reviewer */}
                <div className="flex items-center gap-3">
                  <img 
                    src="https://placehold.co/40x40" 
                    alt="Expert" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#333333] text-sm font-semibold leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Expert Reviewed By</span>
                      <span className="text-[#333333] text-sm font-semibold underline leading-[19.60px]" style={{ fontFamily: 'Work Sans' }}>Ashlee Valentine</span>
                    </div>
                    <div className="text-[#333333] text-xs font-normal leading-4" style={{ fontFamily: 'Work Sans' }}>Staff Editor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparison Section */}
          <div className="w-full max-w-[1019px] px-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-2xl font-bold leading-8" style={{ fontFamily: 'Work Sans' }}>
                Quick Comparison
              </h2>
              <p className="text-[#606F7F] text-base font-normal leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                Here are our top 3 picks.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="flex flex-col">
              {/* Header Row */}
              <div className="flex">
                <div className="flex-1 h-[50px] pt-[13px] pb-[15px] px-[9px] bg-[#ECF1FF] rounded-tl-lg border border-[#CED4DB]" />
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-[#ECF1FF] border border-l-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Lemonade</div>
                </div>
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-[#ECF1FF] border border-l-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Spot</div>
                </div>
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-[#ECF1FF] rounded-tr-lg border border-l-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Embrace</div>
                </div>
              </div>

              {/* Best For Row */}
              <TableRow 
                label="Best For" 
                values={['Budget-conscious', 'Balanced coverage', 'High-risk breeds']}
                isAlternate
              />

              {/* Monthly Cost Row */}
              <TableRow 
                label="Monthly Cost" 
                values={['$25 for dogs, $20 for cats', '$35 for dogs, $10 for cats', '$27 for dogs, $22 for cats']}
              />

              {/* Reimbursement Row */}
              <TableRow 
                label="Reimbursement" 
                values={['60%–90%', '70%', '85%']}
                isAlternate
              />

              {/* Annual Limit Row */}
              <TableRow 
                label="Annual Limit" 
                values={['$20,000', '$15,000', '$15,000']}
              />

              {/* Hereditary Coverage Row */}
              <TableRow 
                label="Hereditary Coverage" 
                values={['Standard', 'Standard', 'Comprehensive']}
                isAlternate
              />

              {/* Wellness Add-On Row */}
              <TableRow 
                label="Wellness Add-On" 
                values={['Yes', 'No', 'No']}
              />

              {/* Apply Now Row */}
              <div className="flex">
                <div className="flex-1 h-[50px] pt-[13px] pb-[15px] px-[9px] bg-white border border-t-0 border-[#CED4DB]" />
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-white border border-l-0 border-t-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px] cursor-pointer hover:opacity-70" style={{ fontFamily: 'Work Sans' }}>Apply Now</div>
                </div>
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-white border border-l-0 border-t-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px] cursor-pointer hover:opacity-70" style={{ fontFamily: 'Work Sans' }}>Apply Now</div>
                </div>
                <div className="flex-1 pt-[13px] pb-[15px] px-[9px] bg-white border border-l-0 border-t-0 border-[#CED4DB] flex flex-col">
                  <div className="text-[#007AC8] text-sm font-semibold underline leading-[22px] cursor-pointer hover:opacity-70" style={{ fontFamily: 'Work Sans' }}>Apply Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Picks Section */}
          <div className="w-full max-w-[1019px] px-4 flex flex-col gap-10">
            <h2 className="text-black text-2xl font-bold leading-8" style={{ fontFamily: 'Work Sans' }}>
              Our Picks
            </h2>

            <div className="flex flex-col gap-4">
              {/* Price Pick */}
              <PickCard 
                category="Price"
                title="If price matters most - "
                provider="Lemonade"
                description="Go with Lemonade. At $25/month, you're paying less than half what you'd pay for Trupanion. Yes, the 70% reimbursement means higher out-of-pocket costs per claim, but if you're protecting against catastrophic expenses and can handle $1-2K yourself, this wins on pure economics."
              />

              {/* Coverage Pick */}
              <PickCard 
                category="Coverage"
                title="When looking at coverage - "
                provider="Spot"
                description="Begin with essential GPS tracking and basic reporting, then gradually add advanced features as your team adapts to the system."
              />

              {/* Balance Pick */}
              <PickCard 
                category="Balance"
                title="If you want the best balance - "
                provider="Embrace"
                description="Begin with essential GPS tracking and basic reporting, then gradually add advanced features as your team adapts to the system."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
interface TableRowProps {
  label: string;
  values: string[];
  isAlternate?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ label, values, isAlternate }) => {
  const bgColor = isAlternate ? '#FAFBFF' : 'white';
  
  return (
    <div className="flex">
      <div 
        className="flex-1 pt-[13px] pb-[15px] px-[9px] border border-t-0 border-[#CED4DB] flex flex-col"
        style={{ background: bgColor }}
      >
        <div className="text-black text-sm font-semibold leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{label}</div>
      </div>
      {values.map((value, index) => (
        <div 
          key={index}
          className="flex-1 pt-[13px] pb-[15px] px-[9px] border border-l-0 border-t-0 border-[#CED4DB] flex flex-col"
          style={{ background: bgColor }}
        >
          <div className="text-[#6A6A6A] text-sm font-normal leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{value}</div>
        </div>
      ))}
    </div>
  );
};

interface PickCardProps {
  category: string;
  title: string;
  provider: string;
  description: string;
}

const PickCard: React.FC<PickCardProps> = ({ category, title, provider, description }) => {
  return (
    <div className="p-6 bg-[#F8F8FA] rounded-[24.64px] flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="text-black text-base font-normal underline leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
          {category}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-black text-xl font-semibold leading-[26px]" style={{ fontFamily: 'Work Sans' }}>{title}</span>
            <span className="text-[#007AC8] text-xl font-semibold underline leading-[26px] cursor-pointer hover:opacity-70" style={{ fontFamily: 'Work Sans' }}>{provider}</span>
          </div>
          <p className="text-[#606F7F] text-base font-normal leading-6" style={{ fontFamily: 'Work Sans' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

