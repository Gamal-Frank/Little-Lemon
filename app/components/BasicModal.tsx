import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className=" w-[130px] text-center hover:bg-[#495E57] hover:text-white"
        onClick={handleOpen}
      >
        {!isSignIn ? "Sign Up" : "Sign In"}{" "}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative">
            <button
              onClick={handleClose}
              className=" flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#495E57]"
            >
              <Image src={`/←.png`} width={20} height={20} alt="" />
              <h2 className="font-bold absolute left-9 text-2xl">Back</h2>
            </button>
            {!isSignIn ? (
              <SignUp handleClose={handleClose} />
            ) : (
              <SignIn handleClose={handleClose} />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
