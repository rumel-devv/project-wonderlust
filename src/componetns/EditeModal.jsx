"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { FaEdit } from "react-icons/fa";

const EditeModal = ({ destination }) => {
  const router = useRouter();
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
    _id,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedDestination = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedDestination),
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/destination');
      }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal>
        {/* Trigger Button */}
        <Modal.Trigger>
          <button className="border border-black px-4 py-2 rounded-xl flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300">
            <FaEdit />
            Edit
          </button>
        </Modal.Trigger>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="max-w-4xl">
              {/* Close Button */}
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Edit Travel Package</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6 overflow-y-auto max-h-[80vh]">
                <Surface variant="default">
                  <form
                    onSubmit={onSubmit}
                    className="p-3 md:p-8 space-y-6 border border-sky-400 rounded-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField
                          name="destinationName"
                          defaultValue={destinationName}
                          isRequired
                        >
                          <Label>Destination Name</Label>

                          <Input placeholder="Bali Paradise" />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField
                        name="country"
                        defaultValue={country}
                        isRequired
                      >
                        <Label>Country</Label>

                        <Input placeholder="Indonesia" />

                        <FieldError />
                      </TextField>

                      {/* Category */}
                      <div>
                        <Select
                          name="category"
                          placeholder="Select Category"
                          isRequired
                          defaultValue={category}
                        >
                          <Label>Category</Label>

                          <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach">Beach</ListBox.Item>

                              <ListBox.Item id="Mountain">
                                Mountain
                              </ListBox.Item>

                              <ListBox.Item id="City">City</ListBox.Item>

                              <ListBox.Item id="Adventure">
                                Adventure
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label>Price</Label>

                        <Input type="number" placeholder="1200" />

                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        name="duration"
                        defaultValue={duration}
                        isRequired
                      >
                        <Label>Duration</Label>

                        <Input placeholder="7 Days / 6 Nights" />

                        <FieldError />
                      </TextField>

                      {/* Date */}
                      <div className="md:col-span-2">
                        <TextField
                          name="departureDate"
                          defaultValue={departureDate}
                          type="date"
                          isRequired
                        >
                          <Label>Departure Date</Label>

                          <Input type="date" />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image */}
                      <div className="md:col-span-2">
                        <TextField
                          name="imageUrl"
                          defaultValue={imageUrl}
                          isRequired
                        >
                          <Label>Image URL</Label>

                          <Input
                            type="url"
                            placeholder="https://example.com/image.jpg"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          name="description"
                          defaultValue={description}
                          isRequired
                        >
                          <Label>Description</Label>

                          <TextArea placeholder="Write description..." />

                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <Button
                        type="reset"
                        className="w-1/2 bg-red-500 text-white"
                      >
                        Reset
                      </Button>

                      <Button
                        type="submit"
                        className="w-1/2 bg-cyan-500 text-white"
                      >
                        Update Package
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditeModal;
