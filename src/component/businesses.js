import React from "react";
import "./businesses.css";
import { CiSearch } from "react-icons/ci";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbUserCog } from "react-icons/tb";
import SerachImg from "./assets/search.jpg";
import Identify from "./assets/Identify.jpg";
import Pay from "./assets/Pay.jpg";
import Fulfill from "./assets/Fulfill.jpg";
import Manage from "./assets/Manage.jpg";
import Card from "./Card";
import TextContent from "./Text_content";
import Cards from "./Cards";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";

const Businesses = () => {
  let parent1 = document.getElementById("firstcol");
  let parent2 = document.getElementById("secondcol");
  let parent3 = document.getElementById("thirdcol");
  let parent4 = document.getElementById("fourcol");
  let parent5 = document.getElementById("fivecol");

  const changeimg = (e) => {
    let myh2 = e.currentTarget.children[0].children[1].children[0];
    myh2.classList.add("addh2");

    let mypara = e.currentTarget.children[0].children[1].children[1];
    mypara.classList.add("addpara");

    if (e.currentTarget.id == "firstcol") {
      e.currentTarget.parentElement.nextSibling.children[0].src = SerachImg;
    } else if (e.currentTarget.id == "secondcol") {
      e.currentTarget.parentElement.nextSibling.children[0].src = Identify;
    } else if (e.currentTarget.id == "thirdcol") {
      e.currentTarget.parentElement.nextSibling.children[0].src = Pay;
    } else if (e.currentTarget.id == "fourcol") {
      e.currentTarget.parentElement.nextSibling.children[0].src = Fulfill;
    } else if (e.currentTarget.id == "fivecol") {
      e.currentTarget.parentElement.nextSibling.children[0].src = Manage;
    }
  };

  const removeclass = (e) => {
    let myh2 = e.currentTarget.children[0].children[1].children[0];
    myh2.classList.remove("addh2");
    let mypara = e.currentTarget.children[0].children[1].children[1];
    mypara.classList.remove("addpara");
  };

  return (
    <>
      <Navbar/>
      <Card/>
      <TextContent/>
      <Cards/>
      
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="myh lh-sm">
              Streamline ordering from search to <br /> fulfillment, all in one
              place
            </h3>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div
              className="row  seracIcon_div "
              id="firstcol"
              onMouseLeave={removeclass}
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row ">
                <span className="me-3">
                  <CiSearch className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh">Search for matches</h2>
                  <p className="iconPara">
                    Search and filter from millions of product and supplier
                    offerings to <br /> find the matching ones for your
                    business.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="secondcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row   ">
                <span className="me-3">
                  <TbRosetteDiscountCheck className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh">Identify the right one</h2>
                  <p className="iconPara">
                    Evaluate product quality and supplier capabilities easily
                    and <br />
                    efficiently through verified inspections and digital
                    sourcing tools.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="thirdcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row   ">
                <span className="me-3">
                  <MdOutlineSwapVerticalCircle className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh">Pay with confidence</h2>
                  <p className="iconPara">
                    Pay for your order in over 20 currencies via 20+ secure
                    payment <br /> methods, including flexible payment terms.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="fourcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row   ">
                <span className="me-3">
                  <AiOutlineGlobal className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh">Fulfill with transparency</h2>
                  <p className="iconPara">
                    Get your logistics needs fulfilled with customized solutions
                    at the <br /> Alibaba.com Logistics Marketplace, with
                    real-time tracking for <br /> 26,000+ routes across 220
                    countries and regions, all powered by <br /> Alibaba.com
                    Logistics.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="fivecol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row   ">
                <span className="me-3">
                  <TbUserCog className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh">Manage with ease</h2>
                  <p className="iconPara">
                    Check order status, manage suppliers, track payments and{" "}
                    <br />
                    shipments, and contact after-sales support all via My
                    Alibaba.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 	d-none d-md-block d-lg-block">
            <img className="img-fluid" src={SerachImg} alt="" />
          </div>
        </div>
      </div>
      <Slider/>
      <div className="container  my-4">
        <div className="row my-5">
          <div className="col-12 text-center bus_contentDiv">
            <h2 className="fw-bold">Empowering businesses through global trade</h2>
            <p>
              Indibaba.com offers one-stop B2B trading solutions for global small
              and medium-sized businesses, <br />
              empowering them to transform through digital trade, grasp
              opportunities, and accelerate growth <br /> internationally.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <div className="imgDiv1 d-flex align-items-end">
              <p className="imgDiv1_para ps-3">
                OUR MISSION <br />
                <span className="imgDiv1_span">
                  Make it easy to do business anywhere.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="container">
            <div className="row mb-4 imgDiv2">
                  <div className="col-8 d-flex ">
                    <p className="imgDiv2_para ps-3 ">
                      OUR MISSION <br />
                      <span className="imgDiv2f_span">
                        We have teams around the world.
                      </span>
                    </p>
                  </div>
                  <div className="col-4 ">
                    <p className="sd">
                      Hangzhou, China <br /> Paris, France <br /> Munich,
                      Germany <br /> Tokyo, Japan <br />
                      Seoul, Korea <br /> London, UK <br /> New York, US <br />
                      ... <br /> and many other <br />
                      locations <br /> worldwide.
                    </p>
                  </div>
            </div>
            </div>

            <div className="container">
            <div className="row ">
              <div className="col imgDiv3  d-flex align-items-center">
                <p className="imgDiv3_para ps-3">
                  OUR ESG PROMISES
                  <br />
                  <span className="imgDiv3_span">
                    Responsible technology. Sustainable future.
                  </span>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <footer><Navbar1/></footer>
    </>
  );
};

export default Businesses;
