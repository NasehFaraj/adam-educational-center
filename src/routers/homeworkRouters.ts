import { Router } from "express" ;

import homeworkControlers from "../controllers/homeworkControllers" ;
import { Role } from "../common/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , homeworkControlers.addHomework) ; 

router.get("/all/my" , usersMiddleware([Role.Student]) , homeworkControlers.getMyhomeworks) ; 

export default router ;