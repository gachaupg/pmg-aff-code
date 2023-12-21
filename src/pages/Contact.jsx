// import { Email } from "@mui/icons-material";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoSkype } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function App() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h5>
          Our experienced team are just one click away, feel free to contact us.
          If you have any questions or need assistance in setting up an account
        </h5>
        <div>
        <p><MdOutlineEmail size={36}/> help@gmail.com</p>
        <p><IoLogoSkype size={36}/> skype</p>
        <p><CiLocationOn size={36}/> Lodon , uk</p>
        </div>
      </div>
      <form
        id="form"
        className="text-center contact-form"
        
      >
        <h2>Contact us</h2>
        <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />
        <MDBInput
          type="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
        />
        <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />
        <MDBTextArea wrapperClass="mb-4" label="Message" />
        <MDBCheckbox
          wrapperClass="d-flex justify-content-center"
          label="Send me copy"
        />
        <MDBBtn color="info" block className="my-4">
          Send
        </MDBBtn>{" "}
      </form>
    </div>
  );
}
