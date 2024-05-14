import React, { useState, useEffect } from "react";
import "./businesses.css";
import { CiSearch } from "react-icons/ci";
import { TbRosetteDiscountCheck, TbUserCog } from "react-icons/tb";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
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
  const [currentImage, setCurrentImage] = useState(SerachImg);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const { id } = e.currentTarget;
      switch (id) {
        case "firstcol":
          setCurrentImage(SerachImg);
          break;
        case "secondcol":
          setCurrentImage(Identify);
          break;
        case "thirdcol":
          setCurrentImage(Pay);
          break;
        case "fourcol":
          setCurrentImage(Fulfill);
          break;
        case "fivecol":
          setCurrentImage(Manage);
          break;
        default:
          setCurrentImage(SerachImg);
          break;
      }
      e.currentTarget.classList.add("addh2");
      e.currentTarget.querySelector(".iconPara").classList.add("addpara");
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.classList.remove("addh2");
      e.currentTarget.querySelector(".iconPara").classList.remove("addpara");
    };

    const columns = document.querySelectorAll(".seracIcon_div");
    columns.forEach((col) => {
      col.addEventListener("mouseenter", handleMouseEnter);
      col.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      columns.forEach((col) => {
        col.removeEventListener("mouseenter", handleMouseEnter);
        col.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Card />
      <TextContent />
      <Cards />

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="myh lh-sm">
              Streamline ordering from search to <br /> fulfillment, all in one
              place
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row seracIcon_div" id="firstcol">
              <div className="col-12 d-flex flex-row">
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

            <div className="row my-3 seracIcon_div" id="secondcol">
              <div className="col-12 d-flex flex-row">
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

            <div className="row my-3 seracIcon_div" id="thirdcol">
              <div className="col-12 d-flex flex-row">
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

            <div className="row my-3 seracIcon_div" id="fourcol">
              <div className="col-12 d-flex flex-row">
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

            <div className="row my-3 seracIcon_div" id="fivecol">
              <div className="col-12 d-flex flex-row">
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
          <div className="col-md-6 d-none d-md-block d-lg-block">
            <img className="img-fluid" src={currentImage} alt="" />
          </div>
        </div>
      </div>
      <Slider />
      <div className="container my-4">
        <div className="row my-5">
          <div className="col-12 text-center bus_contentDiv">
            <h2 className="fw-bold">
              Empowering businesses through global trade
            </h2>
            <p>
              Indibaba.com offers one-stop B2B trading solutions for global
              small and medium-sized businesses, <br />
              empowering them to transform through digital trade, grasp
              opportunities, and accelerate growth <br /> internationally.
            </p>
          </div>
        </div>
        <div className="row">
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
          <div className="col-lg-6">
            <div className="container">
              <div className="row mb-4 imgDiv2">
                <div className="col-8 d-flex">
                  <p className="imgDiv2_para ps-3">
                    OUR MISSION <br />
                    <span className="imgDiv2f_span">
                      We have teams around the world.
                    </span>
                  </p>
                </div>
                <div className="col-4">
                  <p className="sd">
                    Hangzhou, China <br /> Paris, France <br /> Munich, Germany{" "}
                    <br /> Tokyo, Japan <br />
                    Seoul, Korea <br /> London, UK <br /> New York, US <br />
                    ... <br /> and many other <br />
                    locations <br /> worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col imgDiv3 d-flex align-items-center">
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
      <footer>
        <Navbar1 />
      </footer>
    </>
  );
};

export default Businesses;
