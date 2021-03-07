import { EntityRepository, Repository } from "typeorm";
import { AddPeopleModel } from "../models/AddPeopleModel";

@EntityRepository(AddPeopleModel)
class AddPeopleRepository extends Repository<AddPeopleModel> {}

export { AddPeopleRepository };