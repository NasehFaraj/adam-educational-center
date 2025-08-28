import { Router } from "express" ;
import multer from "multer";


import fileControlers from "../controllers/fileControllers";
import { Role } from "../common/Role";
import { usersMiddleware } from "../middleware/usersMiddleware";

const router = Router() ;
const upload = multer({ storage: multer.memoryStorage() });

router.put("/" , usersMiddleware([Role.Admin]) , upload.single('file') , fileControlers.uploadFile) ;

router.delete("/" , usersMiddleware([Role.Admin]) , fileControlers.deleteFile) ;

router.get("/" , usersMiddleware([Role.Admin , Role.Student]) , fileControlers.downloadFile) ;


export default router ; 