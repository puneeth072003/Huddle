import { useState } from "react";
import { BACKEND_URI } from "../../config";

const Keywords = () => {
  const [arr, setArr] = useState([]);

  fetch(`${BACKEND_URI}/api/v1/key`).then((res) => setArr(res));

  return (
    <div className="flex flex-col justify-center items-center gap-[0.75rem] before:content-[''] after:content-['']">
      <h1 className="text-center text-[#FF007A] font-['Cairo'] text-[2.5rem] py-[0.25rem] font-[600]" onClick={location.href=`${BACKEND_URI}/api/v1/key`}>
        Transcription
      </h1>
      <ol>
        {arr.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ol>
    </div>
  );
};

export default Keywords;
