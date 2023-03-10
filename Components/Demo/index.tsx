import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any) => {
    const data = [
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
    ];
    axios
      .post("http://localhost:3001/api/usercreate", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
//     axios.get('http://localhost:3000/api/userfetch').then(response => {
//     console.log(response.data);
// });
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          placeholder="enter your username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>} <br />
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter the Email Here"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>} <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter the Password "
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <br />
        <br />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your pswd"
          {...register("cpassword", { required: true })}
        />
        {errors.c_password && <span>This field is required</span>}
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
