import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import Modal from "./Modal";

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [searchKey, setSearchKey] = useState("fruits");
  const [modal, setModal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [displayImage, setDisplayImage] = useState({ imageUrl: "" });

  const presentImage = (index) => {
    const image = images[index].largeImageURL;
    setDisplayImage({
      imageUrl: image,
    });
    setModal(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const key = "38222196-4b84e11103f8736becb034c76";
    const url = `https://pixabay.com/api/?key=${key}&q=${searchKey}&image_type=photo&pretty=true`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { hits } = data;
        setImages(hits);
      })
      .catch((error) => console.log(error));
  }, [searchKey]);
  return (
    <>
      <>
        <h1
          className="heading"
          style={{
            textAlign: "center",
            fontSize: "70px",
            color: "rgb(177,46,177)",
          }}
        >
          PHOTO GALLERY
        </h1>
        <Search setSearchKey={setSearchKey} prevSearch={searchKey} />
        <section className="imageContainer">
          {images.map((image, key) => (
            <ProductCard
              key={key}
              presentImage={presentImage}
              index={key}
              download={image.pageURL}
              likes={image.likes}
              views={image.views}
              imageUrl={image.webformatURL}
              user={image.user}
            />
          ))}
        </section>
      </>

      {showModal === true ? (
        <Modal
          displayImage={displayImage}
          modal={modal}
          presentImage={presentImage}
          imageLength={images.length}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default PhotoGallery;
