import express from "express";
import { sendEmail } from "../controllers/contactController.js";

const router = express.Router();


router.post('/send', sendEmail);
module.exports = router;