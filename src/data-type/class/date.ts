import * as cassandra from "cassandra-driver";
import * as moment from "moment";
import { DataTypeValueBase } from "../base/data-type";

export class DateDataTypeValue extends DataTypeValueBase<cassandra.types.LocalDate> {
    public checkValid(value: string): boolean {

        try {
            const val = cassandra.types.LocalDate.fromString(value);
            return val.toString() === value;
        } catch (e) {
            return false;
        }

    }
    public parseValue(value: string) {
        const val = cassandra.types.LocalDate.fromString(value);
        return val;
    }
    protected toString(value: cassandra.types.LocalDate): string {
        return `${value.toString()}`;
    }
    public get stringPlaceholder(): string {
        const s = moment().format("YYYY-MM-DD");
        return `'${s}'`;
    }
}
