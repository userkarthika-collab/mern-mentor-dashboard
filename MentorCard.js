import React from 'react';

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <img src={mentor.profilePicture} alt={mentor.name} />
      <h3>{mentor.name}</h3>
      <p>{mentor.specialization}</p>
      <p>Tasks Completed: {mentor.tasksCompleted}</p>
      <p>Rating: {mentor.rating} ({mentor.reviews} reviews)</p>
    </div>
  );
};

export default MentorCard;