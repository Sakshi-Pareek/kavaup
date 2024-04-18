"use client";
import Image from "next/image";
import { Tickicon } from "./Icons";

export default function Helpers(props) {
  return (
    <>
      <div className="ps-lg-5">
        <Image
          src="/assets/images/png/setupaccount.png"
          alt="account"
          width={605}
          height={490}
          className="mb-4 w-100 h-100"
        />
        <p className="fw-semibold fs_xlg text_black02 lh_125 pe-xxl-5 pt-2 text-lg-start text-center">
          Create a <span>{props.heading} </span> app for your online platform.
        </p>
        <p className="text_grey fw-normal fs_sm lh_178 pe-xxl-5 mb-xxl-4 mb-3 pb-xxl-2 text-lg-start text-center">
          Take your <span>{props.content} </span> to a new level by creating an app with an online
          platform.
        </p>
        <ul className="d-flex flex-column gap-xxl-3 gap-2 ps-0 mb-0">
          <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
            <Tickicon />
            Mobile App Can Increase Sales.
          </li>
          <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
            <Tickicon />
            Compete with Larger Businesses.
          </li>
          <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
            <Tickicon />
            Simplify the Buyer Journey.
          </li>
          <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
            <Tickicon />
            Build Customer Loyalty
          </li>
          <li className="fw-normal fs_sm text_grey lh_178 d-flex gap-3">
            <Tickicon />
            Create a Direct Marketing Channel
          </li>
        </ul>
      </div>
    </>
  );
}
