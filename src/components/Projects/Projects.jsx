import React, { useState } from 'react'
import styles from './Projects.module.css'

// ===== KARAOKE =====
import karaokeHome from '../../assets/karaoke-booking/user_homepage.png'
import karaokeLogin from '../../assets/karaoke-booking/login.png'
import karaokeSignup from '../../assets/karaoke-booking/user_signup.png'
import karaokeBooking from '../../assets/karaoke-booking/user-mybooking.png'
import karaokeHour from '../../assets/karaoke-booking/booking_hour.png'
import adminHome from '../../assets/karaoke-booking/admin_homepage.png'
import adminRoom from '../../assets/karaoke-booking/admin_room_manage.png'
import adminCustomer from '../../assets/karaoke-booking/admin_customer_manage.png'
import adminBooking from '../../assets/karaoke-booking/admin_booking_manage.png'
import adminSignup from '../../assets/karaoke-booking/admin_signup.png'

// ===== ANONHUB =====
import anonHome from '../../assets/AnonHub/homepage.png'
import anonLogin from '../../assets/AnonHub/login.png'
import anonSignup from '../../assets/AnonHub/signup.png'
import anonPost from '../../assets/AnonHub/posting.png'
import anonDetail from '../../assets/AnonHub/postdetail.png'
import anonProfile from '../../assets/AnonHub/profilepage.png'
import anonEdit from '../../assets/AnonHub/editprofile.png'
import anonScroll from '../../assets/AnonHub/scrollpage.png'
import anonNoti from '../../assets/AnonHub/noti.png'

// ===== MOVIE =====
import movieHome from '../../assets/movie-booking/homepage.png'
import movieCinema from '../../assets/movie-booking/cinemas.png'
import movieFav from '../../assets/movie-booking/fav.png'
import movieDetail from '../../assets/movie-booking/moviedetail.png'
import movieTrailer from '../../assets/movie-booking/trailer.png'
import movieUpcoming from '../../assets/movie-booking/upcoming.png'

// ===== NORWORLD =====
import norHome from '../../assets/norworld/homepage.png'
import norDetail from '../../assets/norworld/detail page.png'

// ===== PETSHOP =====
import petHome from '../../assets/petshop/homepage.png'
import petPage from '../../assets/petshop/petpage.png'
import petContact from '../../assets/petshop/contact.png'

function Projects() {

  const [activeProject, setActiveProject] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Karaoke Booking System",
      cover: karaokeHome,
      images: [
        karaokeHome, karaokeLogin, karaokeSignup, karaokeBooking,
        karaokeHour, adminHome, adminRoom, adminCustomer,
        adminBooking, adminSignup
      ]
    },
    {
      id: 2,
      title: "AnonHub iOS App",
      cover: anonHome,
      images: [
        anonHome, anonLogin, anonSignup, anonPost,
        anonDetail, anonProfile, anonEdit, anonScroll, anonNoti
      ]
    },
    {
      id: 3,
      title: "Movie Booking App",
      cover: movieHome,
      images: [
        movieHome, movieCinema, movieFav,
        movieDetail, movieTrailer, movieUpcoming
      ]
    },
    {
      id: 4,
      title: "NorWorld Website",
      cover: norHome,
      images: [norHome, norDetail]
    },
    {
      id: 5,
      title: "PetShop Website",
      cover: petHome,
      images: [petHome, petPage, petContact]
    }
  ]

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

            <h2>{activeProject.title}</h2>

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

      {/* FULL IMAGE PREVIEW */}
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
  )
}

export default Projects
