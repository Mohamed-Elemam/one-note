import { Router } from "express";
import * as nc from "./note.controller.js";
import { errorHandling } from "../../../utils/errorhandling.js";
import { auth } from "../../middlewares/auth.js";

const router = Router();


router.route('/')
.post( auth, errorHandling(nc.addNote))
.put( auth, errorHandling(nc.updateNote))
.delete( auth, errorHandling(nc.deleteNote))
.get( auth, errorHandling(nc.getUserNotes))

export default router;
