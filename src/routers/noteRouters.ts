import { Router } from "express" ;

import noteControlers from "../controllers/noteControlers" ;
import { Role } from "../enums/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , noteControlers.addNote) ; 

router.get("/all/my" , usersMiddleware([Role.Student]) , noteControlers.getMyNotes) ; 

export default router ;