import express from "express";
import { getFormData, submitForm, updateStatus } from "../controllers/fromController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/submit",
    upload.fields([
        {
            name: "profile_pic",
            maxCount: 1
        },
        {
            name: "aadhar",
            maxCount: 1
        },
        {
            name: "pan",
            maxCount: 1
        },
        {
            name: "certificate",
            maxCount: 1
        }
    ]),
    submitForm
);


router.get('/getAll',getFormData);
router.put('/updateStatus/:id',updateStatus)

export default router;