import { MiaBaseCrudHttpService } from "@agencycoda/mia-core";
import { MiaField } from "./mia-field";

export class MiaFormConfig {
    fields: Array<MiaField> = [];
    service!: MiaBaseCrudHttpService<any>;
    /** @deprecated Does nothing anymore. Remove all usages until this variable can be deleted */
    errorMessages?: Array<{key: string, message: string}> = [];
    hasSubmit = true;
}
