import PropTypes from "prop-types";

const HeaderNavigationV = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-neutral-white flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border gap-[23px] max-w-full text-left text-sm text-color-text-primary font-text-small-regular ${className}`}
    >
      <div className="self-stretch h-20 relative bg-neutral-white hidden" />
      <img
        className="w-6 h-6 relative rounded-lg overflow-hidden shrink-0 hidden"
        alt=""
        src="/rightmenu.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-[104%] shrink-0 text-xl">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
          <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[32px] font-semibold text-[inherit] inline-block min-w-[103px] z-[1] mq450:text-base mq450:leading-[26px]">
            Dashboard
          </a>
          <div className="w-[120px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9997 19C14.9997 20.6569 13.6566 22 11.9997 22C10.3429 22 8.99972 20.6569 8.99972 19M13.7962 6.23856C14.2317 5.78864 14.4997 5.17562 14.4997 4.5C14.4997 3.11929 13.3804 2 11.9997 2C10.619 2 9.49972 3.11929 9.49972 4.5C9.49972 5.17562 9.76772 5.78864 10.2032 6.23856M17.9997 11.2C17.9997 9.82087 17.3676 8.49823 16.2424 7.52304C15.1171 6.54786 13.591 6 11.9997 6C10.4084 6 8.8823 6.54786 7.75708 7.52304C6.63186 8.49823 5.99972 9.82087 5.99972 11.2C5.99972 13.4818 5.43385 15.1506 4.72778 16.3447C3.92306 17.7056 3.5207 18.3861 3.53659 18.5486C3.55476 18.7346 3.58824 18.7933 3.73906 18.9036C3.87089 19 4.53323 19 5.85791 19H18.1415C19.4662 19 20.1286 19 20.2604 18.9036C20.4112 18.7933 20.4447 18.7346 20.4629 18.5486C20.4787 18.3861 20.0764 17.7056 19.2717 16.3447C18.5656 15.1506 17.9997 13.4818 17.9997 11.2Z"
                  stroke="#757575"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/belloff.svg"
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#757575"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] hidden flex-col items-start justify-start gap-[4px] max-w-full text-color-text-secondary">
        <div className="w-[280px] relative leading-[24px] text-color-text-primary hidden">
          Name
        </div>
        <div className="self-stretch flex-1 rounded-3xl box-border flex flex-row items-start justify-start py-2 px-[13px] gap-[32px] max-w-full text-base border-[1px] border-solid border-color-strokes">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/search.svg"
            />
            <div className="self-stretch relative leading-[24px]">
              Search...
            </div>
          </div>
          <img
            className="h-6 w-6 relative hidden min-h-[24px]"
            alt=""
            src="/calendar.svg"
          />
        </div>
        <div className="w-[280px] relative leading-[24px] hidden">
          This is a hint text to help user
        </div>
      </div>
      <div className="w-[139px] hidden flex-col items-start justify-start text-neutral-white">
        <div className="self-stretch rounded-3xl bg-color-pink-400 flex flex-row items-center justify-center py-2 px-4 gap-[4px] whitespace-nowrap">
          <div className="h-6 flex-1 relative leading-[24px] font-medium inline-block">
            Create New
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/chevrondown-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-px relative shadow-[0px_1px_4px_rgba(0,_0,_0,_0.08)] bg-color-stroke-light z-[1]" />
    </section>
  );
};

HeaderNavigationV.propTypes = {
  className: PropTypes.string,
};

export default HeaderNavigationV;
