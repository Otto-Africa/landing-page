import React from "react";
import Layout from "../layout/layout";
import QRCodeChanger from "../qrcode-changer";
import { FaCheck } from "react-icons/fa";

const LandingPage = () => {
  const valuelist = [
    {
      title: "Secure and Seamless Transactions",
      subtitle:
        " Trust in our secure QR code system for safe and hassle-free payments!",
    },
    {
      title: "Clear payment history",
      subtitle:
        "Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!",
    },
    {
      title: "Multi Channel Payments",
      subtitle:
        "Have more than 1 bank account or credit/debit card? Our platform enables integrated payments.",
    },
  ];

  return (
    <Layout
      body={
        <>
          <section className="w-full bg-[#8dd9ff]/20 flex items-center justify-center pb-8">
            <div className="relative pb-16 lg:min-w-[1330px] lg:max-w-[1920px] w-full px-[5%] lg:px-[17.5%] flex justify-center">
              <div className="w-full lg:max-w-8xl pt-40 lg:pt-64 relative lg:mx-auto ">
                <div className=" w-full lg:flex lg:space-x-[80px]">
                  <div className="w-full lg:w-1/2">
                    <div className="w-full flex flex-col">
                      <p className="leading-[1.2] text-[2.1rem] md:text-[2.8rem] lg:text-[3.2rem] w-[90%] mb-6 font-black">
                        Pay & get paid with cash, gift cards, and more.
                      </p>
                      <p className="lg:text-lg text-slate-500 w-[90%] lg:w-[68.5%] leading-relaxed">
                        Supercharge your payments and gifting, and reward
                        loyalty
                      </p>
                    </div>

                    <div className=" mt-12 lg:mt-16">
                      <div className="flex lg:space-x-4">
                        <button className="h-[48px] lg:h-[52px] bg-[#1b3359] text-white font-medium px-3 lg:px-6 rounded-lg ">
                          Join the Waitlist
                        </button>
                        <button className="h-[48px] lg:h-[52px] text-[#1b3359]  px-6 rounded-lg ">
                          or Contact Us
                        </button>
                      </div>
                      {/* <div className="flex flex-col w-[75%] lg:mt-2 max-lg:w-full max-lg:ml-0">
											<div className="items-center self-stretch bg-gray-100 flex justify-between gap-5 w-full my-auto pl-6 pr-1.5 py-1.5 rounded-md max-lg:max-w-full max-lg:flex-wrap mt-6 lg:mt-10 max-lg:pl-5">
												<label
													htmlFor="email"
													className="text-black text-opacity-70 text-base my-auto">
													Your email...
												</label>
												<button
													type="submit"
													className="text-sky-950 text-center text-base font-semibold leading-10 tracking-tight capitalize whitespace-nowrap bg-gradient-to-br from-white to-gray-50 self-stretch justify-center px-9 py-0.5 rounded-md max-lg:px-5 border border-gray-200"
													Sign up for free
												</button>
											</div>
										</div> */}
                    </div>
                  </div>

                  <div className="flex w-full md:w-3/5 lg:w-1/2 mt-24 lg:-mt-8">
                    <div className="w-full  h-full rounded-2xl lg:p-8">
                      {/* <p className="mb-6 font-semibold">Gift Cards</p> */}
                      <div className="relative h-[16rem] lg:h-[24rem]">
                        <div className="absolute -right-3 lg:-left-40 -top-4 lg:top-48 flex mt-0 lg:w-[262px] max-w-full flex-col self-start">
                          <div className="bg-white z-10 flex justify-between gap-5 p-3 lg:p-5 rounded-xl">
                            <div className="flex flex-col">
                              <div className="text-slate-500 text-sm whitespace-nowrap">
                                Enter amount
                              </div>
                              <div className="text-black text-xl lg:text-2xl font-bold whitespace-nowrap mt-1 lg:mt-3">
                                <span className="text-base">GHS</span>
                                450.00
                              </div>
                            </div>
                            <button
                              className="text-white text-sm font-medium whitespace-nowrap bg-[#1b5459] self-center justify-center my-auto px-4 py-2.5 rounded-[40px]"
                              aria-label="Send"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                        <div className="absolute lg:-top-16 -left-2 lg:-left-12 bg-green-50 w-full h-[160px] lg:h-2/3 rounded-2xl overflow-hidden">
                          <div className="absolute top-6 left-6  bg-white rounded-xl px-4 py-2">
                            <p className=" text-[18px] font-extrabold items-center">
                              <span className="text-[14px] font-semibold mr-1">
                                GHS
                              </span>
                              23
                            </p>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957562/Card-3_mfpbh7.png"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute top-28 rotate-[-5deg] lg:left-12 lg:top-28 lg:-right-32 bg-green-50 w-full h-[160px] lg:h-2/3 rounded-2xl overflow-hidden">
                          <div className="absolute top-6 right-6  bg-white rounded-xl px-4 py-2">
                            <p className=" text-[18px] font-extrabold items-center">
                              <span className="text-[14px] font-semibold mr-1">
                                GHS
                              </span>
                              1000
                            </p>
                          </div>
                          <img
                            src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957728/Card-1_kmrujd.png"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {/* <div className="absolute top-56 lg:top-64 lg:rotate-[16deg] lg:-left-16 flex flex-col text-white font-medium bg-gradient-to-br from-[#1b5459] to-[#1e545a] w-full h-[210px] lg:h-2/3 rounded-3xl overflow-hidden">
												<div className="h-full justify-between z-10">
													<div className="flex items-center place-items-center p-6 lg:p-10 lg:h-3/4">
														<div className="flex space-x-6 items-center pt-16">
															<img
																src="/img/Card-Chip.png"
																alt="Chip Icon"
																className="w-12 lg:w-16 object-contain"
															/>
															<div className="text-xl lg:text-2xl font-semibold ">
																4512 3278 0946
																2231
															</div>
														</div>
													</div>
													<div className="pl-4 lg:pl-8 pb-8 h-1/4">
														<img
															src="/img/logos/Favicon - White@4x-8.png"
															alt="Credit Card Logo"
															className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
														/>
													</div>
												</div>
												<div className="absolute inset-0">
													<img
														src="/img/pattern.png"
														alt=""
														className="inset-0"
													/>
												</div>
											</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full lg:flex items-center justify-center">
            <div className="lg:flex w-full gap-16 mb-8 lg:py-12 mt-8 lg:mt-12 lg:min-w-[1330px] lg:max-w-[1920px] px-[5%] lg:px-[17.5%]">
              <div className="lg:w-1/2 ">
                <div className="flex flex-col  max-lg:flex-col lg:w-full max-lg:ml-0">
                  <p className="text-3xl lg:text-4xl font-bold w-[75%] lg:w-full">
                    Pay or gift with a simple scan
                  </p>
                  <p className="mt-6 lg:mt-4 text-slate-500 lg:text-lg leading-relaxed max-lg:max-w-full">
                    Transform the way you pay and gift, supercharge your
                    payments and earn rewards on your transactions.
                  </p>
                </div>

                <div className="relative bg-gray-50 mt-12 p-8 rounded-2xl ">
                  <div className="flex items-center justify-center p-4 py-16 rounded-2xl">
                    <QRCodeChanger size={300} />
                  </div>
                  <div className=" border absolute top-4 -left-8 bg-white rounded-full px-6 py-2">
                    Scan, Pay, Grow 🥰
                  </div>
                  <div className="relative space-y-6 justify-center">
                    <div className="justify-between items-center flex w-full border -top-8 bg-white p-2 rounded-full">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="h-10 w-16 rounded-full overflow-hidden">
                            <img
                              src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703957412/portrait-lesbian-couple-posing-together_2_kw0ar7.jpg"
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <p className="font-semibold ml-3">Kwasi</p>
                        </div>
                        <button
                          className="text-white text-sm font-medium whitespace-nowrap bg-[#1b5459] self-center aspect-[2.2857142857142856] justify-center my-auto px-4 py-2.5 rounded-[40px]"
                          aria-label="Send"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                    <div className="pt-1 pb-4 space-y-3">
                      <p className="text-xl font-bold">Open on Mobile</p>
                      <p className="text-base lg:w-[80%]">
                        Scan with your phone’s camera or the Otto app to pay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 rounded-3xl space-y-4 mt-8 lg:mt-0">
                {valuelist.map((item) => {
                  return (
                    <div className="flex gap-4 lg:bg-gray-50 lg:pb-6 pt-8 lg:px-6 rounded-2xl w-[90%]">
                      <div className="lg:hidden">
                        <div className="mt-1 bg-[#1b3359] h-8 w-8 flex items-center justify-center rounded-full">
                          <FaCheck color="white" />
                        </div>
                      </div>
                      <div className="justify-center flex flex-col lg:mt-6">
                        <p className="text-xl font-semibold">{item.title}</p>
                        <p className="mt-1 text-slate-500 text-base">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="w-full flex items-center justify-center">
            <div className="flex w-full flex-col my-12 lg:py-12 lg:min-w-[1330px] lg:max-w-[1920px] px-[5%] lg:px-[17.5%] justify-center">
              <div className="lg:flex justify-between items-center z-20 bg-[#1b3359] px-6 py-8 lg:px-16 lg:py-12 rounded-xl max-lg:px-5">
                <h1 className="text-white text-2xl lg:text-4xl font-bold lg:leading-[55px] tracking-tighter">
                  Sign up for free.
                  <br />
                  Supercharge your payments
                </h1>
                <button className="mt-8 lg:mt-0 border h-[48px] lg:h-[64px] rounded-xl px-16 font-semibold bg-[#ffffff] text-black">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default LandingPage;
