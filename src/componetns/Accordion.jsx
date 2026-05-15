import { Accordion } from "@heroui/react";
import {
  BiArrowFromLeft,
  BiCalendar,
  BiChevronDown,
  BiCreditCard,
  BiMapPin,
} from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { LuPlaneTakeoff } from "react-icons/lu";

const items = [
  {
    content:
      "You can book your favorite destination by selecting a package, choosing your travel date, and completing the online payment process.",
    icon: <LuPlaneTakeoff />,
    title: "How can I book a trip?",
  },
  {
    content:
      "Yes, you can cancel or modify your booking before the departure date. Cancellation charges may apply depending on the package.",
    icon: <BiCalendar />,
    title: "Can I cancel or change my booking?",
  },
  {
    content:
      "We accept credit cards, debit cards, mobile banking, and secure online payment methods for all bookings.",
    icon: <BiCreditCard />,
    title: "What payment methods do you accept?",
  },
  {
    content:
      "Some travel packages include hotel, transportation, meals, and tour guide services.",
    icon: <FaSuitcaseRolling />,
    title: "What is included in the travel package?",
  },
  {
    content:
      "Yes, we provide experienced local tour guides for most destinations.",
    icon: <BiMapPin />,
    title: "Do you provide tour guides?",
  },
  {
    content:
      "You can request a refund or reschedule your journey if your trip gets canceled.",
    icon: <BiArrowFromLeft />,
    title: "How do I request a refund?",
  },
];

export function AccordionPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-20">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-3">
          Everything you need before booking your next trip
        </p>
      </div>

      {/* Accordion */}
      <Accordion className="space-y-4" variant="splitted">

        {items.map((item, index) => (
          <Accordion.Item
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <Accordion.Heading>
              <Accordion.Trigger className="flex items-center justify-between w-full px-5 py-5 hover:bg-gray-50 transition">

                {/* Left side */}
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>

                  <span className="font-semibold text-gray-800 text-base md:text-lg">
                    {item.title}
                  </span>

                </div>

                {/* Arrow */}
                <Accordion.Indicator>
                  <BiChevronDown className="text-2xl text-gray-500 transition-transform duration-300" />
                </Accordion.Indicator>

              </Accordion.Trigger>
            </Accordion.Heading>

            <Accordion.Panel>
              <Accordion.Body className="px-6 pb-5 text-gray-600 leading-relaxed">
                {item.content}
              </Accordion.Body>
            </Accordion.Panel>

          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}