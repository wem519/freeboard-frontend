import { Calendar, DatePicker } from "antd";

export default function Library() {
  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }

  return <Calendar onPanelChange={onPanelChange} />;
}
