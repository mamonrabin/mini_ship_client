import React from "react";

const CopyRight = () => {
  return (
    <div className="bg-[#EFEFEF] flex items-center justify-between Container py-3 border-t border-[#262626]/10">
      <p className="sm:text-sm text-[10px] text-[#262626]/85">
       © 2026 titaswebs.vercel.app | All Rights Reserved.
      </p>
      <p className="sm:text-sm text-[10px] text-[#262626]/85">
        Develop by <span className="cursor-pointer">Titasweb</span>
      </p>
    </div>
  );
};

export default CopyRight;