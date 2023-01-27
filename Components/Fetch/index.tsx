// import axios from "axios";


// export async function getServerSideProps(props: any) {
//   const {
//     formState: { errors },
//   } = useForm();

//   const register = await axios.get(
//     "http://localhost:3000/api/userfetch",
//     {}
//   );

//   return {
//     props: {
//       register: register.data,
//     },
//   };
// }

// export default function fetch(props: any) {
//   // console.log(props.currencydata)
//   const { register } = props; // this is called array destructuring
//   console.log(register.response[0]);
//   return (
//     <>
//       <div>
        
//           {register.response.map((i: any, v: any) => {
//             return (
//               <form key={v}>
//                    <label htmlFor="username">User Name</label>
//         <input
//           type="text"
//           placeholder="enter your username"
//           {...register("username", { required: true })}
//         />
//         <br />
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter the Email Here"
//           {...register("email", { required: true })}
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           placeholder="Enter the Password "
//           {...register("password", { required: true })}
//         />
//         <br />
//         <br />
//         <label htmlFor="cpassword">Confirm Password</label>
//         <input
//           type="password"
//           placeholder="Confirm your pswd"
//           {...register("cpassword", { required: true })}
//         />
//         <br />
//         <br />
//         <button type="submit">Register</button>
//               </form>
//             );
//           })}
//         {/* <Currency props = {currencydata}/> */}
//       </div>
//     </>
//   );
// }
// function useForm(): { formState: { errors: any; }; } {
//   throw new Error("Function not implemented.");
// }


const fetch = () => {
  return ( 
    <></>
   );
}
 
export default fetch;