import React, { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import db from "../firebase/firebase"

const Login = () => {
  console.log("willie")

  const [username, setUsername] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form className="inputs">
      <input
        name="username"
        placeholder="Username"
        className="form-input"
        onChange={(event) => {
          setUsername(event.target.value)
        }}
        value={username}
      />
      <input
        name="company"
        placeholder="Company"
        className="form-input"
        onChange={(event) => {
          setCompany(event.target.value)
        }}
        value={company}
      />
      <input
        name="email"
        placeholder="Email"
        className="form-input"
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        value={email}
      />
      <button
        onClick={async (event) => {
          event.preventDefault()
          await addDoc(collection(db, "users"), {
            username: username,
            company: company,
            email: email,
          })
          setUsername("")
          setCompany("")
          setEmail("")
        }}
        className="enter-button"
      >
        Begin
      </button>
    </form>
  )
}

export default Login
