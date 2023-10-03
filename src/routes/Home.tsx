/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProps } from "../types/user";
import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";
import Loader from "../components/Loader";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);

    try {
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      const data = await res.data;
      console.log(data);
      
      setIsLoading(false);
      const { avatar_url, login, location, followers, following } = data;
      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };
      setUser(userData);
    } catch (error) {
      toast.error("Usuário não encontrado", {});
    }
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {isLoading && <Loader />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Home;
