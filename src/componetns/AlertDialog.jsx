"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";

const DeleteDialog = ({ bookingId }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json()
    window.location.reload()
  };

  return (
    <AlertDialog>
      {/* Trigger Button */}
      <AlertDialog.Trigger>
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-4 py-2 rounded-lg">
          <MdDelete size={20} />
          Cancel
        </button>
      </AlertDialog.Trigger>

      {/* Dialog */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel Booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This booking will be permanently removed. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>

              <Button  onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDialog;
