import { useForm } from "react-hook-form";
import "./TripDetailsPage.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks";
import { onSubmit } from "../../state/slices/tripDetails.slice";

export interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

function TripDetailsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    },
  });

  return (
    <section className="TripDetailsPage">
      <form
        className="trip-details-form"
        onSubmit={handleSubmit((data) => {
          dispatch(onSubmit(data));
        })}
      >
        <h2>Enter your details here:</h2>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: { value: true, message: "First Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "Last Name is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          {...register("dateOfBirth", {
            required: { value: true, message: "Date of birth is required!" },
          })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required!" },
          })}
        />
        <input
          type="text"
          placeholder="Phone number"
          {...register("phoneNumber", {
            required: { value: true, message: "Phone number is required!" },
          })}
        />
        <div className="error-add-button-div">
          <div>
            {!isValid && isSubmitted ? (
              <div style={{ color: "red" }}>Are fields are required</div>
            ) : null}
          </div>
          <button className="add-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      {isValid && isSubmitted && (
        <div className="display-trip-btn">
          <button
            onClick={() => {
              navigate("/summary");
            }}
          >
            Display Trip Data
          </button>
        </div>
      )}
    </section>
  );
}

export default TripDetailsPage;
