import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  // Personal Information
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 3,
  },

  dob: {
    type: String,
    required: [true, "Date of Birth is required"],
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: 5,
    max: 100,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Invalid email"],
  },

  gender: {
    type: String,
    required: [true, "Gender is required"],
  },

  number: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[0-9]{10}$/, "Invalid phone number"],
  },
  status: {
    type: String,
    default: "Pending",
  },

  // Guardian Information
  gurdian_name: {
    type: String,
    required: [true, "Guardian name is required"],
  },

  gurdian_number: {
    type: String,
    required: [true, "Guardian number is required"],
    match: [/^[0-9]{10}$/, "Invalid guardian number"],
  },

  relation: {
    type: String,
    required: [true, "Relation is required"],
  },

  gurdian_email: {
    type: String,
    required: [true, "Guardian email is required"],
    match: [/^\S+@\S+\.\S+$/, "Invalid email"],
  },

  // Address
  address: {
    type: String,
    required: [true, "Address is required"],
  },

  city: {
    type: String,
    required: [true, "City is required"],
  },

  state: {
    type: String,
    required: [true, "State is required"],
  },

  postal: {
    type: String,
    required: [true, "Postal code is required"],
  },

  country: {
    type: String,
    required: [true, "Country is required"],
  },

  // Club Details
  club_name: {
    type: String,
    required: [true, "Club name is required"],
  },

  club_state: {
    type: String,
    required: [true, "Club state is required"],
  },

  club_district: {
    type: String,
    required: [true, "Club district is required"],
  },

  // Sports Details
  sports: {
    type: String,
    required: [true, "Sports is required"],
  },

  catagory: {
    type: String,
    required: [true, "Category is required"],
  },

  position: {
    type: String,
    required: [true, "Position is required"],
  },

  // Documents
  profile_pic: {
    type: String,
    required: [true, "Profile picture is required"],
  },

  aadhar: {
    type: String,
    required: [true, "Aadhar card is required"],
  },

  pan: {
    type: String,
    required: [true, "PAN card is required"],
  },

  certificate: {
    type: String,
    required: [true, "Certificate is required"],
  },
});

export default mongoose.model("AcademyForm", formSchema);
