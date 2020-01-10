import moment from "moment";
import createMomentInitialiser from "./createMomentInitialiser";

export default function timeIsBetween(
  lowerLimit: string,
  upperLimit: string,
  momentInTime: any = moment()
): boolean {
  return (
    momentInTime.isAfter(createMomentInitialiser(lowerLimit)) &&
    momentInTime.isBefore(createMomentInitialiser(upperLimit))
  );
}
