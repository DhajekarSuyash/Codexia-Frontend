import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/Home.css";

const Home = () => {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="hero-search">
                    <input placeholder="Search notes, collections, and more..." />
                    <button>Search</button>
                </div>

                <h1>
                    Knowledge Shared,  <br />
                    <span>Success Multiplied</span>
                </h1>

                <p class="hero-text">
                    Codexia makes learning simple by providing easy access to notes and study materials.
                    Browse, view, and download resources based on your subjects and needs.
                    Everything you need to study better is just a click away.
                </p>

                <div className="hero-actions">
                    <Link to="/register" className="btn-primary">
                    <i className="fas fa-user-plus"></i> Get Started
                    </Link>
                    <Link to="/login" className="btn-primary btn-outline">
                    <i className="fas fa-right-to-bracket"></i> Sign In
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
