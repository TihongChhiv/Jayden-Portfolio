import React, { useState, useRef, useEffect } from "react";
import styles from "./Projects.module.css";

/* ================= IMPORTS ================= */

// Karaoke
import karaokeHome from "../../assets/karaoke-booking/user_homepage.png";
import karaokeLogin from "../../assets/karaoke-booking/login.png";
import karaokeSignup from "../../assets/karaoke-booking/user_signup.png";
import karaokeBooking from "../../assets/karaoke-booking/user-mybooking.png";
import karaokeHour from "../../assets/karaoke-booking/booking_hour.png";
import adminHome from "../../assets/karaoke-booking/admin_homepage.png";
import adminRoom from "../../assets/karaoke-booking/admin_room_manage.png";
import adminCustomer from "../../assets/karaoke-booking/admin_customer_manage.png";
import adminBooking from "../../assets/karaoke-booking/admin_booking_manage.png";
import adminSignup from "../../assets/karaoke-booking/admin_signup.png";

// AnonHub
import anonLogin from "../../assets/AnonHub/login.png";
import anonSignup from "../../assets/AnonHub/signup.png";
import anonHome from "../../assets/AnonHub/homepage.png";
import anonScroll from "../../assets/AnonHub/scrollpage.png";
import anonDetail from "../../assets/AnonHub/postdetail.png";
import anonPost from "../../assets/AnonHub/posting.png";
import anonNoti from "../../assets/AnonHub/noti.png";
import anonProfile from "../../assets/AnonHub/profilepage.png";
import anonEdit from "../../assets/AnonHub/editprofile.png";

// Movie
import movieHome from "../../assets/movie-booking/homepage.png";
import movieUpcoming from "../../assets/movie-booking/upcoming.png";
import movieDetail from "../../assets/movie-booking/moviedetail.png";
import movieTrailer from "../../assets/movie-booking/trailer.png";
import movieCinema from "../../assets/movie-booking/cinemas.png";
import movieFav from "../../assets/movie-booking/fav.png";

// NorWorld
import norHome from "../../assets/norworld/homepage.png";
import norDetail from "../../assets/norworld/detail page.png";

// Petshop
import petHome from "../../assets/petshop/homepage.png";
import petPage from "../../assets/petshop/petpage.png";
import petContact from "../../assets/petshop/contact.png";

// Snake
import snakeHome from "../../assets/Snake-And-Ladder/homepage.jpg";
import snakePlayer from "../../assets/Snake-And-Ladder/numplayer.jpg";
import snakeName from "../../assets/Snake-And-Ladder/name.png";
import snakeColor from "../../assets/Snake-And-Ladder/color.png";
import snakeWin from "../../assets/Snake-And-Ladder/win.jpg";

