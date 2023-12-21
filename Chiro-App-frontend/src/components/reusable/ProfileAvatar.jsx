import { Avatar } from "@mui/material";

function getInitials(name) {
  const nameArray = name.split(" "); // Split the name into words
  const initials = nameArray.map((word) => word[0]); // Get the first letter of each word
  return initials.join(""); // Join the initials to form the full initials
}

function ProfileAvatar({ name }) {
  const initials = getInitials(name);

  return (
    <Avatar sx={{ width: 200, height: 200, fontSize: 100 }}>{initials}</Avatar>
  );
}

export default ProfileAvatar;
