import React from "react";
import { Avatar as AvatarUI } from "@heroui/react";
export default function Avatar() {
  return (
    <div className=" relative container  mt-8">
      <div className="flex items-center justify-center  ">
        <AvatarUI
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <AvatarUI
          className="ms-[-15px]"
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <AvatarUI
          className="ms-[-15px]"
          size="md"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <AvatarUI
          className="ms-[-15px]"
          size="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <AvatarUI
          className="ms-[-15px]"
          size="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <p className="text-center text-xl font-bold text-white">
          <span className="text-red-500 me-4 ms-2 font-bold text-3xl">
            +1.5M
          </span>
          Clients All Over the World{" "}
        </p>
      </div>
    </div>
  );
}
