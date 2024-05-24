import React from "react";
import "./businesses.css";
import { CiSearch } from "react-icons/ci";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbUserCog } from "react-icons/tb";
import SerachImg from "./assets/New.png";
import Identify from "./assets/New2.jpg";
import Pay from "./assets/nEW3.jpg";
import Fulfill from "./assets/New4.avif";
import Manage from "./assets/New5.avif";
import hlo from "./assets/hlo.png";
import Card from "./Card";
import TextContent from "./Text_content";
import Cards from "./Cards";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Groupslider from "./Groupslider";
import Gslider from "./Gslider";

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
      e.currentTarget.parentElement.nextSibling.children[0].src = hlo;
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
      <Navbar />
      <Card />
      <TextContent />
      <Gslider/>
      <Groupslider/>
      <Cards />
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="myh lh-sm">
              Simplify Your Ordering Process, <br /> All in One Place
            </h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="row  seracIcon_div " id="firstcol"
              onMouseLeave={removeclass}
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row ">
                <span className="me-3">
                  <CiSearch className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh myh2">Find What You Need</h2>
                  <p className="iconPara">
                    Browse through millions of products and suppliers to <br /> discover the perfect
                    matches for your business.

                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="secondcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row  pt-3 ">
                <span className="me-3">
                  <TbRosetteDiscountCheck className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh myh2"> Choose Wisely</h2>
                  <p className="iconPara">
                    Easy to assess product quality and supplier <br /> capabilities with verified
                    inspections and <br /> user-friendly sourcing tools
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="thirdcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row  pt-3 ">
                <span className="me-3">
                  <MdOutlineSwapVerticalCircle className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh myh2">Pay With Confidence</h2>
                  <p className="iconPara">
                    Complete your transactions securely with over 20+ <br /> currencies and trusted
                    payment methods, including <br /> flexible payment terms.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="fourcol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row  pt-3 ">
                <span className="me-3">
                  <AiOutlineGlobal className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh myh2">Transparent Fulfillment</h2>
                  <p className="iconPara">
                    Meet your logistics needs with customized  solutions.<br /> Track shipments in
                    real-time across a vast network of<br /> regions, utilizing trusted courier services.

                  </p>
                </div>
              </div>
            </div>

            <div
              className="row my-3 seracIcon_div"
              id="fivecol"
              onMouseEnter={changeimg}
            >
              <div className="col-12  d-flex flex-row  pt-3 ">
                <span className="me-3">
                  <TbUserCog className="searchIcon" />
                </span>
                <div className="d-flex flex-column">
                  <h2 className="iconh myh2">Effortless Management</h2>
                  <p className="iconPara">
                    Stay on top of your orders, manage suppliers,<br /> track payments and shipments,
                    and access after-sales <br /> support hassle-free through My Indibaba
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 	d-none d-md-block  d-lg-block">
            <img className="img-fluid rounded-4" src={SerachImg} alt="" />
          </div>
        </div>
      </div>
      <Slider />


      <div className="container  my-4">
        <div className="row my-5">
          <div className="col-12 text-center bus_contentDiv">
            <h2 className="fw-bold ">Empowering businesses through worldwide trade</h2>
            <p>
              Indibaba provides comprehensive B2B trading solutions for small and <br />
              medium-sized businesses worldwide, enabling them to thrive in the <br />digital
              trade landscape, seize global opportunities and expand internationally.
            </p>
          </div>
        </div>



        <div className="row ">
          <div className="col-lg-6 my-2">
            <div className="imgDiv1" >
              <div  className="darkbackcolor2 d-flex  align-items-end ">
              <p className="imgDiv1_para py-3 ps-3 ">
                OUR MISSION <br /><br />
                <span className="imgDiv1_span">
                  Make it easy to do business anywhere
                </span>
              </p>
            </div>
            </div>
          </div>


          <div className="col-lg-6 my-2">
            <div className="imgDivs1 d-flex flex-column align-items-end">
            <div  className="darkbackcolor d-flex  align-items-end ">

              <p className="imgDiv1_para ps-3 py-2">
                OUR ESG PROMISES
                <br /><br />
                <span className="imgDiv1_span">
                  Ethical technology. Sustainable tomorrow
                </span>
              </p>

            </div>
            </div>
          </div>

          {/* <div className="col-lg-6 ">
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
                <div className="col-4">
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
          </div> */}
        </div>
      </div>
      <footer><Navbar1 /></footer>
    </>
  );
};

export default Businesses;

