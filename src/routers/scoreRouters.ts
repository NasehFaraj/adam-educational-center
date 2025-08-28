import { Router } from "express" ;

import scoreControlers from "../controllers/scoreControllers" ;
import { Role } from "../common/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , scoreControlers.addScore) ; 

router.get("/all/my" , usersMiddleware([Role.Student]) , scoreControlers.getMyScores) ; 

export default router ;