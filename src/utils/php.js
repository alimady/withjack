 import  Axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// const token = localStorage.getItem("token");
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
const axios = Axios.create({
  headers: {
       'Accept': 'application/json',
  },
  baseURL:"http://127.0.0.1:8000/api"
});

axios.interceptors.request.use((config) => {
const token = localStorage.getItem("token");
if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}

return config;
});

export const RegisterUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/register", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

// export const LoginUser =  async(data) => {
//         return axios
//         .post("/login", data)
//         .then((response) => {
//           return response
//          })
//         .catch((e) => {
//           return e
//          });
//       }

export const LoginUser = (data) => {
  return new Promise((resolve, reject) => {
      axios
      .post("/login", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const uploadProfile = (image) => {
  const formData = new FormData();
  formData.append("profile_mage", image);
  formData.append("_method", "PUT");
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
     // Authorization: `Bearer ${token}`,
    },
  };
 
  return new Promise((resolve, reject) => {
    axios
      .post("update/profile", formData, config)
      .then((response) => {
         resolve(response)
      })
      .catch((error) => {
        reject(error)
      });
  });
};

export const fetchPosts = () => {
  return new Promise((done, fail) => {
    axios
      .get("/posts")
      .then((response) => {
        done(response.data);
      })
      .catch((error) => {
        fail(error.data);
      });
  });
};
