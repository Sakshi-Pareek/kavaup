import React from "react";
import { Logo } from "./Icons";

export default function Preloader() {
  return (
    <>
      <div className="vh-100 position-fixed d-flex justify-content-center align-items-center start-0 right-0 bg_pink w-100">
        <span class="back">
          <span className="text-white p-2">K</span>
          <span className="text-white p-2">A</span>
          <span className="text-white p-2">V</span>
          <span className="text-white p-2">A</span>
          <span className="text-white p-2">U</span>
          <span className="text-white p-2">P</span>
        </span>
      </div>
    </>
  );
}
