import PropTypes from "prop-types";

const SidebarNavigation = ({ className = "" }) => {
  return (
    <div
      className={`w-[272px] bg-color-purple-400 flex flex-col items-start justify-start pt-0 px-0 pb-[720px] box-border gap-[60px] text-left text-base text-neutral-white font-text-small-regular mq750:pb-[468px] mq750:box-border mq1025:hidden mq450:gap-[30px] ${className}`}
    >
      <div className="self-stretch h-[900px] relative bg-color-purple-400 hidden" />
      <img
        className="w-24 h-12 relative object-cover hidden z-[3]"
        alt=""
        src="/metjiplogowhite-1@2x.png"
      />
      <button className="cursor-pointer [border:none] py-6 pr-12 pl-[49px] bg-lavenderblush flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-20 w-[272px] relative bg-lavenderblush hidden" />
        <a className="[text-decoration:none] relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-text-small-regular text-neutral-white text-left z-[2]">
          Acmy Solutions
        </a>
      </button>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-color-purple-300">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] z-[1]">
          <div className="self-stretch rounded-3xl bg-lavenderblush flex flex-col items-start justify-start py-2 px-3 text-neutral-white">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L9.65533 13.7538C9.85422 13.8959 10.1267 13.8733 10.2995 13.7005L13.7005 10.2995C13.8733 10.1267 14.1458 10.1041 14.3447 10.2462L21 15M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[83px]">
                Dashboard
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-3xl hidden flex-col items-start justify-start py-2 px-3">
            <div className="w-[107px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/contacts.svg"
              />
              <div className="h-6 flex-1 relative leading-[24px] font-semibold inline-block">
                Contacts
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xl hidden flex-col items-start justify-start py-2 px-3">
            <div className="w-[115px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/templates.svg"
              />
              <div className="h-6 flex-1 relative leading-[24px] inline-block">
                Templates
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xl hidden flex-col items-start justify-start py-2 px-3">
            <div className="w-[122px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/contracts.svg"
              />
              <div className="h-6 flex-1 relative leading-[24px] inline-block">
                Documents
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 rounded-3xl bg-lavenderblush hidden flex-col items-start justify-start py-5 px-4 box-border gap-[16px] text-sm">
        <div className="w-16 h-16 relative text-center text-color-purple-100">
          <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_32px)] w-full h-full">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] box-border border-[0px] border-solid border-color-purple-400" />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] box-border border-[0px] border-solid border-color-purple-100" />
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_13px)] leading-[24px] font-medium inline-block w-[26px]">
              4/5
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch h-6 relative leading-[24px] font-medium inline-block">
            Used Contracts
          </div>
          <div className="self-stretch h-12 relative leading-[24px] text-color-purple-300 inline-block">
            Your team has used 4/5 of your available contracts
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <div className="w-[51px] relative leading-[24px] hidden">Dismiss</div>
          <div className="relative leading-[24px] font-medium">
            Upgrade Plan
          </div>
        </div>
      </div>
      <img
        className="w-[239px] h-px relative hidden"
        alt=""
        src="/divider.svg"
      />
      <div className="w-60 rounded-3xl bg-lavenderblush hidden flex-col items-start justify-start py-2 px-3 box-border">
        <div className="w-[119px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/settings.svg"
          />
          <div className="h-6 flex-1 relative leading-[24px] inline-block">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarNavigation.propTypes = {
  className: PropTypes.string,
};

export default SidebarNavigation;
