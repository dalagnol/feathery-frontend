import moment from "moment";

export const createMomentInitialiser = (time: string): string =>
  moment(moment().format("YYYY-MM-DD") + ` ${time}`).format(
    `YYYY-MM-DD HH:mm:ss`
  );

export const timeIsBetween = (
  lowerLimit: string,
  upperLimit: string,
  momentInTime: any = moment()
) =>
  momentInTime.isAfter(createMomentInitialiser(lowerLimit)) &&
  momentInTime.isBefore(createMomentInitialiser(upperLimit));
