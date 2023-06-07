import React, { useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import InputSelect from "../../components/InputSelect";
import { CATEGORIES_OPTIONS, MESSAGE_CATEGORIES } from "../../const";
import InputTextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { sendMessage } from "./logSlice";
import { toast } from "react-toastify";

export default function MessageForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectRef = useRef<HTMLSelectElement>(null);

  const messageRef = useRef<HTMLSelectElement>(null);
  const handleSendMessage = () => {
    const category: any = selectRef?.current?.value;
    const message = messageRef?.current?.value;
    if (category && message) {
      dispatch(sendMessage(MESSAGE_CATEGORIES[category], message));
    } else toast.warning("Fill required fields (*)");
  };
  return (
    <div className="w-full px-4 py-2 rounded-lg shadow-md bg-gray-400 mx-auto mt-8 flex flex-col gap-4">
      <div>Logs Form</div>
      <InputSelect
        defaultValue={CATEGORIES_OPTIONS[0].value}
        ref={selectRef}
        options={CATEGORIES_OPTIONS}
        label="Category*"
        required={true}
      />
      <InputTextArea ref={messageRef} label="Message*" required={true} />
      <div className="w-full md:w-fit">
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
}
