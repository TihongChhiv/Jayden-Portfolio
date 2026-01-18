import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";

/* ================= KARAOKE ================= */

import karaokeLogin from "../../assets/karaoke-booking/login.png";
import karaokeSignup from "../../assets/karaoke-booking/user_signup.png";
import adminSignup from "../../assets/karaoke-booking/admin_signup.png";
import karaokeHome from "../../assets/karaoke-booking/user_homepage.png";
import karaokeHour from "../../assets/karaoke-booking/booking_hour.png";
import karaokeBooking from "../../assets/karaoke-booking/user-mybooking.png";
import adminHome from "../../assets/karaoke-booking/admin_homepage.png";
import adminRoom from "../../assets/karaoke-booking/admin_room_manage.png";
import adminCustomer from "../../assets/karaoke-booking/admin_customer_manage.png";
import adminBooking from "../../assets/karaoke-booking/admin_booking_manage.png";

/* ================= ANONHUB ================= */

import anonLogin from "../../assets/AnonHub/login.png";
import anonSignup from "../../assets/AnonHub/signup.png";
import anonHome from "../../assets/AnonHub/homepage.png";
import anonScroll from "../../assets/AnonHub/scrollpage.png";
import anonDetail from "../../assets/AnonHub/postdetail.png";
import anonPost from "../../assets/AnonHub/posting.png";
import anonNoti from "../../assets/AnonHub/noti.png";
import anonProfile from "../../assets/AnonHub/profilepage.png";
import anonEdit from "../../assets/AnonHub/editprofile.png";

/* ================= MOVIE ================= */

import movieHome from "../../assets/movie-booking/homepage.png";
import movieUpcoming from "../../assets/movie-booking/upcoming.png";
import movieDetail from "../../assets/movie-booking/moviedetail.png";
import movieTrailer from "../../assets/movie-booking/trailer.png";
import movieCinema from "../../assets/movie-booking/cinemas.png";
import movieFav from "../../assets/movie-booking/fav.png";

/* ================= NORWORLD ================= */

import norHome from "../../assets/norworld/homepage.png";
import norDetail from "../../assets/norworld/detail page.png";

/* ================= PETSHOP ================= */

import petHome from "../../assets/petshop/homepage.png";
import petPage from "../../assets/petshop/petpage.png";
import petContact from "../../assets/petshop/contact.png";

/* ================= SNAKE ================= */

import snakeHome from "../../assets/Snake-And-Ladder/homepage.jpg";
import snakePlayer from "../../assets/Snake-And-Ladder/numplayer.jpg";
import snakeName from "../../assets/Snake-And-Ladder/name.png";
import snakeColor from "../../assets/Snake-And-Ladder/color.png";
import snakeWin from "../../assets/Snake-And-Ladder/win.jpg";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Karaoke Booking System",
      cover: karaokeHome,
      repo: "https://github.com/TihongChhiv/karaoke_manager",
      tech: ["Next.js", "React", "MongoDB", "TypeScript", "Tailwind", "JWT"],
      desc: "Full-stack karaoke booking system with admin dashboard and real-time room management.",
      features: [
        "Room booking & scheduling",
        "Admin dashboard",
        "JWT authentication",
        "Real-time updates",
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
      ],
    },

    {
      id: 2,
      title: "AnonHub iOS App",
      cover: anonHome,
      repo: "https://github.com/TihongChhiv/Anony-Hub",
      tech: ["SwiftUI", "Firebase", "MVVM"],
      desc: "Anonymous posting mobile app with real-time sync.",
      features: [
        "Anonymous posting",
        "Firebase auth",
        "Realtime database",
        "Profile system",
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
      ],
    },

    {
      id: 3,
      title: "Movie Booking App",
      cover: movieHome,
      repo: "https://github.com/TihongChhiv/Movie-Booking",
      tech: ["Swift", "UIKit", "REST API"],
      desc: "Movie browsing mobile app with trailer playback.",
      features: [
        "Movie listing",
        "Trailer player",
        "Cinema browser",
        "Favorites",
      ],
      images: [
        movieHome,
        movieUpcoming,
        movieDetail,
        movieTrailer,
        movieCinema,
        movieFav,
      ],
    },

    {
      id: 4,
      title: "NorWorld Website",
      cover: norHome,
      repo: "https://github.com/TihongChhiv/NORWORLD",
      tech: ["React", "Vite"],
      desc: "E-commerce UI project.",
      features: ["Responsive UI", "Modern design"],
      images: [norHome, norDetail],
    },

    {
      id: 5,
      title: "PetShop Website",
      cover: petHome,
      repo: "https://github.com/TihongChhiv/petshop",
      tech: ["React", "Frontend"],
      desc: "Pet shop frontend website.",
      features: ["Listing UI", "Responsive layout"],
      images: [petHome, petPage, petContact],
    },

    {
      id: 6,
      title: "Snake & Ladder Java Game",
      cover: snakeHome,
      tech: ["Java", "JavaFX"],
      desc: "Desktop Snake & Ladder game.",
      features: ["Dice system", "Multiplayer", "GUI"],
      images: [
        snakeHome,
        snakePlayer,
        snakeName,
        snakeColor,
        snakeWin,
      ],
    },
  ];

  /* KEYBOARD SWIPE */

  useEffect(() => {
    const handleKey = (e) => {
      if (previewIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setPreviewIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex]);

  const nextImage = () => {
    setPreviewIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setPreviewIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div id="project" className={styles.proj_con}>
      <h3 className={styles.proj_title}>Project</h3>

      <div className={styles.proj_list}>
        {projects.map((project) => (
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

      {/* MODAL */}

      {activeProject && (
        <div
          className={styles.modal_overlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modal_box}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close_btn}
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            {/* VIEW CODE RIGHT */}

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

            <p className={styles.modal_desc}>{activeProject.desc}</p>

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

      {/* IMAGE PREVIEW WITH SWIPE */}

      {previewIndex !== null && (
        <div
          className={styles.preview_overlay}
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className={styles.preview_box}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.preview_close}
              onClick={() => setPreviewIndex(null)}
            >
              ✕
            </button>

            <img
              src={activeProject.images[previewIndex]}
              alt="preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
