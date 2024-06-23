import SidebarNavigation from "./components/SidebarNavigation";
import HeaderNavigationV from "./components/HeaderNavigationV";
import WelcomeBaner from "./components/WelcomeBaner";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-color-grey-100 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
      <SidebarNavigation />
      <main className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_272px)] mq1025:max-w-full">
        <HeaderNavigationV />
        <WelcomeBaner/>
        <section className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-color-text-primary font-text-small-regular">
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq1125:flex-wrap">
            <div className="w-[658px] rounded-lg bg-neutral-white box-border flex flex-col items-end justify-start pt-0 pb-3 px-0 relative gap-[10px] min-w-[658px] max-w-full shrink-0 border-[1px] border-solid border-color-strokes mq1025:min-w-full mq1125:flex-1">
              <div className="self-stretch h-[634px] relative rounded-lg bg-neutral-white box-border hidden z-[0] border-[1px] border-solid border-color-strokes" />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full text-xs">
                <div className="flex-1 flex flex-col items-start justify-center pt-3 px-0 pb-0 box-border max-w-full z-[1]">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 px-4 gap-[471px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-base">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[45px]">
                          Tasks
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                      <div className="h-[26px] rounded-2xl bg-color-purple-100 hidden flex-row items-center justify-start py-0.5 px-2 box-border gap-[6px] text-center text-color-purple-400">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        <div className="self-stretch relative leading-[22px] font-medium whitespace-nowrap">
                          60 Templates
                        </div>
                      </div>
                      <div className="h-8 hidden flex-col items-start justify-center text-color-strokes">
                        <div className="w-[300px] flex-1 flex flex-col items-start justify-center">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                            <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-3xl bg-neutral-white flex flex-row items-center justify-start py-[5px] px-[13px] border-[1px] border-solid border-color-strokes">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                                <img
                                  className="h-4 w-4 relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/search-1.svg"
                                />
                                <div className="self-stretch relative leading-[22px]">
                                  Search
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-8 w-[156px] hidden flex-row items-center justify-end py-0 pr-0 pl-[3px] box-border gap-[16px] text-color-pink-400">
                      <div className="h-[30px] flex-1 rounded-3xl flex flex-row items-center justify-end py-1 px-0 box-border">
                        <div className="self-stretch relative leading-[22px] font-medium">
                          See more
                        </div>
                      </div>
                      <div className="rounded-3xl bg-color-pink-400 hidden flex-row items-center justify-end py-1 pr-4 pl-[13px] gap-[4px] whitespace-nowrap text-sm text-neutral-white">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/add.svg"
                        />
                        <div className="relative leading-[24px] font-medium">
                          Create New Template
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative bg-gray-200 hidden z-[2]" />
              <div className="w-[679px] flex flex-col items-end justify-start max-w-[104%] shrink-0">
                <div className="w-[656px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full text-3xs">
                  <div className="h-12 flex-1 bg-whitesmoke-100 flex flex-col items-start justify-start py-[18px] px-0 box-border gap-[18px] max-w-full z-[1] mq450:h-auto">
                    <div className="w-[644px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[17px]">
                          <div className="relative inline-block min-w-[31px]">
                            Status
                          </div>
                          <div className="relative inline-block min-w-[53px]">
                            Task Name
                          </div>
                        </div>
                        <div className="w-[219px] flex flex-row items-start justify-start gap-[39px]">
                          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                            <div className="relative inline-block min-w-[53px]">
                              Created by
                            </div>
                          </div>
                          <div className="relative inline-block min-w-[34px]">
                            Priority
                          </div>
                          <div className="relative inline-block min-w-[23px]">
                            Date
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative bg-gray-200 shrink-0" />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end pt-0 px-4 pb-[11px] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <input
                        className="m-0 w-5 h-5 rounded z-[1]"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border max-w-full">
                      <div className="relative leading-[24px] z-[1]">
                        Franklin More’s professional review is pending
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[15px] text-xs">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm">
                        <div className="relative leading-[24px] inline-block min-w-[105px] z-[1]">
                          Brandon Mango
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0 text-center text-blue-1">
                        <div className="rounded-2xl bg-dodgerblue flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1]">
                          <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                          <div className="relative leading-[22px] font-medium inline-block min-w-[24px]">
                            Low
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                        <div className="relative leading-[22px] inline-block min-w-[39px] z-[1]">
                          Sep 12
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[656px] h-[11px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-gray-200 max-w-full z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-end pt-0 px-4 pb-[11px] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[24px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <input
                        className="m-0 w-5 h-5 rounded z-[1]"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0 box-border max-w-full">
                      <div className="relative leading-[24px] z-[1]">
                        Internship Agreement template is not completed
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0">
                      <div className="relative leading-[24px] inline-block min-w-[90px] z-[1]">
                        James Walter
                      </div>
                    </div>
                    <div className="rounded-2xl bg-indianred flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-xs text-red">
                      <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                      <div className="relative leading-[22px] font-medium inline-block min-w-[27px]">
                        High
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-xs text-color-text-secondary">
                      <div className="relative leading-[22px] inline-block min-w-[39px] z-[1]">
                        Sep 10
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[656px] h-[11px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-gray-200 max-w-full z-[1]" />
                </div>
                <div className="w-[656px] flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-xs text-color-pink-400">
                  <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <div className="!m-[0] absolute bottom-[-24px] left-[44px] rounded-3xl flex flex-row items-start justify-start py-1 px-0 z-[1]">
                      <div className="relative leading-[22px] font-medium inline-block min-w-[78px]">
                        Mark as done
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[14px] max-w-full text-sm text-color-text-primary mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <div className="flex flex-row items-start justify-start">
                          <input
                            className="m-0 h-5 w-5 rounded z-[1]"
                            type="checkbox"
                          />
                          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 ml-[-10px]">
                            {/* <div className="relative leading-[24px] inline-block min-w-[20px] z-[3]">
                              👆🏼
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border min-w-[220px] max-w-full">
                        <div className="relative leading-[24px] z-[1]">
                          Contract #2564 need Charlie Puth’s signature
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[26px] text-xs">
                        <div className="flex flex-col items-start justify-start pt-px pb-0 pr-3.5 pl-0 text-sm">
                          <div className="relative leading-[24px] inline-block min-w-[80px] z-[1]">
                            Allison Torff
                          </div>
                        </div>
                        <div className="rounded-2xl bg-dodgerblue flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-blue-1">
                          <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                          <div className="relative leading-[22px] font-medium inline-block min-w-[24px]">
                            Low
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                          <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                            Sep 08
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                  <div className="flex flex-row items-start justify-start relative">
                    <img
                      className="h-[17px] w-[17px] absolute !m-[0] top-[-7px] left-[40.5px] rounded-[1px] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/bottomcenter.svg"
                    />
                    <button className="cursor-pointer py-1.5 px-2 bg-neutral-white shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] rounded-13xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-color-stroke-light">
                      <div className="h-[42px] w-[99px] relative shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] rounded-13xl bg-neutral-white box-border hidden border-[1px] border-solid border-color-stroke-light" />
                      <div className="rounded-2xl bg-goldenrod flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1]">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        {/* <div className="relative text-xs leading-[22px] font-medium font-text-small-regular text-yellow text-center inline-block min-w-[67px]">
                          In-Progress
                        </div> */}
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-[656px] flex flex-row items-start justify-end pt-0 px-4 pb-[11px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-center gap-[24px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <input
                        className="m-0 w-5 h-5 rounded z-[1]"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border min-w-[214px] max-w-full">
                      <div className="relative leading-[24px] z-[1]">
                        David Gram’s professional review is pending
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12.5px] text-xs">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm">
                        <div className="relative leading-[24px] inline-block min-w-[98px] z-[1]">
                          Chance Kenter
                        </div>
                      </div>
                      <div className="rounded-2xl bg-goldenrod flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-yellow">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        <div className="relative leading-[22px] font-medium inline-block min-w-[47px]">
                          Medium
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                        <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                          Sep 08
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[656px] h-[11px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-gray-200 max-w-full z-[1]" />
                </div>
                <div className="w-[656px] flex flex-row items-start justify-end pt-0 px-4 pb-3 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <input
                        className="m-0 w-5 h-5 rounded z-[1]"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-[27px] pl-0 box-border min-w-[214px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[24px] z-[1]">
                          Contract #2564 need Charlie Puth’s signature
                        </div>
                        <div className="rounded-3xl flex flex-row items-start justify-start py-1 px-0 z-[1] text-xs text-color-pink-400">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[78px]">
                            Mark as done
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[24px] text-xs">
                      <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0 text-sm">
                        <div className="relative leading-[24px] inline-block min-w-[86px] z-[1]">
                          Nolan Philips
                        </div>
                      </div>
                      <div className="rounded-2xl bg-indianred flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-red">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        <div className="relative leading-[22px] font-medium inline-block min-w-[27px]">
                          High
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                        <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                          Sep 08
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[656px] h-[11px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-gray-200 max-w-full z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-end py-0 px-4 box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <input
                        className="m-0 w-5 h-5 rounded z-[1]"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border max-w-full">
                      <div className="relative leading-[24px] z-[1]">
                        Franklin More’s professional review is pending
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[26px] text-xs">
                      <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[7px] pl-0 text-sm">
                        <div className="relative leading-[24px] inline-block min-w-[87px] z-[1]">
                          Zain Culhane
                        </div>
                      </div>
                      <div className="rounded-2xl bg-dodgerblue flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-blue-1">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        <div className="relative leading-[22px] font-medium inline-block min-w-[24px]">
                          Low
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                        <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                          Sep 06
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative bg-gray-200 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-[18px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <input
                      className="m-0 w-5 h-5 rounded z-[1]"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0 box-border min-w-[214px] max-w-full">
                    <div className="relative leading-[24px] z-[1]">
                      Internship Agreement template is not completed
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[26px] text-xs">
                    <div className="flex flex-col items-start justify-start pt-px pb-0 pr-1.5 pl-0 text-sm">
                      <div className="relative leading-[24px] inline-block min-w-[88px] z-[1]">
                        Paityn Gouse
                      </div>
                    </div>
                    <div className="rounded-2xl bg-dodgerblue flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-blue-1">
                      <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                      <div className="relative leading-[22px] font-medium inline-block min-w-[24px]">
                        Low
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                      <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                        Sep 06
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px absolute !m-[0] top-[275px] right-[0px] left-[0px] bg-gray-200 z-[1]" />
              <div className="self-stretch h-px relative bg-gray-200 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-[18px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[9px] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pr-[15px] pl-0">
                    <input
                      className="m-0 w-5 h-5 rounded z-[1]"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[224px] max-w-full">
                    <div className="self-stretch relative leading-[24px] z-[1]">
                      Ze hinzek osodojov dibiilo ut soj cujlen sivige osuac fej
                      rehop ri uzewe unatagtiv
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px] text-xs">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm">
                      <div className="relative leading-[24px] inline-block min-w-[99px] z-[1]">
                        Jakob Baptista
                      </div>
                    </div>
                    <div className="rounded-2xl bg-goldenrod flex flex-row items-start justify-start py-0.5 px-2 gap-[6px] z-[1] text-center text-yellow">
                      <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                      <div className="relative leading-[22px] font-medium inline-block min-w-[47px]">
                        Medium
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-right text-color-text-secondary">
                      <div className="relative leading-[22px] inline-block min-w-[41px] z-[1]">
                        Sep 04
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[5px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-gray-200 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] text-center text-base text-dark-grey-400">
                <div className="w-52 flex flex-row items-start justify-start gap-[8px]">
                  <div className="w-10 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border text-sm font-ui-small-strong">
                    <div className="self-stretch h-8 relative rounded bg-neutral-white box-border overflow-hidden shrink-0 z-[1] border-[1px] border-solid border-whitesmoke-200">
                      <img
                        className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                        loading="lazy"
                        alt=""
                        src="/ic--carat--left.svg"
                      />
                      <div className="absolute h-[calc(100%_-_10px)] w-[calc(100%_-_8px)] top-[5px] left-[4px] leading-[20px] font-medium hidden">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="w-8 flex flex-row items-start justify-start z-[1] text-color-pink-400">
                    <div className="flex-1 rounded bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-[3px] border-[1px] border-solid border-color-pink-400">
                      <img
                        className="h-6 w-6 relative hidden"
                        alt=""
                        src="/ic--carat--left1.svg"
                      />
                      <div className="w-6 relative tracking-[-0.1px] leading-[24px] font-semibold inline-block shrink-0">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[8px] text-color-text-primary">
                    <div className="flex-1 flex flex-row items-start justify-start z-[1]">
                      <div className="flex-1 rounded bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-[3px] border-[1px] border-solid border-gainsboro">
                        <img
                          className="h-6 w-6 relative hidden"
                          alt=""
                          src="/ic--carat--left1.svg"
                        />
                        <div className="w-6 relative leading-[24px] inline-block shrink-0">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start z-[1]">
                      <div className="flex-1 rounded bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-[3px] border-[1px] border-solid border-gainsboro">
                        <img
                          className="h-6 w-6 relative hidden"
                          alt=""
                          src="/ic--carat--left1.svg"
                        />
                        <div className="w-6 relative leading-[24px] inline-block shrink-0">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-8 w-8 relative rounded overflow-hidden shrink-0 object-contain min-h-[32px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/page--master@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[440px] flex flex-col items-start justify-start gap-[16px] min-w-[440px] max-w-full shrink-0 text-xs mq750:min-w-full mq1125:flex-1">
              <div className="self-stretch rounded-lg bg-neutral-white flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[13px] shrink-0 border-[1px] border-solid border-color-strokes">
                <div className="self-stretch h-[255px] relative rounded-lg bg-neutral-white box-border hidden border-[1px] border-solid border-color-strokes" />
                <div className="self-stretch flex flex-col items-start justify-center pt-3 px-0 pb-0 z-[1]">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[471px] mq750:flex-wrap mq750:gap-[235px] mq450:gap-[118px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="flex flex-row items-center justify-start gap-[8px] text-base">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[117px]">
                          Tasks Priorities
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                      <div className="h-[26px] rounded-2xl bg-color-purple-100 hidden flex-row items-center justify-start py-0.5 px-2 box-border gap-[6px] text-center text-color-purple-400">
                        <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                        <div className="self-stretch relative leading-[22px] font-medium">
                          60
                        </div>
                      </div>
                      <div className="h-8 hidden flex-col items-start justify-center text-color-strokes">
                        <div className="w-[300px] flex-1 flex flex-col items-start justify-center">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                            <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-3xl bg-neutral-white flex flex-row items-center justify-start py-[5px] px-[13px] border-[1px] border-solid border-color-strokes">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                                <img
                                  className="h-4 w-4 relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/search-1.svg"
                                />
                                <div className="self-stretch relative leading-[22px]">
                                  Search
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-8 flex-1 flex flex-row items-center justify-end gap-[16px] text-sm text-color-pink-400">
                      <div className="w-[153px] rounded-3xl bg-neutral-white box-border hidden flex-row items-center justify-end py-0.5 px-[15px] whitespace-nowrap border-[1px] border-solid border-color-pink-400">
                        <div className="h-6 flex-1 relative leading-[24px] font-medium inline-block">
                          Secondary Button
                        </div>
                      </div>
                      <div className="rounded-3xl bg-color-pink-400 hidden flex-row items-center justify-end py-1 pr-4 pl-[13px] gap-[4px] whitespace-nowrap text-neutral-white">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/add.svg"
                        />
                        <div className="relative leading-[24px] font-medium whitespace-nowrap">
                          Create New Template
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-gray-200 z-[1]" />
                <div className="self-stretch h-[166px] flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border text-sm text-color-text-secondary">
                  <div className="self-stretch w-52 flex flex-row items-end justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                      <div className="flex flex-row items-start justify-start pt-1.5 px-0 pb-0 z-[1]">
                        <div className="h-2 w-2 relative rounded-[50%] bg-red" />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
                      <div className="flex-1 flex flex-row items-start justify-start py-0 px-2">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[12px] z-[1]">
                          <div className="self-stretch w-[46px] relative rounded-lg bg-blue-1" />
                          <div className="h-[79px] w-[46px] relative rounded-lg bg-red" />
                          <div className="h-8 w-[46px] relative rounded-lg bg-yellow" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="relative leading-[20px] inline-block min-w-[31px] z-[1]">
                          High
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start pt-1.5 px-0 pb-0 z-[1]">
                            <div className="h-2 w-2 relative rounded-[50%] bg-yellow" />
                          </div>
                          <div className="relative leading-[20px] inline-block min-w-[53px] z-[1]">
                            Medium
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start pt-1.5 px-0 pb-0 z-[1]">
                            <div className="h-2 w-2 relative rounded-[50%] bg-blue-1" />
                          </div>
                          <div className="relative leading-[20px] inline-block min-w-[28px] z-[1]">
                            Low
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-white box-border flex flex-col items-end justify-start pt-0 px-0 pb-4 gap-[3px] max-w-full shrink-0 border-[1px] border-solid border-color-strokes">
                <div className="self-stretch h-[365px] relative rounded-lg bg-neutral-white box-border hidden border-[1px] border-solid border-color-strokes" />
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-center pt-3 px-0 pb-0 box-border max-w-full z-[1]">
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-4 gap-[253px] mq750:flex-wrap mq750:gap-[126px] mq450:gap-[63px]">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start gap-[8px] text-base">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
                            Activity Feed
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                            alt=""
                            src="/chevrondown1.svg"
                          />
                        </div>
                        <div className="h-[26px] rounded-2xl bg-color-purple-100 hidden flex-row items-center justify-start py-0.5 px-2 box-border gap-[6px] text-center text-color-purple-400">
                          <div className="h-1.5 w-1.5 relative rounded-[50%] bg-color-success-light hidden" />
                          <div className="self-stretch relative leading-[22px] font-medium whitespace-nowrap">
                            60 Templates
                          </div>
                        </div>
                        <div className="h-8 hidden flex-col items-start justify-center text-color-strokes">
                          <div className="w-[300px] flex-1 flex flex-col items-start justify-center">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                              <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-3xl bg-neutral-white flex flex-row items-center justify-start py-[5px] px-[13px] border-[1px] border-solid border-color-strokes">
                                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                                  <img
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/search-1.svg"
                                  />
                                  <div className="self-stretch relative leading-[22px]">
                                    Search
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-8 w-[156px] flex flex-row items-center justify-end gap-[16px] shrink-0 text-color-pink-400">
                        <div className="self-stretch rounded-3xl hidden flex-row items-center justify-center py-1 px-0">
                          <div className="relative leading-[22px] font-medium">
                            See more
                          </div>
                        </div>
                        <div className="rounded-3xl bg-color-pink-400 hidden flex-row items-center justify-end py-1 pr-4 pl-[13px] gap-[4px] whitespace-nowrap text-sm text-neutral-white">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0"
                            alt=""
                            src="/add.svg"
                          />
                          <div className="relative leading-[24px] font-medium">
                            Create New Template
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-gray-200 z-[1]" />
                <div className="w-[427px] flex flex-row items-start justify-end py-0 px-[3px] box-border max-w-full text-sm">
                  <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[9px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15.5px] max-w-full">
                        <div className="w-[398px] flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
                          <img
                            className="h-8 w-8 relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/group-1728@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start min-w-[233px] max-w-full">
                            <div className="self-stretch relative leading-[24px] z-[1]">
                              <span>
                                <span className="font-semibold">
                                  Kushantha Charuka
                                </span>
                                <span className="font-text-small-regular">{` created `}</span>
                              </span>
                              <span className="font-semibold text-color-pink-400">
                                Contract #00124 need John Beige’s signature
                              </span>
                            </div>
                            <div className="relative text-xs leading-[22px] text-color-text-secondary whitespace-nowrap z-[1]">
                              Sep 16, 2022 at 11:30 AM
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-color-stroke-light" />
                        <div className="w-[398px] flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
                          <img
                            className="h-8 w-8 relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/group-1728-1@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start min-w-[233px] max-w-full">
                            <div className="self-stretch relative leading-[24px] z-[1]">
                              <span>{`Lorem ipsum `}</span>
                              <span className="font-semibold">
                                dolor sit amet,
                              </span>
                              <span>{` consectetur adipiscing elit. `}</span>
                              <span className="font-semibold">Maecenas</span>
                              <span> pretium neque</span>
                            </div>
                            <div className="relative text-xs leading-[22px] text-color-text-secondary whitespace-nowrap z-[1]">
                              Sep 16, 2022 at 11:45 AM
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-color-stroke-light" />
                        <div className="w-[398px] flex flex-row items-start justify-start gap-[8px] max-w-full mq450:flex-wrap">
                          <img
                            className="h-8 w-8 relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/group-1728-1@2x.png"
                          />
                          <div className="flex-1 relative leading-[24px] inline-block min-w-[233px] max-w-full z-[1]">
                            <span>{`Lorem ipsum `}</span>
                            <span className="font-semibold">
                              dolor sit amet,
                            </span>
                            <span>{` consectetur adipiscing elit. `}</span>
                            <span className="font-semibold">Maecenas</span>
                            <span> pretium neque</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
                        <div className="w-1 h-[255px] relative rounded bg-color-grey-100 box-border z-[1] border-[0.5px] border-solid border-color-grey-300">
                          <div className="absolute h-full w-full top-[0%] right-[-66.67%] bottom-[-0.79%] left-[0%] rounded bg-color-grey-100 box-border hidden border-[0.5px] border-solid border-color-grey-300" />
                          <div className="absolute h-[38.58%] w-[133.33%] top-[0%] right-[-33.33%] bottom-[61.42%] left-[0%] rounded bg-color-grey-300 z-[1]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-10 text-xs text-color-text-secondary">
                      <div className="relative leading-[22px] whitespace-nowrap z-[2]">
                        Sep 16, 2022 at 11:45 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
