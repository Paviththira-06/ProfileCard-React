import { useState } from "react";

function ProfileCard({ name, age, bio, image }) {
  const [likes, setLikes] = useState(0);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "16px",
    padding: "12px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.2s",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "3px solid #4CAF50"
  };

  const buttonStyle = {
    padding: "6px 12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.2s",
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={image} alt={name} style={imageStyle} />
      <h3 style={{ margin: "8px 0", fontSize: "1.2rem" }}>{name}</h3>
      <p style={{ margin: "4px 0", color: "#555" }}><strong>Age:</strong> {age}</p>
      <p style={{ margin: "4px 0", color: "#666", fontSize: "0.9rem" }}>{bio}</p>
      <button style={buttonStyle} onClick={handleLike}>
        ❤️ Like {likes > 0 && `(${likes})`}
      </button>
    </div>
  );
}

export default ProfileCard;
