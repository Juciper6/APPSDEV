import Profile from "./components/Profile.jsx"

export default function App() {
  const userData = [
    {
      imgSrc:"/elaina.png",
      name: "Elaina Wandering Witch",
      role: "Witch",
      description: "Once upon a time there was a kid who was once mesmerize by the story of the book about the Witch",
      buttonLabel:"https://wandering-witch.fandom.com/wiki/Elaina",
    },
    {
      imgSrc:"/monica.png",
      name: "Monica Everret",
      role: "Witch",
      description: "Once upon a time there was a kid who was once mesmerize by the story of the book about the Witch",
      buttonLabel:"https://silent-witch.fandom.com/wiki/Monica_Everett",
    },
    {
      imgSrc:"/lucy.png",
      name: "Lucy Maeril",
      role: "Witch",
      description: "Once upon a time there was a kid who was once mesmerize by the story of the book about the Witch",
      buttonLabel:"https://academysurvival.fandom.com/wiki/Lucy_Maeril",
    },
  ]
  return (
    <>
      <Profile userData={userData[0]}/>
      <Profile userData={userData[1]}/>
      <Profile userData={userData[2]}/>

    </>
  )
}