function Projects() {

  const [activeProject, setActiveProject] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [

    {
      id: 1,
      title: "Karaoke Booking System",
      cover: karaokeHome,
      repo: "https://github.com/TihongChhiv/karaoke_manager",
      tech: ["Next.js", "React", "MongoDB", "TypeScript", "Tailwind", "JWT"],
      features: [
        "Room booking & scheduling",
        "Admin management dashboard",
        "JWT authentication system",
        "Real-time booking updates",
        "Responsive UI",
      ],
      images: [
        karaokeLogin,
        karaokeSignup,
        adminSignup,
        karaokeHome,
        karaokeHour,
        karaokeBooking,
        adminHome,
        adminRoom,
        adminCustomer,
        adminBooking,
      ]
    },

    {
      id: 2,
      title: "AnonHub iOS App",
      cover: anonHome,
      repo: "https://github.com/TihongChhiv/Anony-Hub",
      tech: ["SwiftUI", "Firebase", "MVVM"],
      features: [
        "Anonymous posting system",
        "Firebase authentication",
        "Real-time Firestore sync",
        "Profile management",
        "Smooth animations",
      ],
      images: [
        anonLogin,
        anonSignup,
        anonHome,
        anonScroll,
        anonDetail,
        anonPost,
        anonNoti,
        anonProfile,
        anonEdit,
      ]
    },

    {
      id: 3,
      title: "Movie Booking App",
      cover: movieHome,
      repo: "https://github.com/TihongChhiv/Movie-Booking",
      tech: ["Swift", "UIKit", "REST API"],
      features: [
        "Movie listing & detail view",
        "Trailer playback integration",
        "Cinema browser",
        "Favorites system",
      ],
      images: [
        movieHome,
        movieUpcoming,
        movieDetail,
        movieTrailer,
        movieCinema,
        movieFav,
      ]
    },

    {
      id: 4,
      title: "NorWorld Website (On-going)",
      cover: norHome,
      repo: "https://github.com/TihongChhiv/NORWORLD",
      tech: ["React", "Vite", "MongoDB"],
      features: [
        "Modern product UI",
        "Responsive layout",
        "MongoDB backend integration (in progress)",
        "Full-stack architecture planning",
      ],
      images: [norHome, norDetail]
    },

    {
      id: 5,
      title: "PetShop Website",
      cover: petHome,
      repo: "https://github.com/TihongChhiv/petshop",
      tech: ["React", "Vite"],
      features: [
        "Pet listing UI",
        "Responsive design",
        "Component-based layout",
      ],
      images: [petHome, petPage, petContact]
    },

    {
      id: 6,
      title: "Snake & Ladder Game",
      cover: snakeHome,
      tech: ["Java", "JavaFX", "OOP"],
      features: [
        "Two-player mode",
        "Dice rolling system",
        "Snake & ladder mechanics",
        "Graphical UI with JavaFX",
        "Win detection system",
      ],
      images: [
        snakeHome,
        snakePlayer,
        snakeName,
        snakeColor,
        snakeWin,
      ]
    }
  ];

  /* ================= SLIDER LOGIC ================= */

  const nextImage = () => {
    setPreviewIndex(prev =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setPreviewIndex(prev =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  /* KEYBOARD SUPPORT */

  useEffect(() => {
    const handleKey = (e) => {
      if (previewIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setPreviewIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex, activeProject]);

  /* TOUCH / TRACKPAD SWIPE */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 60) nextImage();
    if (diff < -60) prevImage();
  };

  return (
    <div id="projects" className={styles.proj_con}>

      <h3 className={styles.proj_title}>Project</h3>

      <div className={styles.proj_list}>
        {projects.map(project => (
          <div
            key={project.id}
            className={styles.proj_items}
            onClick={() => setActiveProject(project)}
          >
            <div className={styles.image_box}>
              <img src={project.cover} alt={project.title} />
              <button className={styles.view_btn}>View Detail</button>
            </div>
            <p>{project.title}</p>
          </div>
        ))}
      </div>

      {/* ================= DETAIL MODAL ================= */}

      {activeProject && (

        <div
          className={styles.modal_overlay}
          onClick={() => {
            setActiveProject(null);
            setPreviewIndex(null);
          }}
        >

          <div
            className={styles.modal_box}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className={styles.close_btn}
              onClick={() => {
                setActiveProject(null);
                setPreviewIndex(null);
              }}
            >
              ✕
            </button>

            {activeProject.repo && (
              <a
                href={activeProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repo_btn}
              >
                View Code
              </a>
            )}

            <h2>{activeProject.title}</h2>

            <div className={styles.tech_stack}>
              {activeProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <ul className={styles.feature_list}>
              {activeProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className={styles.modal_images}>
              {activeProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  onClick={() => setPreviewIndex(i)}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ================= IMAGE PREVIEW SLIDER ================= */}

      {previewIndex !== null && (

        <div
          className={styles.preview_overlay}
          onClick={() => setPreviewIndex(null)}
        >

          <div
            className={styles.preview_box}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            <button
              className={styles.preview_close}
              onClick={() => setPreviewIndex(null)}
            >
              ✕

            </button>

            <button className={styles.arrow_left} onClick={prevImage}>‹</button>

            <img
              src={activeProject.images[previewIndex]}
              alt="preview"
            />

            <button className={styles.arrow_right} onClick={nextImage}>›</button>

            {/* ===== DOT INDICATOR (FIXED) ===== */}

            <div className={styles.dots}>
              {activeProject.images.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${
                    previewIndex === i ? styles.active_dot : ""
                  }`}
                  onClick={() => setPreviewIndex(i)}
                />
              ))}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Projects;
