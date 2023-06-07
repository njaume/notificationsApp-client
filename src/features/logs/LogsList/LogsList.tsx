import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { fetchLogs, selectLogs } from "../logSlice";
import { INotification } from "../../../const";
import LogsItem from "./LogItem";

export default function LogsList(): JSX.Element {
  const logs = useAppSelector(selectLogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLogs());
  }, []);

  return (
    <div>
      <div className="w-full px-4 py-2 rounded-lg shadow-md items-center justify-center gap-4 bg-gray-400 mx-auto mt-8">
        Logs List
        {logs?.map((log: INotification) => (
          <LogsItem notification={log} key={`${log.date}`}/>
        ))}
      </div>
    </div>
  );
}
