import { Router } from "express" ;

import userControlers from "../controllers/userControlers" ;
import { Role } from "../enums/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , userControlers.addUser) ; 


export default router ;