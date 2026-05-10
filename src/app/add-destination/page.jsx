"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const AddDestinationPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(fromData.entries());

  const res = await  fetch('http://localhost:8000/destination',{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(destination)
    })
     const data = await res.json()

    console.log("after gettin daata", data);
  };

  return (
    <div className="w-full md:w-10/12 mx-auto py-4 p-3 md:py-10">
      <h1 className="text-xl font-semibold">Choose Your destination..</h1>
      <form
        onSubmit={onSubmit}
        className="p-3 md:p-10 space-y-4 md:space-y-8 w-full md:w-6/12 mx-auto border border-sky-400 rounded-2xl mt-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label className="text-md font-semibold">
                What is your destination ?
              </Label>
              <Input placeholder="Bali Paradise" className="rounded-md" />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label className="text-md font-semibold">Country</Label>
            <Input placeholder="Indonesia" className="rounded-md" />
            <FieldError />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label className="text-md font-semibold">Category</Label>
              <Select.Trigger className="rounded-md">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">
                    Beach
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Mountain" textValue="Mountain">
                    Mountain
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="City" textValue="City">
                    City
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Adventure" textValue="Adventure">
                    Adventure
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label className="text-md font-semibold">Price (USD)</Label>
            <Input type="number" placeholder="1299" className="rounded-md" />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label className="text-md font-semibold">Duration</Label>
            <Input placeholder="7 Days / 6 Nights" className="rounded-md" />
            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
              <Label className="text-md font-semibold">Departure Date</Label>
              <Input type="date" className="rounded-md" />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label className="text-md font-semibold">Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-md"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2 md:row-span-4">
            <TextField name="description" isRequired>
              <Label className="text-md font-semibold">Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-lg"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 w-full">
  <Button className="w-1/2 rounded-md bg-red-500" type="reset">
    Reset
  </Button>

  <Button
    type="submit"
    variant="outline"
    className="w-1/2 rounded-md bg-cyan-500 text-white"
  >
    Add Travel Package
  </Button>
</div>
      </form>
    </div>
  );
};

export default AddDestinationPage;
