import { Router } from "express";


import quizControlers from "../controllers/quizControlers";
import { Role } from "../common/Role";
import { usersMiddleware } from "../middleware/usersMiddleware" ;

const router = Router() ;

router.put("/quiz" , usersMiddleware([Role.Admin]) , quizControlers.addQuiz) ;

router.get("/quiz/all" , usersMiddleware([Role.Admin , Role.Student]) , quizControlers.getQuizzes) ;

router.get("/quiz" , usersMiddleware([Role.Admin , Role.Student]) , quizControlers.getQuiz) ;

router.get("/quiz/number" , usersMiddleware([Role.Admin , Role.Student]) , quizControlers.getNumberOfQuizes) ;;

export default router ;