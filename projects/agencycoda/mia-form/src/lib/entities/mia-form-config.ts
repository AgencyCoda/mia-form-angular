import { MiaBaseCrudHttpService } from "@agencycoda/mia-core-jv";
import { MiaField } from "./mia-field";

export class MiaFormConfig {
    fields: Array<MiaField> = [];
    service!: MiaBaseCrudHttpService<any>;
    hasSubmit = true;
}
