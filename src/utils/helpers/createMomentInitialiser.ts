import moment from "moment";

export default function createMomentInitialiser(time: string): string {
  return moment(moment().format("YYYY-MM-DD") + ` ${time}`).format(
    `YYYY-MM-DD HH:mm:ss`
  );
}
