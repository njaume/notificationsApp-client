import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectStatus } from "./logSlice";
import MessageForm from "./MessageForm";
import LogsList from "./LogsList/LogsList";

export default function Logs(): JSX.Element {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();


  return (
    <div className="w-full">
      <MessageForm />
      <LogsList />
    </div>
  );
}
