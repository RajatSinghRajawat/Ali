import React, { useState, useEffect, memo, useCallback } from 'react';
import img1 from './assets/all.jpg';
import inkd from './images/INKD850A.jpg';
import inkdi from './assets/card13.jpg';
import ink from './assets/card17.jpg';
 
// const CarouselItem = memo(({ title, subtitle }) => (
//     <div className="carousel-item">
//       <div className="row">
//         <div className="col-12 p-4">
//           <div className="pb-5">
//             <h3 style={{color:"black"}}>{title}</h3>
//             <h5>{subtitle}</h5>
//           </div>
//           <img src={jaggy} className="" alt="..." style={{height:"40px" ,width:"50px", borderRadius: "60px" }} />
//         </div>
//       </div>
//     </div>
//   ));

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length]);

  return (
    <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === currentIndex ? 'active' : ''}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <div className="card p-3" style={{ borderRadius: "20px", border: "None" }}>
            <h6 style={{fontSize:"20px",fontWeight:"700"}}>{item.title}</h6>
            <h6 style={{fontWeight:"400"}}>{item.subtitle}</h6>
            <div
                        style={{
                          width: "100%",
                          height: "65vh",
                        }} >
                        <img
                        src={item.imageSrc}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const Groupslider = () => {
  const carouselItems = [
    // {
    //   imageSrc: jaggy,
    //   title: "Most popular",
    //   subtitle: "Mesh Upper Walking Style Shoes",
    // },
    {
      imageSrc: "https://s.alicdn.com/@sc04/kf/H067911b2521743b3a59ed6e6bf28165e1.jpg_350x350.jpg",
      title: "Most popular",
      subtitle: "Light Canvas Trendy Shoes",
    },
    {
      imageSrc: "https://s.alicdn.com/@sc04/kf/Hb3f8a979909344e58d2b96731d624133r.jpg_350x350.jpg",
      title: "Most popular",
      subtitle: "Passenger Car Wheels For Luxury",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpVnViRu-EmQY7GNmWa8Wk_C0Q9YbGNEXaw&s",
      title: "Most popular",
      subtitle: "Mesh Upper Walking Style Shoes",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNmZkNV8jRdH1SsUGKe4UFKy6F2hXp2jqpw&s",
      title: "Most popular",
      subtitle: "Mesh Upper Walking Style Shoes",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f0f5f1" }}>
      <div className="container-fluid pt-4 pb-5">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-12">
            <div className="pt-5 pb-5">
              <h3 style={{ fontWeight: "500", fontSize: "35px" }}>Navigate toward your next business opportunity</h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-8">
                    <h3>Latest Additions</h3>
                  </div>
                  <div className="col-4">
                    <a href=" " style={{ color: "black" }}>view more</a>
                  </div>
                </div>
                <div className="">
                  <Carousel items={carouselItems} />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 pt-0">
                <div className="row">
                  <div className="col-8">
                    <h3>Deals of The Day </h3>
                  </div>
                  <div className="col-4">
                    <a href=" ">view more</a>
                  </div>
                </div>
                <div className="card" style={{ border: "None", borderRadius: "20px",}}>
                  <div className="p-3">
                    <h4>70,500+ products added today</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-md-3 col-sm-12">
                      <div className="p-2" style={{ alignItems: "center"}}>
                      <div style={{ width: "100%",height: "44vh" }}>
                        <img src={img1} style={{ width: "100%",  height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                      </div>
                        {/* <div>
                          <img src={img1} alt="" style={{ width: "100%", height: "100%",borderRadius:"20px" }} />
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className='d-flex' style={{width:"100%",height:"23vh"}}>
                          <img src={ink} alt="" className='mx-auto' style={{ width: "80%", height: "100%" ,borderRadius:"20px" }} />
                          </div>
                          <div className='d-flex pt-2'>
                          <img src={inkdi} alt="" className='mx-auto' style={{ width: "80%", height: "100%",borderRadius:"20px" }} />
                          </div>
                    </div>
                    
                  </div>
                </div>
               
                <div className='pt-2'>
                  <div className='card p-3' style={{ border: "None", borderRadius: "20px" }} >
                    <div className='row'>
                      <div className="col-4">
                        <img src="https://s.alicdn.com/@sc04/kf/H1c3d35a8efe34402ba48dc012148881fj.jpg_350x350.jpg" alt="" style={{ width: "120px", borderRadius: "20px" }} />
                      </div>
                      <div className="col-7 pt-4">
                        <h5>New this week</h5>
                        <span>Products from Verified Suppliers only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-8">
                    <h3>Personal Protective</h3>
                  </div>
                  <div className="col-4">
                    <a href=" ">view more</a>
                  </div>
                </div>
                <div className=''>
                  <div className='card p-3' style={{ border: "None", borderRadius: "20px" }} >
                    <div className='row'>
                      <div className="col-8 pt-4">
                        <h5>New this week</h5>
                        <span>Products from Verified Suppliers only</span>
                      </div>
                      <div className="col-2">
                        <img src="https://s.alicdn.com/@sc04/kf/H1c3d35a8efe34402ba48dc012148881fj.jpg_350x350.jpg" alt="" style={{ width: "120px", borderRadius: "20px" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-2'>
                  <div className='card p-4' style={{border: "none", borderRadius: "20px",width: "100%",height:"100%", }} >
                    <div className='row'>
                    <div className="col-12 p-2">
                        <h6>Nikoon Camera </h6>
                        <div style={{ width: "100%",height: "43vh" }}>
                        <img src={inkd} style={{ width: "100%",  height: "100%", objectFit: "cover", borderRadius: "20px" }} />
                      </div>



                        {/* <div className='' style={{width:"100%"}}>
                        <img src={inkd} alt="" style={{ width: "84%",height:"90%", objectFit: "cover"}} />
                        </div> */}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Groupslider;
