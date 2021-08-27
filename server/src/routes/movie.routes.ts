import { Router } from "express";
import MovieController from '../controller/movies.controller';


const router: Router = Router();
router.get('/movies', MovieController.fetchMovies)

export default router;