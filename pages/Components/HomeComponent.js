import HomeComponentCss from "../CSSfile/ComponentStyle.module.css";
import { BsArrowRight } from 'react-icons/bs'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const HomeComponent = () => {
  return (
    <div className="mb-8">
      <h1 className={`${HomeComponentCss.BusinessInfo} mb-[48px]`}>
        Business Information
      </h1>
      <div>
        <div>
          <div className="flex justify-between">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Business Name *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Country</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          {/* Second input group */}
          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>State *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <select
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              >
                <option disabled selected>
                  Delhi
                </option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Chennai</option>
                <option>Uttar pradesh</option>
                <option>Tamilnadu</option>
              </select>
            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>City *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          {/* Third input */}
          <div>
            <div className=" form-control mt-[25px]">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Address *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>


          {/* 4th and 5th input */}
          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Opening time *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="time"
                placeholder="Type here"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
            
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Closing time *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <input
                type="time"
                className={`w-[360px] input border-0 focus:outline-none ${HomeComponentCss.customInput}`}
              />
            </div>
          </div>

          <div className="flex justify-between mt-[25px]">
            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>E-mail *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>

              <div className={`${HomeComponentCss.backGround} w-[360px] flex justify-between items-center`}>
              <input
                type="email"
                placeholder="Type here"
                className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInputDifferent}`}
              />
              <button className={` ${HomeComponentCss.sendingButton} m-[4px]`}>Sent OTP</button>
              </div>

            </div>

            <div className=" form-control">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Mobile Number *</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>
              <div className={`${HomeComponentCss.backGround} w-[360px] flex justify-between items-center`}>
              <input
                type="email"
                placeholder="Type here"
                className={`w-full input border-0 focus:outline-none ${HomeComponentCss.customInputDifferent}`}
              />
              <button className={` ${HomeComponentCss.sendingButton} m-[4px]`}>Sent OTP</button>
              </div>
            </div>
          </div>


          {/* Uploading image */}
          <div className="mt-[40px]">
          <div className=" form-control w-[360px]">
              <label className="label">
                <span className={`${HomeComponentCss.inputHead}`}>Upload image of your Restaurant</span>
                <span className="label-text-alt"><BsFillInfoCircleFill size={15} color={'#DC3545'}></BsFillInfoCircleFill></span>
              </label>

              <div style={{
                borderRadius: '8px',
                border: '1px solid rgba(18, 18, 18, 0.16)',
                background: 'rgba(229, 229, 229, 0.4)',
                color: 'black'
              }} className={`$${HomeComponentCss.customInputImageUpload} w-[120px] h-[120px]`}>
                <img className="block mx-auto mt-[32px]" src="https://i.ibb.co/HrSFsdc/upload-cloud.png" alt="" />
                <p className="flex justify-center text-black">Click to upload</p>
              </div>
            </div>
          </div>


          {/* Button to proceed */}

          <div className="flex justify-end cursor-pointer">
            <div className={`${HomeComponentCss.proceedButton} w-[464px] h-[50px]`}>
              <p className="flex justify-center mt-3">Proceed to Owner and manager details <span className="mt-[4px] ml-2"><BsArrowRight size={20}></BsArrowRight></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
