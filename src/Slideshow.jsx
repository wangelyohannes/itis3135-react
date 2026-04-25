import { useEffect, useRef, useState } from "react";
import useTitle from "./useTitle";
import "./styles/slideshow.css";

export default function Slideshow() {
  useTitle("React Slideshow");

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("Loading slideshow images...");
  const timerRef = useRef(null);

  useEffect(function () {
    fetch("https://api.thedogapi.com/v1/images/search?limit=10")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setImages(data);
        setMessage("");
      })
      .catch(function () {
        setMessage("Images could not be loaded. Please try again later.");
      });
  }, []);

  useEffect(
    function () {
      if (isPlaying && images.length > 0) {
        timerRef.current = window.setInterval(function () {
          setCurrentIndex(function (previousIndex) {
            if (previousIndex === images.length - 1) {
              return 0;
            }

            return previousIndex + 1;
          });
        }, 5000);
      }

      return function () {
        window.clearInterval(timerRef.current);
      };
    },
    [isPlaying, images.length],
  );

  function showFirst() {
    setCurrentIndex(0);
  }

  function showPrevious() {
    setCurrentIndex(function (previousIndex) {
      if (previousIndex === 0) {
        return images.length - 1;
      }

      return previousIndex - 1;
    });
  }

  function showNext() {
    setCurrentIndex(function (previousIndex) {
      if (previousIndex === images.length - 1) {
        return 0;
      }

      return previousIndex + 1;
    });
  }

  function showLast() {
    setCurrentIndex(images.length - 1);
  }

  function playSlideshow() {
    setIsPlaying(true);
  }

  function stopSlideshow() {
    setIsPlaying(false);
    window.clearInterval(timerRef.current);
  }

  const currentImage = images[currentIndex];

  return (
    <>
      <h2>React Slideshow</h2>

      <section className="slideshow-panel">
        <h3>Wandering Yonko Dog Gallery</h3>
        <p>
          This slideshow uses The Dog API to fetch images. Use the buttons below
          to move through the gallery manually or play the slideshow on a timer.
        </p>

        {message && <p className="slideshow-message">{message}</p>}

        {currentImage && (
          <figure className="slideshow-frame">
            <img
              src={currentImage.url}
              alt="Dog slideshow selection"
              className="slideshow-image"
            />
            <figcaption>
              Image {currentIndex + 1} of {images.length}
            </figcaption>
          </figure>
        )}

        <div className="slideshow-controls">
          <button type="button" onClick={showFirst} disabled={!images.length}>
            First
          </button>
          <button
            type="button"
            onClick={showPrevious}
            disabled={!images.length}
          >
            Previous
          </button>
          <button type="button" onClick={showNext} disabled={!images.length}>
            Next
          </button>
          <button type="button" onClick={showLast} disabled={!images.length}>
            Last
          </button>
          <button
            type="button"
            onClick={playSlideshow}
            disabled={!images.length}
          >
            Play
          </button>
          <button type="button" onClick={stopSlideshow}>
            Stop
          </button>
        </div>
      </section>
    </>
  );
}
