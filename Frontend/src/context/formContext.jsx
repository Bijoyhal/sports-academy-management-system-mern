import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";
import { PDFDocument } from "pdf-lib";

export const formAuth = createContext();

export const FormProvider = ({ children }) => {
  const [steps, setSteps] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    age: "",
    email: "",
    gender: "",
    number: "",
    gurdian_name: "",
    gurdian_number: "",
    relation: "",
    gurdian_email: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    club_name: "",
    club_state: "",
    club_district: "",
    sports: "",
    catagory: "",
    position: "",
    profile_pic: null,
    aadhar: null,
    pan: null,
    certificate: null,
  });

  // Compress image files
  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 2, // Max file size in MB
      maxWidthOrHeight: 1920, // Max width or height
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        "Original image size:",
        (file.size / 1024 / 1024).toFixed(2),
        "MB",
      );
      console.log(
        "Compressed image size:",
        (compressedFile.size / 1024 / 1024).toFixed(2),
        "MB",
      );
      return compressedFile;
    } catch (error) {
      console.error("Image compression error:", error);
      toast.error("Failed to compress image");
      return file;
    }
  };


  
  //  PDF Compression u
  const compressPDF = async (file) => {
    const fileSizeInMB = file.size / 1024 / 1024;
    console.log("Original PDF size:", fileSizeInMB.toFixed(2), "MB");

    if (fileSizeInMB <= 2) {
      console.log("PDF is already under 2MB, returning as is");
      return file;
    }

    try {
      // Read PDF file
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      // Save with compression
      const compressedPdfBytes = await pdfDoc.save();
      const compressedFile = new File([compressedPdfBytes], file.name, {
        type: "application/pdf",
      });

      const compressedSizeInMB = compressedFile.size / 1024 / 1024;
      console.log("Compressed PDF size:", compressedSizeInMB.toFixed(2), "MB");

      return compressedFile;
    } catch (error) {
      console.error("PDF compression error:", error);
      toast.error("Failed to compress PDF. Please upload a smaller file.");
      return file;
    }
  };

  const handleForm = async (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && files?.[0]) {
      const file = files[0];
      let processedFile = file;

      // Check file type
      if (file.type.startsWith("image/")) {
        // Compress images
        processedFile = await compressImage(file);
      } else if (file.type === "application/pdf") {
        // Handle PDFs
        processedFile = await compressPDF(file);
      } else {
        // Other file types
        const fileSizeInMB = file.size / 1024 / 1024;
        if (fileSizeInMB > 2) {
          toast.error("File must be less than 2MB");
          return;
        }
        console.log("File size:", fileSizeInMB.toFixed(2), "MB");
      }

      setForm((prev) => ({
        ...prev,
        [name]: processedFile,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "file" ? files?.[0] : value,
      }));
    }
  };

  const validateForm = () => {
    // Empty field check
    const emptyField = Object.entries(form).find(
      ([key, value]) => value === "" || value === null || value === undefined,
    );

    if (emptyField) {
      toast.error(`${emptyField[0].replace(/_/g, " ")} is required`);
      return false;
    }

    // Name validation
    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    // Age validation
    const age = Number(form.age);

    if (isNaN(age) || age < 5 || age > 100) {
      toast.error("Age must be between 5 and 100");
      return false;
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Invalid email address");
      return false;
    }

    // Guardian Email validation
    if (!emailRegex.test(form.gurdian_email)) {
      toast.error("Invalid guardian email");
      return false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(form.number)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }

    if (!phoneRegex.test(form.gurdian_number)) {
      toast.error("Guardian phone number must be 10 digits");
      return false;
    }

    // Postal code validation
    const postalRegex = /^[0-9]{6}$/;

    if (!postalRegex.test(form.postal)) {
      toast.error("Postal code must be 6 digits");
      return false;
    }

    return true;
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });
      console.log(formData);
      const response = await axios.post(
        "https://sports-academy-management-system-mern.onrender.com/api/form/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);
      toast.success("Form submitted successfully");
      getForm();
      setForm({
        name: "",
        dob: "",
        age: "",
        email: "",
        gender: "",
        number: "",
        gurdian_name: "",
        gurdian_number: "",
        relation: "",
        gurdian_email: "",
        address: "",
        city: "",
        state: "",
        postal: "",
        country: "",
        club_name: "",
        club_state: "",
        club_district: "",
        sports: "",
        catagory: "",
        position: "",
        profile_pic: null,
        aadhar: null,
        pan: null,
        certificate: null,
      });
      // 🔧 NEW: Clear file inputs from the DOM
      document.getElementById("profile_pic").value = "";
      document.getElementById("aadhar").value = "";
      document.getElementById("pan").value = "";
      document.getElementById("certificate").value = "";
    } catch (error) {
      console.log(error);
    }
  };

  //get all form data

  const [getAll, setGetAll] = useState([]);

  const getForm = async () => {
    try {
      const res = await axios.get("https://sports-academy-management-system-mern.onrender.com/api/form/getAll");
      setGetAll(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  //View
  const [view, setView] = useState(false);
  const [players, setPlayers] = useState(null);

  return (
    <formAuth.Provider
      value={{
        steps,
        setSteps,
        form,
        setForm,
        handleForm,
        formSubmit,
        getAll,
        getForm,
        view,
        setView,
        players,
        setPlayers,
        resetKey,
      }}
    >
      {children}
    </formAuth.Provider>
  );
};
