import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/user/home";
import loginimg from "../images/navimages/user.png";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="bg-gray-900 py-4 sticky top-0">
          <div class="container mx-auto flex justify-between items-center space-x-6">
            <div class="w-12"></div>
            <a href="#" class="text-white text-3xl font-bold">
              My Company
            </a>
            <div class="hidden md:flex space-x-6">
              <a href="#" class="text-white hover:text-gray-400">
                Home
              </a>
              <a href="#" class="text-white hover:text-gray-400">
                About
              </a>
              <a href="#" class="text-white hover:text-gray-400">
                Services
              </a>
              <a href="#" class="text-white hover:text-gray-400">
                Portfolio
              </a>
              <a href="#" class="text-white hover:text-gray-400">
                Contact
              </a>
            </div>
            <div class="w-12"></div>
            {/* <div class="md:hidden"> */}
            <img src={loginimg} alt="" className="w-10 left-10" srcset="" />
            {/* </div> */}
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
