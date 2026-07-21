import AcademyForm from "../modals/formSchema.js";

export const submitForm = async (req, res) => {
  try {
    
    const {
      name,
      dob,
      age,
      email,
      gender,
      number,

      gurdian_name,
      gurdian_number,
      relation,
      gurdian_email,

      address,
      city,
      state,
      postal,
      country,

      club_name,
      club_state,
      club_district,

      sports,
      catagory,
      position,
    } = req.body;

    const form = new AcademyForm({
      name,
      dob,
      age,

      email,
      gender,
      number,

      gurdian_name,
      gurdian_number,
      relation,
      gurdian_email,

      address,
      city,
      state,
      postal,
      country,

      club_name,
      club_state,
      club_district,

      sports,
      catagory,
      position,

      profile_pic: req.files?.profile_pic?.[0]?.filename || "",
      aadhar: req.files?.aadhar?.[0]?.filename || "",
      pan: req.files?.pan?.[0]?.filename || "",
      certificate: req.files?.certificate?.[0]?.filename || "",
    });

    await form.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: form,
    });

    // Mongoose Validation Error
  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);

      return res.status(400).json({
        success: false,
        errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get form data
export const getFormData = async (req, res) => {
  try {
    const allUser = await AcademyForm.find();

    return res.status(200).json({
      success: true,
      message: "Form data fetch successfully",
      data: allUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Update your form status
export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validId = await AcademyForm.findById(id);
    if (!validId) {
      return res.status(404).json({
        success: false,
        message: "Id is not valid",
      });
    }
     const updatedForm = await AcademyForm.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedForm) {
      return res.status(404).json({
        success: false,
        message: "Id is not valid",
      });

    }

    return res.status(200).json({
      success: true,
      message: "Status update successfull",
      data: validId,
    });
  } catch (error) {
    c
    return res.status(500).json({
      success: false,
      message: "Id is not valid",
    });
  }
};
