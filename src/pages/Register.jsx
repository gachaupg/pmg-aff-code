// import { Email } from "@mui/icons-material";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Register() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h5>Accelerate your revenue and monetize your traffic.</h5>
        <ul className="reg-text">
          <p>Exclusive offers across varied niches</p>
          <p>Weekly guaranteed payments (also in BTC/Fiat/USTD)</p>
          <p>Dedicated account managers</p>
          <p>Real time dashboars to track performance</p>
          <p>Advanced optimization techniques to improve revenue</p>
        </ul>
      </div>
      <form id="form" className="text-center contact-form">
        <h2>Register </h2>
        <MDBInput label="Full Name" v-model="name" wrapperClass="mb-4" />
        <MDBInput
          type="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Phone Number"
          type="number"
          v-model="phone"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Comapny Name"
          type="text"
          v-model="company"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Company website"
          type="text"
          v-model="web"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Password"
          type="password"
          v-model="password"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Messenger Tool"
          type="text"
          v-model="password"
          wrapperClass="mb-4"
        />
        <MDBInput
          label="Messenger Account Name"
          type="text"
          v-model="password"
          wrapperClass="mb-4"
        />
        <p>Have an account? login</p>
        <MDBBtn color="info" block className="my-4">
          Register
        </MDBBtn>{" "}
      </form>
    </div>
  );
}
