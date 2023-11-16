import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FacebookLogin from "@greatsumini/react-facebook-login";

function App() {
  // const responseFacebook = async (response) => {
  //   if (response.status === "unknown") {
  //     window.location.reload(false);
  //   }

  //   let pageTokenRes = await axios.get(
  //     `https://graph.facebook.com/${response.userID}/accounts?access_token=${response.accessToken}`
  //   );

  //   let userPages = pageTokenRes.data.data;
  //   let savedUser = {
  //     name: response.name,
  //     userId: response.userID,
  //     accessToken: response.accessToken,
  //     profilepictureurl: response.picture.data.url,
  //     pages: userPages,
  //   };
  //   // setFbResponse(savedUser.data);

  //   localStorage.setItem("userData", JSON.stringify(savedUser));

  //   let now = new Date().getTime();
  //   localStorage.setItem("setupTime", now);

  //   let pageTokens = [];
  //   userPages.forEach((page) => {
  //     pageTokens.push(page.access_token);
  //   });
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <FacebookLogin
          appId="1542339499918746"
          onSuccess={(response) => {
            console.log("Login Success!", response);
          }}
          onFail={(error) => {
            console.log("Login Failed!", error);
          }}
          onProfileSuccess={(response) => {
            console.log("Get Profile Success!", response);
          }}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
