"use client";

import React, { useState } from "react";
import { Input } from "@/src/app/components/ui/Input";
import { Textarea } from "@/src/app/components/ui/Textarea";
import { Button } from "../ui/Button";
import emailjs from "@emailjs/browser";
import { toast } from "@/src/app/components/hooks/useToast";
import { Highlighter } from "../animations/Highlighter";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formState.email && formState.message) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          e.currentTarget,
          process.env.NEXT_PUBLIC_USER_ID as string,
        )
        .then(
          () => {
            toast({
              title: "Message sent successfully",
              description:
                "Thank you for reaching out. I'll get back to you soon!",
            });
            setIsLoading(false);
            setFormState({ name: "", email: "", message: "" });
          },
          (error) => {
            toast({
              title: "Failed to send message. Please try again.",
              description: error.text,
              variant: "destructive",
            });
            setIsLoading(false);
          },
        );
    } else {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-24 min-h-screen">
      <h2 className="italic font-medium text-[32px] text-center">
        Let&apos;s Connect.
      </h2>
      <div className="flex w-full justify-between h-full gap-32">
        <form
          onSubmit={sendEmail}
          className="space-y-4 flex flex-col gap-4 justify-center h-full w-full flex-1"
        >
          <div className="flex flex-col gap-2 w-full font-archivo font-semibold">
            <h2 className="italic font-medium text-[32px]">Contact Me</h2>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
              className="w-full resize-none bg-transparent rounded-lg"
            />
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formState.email}
              onChange={handleChange}
              className="w-full resize-none bg-transparent rounded-lg"
            />
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="w-full resize-none bg-transparent rounded-lg"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="self-start rounded-lg hover:text-secondary dark:hover:text-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Sending your message..." : "Send Message →"}
          </Button>
        </form>
        <div className="flex-1 font-archivo">
          <p className="text-5xl font-medium italic mb-5">
            Let&apos;s create something great.
          </p>
          <p className="text-8xl font-extrabold">
            <Highlighter
              action="underline"
              padding={20}
              color="#00C3D0"
              strokeWidth={5}
              isView={true}
            >
              Together
            </Highlighter>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
