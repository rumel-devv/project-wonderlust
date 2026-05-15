'use client'
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({destination}) => {
   const router = useRouter();
    // console.log(destination);
    const {destinationName,_id} = destination ;
    
    const handleDelete = async () => {
       const {data:tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
           authorization:`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(),
      });
        
      const data = await res.json();
       if (res.ok) {
        router.push('/destination');
      }
    
      console.log('data after delete',data);
    }
  return (
    <AlertDialog>
      
      {/* Trigger */}
      <AlertDialog.Trigger>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-xl flex gap-2 items-center hover:bg-red-500 hover:text-white transition-all duration-300">
          <RiDeleteBin6Line />
          Delete
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete this destination?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This action will permanently delete {destinationName}. You cannot undo it.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;