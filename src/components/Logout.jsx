import { GoogleLogout } from "react-google-login"

const Logout = () => {
    const onSuccess = () => {
        console.log("Successfull");
    }
  return (
    <div id="signOutButton">
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout