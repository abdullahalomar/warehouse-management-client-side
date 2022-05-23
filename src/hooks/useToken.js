import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://fathomless-temple-57796.herokuapp.com/login', { email });
            setToken(data.Token);
            localStorage.setItem('Token', data.Token);
            }
        }
        getToken();
    }, [user])
    return [token];
}

export default useToken;