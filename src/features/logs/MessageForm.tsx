import React, { useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import InputSelect from "../../components/InputSelect";
import { CATEGORIES_OPTIONS, MESSAGE_CATEGORIES } from "../../const";
import InputTextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { sendMessage } from "./logSlice";

export default function MessageForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectRef = useRef<HTMLSelectElement>(null);

  const messageRef = useRef<HTMLSelectElement>(null);
  const handleSendMessage = () => {
    const category: any = selectRef?.current?.value;
    const message = messageRef?.current?.value;
    if (category && message) {
      dispatch(sendMessage(MESSAGE_CATEGORIES[category], message));
    }
  };
  return (
    <div className="w-full px-4 py-2 rounded-lg shadow-md gap-4 bg-gray-400 mx-auto mt-8">
      <div>Logs Form</div>
      <InputSelect
        defaultValue={CATEGORIES_OPTIONS[0].value}
        ref={selectRef}
        options={CATEGORIES_OPTIONS}
        label="Category"
        required
      />
      <InputTextArea ref={messageRef} label="Message" required />
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
}
