import React from "react";
import {
  INotification,
  MESSAGE_CATEGORIES,
  NOTIFICATION_TYPES,
} from "../../../const";

const ItemLine = ({ label, value }: { label: string; value: any }) => {
  return (
    <li className="flex gap-4">
      <span className="text-gray-800">{label}:</span>
      <h3>{value}</h3>
    </li>
  );
};
export default function LogsItem({
  notification,
}: {
  notification: INotification;
}): JSX.Element {
  return (
    <ul className="my-4">
      <ItemLine
        label={"Category"}
        value={MESSAGE_CATEGORIES[notification.category]}
      />
      <ItemLine
        label={"Type"}
        value={notification.type.map((t) => (
          <span key={t}>{NOTIFICATION_TYPES[t]},</span>
        ))}
      />

      <ItemLine label={"Message"} value={notification.message} />
      <ItemLine label={"Email"} value={notification.fromUserEmail} />
      <ItemLine label={"Date"} value={notification.date.toLocaleString('en-US')} />
    </ul>
  );
}
