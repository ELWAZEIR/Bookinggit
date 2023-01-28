import "./carousel.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  const photo = [
    "https://images.wallpaperscraft.com/image/single/square_france_hotel_de_ville_paris_hotel_28641_2560x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/maldives_tropical_underwater_hotel_82210_2560x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/hotel_room_bed_furniture_design_interior_109666_2560x1080.jpg",
  ];
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={photo[0]} className="d-block img w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={photo[1]} className="d-block img w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={photo[2]} className="d-block img w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    //   <div
    //   id="carouselExampleIndicators"
    //   classNameName="carousel slide"
    //   data-bs-ride="true"
    // >
    //   <div classNameName="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="0"
    //       classNameName="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div classNameName="carousel-inner">
    //     <div classNameName="carousel-item active ">
    //       <img
    //         src={photo[0]}
    //         classNameName="d-block w-100 img"
    //         alt="img"
    //       />
    //     </div>
    //     <div classNameName="carousel-item">
    //       <img
    //         src={photo[1]}
    //         classNameName="d-block w-100 img"
    //         alt="img"
    //       />
    //     </div>
    //     <div classNameName="carousel-item">
    //       <img
    //         src={photo[2]}
    //         classNameName="d-block w-100 img"
    //         alt="img"
    //       />
    //     </div>
    //   </div>
    //   <button
    //     classNameName="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="prev"
    //   >
    //     <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span classNameName="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     classNameName="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="next"
    //   >
    //     <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span classNameName="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Carousel;
