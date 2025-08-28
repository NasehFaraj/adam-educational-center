import { Router } from "express" ;

import activityControlers from "../controllers/activityControllers";
import { usersMiddleware } from "../middleware/usersMiddleware";
import { Role } from "../common/Role";


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , activityControlers.addActivity) ; 

router.get("/" , usersMiddleware([Role.Admin , Role.Student]) , activityControlers.addActivity) ; 


export default router ;