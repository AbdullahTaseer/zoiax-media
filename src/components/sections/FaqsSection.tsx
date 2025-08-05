import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsSection = () => {
  return (
    <div className='px-[5%] max-[769px]:px-4 py-16'>
      <h1 className="text-4xl max-md:text-2xl font-bold text-center text-[#012641] mb-4">
        Frequently asked questions
      </h1>
      <p className="text-center max-w-2xl mx-auto text-sm text-black mb-10">
        Have questions about our support system? We have got you covered! Check out our frequently asked questions below to learn more about how we provide top-notch assistance.
      </p>
      <div className='mt-6 space-y-6 max-w-4xl mx-auto'>
        <Accordion className='space-y-6' type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can other info be added to an invoice?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does billing work?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I change my account email?</AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;