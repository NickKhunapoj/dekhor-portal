"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactStars from "react-stars";
import "./style.css";
import axios from "axios";
import { useParams } from "next/navigation";

//im dumb
import {
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_BASE_API_URL,
  NEXT_PUBLIC_BASE_WEB_PATH
} from "../../../../config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export default function DormReview() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [reviewForm, setReviewForm] = useState({
    stars: 0,
    short_review: "",
    review: "",
  });
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then((result) => {
      setSession(result.data.session.access_token);
    });
  }, []);

  const handleInputChange = (e) => {
    const { className, value } = e.target;
    setReviewForm((prevData) => ({
      ...prevData,
      [className]: value,
    }));
  };

  const ratingChanged = (newRating) => {
    setReviewForm((prevData) => ({
      ...prevData,
      stars: newRating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!reviewForm.stars || !reviewForm.short_review) {
      alert("Please fill in all fields");
      return;
    }
  
    // Check if session token is available
    if (!session) {
      alert("Authentication token is missing");
      return;
    }
  
    axios.post(
      `${NEXT_PUBLIC_BASE_API_URL}/dorms/${params.id}/review`,
      {
        ...reviewForm,
      },
      {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      }
    ).then(response => {
      if (response.status === 201) {
        // Review added successfully
        alert("Review added successfully");
        // Redirect to dorm detail page
        window.location.href = `${NEXT_PUBLIC_BASE_WEB_PATH}/detail/${params.id}`;
      }
    }).catch(error => {
      if (error.response) {
        if (error.response.status === 409) {
          // Conflict error
          alert("Cannot add review due to conflicts");
        } else {
          // Other errors
          alert("An error occurred while adding the review");
        }
      } else {
        // Network errors
        alert("Network error occurred, please try again");
      }
    });
  };  

  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_BASE_API_URL}/dorms/${params.id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Image alt="logo" src={`${NEXT_PUBLIC_BASE_WEB_PATH}/images/logo.png`} height={70} width={80} className="loading-image spinning" />
      </div>
    );
  }

  return (
    <div className="container">
      {/* dorm name */}
      <div className="titlecontainer">
        <div className="title">
          <h1>Review {data.name}</h1>
        </div>
      </div>

      {/* reviews and ratings */}
      <div className="reviewandrating">
        {/* reviews and ratings */}
        <div className="reviews">
          <div className="summaryreview">
            <h3>Summarize your experience in a sentence.</h3>
            <textarea
              name="short_review"
              className="short_review"
              placeholder="Your Summary..."
              cols="70"
              rows="1"
              value={reviewForm.short_review}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="detailreview">
            <h3>Tell us about your detailed experience.</h3>
            <textarea
              type="text"
              className="review"
              name="review"
              placeholder="Your Detailed Experience..."
              cols="70"
              rows="8"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* ratings */}
        <div className="ratings">
          <div className="startext">
            <h3>Give this property a star.</h3>
            {/* stars logic here */}
            <ReactStars
              className="stars"
              count={5}
              size={40}
              value={reviewForm.stars}
              half={false}
              color2={"#ffd700"}
              onChange={ratingChanged}
              required
            />
          </div>
          <div className="reviewButtonContainer">
            <button className="reviewButton" onClick={handleSubmit}>
              Review Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}