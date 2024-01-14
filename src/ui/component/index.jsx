import React from "react";

const style = {
  container: "flex flex-col items-start gap-4 group",
  label: "group-hover:bg-red-500"
}

export const Field = ({ error, label, placeholder, type }) => {
  return (
    <form className={style.container} disabled>
      <label htmlFor={label} className={style.label}>{label}</label>
      <input id={label} type={type || "text"} placeholder={placeholder} />
      <button type="button" className="btn">sdfdsf</button>
      {error && <p className="text-red-500 text-primary btn">{error}</p>}
    </form>
  );
}
