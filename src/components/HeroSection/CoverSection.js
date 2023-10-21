// import ImageSlider from "../ImageSlider/ImageSlider";
import SideMenu from "../SideMenu/SideMenu";

// const images = [
//   {
//     src: "/slideImage1.jpg",
//     alt: "Image 1",
//     header: "Image 1 Header",
//     description: "Description for Image 1",
//     link: "/",
//   },
//   {
//     src: "/slideImage2.jpg",
//     alt: "Image 2",
//     header: "Image 2 Header",
//     description: "Description for Image 2",
//     link: "/",
//   },

//   {
//     src: "/slideImage3.jpg",
//     alt: "Image 3",
//     header: "Image 3 Header",
//     description: "Description for Image 3",
//     link: "/",
//   },
// ];

const CoverSection = () => {
  return (
    <>
      <div className=" flex flex-row justify-between gap-6">
        <div>
          <SideMenu />
        </div>
        <div className="flex justify-center">
          {/* <ImageSlider images={images} /> */}
        </div>
      </div>
    </>
  );
};

export default CoverSection;
