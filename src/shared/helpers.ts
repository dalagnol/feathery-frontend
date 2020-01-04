import moment from "moment";

export const createMomentInitialiser = (time: string): string =>
  moment(moment().format("YYYY-MM-DD") + ` ${time}`).format(
    `YYYY-MM-DD HH:mm:ss`
  );
