import React, { useState } from "react";
import styles from "./Projects.module.css";

/* ================= KARAOKE ================= */

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

/* ================= ANONHUB ================= */

import anonHome from "../../assets/AnonHub/homepage.png";
import anonLogin from "../../assets/AnonHub/login.png";
import anonSignup from "../../assets/AnonHub/signup.png";
import anonPost from "../../assets/AnonHub/posting.png";
import anonDetail from "../../assets/AnonHub/postdetail.png";
import anonProfile from "../../assets/AnonHub/profilepage.png";
import anonEdit from "../../assets/AnonHub/editprofile.png";
import anonScroll from "../../assets/AnonHub/scrollpage.png";
import anonNoti from "../../assets/AnonHub/noti.png";

/* ================= MOVIE ================= */

import movieHome from "../../assets/movie-booking/homepage.png";
import movieCinema from "../../assets/movie-booking/cinemas.png";
import movieFav from "../../assets/movie-booking/fav.png";
import movieDetail from "../../assets/movie-booking/moviedetail.png";
import movieTrailer from "../../assets/movie-booking/trailer.png";
import movieUpcoming from "../../assets/movie-booking/upcoming.png";

/* ================= NORWORLD ================= */

import norHome from "../../assets/norworld/homepage.png";
import norDetail from "../../assets/norworld/detail page.png";

/* ================= PETSHOP ================= */

import petHome from "../../assets/petshop/homepage.png";
import petPage from "../../assets/petshop/petpage.png";
import petContact from "../../assets/petshop/contact.png";

/* ================= SNAKE & LADDER ================= */

import snakeHome from "../../assets/Snake-And-Ladder/homepage.jpg";
import snakeWin from "../../assets/Snake-And-Ladder/win.jpg";
import snakeColor from "../../assets/Snake-And-Ladder/color.png";
import snakeName from "../../assets/Snake-And-Ladder/name.png";
import snakePlayer from "../../assets/Snake-And-Ladder/numplayer.jpg";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
        "Admin management dashboard",
        "JWT authentication system",
        "Real-time booking updates",
        "Responsive UI",
      ],
      images: [
        karaokeHome,
        karaokeLogin,
        karaokeSignup,
        karaokeBooking,
        karaokeHour,
        adminHome,
        adminRoom,
        adminCustomer,
        adminBooking,
        adminSignup,
      ],
    },

    {
      id: 2,
      title: "AnonHub iOS App",
      cover: anonHome,
      repo: "https://github.com/TihongChhiv/Anony-Hub",
      tech: ["SwiftUI", "Firebase", "MVVM"],
      desc: "Anonymous real-time posting app built with SwiftUI and Firebase backend.",
      features: [
        "Anonymous posting system",
        "Firebase authentication",
        "Real-time Firestore sync",
        "Profile management",
        "Smooth animations",
      ],
      images: [
        anonHome,
        anonLogin,
        anonSignup,
        anonPost,
        anonDetail,
        anonProfile,
        anonEdit,
        anonScroll,
        anonNoti,
      ],
    },

    {
      id: 3,
      title: "Movie Booking App",
      cover: movieHome,
      repo: "https://github.com/TihongChhiv/Movie-Booking",
      tech: ["Swift", "UIKit", "REST API"],
      desc: "Mobile movie browsing app with trailer playback and cinema listings.",
      features: [
        "Movie listing & detail view",
        "Trailer playback integration",
        "Cinema browser",
        "Favorites system",
      ],
      images: [
        movieHome,
        movieCinema,
        movieFav,
        movieDetail,
        movieTrailer,
        movieUpcoming,
      ],
    },

    {
      id: 4,
      title: "NorWorld Website",
      cover: norHome,
      repo: "https://github.com/TihongChhiv/NORWORLD",
      tech: ["React", "Vite", "MongoDB", "Full-stack (WIP)"],
      desc: "Ongoing e-commerce website project with modern UI and backend integration plan.",
      features: [
        "Modern product UI",
        "Responsive layout",
        "MongoDB backend planning",
        "Scalable architecture",
      ],
      images: [norHome, norDetail],
    },

    {
      id: 5,
      title: "PetShop Website",
      cover: petHome,
      repo: "https://github.com/TihongChhiv/petshop",
      tech: ["React", "Vite", "Frontend"],
      desc: "Frontend pet store website with clean layout and responsive design.",
      features: [
        "Pet listing UI",
        "Responsive design",
        "Component-based layout",
      ],
      images: [petHome, petPage, petContact],
    },

    {
      id: 6,
      title: "Snake & Ladder Java Game",
      cover: snakeHome,
      tech: ["Java", "JavaFX", "OOP", "MVC"],
      desc: "Desktop Snake & Ladder game built using JavaFX with object-oriented design.",
      features: [
        "Two-player mode",
        "Dice rolling system",
        "Snake & ladder mechanics",
        "Graphical UI with JavaFX",
        "Win detection system",
      ],
      images: [
        snakeHome,
        snakeWin,
        snakeColor,
        snakeName,
        snakePlayer,
      ],
    },
  ];

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

      {/* ================= MODAL ================= */}

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

            {/* VIEW CODE BUTTON */}
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
                  alt="project"
                  onClick={() => setPreviewImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= IMAGE PREVIEW ================= */}

      {previewImage && (
        <div
          className={styles.preview_overlay}
          onClick={() => setPreviewImage(null)}
        >
          <div
            className={styles.preview_box}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.preview_close}
              onClick={() => setPreviewImage(null)}
            >
              ✕
            </button>

            <img src={previewImage} alt="preview" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
