import { Router } from "express";
import { joiValidator } from "iyasunday";
import validation from "./validation";
import * as controller from './controller';

const route = Router();

route.post(
    "/create-vacine",
    joiValidator(validation.create),
    controller.create
);

route.get(
    "/vacine-summary",
    joiValidator(validation.list),
    controller.list
);

export default route;