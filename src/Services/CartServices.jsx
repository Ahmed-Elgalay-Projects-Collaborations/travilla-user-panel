// import axios from "axios";
// import { Bounce, toast } from "react-toastify";

// export default function addProductToCart(productId) {
//     axios
//       .post(
//         "https://ecommerce.routemisr.com/api/v1/cart",
//         {
//           productId,
//         },
//         {
//           headers: {
//             token: localStorage.getItem("token"),
//           },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: false,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           transition: Bounce,
//         });

//         console.log(res.data);
        
//       })
//       .catch((err) => {
//         console.log(err);
//       });
  
//     // console.log(localStorage.getItem("token"));
//   }
  
