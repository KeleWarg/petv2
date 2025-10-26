import React, { useState, useEffect } from 'react';

interface DiveIntoDataViewProps {
  onBack: () => void;
}

export const DiveIntoDataView: React.FC<DiveIntoDataViewProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return (
    <div 
      className={`w-full transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="w-full flex flex-col items-start gap-[27px] pt-[160px] pb-8">
        {/* Back Button */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div 
            onClick={onBack}
            className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#203468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[#606F7F] text-sm font-normal leading-5" style={{ fontFamily: 'Work Sans' }}>Back to Full Article</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <main className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-8 sm:gap-10 md:gap-12 bg-white py-4 sm:py-6 md:py-0 w-full mx-auto">
            <div className="flex flex-col items-start gap-10 w-full">
              {/* Pet Insurance Cost Section */}
              <section id="insurance-cost" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
                      Pet Insurance Cost for Dogs and Cats
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      The table below shows the average monthly cost for the leading pet insurance providers for dogs and cats.
                    </p>
                  </div>
                </div>
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px]">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[25%] rounded-tl-[8px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Average Monthly for Dogs</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Average Monthly for Cats</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tr-[16px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Pets Best</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$52</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$36</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://petsbest.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Figo</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$79</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$53</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://figo.pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Chewy</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$89</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$62</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://chewy.com/insurance/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Embrace</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$75</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$53</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://embracepetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Spot</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$93</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$65</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://spotpetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Lemonade</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$48</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>$34</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://lemonade.com/pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

              {/* Plan Details Section */}
              <section id="plan-details" className="flex flex-col items-start gap-10 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
                      Pet Insurance Plan Details
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Understanding the different coverage options of plans is essential in choosing the best plan for your pet. Here are the most important pet insurance plan information:
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="w-full overflow-x-auto relative">
                    <table className="w-full border-separate border-spacing-0 table-fixed min-w-[1200px] relative">
                      <thead>
                        <tr>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[10%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[13%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Age Restrictions</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Waiting Periods</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>End of Life Expenses</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Vet Exam Fees</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Microchipping</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[11%] rounded-tr-[16px] overflow-hidden" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Pets Best Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Pets Best</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>7 weeks and older</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>3 days for accidents, 14 days for illnesses and 6 months for cruciate ligament conditions</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://petsbest.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        {/* Figo Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Figo</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>8 weeks and older</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>1 day for accidents, 14 days for illnesses and 6 months for orthopedic conditions (can be waived with an orthopedic waiver within the first 30 days of the policy)</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://figo.pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        {/* Chewy Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Chewy</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>None</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>5 days for accidents, 14 days for illnesses; no special waiting period for orthopedic conditions</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Available as an add on</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://chewy.com/insurance/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        {/* Embrace Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Embrace</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>6 weeks to 15 years</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Accident coverage begins at 12:01 a.m. ET the day after you purchase your policy; 14 days for illnesses; 6 months for orthopedic conditions (can be reduced to 14 days with an orthopedic exam)</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Available as an add on</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://embracepetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        {/* Spot Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Spot</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>8 weeks and older</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>14 days for accidents and illnesses; no extended waiting period for orthopedic conditions</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://spotpetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        {/* Lemonade Row */}
                        <tr>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Lemonade</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Upper limit based on breed</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Accident coverage begins at 12:01 a.m. the day after you purchase a plan; 14 days for illnesses; 30 days for orthopedic conditions</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Available as an add on</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Included</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href="https://lemonade.com/pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                    <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                      <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </section>

              {/* User Opinion Section */}
              <section id="user-opinion" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
                      User Opinion of Pet Insurance Companies
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Forbes Advisor collects user sentiment both directly through NPS surveys and indirectly by collecting user feedback across the internet using the Consumer Sentiment Index (CSI). This is how real users described their opinion of leading pet insurance companies:
                    </p>
                  </div>
                </div>

                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[1000px] relative">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>CSI Rating</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[18%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>How Likely to Recommend</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[22%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Common Positive Sentiments</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[22%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Common Negative Sentiments</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[11%] rounded-tr-[8px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Pets Best Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Pets Best</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>5.5/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Loved it, easy to change</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Terrible customer service</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://petsbest.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Figo Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Figo</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>9.3/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Good prices</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Slow processing</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://figo.pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Chewy Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Chewy</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>4.8/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Easy to sign up</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Bad customer service</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://chewy.com/insurance/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Embrace Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Embrace</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>2.8/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>-</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Too expensive</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://embracepetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Spot Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Spot</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>8.7/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Low price</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Price changes</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://spotpetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Lemonade Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Lemonade</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>7.3/10</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very likely</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Fast claims payment</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>-</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://lemonade.com/pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

              {/* Claims Feedback Section */}
              <section id="claims-feedback" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
                      User Feedback on Claims Process
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Forbes Advisor surveyed users of each pet insurance company to get feedback on the claims process. This table displays real pet insurance user opinion of claims over a 12 month period from 2023 to 2024.
                    </p>
                  </div>
                </div>

                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px] relative">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[25%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Satisfaction with Claims</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Overall Satisfaction</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tr-[16px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Pets Best Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Pets Best</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://petsbest.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Figo Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Figo</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://figo.pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Chewy Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Chewy</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://chewy.com/insurance/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Embrace Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Embrace</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Very satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://embracepetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Spot Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Spot</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://spotpetinsurance.com/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      {/* Lemonade Row */}
                      <tr>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Lemonade</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Somewhat satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Not satisfied</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                            <a href="https://lemonade.com/pet/apply" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

