import { Router } from "express" ;

import galleryControlers from "../controllers/galleryControlers" ;
import { Role } from "../enums/Role" ;
import { usersMiddleware } from "../middleware/usersMiddleware" ;


let router = Router() ;


router.put("/" , usersMiddleware([Role.Admin]) , galleryControlers.addPhoto) ; 

router.get("/all" , usersMiddleware([Role.Student]) , galleryControlers.getMyGallery) ; 

export default router ;