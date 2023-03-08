import React from "react";

export default function Grid() {
  const style = "my-6 w-80 h-52 bg-violet-500";
  return (
    <div
      id="grid"
      className="mt-6 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center"
    >
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
      <div className={style}></div>
    </div>
  );
}
