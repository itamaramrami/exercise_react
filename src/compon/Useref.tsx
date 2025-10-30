import { useRef } from "react";

export default function InputFocus() {
  // הגדרה: ref שמצביע על אלמנט מסוג HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // אם האלמנט קיים, נפעיל עליו focus
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="כתוב כאן..." />
      <button onClick={handleFocus}>תמקד בשדה</button>
      <p>{inputRef.current.value}</p>
    </div>
  );
}