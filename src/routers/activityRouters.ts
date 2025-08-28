import { Router } from "express" ;

import activityControlers from "../controllers/activityControllers";
import { usersMiddleware } from "../middleware/usersMiddleware";
import { Role } from "../common/Role";


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , activityControlers.addActivity) ; 

router.get("/all" , usersMiddleware([Role.Student , Role.Admin]) , activityControlers.getActivities) ; 


export default router ;